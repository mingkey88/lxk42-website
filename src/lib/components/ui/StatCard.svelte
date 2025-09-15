<script>
  import { onMount } from 'svelte';

  export let value; // number or string
  export let label = '';
  export let suffix = '';
  export let color = 'sage'; // 'sage' | 'peach' | 'coral'
  export let subtext = '';
  export let countUp = true;

  let el;
  let displayValue = typeof value === 'number' ? 0 : value;
  let animated = false;

  const gradients = {
    sage: 'from-lxk-sage to-lxk-soft-teal',
    peach: 'from-lxk-peach to-lxk-coral',
    coral: 'from-lxk-coral to-lxk-peach'
  };

  function animateCount(to) {
    const duration = 1000;
    const start = performance.now();
    const from = 0;

    function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      displayValue = Math.round((from + (to - from) * eased) * 100) / 100;
      if (t < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  onMount(() => {
    if (typeof value !== 'number' || !countUp) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            animated = true;
            animateCount(value);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  });
</script>

<div bind:this={el} class="painterly-card p-6 text-center">
  <div class="mb-2">
    <div class={`text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${gradients[color] || gradients.sage} tabular-nums`}>
      {#if typeof value === 'number'}
        {displayValue}{suffix}
      {:else}
        {value}
      {/if}
    </div>
  </div>
  <div class="text-sm font-medium text-lxk-warm-gray">{label}</div>
  {#if subtext}
    <div class="text-xs text-gray-500 mt-1">{subtext}</div>
  {/if}
</div>

<style>
  .tabular-nums {
    font-variant-numeric: tabular-nums;
  }
</style>

