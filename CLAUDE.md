# CLAUDE.md

This file provides guidance to Claude AI when working with the Light & Kaki Studio website project.

## AI Collaboration Framework

### Claude's Strengths & Responsibilities
- **Architecture & Planning**: High-level design decisions, component structure, technical strategy
- **Content & UX**: Brand messaging, user experience optimization, accessibility considerations
- **Code Quality**: Clean architecture, maintainable patterns, performance optimization
- **Documentation**: Technical documentation, API specs, architectural decisions
- **Problem Solving**: Complex debugging, integration issues, architectural refactoring

### Codex's Strengths & Responsibilities  
- **Implementation**: Fast, accurate code generation and completion
- **Syntax & Patterns**: Language-specific idioms, framework conventions, boilerplate code
- **Refactoring**: Mechanical code transformations, variable renaming, structure changes
- **Testing**: Unit test generation, test case scenarios, mock implementations
- **Configuration**: Config file setup, build tool configuration, dependency management

### Collaboration Guidelines
- **Claude**: Focus on "what" and "why" - architectural decisions and strategic direction
- **Codex**: Focus on "how" - specific implementation details and code generation
- **Handoffs**: Claude provides detailed specifications; Codex implements with minimal guidance
- **Reviews**: Claude reviews Codex's implementations for architecture compliance

## Project Context

### Brand Identity
- **Studio Name**: Light & Kaki Studio
- **Concept**: "Light & Kaki" where "kaki" means friend in Singlish (Singapore English)
- **Philosophy**: Where creativity meets friendship - emphasizing collaboration, warmth, and genuine relationships
- **Target Audience**: Businesses in Singapore seeking digital solutions with a personal, collaborative approach
- **Tone**: Warm, friendly, collaborative, authentic to Singapore culture

### Visual Aesthetic
- **Style**: Japanese-inspired painterly design with soft, organic elements
- **Colors**: Warm, muted palette (sage green, peach, coral, cream)
- **Animation**: 3D floating elements, smooth scroll-in effects, organic movement
- **Layout**: Clean, centered, with generous whitespace and soft shadows

## Technical Architecture

### Core Technologies
- **Framework**: SvelteKit 2.39+ with Svelte 5 and TypeScript support
- **Build System**: Vite 7+ for fast development and optimized production builds
- **Adapter**: Static site generation with @sveltejs/adapter-static
- **Styling**: Tailwind CSS 3.4+ with custom color palette and @tailwindcss/forms plugin
- **Code Quality**: ESLint 9+ (flat config) + Prettier with TypeScript integration
- **Image Optimization**: Sharp for image processing and vite-plugin-imagemin
- **Hosting**: Firebase Hosting with automatic GitHub Actions deployment
- **Version Control**: GitHub repository at mingkey88/lxk42-website

### Current Project Structure
```
lxk42-website/
├── src/
│   ├── lib/
│   │   ├── components/     # Svelte components organized by type
│   │   │   ├── icons/      # Icon components (Menu, ChevronDown)
│   │   │   ├── tools/      # Interactive tools (calculators, quizzes)
│   │   │   └── ui/         # Reusable UI components (modals, carousels)
│   │   ├── assets/         # Static assets (images)
│   │   └── data/           # Data files (testimonials, portfolios, packages)
│   ├── routes/             # SvelteKit file-based routing
│   │   ├── +layout.svelte  # Root layout component
│   │   ├── +page.svelte    # Homepage
│   │   ├── web-design/     # Service pages
│   │   ├── web-app/
│   │   ├── digital-marketing/
│   │   ├── branding/
│   │   ├── graphic-design/
│   │   ├── motion-graphics/
│   │   ├── portfolio/
│   │   ├── about/
│   │   └── testimonials/
│   ├── app.html            # HTML template
│   └── style.css           # Global CSS, animations, Tailwind components
├── static/                 # Static assets served at root
├── vite.config.js          # Vite configuration with Svelte plugin
├── svelte.config.js        # SvelteKit configuration with static adapter
├── tailwind.config.js      # Custom color palette and configuration
├── tsconfig.json           # TypeScript configuration
├── eslint.config.js        # ESLint rules and TypeScript integration
├── postcss.config.js       # PostCSS configuration
├── .prettierrc             # Code formatting rules
├── firebase.json           # Hosting configuration
└── package.json            # Dependencies and scripts
```

## Development Guidelines

### Code Style Preferences
- **Svelte**: Use composition API, reactive statements ($:), and component-based architecture
- **TypeScript**: Gradually typed - use TypeScript where it adds value, plain JS for simple cases
- **CSS**: Tailwind utility classes with custom components in @layer components
- **Styling**: Scoped styles in .svelte files, global styles in src/style.css
- **Animations**: CSS transforms with Svelte's built-in transitions where appropriate

### Development Commands
```bash
npm run dev          # Start SvelteKit development server
npm run prebuild     # Generate optimized images (runs automatically before build)
npm run build        # Build for production with static adapter
npm run preview      # Preview production build
npm run check        # SvelteKit sync + svelte-check for component validation
npm run check:watch  # Watch mode for component validation
npm run lint         # Run ESLint checks
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run typecheck    # TypeScript type checking
```

### Color System
```css
/* Primary Brand Colors - Use these consistently */
lxk-sage: #8FA68E      /* Primary brand color, buttons, headings */
lxk-mint: #B8D4B8      /* Light accents, hover states */
lxk-peach: #E6A866     /* Warm accents, call-to-action elements */
lxk-coral: #D4947A     /* Text accents, statistics */
lxk-cream: #F5F3F0     /* Background sections, cards */
lxk-warm-gray: #5D5A56 /* Primary text color */
lxk-soft-teal: #7BA098 /* Secondary brand color */
```

### Animation Principles
- **Organic Movement**: Prefer curves and natural motion over linear transitions
- **3D Effects**: Use transforms (translateX/Y, rotateX/Y, scale) with box-shadow changes
- **Timing**: Varied durations (8s, 9s, 10s, 12s) to avoid repetitive patterns
- **Performance**: CSS transforms over position changes, GPU-accelerated properties

### Typography Guidelines
- **Font**: Inter for all text (loaded from Google Fonts)
- **Hierarchy**: Clear size differences (text-4xl to text-7xl for headers)
- **Color**: lxk-warm-gray for body text, brand colors for accents
- **Spacing**: Generous line-height for readability

## Content Guidelines

### Messaging Approach
- **Collaborative Language**: "journey together", "shared dream", "our friends"
- **Cultural Sensitivity**: Respect Singapore/Asian context, use "kaki" authentically
- **Avoid Corporate Speak**: Replace business jargon with friendly, personal language
- **Emoji Usage**: Strategic use of relevant emojis (🎨, 🤝, 🌱, ✨) for warmth

### Service Descriptions
- Focus on outcomes and relationships rather than technical specifications
- Emphasize collaborative process and partnership
- Use warm, approachable language
- Include cultural relevance where appropriate

### About Section Philosophy
- Explain the "Light & Kaki" concept authentically
- Emphasize friendship and collaboration over corporate achievements
- Include the Singlish cultural context naturally
- Focus on the journey and relationship-building

## User Experience Priorities

### Performance
- Maintain fast loading times with optimized builds
- Use efficient CSS animations that don't block rendering
- Minimize JavaScript for faster initial load
- Optimize images and use appropriate formats

### Accessibility
- Maintain semantic HTML structure
- Ensure sufficient color contrast ratios
- Provide keyboard navigation support
- Include proper ARIA labels where needed
- Test with screen readers when possible

### Mobile Experience
- Mobile-first responsive design
- Touch-friendly button sizes and spacing
- Readable typography on small screens
- Simplified navigation for mobile users

## Deployment & Maintenance

### Firebase Integration
- Production URL: https://lxk42-studio.web.app
- Custom domain: www.lxk42.sg (pending DNS configuration)
- Automatic deployment on master branch commits
- Preview deployments for pull requests

### GitHub Actions Workflow
- Automatic build and deploy process configured
- No manual intervention needed for deployments
- Service account properly configured for Firebase

### DNS Configuration
- Domain registered with Vodien
- Requires A records pointing to Firebase IPs
- CNAME record for www subdomain

## Design Evolution Considerations

### Future Enhancements
- Portfolio section with real client work
- Contact form backend integration
- Blog/insights section for thought leadership
- Client testimonial integration
- Multi-language support (English/Chinese)

### Visual Refinements
- Consider additional micro-interactions
- Potential for more sophisticated 3D effects
- Seasonal color variations
- Enhanced mobile animations

### Content Expansion
- Case studies showcasing collaborative process
- Team member introductions
- Client success stories
- Studio process documentation

## Cultural Context

### Singapore Market
- Understand local business culture and expectations
- Incorporate Singlish naturally, not forced
- Respect multicultural context
- Balance international appeal with local authenticity

### Brand Positioning
- Premium but approachable service provider
- Emphasis on relationships over transactions
- Cultural bridge between traditional and modern
- Authentic Singapore identity in global context

## Troubleshooting Common Issues

### Build Problems
- Ensure Tailwind is properly configured in postcss.config.js
- Check that custom colors are defined in tailwind.config.js
- Verify Vite configuration for proper asset handling

### Animation Issues
- Check z-index layering for proper element stacking
- Ensure transform-style: preserve-3d is applied to 3D elements
- Verify keyframe percentages add up correctly

### Deployment Issues
- Confirm firebase.json points to correct public directory (dist)
- Verify .firebaserc contains correct project ID
- Check that build succeeds before deployment

## SvelteKit Component Architecture

### Component Organization
- **UI Components** (`src/lib/components/ui/`): Reusable interface elements
  - BrowserFrame, CompactFAQ, EnhancedCTA, ExitIntentModal
  - HumbleAchievements, KakiProcess, LeadMagnetModal, ServicePackages
  - StatCard, TestimonialCarousel, UIkitPreview, WhatsAppButton
- **Interactive Tools** (`src/lib/components/tools/`): Engagement components
  - AnimationStylePreview, BrandPersonalityQuiz, DesignPackageBuilder
  - MarketingROICalculator, WebDesignCalculator
- **Core Components** (`src/lib/components/`): Main site sections
  - Header, InteractiveHero, About, Services, Contact, SocialProof
  - WhyWorkWithUs, WorkProcess
- **Icons** (`src/lib/components/icons/`): SVG icon components

### SvelteKit Features Used
- **File-based Routing**: Routes in `src/routes/` with `+page.svelte` files
- **Layouts**: Shared layout in `+layout.svelte` with Header component
- **Static Site Generation**: Using adapter-static for optimal performance
- **Import Aliases**: `$lib/` alias for clean imports from `src/lib/`
- **SEO Features**: Meta tags, structured data injection in route files

### Svelte 5 Best Practices
- Use runes system for state management where applicable
- Leverage reactive statements `$:` for computed values
- Keep component props interface clean and well-typed
- Use context API for deeply nested prop passing
- Prefer composition over inheritance for component design

### Data Management
- **Data Files** (`src/lib/data/`): Centralized data management
  - `testimonials.js`: Customer testimonials with service filtering
  - `servicePackages.js`: Service package configurations
  - `portfolio.js`: Portfolio items and project data
  - `clients.js`: Client information and logos
- **Structured Data**: SEO schema injection in `src/lib/structuredData.js`
- Component state for local UI interactions
- Reactive variables for computed values

## AI Workflow Optimization

### For Claude (Strategic Tasks)
1. **Architecture Planning**: Design component hierarchy, data flow, API structure
2. **Content Strategy**: Brand messaging, UX flow, user journey mapping
3. **Performance Analysis**: Bundle analysis, Core Web Vitals, optimization strategies
4. **Code Review**: Architecture patterns, maintainability, scalability concerns

### For Codex (Implementation Tasks)
1. **Component Creation**: Generate Svelte components from specifications
2. **Style Implementation**: Convert designs to Tailwind CSS classes
3. **Logic Implementation**: Write component logic, event handlers, reactive statements
4. **Testing**: Generate unit tests, integration tests, type definitions

### Handoff Format (Claude → Codex)
```typescript
// Component Specification Template
interface ComponentSpec {
  name: string;
  props: Record<string, Type>;
  events: string[];
  functionality: string[];
  styling: string[];
  accessibility: string[];
}
```

## When Making Changes

### Always Consider
1. **Brand Consistency**: Does this align with the Light & Kaki philosophy?
2. **Cultural Authenticity**: Is the Singapore context respected?
3. **Component Reusability**: Can this be broken into reusable components?
4. **Performance Impact**: Will this affect loading speed or animation smoothness?
5. **Mobile Experience**: How does this work on smaller screens?
6. **Accessibility**: Can all users access this feature?
7. **Type Safety**: Are TypeScript types properly defined where needed?

### Testing Checklist
- Run `npm run typecheck` for TypeScript validation
- Run `npm run lint` for code quality checks
- Test component in isolation and in context
- Verify responsive design across breakpoints
- Check color contrast ratios for accessibility
- Test keyboard navigation and screen reader compatibility
- Validate animations work smoothly across browsers

### Code Quality Standards
- Follow ESLint configuration for consistency
- Use Prettier for automatic formatting
- Write self-documenting code with clear variable names
- Add TypeScript types for complex props and state
- Keep components under 200 lines when possible
- Write unit tests for complex logic

This project represents a unique blend of Japanese aesthetic sensibilities with Singapore cultural context, built on modern Svelte architecture while maintaining excellent performance and accessibility standards.

## Codex Handoff — Recent Changes (Flattening + Services Pages)

This section summarizes Codex implementation work to keep you in sync when you take over next.

### Summary of Changes
- Repository structure
  - Promoted the Svelte 5 app to the repository root (flattened layout).
  - Archived the legacy vanilla Vite scaffold under `legacy/root-vanilla/`.
  - Unified docs: updated root `README.md` to reflect Svelte stack; added `LEGACY.md`.

- Tooling and configs
  - Added/standardized Svelte 5 + Vite + Tailwind setup at root.
  - ESLint (flat config) + Prettier and TS (`eslint.config.js`, `.prettierrc`, `tsconfig.json`).
  - Tailwind ESM config with brand palette and plugins; PostCSS ESM config.
  - Vite config includes `vite-plugin-imagemin` with sensible defaults.
  - CI (GitHub Actions) updated to setup Node 20, use `npm ci`, then run `lint`, `typecheck`, and `build` before Firebase deploy.

- Routing and navigation
  - Introduced a lightweight hash-based router (`src/Router.svelte`).
  - Routes: `/` (Home), `/web-design`, `/web-app`, `/digital-marketing`, `/branding`, `/graphic-design`, `/motion-graphics`, `/portfolio`.
  - Aliases: `/animation` → `/motion-graphics` for backward compatibility.
  - Special handling: `#/about`, `#/contact`, `#/services` route to Home then smooth-scroll to the section.
  - Updated header and mobile navigation to use the new routes; logo links to `#/`.

- New pages and content
  - Extracted Home sections into `src/pages/Home.svelte`.
  - Added services pages:
    - `WebDesign.svelte` (Web Design & Development)
    - `WebApp.svelte` (Web App Development)
    - `DigitalMarketing.svelte` (Digital Marketing)
    - `Branding.svelte` (Branding Solutions)
    - `GraphicDesign.svelte` (Graphic Design)
    - `MotionGraphics.svelte` (Motion Graphics & Animation)
  - Expanded copy on each page to match brand tone and structure.
  - Updated Services grid to link to each services page and added accessible focus states.

- Portfolio
  - Added `src/data/portfolio.js` with sample entries.
  - `src/pages/Portfolio.svelte` renders a dynamic grid with simple tag filtering.

- Accessibility and perf touches (incremental)
  - Kept the skip-to-content link in the header.
  - Added `loading="lazy"` to the large About image; moved the asset to `src/assets/`.
  - Minor focus ring/focusable card improvements.

### Repo State After Changes
- Active app lives at repo root and runs with `npm run dev` / `build` / `preview`.
- Firebase Hosting workflows build from root and deploy `dist/`.
- Docs point to Svelte architecture and brand guidelines; legacy scaffold documented in `LEGACY.md`.
- Note: `lxk42-website/` currently remains in the repo history as an embedded git repository (submodule marker). If undesired, remove from index via `git rm --cached lxk42-website` and delete the `.gitmodules` entry if present, then commit. We left this as-is to avoid destructive changes without explicit instruction.

### Suggestions / Next Iterations
- Navigation & UX
  - Add keyboard and ARIA behavior for the Services dropdown (toggle `aria-expanded`, focus trapping on open, ESC to close).
  - Consider route-aware highlighting in the nav for context (active link state).
  - Add a common CTA banner slice to the end of all services pages to unify flow to Contact.

- Performance
  - Convert raster assets to WebP/AVIF; generate multiple sizes and use `srcset` for responsive loading.
  - Self-host icons instead of Font Awesome CDN or switch to an inline SVG set to reduce unused CSS/JS.
  - Route-level code-splitting if pages grow heavier; current Svelte setup already supports this via dynamic imports.

- Accessibility
  - Ensure color contrast ratios across all sections meet WCAG AA.
  - Audit tab order and focus states across dropdowns and in-page sections.
  - Add descriptive alt text for future portfolio images; keep semantic headings hierarchy (H1 → H2 → H3).

- SEO & Metadata
  - Add route-based `document.title` and meta description updates on navigation in `Router.svelte`.
  - Add structured data (JSON-LD) for organization and potential portfolio items.

- Content & Structure
  - Expand services pages with samples (mini case studies), packages, FAQs, and timelines.
  - Populate `src/data/portfolio.js` with real projects; add filters by industry or capability and a case-study detail page pattern.
  - Consider a Testimonials slice and a light Blog/Insights section for thought leadership.

- Codebase
  - Factor common page patterns (hero + 3-up cards + 2-up lists + CTA) into small Svelte components to reduce duplication.
  - Add a basic Playwright smoke test for routing and critical content (CI can run it after build).

### Coordination Notes
- All changes maintain alignment with the brand philosophy ("kaki"/friendship tone, warm palette, painterly/organic shapes).
- Animations remain CSS-based and lightweight; future work could add Svelte transitions for some elements.
- If we decide to remove the `lxk42-website` submodule marker, we should coordinate a short cleanup PR to avoid confusing future clones.

## Strategic Analysis & Improvement Roadmap

### Technical Status (2025-09-15)
**Critical Issues Resolved:**
- ✅ ESLint configuration updated to exclude `.svelte-kit/` generated files
- ✅ TypeScript errors fixed in data files with proper type casting
- ✅ All build processes now pass successfully
- ⚠️ ESLint warnings remain (mainly missing keys in `{#each}` blocks and unused variables)

### Current State Assessment (2025-09-13)
Based on comprehensive analysis documented in `GEMINI_STRATEGIC_BLUEPRINT.md`, `HOMEPAGE_ANALYSIS.md`, `SERVICES_ANALYSIS.md`, and `IMPROVEMENT_PLAN.md`:

**Overall Grade: B+ (Strong foundation, excellent potential)**

**Key Strengths:**
- **Exceptional Brand Authenticity**: The "kaki" philosophy is genuinely differentiated and culturally resonant
- **Visual Excellence**: Japanese-inspired painterly design with consistent color harmony
- **Technical Foundation**: Modern Svelte 5 + Vite stack with proper tooling
- **Cultural Integration**: Singapore context feels authentic, not tokenistic
- **Brand Consistency**: Perfect alignment between visual and verbal identity across all pages

**Critical Improvement Opportunities:**
1. **Conversion Optimization** (HIGH IMPACT)
   - Weak CTAs: Generic "Contact Us" buttons lack urgency and specificity
   - Missing lead magnets and email capture opportunities
   - No scarcity/urgency elements throughout user journey
   - Single conversion path (contact form only)

2. **Technical Quality Issues** (URGENT)
   - ESLint error in `src/pages/WebApp.svelte:10` (immutable reactive statement)
   - Missing keys in `{#each}` blocks across multiple components
   - Form accessibility issues (labels not associated with controls)
   - Font Awesome CDN dependency impacting performance
   - Image optimization needed (450KB team photo)

3. **Social Proof Deficiency** (MEDIUM-HIGH IMPACT)
   - Placeholder content reducing credibility
   - Generic testimonials across all pages
   - Missing concrete metrics and case study details
   - No client photos or video testimonials
   - Limited third-party validation

4. **Interactive Engagement Gap** (MEDIUM IMPACT)
   - WebApp.svelte has good calculator, but other pages lack interactive elements
   - Missing value-demonstration tools (brand quiz, ROI calculator, style selector)
   - No personalization based on user behavior or industry

### Strategic Vision: "Value-First Engagement"
Transform from passive digital brochure to active client acquisition engine through:

1. **Interactive Kaki Experience**: Let visitors experience value through sophisticated tools
2. **Multi-Path Conversion**: Beyond contact forms - consultation bookings, downloads, progress saving
3. **Relationship Pre-Qualification**: Interactive tools that educate while qualifying leads
4. **Singapore Market Leadership**: Leverage authentic cultural positioning for competitive advantage

### Implementation Priority Matrix

**Phase 1: Critical Fixes (Week 1) - URGENT**
- Fix ESLint errors and accessibility issues
- Replace Font Awesome with inline SVGs
- Add proper keys to all loops
- Resolve form label associations

**Phase 2: Conversion Optimization (Week 2) - HIGH IMPACT**
- Implement enhanced CTAs with urgency elements
- Create service-specific lead magnets
- Add social proof sections with real metrics
- Design exit-intent capture system

**Phase 3: Interactive Tools (Week 3) - HIGH ENGAGEMENT**
- Build interactive hero section (growth visualization)
- Create service-specific micro-tools:
  - Web Design: Style & scope selector
  - Digital Marketing: ROI forecaster
  - Branding: Brand personality quiz
  - Motion Graphics: Animation style previews

**Phase 4: Content & Polish (Week 4) - CREDIBILITY**
- Replace placeholder content with real photos/case studies
- Implement video testimonials
- Add industry-specific examples
- Create detailed project showcases

**Phase 5: Advanced Features (Ongoing) - SCALING**
- Personalization based on visitor behavior
- Advanced analytics and conversion tracking
- A/B testing framework
- Performance monitoring and optimization

### Expected Business Impact
- **Conversion Rate**: 150-300% improvement (from 2-3% to 5-10%)
- **Lead Quality**: Better pre-qualification through interactive tools
- **Sales Cycle**: 30% reduction due to better education and trust-building
- **Brand Perception**: "Most innovative agency in Singapore"
- **Engagement**: 300-400% increase in time on site with interactive elements

### Key Success Factors
1. **Maintain Authenticity**: All improvements must preserve the genuine "kaki" philosophy
2. **Singapore Focus**: Leverage local cultural understanding as competitive advantage
3. **Balance Warmth with Results**: Friendly tone + concrete business outcomes
4. **Systematic Implementation**: Measure, iterate, improve systematically

### Quality Gates Before Any Changes
- [x] `npm run lint` passes (warnings only, no errors)
- [x] `npm run typecheck` passes
- [x] `npm run build` succeeds
- [ ] Manual testing on mobile/desktop
- [ ] Accessibility check with browser tools

### Recent Technical Improvements (2025-09-15)
- Fixed ESLint configuration to properly exclude SvelteKit generated files
- Resolved TypeScript indexing errors in data utility functions
- Updated project structure documentation to reflect SvelteKit migration
- All core development commands now execute successfully

### Context for Future Sessions
This analysis represents months of strategic work by multiple AI agents. The brand foundation is exceptional - the opportunity lies in conversion optimization, technical polish, and interactive engagement while preserving the authentic cultural positioning that makes LXK42 unique in the Singapore market.

The project is currently in a transitional state with excellent potential but requiring systematic execution of the improvement roadmap to realize its full business impact.
