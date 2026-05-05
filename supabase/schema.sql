-- BURN Supabase schema snapshot.
-- Safe to re-run: no destructive drop/truncate/delete statements are used.

create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  display_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.memory_spaces (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles(id) on delete cascade,
  title text not null default 'My BURN',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.space_members (
  id uuid primary key default gen_random_uuid(),
  space_id uuid not null references public.memory_spaces(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  role text not null default 'member' check (role in ('owner', 'member')),
  created_at timestamptz not null default now(),
  unique (space_id, user_id)
);

create table if not exists public.completed_pages (
  id uuid primary key default gen_random_uuid(),
  page_id text,
  space_id uuid not null references public.memory_spaces(id) on delete cascade,
  author_id uuid not null references public.profiles(id) on delete cascade,
  title text not null default 'Untitled',
  final_image_path text,
  is_locked boolean not null default true,
  final_base_image_path text,
  final_preview_image_path text,
  editor_snapshot_json jsonb not null default '{}'::jsonb,
  text_layers_json jsonb not null default '{}'::jsonb,
  completed_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.completed_pages
  add column if not exists page_id text,
  add column if not exists space_id uuid references public.memory_spaces(id) on delete cascade,
  add column if not exists author_id uuid references public.profiles(id) on delete set null,
  add column if not exists title text not null default 'Untitled',
  add column if not exists final_image_path text,
  add column if not exists is_locked boolean not null default true,
  add column if not exists final_base_image_path text,
  add column if not exists final_preview_image_path text,
  add column if not exists editor_snapshot_json jsonb not null default '{}'::jsonb,
  add column if not exists text_layers_json jsonb not null default '{}'::jsonb,
  add column if not exists completed_at timestamptz not null default now(),
  add column if not exists created_at timestamptz not null default now(),
  add column if not exists updated_at timestamptz not null default now();

create table if not exists public.photo_assets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  space_id uuid references public.memory_spaces(id) on delete set null,
  memory_space_id uuid references public.memory_spaces(id) on delete set null,
  source_type text not null check (source_type in ('camera', 'album')),
  storage_path text not null,
  thumbnail_path text,
  used_in_page_id uuid references public.completed_pages(id) on delete set null,
  captured_at timestamptz not null default now(),
  expires_at timestamptz not null,
  deleted_at timestamptz,
  retention_days integer not null default 3,
  is_protected_by_plan boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.photo_assets
  add column if not exists space_id uuid references public.memory_spaces(id) on delete set null,
  add column if not exists memory_space_id uuid references public.memory_spaces(id) on delete set null,
  add column if not exists thumbnail_path text,
  add column if not exists expires_at timestamptz,
  add column if not exists retention_days integer not null default 3,
  add column if not exists deleted_at timestamptz;

update public.photo_assets
set space_id = coalesce(space_id, memory_space_id),
    memory_space_id = coalesce(memory_space_id, space_id)
where space_id is null
   or memory_space_id is null;

create or replace function public.sync_photo_asset_space_ids()
returns trigger
language plpgsql
as $$
begin
  new.space_id := coalesce(new.space_id, new.memory_space_id);
  new.memory_space_id := coalesce(new.memory_space_id, new.space_id);
  return new;
end;
$$;

drop trigger if exists sync_photo_asset_space_ids on public.photo_assets;
create trigger sync_photo_asset_space_ids
before insert or update on public.photo_assets
for each row
execute function public.sync_photo_asset_space_ids();

create table if not exists public.page_text_layers (
  id uuid primary key default gen_random_uuid(),
  completed_page_id uuid not null references public.completed_pages(id) on delete cascade,
  layer_key text not null,
  text text not null default '',
  style_json jsonb not null default '{}'::jsonb,
  z_index integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  memory_space_id uuid references public.memory_spaces(id) on delete cascade,
  type text not null,
  title text not null,
  body text not null default '',
  target_type text,
  target_id uuid,
  delivery_channels_json jsonb not null default '["in_app"]'::jsonb,
  scheduled_for timestamptz,
  sent_at timestamptz,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.space_invites (
  id uuid primary key default gen_random_uuid(),
  space_id uuid not null references public.memory_spaces(id) on delete cascade,
  inviter_id uuid not null references public.profiles(id) on delete cascade,
  invitee_email text,
  token text not null unique,
  accepted_by uuid references public.profiles(id) on delete set null,
  accepted_at timestamptz,
  expires_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.memory_spaces enable row level security;
alter table public.space_members enable row level security;
alter table public.completed_pages enable row level security;
alter table public.photo_assets enable row level security;
alter table public.page_text_layers enable row level security;
alter table public.notifications enable row level security;
alter table public.space_invites enable row level security;

grant usage on schema public to authenticated;
grant select, insert, update on public.profiles to authenticated;
grant select, insert, update on public.memory_spaces to authenticated;
grant select, insert, update on public.space_members to authenticated;
grant select, insert, update on public.completed_pages to authenticated;
grant select, insert, update on public.photo_assets to authenticated;
grant select, insert, update on public.page_text_layers to authenticated;
grant select, insert, update on public.notifications to authenticated;
grant select, insert, update on public.space_invites to authenticated;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
on public.profiles for select
to authenticated
using (id = auth.uid());

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
on public.profiles for insert
to authenticated
with check (id = auth.uid());

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
on public.profiles for update
to authenticated
using (id = auth.uid())
with check (id = auth.uid());

drop policy if exists "space_members_select_member" on public.space_members;
create policy "space_members_select_member"
on public.space_members for select
to authenticated
using (user_id = auth.uid());

drop policy if exists "space_members_insert_self" on public.space_members;
create policy "space_members_insert_self"
on public.space_members for insert
to authenticated
with check (user_id = auth.uid());

drop policy if exists "memory_spaces_select_member" on public.memory_spaces;
create policy "memory_spaces_select_member"
on public.memory_spaces for select
to authenticated
using (
  owner_id = auth.uid()
  or exists (
    select 1 from public.space_members sm
    where sm.space_id = memory_spaces.id
      and sm.user_id = auth.uid()
  )
);

drop policy if exists "memory_spaces_insert_owner" on public.memory_spaces;
create policy "memory_spaces_insert_owner"
on public.memory_spaces for insert
to authenticated
with check (owner_id = auth.uid());

drop policy if exists "completed_pages_select_member" on public.completed_pages;
create policy "completed_pages_select_member"
on public.completed_pages for select
to authenticated
using (
  author_id = auth.uid()
  or exists (
    select 1 from public.space_members sm
    where sm.space_id = completed_pages.space_id
      and sm.user_id = auth.uid()
  )
);

drop policy if exists "completed_pages_insert_author" on public.completed_pages;
create policy "completed_pages_insert_author"
on public.completed_pages for insert
to authenticated
with check (
  author_id = auth.uid()
  and (
    exists (
      select 1 from public.space_members sm
      where sm.space_id = completed_pages.space_id
        and sm.user_id = auth.uid()
    )
  )
);

drop policy if exists "completed_pages_update_author" on public.completed_pages;
create policy "completed_pages_update_author"
on public.completed_pages for update
to authenticated
using (author_id = auth.uid())
with check (author_id = auth.uid());

drop policy if exists "photo_assets_select_owner_or_member" on public.photo_assets;
create policy "photo_assets_select_owner_or_member"
on public.photo_assets for select
to authenticated
using (
  user_id = auth.uid()
  or exists (
    select 1 from public.space_members sm
    where sm.space_id = coalesce(photo_assets.space_id, photo_assets.memory_space_id)
      and sm.user_id = auth.uid()
  )
);

drop policy if exists "photo_assets_insert_owner" on public.photo_assets;
create policy "photo_assets_insert_owner"
on public.photo_assets for insert
to authenticated
with check (
  user_id = auth.uid()
  and exists (
    select 1 from public.space_members sm
    where sm.space_id = coalesce(photo_assets.space_id, photo_assets.memory_space_id)
      and sm.user_id = auth.uid()
  )
);

drop policy if exists "notifications_select_recipient" on public.notifications;
create policy "notifications_select_recipient"
on public.notifications for select
to authenticated
using (user_id = auth.uid());

drop policy if exists "space_invites_select_related" on public.space_invites;
create policy "space_invites_select_related"
on public.space_invites for select
to authenticated
using (
  inviter_id = auth.uid()
  or accepted_by = auth.uid()
  or exists (
    select 1 from public.space_members sm
    where sm.space_id = space_invites.space_id
      and sm.user_id = auth.uid()
  )
);

insert into storage.buckets (id, name, public)
values
  ('photo-assets', 'photo-assets', false),
  ('completed-pages', 'completed-pages', false)
on conflict (id) do nothing;

drop policy if exists "photo_assets_storage_select_own_folder" on storage.objects;
create policy "photo_assets_storage_select_own_folder"
on storage.objects for select
to authenticated
using (
  bucket_id = 'photo-assets'
  and exists (
    select 1 from public.space_members sm
    where sm.space_id::text = (storage.foldername(name))[1]
      and sm.user_id = auth.uid()
  )
);

drop policy if exists "photo_assets_storage_insert_own_folder" on storage.objects;
create policy "photo_assets_storage_insert_own_folder"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'photo-assets'
  and exists (
    select 1 from public.space_members sm
    where sm.space_id::text = (storage.foldername(name))[1]
      and sm.user_id = auth.uid()
  )
);

drop policy if exists "completed_pages_storage_select_own_folder" on storage.objects;
create policy "completed_pages_storage_select_own_folder"
on storage.objects for select
to authenticated
using (
  bucket_id = 'completed-pages'
  and exists (
    select 1 from public.space_members sm
    where sm.space_id::text = (storage.foldername(name))[1]
      and sm.user_id = auth.uid()
  )
);

drop policy if exists "completed_pages_storage_insert_own_folder" on storage.objects;
create policy "completed_pages_storage_insert_own_folder"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'completed-pages'
  and exists (
    select 1 from public.space_members sm
    where sm.space_id::text = (storage.foldername(name))[1]
      and sm.user_id = auth.uid()
  )
);
