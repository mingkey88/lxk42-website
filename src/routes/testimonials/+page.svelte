<script>
  import { onMount } from 'svelte';
  import TestimonialCarousel from '$lib/components/ui/TestimonialCarousel.svelte';
  import VideoPlayer from '$lib/components/ui/VideoPlayer.svelte';
  import ClientLogoStrip from '$lib/components/ui/ClientLogoStrip.svelte';
  import EnhancedCTA from '$lib/components/ui/EnhancedCTA.svelte';
  import { testimonials, getTestimonialsByService } from '$lib/data/testimonials.js';
  import { clients, industryStats } from '$lib/data/clients.js';
  import { updatePageMeta, injectStructuredData, reviewSchema } from '$lib/structuredData.js';

  let activeFilter = 'all';
  let filteredTestimonials = testimonials;

  function filterTestimonials(serviceType) {
    activeFilter = serviceType;
    if (serviceType === 'all') {
      filteredTestimonials = testimonials;
    } else {
      filteredTestimonials = getTestimonialsByService(serviceType);
    }
  }

  onMount(() => {
    // SEO optimization
    updatePageMeta(
      'Client Testimonials & Reviews | Light & Kaki Studio',
      'Read authentic testimonials from our happy kakis. Real client stories about web design, development, and motion graphics projects in Singapore.'
    );

    // Inject review structured data
    const reviewData = testimonials.map(t => ({
      name: t.name,
      rating: t.rating,
      content: t.content,
      date: '2024-01-01', // Add actual dates in real implementation
    }));
    injectStructuredData(reviewSchema(reviewData), 'reviews');

    // Animate elements on scroll
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

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));
  });
</script>

<!-- Simplified Testimonials Hero -->
<section
  class="min-h-[80vh] flex items-center bg-gradient-to-br from-lxk-cream/30 via-white to-lxk-mint/20"
>
  <div class="container-custom">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <!-- Large visual element -->
      <div class="animate-on-scroll">
        <div
          class="bg-gradient-to-br from-lxk-sage/20 to-lxk-peach/20 rounded-3xl h-96 overflow-hidden relative"
        >
          <VideoPlayer
            src="/client-stories.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Client stories and testimonials"
            lazy={true}
          />
        </div>
      </div>

      <!-- Bold, minimal text -->
      <div class="animate-on-scroll">
        <h1 class="text-6xl lg:text-8xl font-bold text-lxk-warm-gray leading-[0.9] mb-8">
          What Our <span class="text-lxk-peach">Kakis</span> Say
        </h1>
        <p class="text-2xl text-gray-700 mb-12 leading-relaxed font-light">
          Real stories from real friendships. Authentic testimonials from our Singapore creative
          partnerships.
        </p>

        <!-- Single key stat -->
        <div class="flex items-center gap-4">
          <div class="text-4xl font-bold text-lxk-sage">5.0★</div>
          <div class="text-lg text-gray-600">Average rating from our kakis</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Simplified Filter -->
<section class="py-8 bg-white border-b border-gray-100">
  <div class="container-custom">
    <div class="flex flex-wrap gap-4 justify-center">
      <button
        class="px-6 py-3 rounded-full transition-all duration-300 font-medium text-lg
          {activeFilter === 'all'
          ? 'bg-lxk-sage text-white shadow-lg'
          : 'border-2 border-lxk-sage/30 text-lxk-sage hover:bg-lxk-sage hover:text-white'}"
        on:click={() => filterTestimonials('all')}
      >
        All Stories
      </button>
      {#each ['web-design', 'graphic-design', 'motion-graphics'] as service (service)}
        <button
          class="px-6 py-3 rounded-full transition-all duration-300 font-medium text-lg capitalize
            {activeFilter === service
            ? 'bg-lxk-sage text-white shadow-lg'
            : 'border-2 border-lxk-sage/30 text-lxk-sage hover:bg-lxk-sage hover:text-white'}"
          on:click={() => filterTestimonials(service)}
        >
          {service.replace('-', ' ')}
        </button>
      {/each}
    </div>
  </div>
</section>

<!-- Main Testimonials Display -->
<section class="section-padding">
  <div class="container-custom">
    {#if activeFilter === 'all'}
      <!-- Full Carousel for All Testimonials -->
      <TestimonialCarousel testimonials={filteredTestimonials} />
    {:else}
      <!-- Filtered Grid View -->
      <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {#each filteredTestimonials as testimonial (testimonial.id)}
          <div class="painterly-card p-8 animate-on-scroll">
            <!-- Rating Stars -->
            <div class="flex justify-center mb-6">
              {#each Array(testimonial.rating || 5) as _, i (i)}
                <svg class="w-5 h-5 text-lxk-peach fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"
                  />
                </svg>
              {/each}
            </div>

            <!-- Testimonial Content -->
            <blockquote class="text-lg text-lxk-warm-gray leading-relaxed mb-6 text-center italic">
              "{testimonial.content}"
            </blockquote>

            <!-- Client Info -->
            <div class="flex flex-col items-center gap-4">
              {#if testimonial.avatar}
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  class="w-16 h-16 rounded-full object-cover border-4 border-lxk-mint"
                />
              {:else}
                <div
                  class="w-16 h-16 rounded-full bg-gradient-to-br from-lxk-sage to-lxk-soft-teal flex items-center justify-center text-white text-xl font-bold"
                >
                  {testimonial.name.charAt(0)}
                </div>
              {/if}

              <div class="text-center">
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
                <span
                  class="inline-block bg-lxk-sage/10 text-lxk-sage px-4 py-2 rounded-full text-sm font-medium"
                >
                  {testimonial.projectType}
                </span>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>

<!-- Client Showcase -->
<section class="section-padding bg-gradient-to-br from-lxk-mint/5 to-lxk-cream/10">
  <div class="container-custom">
    <div class="text-center mb-12 animate-on-scroll">
      <h2 class="text-3xl md:text-4xl font-bold text-lxk-warm-gray mb-4">
        Trusted by Amazing Companies 🏢
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        From startups to established businesses, we're honored to call these organizations our kakis
      </p>
    </div>

    <!-- Client Logo Strip -->
    <ClientLogoStrip
      {clients}
      title="Our Extended Kaki Family"
      subtitle="Diverse industries, shared success stories"
    />

    <!-- Industry Breakdown -->
    <div class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-warm-gray mb-8 text-center">
        Industries We Serve
      </h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
        {#each Object.entries(industryStats) as [industry, count] (industry)}
          <div
            class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div class="text-2xl font-bold text-lxk-sage mb-2">{count}</div>
            <div class="text-sm text-gray-600">{industry}</div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Success Metrics -->
<section class="section-padding">
  <div class="container-custom">
    <div class="text-center mb-12 animate-on-scroll">
      <h2 class="text-3xl md:text-4xl font-bold text-lxk-warm-gray mb-4">Results That Matter 📈</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Beyond testimonials, here's how our kakis have grown and succeeded
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      <div class="text-center painterly-card p-6 animate-on-scroll">
        <div class="text-4xl mb-4">📊</div>
        <div class="text-2xl font-bold text-lxk-sage mb-2">150%</div>
        <div class="text-sm text-gray-600 mb-2">Average Traffic Increase</div>
        <p class="text-xs text-gray-500">Within 6 months of project completion</p>
      </div>

      <div class="text-center painterly-card p-6 animate-on-scroll">
        <div class="text-4xl mb-4">💰</div>
        <div class="text-2xl font-bold text-lxk-coral mb-2">200%</div>
        <div class="text-sm text-gray-600 mb-2">ROI Improvement</div>
        <p class="text-xs text-gray-500">Through optimized conversion funnels</p>
      </div>

      <div class="text-center painterly-card p-6 animate-on-scroll">
        <div class="text-4xl mb-4">⚡</div>
        <div class="text-2xl font-bold text-lxk-peach mb-2">75%</div>
        <div class="text-sm text-gray-600 mb-2">Faster Load Times</div>
        <p class="text-xs text-gray-500">Modern tech stack optimization</p>
      </div>

      <div class="text-center painterly-card p-6 animate-on-scroll">
        <div class="text-4xl mb-4">🎯</div>
        <div class="text-2xl font-bold text-lxk-soft-teal mb-2">95%</div>
        <div class="text-sm text-gray-600 mb-2">Client Satisfaction</div>
        <p class="text-xs text-gray-500">Measured through follow-up surveys</p>
      </div>
    </div>
  </div>
</section>

<!-- Quote Section -->
<section class="section-padding bg-gradient-to-r from-lxk-sage/5 to-lxk-soft-teal/5">
  <div class="container-custom">
    <div class="max-w-4xl mx-auto text-center animate-on-scroll">
      <div class="text-6xl mb-6">💝</div>
      <blockquote class="text-2xl md:text-3xl text-lxk-warm-gray leading-relaxed mb-8 italic">
        "The best projects don't feel like work — they feel like collaborating with friends who
        happen to be incredibly talented."
      </blockquote>
      <div class="text-lg text-gray-600">— A sentiment shared by many of our kakis</div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<EnhancedCTA
  service="testimonials"
  primaryTitle="Ready to Join Our Kaki Family?"
  primaryDescription="Start your journey with a friendly chat and see why our clients become our friends"
  primaryCTA="Start Our Collaboration →"
  secondaryTitle="Want More Details?"
  secondaryDescription="Download detailed case studies and client success stories"
  secondaryResource="Download Case Studies"
  leadMagnetTitle="Complete Client Success Stories"
  leadMagnetBenefits={[
    'Detailed project case studies with metrics',
    'Before and after transformations',
    'Client journey and collaboration insights',
  ]}
/>

<style>
  .painterly-card {
    background: linear-gradient(135deg, #ffffff 0%, #f9f7f4 100%);
    border-radius: 20px;
    box-shadow:
      0 8px 32px rgba(143, 166, 142, 0.08),
      0 2px 8px rgba(143, 166, 142, 0.04);
    border: 1px solid rgba(143, 166, 142, 0.1);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .painterly-card:hover {
    transform: translateY(-4px);
    box-shadow:
      0 16px 48px rgba(143, 166, 142, 0.12),
      0 4px 16px rgba(143, 166, 142, 0.08);
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-on-scroll {
    animation: fadeInUp 0.8s ease-out forwards;
  }
</style>
