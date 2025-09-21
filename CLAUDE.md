# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Light & Kaki Studio (LXK42) is a creative digital studio website built with SvelteKit. The project emphasizes Japanese-inspired minimalistic design with warm, natural color palettes and the Singapore "kaki" (friendship) philosophy. The site is configured for deployment on Vercel.

## Development Commands

### Essential Commands

- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production (runs image generation prebuild script)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run typecheck` - Run TypeScript type checking
- `npm run check` - Run Svelte Kit sync and svelte-check
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Pre-build Process

The build process automatically runs `scripts/generate-images.mjs` which:

- Converts PNG/JPG images to WebP format
- Optimizes images for web delivery
- Skips generation if WebP versions already exist

## Architecture & Technology Stack

### Core Technologies

- **Framework**: SvelteKit with TypeScript
- **Styling**: Tailwind CSS with custom brand colors
- **Build Tool**: Vite with image optimization plugins
- **Deployment**: Vercel adapter
- **Image Processing**: Sharp for WebP generation
- **Animations**: GSAP with ScrollTrigger for scroll-based animations

### Tailwind Brand Colors

The project uses a custom color palette reflecting the brand identity:

- `lxk-sage`: #8FA68E (primary brand color)
- `lxk-mint`: #B8D4B8 (light accent)
- `lxk-peach`: #E6A866 (warm accent)
- `lxk-coral`: #D4947A (secondary accent)
- `lxk-cream`: #F5F3F0 (background)
- `lxk-warm-gray`: #5D5A56 (text)
- `lxk-soft-teal`: #7BA098 (subtle accent)

### Component Architecture

#### Layout Structure

- `src/routes/+layout.svelte` - Main app layout with Header component
- `src/lib/components/Header.svelte` - Navigation with desktop/mobile responsive design

#### Main Components (src/lib/components/)

- `InteractiveHero.svelte` - Homepage hero section
- `SocialProof.svelte` - Client logos and social proof
- `About.svelte` - About section content
- `Services.svelte` - Services overview
- `Contact.svelte` - Contact form and information
- `TestimonialCarousel.svelte` - Customer testimonials

#### UI Components (src/lib/components/ui/)

Reusable UI elements including:

- `BrowserFrame.svelte` - Website mockup frame
- `StatCard.svelte` - Metric display cards
- `CompactFAQ.svelte` - FAQ section
- `WhatsAppButton.svelte` - Fixed WhatsApp contact button
- Various service-specific components

#### Tools Components (src/lib/components/tools/)

Interactive calculators and tools:

- `WebDesignCalculator.svelte` - Project cost estimator
- `DesignPackageBuilder.svelte` - Custom package builder
- `AnimationStylePreview.svelte` - Animation style demonstration

### Data Layer

#### Static Data (src/lib/data/)

- `portfolio.js` - Project showcase data with categories and filtering
- `testimonials.js` - Customer reviews and ratings
- `clients.js` - Client logos and information
- `servicePackages.js` - Service pricing and packages

#### SEO & Structured Data

- `src/lib/structuredData.js` - Comprehensive schema.org implementations
  - Organization schema
  - Local business schema
  - Service-specific schemas
  - FAQ and review schemas
  - Breadcrumb navigation schemas

### Routing Structure

- `/` - Homepage with all main sections
- `/about` - Detailed about page
- `/portfolio` - Project showcase with filtering
- `/testimonials` - Customer testimonials page
- Service pages: `/web-design`, `/web-app`, `/graphic-design`, `/motion-graphics`

### SEO Implementation

The site includes comprehensive SEO features:

- Structured data injection on page mount
- Dynamic meta tag updates
- Open Graph and Twitter card support
- Canonical URLs

### Animation System

The site uses GSAP with ScrollTrigger for sophisticated scroll animations:

- **Animation Utilities**: `src/lib/utils/scrollAnimations.ts` provides reusable animation functions
- **Presets Available**: fadeUp, fadeIn, slideInLeft, slideInRight, scaleIn, stagger
- **Key Functions**:
  - `createScrollAnimation()` - Basic scroll-triggered animations
  - `createStaggeredAnimation()` - Stagger animations for multiple elements
  - `createCounterAnimation()` - Animated number counters
  - `createParallax()` - Parallax scroll effects
  - `createTextReveal()` - Text reveal animations
- **Implementation**: Components import from `scrollAnimations.ts` and call animation functions in `onMount()`

## Development Guidelines

### Code Quality

- ESLint configuration with Svelte and TypeScript support
- Prettier formatting with Svelte plugin
- TypeScript strict mode enabled
- Warning-level linting for unused variables and console statements

### Image Handling

- All images should have WebP versions for optimal performance
- The build process automatically generates WebP variants
- Use responsive image loading where appropriate

### Component Development

- Follow existing naming conventions (PascalCase for components)
- Use TypeScript for all new components
- Implement proper accessibility attributes (ARIA labels, skip links)
- Maintain responsive design patterns across mobile/desktop

### Styling Approach

- Use Tailwind utility classes with brand color variables
- Maintain consistent spacing and typography scale
- Implement smooth transitions and hover states
- Follow Japanese-inspired minimalistic design principles

## Deployment

### Production Build Process

1. Image generation (WebP conversion)
2. ESLint validation
3. TypeScript checking
4. Vite production build
5. Deployment to Vercel

### CI/CD Pipeline

GitHub Actions can run lint and type checks. Preview deployments are handled by Vercel.
