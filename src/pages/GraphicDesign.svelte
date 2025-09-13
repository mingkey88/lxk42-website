<script>
  import DesignPackageBuilder from '../components/tools/DesignPackageBuilder.svelte';
</script>

<section class="section-padding painterly-bg">
  <div class="container-custom">
    <div class="text-center mb-12 animate-on-scroll">
      <h1 class="text-4xl md:text-6xl font-extrabold text-lxk-warm-gray mb-4">Graphic Design</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">Illustrations and visuals with a gentle, handcrafted touch — made to be shared.</p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">Social & Campaigns</h3>
        <p class="text-gray-600">Post series, carousels, and campaign graphics that reflect your brand voice.</p>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">Illustration</h3>
        <p class="text-gray-600">Custom illustrations and iconography with a painterly style and warm palette.</p>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">Print & Collateral</h3>
        <p class="text-gray-600">Brochures, posters, and event materials with clean layouts and friendly typography.</p>
      </div>
    </div>

    <!-- Design Package Builder -->
    <div class="mt-16 animate-on-scroll">
      <DesignPackageBuilder />
    </div>

    <div class="mt-16 grid md:grid-cols-2 gap-8">
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-4">Our Design Philosophy</h3>
        <ul class="space-y-3 text-gray-700 list-disc pl-6">
          <li>Every design tells your story with warmth and authenticity</li>
          <li>Hand-crafted aesthetics with digital precision</li>
          <li>Collaborative feedback loops - your vision, our craft</li>
          <li>Designs that work beautifully across Singapore's diverse culture</li>
        </ul>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-4">What Our Kakis Get</h3>
        <ul class="space-y-3 text-gray-700 list-disc pl-6">
          <li>Original illustrations and custom iconography</li>
          <li>Print-ready files and web-optimized assets</li>
          <li>Brand-consistent templates for future use</li>
          <li>Friendly handover session and usage guidance 🎨</li>
        </ul>
      </div>
    </div>

    <!-- Pricing Structure -->
    <div class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Investment & Packages</h3>
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        
        <!-- Design Essentials -->
        <div class="painterly-card p-8 text-center relative">
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div class="bg-lxk-mint px-4 py-1 rounded-full text-lxk-warm-gray text-sm font-medium">
              Perfect for Startups
            </div>
          </div>
          <h4 class="text-2xl font-bold text-lxk-warm-gray mb-4 mt-4">Design Essentials</h4>
          <div class="text-4xl font-bold text-lxk-sage mb-6">$1,200</div>
          <div class="space-y-3 text-left mb-8">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
              <span class="text-gray-600 text-sm">5 custom graphic designs</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
              <span class="text-gray-600 text-sm">Social media post templates (5 designs)</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
              <span class="text-gray-600 text-sm">One round of revisions included</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
              <span class="text-gray-600 text-sm">Print & web-ready file formats</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
              <span class="text-gray-600 text-sm">7-day turnaround</span>
            </div>
          </div>
          <div class="text-xs text-gray-500 italic mb-4">Timeline: 1-2 weeks</div>
        </div>

        <!-- Creative Suite -->
        <div class="painterly-card p-8 text-center relative border-2 border-lxk-peach shadow-xl">
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div class="bg-lxk-peach px-4 py-1 rounded-full text-white text-sm font-medium">
              Most Popular
            </div>
          </div>
          <h4 class="text-2xl font-bold text-lxk-warm-gray mb-4 mt-4">Creative Suite</h4>
          <div class="text-4xl font-bold text-lxk-peach mb-6">$2,800</div>
          <div class="space-y-3 text-left mb-8">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span class="text-gray-600 text-sm">12 custom graphic designs</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span class="text-gray-600 text-sm">Complete social media template set</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span class="text-gray-600 text-sm">Custom illustrations (3 pieces)</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span class="text-gray-600 text-sm">Print collateral design (brochure/flyer)</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span class="text-gray-600 text-sm">Two rounds of revisions</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span class="text-gray-600 text-sm">Brand consistency guidelines</span>
            </div>
          </div>
          <div class="text-xs text-gray-500 italic mb-4">Timeline: 2-3 weeks</div>
        </div>

        <!-- Premium Creative -->
        <div class="painterly-card p-8 text-center relative">
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div class="bg-lxk-coral px-4 py-1 rounded-full text-white text-sm font-medium">
              Full Creative Support
            </div>
          </div>
          <h4 class="text-2xl font-bold text-lxk-warm-gray mb-4 mt-4">Premium Creative</h4>
          <div class="text-4xl font-bold text-lxk-coral mb-6">$5,500</div>
          <div class="space-y-3 text-left mb-8">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span class="text-gray-600 text-sm">25+ custom graphic designs</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span class="text-gray-600 text-sm">Complete brand illustration system</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span class="text-gray-600 text-sm">Multi-format campaign materials</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span class="text-gray-600 text-sm">Packaging design concepts</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span class="text-gray-600 text-sm">Presentation deck templates</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span class="text-gray-600 text-sm">Unlimited revisions & ongoing support</span>
            </div>
          </div>
          <div class="text-xs text-gray-500 italic mb-4">Timeline: 4-5 weeks</div>
        </div>
      </div>

      <!-- À La Carte Services -->
      <div class="painterly-card p-8">
        <h4 class="text-xl font-semibold text-lxk-sage mb-6 text-center">À La Carte Design Services</h4>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Single custom illustration</span>
              <span class="font-semibold text-lxk-coral">$300-800</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Social media post design</span>
              <span class="font-semibold text-lxk-coral">$80-150</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Brochure/flyer design</span>
              <span class="font-semibold text-lxk-coral">$400-800</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Poster design (A2/A1)</span>
              <span class="font-semibold text-lxk-coral">$500-900</span>
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Icon set design (5 icons)</span>
              <span class="font-semibold text-lxk-coral">$400-600</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Presentation template design</span>
              <span class="font-semibold text-lxk-coral">$600-1,200</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Packaging design concept</span>
              <span class="font-semibold text-lxk-coral">$800-2,500</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Rush delivery (50% faster)</span>
              <span class="font-semibold text-lxk-coral">+40% fee</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Payment Terms -->
      <div class="mt-8 bg-lxk-cream/50 rounded-2xl p-6 text-center">
        <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">Investment Terms</h4>
        <p class="text-gray-600 mb-4">
          <strong>50% deposit</strong> to start • <strong>50% on final approval</strong> and file delivery
        </p>
        <p class="text-gray-600 text-sm italic">
          All prices in SGD. Bundle discounts available for ongoing projects. Let's create something beautiful together! 🎨
        </p>
      </div>
    </div>

    <!-- Portfolio Showcase -->
    <div class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Recent Design Work</h3>
      <div class="grid md:grid-cols-3 gap-8">
        
        <!-- Social Media Campaign -->
        <div class="painterly-card p-6">
          <div class="bg-gradient-to-br from-lxk-sage/10 to-lxk-mint/20 rounded-2xl p-6 mb-4 text-center">
            <div class="text-6xl text-lxk-sage mb-2">📱</div>
            <h5 class="font-semibold text-lxk-warm-gray">Social Campaign</h5>
          </div>
          <div class="inline-block bg-lxk-sage/20 text-lxk-sage px-3 py-1 rounded-full text-sm font-medium mb-3">
            GreenSpaces SG
          </div>
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">"Plant Your Future" Series</h4>
          <p class="text-gray-600 mb-4">15-post Instagram campaign celebrating urban sustainability with warm, hand-drawn illustrations and consistent brand messaging.</p>
          <div class="space-y-2 text-sm text-gray-600">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
              <span>Custom plant illustrations</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
              <span>Instagram Stories & Feed templates</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
              <span>45% increase in engagement</span>
            </div>
          </div>
        </div>

        <!-- Event Materials -->
        <div class="painterly-card p-6">
          <div class="bg-gradient-to-br from-lxk-peach/10 to-lxk-coral/20 rounded-2xl p-6 mb-4 text-center">
            <div class="text-6xl text-lxk-peach mb-2">📋</div>
            <h5 class="font-semibold text-lxk-warm-gray">Event Materials</h5>
          </div>
          <div class="inline-block bg-lxk-peach/20 text-lxk-peach px-3 py-1 rounded-full text-sm font-medium mb-3">
            TechConnect Asia
          </div>
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">Conference Collateral Suite</h4>
          <p class="text-gray-600 mb-4">Complete visual identity for Singapore's largest startup conference - from banners to badge designs with cohesive branding.</p>
          <div class="space-y-2 text-sm text-gray-600">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span>Stage backdrops & signage</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span>Presentation templates</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span>500+ attendee satisfaction</span>
            </div>
          </div>
        </div>

        <!-- Brand Illustration -->
        <div class="painterly-card p-6">
          <div class="bg-gradient-to-br from-lxk-coral/10 to-lxk-mint/20 rounded-2xl p-6 mb-4 text-center">
            <div class="text-6xl text-lxk-coral mb-2">🎨</div>
            <h5 class="font-semibold text-lxk-warm-gray">Custom Illustrations</h5>
          </div>
          <div class="inline-block bg-lxk-coral/20 text-lxk-coral px-3 py-1 rounded-full text-sm font-medium mb-3">
            Hawker Heroes SG
          </div>
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">Singapore Food Heritage Series</h4>
          <p class="text-gray-600 mb-4">Painterly illustration series celebrating local hawker culture for packaging and marketing materials across multiple touchpoints.</p>
          <div class="space-y-2 text-sm text-gray-600">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span>8 custom food illustrations</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span>Packaging design system</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span>Award: SG Design Awards '23</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Design Process -->
    <div class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Our Design Process</h3>
      <div class="space-y-8">
        
        <!-- Discovery -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-lxk-sage rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">1</div>
              <h4 class="text-xl font-semibold text-lxk-warm-gray">Brief & Discovery</h4>
              <div class="ml-auto text-sm text-lxk-coral font-medium">Day 1-2</div>
            </div>
            <p class="text-gray-600 mb-4">
              We start with a friendly kopi session to understand your vision, brand personality, and project goals. Every great design begins with understanding your story.
            </p>
            <div class="space-y-2">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
                <span class="text-gray-600 text-sm">Creative brief & requirements gathering</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
                <span class="text-gray-600 text-sm">Brand guidelines & style exploration</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
                <span class="text-gray-600 text-sm">Reference & mood board creation</span>
              </div>
            </div>
          </div>
          <div class="order-1 md:order-2">
            <div class="painterly-card p-6 bg-gradient-to-br from-lxk-sage/10 to-lxk-mint/10">
              <h5 class="font-semibold text-lxk-warm-gray mb-3">Discovery Tools</h5>
              <div class="space-y-2 text-sm text-gray-600">
                <div>💭 Creative brief questionnaire</div>
                <div>🎨 Visual mood board collaboration</div>
                <div>📋 Brand tone & style alignment</div>
                <div>🎯 Success metrics & goals setting</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Concept Development -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div class="painterly-card p-6 bg-gradient-to-br from-lxk-peach/10 to-lxk-coral/10">
              <h5 class="font-semibold text-lxk-warm-gray mb-3">Creative Concepts</h5>
              <div class="space-y-2 text-sm text-gray-600">
                <div>✏️ Initial sketches & wireframes</div>
                <div>🌈 Color & composition studies</div>
                <div>🖼️ Multiple design directions</div>
                <div>📱 Format & application testing</div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-lxk-peach rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">2</div>
              <h4 class="text-xl font-semibold text-lxk-warm-gray">Concept Development</h4>
              <div class="ml-auto text-sm text-lxk-coral font-medium">Day 3-7</div>
            </div>
            <p class="text-gray-600 mb-4">
              Our kakis explore multiple creative directions, sketching ideas and developing concepts that bring your vision to life with our signature painterly style.
            </p>
            <div class="space-y-2">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
                <span class="text-gray-600 text-sm">Multiple concept sketches & directions</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
                <span class="text-gray-600 text-sm">Color palette & typography exploration</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
                <span class="text-gray-600 text-sm">Initial digital mock-ups</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Design & Refinement -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-lxk-coral rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">3</div>
              <h4 class="text-xl font-semibold text-lxk-warm-gray">Design & Refinement</h4>
              <div class="ml-auto text-sm text-lxk-coral font-medium">Day 7-12</div>
            </div>
            <p class="text-gray-600 mb-4">
              We create polished designs with careful attention to detail, incorporating your feedback to ensure every element perfectly represents your brand and message.
            </p>
            <div class="space-y-2">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
                <span class="text-gray-600 text-sm">High-fidelity design execution</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
                <span class="text-gray-600 text-sm">Collaborative feedback & revisions</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
                <span class="text-gray-600 text-sm">Format optimization & testing</span>
              </div>
            </div>
          </div>
          <div class="order-1 md:order-2">
            <div class="painterly-card p-6 bg-gradient-to-br from-lxk-coral/10 to-lxk-sage/10">
              <h5 class="font-semibold text-lxk-warm-gray mb-3">Design Execution</h5>
              <div class="space-y-2 text-sm text-gray-600">
                <div>🎨 Detailed design implementation</div>
                <div>🔄 Iterative feedback cycles</div>
                <div>📐 Precise formatting & sizing</div>
                <div>✨ Final polish & quality checks</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Final Delivery -->
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div class="painterly-card p-6 bg-gradient-to-br from-lxk-mint/10 to-lxk-peach/10">
              <h5 class="font-semibold text-lxk-warm-gray mb-3">Delivery Package</h5>
              <div class="space-y-2 text-sm text-gray-600">
                <div>📁 Organized file delivery system</div>
                <div>🖼️ Multiple format exports</div>
                <div>📖 Usage guidelines document</div>
                <div>🤝 Friendly handover session</div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-lxk-mint rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">4</div>
              <h4 class="text-xl font-semibold text-lxk-warm-gray">Final Delivery</h4>
              <div class="ml-auto text-sm text-lxk-coral font-medium">Day 13-14</div>
            </div>
            <p class="text-gray-600 mb-4">
              Your designs are ready! We organize files perfectly and provide clear usage guidelines so your team can implement the designs confidently across all channels.
            </p>
            <div class="space-y-2">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-mint rounded-full"></div>
                <span class="text-gray-600 text-sm">Complete file package delivery</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-mint rounded-full"></div>
                <span class="text-gray-600 text-sm">Usage guidelines & specifications</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-lxk-mint rounded-full"></div>
                <span class="text-gray-600 text-sm">Follow-up support & minor adjustments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Common Questions About Graphic Design</h3>
      <div class="space-y-6 max-w-4xl mx-auto">
        <div class="painterly-card p-6">
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">What file formats will I receive for my designs?</h4>
          <p class="text-gray-600">You'll receive all designs in multiple formats: high-resolution PNG and JPG for digital use, print-ready PDF files, and original vector files (AI/SVG) when applicable. We make sure you have everything needed for any application.</p>
        </div>
        <div class="painterly-card p-6">
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">How many revision rounds are included in each package?</h4>
          <p class="text-gray-600">Our packages include 1-2 revision rounds as specified. We find this is usually sufficient when we start with a clear brief. Additional revisions can be added if needed - we want you to be completely happy with the final designs.</p>
        </div>
        <div class="painterly-card p-6">
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">Can you match our existing brand guidelines?</h4>
          <p class="text-gray-600">Absolutely! We're skilled at working within existing brand parameters while adding our creative touch. Send us your brand guidelines and we'll ensure all designs are perfectly on-brand while maintaining our signature warmth and quality.</p>
        </div>
        <div class="painterly-card p-6">
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">Do you handle printing coordination for design projects?</h4>
          <p class="text-gray-600">While we don't handle printing directly, we work with trusted local printing partners and can provide recommendations. We'll ensure all files are print-ready with proper specifications and can coordinate with your chosen printer if needed.</p>
        </div>
        <div class="painterly-card p-6">
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">What makes your design style uniquely Singapore?</h4>
          <p class="text-gray-600">Our designs reflect Singapore's multicultural warmth and vibrancy. We incorporate local cultural elements sensitively, use colors and imagery that resonate with Singapore audiences, and ensure designs work across our diverse market while maintaining global appeal.</p>
        </div>
        <div class="painterly-card p-6">
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">Can you create designs for both digital and print applications?</h4>
          <p class="text-gray-600">Yes! We're experienced in creating designs that work beautifully across all mediums. We understand the technical requirements for both digital platforms and print production, ensuring your designs look perfect everywhere they're used.</p>
        </div>
      </div>
    </div>

    <div class="mt-16 text-center">
      <p class="text-lg text-lxk-coral mb-6 italic">
        "Great design isn't just pretty - it connects hearts and minds"
      </p>
      <a href="#/contact" class="btn-primary">Design With Our Kakis</a>
    </div>
  </div>
</section>

