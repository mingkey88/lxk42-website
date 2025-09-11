<script>
  let selectedComplexity = 'mvp';
  let includesDesign = true;
  let includesIntegrations = false;
  let includesMobile = false;
  
  $: basePrice = selectedComplexity === 'mvp' ? 8000 : 
                selectedComplexity === 'full' ? 20000 : 50000;
  
  $: designCost = includesDesign ? 0 : 0; // Already included
  $: integrationCost = includesIntegrations ? 3000 : 0;
  $: mobileCost = includesMobile ? 8000 : 0;
  
  $: totalEstimate = basePrice + designCost + integrationCost + mobileCost;
  $: timelineWeeks = selectedComplexity === 'mvp' ? '4-8' :
                    selectedComplexity === 'full' ? '8-16' : '16-24';
</script>

<section class="section-padding painterly-bg">
  <div class="container-custom">
    <div class="text-center mb-12 animate-on-scroll">
      <h1 class="text-4xl md:text-6xl font-extrabold text-lxk-warm-gray mb-4">Web App Development</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">From idea to interactive product — we build friendly, scalable web apps that people love to use.</p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">Modern Stack</h3>
        <p class="text-gray-600">Svelte + TypeScript with performance‑first patterns and accessible UX.</p>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">API & Data</h3>
        <p class="text-gray-600">Clean data flows and well‑structured APIs, with room to grow as your product evolves.</p>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">Quality & Handover</h3>
        <p class="text-gray-600">Linting, typechecks, and docs for maintainable apps your team can confidently extend.</p>
      </div>
    </div>

    <div class="mt-16 grid md:grid-cols-2 gap-8">
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-4">Product Philosophy</h3>
        <ul class="space-y-3 text-gray-700 list-disc pl-6">
          <li>Small, lovable releases over big, risky launches</li>
          <li>Accessibility and performance from day one</li>
          <li>Telemetry and feedback loops to learn quickly</li>
          <li>Friendly docs so teams can maintain with confidence</li>
        </ul>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-4">Capabilities</h3>
        <ul class="space-y-3 text-gray-700 list-disc pl-6">
          <li>Auth, dashboards, and role‑based experiences</li>
          <li>Forms, validation, and state management</li>
          <li>Integrations with modern APIs and services</li>
          <li>Automated checks in CI for quality</li>
        </ul>
      </div>
    </div>

    <!-- Web App Pricing Packages -->
    <div class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Web App Investment & Packages</h3>
      
      <!-- Main Packages -->
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        
        <!-- MVP Launch -->
        <div class="painterly-card p-8 text-center relative">
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div class="bg-lxk-mint px-4 py-1 rounded-full text-lxk-warm-gray text-sm font-medium">
              Perfect for Startups
            </div>
          </div>
          <h4 class="text-2xl font-bold text-lxk-warm-gray mb-4 mt-4">MVP Launch</h4>
          <div class="text-4xl font-bold text-lxk-sage mb-6">$8,000</div>
          <div class="space-y-3 text-left mb-8">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
              <span class="text-gray-600 text-sm">Core features only (3-5 key functions)</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
              <span class="text-gray-600 text-sm">User authentication & basic profiles</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
              <span class="text-gray-600 text-sm">Simple admin dashboard</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
              <span class="text-gray-600 text-sm">Mobile-responsive design</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
              <span class="text-gray-600 text-sm">Basic API & database setup</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
              <span class="text-gray-600 text-sm">30 days post-launch support</span>
            </div>
          </div>
          <div class="text-xs text-gray-500 italic mb-4">Timeline: 4-8 weeks</div>
        </div>

        <!-- Full Platform -->
        <div class="painterly-card p-8 text-center relative border-2 border-lxk-peach shadow-xl">
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div class="bg-lxk-peach px-4 py-1 rounded-full text-white text-sm font-medium">
              Most Popular
            </div>
          </div>
          <h4 class="text-2xl font-bold text-lxk-warm-gray mb-4 mt-4">Full Platform</h4>
          <div class="text-4xl font-bold text-lxk-peach mb-6">$20,000</div>
          <div class="space-y-3 text-left mb-8">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span class="text-gray-600 text-sm">Complete feature set (8-12 functions)</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span class="text-gray-600 text-sm">Advanced user roles & permissions</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span class="text-gray-600 text-sm">Comprehensive admin panel</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span class="text-gray-600 text-sm">Payment processing integration</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span class="text-gray-600 text-sm">Email notifications & workflows</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span class="text-gray-600 text-sm">Analytics & reporting dashboard</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span class="text-gray-600 text-sm">90 days post-launch support</span>
            </div>
          </div>
          <div class="text-xs text-gray-500 italic mb-4">Timeline: 8-16 weeks</div>
        </div>

        <!-- Enterprise Solution -->
        <div class="painterly-card p-8 text-center relative">
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div class="bg-lxk-coral px-4 py-1 rounded-full text-white text-sm font-medium">
              Custom Built
            </div>
          </div>
          <h4 class="text-2xl font-bold text-lxk-warm-gray mb-4 mt-4">Enterprise Solution</h4>
          <div class="text-4xl font-bold text-lxk-coral mb-6">$50,000+</div>
          <div class="space-y-3 text-left mb-8">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span class="text-gray-600 text-sm">Unlimited features & complexity</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span class="text-gray-600 text-sm">Multi-tenant architecture</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span class="text-gray-600 text-sm">Advanced security & compliance</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span class="text-gray-600 text-sm">Custom integrations & APIs</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span class="text-gray-600 text-sm">Scalable infrastructure setup</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span class="text-gray-600 text-sm">6 months ongoing support</span>
            </div>
          </div>
          <div class="text-xs text-gray-500 italic mb-4">Timeline: Custom (16+ weeks)</div>
        </div>
      </div>

      <!-- Add-On Services -->
      <div class="painterly-card p-8 mb-8">
        <h4 class="text-xl font-semibold text-lxk-sage mb-6 text-center">Popular Add-Ons</h4>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Mobile App (iOS + Android)</span>
              <span class="font-semibold text-lxk-coral">+$8,000</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Advanced API integrations (per service)</span>
              <span class="font-semibold text-lxk-coral">+$1,500-3,000</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Real-time features (chat, notifications)</span>
              <span class="font-semibold text-lxk-coral">+$3,500</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Advanced analytics & reporting</span>
              <span class="font-semibold text-lxk-coral">+$2,500</span>
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Multi-language support</span>
              <span class="font-semibold text-lxk-coral">+$2,000</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Advanced security features</span>
              <span class="font-semibold text-lxk-coral">+$3,000</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Custom workflow automation</span>
              <span class="font-semibold text-lxk-coral">+$4,000</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Priority support & maintenance</span>
              <span class="font-semibold text-lxk-coral">$500-1,500/mo</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Payment & Terms -->
      <div class="bg-lxk-cream/50 rounded-2xl p-6 text-center">
        <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">Investment & Payment Terms</h4>
        <div class="grid md:grid-cols-3 gap-6 mb-4">
          <div>
            <div class="text-2xl font-bold text-lxk-sage mb-1">30%</div>
            <div class="text-sm text-gray-600">Project Start</div>
          </div>
          <div>
            <div class="text-2xl font-bold text-lxk-peach mb-1">40%</div>
            <div class="text-sm text-gray-600">Milestone Delivery</div>
          </div>
          <div>
            <div class="text-2xl font-bold text-lxk-coral mb-1">30%</div>
            <div class="text-sm text-gray-600">Launch Complete</div>
          </div>
        </div>
        <p class="text-gray-600 text-sm italic">
          All prices in SGD. Custom quotes for unique requirements. Flexible payment plans available for qualifying projects! ☕
        </p>
      </div>
    </div>

    <!-- Interactive Calculator (Simplified) -->
    <div class="mt-12 painterly-card p-6 animate-on-scroll">
      <h4 class="text-lg font-semibold text-lxk-sage mb-4 text-center">Quick Estimate Calculator</h4>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <div>
            <label class="block text-lxk-warm-gray font-medium mb-2">Project Type</label>
            <select bind:value={selectedComplexity} class="w-full p-3 rounded-lg border border-lxk-sage/30 focus:ring-2 focus:ring-lxk-sage focus:border-transparent">
              <option value="mvp">MVP Launch</option>
              <option value="full">Full Platform</option>
              <option value="enterprise">Enterprise Solution</option>
            </select>
          </div>
          <div class="space-y-2">
            <label class="flex items-center space-x-3">
              <input type="checkbox" bind:checked={includesIntegrations} class="text-lxk-sage focus:ring-lxk-sage rounded">
              <span class="text-gray-700 text-sm">API Integrations (+$3K)</span>
            </label>
            <label class="flex items-center space-x-3">
              <input type="checkbox" bind:checked={includesMobile} class="text-lxk-sage focus:ring-lxk-sage rounded">
              <span class="text-gray-700 text-sm">Mobile App (+$8K)</span>
            </label>
          </div>
        </div>
        <div class="bg-gradient-to-br from-lxk-sage/10 to-lxk-peach/10 rounded-2xl p-6 text-center">
          <div class="text-3xl font-bold text-lxk-coral mb-2">
            ${totalEstimate.toLocaleString()}
          </div>
          <div class="text-lxk-warm-gray font-medium mb-3">Estimated Investment</div>
          <div class="text-lg font-semibold text-lxk-sage mb-1">{timelineWeeks} weeks</div>
          <div class="text-gray-600 text-sm">Expected Timeline</div>
        </div>
      </div>
      <div class="mt-4 text-center">
        <p class="text-gray-600 text-sm">This is a rough estimate. Let's have a proper kopi session for accurate pricing! ☕</p>
      </div>
    </div>

    <!-- Development Process -->
    <div class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Our Development Process</h3>
      <div class="space-y-8">
        
        <!-- Phase 1: Discovery & Planning -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-lxk-sage rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">1</div>
              <h4 class="text-xl font-semibold text-lxk-warm-gray">Discovery & Planning</h4>
              <div class="ml-auto text-sm text-lxk-coral font-medium">Week 1-2</div>
            </div>
            <p class="text-gray-600 mb-4">
              Deep dive kopi sessions to understand your business, users, and goals. We map out user journeys, 
              define core features, and create a development roadmap that balances your vision with technical reality.
            </p>
            <div class="space-y-2">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
                <span class="text-gray-600 text-sm">Stakeholder interviews & requirements gathering</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
                <span class="text-gray-600 text-sm">User persona development & journey mapping</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
                <span class="text-gray-600 text-sm">Technical architecture planning & tool selection</span>
              </div>
            </div>
          </div>
          <div class="order-1 md:order-2">
            <div class="painterly-card p-6 bg-gradient-to-br from-lxk-sage/10 to-lxk-mint/10">
              <h5 class="font-semibold text-lxk-warm-gray mb-3">Key Deliverables</h5>
              <div class="space-y-2 text-sm text-gray-600">
                <div>📋 Project specification document</div>
                <div>🎨 User flow diagrams & wireframes</div>
                <div>🔧 Technical stack recommendations</div>
                <div>📅 Detailed project timeline</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Phase 2: Design & Prototyping -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div class="painterly-card p-6 bg-gradient-to-br from-lxk-peach/10 to-lxk-coral/10">
              <h5 class="font-semibold text-lxk-warm-gray mb-3">Design Assets</h5>
              <div class="space-y-2 text-sm text-gray-600">
                <div>🎨 UI/UX mockups & interactive prototypes</div>
                <div>📱 Mobile-responsive design system</div>
                <div>🌈 Custom color palette & branding</div>
                <div>✨ User interaction specifications</div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-lxk-peach rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">2</div>
              <h4 class="text-xl font-semibold text-lxk-warm-gray">Design & Prototyping</h4>
              <div class="ml-auto text-sm text-lxk-coral font-medium">Week 2-4</div>
            </div>
            <p class="text-gray-600 mb-4">
              We create beautiful, intuitive interfaces that reflect your brand personality. Every screen, 
              interaction, and user flow is carefully crafted to provide an exceptional experience.
            </p>
            <div class="space-y-2">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
                <span class="text-gray-600 text-sm">High-fidelity mockups & design system creation</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
                <span class="text-gray-600 text-sm">Interactive prototypes for user testing</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
                <span class="text-gray-600 text-sm">Design review sessions & collaborative feedback</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Phase 3: Development -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-lxk-coral rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">3</div>
              <h4 class="text-xl font-semibold text-lxk-warm-gray">Development & Integration</h4>
              <div class="ml-auto text-sm text-lxk-coral font-medium">Week 3-12</div>
            </div>
            <p class="text-gray-600 mb-4">
              Our kakis bring your app to life with clean, scalable code. We use modern frameworks like 
              Svelte, TypeScript, and robust backend solutions to ensure your app is fast, secure, and maintainable.
            </p>
            <div class="space-y-2">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
                <span class="text-gray-600 text-sm">Sprint-based development with weekly demos</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
                <span class="text-gray-600 text-sm">API development & third-party integrations</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
                <span class="text-gray-600 text-sm">Continuous testing & quality assurance</span>
              </div>
            </div>
          </div>
          <div class="order-1 md:order-2">
            <div class="painterly-card p-6 bg-gradient-to-br from-lxk-coral/10 to-lxk-sage/10">
              <h5 class="font-semibold text-lxk-warm-gray mb-3">Technical Excellence</h5>
              <div class="space-y-2 text-sm text-gray-600">
                <div>⚡ Performance-optimized frontend & backend</div>
                <div>🔒 Security best practices & data protection</div>
                <div>📊 Analytics integration & monitoring setup</div>
                <div>🧪 Comprehensive testing suite & CI/CD pipeline</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Phase 4: Testing & Launch -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div class="painterly-card p-6 bg-gradient-to-br from-lxk-mint/10 to-lxk-peach/10">
              <h5 class="font-semibold text-lxk-warm-gray mb-3">Launch Checklist</h5>
              <div class="space-y-2 text-sm text-gray-600">
                <div>🔍 User acceptance testing & bug fixes</div>
                <div>🚀 Production deployment & DNS setup</div>
                <div>📚 Training materials & documentation</div>
                <div>🤝 Handover session & ongoing support setup</div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-lxk-mint rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">4</div>
              <h4 class="text-xl font-semibold text-lxk-warm-gray">Testing & Launch</h4>
              <div class="ml-auto text-sm text-lxk-coral font-medium">Final 2 weeks</div>
            </div>
            <p class="text-gray-600 mb-4">
              Thorough testing ensures everything works perfectly before launch. We deploy your app, 
              provide comprehensive training, and stay close for the first month to ensure smooth sailing.
            </p>
            <div class="space-y-2">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-mint rounded-full"></div>
                <span class="text-gray-600 text-sm">Comprehensive testing across devices & browsers</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-mint rounded-full"></div>
                <span class="text-gray-600 text-sm">Production deployment & performance monitoring</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-mint rounded-full"></div>
                <span class="text-gray-600 text-sm">Team training & friendly documentation handover</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Communication & Tools -->
      <div class="mt-12 painterly-card p-8">
        <h4 class="text-xl font-semibold text-lxk-sage mb-6 text-center">How We Keep You in the Loop</h4>
        <div class="grid md:grid-cols-3 gap-6 text-center">
          <div class="space-y-3">
            <div class="text-3xl text-lxk-sage">💬</div>
            <h5 class="font-semibold text-lxk-warm-gray">Weekly Check-ins</h5>
            <p class="text-gray-600 text-sm">Regular video calls to review progress, gather feedback, and plan next steps</p>
          </div>
          <div class="space-y-3">
            <div class="text-3xl text-lxk-peach">🔄</div>
            <h5 class="font-semibold text-lxk-warm-gray">Live Demos</h5>
            <p class="text-gray-600 text-sm">Working prototypes you can test and provide feedback on throughout development</p>
          </div>
          <div class="space-y-3">
            <div class="text-3xl text-lxk-coral">📱</div>
            <h5 class="font-semibold text-lxk-warm-gray">Project Dashboard</h5>
            <p class="text-gray-600 text-sm">Real-time visibility into milestones, tasks, and timeline progress</p>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Frequently Asked Questions</h3>
      <div class="space-y-6 max-w-4xl mx-auto">
        <div class="painterly-card p-6">
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">How do you ensure our app will scale as we grow?</h4>
          <p class="text-gray-600">We build with growth in mind from day one - modular architecture, efficient databases, and clean code patterns. Plus, we provide documentation so your future team can extend the platform confidently.</p>
        </div>
        <div class="painterly-card p-6">
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">What happens if we need changes after launch?</h4>
          <p class="text-gray-600">We're your long-term kakis! All projects include 30 days of post-launch support. After that, we offer maintenance packages or project-based updates - whatever works best for your team.</p>
        </div>
        <div class="painterly-card p-6">
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">Can you work with our existing systems and APIs?</h4>
          <p class="text-gray-600">Absolutely! We specialize in seamless integrations. We'll audit your current tech stack during discovery and design the most efficient connection points - no rip-and-replace needed.</p>
        </div>
        <div class="painterly-card p-6">
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">How involved will our team need to be during development?</h4>
          <p class="text-gray-600">As much or as little as you prefer! We recommend weekly check-ins and milestone demos, but we're flexible. Some clients love being hands-on, others prefer to see polished updates - we adapt to your style.</p>
        </div>
      </div>
    </div>

    <div class="mt-12 text-center">
      <a href="#/contact" class="btn-primary">Discuss Your Web App</a>
    </div>
  </div>
</section>
