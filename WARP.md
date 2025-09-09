# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

LXK42 is a premium web agency website built as a modern, responsive single-page application targeting businesses in Singapore. The site showcases digital services including web design, mobile app development, digital marketing, branding, and consulting services.

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

## Architecture & Structure

### Technology Stack
- **Build Tool**: Vite (modern, fast build tool with HMR)
- **CSS Framework**: Tailwind CSS with custom configuration
- **JavaScript**: Vanilla ES6+ (no framework dependencies)
- **External Dependencies**: Font Awesome icons, Google Fonts (Inter)

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

**Custom Tailwind Configuration**: The project uses a custom color scheme:
- `lxk-blue` (#1e40af): Primary brand color
- `lxk-yellow` (#fbbf24): Accent color 
- `lxk-dark` (#1f2937): Dark text/backgrounds

**Component-Based CSS Classes**: Custom Tailwind components are defined in `src/style.css`:
- `.btn-primary` and `.btn-secondary`: Consistent button styling
- `.section-padding`: Standardized section spacing
- `.container-custom`: Consistent container widths and padding

**Vanilla JavaScript Architecture**: The codebase deliberately avoids frameworks to maintain simplicity:
- Event-driven mobile menu toggle
- Intersection Observer API for scroll animations
- Smooth scrolling navigation
- Dynamic style injection for keyframe animations

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

### Content Updates
All content is currently placeholder and should be replaced with actual LXK42 information:
- Company descriptions and value propositions
- Service details and pricing
- Portfolio projects and case studies
- Contact information (currently using placeholder phone/email)
- Team photos and company branding

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
- Proper meta tags in `<head>`
- Semantic HTML structure
- Descriptive title and meta description
- Clean URL structure (single-page, but with hash navigation)
