# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Light & Kaki Studio is a Japanese-inspired digital studio website built as a modern, responsive single-page application. The project emphasizes friendship, collaboration, and warmth through its "Light & Kaki" concept, where "kaki" means friend in Singlish. The site features beautiful 3D animations, painterly aesthetics, and is deployed on Firebase Hosting.

## Development Commands

### Core Development Workflow
```bash
# Install dependencies
npm install

# Start development server (hot reload enabled)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Development Server
The development server runs on Vite with hot module replacement. The site will typically be available at `http://localhost:5173` (or next available port).

### Deployment Commands
```bash
# Build and deploy to Firebase
firebase deploy

# Deploy to specific Firebase project
firebase deploy --project lxk42-studio

# Open live site
firebase hosting:channel:open live
```

## Architecture & Structure

### Technology Stack
- **Build Tool**: Vite (modern, fast build tool with HMR)
- **CSS Framework**: Tailwind CSS with custom Japanese-inspired color palette
- **JavaScript**: Vanilla ES6+ (no framework dependencies)
- **Hosting**: Firebase Hosting with automatic GitHub Actions deployment
- **External Dependencies**: Font Awesome icons, Google Fonts (Inter)
- **Live URLs**: https://lxk42-studio.web.app | www.lxk42.sg (pending DNS)

### File Structure Overview
```
lxk42-website/
├── src/
│   ├── style.css          # Main CSS with Tailwind imports and custom components
│   └── main.js            # JavaScript functionality (mobile menu, scroll animations)
├── index.html             # Single-page application entry point
├── tailwind.config.js     # Tailwind configuration with custom colors and plugins
├── postcss.config.js      # PostCSS configuration for Tailwind processing
└── package.json           # Dependencies and npm scripts
```

### Key Architecture Decisions

**Single-Page Application**: All content is in `index.html` with JavaScript handling navigation and interactions. This approach was chosen for simplicity and performance.

**Japanese-Inspired Color Palette**: The project uses a warm, painterly color scheme:
- `lxk-sage` (#8FA68E): Primary brand color - soft sage green
- `lxk-mint` (#B8D4B8): Light accent - fresh mint
- `lxk-peach` (#E6A866): Warm accent - friendly peach
- `lxk-coral` (#D4947A): Text accent - soft coral
- `lxk-cream` (#F5F3F0): Background - warm cream
- `lxk-warm-gray` (#5D5A56): Text color - warm gray

**Component-Based CSS Classes**: Custom Tailwind components are defined in `src/style.css`:
- `.btn-primary` and `.btn-secondary`: Consistent button styling
- `.section-padding`: Standardized section spacing
- `.container-custom`: Consistent container widths and padding

**Vanilla JavaScript Architecture**: The codebase deliberately avoids frameworks to maintain simplicity:
- Event-driven mobile menu toggle
- Intersection Observer API for scroll animations
- Smooth scrolling navigation
- Dynamic style injection for keyframe animations

**Advanced Animation System**: The site features sophisticated CSS animations:
- **3D Floating Circles**: 4 unique animation patterns with organic movement
- **Hero Scroll-in Effects**: Staggered entrance animations with timing delays
- **Painterly Aesthetics**: Organic shapes, soft shadows, and gradient backgrounds
- **Performance Optimized**: GPU-accelerated transforms and efficient keyframes

### Content Structure

The website follows a standard agency layout pattern:
1. **Header/Navigation**: Fixed header with dropdown services menu
2. **Hero Section**: Value proposition with key statistics
3. **About Section**: Company introduction and benefits
4. **Services Section**: 6 service offerings in a grid layout
5. **Portfolio Section**: Placeholder for client work (currently shows placeholders)
6. **Contact Section**: Contact form and company information
7. **Footer**: Links, services, and contact details

### Responsive Design Strategy

The site uses Tailwind's mobile-first responsive design:
- Mobile menu hidden on desktop (`md:hidden` / `hidden md:block`)
- Grid layouts that stack on mobile (`grid md:grid-cols-2`)
- Typography that scales (`text-3xl md:text-4xl`)
- Consistent breakpoint usage at `md` (768px)

### Animation System

Custom animation system using Intersection Observer:
- Elements with `.animate-on-scroll` class fade in when scrolled into view
- CSS keyframes defined dynamically in JavaScript
- Smooth scroll behavior for navigation links

## Development Guidelines

### Content Guidelines
The website reflects the "Light & Kaki" brand philosophy:
- **Cultural Authenticity**: "Kaki" means friend in Singlish, not Japanese
- **Collaborative Language**: Emphasize friendship, warmth, and partnership
- **Singapore Context**: Respect local culture while maintaining international appeal
- **Emoji Usage**: Strategic use of friendly emojis (🎨, 🤝, 🌱, ✨) for warmth
- **Avoid Corporate Speak**: Use personal, relationship-focused language

### Color Customization
Modify brand colors in `tailwind.config.js` under the `extend.colors` section. The custom colors are used throughout the site for consistency.

### Adding New Sections
When adding new sections:
1. Follow the existing HTML structure pattern
2. Use consistent class naming with `.section-padding` and `.container-custom`
3. Add `.animate-on-scroll` class for fade-in effects
4. Maintain the responsive grid pattern

### Contact Form Integration
The contact form is currently static HTML. To make it functional:
1. Add form submission handling in `src/main.js`
2. Integrate with a backend service or email service
3. Add form validation and user feedback

### Performance Considerations
- Images use Unsplash URLs (placeholder) - replace with optimized local images
- Font Awesome is loaded from CDN - consider local hosting for better performance
- Google Fonts are loaded with `display=swap` for better performance

## Testing & Quality Assurance

### Browser Testing
Test across different browsers and devices, particularly:
- Mobile responsiveness on various screen sizes
- Navigation dropdown functionality
- Smooth scrolling behavior
- Animation performance

### Accessibility
The site follows basic accessibility patterns:
- Semantic HTML structure
- Keyboard navigation support
- Color contrast considerations
- Alt text for images (when real images are added)

### SEO Optimization
Current SEO implementation includes:
- Proper meta tags optimized for "Light & Kaki Studio"
- Semantic HTML structure with accessibility features
- Descriptive title and meta description reflecting brand identity
- Clean URL structure with custom domain setup

## Deployment & Hosting

### Firebase Configuration
- **Project ID**: lxk42-studio
- **Hosting URL**: https://lxk42-studio.web.app
- **Custom Domain**: www.lxk42.sg (configured with Vodien DNS)
- **Build Directory**: `dist/` (Vite output)

### Automatic Deployment
- **GitHub Actions**: Configured for automatic deployment on push to master
- **Preview Deployments**: Automatic preview URLs for pull requests
- **Build Process**: `npm run build` → `firebase deploy`

### DNS Configuration
- **Domain Registrar**: Vodien
- **A Records**: Point to Firebase Hosting IPs
- **CNAME Record**: www subdomain points to lxk42-studio.web.app
