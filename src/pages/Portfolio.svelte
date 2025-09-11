<script>
  import { projects } from '../data/portfolio.js';
  const tags = Array.from(new Set(projects.flatMap(p => p.tags)));
  let activeTag = 'all';
  $: filtered = activeTag === 'all' ? projects : projects.filter(p => p.tags.includes(activeTag));
</script>

<section class="section-padding">
  <div class="container-custom">
    <div class="text-center mb-12 animate-on-scroll">
      <h1 class="text-4xl md:text-6xl font-extrabold text-lxk-warm-gray mb-4">Portfolio</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">A growing showcase of collaborations with our kakis — real work, real friendships.</p>
    </div>

    <div class="flex flex-wrap gap-3 justify-center mb-10">
      <button class="px-4 py-2 rounded-full border border-lxk-sage text-lxk-sage hover:bg-lxk-sage hover:text-white transition" on:click={() => activeTag = 'all'}>All</button>
      {#each tags as t}
        <button class="px-4 py-2 rounded-full border border-lxk-sage text-lxk-sage hover:bg-lxk-sage hover:text-white transition" on:click={() => activeTag = t}>{t}</button>
      {/each}
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      {#each filtered as p}
        <div class="painterly-card p-6 animate-on-scroll">
          <div class="h-44 bg-lxk-cream rounded-2xl mb-4 soft-shadow flex items-center justify-center text-lxk-warm-gray">
            {#if p.image}
              <img src={p.image} alt={p.title} class="w-full h-full object-cover rounded-2xl" loading="lazy" />
            {:else}
              <span class="opacity-60">Image coming soon</span>
            {/if}
          </div>
          <h3 class="text-xl font-semibold text-lxk-warm-gray mb-1">{p.title}</h3>
          <p class="text-gray-600 text-sm mb-3">{p.summary}</p>
          <div class="flex flex-wrap gap-2 text-xs">
            {#each p.tags as tag}
              <span class="px-2 py-1 rounded-full bg-lxk-mint/30 text-lxk-warm-gray">{tag}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <div class="mt-16 text-center">
      <a href="#contact" class="btn-primary">Start a Project Together</a>
    </div>
  </div>
</section>
