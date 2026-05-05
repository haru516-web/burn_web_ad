# Photo Management Specification

## Goal

BURN treats photos captured with the in-app camera and images imported from the phone album as temporary source assets.
Source photo assets are available for editing for a limited time, then removed from storage. Completed pages must remain viewable after the source photo assets are deleted.

## Core Rules

- In-app camera captures are saved as photo assets.
- Phone album imports are saved as photo assets with the same retention behavior.
- Source photo assets are encoded and stored as WebP.
- Every photo asset expires 7 days after capture/import by default.
- Source photo assets are deleted 7 days after capture/import whether or not they are used in a page.
- Completed pages remain after source photo assets are deleted.
- Unfinished pages do not protect their source photo assets from expiry.
- A photo asset used by an unfinished page is still deleted when its retention period ends.
- Users are notified before source photo assets are deleted.
- Photo expiry notifications are sent to both users in the couple.
- The database model must allow paid plans to extend photo retention later.

## Completed Page Independence

Completed pages must not depend on `photo_assets.storage_path` or any other source asset path for display.

When a page is completed:

- Generate `final_page_base_image` by baking in photos, backgrounds, decorations, masks, crops, and non-editable visual elements.
- Store editable text separately as `text_layers_json`.
- Generate or allow generation of `final_page_preview_image` for fast display in lists and archives.
- Store completed page images as high-quality WebP.
- When printing or magazine export is needed, generate PNG/PDF output from the completed page WebP.
- After completion, only text layers may be edited.
- After completion, image movement, image replacement, crop changes, background changes, and decoration changes are not allowed.

This means a completed page can still render from `completed_pages.final_base_image_path` plus `completed_pages.text_layers_json` after all related source `photo_assets` have been deleted.

## Data Model

## Authentication And Couple Creation

MVP authentication uses email login through Supabase Auth.

Couple creation flow:

1. User A logs in with email.
2. User A can use the app alone immediately after email confirmation and login.
3. User A may create an invite link at any time.
4. User A sends the invite link to any intended partner.
5. User B opens the invite link and logs in with email.
6. After User B accepts the invite, create a `couple_id`.
7. Both users are attached to the same couple.
8. Future shared photo assets, completed pages, and notifications are scoped by that `couple_id`.

Single-user usage is supported before a couple is created. In that state, records are owned by `user_id` and `couple_id` remains null. After a couple is created, future records should include the resolved `couple_id`. Existing user-owned records may remain personal or be explicitly attached to the couple through a migration/merge action.

### `photo_assets`

Stores temporary source images from camera captures and album imports.

| Column | Type | Notes |
| --- | --- | --- |
| `id` | uuid | Primary key |
| `user_id` | uuid | Owner; references auth user |
| `couple_id` | uuid | Nullable couple/workspace scope |
| `source_type` | text | `camera` or `album` |
| `storage_path` | text | Original source image path in Supabase Storage |
| `thumbnail_path` | text | Optional thumbnail path |
| `used_in_page_id` | uuid | Nullable reference to current draft/page usage |
| `captured_at` | timestamptz | Capture/import timestamp |
| `expires_at` | timestamptz | Deletion deadline |
| `deleted_at` | timestamptz | Logical deletion marker |
| `retention_days` | integer | Effective retention length at creation/update time |
| `is_protected_by_plan` | boolean | True when a paid plan extends retention |
| `created_at` | timestamptz | Row creation timestamp |

Rules:

- `expires_at` is normally `captured_at + interval '7 days'`.
- `source_type` must be constrained to `camera` or `album`.
- `deleted_at is null` means the source file should still exist in Storage.
- `used_in_page_id` is informational and must not prevent deletion.
- `user_id` is required; `couple_id` is nullable so users can start alone.
- Future paid retention changes should update `retention_days`, `expires_at`, and `is_protected_by_plan` through an explicit policy flow.

### `completed_pages`

Stores immutable visual output plus editable text layer data.

| Column | Type | Notes |
| --- | --- | --- |
| `id` | uuid | Primary key |
| `page_id` | uuid | Original draft/page id |
| `couple_id` | uuid | Nullable couple/workspace scope |
| `author_id` | uuid | User who completed the page |
| `final_base_image_path` | text | Baked base image with photos/background/decorations |
| `final_preview_image_path` | text | Display preview image |
| `text_layers_json` | jsonb | Editable text layers |
| `completed_at` | timestamptz | Completion timestamp |
| `created_at` | timestamptz | Row creation timestamp |
| `updated_at` | timestamptz | Text edit/update timestamp |

Rules:

- `final_base_image_path` is required for completed pages.
- `author_id` is required; `couple_id` is nullable so completed pages can exist before a couple is created.
- `text_layers_json` must include enough information to render and edit text independently of source photos.
- Completed page rendering must not read `photo_assets.storage_path`.
- Edits after completion may update only `text_layers_json`, `final_preview_image_path`, and `updated_at`.

### `page_text_layers`

Optional normalized text layer table for querying/edit history. The MVP may store all text in `completed_pages.text_layers_json` first.

| Column | Type | Notes |
| --- | --- | --- |
| `id` | uuid | Primary key |
| `completed_page_id` | uuid | References `completed_pages.id` |
| `layer_key` | text | Stable layer identifier |
| `text` | text | Current text |
| `style_json` | jsonb | Font, size, alignment, color, bounds |
| `z_index` | integer | Render order |
| `created_at` | timestamptz | Row creation timestamp |
| `updated_at` | timestamptz | Row update timestamp |

### `photo_retention_policies`

Defines retention behavior per plan or account state.

| Column | Type | Notes |
| --- | --- | --- |
| `id` | uuid | Primary key |
| `plan_key` | text | Example: `free`, `pro_monthly` |
| `retention_days` | integer | Number of days source assets are kept |
| `is_active` | boolean | Whether the policy is currently usable |
| `created_at` | timestamptz | Row creation timestamp |
| `updated_at` | timestamptz | Row update timestamp |

MVP default:

- `plan_key = 'free'`
- `retention_days = 7`

### `notifications`

Stores in-app notifications first, with extension points for push notifications later.

| Column | Type | Notes |
| --- | --- | --- |
| `id` | uuid | Primary key |
| `user_id` | uuid | Recipient |
| `couple_id` | uuid | Nullable couple/workspace scope |
| `type` | text | Example: `photo_expiring` |
| `title` | text | Short display title |
| `body` | text | Notification copy |
| `target_type` | text | Example: `photo_asset`, `page` |
| `target_id` | uuid | Related row id |
| `delivery_channels_json` | jsonb | Example: `["in_app"]`, future `["in_app","push"]` |
| `scheduled_for` | timestamptz | When notification becomes visible/sendable |
| `sent_at` | timestamptz | Delivery timestamp |
| `read_at` | timestamptz | User read timestamp |
| `created_at` | timestamptz | Row creation timestamp |

Rules:

- Photo expiry notifications are scheduled for `photo_assets.expires_at - interval '24 hours'`.
- MVP delivery channel is `in_app`.
- If `couple_id` is null, notify only the asset owner.
- If `couple_id` is present, each expiring photo should notify both users attached to the couple.
- Future push notifications should reuse the same notification row and add push delivery metadata rather than creating a separate concept.

## Storage Buckets

Recommended buckets:

- `photo-assets`: temporary camera/album source files and thumbnails.
- `completed-pages`: final base images and preview images.

Storage deletion applies only to files referenced by expired `photo_assets`.
Completed page files must not be stored in the temporary source asset bucket.

Image formats:

- Source photo assets: WebP.
- Completed page base/preview: high-quality WebP.
- Print/magazine export: PNG/PDF generated from the completed page WebP.

## Capture And Import Flow

1. User captures a photo with the in-app camera or imports an image from the phone album.
2. Upload original source image to `photo-assets`.
3. Generate and upload thumbnail when needed.
4. Insert `photo_assets` row:
   - `source_type = 'camera'` or `source_type = 'album'`
   - `captured_at = now()`
   - `retention_days = active policy retention days`
   - `expires_at = captured_at + retention_days`
   - `is_protected_by_plan = false` for MVP free plan
5. Schedule or create a `photo_expiring` notification for 24 hours before `expires_at`.

## Page Completion Flow

1. User presses the complete button.
2. Render the page to a fixed final canvas.
3. Bake photos, backgrounds, decorations, masks, and crops into `final_page_base_image`.
4. Extract editable text into `text_layers_json`.
5. Generate `final_page_preview_image`.
6. Upload final images to `completed-pages`.
7. Insert or update `completed_pages`.
8. Lock the completed page so only text editing remains available.

Completion does not cancel source photo asset expiry.

## Automatic Deletion

Use Supabase Cron + Edge Function, or an equivalent scheduled worker.

The scheduled job must:

1. Query `photo_assets` where:
   - `expires_at <= now()`
   - `deleted_at is null`
2. Delete the source files through the Supabase Storage API:
   - `storage_path`
   - `thumbnail_path` when present
3. Update each processed `photo_assets` row with `deleted_at = now()`.
4. Avoid deleting any completed page files.

Important:

- Do not delete Storage files directly with SQL.
- Treat DB updates and Storage deletion as a recoverable workflow. If Storage deletion fails, leave `deleted_at` null and retry later.
- The cleanup job should be idempotent.

## Notification Behavior

- A photo asset becomes warning-eligible 24 hours before `expires_at`.
- MVP shows in-app notifications.
- The notification should clearly state that the source photo will be deleted, while completed pages will remain.
- If multiple photo assets expire around the same time, the UI may group them into one notification per user or couple.

## UI Requirements

### Photo List

- Show remaining retention time as `あと○日で削除`.
- Show a warning state when deletion is within 24 hours.
- Hide or mark deleted assets when `deleted_at` is set.

### Page Editor

- If an unfinished page uses a photo asset expiring within 24 hours, show a warning in the editor.
- The warning must explain that completing the page preserves the finished page, but the source photo asset will still be deleted.
- The complete button must create the fixed completed-page output.

### Completed Page Editor

- Show completed pages from `final_base_image_path` plus text layers.
- Allow text-only editing.
- Do not expose image movement, replacement, crop, background, or decoration controls.

## MVP Constraints

- Default retention is 7 days.
- Authentication is email login through Supabase Auth.
- Couple creation happens through an invite link accepted by another email-authenticated user.
- Users can start and continue using the app alone without a couple.
- `couple_id` is nullable on user-owned records until an invite is accepted.
- Notifications are in-app only.
- Expiry notifications are sent to the owner when single-user, and to both users when coupled.
- Paid plan extension is represented in DB but does not need billing integration yet.
- Completed pages must be generated before source asset deletion if the user wants the page preserved.
- Draft/unfinished pages may lose images when source assets expire.

## Open Implementation Notes

- Decide whether `page_text_layers` is needed in the MVP or whether `completed_pages.text_layers_json` is sufficient.
- Decide exact invite token format and expiry period.
- Decide whether existing single-user records should be automatically attached to the couple after invite acceptance or require an explicit merge action.
- Decide exact Storage path format. Suggested:
  - `photo-assets/{couple_id}/{user_id}/{photo_asset_id}/original.webp`
  - `photo-assets/{couple_id}/{user_id}/{photo_asset_id}/thumb.webp`
  - `completed-pages/{couple_id}/{completed_page_id}/base.webp`
  - `completed-pages/{couple_id}/{completed_page_id}/preview.webp`
- Define the renderer responsible for creating `final_page_base_image` and `final_page_preview_image`.
- Add RLS policies so users can access only assets/pages/notifications for their couple.
