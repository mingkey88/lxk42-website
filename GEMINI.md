# GEMINI.md

This file provides context to the Gemini AI when working with the Light & Kaki Studio website project.

## Project Overview

This is the repository for the Light & Kaki Studio website, a modern, responsive single-page application. The project is built with Svelte 5 and Vite, and styled with Tailwind CSS. It emphasizes a friendly, collaborative brand identity inspired by Japanese aesthetics and Singaporean culture.

- **Framework**: Svelte 5
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS
- **Code Quality**: ESLint, Prettier, TypeScript
- **Hosting**: Firebase Hosting with CI/CD via GitHub Actions

The project is well-documented, with several markdown files providing in-depth information about architecture, strategy, and development workflows. The main application is located at the root of the repository, with a `legacy` directory containing a previous version of the site.

## Building and Running

The project uses `npm` for package management. The following commands are essential for development and deployment:

| Command | Description |
|---|---|
| `npm install` | Installs all project dependencies. |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Builds the application for production. This includes a pre-build step for image optimization. |
| `npm run preview` | Serves the production build locally for previewing. |
| `npm run lint` | Runs ESLint to check for code quality and style issues. |
| `npm run format` | Formats the entire codebase using Prettier. |
| `npm run typecheck` | Runs the TypeScript compiler to check for type errors. |

## Development Conventions

- **Code Style**: The project follows a consistent code style enforced by ESLint and Prettier.
- **Component-Based Architecture**: The application is built with a modular, component-based architecture using Svelte.
- **State Management**: State is managed within components, with a lightweight hash-based router for navigation.
- **Styling**: Styling is primarily done using Tailwind CSS utility classes, with some custom components defined in `src/style.css`.
- **Branching and Commits**: While not explicitly documented, the presence of GitHub Actions for pull requests suggests a feature-branch workflow. Commit messages should be clear and descriptive.
- **AI-Assisted Development**: The project documentation outlines a sophisticated workflow for collaborating with AI, with specific roles for strategic planning and implementation.
