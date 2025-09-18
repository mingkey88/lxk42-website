<script>
  import { projects } from '$lib/data/portfolio.js';
  import EnhancedCTA from '$lib/components/ui/EnhancedCTA.svelte';
  import TestimonialCarousel from '$lib/components/ui/TestimonialCarousel.svelte';
  import CompactFAQ from '$lib/components/ui/CompactFAQ.svelte';
  import { getTestimonialsByService } from '$lib/data/testimonials.js';
  import { serviceSchemas, injectStructuredData, updatePageMeta } from '$lib/structuredData.js';
  import { onMount } from 'svelte';
  import StatCard from '$lib/components/ui/StatCard.svelte';
  import BrowserFrame from '$lib/components/ui/BrowserFrame.svelte';
  import HorizontalProjectRail from '$lib/components/ui/HorizontalProjectRail.svelte';

  // Filter projects relevant to motion graphics
  const relevantProjects = projects.filter(project =>
    project.tags.includes('motion graphics') || project.tags.includes('animation') || project.tags.includes('video')
  );

  // FAQ data for motion graphics
  const motionGraphicsFAQs = [
    {
      question: "What types of animation do you create?",
      answer: "Logo animations, explainer videos, social media content, website micro-interactions, and full marketing videos. From simple to cinematic!"
    },
    {
      question: "How long are typical videos?",
      answer: "Most marketing videos are 30-90 seconds. Explainer videos can be 1-3 minutes. We'll help you find the perfect length for your message and platform."
    },
    {
      question: "Do you provide voiceovers?",
      answer: "We can! We work with talented voice artists for different languages and styles. Or if you prefer to handle that yourself, we're happy to work with your audio."
    },
    {
      question: "What formats do you deliver?",
      answer: "MP4 for most uses, plus optimized versions for social media, web, and presentations. We'll make sure your videos look great wherever they're shown."
    },
    {
      question: "Can you animate our existing graphics?",
      answer: "Absolutely! Send us your logos, graphics, or brand elements and we'll bring them to life. Motion graphics can make any design more engaging."
    }
  ];

  onMount(() => {
    // SEO optimization
    updatePageMeta(
      'Motion Graphics & Animation Singapore | Light & Kaki Studio',
      'Professional motion graphics and animation services in Singapore. Explainer videos, logo animations, and marketing content with Japanese-inspired aesthetics.'
    );
    injectStructuredData(serviceSchemas['motion-graphics'], 'service-motion-graphics');
  });
</script>

<section class="section-padding painterly-bg relative overflow-hidden">
  <div class="container-custom">
    <div class="text-center mb-6 md:mb-8 animate-on-scroll relative">
      <h1 class="text-4xl md:text-6xl font-extrabold text-lxk-warm-gray mb-4">Motion Graphics & Animation</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">Motion that feels alive — from subtle micro‑interactions to story‑driven explainers.</p>
      <!-- painterly hero accents -->
      <div class="texture-overlay"></div>
      <div class="paint-splash-1 hidden md:block" style="top:-20px; right:5%;"></div>
      <div class="paint-splash-2 hidden md:block" style="bottom:-10px; left:0;"></div>
      <div class="paint-splash-3 hidden md:block" style="top:40%; right:20%;"></div>
    </div>

    <!-- anchor mini-nav -->
    <nav class="mb-12 md:mb-16">
      <ul class="flex flex-wrap justify-center gap-2 md:gap-3">
        <li><a href="#motion-overview" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Overview</a></li>
        <li><a href="#animation-types" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Animation Types</a></li>
        <li><a href="#performance" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Impact</a></li>
        <li><a href="#projects" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Projects</a></li>
        <li><a href="#faq" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">FAQ</a></li>
      </ul>
    </nav>

    <div id="motion-overview" class="grid md:grid-cols-3 gap-8">
      <div class="painterly-card p-8 animate-on-scroll">
        <div class="w-12 h-12 mb-4 rounded-full bg-lxk-sage text-white flex items-center justify-center text-xl shadow">🎬</div>
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">Explainer Videos</h3>
        <p class="text-gray-700">Clear, engaging videos that explain your products, services, or concepts with warmth and personality.</p>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <div class="w-12 h-12 mb-4 rounded-full bg-lxk-peach text-white flex items-center justify-center text-xl shadow">✨</div>
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">Logo & Brand Animation</h3>
        <p class="text-gray-700">Breathe life into your brand elements with subtle animations that enhance recognition and memorability.</p>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <div class="w-12 h-12 mb-4 rounded-full bg-lxk-coral text-white flex items-center justify-center text-xl shadow">📱</div>
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">Social & Marketing</h3>
        <p class="text-gray-700">Eye-catching animations optimized for Instagram, LinkedIn, TikTok, and other social platforms.</p>
      </div>
    </div>

    <div class="mt-16 grid md:grid-cols-2 gap-8">
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-4">Our Approach</h3>
        <ul class="space-y-3 text-gray-700 list-disc pl-6">
          <li>Storyboard sessions over kopi to map your narrative ☕</li>
          <li>Hand-drawn style frames with Japanese aesthetic influence</li>
          <li>Smooth, organic motion that feels natural and engaging</li>
          <li>Collaborative reviews with your animation kakis</li>
        </ul>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-4">What You Get</h3>
        <ul class="space-y-3 text-gray-700 list-disc pl-6">
          <li>High-quality animations in multiple formats and sizes</li>
          <li>Source files for future edits and adaptations</li>
          <li>Platform-specific versions for optimal performance</li>
          <li>Guidance on best practices for video marketing</li>
        </ul>
      </div>
    </div>


    <!-- Animation Types -->
    <div id="animation-types" class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Types of Animation We Create</h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="painterly-card p-6 text-center">
          <div class="w-16 h-16 bg-gradient-to-br from-lxk-sage/20 to-lxk-mint/20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <div class="text-2xl">🎯</div>
          </div>
          <h4 class="font-semibold text-lxk-warm-gray mb-2">Explainer Videos</h4>
          <p class="text-sm text-gray-600">2D animated stories that simplify complex concepts</p>
        </div>
        <div class="painterly-card p-6 text-center">
          <div class="w-16 h-16 bg-gradient-to-br from-lxk-peach/20 to-lxk-coral/20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <div class="text-2xl">🏷️</div>
          </div>
          <h4 class="font-semibold text-lxk-warm-gray mb-2">Logo Animation</h4>
          <p class="text-sm text-gray-600">Brand logos that come alive with subtle motion</p>
        </div>
        <div class="painterly-card p-6 text-center">
          <div class="w-16 h-16 bg-gradient-to-br from-lxk-coral/20 to-lxk-sage/20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <div class="text-2xl">📱</div>
          </div>
          <h4 class="font-semibold text-lxk-warm-gray mb-2">Social Media</h4>
          <p class="text-sm text-gray-600">Short, engaging content for all platforms</p>
        </div>
        <div class="painterly-card p-6 text-center">
          <div class="w-16 h-16 bg-gradient-to-br from-lxk-mint/20 to-lxk-peach/20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <div class="text-2xl">💻</div>
          </div>
          <h4 class="font-semibold text-lxk-warm-gray mb-2">Web Animations</h4>
          <p class="text-sm text-gray-600">Micro-interactions and loading animations</p>
        </div>
        <div class="painterly-card p-6 text-center">
          <div class="w-16 h-16 bg-gradient-to-br from-lxk-sage/20 to-lxk-coral/20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <div class="text-2xl">📊</div>
          </div>
          <h4 class="font-semibold text-lxk-warm-gray mb-2">Data Visualization</h4>
          <p class="text-sm text-gray-600">Charts and graphs that tell compelling stories</p>
        </div>
        <div class="painterly-card p-6 text-center">
          <div class="w-16 h-16 bg-gradient-to-br from-lxk-peach/20 to-lxk-mint/20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <div class="text-2xl">🎨</div>
          </div>
          <h4 class="font-semibold text-lxk-warm-gray mb-2">Illustration Animation</h4>
          <p class="text-sm text-gray-600">Hand-drawn style animations with personality</p>
        </div>
      </div>
    </div>

    <!-- Performance Impact -->
    <div id="performance" class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Average Animation Impact</h3>
      <div class="painterly-card p-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="rounded-xl border border-lxk-sage/10 p-4 text-center bg-white">
            <div class="text-3xl font-extrabold text-lxk-sage">400%</div>
            <div class="text-sm text-gray-600">Engagement Boost</div>
          </div>
          <div class="rounded-xl border border-lxk-sage/10 p-4 text-center bg-white">
            <div class="text-3xl font-extrabold text-lxk-peach">80%</div>
            <div class="text-sm text-gray-600">Message Retention</div>
          </div>
          <div class="rounded-xl border border-lxk-sage/10 p-4 text-center bg-white">
            <div class="text-3xl font-extrabold text-lxk-coral">200%</div>
            <div class="text-sm text-gray-600">Social Shares</div>
          </div>
          <div class="rounded-xl border border-lxk-sage/10 p-4 text-center bg-white">
            <div class="text-3xl font-extrabold text-lxk-sage">65%</div>
            <div class="text-sm text-gray-600">Conversion Rate</div>
          </div>
        </div>
        <div class="text-xs text-gray-500 mt-3 text-center">Average performance improvements with video content for our Singapore clients</div>
      </div>
    </div>

    <!-- Projects Rail -->
    {#if relevantProjects.length > 0}
    <div id="projects" class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-6 text-center">Recent Animation Projects</h3>
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
<CompactFAQ faqs={motionGraphicsFAQs} />

<!-- Testimonials Section -->
<TestimonialCarousel testimonials={getTestimonialsByService('motion-graphics')} />

<!-- Enhanced CTA Section -->
<EnhancedCTA
  service="motion-graphics"
  primaryTitle="Ready to Bring Your Brand to Life?"
  primaryDescription="Book a free animation consultation to explore your video content strategy and creative possibilities"
  primaryCTA="Book Free Animation Consultation →"
  secondaryTitle="Need Animation Inspiration?"
  secondaryDescription="Download our motion graphics guide with examples and best practices for Singapore businesses"
  leadMagnetTitle="Singapore Video Marketing Toolkit"
  leadMagnetBenefits={[
    'Complete video content strategy framework for Singapore market',
    'Animation style guide with cultural considerations and examples',
    'Platform optimization specs for social media and web video',
    'ROI measurement templates and performance benchmarking'
  ]}
/>