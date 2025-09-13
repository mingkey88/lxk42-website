<script>
  import { onMount } from 'svelte';

  let numberAnimations = {
    businesses: 0,
    revenue: 0,
    satisfaction: 0,
    timeToResults: 0
  };

  onMount(() => {
    // Animate numbers when component becomes visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateNumbers();
          observer.unobserve(entry.target);
        }
      });
    });

    const statsSection = document.querySelector('.stats-container');
    if (statsSection) {
      observer.observe(statsSection);
    }
  });

  function animateNumbers() {
    // Animate businesses count
    animateCounter('businesses', 0, 50, 2000);
    // Animate revenue increase
    animateCounter('revenue', 0, 180, 2500);
    // Animate satisfaction rate
    animateCounter('satisfaction', 0, 95, 2000);
    // Animate time to results
    animateCounter('timeToResults', 0, 6, 1500);
  }

  function animateCounter(key, start, end, duration) {
    const startTime = performance.now();

    function update() {
      const currentTime = performance.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Use easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(start + (end - start) * easeOutQuart);

      numberAnimations[key] = current;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }
</script>

<!-- Social Proof Section -->
<section class="py-16 bg-gradient-to-br from-lxk-cream/30 to-lxk-mint/20 relative overflow-hidden">
  <!-- Background decoration -->
  <div class="absolute inset-0 opacity-20">
    <div class="absolute top-10 left-10 w-32 h-32 bg-lxk-sage/30 rounded-full blur-xl"></div>
    <div class="absolute bottom-10 right-20 w-48 h-48 bg-lxk-peach/30 rounded-full blur-2xl"></div>
    <div class="absolute top-1/2 left-1/3 w-24 h-24 bg-lxk-coral/40 rounded-full blur-lg"></div>
  </div>

  <div class="container-custom relative z-10">
    <!-- Trust Line -->
    <div class="text-center mb-12 animate-on-scroll">
      <p class="text-sm font-medium text-lxk-coral mb-3 tracking-wide uppercase">
        Trusted by Singapore's Growing Businesses
      </p>
      <h2 class="text-2xl md:text-3xl font-bold text-lxk-warm-gray mb-6">
        Real Results, Real Friendships
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Since 2020, we've been the growth kakis for ambitious Singapore businesses.
        Here's the impact we've made together.
      </p>
    </div>

    <!-- Success Metrics -->
    <div class="stats-container grid md:grid-cols-4 gap-8 mb-16">
      <!-- Businesses Served -->
      <div class="text-center group">
        <div class="relative mb-4">
          <div class="w-20 h-20 bg-gradient-to-br from-lxk-sage to-lxk-soft-teal rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <span class="text-2xl text-white">🤝</span>
          </div>
          <!-- Animated number -->
          <div class="absolute -top-2 -right-2 w-6 h-6 bg-lxk-peach rounded-full flex items-center justify-center">
            <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
        <div class="text-4xl font-bold text-lxk-sage mb-2">
          {numberAnimations.businesses}+
        </div>
        <p class="text-gray-600 text-sm font-medium">Singapore Businesses</p>
        <p class="text-gray-500 text-xs mt-1">Trust us as their kakis</p>
      </div>

      <!-- Revenue Increase -->
      <div class="text-center group">
        <div class="relative mb-4">
          <div class="w-20 h-20 bg-gradient-to-br from-lxk-peach to-lxk-coral rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <span class="text-2xl text-white">📈</span>
          </div>
        </div>
        <div class="text-4xl font-bold text-lxk-peach mb-2">
          {numberAnimations.revenue}%
        </div>
        <p class="text-gray-600 text-sm font-medium">Average Revenue Growth</p>
        <p class="text-gray-500 text-xs mt-1">Within first 6 months</p>
      </div>

      <!-- Client Satisfaction -->
      <div class="text-center group">
        <div class="relative mb-4">
          <div class="w-20 h-20 bg-gradient-to-br from-lxk-coral to-lxk-sage rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <span class="text-2xl text-white">⭐</span>
          </div>
        </div>
        <div class="text-4xl font-bold text-lxk-coral mb-2">
          {numberAnimations.satisfaction}%
        </div>
        <p class="text-gray-600 text-sm font-medium">Client Satisfaction Rate</p>
        <p class="text-gray-500 text-xs mt-1">They stick with us!</p>
      </div>

      <!-- Time to Results -->
      <div class="text-center group">
        <div class="relative mb-4">
          <div class="w-20 h-20 bg-gradient-to-br from-lxk-mint to-lxk-sage rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <span class="text-2xl text-white">⚡</span>
          </div>
        </div>
        <div class="text-4xl font-bold text-lxk-mint mb-2">
          {numberAnimations.timeToResults}<span class="text-2xl">wks</span>
        </div>
        <p class="text-gray-600 text-sm font-medium">Average Time to Results</p>
        <p class="text-gray-500 text-xs mt-1">See measurable impact</p>
      </div>
    </div>

    <!-- Client Success Highlights -->
    <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <!-- Success Story 1 -->
      <div class="painterly-card p-6 text-center hover:shadow-xl transition-all duration-300 group">
        <div class="relative mb-4">
          <div class="w-16 h-16 bg-gradient-to-br from-lxk-sage/20 to-lxk-mint/20 rounded-2xl flex items-center justify-center mx-auto">
            <span class="text-2xl">🍜</span>
          </div>
          <div class="absolute -top-1 -right-1 text-xs bg-lxk-peach text-white px-2 py-1 rounded-full font-medium">
            F&B
          </div>
        </div>
        <div class="space-y-3">
          <div class="text-2xl font-bold text-lxk-coral">+340%</div>
          <p class="text-sm text-gray-600 font-medium">Online Orders</p>
          <p class="text-xs text-gray-500">
            "From 20 to 88 orders daily after our website redesign.
            The kopi sessions really helped understand our customers."
          </p>
          <div class="flex items-center justify-center space-x-2 text-xs text-gray-400">
            <span>—</span>
            <span>Local Restaurant Chain</span>
          </div>
        </div>
      </div>

      <!-- Success Story 2 -->
      <div class="painterly-card p-6 text-center hover:shadow-xl transition-all duration-300 group">
        <div class="relative mb-4">
          <div class="w-16 h-16 bg-gradient-to-br from-lxk-peach/20 to-lxk-coral/20 rounded-2xl flex items-center justify-center mx-auto">
            <span class="text-2xl">💼</span>
          </div>
          <div class="absolute -top-1 -right-1 text-xs bg-lxk-sage text-white px-2 py-1 rounded-full font-medium">
            Tech
          </div>
        </div>
        <div class="space-y-3">
          <div class="text-2xl font-bold text-lxk-sage">+250%</div>
          <p class="text-sm text-gray-600 font-medium">Lead Generation</p>
          <p class="text-xs text-gray-500">
            "Our web app now generates 3x more qualified leads.
            The collaboration felt more like working with friends."
          </p>
          <div class="flex items-center justify-center space-x-2 text-xs text-gray-400">
            <span>—</span>
            <span>SaaS Startup</span>
          </div>
        </div>
      </div>

      <!-- Success Story 3 -->
      <div class="painterly-card p-6 text-center hover:shadow-xl transition-all duration-300 group">
        <div class="relative mb-4">
          <div class="w-16 h-16 bg-gradient-to-br from-lxk-coral/20 to-lxk-peach/20 rounded-2xl flex items-center justify-center mx-auto">
            <span class="text-2xl">🛍️</span>
          </div>
          <div class="absolute -top-1 -right-1 text-xs bg-lxk-coral text-white px-2 py-1 rounded-full font-medium">
            Retail
          </div>
        </div>
        <div class="space-y-3">
          <div class="text-2xl font-bold text-lxk-peach">+180%</div>
          <p class="text-sm text-gray-600 font-medium">Online Sales</p>
          <p class="text-xs text-gray-500">
            "Digital transformation that actually worked.
            They understood our Singapore market perfectly."
          </p>
          <div class="flex items-center justify-center space-x-2 text-xs text-gray-400">
            <span>—</span>
            <span>Fashion Boutique</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Trust Badges -->
    <div class="mt-16 text-center">
      <div class="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-80 transition-opacity">
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span class="text-sm text-gray-600">Google Partner Certified</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 bg-lxk-sage rounded-full"></div>
          <span class="text-sm text-gray-600">Singapore Business Licensed</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 bg-lxk-peach rounded-full"></div>
          <span class="text-sm text-gray-600">100% Client Retention (2024)</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 bg-lxk-coral rounded-full"></div>
          <span class="text-sm text-gray-600">Featured in TechInAsia</span>
        </div>
      </div>
    </div>
  </div>
</section>