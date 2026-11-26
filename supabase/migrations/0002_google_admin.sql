-- Admin is a named account, not "first signup". Everyone else starts as viewer.
create or replace function handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into profiles (user_id, email, role)
  values (new.id, new.email,
    case when lower(new.email) = 'digital@walkingtree.co' then 'admin'::user_role else 'viewer'::user_role end)
  on conflict (user_id) do nothing;
  return new;
end $$;

-- if that user already signed in before this migration ran
update profiles set role = 'admin' where lower(email) = 'digital@walkingtree.co';
