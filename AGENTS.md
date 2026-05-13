# AGENTS.md

## Project context

This repository contains the existing application codebase.

The goal is to integrate and improve a magazine-style post editor inside the existing project without breaking current routing, authentication, state management, persistence, data format, or overall design consistency.

The editor direction is:
- fixed A4 page size
- addable image boxes
- addable title boxes
- addable body text boxes
- free dragging inside the page
- resizable boxes
- image cropping and repositioning
- automatic collision avoidance
- automatic adjustment so boxes do not overlap or overflow the page
- page size itself must remain fixed

This project should evolve incrementally. Do not rewrite the application or replace existing systems unless explicitly instructed.

---

## Repository structure

Before making changes, inspect the actual repository structure.

Common expected locations may include:
- `src/` - application source code
- `src/components/` - reusable UI components
- `src/pages/` or `src/app/` - route-level screens
- `src/hooks/` - shared hooks
- `src/lib/` or `src/utils/` - utilities
- `src/styles/` or existing CSS files - styling
- `public/` - static assets
- `docs/` - product, design, and planning documentation
- `package.json` - scripts and dependencies

Do not assume these paths are correct until the repository has been inspected.

If the project uses a different organization, follow the existing structure.

---

## Tech stack discipline

Use the stack already present in the repository.

Likely technologies may include:
- React
- Vite or another existing frontend build tool
- JavaScript or TypeScript, depending on the current repo
- Supabase, if already used
- Existing CSS, CSS modules, Tailwind, or other styling already present in the project

Rules:
- Do not migrate the project to another framework.
- Do not replace the routing system.
- Do not introduce a second state management system.
- Do not replace the persistence layer.
- Do not add TypeScript to a JavaScript project unless explicitly instructed.
- Do not add new dependencies unless clearly necessary.
- If a dependency is necessary, explain why the existing stack is insufficient.

---

## Core behavior rules

- Read the existing architecture before making edits.
- Prefer minimal, reversible changes.
- Integrate into the current stack instead of rewriting large sections.
- Preserve existing design patterns, naming, file organization, and state flow.
- Do not replace existing systems wholesale unless explicitly instructed.
- If multiple integration points are possible, choose the one that best matches the current architecture and explain why.
- Keep changes reviewable and easy to revert.
- When adding new code, favor reuse of existing utilities, hooks, components, and styling patterns.
- Do not introduce new dependencies unless they are clearly necessary.
- If a new dependency is necessary, explain why the current stack is insufficient.
- Avoid broad formatting-only edits in unrelated files.
- Do not make speculative refactors unrelated to the requested task.

---

## Design references

Before editing UI, UX, layout, typography, motion, editor behavior, visual hierarchy, spacing, colors, buttons, cards, or page composition, read:

- `docs/design.md`

Follow its product philosophy, editorial principles, and interaction tone.

If `docs/design.md` does not exist:
- Do not invent product rules silently.
- State that the file is missing.
- Use the existing UI and styling patterns in the repository as the source of truth.
- If the task is design-heavy, suggest creating `docs/design.md`.

If a tradeoff is needed, prefer choices that preserve:
- composition
- restraint
- readability
- page integrity
- mobile usability
- premium magazine-like visual tone
- consistency with the current product

---

## Product and visual direction

The editor should feel like part of a premium memory magazine product, not like an isolated demo or generic design tool.

General direction:
- mobile-first
- clean and restrained
- editorial
- magazine-like
- high-end but emotionally warm
- simple enough for non-technical users
- direct manipulation over complex settings
- visually quiet controls that do not fight the page content

Avoid:
- noisy SNS-like UI
- overly technical editor panels
- cluttered toolbars
- Canva-like complexity at the MVP stage
- excessive color usage
- controls that hide the actual A4 page
- visually clever interactions that are fragile or hard to debug

---

## Scope protection

Unless explicitly instructed otherwise, do not break or redesign:
- authentication flow
- routing structure
- API contract
- Supabase schema or persistence format already used in production
- global state architecture
- existing design system primitives
- unrelated screens or features
- existing localStorage keys or saved data structures
- existing user flows outside the requested task

If a requested change touches a protected area, explain the risk before editing.

---

## Feature integration rules

For the magazine-style editor:
- Treat the current project as the source of truth.
- Treat any external prototype or reference implementation as reference material, not as code to copy blindly.
- Adapt reference logic into the project’s existing architecture.
- Prioritize a one-page MVP first.
- Keep extension points clear for future multi-page support.
- Preserve a clean separation between editor state, layout logic, rendering, and persistence.
- Prefer deterministic layout behavior over visually clever but fragile behavior.
- When implementing auto-adjustment and collision avoidance, avoid hidden side effects where possible.
- Make layout decisions traceable and debuggable.
- Do not implement advanced layout behavior before the basic editor is stable.

---

## MVP priority for editor work

When implementing the editor, prioritize in this order:

1. Fixed A4 canvas
2. Add image boxes
3. Add title boxes
4. Add body text boxes
5. Drag boxes within page bounds
6. Resize boxes within page bounds
7. Persist and reload editor data
8. Image crop and internal repositioning
9. Basic overlap prevention
10. Basic automatic adjustment
11. Advanced collision avoidance
12. Advanced text flow around images
13. Multi-page support

Do not attempt advanced collision avoidance, complex text flow, or multi-page behavior before the basic one-page editor is stable.

If a user asks for a broad editor implementation, first implement the smallest stable version that satisfies the immediate goal.

---

## UI and UX expectations

- The editing canvas is fixed to A4 aspect ratio.
- Users can add image boxes, title boxes, and body text boxes onto a blank page.
- Users can drag boxes freely within the page.
- Users can resize boxes.
- Image boxes can be cropped and repositioned internally.
- Text and image boxes should avoid overlapping when possible.
- Auto-adjustment should run during box move and resize interactions only when it does not make the interaction feel unpredictable.
- The page itself must not be resizable.
- The implementation should visually fit the existing product rather than look like an isolated demo.
- Keep the editing interaction responsive and understandable.
- Favor direct manipulation patterns over deeply nested controls.
- Controls should not obscure important page content on mobile.
- Touch targets should be large enough for mobile operation.
- The UI should clearly show which box is selected.
- Editing should feel reversible and safe.

---

## Local UI verification

For UI changes:
- Prefer running the local dev server when possible.
- Verify the affected screen in the browser when possible.
- Check mobile-size layout first.
- Check desktop layout if the app supports it.
- Do not claim that the UI looks correct unless it was actually previewed.
- If local preview is not possible, state that clearly.
- If screenshots, browser automation, or visual inspection tools are unavailable, say so instead of pretending visual confirmation was performed.

For this project, visual confirmation is important because small UI differences matter.

---

## Architecture expectations

Prefer separating the editor feature into:
- page or editor shell
- canvas rendering
- box model and shared types
- drag and resize interaction logic
- layout and collision avoidance logic
- text measurement and text layout logic
- image crop logic
- persistence mapping
- toolbar or insertion controls
- export or preview logic, if applicable

If the existing project already has a different feature organization, follow that structure instead.

Avoid placing all editor logic inside one large component.

Prefer named helper functions for layout behavior.

---

## State management rules

- Follow the existing state management approach already used in the repo.
- Avoid introducing a second competing state pattern.
- Keep transient interaction state separate from persisted content state where possible.
- Keep saved data structures stable, explicit, and serializable.
- If saved shapes or types change, explain migration implications.
- Avoid storing essential editor state only in DOM measurements.
- Avoid hidden state that cannot be restored after reload.
- Keep editor data suitable for future persistence and export.

Preferred saved editor data should be explicit enough to restore:
- page metadata
- boxes
- box type
- text content
- image source
- crop state
- transform state
- size
- position
- z-order
- layout hints

---

## Persistence guidance

If implementing saved editor data, prefer explicit structures for:
- page metadata
- boxes
- text content
- image source
- crop state
- transform state
- z-order
- layout hints

Do not hide essential editor state in DOM-only assumptions.

If the app already has a persistence format:
- preserve it where possible
- add fields carefully
- explain compatibility impact
- avoid breaking existing saved pages

If using Supabase:
- do not change schema unless explicitly requested
- do not assume a column exists
- inspect existing table usage first
- handle save failures clearly
- preserve fallback behavior if localStorage fallback already exists

---

## Styling rules

- Follow the project’s existing styling system.
- Reuse existing tokens, components, spacing scales, and typography rules.
- Do not introduce a parallel design system.
- Avoid hardcoded one-off values when an existing token or pattern already exists.
- Keep the editor visually aligned with the rest of the application.
- Prefer mobile-first CSS.
- Avoid global CSS changes unless necessary.
- Do not rename existing class names broadly without need.
- Keep layout values understandable and easy to tune.

---

## Interaction rules

For drag, resize, crop, and direct manipulation:
- Keep interactions smooth.
- Avoid excessive rerenders.
- Keep pointer and touch behavior consistent.
- Clamp movement within the page bounds.
- Clamp resizing within the page bounds.
- Do not allow boxes to disappear outside the canvas.
- Do not allow the A4 canvas itself to resize.
- Avoid surprising auto-movement while the user is dragging.
- If automatic adjustment is used, make it predictable.
- Prefer simple, deterministic rules over complex emergent behavior.

---

## Layout and collision avoidance rules

When implementing collision avoidance:
- Keep the algorithm understandable.
- Prefer named helper functions.
- Avoid hidden side effects.
- Make behavior traceable.
- Start with simple overlap prevention before complex flow behavior.
- Avoid full-page re-layout on every small pointer movement if a smaller recalculation is possible.
- Do not create infinite adjustment loops.
- Ensure layout correction does not push boxes outside the page.
- Preserve selected box intent when possible.

Collision avoidance should support page integrity, not fight the user.

---

## Performance guidance

- Avoid unnecessary re-layout of the full page on every minor interaction if a smaller recalculation is possible.
- Prefer predictable update boundaries.
- Keep interaction smooth during drag, resize, and crop operations.
- Be careful with excessive rerenders and expensive measurements.
- Avoid repeatedly reading layout from the DOM in tight interaction loops.
- Memoize expensive calculations when appropriate.
- Keep the first implementation simple before optimizing prematurely.

---

## Debuggability guidance

- Keep layout logic understandable.
- Prefer named helper functions over large opaque blocks.
- Leave concise comments where layout behavior would otherwise be difficult to reason about.
- Make collision and auto-adjustment behavior inspectable.
- Use clear names for editor entities such as page, box, selectedBox, crop, bounds, and layout.
- Avoid clever abstractions that obscure behavior.
- If a bug is likely in layout math, add temporary explanations in the final response rather than silently guessing.

---

## Editing workflow

Before major edits:
1. Inspect the current project structure.
2. Identify the correct integration points.
3. Read the relevant files before changing anything.
4. Read `docs/design.md` before UI or editor behavior changes.
5. Form a short implementation plan.
6. Then edit in small, reviewable steps.

When working on a large change:
- Summarize the current understanding first.
- State which files are likely to change.
- State the minimal viable implementation path.
- Then implement.

Do not start by rewriting large files.

---

## Planning files

If the requested task is large, multi-step, risky, or likely to span many files, create or update a short plan document before deep implementation work.

Suggested file:
- `PLANS.md`

Suggested contents:
- goal
- current constraints
- target files
- implementation steps
- validation steps
- open questions

Keep planning concise. Do not over-document small changes.

---

## Common commands

Use the scripts defined in `package.json`.

Common validation commands may include:
- `npm install`
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run typecheck`
- `npm test`

Rules:
- Inspect `package.json` before running scripts.
- Do not invent scripts that do not exist.
- If a command does not exist, state that clearly.
- If dependencies are not installed, run the appropriate install command only after checking the package manager used by the project.
- Prefer the existing package manager lockfile:
  - `package-lock.json` means prefer npm
  - `pnpm-lock.yaml` means prefer pnpm
  - `yarn.lock` means prefer yarn

---

## Validation requirements

Before finishing, run the relevant checks if they exist:
- lint
- typecheck
- tests
- build
- relevant local preview or dev run

If a check exists and is not run, explain why.
If a check fails, report the failure clearly instead of hiding it.
Do not claim completion without describing what was actually validated.

For UI work, also state whether the screen was visually checked.

---

## Final response requirements

Always include:
- files changed
- what changed
- why those changes were made
- how the feature fits into the existing architecture
- how to run or verify it
- any limitations or follow-up work
- any checks that were run and their result

Do not simply say “done.”

If validation failed, include:
- the exact command
- the failure summary
- likely cause
- whether the code changes were still completed

---

## Safety and change discipline

- Do not make speculative refactors unrelated to the requested task.
- Do not silently rename large areas of code without need.
- Do not delete existing behavior unless replacement is implemented and justified.
- Avoid broad formatting-only edits in unrelated files.
- Keep diffs focused on the requested outcome.
- Prefer small commits or small logical changes.
- Keep changes easy to revert.
- Preserve existing behavior unless the requested task requires changing it.

---

## Dependency discipline

Prefer existing project dependencies first.

If adding a new package, explain:
- what problem it solves
- why existing dependencies are not enough
- what files it affects
- whether it changes bundle size or maintenance cost
- whether it affects runtime performance
- whether it affects future maintenance

Do not add a dependency only for a small helper that can be implemented clearly in the existing codebase.

---

## External references

External prototypes, examples, GitHub repositories, or pasted code should be treated as reference material.

Rules:
- Do not copy large external implementations blindly.
- Adapt only the needed ideas.
- Match the current project architecture.
- Preserve current naming, state, styling, and persistence patterns.
- If an external algorithm is adapted, keep it small and explain where it was integrated.

---

## Git and branch discipline

- Inspect current branch and working tree before major edits when possible.
- Do not overwrite user changes.
- Do not discard uncommitted changes unless explicitly instructed.
- Avoid force operations.
- Keep diffs focused.
- If creating a new branch is needed, use a clear branch name.
- If the repository has existing PR or branch conventions, follow them.

---

## What not to do

Do not:
- rewrite the app from scratch
- replace the existing editor with an unrelated demo
- change authentication unless requested
- change routing unless requested
- change Supabase schema unless requested
- introduce a new UI framework unless requested
- add unnecessary animation libraries
- create a parallel design system
- hardcode large amounts of layout without checking existing patterns
- claim visual verification without actually previewing
- claim build success without actually running the command
- silently ignore failing checks
- implement advanced collision avoidance before the basic editor works

---

## Windows PowerShell helpers

These helpers are for Windows environments when reading or writing files from the terminal.

Rule:
- In each command, define → use.
- Do not escape `$`.
- Use generic `path/to/file.ext`.
- Prefer UTF-8 without BOM.

### READ: UTF-8 no BOM, line-numbered

```bash
bash -lc 'powershell -NoLogo -Command "
$OutputEncoding = [Console]::OutputEncoding = [Text.UTF8Encoding]::new($false);
Set-Location -LiteralPath (Convert-Path .);

function Get-Lines {
  param(
    [string]$Path,
    [int]$Skip=0,
    [int]$First=120
  )

  $enc=[Text.UTF8Encoding]::new($false)
  $text=[IO.File]::ReadAllText($Path,$enc)

  if($text.Length -gt 0 -and $text[0] -eq [char]0xFEFF){
    $text=$text.Substring(1)
  }

  $ls=$text -split \"`r?`n\"

  for($i=$Skip; $i -lt [Math]::Min($Skip+$First,$ls.Length); $i++){
    \"{0:D4}: {1}\" -f ($i+1), $ls[$i]
  }
}

Get-Lines -Path \"path/to/file.ext\" -First 120 -Skip 0
"'
```

### WRITE: UTF-8 no BOM, append text

```bash
bash -lc 'powershell -NoLogo -Command "
$OutputEncoding = [Console]::OutputEncoding = [Text.UTF8Encoding]::new($false);
Set-Location -LiteralPath (Convert-Path .);

function Write-Utf8NoBom {
  param(
    [string]$Path,
    [string]$Content
  )

  $dir = Split-Path -Parent $Path

  if (-not (Test-Path $dir)) {
    New-Item -ItemType Directory -Path $dir -Force | Out-Null
  }

  $tmp = [IO.Path]::GetTempFileName()

  try {
    $enc = [Text.UTF8Encoding]::new($false)
    [IO.File]::WriteAllText($tmp,$Content,$enc)
    Move-Item $tmp $Path -Force
  }
  finally {
    if (Test-Path $tmp) {
      Remove-Item $tmp -Force -ErrorAction SilentlyContinue
    }
  }
}

$file = \"path/to/your_file.ext\"
$enc  = [Text.UTF8Encoding]::new($false)
$old  = if (Test-Path $file) { [IO.File]::ReadAllText($file,$enc) } else { \"\" }

Write-Utf8NoBom -Path $file -Content ($old+\"`nYOUR_TEXT_HERE`n\")
"'
```

### WRITE: UTF-8 no BOM, replace full file

```bash
bash -lc 'powershell -NoLogo -Command "
$OutputEncoding = [Console]::OutputEncoding = [Text.UTF8Encoding]::new($false);
Set-Location -LiteralPath (Convert-Path .);

function Write-Utf8NoBom {
  param(
    [string]$Path,
    [string]$Content
  )

  $dir = Split-Path -Parent $Path

  if (-not (Test-Path $dir)) {
    New-Item -ItemType Directory -Path $dir -Force | Out-Null
  }

  $tmp = [IO.Path]::GetTempFileName()

  try {
    $enc = [Text.UTF8Encoding]::new($false)
    [IO.File]::WriteAllText($tmp,$Content,$enc)
    Move-Item $tmp $Path -Force
  }
  finally {
    if (Test-Path $tmp) {
      Remove-Item $tmp -Force -ErrorAction SilentlyContinue
    }
  }
}

$content = @\"
YOUR_FULL_FILE_CONTENT_HERE
\"@

Write-Utf8NoBom -Path \"path/to/file.ext\" -Content $content
"'
```

### LIST: files recursively

```bash
bash -lc 'powershell -NoLogo -Command "
$OutputEncoding = [Console]::OutputEncoding = [Text.UTF8Encoding]::new($false);
Set-Location -LiteralPath (Convert-Path .);

Get-ChildItem -LiteralPath . -Recurse | Select-Object FullName
"'
```

### SEARCH: text in files

```bash
bash -lc 'powershell -NoLogo -Command "
$OutputEncoding = [Console]::OutputEncoding = [Text.UTF8Encoding]::new($false);
Set-Location -LiteralPath (Convert-Path .);

$pattern = \"search_text\"

Get-ChildItem -Recurse -File | Select-String -Pattern $pattern | ForEach-Object {
  \"{0}:{1}: {2}\" -f $_.Path, $_.LineNumber, $_.Line.Trim()
}
"'
```