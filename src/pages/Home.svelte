<script>
  import { onMount } from 'svelte';
  import InteractiveHero from '../components/InteractiveHero.svelte';
  import SocialProof from '../components/SocialProof.svelte';
  import About from '../components/About.svelte';
  import Services from '../components/Services.svelte';
  import Contact from '../components/Contact.svelte';
  import TestimonialCarousel from '../components/ui/TestimonialCarousel.svelte';
  import { getFeaturedTestimonials } from '../data/testimonials.js';
  import { organizationSchema, websiteSchema, localBusinessSchema, injectStructuredData } from '../lib/structuredData.js';

  onMount(() => {
    // Inject structured data for SEO
    injectStructuredData(organizationSchema, 'organization');
    injectStructuredData(websiteSchema, 'website');
    injectStructuredData(localBusinessSchema, 'local-business');

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));
  });
</script>

<main id="main-content">
  <InteractiveHero />
  <SocialProof />
  <About />
  <Services />
  <TestimonialCarousel testimonials={getFeaturedTestimonials(3)} />

  <!-- Internal Link to Full Testimonials Page -->
  <div class="text-center py-8">
    <a href="#/testimonials" class="inline-flex items-center text-lxk-sage hover:text-lxk-soft-teal transition-colors font-medium">
      See All Client Stories & Reviews →
    </a>
  </div>

  <Contact />

</main>

