<script>
  import { onMount } from 'svelte';
  import InteractiveHero from '$lib/components/InteractiveHero.svelte';
  import SocialProof from '$lib/components/SocialProof.svelte';
  import About from '$lib/components/About.svelte';
  import Services from '$lib/components/Services.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import TestimonialCarousel from '$lib/components/ui/TestimonialCarousel.svelte';
  import { getFeaturedTestimonials } from '$lib/data/testimonials.js';
  import { organizationSchema, websiteSchema, localBusinessSchema, injectStructuredData } from '$lib/structuredData.js';
  import { createScrollAnimation, createStaggeredAnimation, initializeKakiInteractions } from '$lib/utils/scrollAnimations.ts';

  onMount(() => {
    // Inject structured data for SEO
    injectStructuredData(organizationSchema, 'organization');
    injectStructuredData(websiteSchema, 'website');
    injectStructuredData(localBusinessSchema, 'local-business');

    // GSAP scroll animations
    createScrollAnimation('.social-proof-section', 'fadeUp');
    createScrollAnimation('.about-section', 'fadeUp');
    createScrollAnimation('.services-section', 'fadeUp');
    createScrollAnimation('.testimonials-section', 'fadeUp');
    createScrollAnimation('.contact-section', 'fadeUp');

    // Initialize kaki-inspired micro-interactions
    initializeKakiInteractions();
  });
</script>

<svelte:head>
  <title>Light & Kaki Studio - Your Digital Kaki in Singapore | Web Design & Development</title>
  <meta name="description" content="Light & Kaki Studio - Where creativity meets friendship. Professional web design, development, and motion graphics services in Singapore. Your trusted digital kaki." />
  <meta name="keywords" content="web design singapore, web development singapore, graphic design singapore, motion graphics singapore" />
  <meta property="og:title" content="Light & Kaki Studio - Your Digital Kaki in Singapore" />
  <meta property="og:description" content="Where creativity meets friendship. Professional web design, development, and motion graphics services in Singapore." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.lxk42.sg" />
  <link rel="canonical" href="https://www.lxk42.sg" />
</svelte:head>

<main class="min-h-screen">
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

