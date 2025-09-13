# Repository Guidelines

## Project Structure & Module Organization
- App source: `src/`
  - `src/pages/` (route views, PascalCase `.svelte`)
  - `src/components/` (shared UI, plus `components/ui/`)
  - `src/assets/` (images; WebP generated on build)
  - `src/data/`, `style.css`, `Router.svelte`, `App.svelte`, `main.js`
- Scripts: `scripts/generate-images.mjs` (creates missing WebP; run standalone with `node scripts/generate-images.mjs`)
- Build output: `dist/` (Firebase Hosting public dir)
- CI/CD: `.github/workflows/` (build + Firebase deploy)
- Hosting config: `firebase.json`, `.firebaserc`
- Legacy scaffold: `legacy/` (do not modify without need)
 - Routing: hash-based router in `Router.svelte` (SPA; Firebase rewrites to `index.html`).

## Build, Test, and Development Commands
- `npm run dev` — Start Vite dev server with HMR.
- `npm run build` — Preprocess images then build to `dist/`.
- `npm run preview` — Serve the production build locally.
- `npm run lint` / `lint:fix` — ESLint for `.js/.ts/.svelte`.
- `npm run format` / `format:check` — Prettier formatting.
- `npm run typecheck` — TypeScript `--noEmit` project check.
- Deploy: `firebase deploy` (after `npm run build`, correct project in `.firebaserc`).

## Coding Style & Naming Conventions
- Prettier: 2 spaces, semicolons, single quotes, width 100, trailing commas (es5).
- ESLint: Svelte + TS plugin; `prefer-const` error; `no-console`/`no-unused-vars` warn; `svelte/require-each-key` warn.
- Components/pages: PascalCase `.svelte` (e.g., `Header.svelte`, `WebDesign.svelte`).
- Variables/functions: `camelCase`; files in `src/data/` use `.ts` or `.js` consistently.

## Testing Guidelines
- No test runner configured yet. If introducing tests, propose in a PR.
- Recommended stack: Vitest + Svelte Testing Library.
- Naming: `src/**/__tests__/**.test.ts` (or `.test.js`).
- Add `"test": "vitest"` script and include coverage thresholds if added later.

## Commit & Pull Request Guidelines
- Commits: imperative, present tense; concise and descriptive.
  - Examples: "Add Firebase hosting configuration", "Flatten Svelte app to repo root".
- PRs: include summary, linked issues, before/after screenshots for UI, and Firebase preview URL (from CI) when available.
- CI must pass (`lint`, `typecheck`, `build`) before merge.

## Security & Configuration Tips
- Node 20+ required (matches CI). Do not commit secrets; use GitHub Secrets for Firebase.
- Images: place source assets in `src/assets/`; WebP files are auto-generated on build.
- Hosting: SPA rewrites route all paths to `/index.html`.

## Agent-Specific Instructions
- Keep changes tightly scoped; avoid unrelated refactors and legacy (`legacy/`).
- Follow ESLint/Prettier; run `npm run lint` and `npm run typecheck` before PRs.
- Prefer small, focused patches; mirror existing patterns and naming.
- Update docs when behavior or commands change (README and this file).
