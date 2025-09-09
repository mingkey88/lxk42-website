# CLAUDE.md

This file provides guidance to Claude AI when working with the Light & Kaki Studio website project.

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
- **Build System**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom color palette and component classes
- **JavaScript**: Vanilla ES6+ for lightweight, framework-free implementation
- **Hosting**: Firebase Hosting with automatic GitHub Actions deployment
- **Version Control**: GitHub repository at mingkey88/lxk42-website

### Key Files Structure
```
├── src/style.css          # Custom animations, painterly effects, component classes
├── src/main.js            # Mobile menu, scroll animations, intersection observer
├── index.html             # Single-page application with all content
├── tailwind.config.js     # Custom color palette and plugin configuration
├── firebase.json          # Hosting configuration pointing to dist/
└── package.json           # Vite scripts and Tailwind dependencies
```

## Development Guidelines

### Code Style Preferences
- **CSS**: Use Tailwind utility classes with custom components defined in @layer components
- **JavaScript**: Vanilla ES6+ with modern browser APIs, no external dependencies
- **HTML**: Semantic structure with accessibility in mind, single-page application
- **Animations**: Pure CSS with custom keyframes, avoid JavaScript-heavy animation libraries

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

## When Making Changes

### Always Consider
1. **Brand Consistency**: Does this align with the Light & Kaki philosophy?
2. **Cultural Authenticity**: Is the Singapore context respected?
3. **Performance Impact**: Will this affect loading speed or animation smoothness?
4. **Mobile Experience**: How does this work on smaller screens?
5. **Accessibility**: Can all users access this feature?

### Testing Checklist
- Test on multiple screen sizes and devices
- Verify animations work smoothly across browsers
- Check color contrast ratios
- Validate HTML and CSS
- Test mobile navigation and touch interactions

This project represents a unique blend of Japanese aesthetic sensibilities with Singapore cultural context, built on modern web technologies while maintaining excellent performance and accessibility standards.
