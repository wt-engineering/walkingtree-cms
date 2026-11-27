-- Walking Tree CMS: initial schema

create extension if not exists "pgcrypto";

-- ---------- roles ----------
create type user_role as enum ('admin', 'editor', 'viewer');
create type content_status as enum ('draft', 'published');

create table profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text,
  role user_role not null default 'viewer',
  created_at timestamptz not null default now()
);

-- new auth users get a viewer profile; the first user becomes admin
create or replace function handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into profiles (user_id, email, role)
  values (new.id, new.email,
    case when (select count(*) from profiles) = 0 then 'admin'::user_role else 'viewer'::user_role end);
  return new;
end $$;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function handle_new_user();

create or replace function current_role_is(roles user_role[]) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from profiles where user_id = auth.uid() and role = any(roles));
$$;

-- ---------- media ----------
create table media (
  id uuid primary key default gen_random_uuid(),
  path text not null unique,            -- path inside the 'media' storage bucket
  kind text not null check (kind in ('image','video','file')),
  mime_type text,
  width int,
  height int,
  size_bytes bigint,
  alt text,
  focal_x real,                         -- 0..1
  focal_y real,
  mobile_variant_id uuid references media(id) on delete set null,
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now()
);

-- ---------- pages (page-builder) ----------
-- type maps to a route family, e.g. home, design_studio, direct_to_consumer,
-- creative_process, our_story, csr, people, culture_careers, contact, generic
create table pages (
  id uuid primary key default gen_random_uuid(),
  type text not null,
  slug text not null,
  path text not null unique,            -- full public path, e.g. /business-to-business/design-studio-india
  title text not null,
  status content_status not null default 'draft',
  hero jsonb not null default '{}'::jsonb,
  seo jsonb not null default '{}'::jsonb,
  sections jsonb not null default '[]'::jsonb,   -- [{ id, type, data }]
  locale text not null default 'en',
  published_at timestamptz,
  updated_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index pages_status_idx on pages(status);

create table page_versions (
  id uuid primary key default gen_random_uuid(),
  page_id uuid not null references pages(id) on delete cascade,
  snapshot jsonb not null,
  note text,
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now()
);
create index page_versions_page_idx on page_versions(page_id, created_at desc);

-- ---------- articles ----------
create table article_categories (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  seo jsonb not null default '{}'::jsonb
);

create table articles (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  status content_status not null default 'draft',
  seo jsonb not null default '{}'::jsonb,
  excerpt text,
  description text,
  author text,
  label text,
  sort_order int,
  category_page_order int,
  images jsonb not null default '{}'::jsonb,  -- landscape, square, portrait refs to media ids
  content jsonb not null default '[]'::jsonb, -- article blocks
  next_article_slug text,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table article_category_map (
  article_id uuid references articles(id) on delete cascade,
  category_id uuid references article_categories(id) on delete cascade,
  primary key (article_id, category_id)
);

-- ---------- careers ----------
create table departments (
  id uuid primary key default gen_random_uuid(),
  name text not null unique
);

create table job_openings (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  department_id uuid references departments(id),
  title_line_1 text,
  title_line_2 text,
  short_description text,
  location text,
  description text,
  sections jsonb not null default '[]'::jsonb,  -- heading + bullet points groups
  status content_status not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------- site-wide ----------
create table navigation (
  id text primary key default 'main',
  items jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

create table site_settings (
  id text primary key default 'global',
  data jsonb not null default '{}'::jsonb,       -- footer, social, contact, default SEO
  updated_at timestamptz not null default now()
);

create table redirects (
  id uuid primary key default gen_random_uuid(),
  source text not null unique,
  destination text not null,
  permanent boolean not null default true
);

create table form_submissions (
  id uuid primary key default gen_random_uuid(),
  form text not null,                            -- contact | job_application
  payload jsonb not null,
  created_at timestamptz not null default now()
);

-- ---------- updated_at trigger ----------
create or replace function touch_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;
create trigger pages_touch before update on pages for each row execute function touch_updated_at();
create trigger articles_touch before update on articles for each row execute function touch_updated_at();
create trigger jobs_touch before update on job_openings for each row execute function touch_updated_at();

-- ---------- row level security ----------
alter table profiles enable row level security;
alter table media enable row level security;
alter table pages enable row level security;
alter table page_versions enable row level security;
alter table article_categories enable row level security;
alter table articles enable row level security;
alter table article_category_map enable row level security;
alter table departments enable row level security;
alter table job_openings enable row level security;
alter table navigation enable row level security;
alter table site_settings enable row level security;
alter table redirects enable row level security;
alter table form_submissions enable row level security;

-- profiles: users read their own; admins manage all
create policy profiles_self on profiles for select using (user_id = auth.uid() or current_role_is('{admin}'));
create policy profiles_admin on profiles for all using (current_role_is('{admin}')) with check (current_role_is('{admin}'));

-- public can read published content; staff can read everything
create policy pages_public_read on pages for select using (status = 'published' or current_role_is('{admin,editor,viewer}'));
create policy articles_public_read on articles for select using (status = 'published' or current_role_is('{admin,editor,viewer}'));
create policy jobs_public_read on job_openings for select using (status = 'published' or current_role_is('{admin,editor,viewer}'));

-- public reads of reference data
create policy cats_read on article_categories for select using (true);
create policy catmap_read on article_category_map for select using (true);
create policy dept_read on departments for select using (true);
create policy nav_read on navigation for select using (true);
create policy settings_read on site_settings for select using (true);
create policy media_read on media for select using (true);
create policy redirects_read on redirects for select using (true);

-- staff read-only on versions and submissions
create policy versions_read on page_versions for select using (current_role_is('{admin,editor,viewer}'));
create policy submissions_read on form_submissions for select using (current_role_is('{admin,editor}'));
-- anyone may submit a form (inserted via server route with the service key; policy kept strict)

-- writes: admin + editor
do $$
declare t text;
begin
  foreach t in array array['media','pages','page_versions','article_categories','articles',
    'article_category_map','departments','job_openings','navigation','site_settings','redirects']
  loop
    execute format('create policy %I_write on %I for all using (current_role_is(''{admin,editor}'')) with check (current_role_is(''{admin,editor}''))', t, t);
  end loop;
end $$;

-- ---------- storage ----------
insert into storage.buckets (id, name, public) values ('media', 'media', true)
on conflict (id) do nothing;

create policy media_objects_read on storage.objects for select using (bucket_id = 'media');
create policy media_objects_write on storage.objects for all
  using (bucket_id = 'media' and current_role_is('{admin,editor}'))
  with check (bucket_id = 'media' and current_role_is('{admin,editor}'));

-- ---------- seed singletons ----------
insert into navigation (id, items) values ('main', '[]') on conflict do nothing;
insert into site_settings (id, data) values ('global', '{}') on conflict do nothing;
