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
- **Framework**: Svelte 5 with TypeScript support
- **Build System**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom color palette and component classes
- **Code Quality**: ESLint + Prettier with TypeScript integration
- **Hosting**: Firebase Hosting with automatic GitHub Actions deployment
- **Version Control**: GitHub repository at mingkey88/lxk42-website

### Current Project Structure
```
lxk42-website/
├── src/
│   ├── components/          # Svelte components (Header, Hero, About, etc.)
│   ├── assets/             # Static assets (images, icons)
│   ├── App.svelte          # Root component with scroll animations
│   ├── main.js             # Application entry point
│   └── style.css           # Custom CSS, animations, Tailwind components
├── index.html              # HTML entry point with Svelte mounting
├── vite.config.js          # Vite configuration with Svelte plugin
├── svelte.config.js        # Svelte-specific configuration
├── tailwind.config.js      # Custom color palette and configuration
├── tsconfig.json           # TypeScript configuration
├── eslint.config.js        # ESLint rules and TypeScript integration
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
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint checks
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format code with Prettier
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

## Svelte Component Architecture

### Component Organization
- **Atomic Components**: Small, reusable UI elements (buttons, inputs, cards)
- **Layout Components**: Header, Footer, navigation - structural elements
- **Page Sections**: Hero, About, Services, Contact - main content blocks
- **Utility Components**: Modals, tooltips, animations - functional elements

### Svelte Best Practices
- Use `bind:` for two-way data binding sparingly
- Leverage reactive statements `$:` for computed values
- Keep component props interface clean and well-typed
- Use context API for deeply nested prop passing
- Prefer composition over inheritance for component design

### State Management
- Component state for local UI state
- Context API for shared state across components
- Reactive variables for computed values
- Event dispatching for parent-child communication

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
