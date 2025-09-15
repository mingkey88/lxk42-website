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

  onMount(() => {
    // Inject structured data for SEO
    injectStructuredData(organizationSchema, 'organization');
    injectStructuredData(websiteSchema, 'website');
    injectStructuredData(localBusinessSchema, 'local-business');

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  });
</script>

<svelte:head>
  <title>Light & Kaki Studio - Your Digital Kaki in Singapore | Web Design & Development</title>
  <meta name="description" content="Light & Kaki Studio - Where creativity meets friendship. Professional web design, development, and digital marketing services in Singapore. Your trusted digital kaki." />
  <meta name="keywords" content="web design singapore, web development singapore, digital marketing singapore, branding singapore, graphic design singapore" />
  <meta property="og:title" content="Light & Kaki Studio - Your Digital Kaki in Singapore" />
  <meta property="og:description" content="Where creativity meets friendship. Professional web design, development, and digital marketing services in Singapore." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.lxk42.sg" />
  <link rel="canonical" href="https://www.lxk42.sg" />
</svelte:head>

<main class="min-h-screen">
  <InteractiveHero />
  <SocialProof />
  <About />
  <Services />
  <TestimonialCarousel testimonials={getFeaturedTestimonials()} />
  <Contact />
</main>

<style>
  .section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .section.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
</style>