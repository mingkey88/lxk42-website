<script>
  import { onMount } from 'svelte';
  import Hero from '../components/Hero.svelte';
  import About from '../components/About.svelte';
  import WhyWorkWithUs from '../components/WhyWorkWithUs.svelte';
  import WorkProcess from '../components/WorkProcess.svelte';
  import Services from '../components/Services.svelte';
  import Contact from '../components/Contact.svelte';

  onMount(() => {
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
  <Hero />
  <About />
  <WhyWorkWithUs />
  <WorkProcess />
  <Services />
  <Contact />
  
</main>

