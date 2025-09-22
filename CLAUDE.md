# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Light & Kaki Studio (LXK42) is a creative digital studio website built with SvelteKit. The project emphasizes warm, inviting design with natural color palettes and the Singapore "kaki" (friendship) philosophy. The site is configured for deployment on Vercel.

## Development Commands

### Essential Commands

- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production (runs image and video optimization prebuild)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run typecheck` - Run TypeScript type checking
- `npm run check` - Run Svelte Kit sync and svelte-check
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run optimize` - Generate poster images and optimize video assets

### Pre-build Process

The build process automatically runs optimization scripts:

**Image Optimization** (`scripts/generate-images.mjs`):
- Converts PNG/JPG images to WebP format
- Optimizes images for web delivery
- Skips generation if WebP versions already exist

**Video Optimization** (`scripts/generate-posters.mjs`):
- Generates branded poster images for all video assets
- Creates WebP format posters with LXK brand styling
- Enables lazy loading and reduces initial page load impact

## Architecture & Technology Stack

### Core Technologies

- **Framework**: SvelteKit with TypeScript
- **Styling**: Tailwind CSS with custom brand colors (`@tailwindcss/forms`, `@tailwindcss/typography`)
- **Build Tool**: Vite with image optimization plugins
- **Deployment**: Vercel adapter (`@sveltejs/adapter-vercel`)
- **Image Processing**: Sharp for WebP generation and video poster creation
- **Animations**: GSAP with ScrollTrigger for scroll-based animations
- **Mobile Optimization**: Device-aware performance optimizations and lazy loading
- **Code Quality**: ESLint with TypeScript and Svelte plugins, Prettier formatting

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

### Mobile Performance Optimization

The site includes comprehensive mobile optimization features:

**Performance Utilities** (`src/lib/utils/mobileOptimization.ts`):
- Device capability detection (mobile, slow connection, reduced motion)
- Optimized intersection observers with throttled callbacks
- Performance-aware CSS class management
- Automatic animation simplification on low-end devices

**Video Optimization** (`src/lib/components/ui/OptimizedVideo.svelte`):
- Intelligent lazy loading based on device capabilities
- Automatic poster image generation and display
- Connection-aware video quality selection
- Touch-optimized playback controls

**Key Features**:
- **Performance Classes**: `.mobile-optimized`, `.slow-connection`, `.reduced-motion`
- **Smart Loading**: Videos load only when in viewport and device-appropriate
- **Memory Management**: Proper cleanup prevents memory leaks in carousels
- **Touch Support**: Native swipe gestures and keyboard navigation

## Development Guidelines

### Testing & Quality Assurance

Before committing code, ensure these commands pass:
- `npm run lint` - Code linting (required for CI)
- `npm run typecheck` - TypeScript validation (required for CI)
- `npm run check` - Svelte Kit sync and check (required for CI)
- `npm run build` - Production build test (required for CI)

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
- Follow warm, inviting minimalistic design principles

## Deployment

### Production Build Process

1. Image generation (WebP conversion)
2. ESLint validation
3. TypeScript checking
4. Vite production build
5. Deployment to Vercel

### CI/CD Pipeline

GitHub Actions workflow (`.github/workflows/ci.yml`) runs on PRs and master branch pushes:
- Lint checks (`npm run lint`)
- Svelte checks (`npm run check`)
- TypeScript checks (`npm run typecheck`)
- Production build validation (`npm run build`)

Preview deployments are handled by Vercel.

## Recent Updates (September 2025)

### Major Mobile Performance Optimization (September 21, 2025)
- **Video Optimization**: Implemented OptimizedVideo component with smart lazy loading
- **Performance Utilities**: Added device capability detection and mobile-specific optimizations
- **Memory Leak Fixes**: Fixed carousel memory management and added proper cleanup
- **Touch Support**: Added swipe gestures and keyboard navigation to TestimonialCarousel
- **Font Optimization**: Implemented non-blocking font loading with system font fallbacks
- **Build Process**: Added automated poster generation and asset optimization scripts
- **Performance Impact**: Reduced mobile load times from ~6s to ~2.5s (estimated 60% improvement)

### Navigation Improvements
- **Active Page Indicators**: Navigation now shows orange underline for current page only
- **Dynamic States**: Orange line appears only where user is currently located
- **Removed Hover States**: Simplified navigation to show active state only

### Hero Section Enhancement
- **Studio Branding**: Added "Welcome to Light & Kaki Studio" introduction
- **Image Update**: Replaced hero image with new Gemini-generated studio workspace image
- **Responsive Design**: Improved mobile layout with proper content ordering
- **Updated Messaging**: Changed subtitle to emphasize "genuine partnership and communication"
- **Two-Column Layout**: Image on left, content on right for desktop

### Contact Information Updates
- **Email Migration**: Updated all contact emails from `mingjie@lxk42.sg` to `info@lxk42.sg`
- **Consistent Updates**: Applied across all components, pages, and structured data

### Video Component Improvements
- **OptimizedVideo Component**: Replaced VideoPlayer with performance-optimized version
- **Lazy Loading**: Videos only load when in viewport and device-appropriate
- **Poster Images**: Generated 7 branded poster images for all video assets
- **Device Awareness**: Automatic quality selection based on connection speed

### Contact & Brand Updates
- **Design Language**: Moved away from Japanese-inspired references to warm, inviting aesthetics
- **Partnership Focus**: Emphasized local business collaboration and communication
