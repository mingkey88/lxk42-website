<script>
  import { onMount, tick } from 'svelte';
  import { findRoute } from './routes.js';
  let Component = null;
  let scrollTarget = '';

  function parseRoute() {
    const hash = window.location.hash || '#/';
    const path = hash.replace(/^#/, '') || '/';
    return path;
  }

  async function navigate() {
    let path = parseRoute();

    // Support sub-routes that map to Home with scroll
    const homeAnchors = new Set(['/about', '/contact', '/services']);
    if (homeAnchors.has(path)) {
      scrollTarget = path.slice(1);
      path = '/';
      await loadRoute(path);
      await tick();
      const el = document.getElementById(scrollTarget);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    // Route aliasing (backward compatibility)
    if (path === '/animation') {
      path = '/motion-graphics';
    }

    await loadRoute(path);

    // Default: scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function loadRoute(path) {
    const route = findRoute(path);
    try {
      const mod = await route.load();
      Component = mod.default;
      if (route.title && typeof document !== 'undefined') {
        document.title = route.title;
      }
    } catch {
      // Fallback to home on load error
      const home = findRoute('/');
      const mod = await home.load();
      Component = mod.default;
      document.title = home.title || document.title;
    }
  }

  onMount(() => {
    navigate();
    window.addEventListener('hashchange', navigate);
    return () => window.removeEventListener('hashchange', navigate);
  });
</script>

{#if Component}
  <svelte:component this={Component} />
{:else}
  <!-- Optionally, add a loading skeleton here -->
{/if}
