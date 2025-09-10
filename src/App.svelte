<script>
  import { onMount } from 'svelte';
  import Header from './components/Header.svelte';
  import Hero from './components/Hero.svelte';
  import About from './components/About.svelte';
  import Services from './components/Services.svelte';
  import Contact from './components/Contact.svelte';
  import './style.css';

  onMount(() => {
    // Simple fade-in animation on scroll
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

<Header />
<main>
  <Hero />
  <About />
  <Services />
  <Contact />
</main>

<style>
  :global(body) {
    @apply bg-white;
  }
</style>