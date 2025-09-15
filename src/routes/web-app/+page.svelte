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

  // Filter projects relevant to web app development
  const relevantProjects = projects.filter(project =>
    project.tags.includes('web app') || project.tags.includes('development') || project.tags.includes('full-stack')
  );

  // FAQ data for web apps
  const webAppFAQs = [
    {
      question: "What's the difference between MVP and Full Platform?",
      answer: "MVP focuses on core features to test your concept quickly. Full Platform includes advanced features, integrations, and scalability for established businesses."
    },
    {
      question: "Do you handle both frontend and backend?",
      answer: "Yes! We're full-stack developers who handle everything from user interface to server setup, databases, and API integrations."
    },
    {
      question: "Can you integrate with existing systems?",
      answer: "Absolutely. We specialize in connecting web apps with CRMs, payment systems, APIs, and other business tools you already use."
    },
    {
      question: "What tech stack do you use?",
      answer: "We choose the best technology for your specific needs - React, Svelte, Node.js, Python, or others. We'll explain our recommendations in simple terms."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes! Web apps need regular updates and monitoring. We offer maintenance packages and are always here when you need support or new features."
    }
  ];

  onMount(() => {
    // SEO optimization
    updatePageMeta(
      'Web App Development Singapore | Light & Kaki Studio',
      'Custom web application development in Singapore. Full-stack solutions with modern frameworks, scalable architecture, and authentic kaki collaboration.'
    );
    injectStructuredData(serviceSchemas['web-app'], 'service-web-app');
  });
</script>

<svelte:head>
  <title>Web App Development Singapore | Light & Kaki Studio</title>
  <meta name="description" content="Custom web application development in Singapore. Full-stack solutions with modern frameworks, scalable architecture, and authentic kaki collaboration." />
  <meta name="keywords" content="web app development singapore, custom web applications, full stack development singapore, web application development" />
  <meta property="og:title" content="Web App Development Singapore | Light & Kaki Studio" />
  <meta property="og:description" content="Custom web application development in Singapore. Full-stack solutions with modern frameworks and authentic collaboration." />
  <meta property="og:type" content="website" />
  <link rel="canonical" href="https://www.lxk42.sg/web-app" />
</svelte:head>

<section class="section-padding painterly-bg relative overflow-hidden">
  <div class="container-custom">
    <div class="text-center mb-6 md:mb-8 animate-on-scroll relative">
      <h1 class="text-4xl md:text-6xl font-extrabold text-lxk-warm-gray mb-4">Web App Development</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">From idea to interactive product — we build friendly, scalable web apps that people love to use.</p>
      <!-- painterly hero accents -->
      <div class="texture-overlay"></div>
      <div class="paint-splash-1 hidden md:block" style="top:-20px; right:5%;"></div>
      <div class="paint-splash-2 hidden md:block" style="bottom:-10px; left:0;"></div>
      <div class="paint-splash-3 hidden md:block" style="top:40%; right:20%;"></div>
    </div>

    <!-- anchor mini-nav -->
    <nav class="mb-12 md:mb-16">
      <ul class="flex flex-wrap justify-center gap-2 md:gap-3">
        <li><a href="#webapp-overview" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Overview</a></li>
        <li><a href="#case-study" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Case Study</a></li>
        <li><a href="#tech-stack" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Tech Stack</a></li>
        <li><a href="#performance" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Performance</a></li>
        <li><a href="#projects" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Projects</a></li>
        <li><a href="#faq" class="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-lxk-sage/10 text-sm text-lxk-warm-gray hover:bg-lxk-cream/80 transition">FAQ</a></li>
      </ul>
    </nav>

    <div id="webapp-overview" class="grid md:grid-cols-3 gap-8">
      <div class="painterly-card p-8 animate-on-scroll">
        <div class="w-12 h-12 mb-4 rounded-full bg-lxk-sage text-white flex items-center justify-center text-xl shadow">💻</div>
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">Modern Stack</h3>
        <p class="text-gray-700">Svelte + TypeScript with performance‑first patterns and accessible UX.</p>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <div class="w-12 h-12 mb-4 rounded-full bg-lxk-peach text-white flex items-center justify-center text-xl shadow">🔗</div>
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">API & Data</h3>
        <p class="text-gray-700">Clean data flows and well‑structured APIs, with room to grow as your product evolves.</p>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <div class="w-12 h-12 mb-4 rounded-full bg-lxk-coral text-white flex items-center justify-center text-xl shadow">🛠️</div>
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">Quality & Handover</h3>
        <p class="text-gray-700">Linting, typechecks, and docs for maintainable apps your team can confidently extend.</p>
      </div>
    </div>

    <div class="mt-16 grid md:grid-cols-2 gap-8">
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-4">Our Approach</h3>
        <ul class="space-y-3 text-gray-700 list-disc pl-6">
          <li>Product discovery sessions over kopi to understand user needs ☕</li>
          <li>MVP development for rapid validation and feedback</li>
          <li>Iterative development with weekly demos and reviews</li>
          <li>Full-stack expertise with your development kakis</li>
        </ul>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-4">What You Get</h3>
        <ul class="space-y-3 text-gray-700 list-disc pl-6">
          <li>Scalable web application with modern architecture</li>
          <li>Complete documentation and developer handover</li>
          <li>Ongoing support and feature development</li>
          <li>Performance monitoring and optimization</li>
        </ul>
      </div>
    </div>

    <!-- Case Study Preview -->
    <div id="case-study" class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Case Study Spotlight</h3>
      <div class="painterly-card p-8">
        <div class="grid md:grid-cols-2 gap-8 items-start">
          <!-- Visual mock -->
          <div>
            <BrowserFrame title="taskmanger-pro.sg">
              <div class="rounded-xl border border-lxk-sage/10 p-4 bg-gradient-to-br from-lxk-cream/50 to-white">
                <!-- simple web app mock layout -->
                <div class="flex items-center justify-between mb-4">
                  <div class="h-3 w-24 bg-lxk-sage/40 rounded"></div>
                  <div class="flex gap-2">
                    <div class="w-6 h-6 bg-lxk-peach/40 rounded"></div>
                    <div class="w-6 h-6 bg-lxk-coral/40 rounded"></div>
                  </div>
                </div>
                <div class="grid grid-cols-3 gap-3 mb-4">
                  <div class="h-20 rounded bg-lxk-sage/20 p-2">
                    <div class="h-2 w-full bg-lxk-sage/40 rounded mb-2"></div>
                    <div class="h-2 w-3/4 bg-gray-200 rounded"></div>
                  </div>
                  <div class="h-20 rounded bg-lxk-peach/20 p-2">
                    <div class="h-2 w-full bg-lxk-peach/40 rounded mb-2"></div>
                    <div class="h-2 w-3/4 bg-gray-200 rounded"></div>
                  </div>
                  <div class="h-20 rounded bg-lxk-coral/20 p-2">
                    <div class="h-2 w-full bg-lxk-coral/40 rounded mb-2"></div>
                    <div class="h-2 w-3/4 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div class="h-2 w-2/3 bg-gray-200 rounded"></div>
              </div>
            </BrowserFrame>
          </div>

          <!-- Text + stats -->
          <div>
            <div class="inline-block bg-lxk-mint/20 text-lxk-sage px-3 py-1 rounded-full text-sm font-medium mb-4">
              Full-Stack Web Application
            </div>
            <h4 class="text-2xl font-bold text-lxk-warm-gray mb-3">
              From Manual Processes to 90% Automation
            </h4>
            <p class="text-gray-700 mb-6">
              TaskManager Pro needed a complete digital transformation. Their team was drowning in spreadsheets and manual workflows.
            </p>

            <div class="grid grid-cols-2 gap-4 mb-6">
              <StatCard value={90} suffix="%" label="Process Automation" color="peach" />
              <StatCard value={5} suffix="hrs" label="Daily Time Saved" color="coral" />
            </div>

            <p class="text-lxk-coral italic font-medium">
              "Our web app kakis built exactly what we needed. The team finally has time to focus on strategy instead of admin work."
            </p>
            <p class="text-gray-600 text-sm mt-2">— Alex Chen, Operations Director</p>

            <div class="mt-6 rounded-2xl p-5 bg-lxk-cream/60 border border-lxk-sage/10">
              <h5 class="font-semibold text-lxk-warm-gray mb-3">What We Built</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                <div class="flex items-center gap-2"><span class="w-2 h-2 bg-lxk-sage rounded-full"></span> Task management & automation</div>
                <div class="flex items-center gap-2"><span class="w-2 h-2 bg-lxk-peach rounded-full"></span> Real-time collaboration features</div>
                <div class="flex items-center gap-2"><span class="w-2 h-2 bg-lxk-coral rounded-full"></span> Advanced reporting dashboard</div>
                <div class="flex items-center gap-2"><span class="w-2 h-2 bg-lxk-mint rounded-full"></span> API integrations & notifications</div>
              </div>
            </div>

            <div class="mt-4">
              <a href="/portfolio" data-sveltekit-preload-data="hover" class="text-lxk-coral hover:text-lxk-peach transition-colors duration-200 font-medium">Read the Full Case Study →</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tech Stack Overview -->
    <div id="tech-stack" class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Our Technology Stack</h3>
      <div class="painterly-card p-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-lxk-sage/20 to-lxk-mint/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <div class="text-2xl">⚡</div>
            </div>
            <h4 class="font-semibold text-lxk-warm-gray mb-2">Frontend</h4>
            <p class="text-sm text-gray-600">Svelte, React, TypeScript, Tailwind CSS</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-lxk-peach/20 to-lxk-coral/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <div class="text-2xl">🔧</div>
            </div>
            <h4 class="font-semibold text-lxk-warm-gray mb-2">Backend</h4>
            <p class="text-sm text-gray-600">Node.js, Python, PostgreSQL, Redis</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-lxk-coral/20 to-lxk-sage/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <div class="text-2xl">☁️</div>
            </div>
            <h4 class="font-semibold text-lxk-warm-gray mb-2">Infrastructure</h4>
            <p class="text-sm text-gray-600">AWS, Docker, CI/CD, Monitoring</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-lxk-mint/20 to-lxk-peach/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <div class="text-2xl">🛡️</div>
            </div>
            <h4 class="font-semibold text-lxk-warm-gray mb-2">Security</h4>
            <p class="text-sm text-gray-600">OAuth, Encryption, HTTPS, Best Practices</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Performance Metrics -->
    <div id="performance" class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Average App Performance</h3>
      <div class="painterly-card p-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="rounded-xl border border-lxk-sage/10 p-4 text-center bg-white">
            <div class="text-3xl font-extrabold text-lxk-sage">99.9%</div>
            <div class="text-sm text-gray-600">Uptime</div>
          </div>
          <div class="rounded-xl border border-lxk-sage/10 p-4 text-center bg-white">
            <div class="text-3xl font-extrabold text-lxk-peach">&lt; 2s</div>
            <div class="text-sm text-gray-600">Load Time</div>
          </div>
          <div class="rounded-xl border border-lxk-sage/10 p-4 text-center bg-white">
            <div class="text-3xl font-extrabold text-lxk-coral">100%</div>
            <div class="text-sm text-gray-600">Mobile Ready</div>
          </div>
          <div class="rounded-xl border border-lxk-sage/10 p-4 text-center bg-white">
            <div class="text-3xl font-extrabold text-lxk-sage">A+</div>
            <div class="text-sm text-gray-600">Security Grade</div>
          </div>
        </div>
        <div class="text-xs text-gray-500 mt-3 text-center">Performance benchmarks across our Singapore web applications</div>
      </div>
    </div>

    <!-- Projects Rail -->
    {#if relevantProjects.length > 0}
    <div id="projects" class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-6 text-center">Recent Web App Projects</h3>
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
<CompactFAQ faqs={webAppFAQs} />

<!-- Testimonials Section -->
<TestimonialCarousel testimonials={getTestimonialsByService('web-app')} />

<!-- Enhanced CTA Section -->
<EnhancedCTA
  service="web-app"
  primaryTitle="Ready to Build Your Web App?"
  primaryDescription="Book a free product consultation to discuss your vision and technical requirements"
  primaryCTA="Book Free App Consultation →"
  secondaryTitle="Need Technical Planning?"
  secondaryDescription="Download our web app development guide with architecture and planning templates"
  leadMagnetTitle="Singapore Web App Development Guide"
  leadMagnetBenefits={[
    'Complete technical planning framework and architecture guide',
    'MVP vs full platform decision matrix with cost estimates',
    'Technology stack recommendations for Singapore businesses',
    'Development timeline templates and milestone checklists'
  ]}
/>