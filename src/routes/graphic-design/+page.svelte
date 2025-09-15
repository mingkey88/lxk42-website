<script>
  import { projects } from '$lib/data/portfolio.js';
  import DesignPackageBuilder from '$lib/components/tools/DesignPackageBuilder.svelte';
  import EnhancedCTA from '$lib/components/ui/EnhancedCTA.svelte';
  import TestimonialCarousel from '$lib/components/ui/TestimonialCarousel.svelte';
  import CompactFAQ from '$lib/components/ui/CompactFAQ.svelte';
  import { getTestimonialsByService } from '$lib/data/testimonials.js';
  import { serviceSchemas, injectStructuredData, updatePageMeta } from '$lib/structuredData.js';
  import { onMount } from 'svelte';
  import StatCard from '$lib/components/ui/StatCard.svelte';
  import BrowserFrame from '$lib/components/ui/BrowserFrame.svelte';
  import HorizontalProjectRail from '$lib/components/ui/HorizontalProjectRail.svelte';

  // Filter projects relevant to graphic design
  const relevantProjects = projects.filter(project =>
    project.tags.includes('graphic design') || project.tags.includes('print design') || project.tags.includes('illustration')
  );

  // FAQ data for graphic design
  const graphicDesignFAQs = [
    {
      question: "What types of design do you create?",
      answer: "Everything from business cards to brochures, social media graphics, presentations, packaging, and more. If it needs design, we can help!"
    },
    {
      question: "How many revisions do I get?",
      answer: "We typically include 2-3 rounds of revisions in our projects. But we're reasonable people - if something isn't right, we'll work together to fix it."
    },
    {
      question: "Can you match my existing brand style?",
      answer: "Absolutely! Send us your brand guidelines or existing materials, and we'll create new designs that fit perfectly with your established look."
    },
    {
      question: "Do you provide print-ready files?",
      answer: "Yes! We'll provide high-resolution files in whatever format you need - print, web, social media. We can even help you find good printers in Singapore."
    },
    {
      question: "What if I need ongoing design support?",
      answer: "Perfect! We offer retainer packages for businesses that need regular design work. Think of us as your on-call design team."
    }
  ];

  onMount(() => {
    // SEO optimization
    updatePageMeta(
      'Graphic Design Singapore | Light & Kaki Studio',
      'Professional graphic design services in Singapore. Print design, digital graphics, and illustrations with Japanese-inspired aesthetics and local market expertise.'
    );
    injectStructuredData(serviceSchemas['graphic-design'], 'service-graphic-design');
  });
</script>

<section class="section-padding painterly-bg relative overflow-hidden">
  <div class="container-custom">
    <div class="text-center mb-6 md:mb-8 animate-on-scroll relative">
      <h1 class="text-4xl md:text-6xl font-extrabold text-lxk-warm-gray mb-4">Graphic Design</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">Illustrations and visuals with a gentle, handcrafted touch — made to be shared.</p>
      <!-- painterly hero accents -->
      <div class="texture-overlay"></div>
      <div class="paint-splash-1 hidden md:block" style="top:-20px; right:5%;"></div>
      <div class="paint-splash-2 hidden md:block" style="bottom:-10px; left:0;"></div>
      <div class="paint-splash-3 hidden md:block" style="top:40%; right:20%;"></div>
    </div>

    <!-- anchor mini-nav -->
    <nav class="mb-12 md:mb-16">
      <ul class="flex flex-wrap justify-center gap-2 md:gap-3">
        <li><a href="#design-overview" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Overview</a></li>
        <li><a href="#package-builder" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Package Builder</a></li>
        <li><a href="#case-study" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Case Study</a></li>
        <li><a href="#design-process" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Process</a></li>
        <li><a href="#projects" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Projects</a></li>
        <li><a href="#faq" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">FAQ</a></li>
      </ul>
    </nav>

    <div id="design-overview" class="grid md:grid-cols-3 gap-8">
      <div class="painterly-card p-8 animate-on-scroll">
        <div class="w-12 h-12 mb-4 rounded-full bg-lxk-sage text-white flex items-center justify-center text-xl shadow">🎨</div>
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">Print & Digital</h3>
        <p class="text-gray-700">Business cards, brochures, social graphics, and presentations with handcrafted attention to detail.</p>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <div class="w-12 h-12 mb-4 rounded-full bg-lxk-peach text-white flex items-center justify-center text-xl shadow">✏️</div>
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">Illustration & Art</h3>
        <p class="text-gray-700">Custom illustrations, icons, and artistic elements that bring warmth and personality to your brand.</p>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <div class="w-12 h-12 mb-4 rounded-full bg-lxk-coral text-white flex items-center justify-center text-xl shadow">📦</div>
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">Packaging & Products</h3>
        <p class="text-gray-700">Product packaging, labels, and retail materials that stand out on Singapore shelves.</p>
      </div>
    </div>

    <div class="mt-16 grid md:grid-cols-2 gap-8">
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-4">Our Approach</h3>
        <ul class="space-y-3 text-gray-700 list-disc pl-6">
          <li>Design briefs and inspiration sessions over kopi ☕</li>
          <li>Hand-sketched concepts before digital refinement</li>
          <li>Japanese-inspired aesthetics with Singapore sensibility</li>
          <li>Collaborative iterations with your design kakis</li>
        </ul>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-4">What You Get</h3>
        <ul class="space-y-3 text-gray-700 list-disc pl-6">
          <li>Print-ready and web-optimized file formats</li>
          <li>Source files for future edits and adaptations</li>
          <li>Color and usage guidelines for consistency</li>
          <li>Local printer recommendations and liaison</li>
        </ul>
      </div>
    </div>

    <!-- Design Package Builder -->
    <div id="package-builder" class="mt-16 painterly-card p-8 animate-on-scroll">
      <h3 class="text-3xl font-bold text-lxk-sage mb-6 text-center">Design Package Builder</h3>
      <p class="text-center text-gray-600 mb-8">Create a custom design package tailored to your needs and budget</p>
      <DesignPackageBuilder />
    </div>

    <!-- Case Study Preview -->
    <div id="case-study" class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Case Study Spotlight</h3>
      <div class="painterly-card p-8">
        <div class="grid md:grid-cols-2 gap-8 items-start">
          <!-- Visual mock -->
          <div>
            <BrowserFrame title="heritage-tea.sg">
              <div class="rounded-xl border border-lxk-sage/10 p-4 bg-gradient-to-br from-lxk-cream/50 to-white">
                <!-- simple packaging mock layout -->
                <div class="grid grid-cols-2 gap-4 mb-4">
                  <div class="aspect-square bg-gradient-to-br from-lxk-sage/30 to-lxk-mint/30 rounded-xl p-3">
                    <div class="h-full border-2 border-lxk-sage/40 rounded-lg flex items-center justify-center">
                      <div class="text-center">
                        <div class="text-lg mb-1">🍃</div>
                        <div class="h-2 w-8 bg-lxk-sage/60 rounded mx-auto"></div>
                      </div>
                    </div>
                  </div>
                  <div class="aspect-square bg-gradient-to-br from-lxk-peach/30 to-lxk-coral/30 rounded-xl p-3">
                    <div class="h-full border-2 border-lxk-peach/40 rounded-lg flex items-center justify-center">
                      <div class="text-center">
                        <div class="text-lg mb-1">🌸</div>
                        <div class="h-2 w-8 bg-lxk-peach/60 rounded mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <div class="h-3 w-24 bg-lxk-sage/40 rounded mx-auto mb-2"></div>
                  <div class="h-2 w-16 bg-gray-200 rounded mx-auto"></div>
                </div>
              </div>
            </BrowserFrame>
          </div>

          <!-- Text + stats -->
          <div>
            <div class="inline-block bg-lxk-mint/20 text-lxk-sage px-3 py-1 rounded-full text-sm font-medium mb-4">
              Complete Product Packaging
            </div>
            <h4 class="text-2xl font-bold text-lxk-warm-gray mb-3">
              Traditional Tea, Modern Appeal
            </h4>
            <p class="text-gray-700 mb-6">
              Heritage Tea Co. needed packaging that honored Singapore's tea tradition while appealing to modern consumers.
            </p>

            <div class="grid grid-cols-2 gap-4 mb-6">
              <StatCard value={240} suffix="%" label="Sales Increase" color="peach" />
              <StatCard value={85} suffix="%" label="Shelf Recognition" color="coral" />
            </div>

            <p class="text-lxk-coral italic font-medium">
              "The packaging perfectly captures our heritage story. Customers immediately connect with our authentic Singapore roots."
            </p>
            <p class="text-gray-600 text-sm mt-2">— Linda Tan, Founder</p>

            <div class="mt-6 rounded-2xl p-5 bg-lxk-cream/60 border border-lxk-sage/10">
              <h5 class="font-semibold text-lxk-warm-gray mb-3">What We Created</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                <div class="flex items-center gap-2"><span class="w-2 h-2 bg-lxk-sage rounded-full"></span> Tea tin & box packaging design</div>
                <div class="flex items-center gap-2"><span class="w-2 h-2 bg-lxk-peach rounded-full"></span> Traditional-modern illustration style</div>
                <div class="flex items-center gap-2"><span class="w-2 h-2 bg-lxk-coral rounded-full"></span> Retail display & point-of-sale</div>
                <div class="flex items-center gap-2"><span class="w-2 h-2 bg-lxk-mint rounded-full"></span> Brand story & heritage messaging</div>
              </div>
            </div>

            <div class="mt-4">
              <a href="/portfolio" data-sveltekit-preload-data="hover" class="text-lxk-coral hover:text-lxk-peach transition-colors duration-200 font-medium">Read the Full Case Study →</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Design Process -->
    <div id="design-process" class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Our Design Process</h3>
      <div class="painterly-card p-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-lxk-sage/20 to-lxk-mint/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <div class="text-2xl">💭</div>
            </div>
            <h4 class="font-semibold text-lxk-warm-gray mb-2">Discovery</h4>
            <p class="text-sm text-gray-600">Understanding your vision, audience, and design goals</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-lxk-peach/20 to-lxk-coral/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <div class="text-2xl">✏️</div>
            </div>
            <h4 class="font-semibold text-lxk-warm-gray mb-2">Concept</h4>
            <p class="text-sm text-gray-600">Hand-sketched ideas and initial design directions</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-lxk-coral/20 to-lxk-sage/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <div class="text-2xl">🎨</div>
            </div>
            <h4 class="font-semibold text-lxk-warm-gray mb-2">Design</h4>
            <p class="text-sm text-gray-600">Digital refinement with Japanese painterly aesthetics</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-lxk-mint/20 to-lxk-peach/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <div class="text-2xl">📦</div>
            </div>
            <h4 class="font-semibold text-lxk-warm-gray mb-2">Delivery</h4>
            <p class="text-sm text-gray-600">Final files and production guidance</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Projects Rail -->
    {#if relevantProjects.length > 0}
    <div id="projects" class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-6 text-center">Recent Design Projects</h3>
      <HorizontalProjectRail projects={relevantProjects} />
      <div class="text-center mt-6">
        <a href="/portfolio" data-sveltekit-preload-data="hover" class="text-lxk-coral hover:text-lxk-peach transition-colors duration-200 font-medium">
          View All Projects →
        </a>
      </div>
    </div>
    {/if}

  </div>
</section>

<!-- FAQ Section -->
<div id="faq"></div>
<CompactFAQ faqs={graphicDesignFAQs} />

<!-- Testimonials Section -->
<TestimonialCarousel testimonials={getTestimonialsByService('graphic-design')} />

<!-- Enhanced CTA Section -->
<EnhancedCTA
  service="graphic-design"
  primaryTitle="Ready to Create Amazing Graphics?"
  primaryDescription="Book a free design consultation to explore your creative vision and project needs"
  primaryCTA="Book Free Design Consultation →"
  secondaryTitle="Need Custom Package?"
  secondaryDescription="Use our package builder to create a tailored design solution with instant pricing"
  leadMagnetTitle="Singapore Design Brief Template"
  leadMagnetBenefits={[
    'Complete design brief template for clear project communication',
    'Print specifications guide for Singapore market standards',
    'Color psychology and cultural considerations for local audience',
    'Design budget planning worksheet and timeline templates'
  ]}
/>