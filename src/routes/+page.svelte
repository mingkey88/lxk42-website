<script>
  import { onMount } from 'svelte';
  import InteractiveHero from '$lib/components/InteractiveHero.svelte';
  import SocialProof from '$lib/components/SocialProof.svelte';
  import About from '$lib/components/About.svelte';
  import Services from '$lib/components/Services.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import TestimonialCarousel from '$lib/components/ui/TestimonialCarousel.svelte';
  import { getFeaturedTestimonials } from '$lib/data/testimonials.js';
  import {
    organizationSchema,
    websiteSchema,
    localBusinessSchema,
    injectStructuredData,
  } from '$lib/structuredData.js';
  import {
    createScrollAnimation,
    createStaggeredAnimation,
    initializeKakiInteractions,
    createResponsiveAnimation,
    optimizeAnimationsForDevice,
    startPerformanceMonitoring,
  } from '$lib/utils/scrollAnimations.ts';

  onMount(() => {
    // Inject structured data for SEO
    injectStructuredData(organizationSchema, 'organization');
    injectStructuredData(websiteSchema, 'website');
    injectStructuredData(localBusinessSchema, 'local-business');

    // Initialize performance monitoring
    startPerformanceMonitoring({
      threshold: 50,
      onLowFPS: fps => {
        console.warn(`Performance warning: ${fps}fps detected - optimizing animations`);
        optimizeAnimationsForDevice();
      },
    });

    // Apply device-specific optimizations
    optimizeAnimationsForDevice();

    // Enhanced responsive scroll animations with device-aware presets
    createResponsiveAnimation('.social-proof-section', {
      mobile: {
        from: { opacity: 0, y: 20 },
        to: { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      },
      tablet: {
        from: { opacity: 0, y: 30 },
        to: { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      },
      desktop: {
        from: { opacity: 0, y: 40 },
        to: { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' },
      },
    });

    createResponsiveAnimation('.about-section', {
      mobile: {
        from: { opacity: 0, scale: 0.95 },
        to: { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.2)' },
      },
      desktop: {
        from: { opacity: 0, y: 50, scale: 0.95 },
        to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.4)' },
      },
    });

    createResponsiveAnimation('.services-section', {
      mobile: {
        from: { opacity: 0, x: -20 },
        to: { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' },
      },
      desktop: {
        from: { opacity: 0, x: -40, rotateY: -5 },
        to: { opacity: 1, x: 0, rotateY: 0, duration: 1, ease: 'power3.out' },
      },
    });

    createResponsiveAnimation('.testimonials-section', {
      mobile: {
        from: { opacity: 0, y: 30 },
        to: { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
      },
      desktop: {
        from: { opacity: 0, y: 60, scale: 0.9 },
        to: { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'elastic.out(1, 0.6)' },
      },
    });

    createResponsiveAnimation('.contact-section', {
      mobile: {
        from: { opacity: 0, scale: 0.9 },
        to: { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' },
      },
      desktop: {
        from: { opacity: 0, y: 40, scale: 0.95 },
        to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' },
      },
    });

    // Initialize enhanced kaki-inspired micro-interactions with performance awareness
    initializeKakiInteractions({
      enableParticles: true,
      enableBreathing: true,
      performanceMode: 'auto',
    });
  });
</script>

<svelte:head>
  <title>Light & Kaki Studio - Your Digital Kaki in Singapore | Web Design & Development</title>
  <meta
    name="description"
    content="Light & Kaki Studio - Where creativity meets friendship. Professional web design, development, and motion graphics services in Singapore. Your trusted digital kaki."
  />
  <meta
    name="keywords"
    content="web design singapore, web development singapore, graphic design singapore, motion graphics singapore"
  />
  <meta property="og:title" content="Light & Kaki Studio - Your Digital Kaki in Singapore" />
  <meta
    property="og:description"
    content="Where creativity meets friendship. Professional web design, development, and motion graphics services in Singapore."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.lxk42.sg" />
  <link rel="canonical" href="https://www.lxk42.sg" />
</svelte:head>

<main id="main-content" class="min-h-screen">
  <InteractiveHero />
  <div class="social-proof-section">
    <SocialProof />
  </div>
  <div class="about-section">
    <About />
  </div>
  <div class="services-section">
    <Services />
  </div>
  <div class="testimonials-section">
    <TestimonialCarousel testimonials={getFeaturedTestimonials()} />
  </div>
  <div class="contact-section">
    <Contact />
  </div>
</main>
