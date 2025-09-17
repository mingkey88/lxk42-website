<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { createCounterAnimation } from '$lib/utils/scrollAnimations.ts';

  onMount(() => {
    // Hero entrance animations - no scroll trigger, just immediate entrance
    const tl = gsap.timeline({ delay: 0.5 });

    // Animate headline with stagger
    tl.fromTo('.hero-title',
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
    .fromTo('.hero-subtitle',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    )
    .fromTo('.hero-cta',
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo('.hero-stat',
      { opacity: 0, x: 30, scale: 0.8 },
      { opacity: 1, x: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.3"
    );

    // Animate the counter in the floating stat
    createCounterAnimation('.stat-number', 150, {
      duration: 2.5,
      trigger: '.hero-stat',
      start: "top 90%"
    });
  });
</script>

<section class="hero-section min-h-screen flex items-center relative overflow-hidden">
  <!-- Clean background with subtle gradient -->
  <div class="absolute inset-0">
    <div class="bg-gradient-to-br from-lxk-sage/20 via-lxk-cream to-lxk-peach/20 h-full"></div>
    <div class="absolute inset-0 bg-lxk-warm-gray/5"></div>
  </div>

  <div class="container-custom relative z-10">
    <div class="max-w-4xl">
      <!-- Bold, impactful headline like 8traordinary -->
      <h1 class="hero-title text-7xl lg:text-9xl font-bold text-lxk-warm-gray leading-[0.9] mb-8">
        Your Creative
        <span class="text-lxk-peach">Kakis</span>
      </h1>

      <!-- Single powerful value proposition -->
      <p class="hero-subtitle text-3xl text-gray-700 leading-relaxed mb-12 max-w-3xl font-light">
        Singapore businesses grow faster with genuine creative partnerships.
      </p>

      <!-- Single primary CTA -->
      <a href="#/contact"
         class="hero-cta inline-flex items-center bg-lxk-peach text-white px-12 py-6 rounded-full hover:bg-lxk-coral transition-all duration-300 font-medium text-xl shadow-xl hover:shadow-2xl group">
        <span>Start Growing Today</span>
        <div class="ml-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
          <span class="text-sm">→</span>
        </div>
      </a>
    </div>
  </div>

  <!-- Simplified floating element - single stat -->
  <div class="hero-stat absolute bottom-16 right-16 hidden lg:block">
    <div class="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl">
      <div class="stat-number text-3xl font-bold text-lxk-peach mb-1">0</div>
      <div class="text-sm text-gray-600">% Faster Growth</div>
    </div>
  </div>
</section>

