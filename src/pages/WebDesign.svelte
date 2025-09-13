<script>
  import { projects } from '../data/portfolio.js';
  import EnhancedCTA from '../components/ui/EnhancedCTA.svelte';
  import WebDesignCalculator from '../components/tools/WebDesignCalculator.svelte';

  // Filter projects relevant to web design
  const relevantProjects = projects.filter(project =>
    project.tags.includes('web design') || project.tags.includes('ecommerce')
  );
</script>

<section class="section-padding painterly-bg">
  <div class="container-custom">
    <div class="text-center mb-12 animate-on-scroll">
      <h1 class="text-4xl md:text-6xl font-extrabold text-lxk-warm-gray mb-4">Web Design & Development</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">Thoughtful, friendly, and effective websites crafted with care — built for your story and your audience.</p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">Brand‑aligned UI</h3>
        <p class="text-gray-600">Warm, painterly interfaces that feel authentic and approachable — using our signature color palette and typography.</p>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">Performance & SEO</h3>
        <p class="text-gray-600">Fast loads, accessible structure, and clean semantics to help both people and search engines understand your site.</p>
      </div>
      <div class="painterly-card p-8 animate-on-scroll">
        <h3 class="text-2xl font-semibold text-lxk-sage mb-3">CMS & Hand‑off</h3>
        <p class="text-gray-600">Optional CMS integration and friendly documentation so your team can easily update content.</p>
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

    <!-- Interactive Calculator -->
    <div class="mt-16 animate-on-scroll">
      <WebDesignCalculator />
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
          <h4 class="text-2xl font-bold text-lxk-warm-gray mb-4 mt-4">Essential Website</h4>
          <div class="text-4xl font-bold text-lxk-sage mb-6">$3,500</div>
          <div class="space-y-3 text-left mb-8">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
              <span class="text-gray-600 text-sm">Up to 5 pages (Home, About, Services, Contact, etc.)</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
              <span class="text-gray-600 text-sm">Mobile-responsive design</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
              <span class="text-gray-600 text-sm">Basic SEO setup</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
              <span class="text-gray-600 text-sm">Contact form integration</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
              <span class="text-gray-600 text-sm">30 days post-launch support</span>
            </div>
          </div>
          <div class="text-xs text-gray-500 italic mb-4">Timeline: 3-4 weeks</div>
        </div>

        <!-- Professional Package -->
        <div class="painterly-card p-8 text-center relative border-2 border-lxk-peach shadow-xl">
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div class="bg-lxk-peach px-4 py-1 rounded-full text-white text-sm font-medium">
              Most Popular
            </div>
          </div>
          <h4 class="text-2xl font-bold text-lxk-warm-gray mb-4 mt-4">Professional Website</h4>
          <div class="text-4xl font-bold text-lxk-peach mb-6">$6,500</div>
          <div class="space-y-3 text-left mb-8">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span class="text-gray-600 text-sm">Up to 10 pages + blog/news section</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span class="text-gray-600 text-sm">Custom illustrations & graphics</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span class="text-gray-600 text-sm">Content Management System (CMS)</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span class="text-gray-600 text-sm">Advanced SEO optimization</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span class="text-gray-600 text-sm">Analytics & performance tracking</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
              <span class="text-gray-600 text-sm">Social media integration</span>
            </div>
          </div>
          <div class="text-xs text-gray-500 italic mb-4">Timeline: 5-6 weeks</div>
        </div>

        <!-- Premium Package -->
        <div class="painterly-card p-8 text-center relative">
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div class="bg-lxk-coral px-4 py-1 rounded-full text-white text-sm font-medium">
              Full-Service Experience
            </div>
          </div>
          <h4 class="text-2xl font-bold text-lxk-warm-gray mb-4 mt-4">Premium Website</h4>
          <div class="text-4xl font-bold text-lxk-coral mb-6">$12,000</div>
          <div class="space-y-3 text-left mb-8">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span class="text-gray-600 text-sm">Unlimited pages + complex functionality</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span class="text-gray-600 text-sm">E-commerce capability (up to 50 products)</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span class="text-gray-600 text-sm">Custom animations & interactions</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span class="text-gray-600 text-sm">Professional copywriting</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span class="text-gray-600 text-sm">Brand photography coordination</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
              <span class="text-gray-600 text-sm">3 months post-launch support</span>
            </div>
          </div>
          <div class="text-xs text-gray-500 italic mb-4">Timeline: 8-10 weeks</div>
        </div>
      </div>

      <!-- Additional Services -->
      <div class="painterly-card p-8">
        <h4 class="text-xl font-semibold text-lxk-sage mb-6 text-center">Add-On Services</h4>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Additional pages (beyond package limit)</span>
              <span class="font-semibold text-lxk-coral">$200-400 each</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">E-commerce setup (basic online store)</span>
              <span class="font-semibold text-lxk-coral">+$2,500</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Multi-language support</span>
              <span class="font-semibold text-lxk-coral">+$1,500</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Advanced booking/appointment system</span>
              <span class="font-semibold text-lxk-coral">+$2,000</span>
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Professional copywriting (per page)</span>
              <span class="font-semibold text-lxk-coral">$150-300</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Custom illustration/graphics</span>
              <span class="font-semibold text-lxk-coral">$300-800</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Rush delivery (50% faster timeline)</span>
              <span class="font-semibold text-lxk-coral">+30% fee</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-lxk-sage/20">
              <span class="text-gray-700">Monthly maintenance package</span>
              <span class="font-semibold text-lxk-coral">$200-500</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Payment Terms -->
      <div class="mt-8 bg-lxk-cream/50 rounded-2xl p-6 text-center">
        <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">Payment Terms</h4>
        <p class="text-gray-600 mb-4">
          <strong>50% deposit</strong> to start the project • <strong>50% on completion</strong> before launch
        </p>
        <p class="text-gray-600 text-sm italic">
          All prices in SGD. Custom quotes available for unique requirements. Let's chat about payment plans if needed! ☕
        </p>
      </div>
    </div>

    <!-- Case Study Preview -->
    <div class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Case Study Spotlight</h3>
      <div class="painterly-card p-8">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div class="inline-block bg-lxk-mint/20 text-lxk-sage px-3 py-1 rounded-full text-sm font-medium mb-4">
              E-commerce Transformation
            </div>
            <h4 class="text-2xl font-bold text-lxk-warm-gray mb-4">
              From 30% Bounce Rate to 15% in 3 Months
            </h4>
            <p class="text-gray-600 mb-6">
              GreenSpace SG needed a complete website overhaul. Their old site was driving away potential customers with slow loading times and confusing navigation.
            </p>
            <div class="grid grid-cols-2 gap-6 mb-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-lxk-coral mb-1">50%</div>
                <div class="text-sm text-gray-600">Faster Load Time</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-lxk-peach mb-1">180%</div>
                <div class="text-sm text-gray-600">More Conversions</div>
              </div>
            </div>
            <p class="text-lxk-coral italic font-medium">
              "Working with Light & Kaki felt like having creative friends who truly cared about our success."
            </p>
            <p class="text-gray-600 text-sm mt-2">— Sarah Chen, Founder</p>
          </div>
          <div class="bg-lxk-cream/50 rounded-2xl p-6">
            <h5 class="font-semibold text-lxk-warm-gray mb-4">What We Did</h5>
            <div class="space-y-3 text-sm text-gray-600">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-lxk-sage rounded-full mt-2 flex-shrink-0"></div>
                <div>User research & competitive analysis</div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-lxk-peach rounded-full mt-2 flex-shrink-0"></div>
                <div>Complete UX/UI redesign with warm, accessible aesthetic</div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-lxk-coral rounded-full mt-2 flex-shrink-0"></div>
                <div>Performance optimization & mobile-first development</div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-lxk-mint rounded-full mt-2 flex-shrink-0"></div>
                <div>SEO foundation & analytics setup</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-6">
        <a href="#/portfolio" class="text-lxk-coral hover:text-lxk-peach transition-colors duration-200 font-medium">
          Read the Full Case Study →
        </a>
      </div>
    </div>

    <!-- Portfolio Preview -->
    {#if relevantProjects.length > 0}
    <div class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">More Recent Projects</h3>
      <div class="grid md:grid-cols-2 gap-6">
        {#each relevantProjects.slice(0, 2) as project (project.id)}
          <div class="painterly-card p-6 hover:shadow-xl transition-shadow duration-300">
            <h4 class="text-xl font-semibold text-lxk-warm-gray mb-3">{project.title}</h4>
            <p class="text-gray-600 mb-4">{project.summary}</p>
            <div class="flex flex-wrap gap-2">
              {#each project.tags as tag (tag)}
                <span class="px-3 py-1 bg-lxk-mint/20 text-lxk-sage text-sm rounded-full">{tag}</span>
              {/each}
            </div>
          </div>
        {/each}
      </div>
      <div class="text-center mt-6">
        <a href="#/portfolio" class="text-lxk-coral hover:text-lxk-peach transition-colors duration-200 font-medium">
          View All Projects →
        </a>
      </div>
    </div>
    {/if}

    <!-- FAQ Section -->
    <div class="mt-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-sage mb-8 text-center">Common Questions About Web Design</h3>
      <div class="space-y-6 max-w-4xl mx-auto">
        <div class="painterly-card p-6">
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">How long does a typical website project take?</h4>
          <p class="text-gray-600">Most websites take 4-8 weeks from discovery to launch. This includes research, design, development, content integration, and testing. We'll give you a more precise timeline after our initial kopi session based on your specific needs.</p>
        </div>
        <div class="painterly-card p-6">
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">Do you provide content writing and photography?</h4>
          <p class="text-gray-600">We can definitely help! We offer content strategy and copywriting services, and work with talented local photographers. If you prefer to handle content yourself, we provide clear guidelines and support throughout the process.</p>
        </div>
        <div class="painterly-card p-6">
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">Will my website work on mobile phones and tablets?</h4>
          <p class="text-gray-600">Absolutely! All our websites are mobile-first and responsive. We test on various devices and screen sizes to ensure your site looks beautiful and functions perfectly everywhere - from smartphones to large desktop screens.</p>
        </div>
        <div class="painterly-card p-6">
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">Can I update the website content myself after launch?</h4>
          <p class="text-gray-600">Yes! We can integrate user-friendly content management systems like Sanity or Contentful. We'll provide training and documentation so you can easily update text, images, and other content without needing technical knowledge.</p>
        </div>
        <div class="painterly-card p-6">
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">What about SEO and getting found on Google?</h4>
          <p class="text-gray-600">SEO is baked into everything we do - clean code structure, fast loading times, proper meta tags, and accessible markup. We also provide basic SEO setup and can recommend ongoing SEO strategies to help your site rank well.</p>
        </div>
        <div class="painterly-card p-6">
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">What if I need changes or updates after the website launches?</h4>
          <p class="text-gray-600">We're your long-term kakis! Every project includes 30 days of post-launch support for bug fixes and minor tweaks. After that, we offer maintenance packages or project-based updates - whatever works best for your budget and needs.</p>
        </div>
        <div class="painterly-card p-6">
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">Do you handle website hosting and domain registration?</h4>
          <p class="text-gray-600">We can guide you through hosting setup and recommend reliable providers that fit your needs and budget. We typically use services like Firebase, Vercel, or Netlify for fast, secure hosting. Domain registration can be handled through providers like Namecheap or Google Domains.</p>
        </div>
        <div class="painterly-card p-6">
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">What makes your approach different from other web designers?</h4>
          <p class="text-gray-600">We focus on genuine collaboration and understanding your story first. Our designs reflect warmth and authenticity rather than corporate coldness. Plus, we're local kakis who understand Singapore's market and culture - your website will feel both professionally polished and authentically Singaporean.</p>
        </div>
      </div>
    </div>

  </div>
</section>

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
