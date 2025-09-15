<script>
  import { onMount } from 'svelte';

  export let clients = [];
  export let title = "Trusted by Amazing Kakis";
  export let subtitle = "We're honored to work with these incredible partners";
  export let animationSpeed = 30; // seconds for full loop
  export let showTooltips = true;

  let stripContainer;
  let isPaused = false;

  // Duplicate clients array for seamless loop
  $: duplicatedClients = [...clients, ...clients];

  function pauseAnimation() {
    isPaused = true;
  }

  function resumeAnimation() {
    isPaused = false;
  }

  onMount(() => {
    if (stripContainer) {
      stripContainer.style.setProperty('--animation-duration', `${animationSpeed}s`);
    }
  });
</script>

<!-- Client Logo Strip -->
<section class="section-padding bg-gradient-to-r from-lxk-cream/30 via-white to-lxk-cream/30">
  <div class="container-custom">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <h2 class="text-2xl md:text-3xl font-bold text-lxk-warm-gray mb-3">
        {title}
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>

    {#if clients.length > 0}
      <!-- Logo Strip Container -->
      <div class="relative overflow-hidden">
        <!-- Gradient Overlays for fade effect -->
        <div class="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        <div class="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

        <!-- Scrolling Logo Strip -->
        <div
          bind:this={stripContainer}
          class="flex items-center gap-12 md:gap-16 animate-scroll {isPaused ? 'paused' : ''}"
          role="region"
          aria-label="Client logos"
          on:mouseenter={pauseAnimation}
          on:mouseleave={resumeAnimation}
        >
          {#each duplicatedClients as client, index (client.id + '-' + index)}
            <div class="flex-shrink-0 group relative">
              {#if client.logo}
                <!-- Client Logo -->
                <div class="w-32 md:w-40 h-16 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <img
                    src={client.logo}
                    alt="{client.name} logo"
                    class="max-w-full max-h-full object-contain filter transition-all duration-300 group-hover:brightness-110"
                    loading="lazy"
                  />
                </div>
              {:else}
                <!-- Text Logo Fallback -->
                <div class="w-32 md:w-40 h-16 flex items-center justify-center p-4 bg-gradient-to-br from-lxk-sage/10 to-lxk-soft-teal/10 rounded-lg opacity-60 hover:opacity-100 transition-all duration-300">
                  <span class="text-lxk-warm-gray font-semibold text-sm text-center leading-tight">
                    {client.name}
                  </span>
                </div>
              {/if}

              <!-- Tooltip -->
              {#if showTooltips && client.description}
                <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-lxk-warm-gray text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-20">
                  {client.description}
                  <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-lxk-warm-gray"></div>
                </div>
              {/if}
            </div>
          {/each}
        </div>

        <!-- Optional: Pause/Play Control -->
        <div class="text-center mt-6">
          <button
            class="text-xs text-gray-400 hover:text-lxk-sage transition-colors duration-200 flex items-center gap-1 mx-auto"
            on:click={() => isPaused ? resumeAnimation() : pauseAnimation()}
          >
            {#if isPaused}
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
              </svg>
              Resume
            {:else}
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
              Pause
            {/if}
          </button>
        </div>
      </div>

      <!-- Client Showcase Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
        <div class="text-center">
          <div class="text-2xl font-bold text-lxk-sage mb-1">{clients.length}+</div>
          <div class="text-sm text-gray-600">Happy Kakis</div>
        </div>
        <div class="text-center">
          <div class="text-2xl font-bold text-lxk-coral mb-1">100%</div>
          <div class="text-sm text-gray-600">Project Success</div>
        </div>
        <div class="text-center">
          <div class="text-2xl font-bold text-lxk-peach mb-1">3 Years</div>
          <div class="text-sm text-gray-600">Average Partnership</div>
        </div>
        <div class="text-center">
          <div class="text-2xl font-bold text-lxk-soft-teal mb-1">95%</div>
          <div class="text-sm text-gray-600">Referral Rate</div>
        </div>
      </div>
    {:else}
      <!-- Placeholder when no clients -->
      <div class="text-center py-12">
        <div class="text-gray-400 mb-4">
          <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
          </svg>
        </div>
        <p class="text-gray-500">
          We're building amazing partnerships! <br>
          <span class="text-sm">Be our next featured kaki ✨</span>
        </p>
      </div>
    {/if}
  </div>
</section>

<style>
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-scroll {
    animation: scroll var(--animation-duration, 30s) linear infinite;
  }

  .animate-scroll.paused {
    animation-play-state: paused;
  }

  /* Ensure smooth animation performance */
  .animate-scroll {
    will-change: transform;
  }
</style>