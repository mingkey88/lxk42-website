<script>
  import { onMount } from 'svelte';
  import VideoPlayer from './ui/VideoPlayer.svelte';
  import LoadingSkeleton from './ui/LoadingSkeleton.svelte';

  onMount(() => {

    // Simple scroll animations using IntersectionObserver
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.about-visual, .about-content');
    animateElements.forEach(el => observer.observe(el));
  });
</script>

<!-- About Section -->
<section id="about" class="section-padding bg-lxk-cream relative overflow-hidden">
  <!-- Anime-style background elements -->
  <div class="absolute inset-0 z-0">
    <!-- Subtle paint splashes -->
    <div
      class="paint-splash-2"
      style="top: 20%; right: 5%; transform: scale(0.7); opacity: 0.4;"
    ></div>
    <div
      class="paint-splash-3"
      style="bottom: 15%; left: 10%; transform: scale(0.6); opacity: 0.3;"
    ></div>

    <!-- Floating elements -->
    <div class="floating-leaf" style="top: 40%; right: 15%; animation-delay: -8s;"></div>
    <div class="floating-butterfly" style="bottom: 50%; right: 25%; animation-delay: -3s;"></div>

    <!-- Geometric frame -->
    <div
      class="circle-frame"
      style="width: 200px; height: 200px; top: 60%; left: 5%; opacity: 0.2; animation-delay: -10s;"
    ></div>
  </div>

  <div class="container-custom relative z-10">
    <!-- Simplified hero section with asymmetrical layout -->
    <div class="grid lg:grid-cols-2 gap-16 items-center mb-24">
      <!-- Large visual placeholder -->
      <div class="about-visual">
        <div
          class="bg-gradient-to-br from-lxk-sage/20 to-lxk-peach/20 rounded-3xl h-96 flex items-center justify-center overflow-hidden relative"
        >
          <!-- Coffee shop collaboration video -->
          <VideoPlayer
            src="/coffee-shop-collaboration.mp4"
            className="w-full h-full object-cover rounded-2xl"
            alt="Coffee shop collaboration between creative kakis"
            lazy={true}
          />

          <!-- Collaboration element overlay -->
          <div
            class="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg"
          >
            <div class="flex items-center space-x-2">
              <div class="flex -space-x-1">
                <div class="w-4 h-4 bg-lxk-sage rounded-full border-2 border-white shadow-sm"></div>
                <div
                  class="w-4 h-4 bg-lxk-peach rounded-full border-2 border-white shadow-sm"
                ></div>
              </div>
              <span class="text-xs font-medium text-lxk-warm-gray">Working Together</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Minimal, impactful text -->
      <div class="about-content">
        <h2 class="text-5xl lg:text-6xl font-bold text-lxk-warm-gray mb-8 leading-tight">
          Where Creativity Meets <span class="text-lxk-peach">Friendship</span>
        </h2>
        <p class="text-xl text-gray-600 mb-8 leading-relaxed">
          In Singapore, "kaki" means friend. We're the creative kakis who make business dreams
          reality.
        </p>
        <a href="#/about-us" class="text-lxk-sage hover:text-lxk-soft-teal font-medium text-lg">
          Meet the team →
        </a>
      </div>
    </div>

    <!-- Our Kaki Way - Integrated Values & Process -->
    <div class="text-center mb-16 animate-on-scroll">
      <h3 class="text-4xl font-bold text-lxk-warm-gray mb-4">Our Kaki Way</h3>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        How friendship-first values translate into exceptional results — our proven approach to
        creative collaboration.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      <!-- Step 1: Real Conversations -->
      <div
        class="painterly-card p-6 animate-on-scroll group hover:scale-105 transition-all duration-300"
      >
        <div
          class="bg-gradient-to-br from-lxk-sage/20 to-lxk-mint/20 rounded-xl p-4 mb-4 text-center"
        >
          <div class="text-3xl mb-2">☕</div>
          <div class="text-xs font-semibold text-lxk-sage uppercase tracking-wide">Step 1</div>
        </div>
        <h4 class="text-lg font-bold text-lxk-sage mb-2">Real Conversations</h4>
        <p class="text-sm text-gray-600 mb-3">
          Coffee chats, not corporate meetings. We listen deeply to understand your vision,
          challenges, and dreams.
        </p>
        <div class="text-xs text-lxk-coral font-medium">→ Discovery & Strategy</div>
      </div>

      <!-- Step 2: Genuine Collaboration -->
      <div
        class="painterly-card p-6 animate-on-scroll group hover:scale-105 transition-all duration-300"
      >
        <div
          class="bg-gradient-to-br from-lxk-peach/20 to-lxk-coral/20 rounded-xl p-4 mb-4 text-center"
        >
          <div
            class="w-8 h-8 bg-lxk-peach rounded-lg mx-auto mb-2 flex items-center justify-center"
          >
            <div class="w-4 h-4 border-2 border-white rounded"></div>
          </div>
          <div class="text-xs font-semibold text-lxk-peach uppercase tracking-wide">Step 2</div>
        </div>
        <h4 class="text-lg font-bold text-lxk-peach mb-2">Genuine Collaboration</h4>
        <p class="text-sm text-gray-600 mb-3">
          Your ideas matter. We co-create through regular feedback, iterations, and shared
          decision-making.
        </p>
        <div class="text-xs text-lxk-coral font-medium">→ Design & Feedback</div>
      </div>

      <!-- Step 3: Singapore Heart -->
      <div
        class="painterly-card p-6 animate-on-scroll group hover:scale-105 transition-all duration-300"
      >
        <div
          class="bg-gradient-to-br from-lxk-coral/20 to-lxk-sage/20 rounded-xl p-4 mb-4 text-center"
        >
          <div
            class="w-8 h-8 bg-lxk-coral rounded-lg mx-auto mb-2 flex items-center justify-center"
          >
            <div class="w-5 h-3 bg-white rounded-sm"></div>
          </div>
          <div class="text-xs font-semibold text-lxk-coral uppercase tracking-wide">Step 3</div>
        </div>
        <h4 class="text-lg font-bold text-lxk-coral mb-2">Singapore Heart</h4>
        <p class="text-sm text-gray-600 mb-3">
          We get the local market, culture, and business landscape. Your success is our kaki
          success.
        </p>
        <div class="text-xs text-lxk-coral font-medium">→ Local Understanding</div>
      </div>

      <!-- Step 4: Beautiful Results -->
      <div
        class="painterly-card p-6 animate-on-scroll group hover:scale-105 transition-all duration-300"
      >
        <div
          class="bg-gradient-to-br from-lxk-mint/20 to-lxk-peach/20 rounded-xl p-4 mb-4 text-center"
        >
          <div class="w-8 h-8 bg-lxk-mint rounded-lg mx-auto mb-2 flex items-center justify-center">
            <div class="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <div class="text-xs font-semibold text-lxk-mint uppercase tracking-wide">Step 4</div>
        </div>
        <h4 class="text-lg font-bold text-lxk-sage mb-2">Beautiful Results</h4>
        <p class="text-sm text-gray-600 mb-3">
          Polished delivery with ongoing support. We celebrate your wins and stay connected as
          kakis.
        </p>
        <div class="text-xs text-lxk-coral font-medium">→ Delivery & Support</div>
      </div>
    </div>

    <!-- Process Flow Visualization -->
    <div class="bg-white/60 backdrop-blur rounded-3xl p-8 mb-16 animate-on-scroll">
      <h4 class="text-2xl font-bold text-lxk-warm-gray mb-6 text-center">The Journey Together</h4>
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div
            class="w-8 h-8 bg-lxk-sage rounded-full flex items-center justify-center text-white text-sm font-bold"
          >
            1
          </div>
          <span class="text-sm font-medium text-gray-700">Kopi & Dreams</span>
        </div>
        <div class="hidden md:block w-8 h-px bg-gradient-to-r from-lxk-sage to-lxk-peach"></div>
        <div class="flex items-center gap-3">
          <div
            class="w-8 h-8 bg-lxk-peach rounded-full flex items-center justify-center text-white text-sm font-bold"
          >
            2
          </div>
          <span class="text-sm font-medium text-gray-700">Create Together</span>
        </div>
        <div class="hidden md:block w-8 h-px bg-gradient-to-r from-lxk-peach to-lxk-coral"></div>
        <div class="flex items-center gap-3">
          <div
            class="w-8 h-8 bg-lxk-coral rounded-full flex items-center justify-center text-white text-sm font-bold"
          >
            3
          </div>
          <span class="text-sm font-medium text-gray-700">Launch & Grow</span>
        </div>
        <div class="hidden md:block w-8 h-px bg-gradient-to-r from-lxk-coral to-lxk-sage"></div>
        <div class="flex items-center gap-3">
          <div
            class="w-8 h-8 bg-lxk-sage rounded-full flex items-center justify-center text-white text-sm font-bold"
          >
            ∞
          </div>
          <span class="text-sm font-medium text-gray-700">Kakis Forever</span>
        </div>
      </div>
    </div>

    <!-- Video CTA with Overlay -->
    <div class="text-center">
      <div class="relative rounded-3xl overflow-hidden h-96">
        <!-- Background Video -->
        <VideoPlayer
          src="/ready-to-start.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Ready to start collaboration video"
          lazy={true}
        />

        <!-- Dark overlay for better text readability -->
        <div class="absolute inset-0 bg-black/40"></div>

        <!-- Content overlay -->
        <div class="absolute inset-0 flex flex-col items-center justify-center text-white p-16">
          <h3 class="text-4xl font-bold mb-6">Ready to Be Kakis?</h3>
          <a
            href="#contact"
            class="inline-flex items-center bg-white text-lxk-sage px-10 py-5 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-lg group shadow-lg"
          >
            Start Our Journey Together
            <div
              class="ml-3 w-6 h-6 bg-lxk-sage/10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform"
            >
              <span class="text-sm">→</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
