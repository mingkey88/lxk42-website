<script>
  import EnhancedCTA from '../components/ui/EnhancedCTA.svelte';
  import MarketingROICalculator from '../components/tools/MarketingROICalculator.svelte';
</script>

<section class="section-padding painterly-bg">
  <div class="container-custom">
    <div class="text-center mb-12 animate-on-scroll">
      <h1 class="text-4xl md:text-6xl font-extrabold text-lxk-warm-gray mb-4">Digital Marketing</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">Thoughtful campaigns that feel human — building relationships, not just impressions.</p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">Social & Content</h3>
        <p class="text-gray-600">Calendar planning, content production, and community engagement with a friendly local voice.</p>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">SEO & Web Fundamentals</h3>
        <p class="text-gray-600">Clean structure, fast performance, and on‑page best practices that help people find you.</p>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">Ads & Analytics</h3>
        <p class="text-gray-600">Targeted ad sets, conversion tracking, and honest reporting — we learn and iterate together.</p>
      </div>
    </div>

    <div class="mt-16 grid md:grid-cols-2 gap-8">
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-4">Approach</h3>
        <ul class="space-y-3 text-gray-700 list-disc pl-6">
          <li>Start with your story and audience, not just channels</li>
          <li>Small experiments → learnings → scale the winners</li>
          <li>Consistent brand voice with local authenticity</li>
          <li>Transparent metrics with friendly explanations</li>
        </ul>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-4">Capabilities</h3>
        <ul class="space-y-3 text-gray-700 list-disc pl-6">
          <li>SEO, content strategy, and on‑page optimization</li>
          <li>Google, Meta, LinkedIn ads and remarketing</li>
          <li>Reporting dashboards and meaningful KPIs</li>
          <li>Content and design support from our kakis</li>
        </ul>
      </div>
    </div>

    <!-- Success Metrics Preview -->
    <div class="mt-16 painterly-card p-8 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-6 text-center">Typical Results with Our Kakis</h3>
      <div class="grid md:grid-cols-3 gap-6 text-center">
        <div class="space-y-3">
          <div class="text-4xl font-bold text-lxk-peach">150%</div>
          <h4 class="font-semibold text-lxk-warm-gray">Website Traffic Growth</h4>
          <p class="text-gray-600 text-sm">Average increase in first 6 months</p>
        </div>
        <div class="space-y-3">
          <div class="text-4xl font-bold text-lxk-coral">85%</div>
          <h4 class="font-semibold text-lxk-warm-gray">Lead Quality Improvement</h4>
          <p class="text-gray-600 text-sm">Better targeting = better leads</p>
        </div>
        <div class="space-y-3">
          <div class="text-4xl font-bold text-lxk-sage">3x</div>
          <h4 class="font-semibold text-lxk-warm-gray">Social Engagement</h4>
          <p class="text-gray-600 text-sm">Authentic content performs better</p>
        </div>
      </div>
      <p class="text-center text-gray-500 text-sm mt-6 italic">
        *Results vary by industry and campaign goals. We'll set realistic expectations together.
      </p>
    </div>

    <!-- ROI Calculator -->
    <div class="mt-16 animate-on-scroll">
      <MarketingROICalculator />
    </div>

    <!-- Pricing Structure -->
    <div class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Investment & Packages</h3>
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        
        <!-- Starter Package -->
        <div class="painterly-card p-8 text-center relative">
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div class="bg-lxk-mint px-4 py-1 rounded-full text-lxk-warm-gray text-sm font-medium">
              Perfect for Small Business
            </div>
          </div>
          <h4 class="text-2xl font-bold text-lxk-warm-gray mb-4 mt-4">Marketing Essentials</h4>
          <div class="text-4xl font-bold text-lxk-sage mb-6">$2,500<span class="text-lg font-normal text-gray-500">/month</span></div>
          <div class="space-y-3 text-left mb-8">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
              <span class="text-gray-600 text-sm">SEO foundation & local optimization</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
              <span class="text-gray-600 text-sm">Social media management (2 platforms)</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
              <span class="text-gray-600 text-sm">Content creation (8 posts/month)</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
              <span class="text-gray-600 text-sm">Basic Google Ads management</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
              <span class="text-gray-600 text-sm">Monthly performance reports</span>
            </div>
          </div>
          <div class="text-xs text-gray-500 italic mb-4">3-month minimum commitment</div>
        </div>

        <!-- Growth Package -->
        <div class="painterly-card p-8 text-center relative border-2 border-lxk-peach shadow-xl">
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div class="bg-lxk-peach px-4 py-1 rounded-full text-white text-sm font-medium">
              Most Popular
            </div>
          </div>
          <h4 class="text-2xl font-bold text-lxk-warm-gray mb-4 mt-4">Growth Accelerator</h4>
          <div class="text-4xl font-bold text-lxk-peach mb-6">$5,500<span class="text-lg font-normal text-gray-500">/month</span></div>
          <div class="space-y-3 text-left mb-8">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span class="text-gray-600 text-sm">Everything in Essentials package</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span class="text-gray-600 text-sm">Multi-platform advertising (Google + Meta)</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span class="text-gray-600 text-sm">16 custom content pieces/month</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span class="text-gray-600 text-sm">Email marketing campaigns</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span class="text-gray-600 text-sm">Conversion rate optimization</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span class="text-gray-600 text-sm">Bi-weekly strategy calls</span>
            </div>
          </div>
          <div class="text-xs text-gray-500 italic mb-4">6-month minimum commitment</div>
        </div>

        <!-- Enterprise Package -->
        <div class="painterly-card p-8 text-center relative">
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div class="bg-lxk-coral px-4 py-1 rounded-full text-white text-sm font-medium">
              Full-Service Marketing
            </div>
          </div>
          <h4 class="text-2xl font-bold text-lxk-warm-gray mb-4 mt-4">Enterprise Solution</h4>
          <div class="text-4xl font-bold text-lxk-coral mb-6">Custom</div>
          <div class="space-y-3 text-left mb-8">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span class="text-gray-600 text-sm">Dedicated marketing manager</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span class="text-gray-600 text-sm">Omnichannel campaign management</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span class="text-gray-600 text-sm">Advanced marketing automation</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span class="text-gray-600 text-sm">Custom reporting & analytics</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span class="text-gray-600 text-sm">Priority support & monthly strategy</span>
            </div>
          </div>
          <div class="text-xs text-gray-500 italic mb-4">12-month partnership commitment</div>
        </div>
      </div>

      <!-- Add-On Services -->
      <div class="painterly-card p-8">
        <h4 class="text-xl font-semibold text-lxk-sage mb-6 text-center">Additional Services</h4>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Brand photography session</span>
              <span class="font-semibold text-lxk-coral">$800-1,500</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Video content production</span>
              <span class="font-semibold text-lxk-coral">$1,200-3,000</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Influencer collaboration management</span>
              <span class="font-semibold text-lxk-coral">$500-2,000</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Event marketing support</span>
              <span class="font-semibold text-lxk-coral">$800-2,500</span>
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Marketing website audit</span>
              <span class="font-semibold text-lxk-coral">$400-800</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Competitor analysis report</span>
              <span class="font-semibold text-lxk-coral">$300-600</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">One-time campaign setup</span>
              <span class="font-semibold text-lxk-coral">$600-1,200</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Marketing team training</span>
              <span class="font-semibold text-lxk-coral">$800-1,500</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Payment Terms -->
      <div class="mt-8 bg-lxk-cream/50 rounded-2xl p-6 text-center">
        <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">Investment Terms</h4>
        <p class="text-gray-600 mb-4">
          Monthly retainer paid in advance • Ad spend budget managed separately • No setup fees for ongoing packages
        </p>
        <p class="text-gray-600 text-sm italic">
          All prices in SGD. Custom packages available for unique needs. Let's kopi and discuss what works best for you! ☕
        </p>
      </div>
    </div>

    <!-- Case Study -->
    <div class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Success Story Spotlight</h3>
      <div class="painterly-card p-8">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div class="inline-block bg-lxk-peach/20 text-lxk-peach px-3 py-1 rounded-full text-sm font-medium mb-4">
              Local Business Growth
            </div>
            <h4 class="text-2xl font-bold text-lxk-warm-gray mb-4">
              From 200 to 2,000+ Monthly Visitors in 8 Months
            </h4>
            <p class="text-gray-600 mb-6">
              EcoHome SG was struggling to reach their target audience online. Their beautiful sustainable furniture deserved better visibility in Singapore's competitive market.
            </p>
            <div class="grid grid-cols-2 gap-6 mb-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-lxk-coral mb-1">900%</div>
                <div class="text-sm text-gray-600">Website Traffic Growth</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-lxk-peach mb-1">45%</div>
                <div class="text-sm text-gray-600">Increase in Showroom Visits</div>
              </div>
            </div>
            <p class="text-lxk-coral italic font-medium">
              "Light & Kaki understood our local market perfectly. Their campaigns feel authentic and have brought us quality customers who truly appreciate our sustainable mission."
            </p>
            <p class="text-gray-600 text-sm mt-2">— David Tan, Co-founder</p>
          </div>
          <div class="bg-lxk-cream/50 rounded-2xl p-6">
            <h5 class="font-semibold text-lxk-warm-gray mb-4">Campaign Strategy</h5>
            <div class="space-y-3 text-sm text-gray-600">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-lxk-sage rounded-full mt-2 flex-shrink-0"></div>
                <div>Local SEO optimization targeting Singapore furniture searches</div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-lxk-peach rounded-full mt-2 flex-shrink-0"></div>
                <div>Authentic social content showcasing craftsmanship stories</div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-lxk-coral rounded-full mt-2 flex-shrink-0"></div>
                <div>Targeted Facebook & Google Ads with sustainability messaging</div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-lxk-mint rounded-full mt-2 flex-shrink-0"></div>
                <div>Email nurture sequences for showroom visit conversions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Marketing Process -->
    <div class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">How We Grow Your Business Together</h3>
      <div class="space-y-8">
        
        <!-- Month 1-2: Foundation -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-lxk-sage rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">1-2</div>
              <h4 class="text-xl font-semibold text-lxk-warm-gray">Foundation & Strategy</h4>
              <div class="ml-auto text-sm text-lxk-coral font-medium">Month 1-2</div>
            </div>
            <p class="text-gray-600 mb-4">
              We start by understanding your audience, competitors, and market positioning. Every campaign begins with a solid foundation - no spray and pray here!
            </p>
            <div class="space-y-2">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
                <span class="text-gray-600 text-sm">Audience research & buyer persona development</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
                <span class="text-gray-600 text-sm">Competitor analysis & market positioning</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
                <span class="text-gray-600 text-sm">Content calendar & campaign roadmap</span>
              </div>
            </div>
          </div>
          <div class="order-1 md:order-2">
            <div class="painterly-card p-6 bg-gradient-to-br from-lxk-sage/10 to-lxk-mint/10">
              <h5 class="font-semibold text-lxk-warm-gray mb-3">Key Setup Tasks</h5>
              <div class="space-y-2 text-sm text-gray-600">
                <div>🎯 Audience personas & market research</div>
                <div>📊 Analytics & tracking implementation</div>
                <div>📝 Content strategy & editorial calendar</div>
                <div>🔧 Campaign infrastructure setup</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Month 3-4: Launch & Optimize -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div class="painterly-card p-6 bg-gradient-to-br from-lxk-peach/10 to-lxk-coral/10">
              <h5 class="font-semibold text-lxk-warm-gray mb-3">Active Campaigns</h5>
              <div class="space-y-2 text-sm text-gray-600">
                <div>🚀 Multi-platform campaign launches</div>
                <div>📱 Social media content & community building</div>
                <div>📧 Email nurture sequences & automation</div>
                <div>💰 Paid advertising with A/B testing</div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-lxk-peach rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">3-4</div>
              <h4 class="text-xl font-semibold text-lxk-warm-gray">Launch & Learn</h4>
              <div class="ml-auto text-sm text-lxk-coral font-medium">Month 3-4</div>
            </div>
            <p class="text-gray-600 mb-4">
              Campaigns go live with close monitoring and rapid iteration. We test, learn, and optimize based on real data - not assumptions.
            </p>
            <div class="space-y-2">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
                <span class="text-gray-600 text-sm">Campaign deployment across chosen channels</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
                <span class="text-gray-600 text-sm">A/B testing of creative, copy, and targeting</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
                <span class="text-gray-600 text-sm">Weekly performance reviews & optimizations</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Month 5+: Scale & Grow -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-lxk-coral rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">5+</div>
              <h4 class="text-xl font-semibold text-lxk-warm-gray">Scale & Expand</h4>
              <div class="ml-auto text-sm text-lxk-coral font-medium">Month 5+</div>
            </div>
            <p class="text-gray-600 mb-4">
              With proven results, we scale successful campaigns and explore new opportunities. Growth becomes sustainable and predictable.
            </p>
            <div class="space-y-2">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
                <span class="text-gray-600 text-sm">Budget scaling on highest-performing campaigns</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
                <span class="text-gray-600 text-sm">New channel exploration & testing</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
                <span class="text-gray-600 text-sm">Long-term strategic planning & growth</span>
              </div>
            </div>
          </div>
          <div class="order-1 md:order-2">
            <div class="painterly-card p-6 bg-gradient-to-br from-lxk-coral/10 to-lxk-sage/10">
              <h5 class="font-semibold text-lxk-warm-gray mb-3">Growth Focus</h5>
              <div class="space-y-2 text-sm text-gray-600">
                <div>📈 Performance scaling & budget optimization</div>
                <div>🌟 New platform & audience expansion</div>
                <div>🔄 Advanced automation & remarketing</div>
                <div>📊 Sophisticated attribution & reporting</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Common Questions About Digital Marketing</h3>
      <div class="space-y-6 max-w-4xl mx-auto">
        <div class="painterly-card p-6">
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">How long before we see results from our marketing campaigns?</h4>
          <p class="text-gray-600">Typically, you'll see initial results within 4-6 weeks, with significant improvements after 3 months. SEO and organic growth take longer (6-12 months), while paid ads can show results within days. We'll set realistic expectations based on your specific goals and market.</p>
        </div>
        <div class="painterly-card p-6">
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">Do you work with businesses outside Singapore?</h4>
          <p class="text-gray-600">While we're based in Singapore and understand the local market deeply, we work with businesses targeting Singapore audiences regardless of their physical location. Our local insights are especially valuable for overseas brands entering the Singapore market.</p>
        </div>
        <div class="painterly-card p-6">
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">What's included in the monthly retainer fee?</h4>
          <p class="text-gray-600">The retainer covers strategy, campaign management, content creation, performance optimization, and reporting. Ad spend budget is separate and managed transparently - you always know where every dollar goes.</p>
        </div>
        <div class="painterly-card p-6">
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">Can we work together if we have an in-house marketing team?</h4>
          <p class="text-gray-600">Absolutely! We love collaborating with in-house teams. We can fill skill gaps, provide strategic guidance, handle specific channels, or train your team on best practices. Think of us as your external marketing kakis.</p>
        </div>
        <div class="painterly-card p-6">
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">How do you measure and report on campaign performance?</h4>
          <p class="text-gray-600">We focus on metrics that matter to your business - not just vanity metrics. Monthly reports include traffic, leads, conversions, and ROI analysis with clear explanations. Plus, you get access to real-time dashboards to track progress anytime.</p>
        </div>
        <div class="painterly-card p-6">
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">What makes your approach different from other marketing agencies?</h4>
          <p class="text-gray-600">We prioritize authenticity over hype, relationships over transactions. Our Singapore roots mean we understand local culture and consumer behavior deeply. We're transparent about what works, what doesn't, and why - no marketing jargon or false promises.</p>
        </div>
      </div>
    </div>

  </div>
</section>

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

