# Legacy Scaffold Notes

This repository contains two scaffolds:

- Active app (authoritative): `lxk42-website/` — Svelte 5 + Vite + Tailwind CSS, with TypeScript tooling, ESLint, and Prettier. Used for development and deployment.
- Legacy scaffold (reference only): root-level `src/`, `dist/`, and minimal `package.json` — an earlier vanilla Vite/Tailwind prototype retained for historical reference.

Operational guidance
- Build, preview, lint, typecheck, and deploy from `lxk42-website/`.
- Prefer the Firebase config in `lxk42-website/` for deployments.
- Do not modify root-level legacy files unless you are intentionally maintaining the prototype.

Rationale
- Keeping the legacy scaffold provides a record of the initial approach while avoiding confusion by designating `lxk42-website/` as the single source of truth.

