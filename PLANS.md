# Record Template Plan

## Goal
Use `docs/references/template_for_record` as selectable magazine-page templates for the record flow. Users only choose a template; the app automatically places selected memory photos and text into that template.

## Current Constraints
- Keep the existing record route, local state, and saved memory format.
- Avoid new dependencies.
- Reuse the current record select and complete stages.
- Keep generated pages capturable by the existing DOM capture flow.

## Target Files
- `docs/js/pages/record.js`
- `docs/js/app.js`
- `docs/js/templates/recordTemplates.js`
- `docs/css/record.css`
- `PLANS.md`

## Implementation Steps
1. Add record template metadata for six reference PNGs.
2. Add a template picker to the record selection step.
3. Store the selected record template in transient `uiState`.
4. Render the completion preview using the selected template layout.
5. Save/post the generated page with the selected template id in `composeData`.
6. Run build validation.

## Validation Steps
- Run `npm.cmd run build`.
- Confirm the record flow still caps selection at three memories.
- Confirm the completion preview renders from the selected template.

## Open Questions
- The current record memories only store creation date, so template pages use the selected memories' existing time/place/memo fields.
