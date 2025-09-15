<script>
  import { onMount } from 'svelte';
  import { fade, fly, scale } from 'svelte/transition';
  import { projects } from '$lib/data/portfolio.js';
  import TestimonialCarousel from '$lib/components/ui/TestimonialCarousel.svelte';
  import EnhancedCTA from '$lib/components/ui/EnhancedCTA.svelte';
  import { getFeaturedTestimonials } from '$lib/data/testimonials.js';
  import { updatePageMeta } from '$lib/structuredData.js';

  // Portfolio state management
  let activeTag = 'all';
  let selectedProject = null;
  let isLoading = false;
  let sortBy = 'recent'; // 'recent', 'featured', 'alphabetical'

  // Computed filtered projects
  $: filtered = getFilteredProjects(activeTag, sortBy);

  function getFilteredProjects(tag, sort) {
    let result = tag === 'all' ? projects : projects.filter(p => p.tags.includes(tag));

    switch (sort) {
      case 'featured':
        result = result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'alphabetical':
        result = result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'recent':
      default:
        // Already in recent order
        break;
    }

    return result;
  }

  function filterProjects(tag) {
    if (tag === activeTag) return;

    isLoading = true;
    setTimeout(() => {
      activeTag = tag;
      isLoading = false;
    }, 300);
  }

  function openProjectDetail(project) {
    selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  function closeProjectDetail() {
    selectedProject = null;
    document.body.style.overflow = 'auto';
  }

  function getProjectIcon(tags) {
    if (tags.includes('web app') || tags.includes('saas')) return '⚡';
    if (tags.includes('ecommerce') || tags.includes('marketplace')) return '🛍️';
    if (tags.includes('branding')) return '🎨';
    if (tags.includes('web design')) return '💻';
    if (tags.includes('motion graphics')) return '🎬';
    if (tags.includes('education')) return '📚';
    if (tags.includes('fintech')) return '💰';
    if (tags.includes('hospitality')) return '🏨';
    if (tags.includes('healthcare') || tags.includes('wellness')) return '🌱';
    return '✨';
  }

  function getIndustryColor(industry) {
    const colors = {
      'Technology': 'from-blue-400 to-purple-500',
      'Education': 'from-green-400 to-teal-500',
      'Healthcare': 'from-pink-400 to-rose-500',
      'E-commerce': 'from-orange-400 to-red-500',
      'Hospitality': 'from-yellow-400 to-orange-500',
      'Financial Services': 'from-indigo-400 to-blue-500',
      'Food & Beverage': 'from-red-400 to-pink-500'
    };
    return colors[industry] || 'from-lxk-sage to-lxk-soft-teal';
  }

  onMount(() => {
    updatePageMeta(
      'Portfolio - Our Creative Work | Light & Kaki Studio',
      'Explore our portfolio of web design, development, branding, and digital marketing projects. Real work, real friendships, real results in Singapore.'
    );

    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
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

<!-- Simplified Portfolio Hero -->
<section class="min-h-[80vh] flex items-center bg-gradient-to-br from-lxk-cream/30 via-white to-lxk-mint/20">
  <div class="container-custom">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <!-- Large visual element -->
      <div class="animate-on-scroll">
        <div class="bg-gradient-to-br from-lxk-sage/20 to-lxk-peach/20 rounded-3xl h-96 flex items-center justify-center">
          <div class="text-center">
            <div class="text-8xl mb-6">🎨</div>
            <h3 class="text-2xl font-semibold text-lxk-warm-gray">Our Creative Work</h3>
          </div>
        </div>
      </div>

      <!-- Bold, minimal text -->
      <div class="animate-on-scroll">
        <h1 class="text-6xl lg:text-8xl font-bold text-lxk-warm-gray leading-[0.9] mb-8">
          Our <span class="text-lxk-peach">Portfolio</span>
        </h1>
        <p class="text-2xl text-gray-700 mb-12 leading-relaxed font-light">
          Real work, real relationships, real results from our Singapore creative kakis.
        </p>

        <!-- Single key stat -->
        <div class="flex items-center gap-4">
          <div class="text-4xl font-bold text-lxk-sage">{projects.length}+</div>
          <div class="text-lg text-gray-600">Projects completed with love</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Simplified Filters -->
<section class="py-8 bg-white border-b border-gray-100">
  <div class="container-custom">
    <div class="flex flex-wrap gap-4 justify-center">
      <button
        class="px-6 py-3 rounded-full transition-all duration-300 font-medium text-lg
          {activeTag === 'all'
            ? 'bg-lxk-sage text-white shadow-lg'
            : 'border-2 border-lxk-sage/30 text-lxk-sage hover:bg-lxk-sage hover:text-white'}"
        on:click={() => filterProjects('all')}
      >
        All Work
      </button>
      {#each ['web design', 'branding', 'web app'] as tag (tag)}
        <button
          class="px-6 py-3 rounded-full transition-all duration-300 font-medium text-lg capitalize
            {activeTag === tag
              ? 'bg-lxk-sage text-white shadow-lg'
              : 'border-2 border-lxk-sage/30 text-lxk-sage hover:bg-lxk-sage hover:text-white'}"
          on:click={() => filterProjects(tag)}
        >
          {tag}
        </button>
      {/each}
    </div>
  </div>
</section>

<!-- Projects Grid -->
<section class="section-padding">
  <div class="container-custom">
    {#if isLoading}
      <div class="text-center py-16" transition:fade>
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-lxk-sage"></div>
        <p class="text-lxk-warm-gray mt-4">Loading amazing projects...</p>
      </div>
    {:else}
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each filtered as project, index (project.id)}
          <div
            class="group relative"
            in:fly={{ y: 50, delay: index * 100, duration: 600 }}
            out:scale={{ duration: 300 }}
          >
            <!-- Project Card -->
            <button class="relative min-h-[600px] h-full painterly-card group-hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden w-full text-left flex flex-col"
                    type="button"
                    aria-label={`View details for ${project.title}`}
                    on:click={() => openProjectDetail(project)}
                    on:keydown={(e) => e.key === 'Enter' && openProjectDetail(project)}>

              <!-- Featured Badge -->
              {#if project.featured}
                <div class="absolute top-4 right-4 z-10">
                  <span class="bg-gradient-to-r from-lxk-peach to-lxk-coral text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    ⭐ Featured
                  </span>
                </div>
              {/if}

              <!-- Project Image/Icon Area -->
              <div class="relative h-48 bg-gradient-to-br {getIndustryColor(project.industry)} rounded-t-2xl flex items-center justify-center overflow-hidden">
                {#if project.image}
                  <img src={project.image} alt={project.title} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                {:else}
                  <div class="text-center text-white/90">
                    <div class="text-4xl mb-2">{getProjectIcon(project.tags)}</div>
                    <div class="text-sm font-medium opacity-80">Preview Coming Soon</div>
                  </div>
                {/if}

                <!-- Hover Overlay -->
                <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div class="text-white text-center">
                    <div class="text-lg font-semibold mb-2">View Details</div>
                    <div class="text-sm opacity-80">Click to explore</div>
                  </div>
                </div>
              </div>

              <!-- Project Content -->
              <div class="p-6 flex-1 flex flex-col">
                <!-- Client & Industry -->
                <div class="flex items-center gap-2 mb-3">
                  <span class="text-xs font-medium text-lxk-coral bg-lxk-coral/10 px-2 py-1 rounded-full">
                    {project.industry}
                  </span>
                  <span class="text-xs text-gray-500">• {project.year}</span>
                </div>

                <!-- Title & Summary -->
                <h3 class="text-xl font-bold text-lxk-warm-gray mb-3 group-hover:text-lxk-sage transition-colors duration-300">
                  {project.title}
                </h3>
                <p class="text-gray-600 mb-4 leading-relaxed flex-1">
                  {project.summary}
                </p>

                <!-- Client Info -->
                {#if project.client}
                  <div class="mb-4 text-sm">
                    <span class="text-gray-500">Client: </span>
                    <span class="text-lxk-warm-gray font-medium">{project.client}</span>
                  </div>
                {/if}

                <!-- Key Results -->
                {#if project.results && project.results.length > 0}
                  <div class="mb-4">
                    <div class="text-xs font-semibold text-lxk-sage mb-2">Key Results:</div>
                    <div class="text-xs text-gray-600">
                      {project.results[0]}
                      {#if project.results.length > 1}
                        <span class="text-lxk-coral"> +{project.results.length - 1} more</span>
                      {/if}
                    </div>
                  </div>
                {/if}

                <!-- Tags -->
                <div class="flex flex-wrap gap-2 mb-4">
                  {#each project.tags.slice(0, 3) as tag (tag)}
                    <span class="px-2 py-1 rounded-full bg-lxk-mint/20 text-lxk-warm-gray text-xs font-medium">
                      {tag}
                    </span>
                  {/each}
                  {#if project.tags.length > 3}
                    <span class="px-2 py-1 rounded-full bg-gray-100 text-gray-500 text-xs">
                      +{project.tags.length - 3}
                    </span>
                  {/if}
                </div>

                <!-- Duration -->
                <div class="text-xs text-gray-500 mt-auto">
                  Project Duration: {project.duration}
                </div>
              </div>

              <!-- Hover Border Effect -->
              <div class="absolute inset-0 border-2 border-transparent group-hover:border-lxk-sage/30 rounded-2xl transition-colors duration-300"></div>
            </button>
          </div>
        {/each}
      </div>

      {#if filtered.length === 0}
        <div class="text-center py-16" transition:fade>
          <div class="text-6xl mb-4">🔍</div>
          <h3 class="text-xl font-semibold text-lxk-warm-gray mb-2">No projects found</h3>
          <p class="text-gray-600">Try adjusting your filters to see more projects.</p>
        </div>
      {/if}
    {/if}
  </div>
</section>

<!-- Project Detail Modal -->
{#if selectedProject}
  <div
    class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    tabindex="-1"
    transition:fade={{ duration: 300 }}
    on:click={closeProjectDetail}
    on:keydown={(e) => e.key === 'Escape' && closeProjectDetail()}
  >
    <div
      class="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto modal-content"
      role="document"
      transition:scale={{ duration: 300 }}
      on:click|stopPropagation
    >
      <!-- Modal Header -->
      <div class="relative p-8 bg-gradient-to-br {getIndustryColor(selectedProject.industry)} text-white rounded-t-2xl">
        <button
          class="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
          type="button"
          aria-label="Close project details"
          on:click={closeProjectDetail}
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div class="mb-4">
          <span class="text-sm opacity-80">{selectedProject.client} • {selectedProject.year}</span>
        </div>
        <h2 id="modal-title" class="text-3xl font-bold mb-4">{selectedProject.title}</h2>
        <p class="text-lg opacity-90 leading-relaxed">{selectedProject.summary}</p>
      </div>

      <!-- Modal Content -->
      <div class="p-8 space-y-8">
        <!-- Description -->
        <div>
          <h3 class="text-xl font-semibold text-lxk-warm-gray mb-4">Project Overview</h3>
          <p class="text-gray-600 leading-relaxed">{selectedProject.description}</p>
        </div>

        <!-- Project Details Grid -->
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Technologies -->
          <div>
            <h4 class="font-semibold text-lxk-warm-gray mb-3">Technologies Used</h4>
            <div class="flex flex-wrap gap-2">
              {#each selectedProject.technologies as tech (tech)}
                <span class="px-3 py-1 bg-lxk-sage/10 text-lxk-sage rounded-full text-sm font-medium">
                  {tech}
                </span>
              {/each}
            </div>
          </div>

          <!-- Project Info -->
          <div>
            <h4 class="font-semibold text-lxk-warm-gray mb-3">Project Details</h4>
            <div class="space-y-2 text-sm">
              <div><span class="text-gray-500">Industry:</span> <span class="text-lxk-warm-gray">{selectedProject.industry}</span></div>
              <div><span class="text-gray-500">Duration:</span> <span class="text-lxk-warm-gray">{selectedProject.duration}</span></div>
              <div><span class="text-gray-500">Year:</span> <span class="text-lxk-warm-gray">{selectedProject.year}</span></div>
            </div>
          </div>
        </div>

        <!-- Results -->
        {#if selectedProject.results}
          <div>
            <h4 class="font-semibold text-lxk-warm-gray mb-4">Key Results & Impact</h4>
            <div class="grid md:grid-cols-2 gap-4">
              {#each selectedProject.results as result (result)}
                <div class="flex items-start gap-3 p-4 bg-lxk-cream/50 rounded-lg">
                  <div class="w-6 h-6 bg-lxk-sage rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-gray-700">{result}</span>
                </div>
              {/each}
            </div>
          </div>
        {/if}

        <!-- All Tags -->
        <div>
          <h4 class="font-semibold text-lxk-warm-gray mb-3">Project Tags</h4>
          <div class="flex flex-wrap gap-2">
            {#each selectedProject.tags as tag (tag)}
              <span class="px-3 py-1 bg-lxk-mint/20 text-lxk-warm-gray rounded-full text-sm font-medium">
                {tag}
              </span>
            {/each}
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center pt-4 border-t border-gray-100">
          <p class="text-gray-600 mb-4">Inspired by this project? Let's create something amazing together!</p>
          <button
            class="bg-gradient-to-r from-lxk-sage to-lxk-soft-teal text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            on:click={() => { closeProjectDetail(); window.location.hash = '#/contact'; }}
          >
            Start Your Project →
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}

<!-- Testimonials -->
<TestimonialCarousel testimonials={getFeaturedTestimonials()} />

<!-- CTA Section -->
<EnhancedCTA
  service="portfolio"
  primaryTitle="Ready to Create Something Amazing?"
  primaryDescription="Join our growing family of happy kakis and let's build something extraordinary together"
  primaryCTA="Start Your Journey →"
  secondaryTitle="Want to See More?"
  secondaryDescription="Download our complete portfolio showcasing detailed case studies"
  secondaryResource="Download Portfolio PDF"
  leadMagnetTitle="Complete Portfolio & Case Studies"
  leadMagnetBenefits={[
    'Detailed project breakdowns and methodologies',
    'Behind-the-scenes collaboration stories',
    'Technical specifications and results'
  ]}
/>

<style>
  .painterly-card {
    background: linear-gradient(135deg, #ffffff 0%, #f9f7f4 100%);
    border-radius: 24px;
    box-shadow:
      0 8px 32px rgba(143, 166, 142, 0.1),
      0 2px 8px rgba(143, 166, 142, 0.05);
    border: 1px solid rgba(143, 166, 142, 0.1);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .painterly-card:hover {
    transform: translateY(-8px);
    box-shadow:
      0 20px 48px rgba(143, 166, 142, 0.15),
      0 8px 24px rgba(143, 166, 142, 0.1);
  }

  /* Custom scrollbar for modal */
  .modal-content::-webkit-scrollbar {
    width: 6px;
  }

  .modal-content::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  .modal-content::-webkit-scrollbar-thumb {
    background: #8FA68E;
    border-radius: 3px;
  }

  .modal-content::-webkit-scrollbar-thumb:hover {
    background: #7BA098;
  }
</style>