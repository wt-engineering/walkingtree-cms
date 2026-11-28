-- Private bucket for job-application files (resume, cover letter, portfolio)
insert into storage.buckets (id, name, public) values ('applications', 'applications', false)
on conflict (id) do nothing;

-- Staff can read application files (signed links in the admin); uploads happen server-side with the service key.
create policy applications_staff_read on storage.objects for select
  using (bucket_id = 'applications' and current_role_is('{admin,editor}'));

-- Mark submissions as handled
alter table form_submissions add column if not exists handled boolean not null default false;
create policy submissions_update on form_submissions for update
  using (current_role_is('{admin,editor}')) with check (current_role_is('{admin,editor}'));
