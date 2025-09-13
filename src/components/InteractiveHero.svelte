<script>
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  
  let revenue = tweened(3000, { duration: 2000, easing: cubicOut });
  let customers = tweened(50, { duration: 2500, easing: cubicOut });
  let satisfaction = tweened(65, { duration: 1800, easing: cubicOut });
  
  onMount(() => {
    // Animate to success metrics
    revenue.set(45000);
    customers.set(850);
    satisfaction.set(98);
  });
</script>

<section class="hero-section min-h-screen flex items-center relative overflow-hidden">
  <!-- Animated background grid -->
  <div class="absolute inset-0 bg-gradient-to-br from-lxk-sage/5 via-transparent to-lxk-peach/5">
    <div class="animated-grid"></div>
  </div>
  
  <div class="container-custom grid lg:grid-cols-2 gap-16 items-center relative z-10">
    <div class="space-y-8">
      <h1 class="text-5xl lg:text-7xl font-bold text-lxk-warm-gray leading-tight">
        From
        <span class="text-lxk-coral relative">
          Struggling
          <div class="absolute -bottom-2 left-0 right-0 h-1 bg-lxk-coral/30 animate-strike-through"></div>
        </span>
        to
        <span class="text-lxk-peach">Thriving</span>
        in Singapore
      </h1>
      
      <p class="text-xl text-gray-600 leading-relaxed">
        Watch how our <em class="text-lxk-coral font-medium">kaki</em> approach transforms 
        Singapore businesses. Real data. Real growth. Real friendship.
      </p>
      
      <button 
        class="group bg-lxk-sage text-white px-8 py-4 rounded-full hover:bg-lxk-soft-teal transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl flex items-center space-x-3">
        <span>Start Your Transformation</span>
        <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <span class="text-sm">→</span>
        </div>
      </button>
    </div>
    
    <!-- Animated visualization panel -->
    <div class="relative">
      <div class="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-lxk-sage/10">
        <div class="space-y-6">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold text-lxk-warm-gray">Sarah's Café Journey</h3>
            <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          <!-- Animated metrics with real-time updates -->
          <div class="space-y-4">
            <div class="metric-card">
              <div class="flex justify-between items-center mb-2">
                <span class="text-gray-600">Monthly Revenue</span>
                <span class="text-2xl font-bold text-lxk-peach">SGD ${Math.round($revenue).toLocaleString()}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div 
                  class="bg-gradient-to-r from-lxk-peach to-lxk-coral h-2 rounded-full transition-all duration-2000"
                  style="width: {($revenue / 50000) * 100}%">
                </div>
              </div>
            </div>
            <!-- More animated metrics... -->
             <div class="metric-card">
              <div class="flex justify-between items-center mb-2">
                <span class="text-gray-600">Customers</span>
                <span class="text-2xl font-bold text-lxk-peach">{Math.round($customers).toLocaleString()}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div 
                  class="bg-gradient-to-r from-lxk-peach to-lxk-coral h-2 rounded-full transition-all duration-2000"
                  style="width: {($customers / 1000) * 100}%">
                </div>
              </div>
            </div>
             <div class="metric-card">
              <div class="flex justify-between items-center mb-2">
                <span class="text-gray-600">Satisfaction</span>
                <span class="text-2xl font-bold text-lxk-peach">{Math.round($satisfaction).toLocaleString()}%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div 
                  class="bg-gradient-to-r from-lxk-peach to-lxk-coral h-2 rounded-full transition-all duration-2000"
                  style="width: {$satisfaction}%">
                </div>
              </div>
            </div>
          </div>
          
          <!-- Timeline markers -->
          <div class="flex justify-between text-xs text-gray-500 pt-4 border-t border-gray-200">
            <span>Before LXK42</span>
            <span>Month 3</span>
            <span>Month 6</span>
            <span>Today</span>
          </div>
        </div>
      </div>
      
      <!-- Floating success indicators -->
      <div class="absolute -top-4 -right-4 bg-lxk-peach text-white px-4 py-2 rounded-full text-sm font-medium animate-bounce">
        +1400% Growth! 🎉
      </div>
    </div>
  </div>
</section>

<style>
  .animated-grid {
    background-image: 
      linear-gradient(rgba(143, 166, 142, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(143, 166, 142, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: grid-move 20s linear infinite;
  }
  
  @keyframes grid-move {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }
  
  @keyframes strike-through {
    from { width: 0; }
    to { width: 100%; }
  }
  
  .animate-strike-through {
    animation: strike-through 1s ease-out 0.5s forwards;
    width: 0;
  }
</style>