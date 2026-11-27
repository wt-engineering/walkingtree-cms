-- Support importing from Sanity: keep origin refs, page-specific extras, CDN fallback.
alter table media add column if not exists sanity_id text unique;
alter table media add column if not exists external_url text;   -- fallback when a file is too large to upload
alter table media alter column path drop not null;

alter table pages add column if not exists sanity_id text unique;
alter table pages add column if not exists extra jsonb not null default '{}'::jsonb; -- page-specific fields (contact form, blog sections ...)

alter table articles add column if not exists sanity_id text unique;
alter table articles add column if not exists hero jsonb not null default '{}'::jsonb;
alter table articles add column if not exists extra jsonb not null default '{}'::jsonb;

alter table article_categories add column if not exists sanity_id text unique;
alter table departments add column if not exists sanity_id text unique;
alter table job_openings add column if not exists sanity_id text unique;
