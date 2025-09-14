<script>
  import { projects } from '../data/portfolio.js';
  import EnhancedCTA from '../components/ui/EnhancedCTA.svelte';
  import TestimonialCarousel from '../components/ui/TestimonialCarousel.svelte';
  import CompactFAQ from '../components/ui/CompactFAQ.svelte';
  import { getTestimonialsByService } from '../data/testimonials.js';
  import { serviceSchemas, injectStructuredData, updatePageMeta } from '../lib/structuredData.js';
  import { onMount } from 'svelte';
  import StatCard from '../components/ui/StatCard.svelte';
  import BrowserFrame from '../components/ui/BrowserFrame.svelte';
  import UIkitPreview from '../components/ui/UIkitPreview.svelte';
  import HorizontalProjectRail from '../components/ui/HorizontalProjectRail.svelte';

  // Filter projects relevant to web design
  const relevantProjects = projects.filter(project =>
    project.tags.includes('web design') || project.tags.includes('ecommerce')
  );

  // FAQ data for web design
  const webDesignFAQs = [
    {
      question: "What's included in a website project?",
      answer: "Every website includes custom design, mobile optimization, basic SEO, contact forms, and post-launch support. We'll walk through exactly what you need during our kopi chat!"
    },
    {
      question: "How long does a website take?",
      answer: "Most websites take 3-6 weeks from start to finish. We'll give you a realistic timeline after understanding your specific needs and content requirements."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Absolutely! We offer 30-90 days of post-launch support, plus ongoing maintenance packages. Think of us as your website kakis for life."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Yes! We love breathing new life into existing websites. We'll analyze what's working, what isn't, and create a fresh design that keeps your best content."
    },
    {
      question: "Do you work with e-commerce?",
      answer: "We do! From simple product catalogs to full online stores, we'll help you sell online with style. Shopify, WooCommerce, or custom solutions - whatever fits your business."
    }
  ];

  onMount(() => {
    // SEO optimization
    updatePageMeta(
      'Web Design & Development Singapore | Light & Kaki Studio',
      'Professional web design and development services in Singapore. Custom websites with Japanese-inspired design, modern technology, and authentic kaki collaboration.'
    );
    injectStructuredData(serviceSchemas['web-design'], 'service-web-design');
  });
</script>

<section class="section-padding painterly-bg relative overflow-hidden">
  <div class="container-custom">
    <div class="text-center mb-6 md:mb-8 animate-on-scroll relative">
      <h1 class="text-4xl md:text-6xl font-extrabold text-lxk-warm-gray mb-4">Web Design & Development</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">Thoughtful, friendly, and effective websites crafted with care — built for your story and your audience.</p>
      <!-- painterly hero accents -->
      <div class="texture-overlay"></div>
      <div class="paint-splash-1 hidden md:block" style="top:-20px; right:5%;"></div>
      <div class="paint-splash-2 hidden md:block" style="bottom:-10px; left:0;"></div>
      <div class="paint-splash-3 hidden md:block" style="top:40%; right:20%;"></div>
    </div>

    <!-- anchor mini-nav -->
    <nav class="mb-12 md:mb-16">
      <ul class="flex flex-wrap justify-center gap-2 md:gap-3">
        <li><a href="#web-overview" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Overview</a></li>
        <li><a href="#case-study" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Case Study</a></li>
        <li><a href="#performance" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Performance</a></li>
        <li><a href="#ui-kit" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">UI Kit</a></li>
        <li><a href="#projects" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Projects</a></li>
        <li><a href="#faq" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">FAQ</a></li>
      </ul>
    </nav>

    <div id="web-overview" class="grid md:grid-cols-3 gap-8">
      <div class="painterly-card p-8 animate-on-scroll">
        <div class="w-12 h-12 mb-4 rounded-full bg-lxk-sage text-white flex items-center justify-center text-xl shadow">🖥️</div>
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">Brand‑aligned UI</h3>
        <p class="text-gray-700">Warm, painterly interfaces that feel authentic and approachable — using our signature color palette and typography.</p>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <div class="w-12 h-12 mb-4 rounded-full bg-lxk-peach text-white flex items-center justify-center text-xl shadow">⚡</div>
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">Performance & SEO</h3>
        <p class="text-gray-700">Fast loads, accessible structure, and clean semantics to help both people and search engines understand your site.</p>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <div class="w-12 h-12 mb-4 rounded-full bg-lxk-coral text-white flex items-center justify-center text-xl shadow">🧩</div>
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">CMS & Hand‑off</h3>
        <p class="text-gray-700">Optional CMS integration and friendly documentation so your team can easily update content.</p>
      </div>
    </div>

    <div class="mt-16 grid md:grid-cols-2 gap-8">
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-4">Our Approach</h3>
        <ul class="space-y-3 text-gray-700 list-disc pl-6">
          <li>Discovery kopi sessions that feel like chatting with old friends ☕</li>
          <li>Wireframes and design explorations that capture your unique story</li>
          <li>Accessible, responsive implementation with Svelte + Tailwind</li>
          <li>Content and SEO support from your creative kakis</li>
        </ul>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-4">What You Get</h3>
        <ul class="space-y-3 text-gray-700 list-disc pl-6">
          <li>Modern, high‑performance site with warm visuals</li>
          <li>Editor‑friendly updates via CMS (optional)</li>
          <li>Friendly handover docs and a quick training call</li>
          <li>Room to grow with your business</li>
        </ul>
      </div>
    </div>


    <!-- Case Study Preview -->
    <div id="case-study" class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Case Study Spotlight</h3>
      <div class="painterly-card p-8">
        <div class="grid md:grid-cols-2 gap-8 items-start">
          <!-- Visual mock in browser frame -->
          <div>
            <BrowserFrame title="greenspace.sg">
              <div class="rounded-xl border border-lxk-sage/10 p-4 bg-gradient-to-br from-lxk-cream/50 to-white">
                <!-- simple mock layout -->
                <div class="h-4 w-40 bg-lxk-sage/40 rounded mb-3"></div>
                <div class="grid grid-cols-3 gap-3 mb-4">
                  <div class="h-24 rounded-xl bg-lxk-mint/30"></div>
                  <div class="h-24 rounded-xl bg-lxk-peach/30"></div>
                  <div class="h-24 rounded-xl bg-lxk-coral/30"></div>
                </div>
                <div class="h-3 w-2/3 bg-gray-200 rounded mb-2"></div>
                <div class="h-3 w-1/2 bg-gray-200 rounded"></div>
              </div>
            </BrowserFrame>
          </div>

          <!-- Text + stats -->
          <div>
            <div class="inline-block bg-lxk-mint/20 text-lxk-sage px-3 py-1 rounded-full text-sm font-medium mb-4">
              E-commerce Transformation
            </div>
            <h4 class="text-2xl font-bold text-lxk-warm-gray mb-3">
              From 30% Bounce Rate to 15% in 3 Months
            </h4>
            <p class="text-gray-700 mb-6">
              GreenSpace SG needed a complete website overhaul. Their old site was driving away potential customers with slow loading times and confusing navigation.
            </p>

            <div class="grid grid-cols-2 gap-4 mb-6">
              <StatCard value={50} suffix="%" label="Faster Load Time" color="peach" />
              <StatCard value={180} suffix="%" label="More Conversions" color="coral" />
            </div>

            <p class="text-lxk-coral italic font-medium">
              "Working with Light & Kaki felt like having creative friends who truly cared about our success."
            </p>
            <p class="text-gray-600 text-sm mt-2">— Sarah Chen, Founder</p>

            <div class="mt-6 rounded-2xl p-5 bg-lxk-cream/60 border border-lxk-sage/10">
              <h5 class="font-semibold text-lxk-warm-gray mb-3">What We Did</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                <div class="flex items-center gap-2"><span class="w-2 h-2 bg-lxk-sage rounded-full"></span> User research & competitive analysis</div>
                <div class="flex items-center gap-2"><span class="w-2 h-2 bg-lxk-peach rounded-full"></span> Complete UX/UI redesign</div>
                <div class="flex items-center gap-2"><span class="w-2 h-2 bg-lxk-coral rounded-full"></span> Performance optimization</div>
                <div class="flex items-center gap-2"><span class="w-2 h-2 bg-lxk-mint rounded-full"></span> SEO foundation & analytics setup</div>
              </div>
            </div>

            <div class="mt-4">
              <a href="#/portfolio" class="text-lxk-coral hover:text-lxk-peach transition-colors duration-200 font-medium">Read the Full Case Study →</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Performance Snapshot -->
    <div id="performance" class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Performance Snapshot</h3>
      <div class="painterly-card p-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="rounded-xl border border-lxk-sage/10 p-4 text-center bg-white">
            <div class="text-3xl font-extrabold text-lxk-sage">95</div>
            <div class="text-sm text-gray-600">Performance</div>
          </div>
          <div class="rounded-xl border border-lxk-sage/10 p-4 text-center bg-white">
            <div class="text-3xl font-extrabold text-lxk-peach">98</div>
            <div class="text-sm text-gray-600">Accessibility</div>
          </div>
          <div class="rounded-xl border border-lxk-sage/10 p-4 text-center bg-white">
            <div class="text-3xl font-extrabold text-lxk-coral">100</div>
            <div class="text-sm text-gray-600">Best Practices</div>
          </div>
          <div class="rounded-xl border border-lxk-sage/10 p-4 text-center bg-white">
            <div class="text-3xl font-extrabold text-lxk-sage">92</div>
            <div class="text-sm text-gray-600">SEO</div>
          </div>
        </div>
        <div class="text-xs text-gray-500 mt-3 text-center">Indicative targets we design for in production builds</div>
      </div>
    </div>

    <!-- UI Kit Preview -->
    <div id="ui-kit" class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Mini UI Kit</h3>
      <UIkitPreview />
    </div>

    <!-- Projects Rail -->
    {#if relevantProjects.length > 0}
    <div id="projects" class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-6 text-center">More Recent Projects</h3>
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
<CompactFAQ faqs={webDesignFAQs} />

<!-- Testimonials Section -->
<TestimonialCarousel testimonials={getTestimonialsByService('web-design')} />

<!-- Enhanced CTA Section -->
<EnhancedCTA
  service="web-design"
  primaryTitle="Ready to Build Your Dream Website?"
  primaryDescription="Book a free consultation to discuss your vision, goals, and how we can bring them to life"
  primaryCTA="Book Free Website Consultation →"
  secondaryTitle="Want to Plan First?"
  secondaryDescription="Download our comprehensive planning guide used by 200+ Singapore businesses"
  leadMagnetTitle="Website Planning Toolkit for Singapore Businesses"
  leadMagnetBenefits={[
    'Complete project scope template with budget estimates',
    '15-point website checklist from Singapore experts',
    'Real examples from local successful businesses',
    'Content planning worksheets and wireframe templates'
  ]}
/>
