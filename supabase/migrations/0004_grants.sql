-- Newer Supabase projects do not auto-grant table access to the API roles.
-- RLS policies (0001) still decide who can read or write which rows.
grant usage on schema public to anon, authenticated;

grant select on all tables in schema public to anon;
grant select, insert, update, delete on all tables in schema public to authenticated;
grant usage, select on all sequences in schema public to anon, authenticated;

alter default privileges in schema public grant select on tables to anon;
alter default privileges in schema public grant select, insert, update, delete on tables to authenticated;
alter default privileges in schema public grant usage, select on sequences to anon, authenticated;

-- profiles hold emails: no anonymous access
revoke all on profiles from anon;
revoke all on form_submissions from anon;

-- make sure the named admin has a profile with the admin role
insert into profiles (user_id, email, role)
select id, email, 'admin' from auth.users where lower(email) = 'digital@walkingtree.co'
on conflict (user_id) do update set role = 'admin';
