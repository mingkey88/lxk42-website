# Light & Kaki Studio 🎨✨

Where creativity meets friendship.

Japanese‑inspired studio website featuring painterly aesthetics, warm brand language, and refined 3D motion. Built with Svelte 5, Tailwind CSS, and Vite. Deployed on Firebase Hosting.

## 🌟 Live Website
- Production: https://lxk42-studio.web.app
- Custom Domain: www.lxk42.sg (pending DNS)

## 🚀 Tech Stack
- Framework: Svelte 5 (+ gradual TypeScript)
- Build: Vite 7
- Styling: Tailwind CSS (custom palette + components)
- Quality: ESLint + Prettier + TypeScript
- Hosting: Firebase Hosting (CI/CD via GitHub Actions)

## 📦 Repository Layout
- Active app: repository root (Svelte project)
- Legacy scaffold: older vanilla Vite files archived under `legacy/root-vanilla`. See `LEGACY.md`.

## 🎯 Quick Start
Prerequisites: Node.js 18+, npm

```bash
git clone https://github.com/mingkey88/lxk42-website.git
cd lxk42-website

# Install deps
npm install

# Dev server (HMR)
npm run dev    # http://localhost:5173

# Production
npm run build  # outputs to dist/
npm run preview

# Quality
npm run lint
npm run lint:fix
npm run format
npm run format:check
npm run typecheck
```

## ✨ Features
- Japanese‑inspired painterly design with soft, organic elements
- 3D floating motion with realistic depth and shadows
- Staggered hero entrance and scroll‑in animations
- Mobile‑first responsive layout and accessible semantics

## 🎨 Brand Colors
```css
--lxk-sage: #8FA68E;      /* Primary */
--lxk-mint: #B8D4B8;      /* Light accent */
--lxk-peach: #E6A866;     /* Warm accent */
--lxk-coral: #D4947A;     /* Text accent */
--lxk-cream: #F5F3F0;     /* Background */
--lxk-warm-gray: #5D5A56; /* Text */
--lxk-soft-teal: #7BA098; /* Secondary */
```

## 🌐 Deployment
- Firebase project: `lxk42-studio`
- Build: `npm run build` inside `lxk42-website/`
- Deploy: via GitHub Actions or `firebase deploy` (ensure correct project)

Notes
- Public directory is `dist/` (Vite output).
- `.firebaserc` and `firebase.json` are at repo root.

## 📚 Additional Docs
- CLAUDE.md — Strategic architecture, UX/content, and development guidelines
- WARP.md — Dev workflow and environment notes
- REFERENCE_STRUCTURE.md — External site structure used for reference
- LEGACY.md — Notes on legacy root scaffold

## 🤝 Contributing
Private project for Light & Kaki Studio. For suggestions, open an issue or contact the team.

## 📄 License
All rights reserved. © Light & Kaki Studio
