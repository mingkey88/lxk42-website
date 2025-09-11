<script>
  import { onMount, tick } from 'svelte';
  import Home from './pages/Home.svelte';
  import WebDesign from './pages/WebDesign.svelte';
  import WebApp from './pages/WebApp.svelte';
  import Portfolio from './pages/Portfolio.svelte';
  import DigitalMarketing from './pages/DigitalMarketing.svelte';
  import Branding from './pages/Branding.svelte';
  import GraphicDesign from './pages/GraphicDesign.svelte';
  import MotionGraphics from './pages/MotionGraphics.svelte';

  let route = '/';
  let scrollTarget = '';

  function parseRoute() {
    const hash = window.location.hash || '#/';
    const path = hash.replace(/^#/, '') || '/';
    return path;
  }

  async function navigate() {
    route = parseRoute();
    // Support sub-routes that map to Home with scroll
    const homeAnchors = new Set(['/about', '/contact', '/services']);
    if (homeAnchors.has(route)) {
      scrollTarget = route.slice(1);
      route = '/';
      await tick();
      const el = document.getElementById(scrollTarget);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    // Route aliasing (backward compatibility)
    if (route === '/animation') {
      route = '/motion-graphics'
    }

    // Default: scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onMount(() => {
    navigate();
    window.addEventListener('hashchange', navigate);
    return () => window.removeEventListener('hashchange', navigate);
  });
</script>

{#if route === '/' || route === ''}
  <Home />
{:else if route === '/web-design'}
  <WebDesign />
{:else if route === '/web-app'}
  <WebApp />
{:else if route === '/portfolio'}
  <Portfolio />
{:else if route === '/digital-marketing'}
  <DigitalMarketing />
{:else if route === '/branding'}
  <Branding />
{:else if route === '/graphic-design'}
  <GraphicDesign />
{:else if route === '/motion-graphics'}
  <MotionGraphics />
{:else}
  <Home />
{/if}
