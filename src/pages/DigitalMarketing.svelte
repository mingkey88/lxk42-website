<script>
  import { projects } from '../data/portfolio.js';
  import EnhancedCTA from '../components/ui/EnhancedCTA.svelte';
  import MarketingROICalculator from '../components/tools/MarketingROICalculator.svelte';
  import TestimonialCarousel from '../components/ui/TestimonialCarousel.svelte';
  import CompactFAQ from '../components/ui/CompactFAQ.svelte';
  import { getTestimonialsByService } from '../data/testimonials.js';
  import { serviceSchemas, injectStructuredData, updatePageMeta } from '../lib/structuredData.js';
  import { onMount } from 'svelte';
  import StatCard from '../components/ui/StatCard.svelte';
  import BrowserFrame from '../components/ui/BrowserFrame.svelte';
  import HorizontalProjectRail from '../components/ui/HorizontalProjectRail.svelte';

  // Filter projects relevant to digital marketing
  const relevantProjects = projects.filter(project =>
    project.tags.includes('digital marketing') || project.tags.includes('social media') || project.tags.includes('seo')
  );

  // FAQ data for digital marketing
  const digitalMarketingFAQs = [
    {
      question: "What social media platforms do you manage?",
      answer: "We focus on platforms where your audience is most active - Instagram, Facebook, LinkedIn, TikTok. We'll recommend the best mix based on your business and goals."
    },
    {
      question: "How do you measure campaign success?",
      answer: "We track real business metrics: leads, conversions, engagement, and ROI. You'll get monthly reports showing exactly how your marketing investment is performing."
    },
    {
      question: "Can you help with Google Ads?",
      answer: "Yes! We handle Google Ads, Facebook Ads, and other paid campaigns. We'll optimize your ad spend to get the best results for your budget."
    },
    {
      question: "Do you create content or just manage posts?",
      answer: "We do both! Content creation, graphics, copywriting, and strategic posting. Think of us as your complete marketing team."
    },
    {
      question: "What if I already have a marketing team?",
      answer: "Perfect! We love collaborating with in-house teams. We can fill gaps, provide expertise, or handle overflow work - whatever you need."
    }
  ];

  onMount(() => {
    // SEO optimization
    updatePageMeta(
      'Digital Marketing Singapore | Light & Kaki Studio',
      'Strategic digital marketing services in Singapore. Social media, SEO, and paid advertising with authentic kaki collaboration and measurable results.'
    );
    injectStructuredData(serviceSchemas['digital-marketing'], 'service-digital-marketing');
  });
</script>

<section class="section-padding painterly-bg relative overflow-hidden">
  <div class="container-custom">
    <div class="text-center mb-6 md:mb-8 animate-on-scroll relative">
      <h1 class="text-4xl md:text-6xl font-extrabold text-lxk-warm-gray mb-4">Digital Marketing</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">Thoughtful campaigns that feel human — building relationships, not just impressions.</p>
      <!-- painterly hero accents -->
      <div class="texture-overlay"></div>
      <div class="paint-splash-1 hidden md:block" style="top:-20px; right:5%;"></div>
      <div class="paint-splash-2 hidden md:block" style="bottom:-10px; left:0;"></div>
      <div class="paint-splash-3 hidden md:block" style="top:40%; right:20%;"></div>
    </div>

    <!-- anchor mini-nav -->
    <nav class="mb-12 md:mb-16">
      <ul class="flex flex-wrap justify-center gap-2 md:gap-3">
        <li><a href="#marketing-overview" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Overview</a></li>
        <li><a href="#roi-calculator" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">ROI Calculator</a></li>
        <li><a href="#case-study" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Case Study</a></li>
        <li><a href="#performance" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Performance</a></li>
        <li><a href="#projects" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Projects</a></li>
        <li><a href="#faq" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">FAQ</a></li>
      </ul>
    </nav>

    <div id="marketing-overview" class="grid md:grid-cols-3 gap-8">
      <div class="painterly-card p-8 animate-on-scroll">
        <div class="w-12 h-12 mb-4 rounded-full bg-lxk-sage text-white flex items-center justify-center text-xl shadow">📱</div>
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">Social & Content</h3>
        <p class="text-gray-700">Calendar planning, content production, and community engagement with a friendly local voice.</p>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <div class="w-12 h-12 mb-4 rounded-full bg-lxk-peach text-white flex items-center justify-center text-xl shadow">🔍</div>
        <h3 class="text-2xl font-semibent text-lxk-sage mb-3">SEO & Web Fundamentals</h3>
        <p class="text-gray-700">Clean structure, fast performance, and on‑page best practices that help people find you.</p>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <div class="w-12 h-12 mb-4 rounded-full bg-lxk-coral text-white flex items-center justify-center text-xl shadow">📊</div>
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">Ads & Analytics</h3>
        <p class="text-gray-700">Budget management, A/B testing, and clear reporting for Google Ads and social platforms.</p>
      </div>
    </div>

    <div class="mt-16 grid md:grid-cols-2 gap-8">
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-4">Our Approach</h3>
        <ul class="space-y-3 text-gray-700 list-disc pl-6">
          <li>Audience research and competitor analysis over kopi ☕</li>
          <li>Content strategy sessions to capture your unique brand voice</li>
          <li>Multi-platform campaigns optimized for Singapore audiences</li>
          <li>Monthly performance reviews with your marketing kakis</li>
        </ul>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-4">What You Get</h3>
        <ul class="space-y-3 text-gray-700 list-disc pl-6">
          <li>Complete content calendar with Singapore-focused messaging</li>
          <li>Professional graphics and copy that match your brand</li>
          <li>Monthly ROI reports showing real business impact</li>
          <li>Direct access to your marketing kakis for quick updates</li>
        </ul>
      </div>
    </div>

    <!-- Interactive ROI Calculator -->
    <div id="roi-calculator" class="mt-16 painterly-card p-8 animate-on-scroll">
      <h3 class="text-3xl font-bold text-lxk-sage mb-6 text-center">Marketing ROI Calculator</h3>
      <p class="text-center text-gray-600 mb-8">See the potential return on your marketing investment</p>
      <MarketingROICalculator />
    </div>

    <!-- Case Study Preview -->
    <div id="case-study" class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Case Study Spotlight</h3>
      <div class="painterly-card p-8">
        <div class="grid md:grid-cols-2 gap-8 items-start">
          <!-- Visual mock -->
          <div>
            <BrowserFrame title="bloom-cafe.sg">
              <div class="rounded-xl border border-lxk-sage/10 p-4 bg-gradient-to-br from-lxk-cream/50 to-white">
                <!-- simple social media mock layout -->
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 bg-lxk-sage/40 rounded-full"></div>
                  <div>
                    <div class="h-3 w-24 bg-lxk-sage/40 rounded mb-1"></div>
                    <div class="h-2 w-16 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div class="h-32 rounded-xl bg-gradient-to-br from-lxk-peach/30 to-lxk-coral/30 mb-3"></div>
                <div class="h-2 w-3/4 bg-gray-200 rounded mb-2"></div>
                <div class="h-2 w-1/2 bg-gray-200 rounded"></div>
              </div>
            </BrowserFrame>
          </div>

          <!-- Text + stats -->
          <div>
            <div class="inline-block bg-lxk-mint/20 text-lxk-sage px-3 py-1 rounded-full text-sm font-medium mb-4">
              Social Media Growth
            </div>
            <h4 class="text-2xl font-bold text-lxk-warm-gray mb-3">
              From 500 to 15K Followers in 8 Months
            </h4>
            <p class="text-gray-700 mb-6">
              Bloom Café needed to build their online community. Their Instagram had beautiful food but no engagement strategy.
            </p>

            <div class="grid grid-cols-2 gap-4 mb-6">
              <StatCard value={300} suffix="%" label="Engagement Growth" color="peach" />
              <StatCard value={45} suffix="%" label="More Reservations" color="coral" />
            </div>

            <p class="text-lxk-coral italic font-medium">
              "Our marketing kakis understood our cafe culture perfectly and helped us connect with our community."
            </p>
            <p class="text-gray-600 text-sm mt-2">— Marcus Lim, Owner</p>

            <div class="mt-6 rounded-2xl p-5 bg-lxk-cream/60 border border-lxk-sage/10">
              <h5 class="font-semibold text-lxk-warm-gray mb-3">What We Did</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                <div class="flex items-center gap-2"><span class="w-2 h-2 bg-lxk-sage rounded-full"></span> Brand voice & content strategy</div>
                <div class="flex items-center gap-2"><span class="w-2 h-2 bg-lxk-peach rounded-full"></span> Daily content creation & posting</div>
                <div class="flex items-center gap-2"><span class="w-2 h-2 bg-lxk-coral rounded-full"></span> Community engagement & response</div>
                <div class="flex items-center gap-2"><span class="w-2 h-2 bg-lxk-mint rounded-full"></span> Influencer partnerships & events</div>
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
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Average Campaign Performance</h3>
      <div class="painterly-card p-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="rounded-xl border border-lxk-sage/10 p-4 text-center bg-white">
            <div class="text-3xl font-extrabold text-lxk-sage">250%</div>
            <div class="text-sm text-gray-600">Avg. ROI</div>
          </div>
          <div class="rounded-xl border border-lxk-sage/10 p-4 text-center bg-white">
            <div class="text-3xl font-extrabold text-lxk-peach">45%</div>
            <div class="text-sm text-gray-600">Engagement Rate</div>
          </div>
          <div class="rounded-xl border border-lxk-sage/10 p-4 text-center bg-white">
            <div class="text-3xl font-extrabold text-lxk-coral">180%</div>
            <div class="text-sm text-gray-600">Lead Growth</div>
          </div>
          <div class="rounded-xl border border-lxk-sage/10 p-4 text-center bg-white">
            <div class="text-3xl font-extrabold text-lxk-sage">92%</div>
            <div class="text-sm text-gray-600">Client Retention</div>
          </div>
        </div>
        <div class="text-xs text-gray-500 mt-3 text-center">Average results across our Singapore client base</div>
      </div>
    </div>

    <!-- Projects Rail -->
    {#if relevantProjects.length > 0}
    <div id="projects" class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-6 text-center">Recent Marketing Projects</h3>
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
<CompactFAQ faqs={digitalMarketingFAQs} />

<!-- Testimonials Section -->
<TestimonialCarousel testimonials={getTestimonialsByService('digital-marketing')} />

<!-- Enhanced CTA Section -->
<EnhancedCTA
  service="digital-marketing"
  primaryTitle="Ready to Grow Your Business?"
  primaryDescription="Book a free marketing audit to discover untapped opportunities and create your growth plan"
  primaryCTA="Book Free Marketing Audit →"
  secondaryTitle="Want ROI Projections?"
  secondaryDescription="Download our ROI calculator and see potential returns from digital marketing"
  leadMagnetTitle="Singapore Digital Marketing ROI Calculator"
  leadMagnetBenefits={[
    'Interactive ROI calculator with Singapore benchmarks',
    'Channel-specific performance predictions and budgets',
    'Local market insights and competitor analysis templates',
    '90-day marketing launch plan for Singapore businesses'
  ]}
/>