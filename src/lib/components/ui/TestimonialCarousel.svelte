<script>
  import { onMount } from 'svelte';

  export let testimonials = [];

  let currentIndex = 0;
  let autoplayInterval;
  let isAutoplay = true;
  let carousel;

  const nextTestimonial = () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
  };

  const prevTestimonial = () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  };

  const goToTestimonial = (index) => {
    currentIndex = index;
    pauseAutoplay();
  };

  const startAutoplay = () => {
    if (isAutoplay && testimonials.length > 1) {
      autoplayInterval = setInterval(nextTestimonial, 6000);
    }
  };

  const pauseAutoplay = () => {
    clearInterval(autoplayInterval);
    setTimeout(startAutoplay, 10000); // Resume after 10 seconds
  };

  onMount(() => {
    startAutoplay();
    return () => clearInterval(autoplayInterval);
  });

</script>

<!-- Testimonial Carousel -->
<section class="section-padding bg-gradient-to-br from-lxk-cream to-white">
  <div class="container-custom">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold text-lxk-warm-gray mb-6">
        Real Stories, Real Results ✨
      </h2>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Singapore businesses sharing their success with their creative kakis
      </p>
      <!-- [IMAGE PLACEHOLDER: Photo collage of happy clients in Singapore settings - should show diversity, genuine smiles, success moments] -->
    </div>

    {#if testimonials.length > 0}
      <div class="relative max-w-4xl mx-auto">
        <!-- Main Testimonial Card -->
        <div
          bind:this={carousel}
          class="relative overflow-hidden"
          role="region"
          aria-label="Customer testimonials"
          on:mouseenter={pauseAutoplay}
          on:mouseleave={startAutoplay}
        >
          <div
            class="flex transition-transform duration-700 ease-in-out"
            style="transform: translateX(-{currentIndex * 100}%)"
          >
            {#each testimonials as testimonial, index (testimonial.id)}
              <div class="w-full flex-shrink-0">
                <div class="painterly-card p-8 md:p-12 mx-4 relative overflow-hidden">
                  <!-- Decorative Quote -->
                  <div class="absolute top-4 left-4 text-6xl text-lxk-sage/20 font-serif leading-none">"</div>

                  <div class="relative z-10">
                    <!-- Rating Stars -->
                    <div class="flex justify-center mb-6">
                      {#each Array(testimonial.rating || 5) as _, i (i)}
                        <svg class="w-5 h-5 text-lxk-peach fill-current" viewBox="0 0 20 20">
                          <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"/>
                        </svg>
                      {/each}
                    </div>

                    <!-- Testimonial Content -->
                    <blockquote class="text-lg md:text-xl text-lxk-warm-gray leading-relaxed mb-8 text-center font-medium">
                      {testimonial.content}
                    </blockquote>

                    <!-- Client Info -->
                    <div class="flex flex-col md:flex-row items-center justify-center gap-4">
                      {#if testimonial.avatar}
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          class="w-16 h-16 rounded-full object-cover border-4 border-lxk-mint"
                        />
                      {:else}
                        <div class="w-16 h-16 rounded-full bg-gradient-to-br from-lxk-sage to-lxk-soft-teal flex items-center justify-center text-white text-xl font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                      {/if}

                      <div class="text-center md:text-left">
                        <div class="font-semibold text-lxk-warm-gray text-lg">
                          {testimonial.name}
                        </div>
                        <div class="text-lxk-coral font-medium">
                          {testimonial.role}
                        </div>
                        {#if testimonial.company}
                          <div class="text-gray-500 text-sm">
                            {testimonial.company}
                          </div>
                        {/if}
                      </div>
                    </div>

                    <!-- Project Type Badge -->
                    {#if testimonial.projectType}
                      <div class="text-center mt-6">
                        <span class="inline-block bg-lxk-sage/10 text-lxk-sage px-4 py-2 rounded-full text-sm font-medium">
                          {testimonial.projectType}
                        </span>
                      </div>
                    {/if}
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>

        <!-- Navigation Controls -->
        {#if testimonials.length > 1}
          <!-- Dot Indicators -->
          <div class="flex justify-center gap-3 mt-8">
            {#each testimonials as _, index (index)}
              <button
                class="w-3 h-3 rounded-full transition-all duration-300 {currentIndex === index ? 'bg-lxk-sage w-8' : 'bg-lxk-sage/30 hover:bg-lxk-sage/50'}"
                on:click={() => goToTestimonial(index)}
                aria-label="Go to testimonial {index + 1}"
              ></button>
            {/each}
          </div>

          <!-- Arrow Navigation -->
          <button
            class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-lxk-sage hover:text-lxk-warm-gray group"
            on:click={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <svg class="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          <button
            class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-lxk-sage hover:text-lxk-warm-gray group"
            on:click={nextTestimonial}
            aria-label="Next testimonial"
          >
            <svg class="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        {/if}
      </div>

      <!-- Autoplay Toggle -->
      {#if testimonials.length > 1}
        <div class="text-center mt-6">
          <button
            class="text-sm text-gray-500 hover:text-lxk-sage transition-colors duration-200"
            on:click={() => { isAutoplay = !isAutoplay; isAutoplay ? startAutoplay() : clearInterval(autoplayInterval); }}
          >
            {isAutoplay ? 'Pause' : 'Play'} autoplay
          </button>
        </div>
      {/if}
    {/if}
  </div>
</section>

<style>
  .painterly-card {
    background: linear-gradient(135deg, #ffffff 0%, #f9f7f4 100%);
    border-radius: 24px;
    box-shadow:
      0 8px 32px rgba(143, 166, 142, 0.1),
      0 2px 8px rgba(143, 166, 142, 0.05);
    border: 1px solid rgba(143, 166, 142, 0.1);
  }

  .painterly-card:hover {
    box-shadow:
      0 16px 48px rgba(143, 166, 142, 0.15),
      0 4px 16px rgba(143, 166, 142, 0.1);
    transform: translateY(-4px);
  }
</style>