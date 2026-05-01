# Record Flow Plan

## Goal
Add a bottom-navigation "record" flow for capturing today's memories, adding place/memo metadata, selecting up to three photos, and showing an auto-created page completion preview.

## Current Constraints
- Keep the existing routing and shell structure.
- Use existing vanilla JS page modules and CSS imports.
- Avoid new dependencies.
- Use browser-native image input/capture rather than adding a camera library.
- Persist recorded memories in the existing local store.

## Target Files
- `docs/js/components/bottomNav.js`
- `docs/js/components/icons.js`
- `docs/js/core/store.js`
- `docs/js/pages/record.js`
- `docs/js/app.js`
- `docs/css/record.css`
- `src/main.jsx`

## Implementation Steps
1. Add store support for record memories.
2. Add record screen state and routing.
3. Add bottom-nav record button.
4. Build record home, camera, select, and complete UI.
5. Bind capture, save, selection, and page-create interactions.
6. Add focused CSS for the new flow.
7. Run build validation.

## Validation Steps
- Run `npm.cmd run build`.
- Confirm generated assets are referenced by `docs/index.html`.
- Confirm max selection is capped at three.

## Open Questions
- Real device camera behavior should be checked on iPhone Safari.
