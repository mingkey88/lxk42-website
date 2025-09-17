<script>

  let selectedStyle = 'smooth';
  let selectedDuration = 'medium';
  let selectedColor = 'brand';
  let isPlaying = false;
  let animationKey = 0; // Force re-render of animations

  const styles = {
    smooth: {
      name: 'Smooth & Organic',
      description: 'Flowing movements with natural curves',
      class: 'animate-smooth',
      gradient: 'from-blue-400 to-blue-600'
    },
    bouncy: {
      name: 'Playful Bounce',
      description: 'Energetic with spring-like motion',
      class: 'animate-bouncy',
      gradient: 'from-yellow-400 to-orange-500'
    },
    elegant: {
      name: 'Elegant Float',
      description: 'Subtle, sophisticated movements',
      class: 'animate-elegant',
      gradient: 'from-purple-400 to-pink-500'
    },
    dynamic: {
      name: 'Dynamic Pop',
      description: 'Bold, attention-grabbing transitions',
      class: 'animate-dynamic',
      gradient: 'from-green-400 to-blue-500'
    }
  };

  const durations = {
    fast: { name: 'Fast (0.3s)', value: '300ms' },
    medium: { name: 'Medium (0.6s)', value: '600ms' },
    slow: { name: 'Slow (1.2s)', value: '1200ms' }
  };

  const colorSchemes = {
    brand: {
      name: 'LXK42 Brand',
      primary: '#8FA68E',
      secondary: '#E6A866',
      accent: '#D4947A'
    },
    modern: {
      name: 'Modern Tech',
      primary: '#6366F1',
      secondary: '#EC4899',
      accent: '#10B981'
    },
    warm: {
      name: 'Warm Natural',
      primary: '#F59E0B',
      secondary: '#EF4444',
      accent: '#84CC16'
    },
    cool: {
      name: 'Cool Professional',
      primary: '#0EA5E9',
      secondary: '#8B5CF6',
      accent: '#06B6D4'
    }
  };

  function playAnimation() {
    isPlaying = true;
    animationKey++; // Force re-render

    // Reset after animation completes
    setTimeout(() => {
      isPlaying = false;
    }, parseInt(durations[selectedDuration].value) + 500);
  }

  function getEstimate() {
    const basePrice = 800; // Base price for motion graphics

    const styleMultipliers = {
      smooth: 1.0,
      bouncy: 1.1,
      elegant: 1.2,
      dynamic: 1.3
    };

    const durationMultipliers = {
      fast: 0.8,
      medium: 1.0,
      slow: 1.2
    };

    const estimate = Math.round(basePrice * styleMultipliers[selectedStyle] * durationMultipliers[selectedDuration]);
    const timeline = selectedDuration === 'slow' ? '3-4 days' : selectedDuration === 'medium' ? '2-3 days' : '1-2 days';

    return { price: estimate, timeline };
  }

  $: currentColor = colorSchemes[selectedColor];
  $: estimate = selectedStyle && selectedDuration ? getEstimate() : { price: 0, timeline: '1-2 days' };
</script>

<!-- Animation Style Preview Tool -->
<div class="bg-gradient-to-br from-lxk-mint/10 to-lxk-sage/10 rounded-3xl p-8 border border-lxk-mint/20">
  <div class="text-center mb-8">
    <div class="w-16 h-16 bg-gradient-to-br from-lxk-mint to-lxk-sage rounded-2xl flex items-center justify-center mx-auto mb-4">
      <span class="text-2xl text-white">🎬</span>
    </div>
    <h3 class="text-2xl font-bold text-lxk-warm-gray mb-2">Animation Style Preview</h3>
    <p class="text-gray-600">Explore different animation styles and see your custom estimate</p>
  </div>

  <div class="grid md:grid-cols-2 gap-8">
    <!-- Controls -->
    <div class="space-y-6">
      <!-- Style Selection -->
      <div>
        <div class="block text-lg font-semibold text-lxk-warm-gray mb-4">Animation Style</div>
        <div class="space-y-3">
          {#each Object.entries(styles) as [key, style] (key)}
            <button
              on:click={() => selectedStyle = key}
              class="w-full text-left p-4 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg {
                selectedStyle === key
                  ? 'border-lxk-mint bg-lxk-mint/10 shadow-lg'
                  : 'border-gray-200 hover:border-lxk-mint/50'
              }">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-gradient-to-br {style.gradient} rounded-lg shadow-sm"></div>
                <div>
                  <div class="font-semibold text-lxk-warm-gray">{style.name}</div>
                  <div class="text-sm text-gray-600">{style.description}</div>
                </div>
              </div>
            </button>
          {/each}
        </div>
      </div>

      <!-- Duration & Color -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="duration" class="block text-sm font-semibold text-lxk-warm-gray mb-2">
            Speed
          </label>
          <select
            id="duration"
            bind:value={selectedDuration}
            class="w-full p-3 rounded-2xl border-2 border-gray-200 focus:border-lxk-mint focus:ring-2 focus:ring-lxk-mint/20 transition-all outline-none">
            {#each Object.entries(durations) as [key, duration] (key)}
              <option value={key}>{duration.name}</option>
            {/each}
          </select>
        </div>

        <div>
          <label for="color" class="block text-sm font-semibold text-lxk-warm-gray mb-2">
            Color Scheme
          </label>
          <select
            id="color"
            bind:value={selectedColor}
            class="w-full p-3 rounded-2xl border-2 border-gray-200 focus:border-lxk-mint focus:ring-2 focus:ring-lxk-mint/20 transition-all outline-none">
            {#each Object.entries(colorSchemes) as [key, scheme] (key)}
              <option value={key}>{scheme.name}</option>
            {/each}
          </select>
        </div>
      </div>

      <!-- Estimate -->
      <div class="bg-white rounded-2xl p-6 border-2 border-lxk-mint/20">
        <h4 class="font-semibold text-lxk-warm-gray mb-3">Estimated Cost</h4>
        <div class="flex justify-between items-center mb-4">
          <span class="text-2xl font-bold text-lxk-mint">SGD ${estimate.price}</span>
          <span class="text-lxk-coral font-medium">{estimate.timeline}</span>
        </div>
        <div class="text-sm text-gray-600">
          Based on: {styles[selectedStyle].name}, {durations[selectedDuration].name.toLowerCase()} timing, {colorSchemes[selectedColor].name.toLowerCase()}
        </div>
      </div>
    </div>

    <!-- Preview Area -->
    <div class="bg-white rounded-3xl p-8 border-2 border-gray-100 relative overflow-hidden min-h-[400px]">
      <h4 class="font-semibold text-lxk-warm-gray mb-6 text-center">Animation Preview</h4>

      <!-- Preview Stage -->
      <div class="relative h-64 flex items-center justify-center">
        <!-- Animated Elements -->
        {#key animationKey}
          <div class="relative">
            <!-- Main Shape -->
            <div
              class="w-20 h-20 rounded-2xl shadow-lg {styles[selectedStyle].class} {isPlaying ? 'animate-running' : ''}"
              style="
                background: linear-gradient(135deg, {currentColor.primary}, {currentColor.secondary});
                animation-duration: {durations[selectedDuration].value};
              ">
            </div>

            <!-- Secondary Elements -->
            <div
              class="absolute -top-2 -right-2 w-6 h-6 rounded-full {styles[selectedStyle].class} {isPlaying ? 'animate-running' : ''}"
              style="
                background: {currentColor.accent};
                animation-duration: {parseInt(durations[selectedDuration].value) * 0.8}ms;
                animation-delay: 200ms;
              ">
            </div>

            <div
              class="absolute -bottom-2 -left-2 w-4 h-4 rounded-full {styles[selectedStyle].class} {isPlaying ? 'animate-running' : ''}"
              style="
                background: {currentColor.secondary};
                animation-duration: {parseInt(durations[selectedDuration].value) * 1.2}ms;
                animation-delay: 400ms;
              ">
            </div>
          </div>
        {/key}

        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-10">
          <div class="grid grid-cols-8 gap-2 h-full">
            {#each Array(32) as _, i}
              <div class="bg-gray-300 rounded-full transform" style="animation-delay: {i * 100}ms;"></div>
            {/each}
          </div>
        </div>
      </div>

      <!-- Play Button -->
      <div class="text-center mt-6">
        <button
          on:click={playAnimation}
          disabled={isPlaying}
          class="bg-gradient-to-r from-lxk-mint to-lxk-sage text-white px-8 py-3 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
          {#if isPlaying}
            Playing Animation...
          {:else}
            ▶ Preview Animation
          {/if}
        </button>
      </div>
    </div>
  </div>

  <!-- Action Button -->
  <div class="mt-8 text-center">
    <a
      href="#contact?service=motion-graphics&style={selectedStyle}&duration={selectedDuration}&estimate={estimate.price}"
      class="inline-flex items-center bg-gradient-to-r from-lxk-mint to-lxk-sage text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
      <span>Get Custom Animation Quote</span>
      <div class="ml-3 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
        <span class="text-sm">→</span>
      </div>
    </a>
  </div>
</div>

<style>
  @keyframes smooth {
    0% { transform: translateY(0) scale(1) rotate(0deg); }
    25% { transform: translateY(-20px) scale(1.1) rotate(5deg); }
    50% { transform: translateY(-10px) scale(1.05) rotate(-3deg); }
    75% { transform: translateY(-15px) scale(1.08) rotate(2deg); }
    100% { transform: translateY(0) scale(1) rotate(0deg); }
  }

  @keyframes bouncy {
    0% { transform: translateY(0) scale(1); }
    25% { transform: translateY(-30px) scale(0.9); }
    50% { transform: translateY(-5px) scale(1.2); }
    75% { transform: translateY(-20px) scale(0.95); }
    100% { transform: translateY(0) scale(1); }
  }

  @keyframes elegant {
    0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 1; }
    25% { transform: translateY(-10px) scale(1.02) rotate(2deg); opacity: 0.8; }
    50% { transform: translateY(-15px) scale(1.03) rotate(-1deg); opacity: 0.9; }
    75% { transform: translateY(-8px) scale(1.01) rotate(1deg); opacity: 0.85; }
    100% { transform: translateY(0) scale(1) rotate(0deg); opacity: 1; }
  }

  @keyframes dynamic {
    0% { transform: translateY(0) scale(1) rotate(0deg); }
    20% { transform: translateY(-40px) scale(0.8) rotate(-10deg); }
    40% { transform: translateY(-10px) scale(1.3) rotate(5deg); }
    60% { transform: translateY(-25px) scale(0.9) rotate(-5deg); }
    80% { transform: translateY(-5px) scale(1.15) rotate(3deg); }
    100% { transform: translateY(0) scale(1) rotate(0deg); }
  }

  .animate-smooth.animate-running {
    animation-name: smooth;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    animation-fill-mode: both;
  }

  .animate-bouncy.animate-running {
    animation-name: bouncy;
    animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    animation-fill-mode: both;
  }

  .animate-elegant.animate-running {
    animation-name: elegant;
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    animation-fill-mode: both;
  }

  .animate-dynamic.animate-running {
    animation-name: dynamic;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    animation-fill-mode: both;
  }
</style>