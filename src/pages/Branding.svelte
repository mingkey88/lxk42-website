<script>
  import { projects } from '../data/portfolio.js';
  import EnhancedCTA from '../components/ui/EnhancedCTA.svelte';
  import BrandPersonalityQuiz from '../components/tools/BrandPersonalityQuiz.svelte';
  import TestimonialCarousel from '../components/ui/TestimonialCarousel.svelte';
  import CompactFAQ from '../components/ui/CompactFAQ.svelte';
  import { getTestimonialsByService } from '../data/testimonials.js';
  import { serviceSchemas, injectStructuredData, updatePageMeta } from '../lib/structuredData.js';
  import { onMount } from 'svelte';
  import StatCard from '../components/ui/StatCard.svelte';
  import BrowserFrame from '../components/ui/BrowserFrame.svelte';
  import HorizontalProjectRail from '../components/ui/HorizontalProjectRail.svelte';

  // Filter projects relevant to branding
  const relevantProjects = projects.filter(project =>
    project.tags.includes('branding') || project.tags.includes('logo design')
  );

  // FAQ data for branding
  const brandingFAQs = [
    {
      question: "What's included in a branding project?",
      answer: "Logo design, color palette, typography, brand guidelines, and applications like business cards. We'll create a complete visual identity that tells your story."
    },
    {
      question: "How long does branding take?",
      answer: "Most branding projects take 2-4 weeks. We like to take time to really understand your business and create something meaningful."
    },
    {
      question: "Can you rebrand my existing business?",
      answer: "Absolutely! We'll analyze what's working in your current brand and evolve it thoughtfully. Change can be gradual - no need to throw everything away."
    },
    {
      question: "Do you help with brand strategy?",
      answer: "Yes! We don't just make things look pretty. We'll help you understand your audience, positioning, and messaging before we touch any design."
    },
    {
      question: "What if I only need a logo?",
      answer: "We can do logo-only projects, but we'd love to chat about how a complete brand system could help your business grow. Sometimes you need more than you think!"
    }
  ];

  onMount(() => {
    // SEO optimization
    updatePageMeta(
      'Branding Solutions Singapore | Light & Kaki Studio',
      'Professional branding and identity design in Singapore. Logo design, brand guidelines, and visual identity with Japanese-inspired aesthetics and local market understanding.'
    );
    injectStructuredData(serviceSchemas['branding'], 'service-branding');
  });
</script>

<section class="section-padding painterly-bg relative overflow-hidden">
  <div class="container-custom">
    <div class="text-center mb-6 md:mb-8 animate-on-scroll relative">
      <h1 class="text-4xl md:text-6xl font-extrabold text-lxk-warm-gray mb-4">Branding Solutions</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">Your voice, your look, your feeling — a brand that's unmistakably you, authentically Singaporean.</p>
      <!-- painterly hero accents -->
      <div class="texture-overlay"></div>
      <div class="paint-splash-1 hidden md:block" style="top:-20px; right:5%;"></div>
      <div class="paint-splash-2 hidden md:block" style="bottom:-10px; left:0;"></div>
      <div class="paint-splash-3 hidden md:block" style="top:40%; right:20%;"></div>
    </div>

    <!-- anchor mini-nav -->
    <nav class="mb-12 md:mb-16">
      <ul class="flex flex-wrap justify-center gap-2 md:gap-3">
        <li><a href="#branding-overview" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Overview</a></li>
        <li><a href="#personality-quiz" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Brand Quiz</a></li>
        <li><a href="#case-study" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Case Study</a></li>
        <li><a href="#performance" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Brand Impact</a></li>
        <li><a href="#projects" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Projects</a></li>
        <li><a href="#faq" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">FAQ</a></li>
      </ul>
    </nav>

    <div id="branding-overview" class="grid md:grid-cols-3 gap-8">
      <div class="painterly-card p-8 animate-on-scroll">
        <div class="w-12 h-12 mb-4 rounded-full bg-lxk-sage text-white flex items-center justify-center text-xl shadow">🎨</div>
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">Visual Identity</h3>
        <p class="text-gray-700">Logo design, color systems, and typography that captures your unique story with Japanese-inspired aesthetics.</p>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <div class="w-12 h-12 mb-4 rounded-full bg-lxk-peach text-white flex items-center justify-center text-xl shadow">🧭</div>
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">Brand Strategy</h3>
        <p class="text-gray-700">Positioning, messaging, and personality definition that resonates with Singapore's multicultural market.</p>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <div class="w-12 h-12 mb-4 rounded-full bg-lxk-coral text-white flex items-center justify-center text-xl shadow">📋</div>
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">Brand Guidelines</h3>
        <p class="text-gray-700">Complete usage guidelines and applications to ensure your brand stays consistent across all touchpoints.</p>
      </div>
    </div>

    <div class="mt-16 grid md:grid-cols-2 gap-8">
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-4">Our Approach</h3>
        <ul class="space-y-3 text-gray-700 list-disc pl-6">
          <li>Brand discovery sessions over kopi to understand your vision ☕</li>
          <li>Market research and competitor analysis for strategic positioning</li>
          <li>Multiple concept explorations with Japanese painterly aesthetics</li>
          <li>Collaborative refinement with your branding kakis</li>
        </ul>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-4">What You Get</h3>
        <ul class="space-y-3 text-gray-700 list-disc pl-6">
          <li>Complete visual identity system with logo variations</li>
          <li>Color palette, typography, and visual style guidelines</li>
          <li>Business card, letterhead, and digital asset templates</li>
          <li>Brand bible with usage guidelines and brand story</li>
        </ul>
      </div>
    </div>

    <!-- Brand Personality Quiz -->
    <div id="personality-quiz" class="mt-16 painterly-card p-8 animate-on-scroll">
      <h3 class="text-3xl font-bold text-lxk-sage mb-6 text-center">Brand Personality Quiz</h3>
      <p class="text-center text-gray-600 mb-8">Discover your brand's unique personality and positioning</p>
      <BrandPersonalityQuiz />
    </div>

    <!-- Case Study Preview -->
    <div id="case-study" class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Case Study Spotlight</h3>
      <div class="painterly-card p-8">
        <div class="grid md:grid-cols-2 gap-8 items-start">
          <!-- Visual mock -->
          <div>
            <BrowserFrame title="artisan-bakery.sg">
              <div class="rounded-xl border border-lxk-sage/10 p-4 bg-gradient-to-br from-lxk-cream/50 to-white">
                <!-- simple branding mock layout -->
                <div class="text-center mb-6">
                  <div class="w-20 h-20 bg-gradient-to-br from-lxk-sage/40 to-lxk-peach/40 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <div class="text-2xl">🥐</div>
                  </div>
                  <div class="h-4 w-32 bg-lxk-sage/40 rounded mx-auto mb-2"></div>
                  <div class="h-2 w-24 bg-gray-200 rounded mx-auto"></div>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <div class="h-12 rounded bg-lxk-peach/20"></div>
                  <div class="h-12 rounded bg-lxk-coral/20"></div>
                </div>
              </div>
            </BrowserFrame>
          </div>

          <!-- Text + stats -->
          <div>
            <div class="inline-block bg-lxk-mint/20 text-lxk-sage px-3 py-1 rounded-full text-sm font-medium mb-4">
              Complete Brand Transformation
            </div>
            <h4 class="text-2xl font-bold text-lxk-warm-gray mb-3">
              From Local Bakery to Premium Brand
            </h4>
            <p class="text-gray-700 mb-6">
              The Artisan Corner needed a brand that reflected their commitment to quality and Singapore heritage.
            </p>

            <div class="grid grid-cols-2 gap-4 mb-6">
              <StatCard value={85} suffix="%" label="Brand Recognition" color="peach" />
              <StatCard value={160} suffix="%" label="Premium Pricing" color="coral" />
            </div>

            <p class="text-lxk-coral italic font-medium">
              "The new brand perfectly captures our heritage and quality. Customers immediately understand our story."
            </p>
            <p class="text-gray-600 text-sm mt-2">— Jenny Wu, Founder</p>

            <div class="mt-6 rounded-2xl p-5 bg-lxk-cream/60 border border-lxk-sage/10">
              <h5 class="font-semibold text-lxk-warm-gray mb-3">What We Did</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                <div class="flex items-center gap-2"><span class="w-2 h-2 bg-lxk-sage rounded-full"></span> Brand strategy & positioning</div>
                <div class="flex items-center gap-2"><span class="w-2 h-2 bg-lxk-peach rounded-full"></span> Logo & visual identity design</div>
                <div class="flex items-center gap-2"><span class="w-2 h-2 bg-lxk-coral rounded-full"></span> Packaging & retail applications</div>
                <div class="flex items-center gap-2"><span class="w-2 h-2 bg-lxk-mint rounded-full"></span> Brand guidelines & training</div>
              </div>
            </div>

            <div class="mt-4">
              <a href="#/portfolio" class="text-lxk-coral hover:text-lxk-peach transition-colors duration-200 font-medium">Read the Full Case Study →</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Brand Impact Metrics -->
    <div id="performance" class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Average Brand Impact</h3>
      <div class="painterly-card p-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="rounded-xl border border-lxk-sage/10 p-4 text-center bg-white">
            <div class="text-3xl font-extrabold text-lxk-sage">180%</div>
            <div class="text-sm text-gray-600">Brand Recognition</div>
          </div>
          <div class="rounded-xl border border-lxk-sage/10 p-4 text-center bg-white">
            <div class="text-3xl font-extrabold text-lxk-peach">65%</div>
            <div class="text-sm text-gray-600">Premium Pricing</div>
          </div>
          <div class="rounded-xl border border-lxk-sage/10 p-4 text-center bg-white">
            <div class="text-3xl font-extrabold text-lxk-coral">120%</div>
            <div class="text-sm text-gray-600">Customer Loyalty</div>
          </div>
          <div class="rounded-xl border border-lxk-sage/10 p-4 text-center bg-white">
            <div class="text-3xl font-extrabold text-lxk-sage">95%</div>
            <div class="text-sm text-gray-600">Brand Consistency</div>
          </div>
        </div>
        <div class="text-xs text-gray-500 mt-3 text-center">Average improvements after brand launch with our Singapore clients</div>
      </div>
    </div>

    <!-- Projects Rail -->
    {#if relevantProjects.length > 0}
    <div id="projects" class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-6 text-center">Recent Branding Projects</h3>
      <HorizontalProjectRail projects={relevantProjects} />
      <div class="text-center mt-6">
        <a href="#/portfolio" class="text-lxk-coral hover:text-lxk-peach transition-colors duration-200 font-medium">
          View All Projects →
        </a>
      </div>
    </div>
    {/if}

  </div>
</section>

<!-- FAQ Section -->
<div id="faq"></div>
<CompactFAQ faqs={brandingFAQs} />

<!-- Testimonials Section -->
<TestimonialCarousel testimonials={getTestimonialsByService('branding')} />

<!-- Enhanced CTA Section -->
<EnhancedCTA
  service="branding"
  primaryTitle="Ready to Build Your Brand?"
  primaryDescription="Book a free brand consultation to explore your vision and create an authentic identity"
  primaryCTA="Book Free Brand Consultation →"
  secondaryTitle="Discover Your Brand Personality"
  secondaryDescription="Take our brand personality quiz and receive custom recommendations"
  leadMagnetTitle="Singapore Brand Identity Toolkit"
  leadMagnetBenefits={[
    'Complete brand strategy framework for Singapore market',
    'Logo design checklist and visual identity guidelines',
    'Local market positioning templates and examples',
    'Brand launch timeline and marketing integration guide'
  ]}
/>