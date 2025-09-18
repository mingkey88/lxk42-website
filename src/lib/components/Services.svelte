<script>
  import { onMount } from 'svelte';
  import { createScrollAnimation, createStaggeredAnimation } from '$lib/utils/scrollAnimations.ts';

  onMount(() => {
    // Animate the section title
    createScrollAnimation('.services-title', 'fadeUp');

    // Stagger animate the service cards
    createStaggeredAnimation('.services-grid', '.service-card', 'fadeUp', { stagger: 0.15 });
  });
</script>

<!-- Services Section -->
<section id="services" class="section-padding">
  <div class="container-custom">
    <div class="text-center mb-20 services-title">
      <h2
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-lxk-warm-gray mb-6 leading-tight"
      >
        How We Help You <span class="text-lxk-peach">Thrive</span>
      </h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 services-grid">
      <a
        href="#/web-design"
        class="service-card group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 block focus:outline-none focus:ring-2 focus:ring-lxk-sage min-h-[44px]"
      >
        <div
          class="bg-gradient-to-br from-lxk-sage/10 to-lxk-mint/10 h-56 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden"
        >
          <!-- Minimalistic desk setup -->
          <div
            class="relative w-32 h-24 transform rotate-3 group-hover:rotate-6 transition-transform duration-300"
          >
            <!-- Monitor -->
            <div class="absolute bottom-4 left-6 w-16 h-10 bg-gray-800 rounded-t-lg shadow-lg">
              <div class="w-full h-8 bg-white rounded-t-lg flex items-center justify-center">
                <div class="grid grid-cols-3 gap-1">
                  <div class="w-1 h-1 bg-lxk-sage rounded-full"></div>
                  <div class="w-2 h-1 bg-lxk-mint rounded-full"></div>
                  <div class="w-1 h-1 bg-lxk-peach rounded-full"></div>
                </div>
              </div>
              <div class="w-full h-2 bg-gray-800 rounded-b-lg"></div>
            </div>
            <!-- Stand -->
            <div class="absolute bottom-2 left-8 w-12 h-2 bg-gray-600 rounded-lg"></div>
            <!-- Base -->
            <div class="absolute bottom-0 left-4 w-16 h-3 bg-gray-400 rounded-lg shadow-sm"></div>
          </div>
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold text-lxk-warm-gray">Web Design</h3>
        </div>
      </a>

      <a
        href="#/web-app"
        class="service-card group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 block focus:outline-none focus:ring-2 focus:ring-lxk-sage min-h-[44px]"
      >
        <div
          class="bg-gradient-to-br from-lxk-peach/10 to-lxk-coral/10 h-56 flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
        >
          <!-- Realistic smartphone -->
          <div
            class="relative w-16 h-28 transform -rotate-12 group-hover:-rotate-18 transition-transform duration-300"
          >
            <!-- Phone body -->
            <div class="w-full h-full bg-gray-900 rounded-2xl shadow-2xl border border-gray-700">
              <!-- Screen -->
              <div class="m-1 h-24 bg-white rounded-xl overflow-hidden">
                <!-- Status bar -->
                <div class="h-1 bg-gray-100 w-full"></div>
                <!-- App icons grid -->
                <div class="p-1 grid grid-cols-3 gap-1 h-full">
                  <div class="bg-lxk-sage rounded opacity-80"></div>
                  <div class="bg-lxk-peach rounded opacity-80"></div>
                  <div class="bg-lxk-coral rounded opacity-80"></div>
                  <div class="bg-lxk-mint rounded opacity-80"></div>
                  <div class="bg-gray-300 rounded opacity-60"></div>
                  <div class="bg-gray-400 rounded opacity-60"></div>
                </div>
              </div>
              <!-- Home button -->
              <div
                class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full"
              ></div>
            </div>
          </div>
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold text-lxk-warm-gray">Web Apps</h3>
        </div>
      </a>

      <a
        href="#/graphic-design"
        class="service-card group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 block focus:outline-none focus:ring-2 focus:ring-lxk-sage min-h-[44px]"
      >
        <div
          class="bg-gradient-to-br from-lxk-sage/10 to-lxk-peach/10 h-56 flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
        >
          <!-- Designer's workspace -->
          <div
            class="relative w-32 h-24 transform -rotate-6 group-hover:-rotate-12 transition-transform duration-300"
          >
            <!-- Drawing tablet -->
            <div class="absolute bottom-2 left-2 w-20 h-16 bg-gray-800 rounded-lg shadow-lg">
              <div class="m-1 h-12 bg-gray-100 rounded flex items-center justify-center">
                <!-- Design elements -->
                <div class="grid grid-cols-3 gap-1">
                  <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
                  <div class="w-3 h-1 bg-lxk-peach rounded"></div>
                  <div class="w-2 h-3 bg-lxk-coral rounded"></div>
                  <div class="w-3 h-2 bg-lxk-mint rounded"></div>
                  <div class="w-2 h-2 bg-gray-400 rounded"></div>
                  <div class="w-1 h-3 bg-lxk-sage rounded"></div>
                </div>
              </div>
              <!-- Control buttons -->
              <div class="absolute bottom-0 right-1 flex space-x-0.5">
                <div class="w-1 h-1 bg-gray-500 rounded-full"></div>
                <div class="w-1 h-1 bg-gray-500 rounded-full"></div>
              </div>
            </div>
            <!-- Stylus -->
            <div
              class="absolute top-4 right-4 w-8 h-1 bg-gray-600 rounded-full transform rotate-45 shadow-sm"
            ></div>
            <!-- Color palette -->
            <div class="absolute top-0 left-8 w-6 h-4 bg-white rounded shadow-sm p-0.5">
              <div class="grid grid-cols-3 gap-0.5 h-full">
                <div class="bg-lxk-sage rounded-sm"></div>
                <div class="bg-lxk-peach rounded-sm"></div>
                <div class="bg-lxk-coral rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold text-lxk-warm-gray">Graphic Design</h3>
        </div>
      </a>

      <a
        href="#/motion-graphics"
        class="service-card group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 block focus:outline-none focus:ring-2 focus:ring-lxk-sage min-h-[44px]"
      >
        <div
          class="bg-gradient-to-br from-lxk-peach/10 to-lxk-mint/10 h-56 flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
        >
          <!-- Film/video equipment -->
          <div
            class="relative w-28 h-20 transform rotate-6 group-hover:rotate-12 transition-transform duration-300"
          >
            <!-- Camera/lens -->
            <div class="absolute bottom-4 left-4 w-16 h-8 bg-gray-800 rounded-lg shadow-lg">
              <!-- Lens -->
              <div
                class="absolute -top-1 left-2 w-8 h-8 bg-gray-700 rounded-full border-2 border-gray-600"
              >
                <div class="absolute inset-1 bg-gray-900 rounded-full">
                  <div
                    class="absolute inset-1 bg-gradient-to-br from-blue-900 to-purple-900 rounded-full opacity-60"
                  ></div>
                </div>
              </div>
              <!-- Camera body details -->
              <div
                class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"
              ></div>
              <div class="absolute bottom-1 right-2 w-3 h-1 bg-gray-600 rounded"></div>
            </div>
            <!-- Film strip -->
            <div class="absolute top-0 right-2 w-12 h-6 bg-gray-800 rounded shadow-md">
              <div class="flex h-full">
                <div class="w-1 bg-gray-600"></div>
                <div class="flex-1 grid grid-cols-3 gap-0.5 p-0.5">
                  <div class="bg-lxk-peach rounded-sm opacity-60"></div>
                  <div class="bg-lxk-mint rounded-sm opacity-60"></div>
                  <div class="bg-lxk-coral rounded-sm opacity-60"></div>
                </div>
                <div class="w-1 bg-gray-600"></div>
              </div>
            </div>
            <!-- Motion lines -->
            <div class="absolute top-8 left-0 space-y-0.5 opacity-40">
              <div class="w-4 h-0.5 bg-lxk-peach rounded animate-pulse"></div>
              <div
                class="w-6 h-0.5 bg-lxk-mint rounded animate-pulse"
                style="animation-delay: 0.1s;"
              ></div>
              <div
                class="w-3 h-0.5 bg-lxk-coral rounded animate-pulse"
                style="animation-delay: 0.2s;"
              ></div>
            </div>
          </div>
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold text-lxk-warm-gray">Motion Graphics</h3>
        </div>
      </a>
    </div>
  </div>
</section>
