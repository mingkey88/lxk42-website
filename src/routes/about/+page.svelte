<script>
  import { onMount } from 'svelte';
  import About from '$lib/components/About.svelte';
  import EnhancedCTA from '$lib/components/ui/EnhancedCTA.svelte';
  import { updatePageMeta, injectStructuredData, organizationSchema } from '$lib/structuredData.js';

  onMount(() => {
    // SEO optimization
    updatePageMeta(
      'About Us - Light & Kaki Studio | Singapore Creative Studio',
      'Learn about Light & Kaki Studio\'s journey, our "kaki" philosophy, and how we build genuine friendships while creating amazing digital experiences in Singapore.'
    );
    injectStructuredData(organizationSchema, 'about-organization');

    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));
  });
</script>

<!-- Simplified About Us Hero -->
<section
  class="min-h-screen flex items-center bg-gradient-to-br from-lxk-cream/30 via-white to-lxk-mint/20"
>
  <div class="container-custom">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <!-- Large visual element -->
      <div class="animate-on-scroll">
        <div
          class="bg-gradient-to-br from-lxk-sage/20 to-lxk-peach/20 rounded-3xl overflow-hidden shadow-2xl"
        >
          <video
            class="w-full h-full object-cover"
            autoplay
            loop
            muted
            playsinline
          >
            <source src="/creative-kakis.mp4" type="video/mp4" />
            <div class="text-center p-12">
              <div class="text-8xl mb-6">🤝</div>
              <h3 class="text-2xl font-semibold text-lxk-warm-gray">Your Creative Kakis</h3>
            </div>
          </video>
        </div>
      </div>

      <!-- Bold, minimal text -->
      <div class="animate-on-scroll">
        <h1 class="text-6xl lg:text-8xl font-bold text-lxk-warm-gray leading-[0.9] mb-8">
          About Light & <span class="text-lxk-peach">Kaki</span>
        </h1>
        <p class="text-2xl text-gray-700 mb-12 leading-relaxed font-light">
          Singapore's creative studio where friendship fuels extraordinary digital experiences.
        </p>

        <!-- Key stats grid -->
        <div class="grid grid-cols-2 gap-8">
          <div class="flex items-center gap-4">
            <div class="text-4xl font-bold text-lxk-sage">2025</div>
            <div class="text-lg text-gray-600">Founded in Singapore</div>
          </div>
          <div class="flex items-center gap-4">
            <div class="text-4xl font-bold text-lxk-peach">100%</div>
            <div class="text-lg text-gray-600">Client satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Simplified Story Section -->
<section class="section-padding">
  <div class="container-custom">
    <div class="text-center mb-20">
      <h2 class="text-5xl lg:text-7xl font-bold text-lxk-warm-gray mb-8 leading-tight">
        The Story Behind <span class="text-lxk-peach">"Kaki"</span>
      </h2>
      <p class="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
        In Singapore, "kaki" means trusted friend. We're the creative kakis who make your digital
        dreams reality.
      </p>
    </div>

    <!-- Visual quote card -->
    <div class="max-w-2xl mx-auto">
      <div
        class="bg-gradient-to-r from-lxk-sage to-lxk-peach rounded-3xl p-12 text-white text-center"
      >
        <div class="text-6xl mb-6">💡</div>
        <blockquote class="text-2xl font-light leading-relaxed mb-6">
          "Every project starts with kopi, continues with genuine collaboration, and ends with
          lasting friendship."
        </blockquote>
        <div class="text-lg opacity-90">— The LXK42 Team</div>
      </div>
    </div>
  </div>
</section>

<!-- Main About Component -->
<About />

<!-- Additional depth sections for About Us page -->
<section class="section-padding bg-gradient-to-br from-lxk-mint/10 via-white to-lxk-cream/20">
  <div class="container-custom">
    <div class="text-center mb-16">
      <h2 class="text-4xl lg:text-6xl font-bold text-lxk-warm-gray mb-6 leading-tight">
        The Team Behind the <span class="text-lxk-peach">Magic</span>
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Meet the creative minds who turn your digital dreams into reality — with lots of laughter
        and kopi along the way.
      </p>
    </div>

    <!-- Team Philosophy Cards -->
    <div class="grid md:grid-cols-3 gap-8 mb-20">
      <div class="painterly-card p-8 animate-on-scroll">
        <div class="text-4xl mb-4">🌱</div>
        <h3 class="text-2xl font-bold text-lxk-sage mb-4">Growing Together</h3>
        <p class="text-gray-700 leading-relaxed">
          Every project is a learning journey. We grow with our clients, sharing insights and
          celebrating milestones together as true kakis.
        </p>
      </div>

      <div class="painterly-card p-8 animate-on-scroll">
        <div class="text-4xl mb-4">💝</div>
        <h3 class="text-2xl font-bold text-lxk-peach mb-4">Authentic Care</h3>
        <p class="text-gray-700 leading-relaxed">
          Your success is our success. We're invested in your journey and celebrate every win
          together—that's what friendship means to us.
        </p>
      </div>

      <div class="painterly-card p-8 animate-on-scroll">
        <div class="text-4xl mb-4">🇸🇬</div>
        <h3 class="text-2xl font-bold text-lxk-coral mb-4">Singapore Heart</h3>
        <p class="text-gray-700 leading-relaxed">
          Born and bred in Singapore, we understand the local market, culture, and what makes
          businesses here tick.
        </p>
      </div>
    </div>

    <!-- Mission & Vision Statement -->
    <div class="grid md:grid-cols-2 gap-8 mb-16">
      <div class="bg-white/60 backdrop-blur rounded-3xl p-8 text-center animate-on-scroll">
        <div class="text-4xl mb-4">🎯</div>
        <h3 class="text-2xl font-bold text-lxk-warm-gray mb-4">Our Mission</h3>
        <p class="text-lg text-gray-700 leading-relaxed">
          To be the creative kakis Singapore businesses can always count on—bridging technical
          excellence with genuine friendship.
        </p>
      </div>

      <div class="bg-white/60 backdrop-blur rounded-3xl p-8 text-center animate-on-scroll">
        <div class="text-4xl mb-4">✨</div>
        <h3 class="text-2xl font-bold text-lxk-warm-gray mb-4">Our Vision</h3>
        <p class="text-lg text-gray-700 leading-relaxed">
          To transform how creative agencies work—where every project feels like collaborating with
          your closest friends.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Why Singapore Businesses Choose Us -->
<section class="section-padding">
  <div class="container-custom">
    <div class="text-center mb-16">
      <h2 class="text-4xl lg:text-6xl font-bold text-lxk-warm-gray mb-6 leading-tight">
        Why Singapore <span class="text-lxk-coral">Loves</span> Us
      </h2>
    </div>

    <div class="grid lg:grid-cols-3 gap-8">
      <!-- Cultural Understanding -->
      <div class="painterly-card p-8 animate-on-scroll hover:scale-105 transition-all duration-300">
        <div class="bg-lxk-sage/10 rounded-xl p-4 mb-6 text-center">
          <div class="text-3xl">🇸🇬</div>
        </div>
        <h4 class="text-xl font-bold text-lxk-sage mb-4">Deep Local Roots</h4>
        <p class="text-gray-700 mb-4">
          Born and raised in Singapore, we get the unique blend of cultures and business practices
          here. Your brand connects authentically with local audiences while maintaining global
          appeal.
        </p>
        <div class="text-sm text-lxk-coral font-medium">
          → Cultural authenticity • Local market insights • Singapore-first approach
        </div>
      </div>

      <!-- No Corporate Nonsense -->
      <div class="painterly-card p-8 animate-on-scroll hover:scale-105 transition-all duration-300">
        <div class="bg-lxk-peach/10 rounded-xl p-4 mb-6 text-center">
          <div class="text-3xl">☕</div>
        </div>
        <h4 class="text-xl font-bold text-lxk-peach mb-4">No Corporate Nonsense</h4>
        <p class="text-gray-700 mb-4">
          We skip the jargon and get straight to what matters. Honest kopi chats, clear timelines,
          and transparent pricing. No hidden fees, no corporate speak—just genuine friendship.
        </p>
        <div class="text-sm text-lxk-coral font-medium">
          → Straight talk • Transparent pricing • Genuine relationships
        </div>
      </div>

      <!-- Long-term Partnership -->
      <div class="painterly-card p-8 animate-on-scroll hover:scale-105 transition-all duration-300">
        <div class="bg-lxk-coral/10 rounded-xl p-4 mb-6 text-center">
          <div class="text-3xl">🤝</div>
        </div>
        <h4 class="text-xl font-bold text-lxk-coral mb-4">Kakis for Life</h4>
        <p class="text-gray-700 mb-4">
          The friendship doesn't end at project launch. Need updates? New ideas? Quick fixes? Your
          creative kakis are always here, ready to help whenever you need us.
        </p>
        <div class="text-sm text-lxk-coral font-medium">
          → Lifetime partnership • Always available • Growing together
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Remove redundant sections - Our Kaki Way in About component now covers both values and process -->

<!-- CTA Section -->
<EnhancedCTA
  service="about"
  primaryTitle="Ready to Become Kakis?"
  primaryDescription="Let's start with a coffee chat and see where our creative friendship takes us"
  primaryCTA="Let's Grab Kopi →"
  secondaryTitle="Want to Know More?"
  secondaryDescription="Download our company overview and learn about our unique approach"
  secondaryResource="Download Company Profile"
  leadMagnetTitle="Light & Kaki Studio Profile"
  leadMagnetBenefits={[
    'Our complete story and company philosophy',
    'Detailed case studies and client testimonials',
    'Behind-the-scenes insights into our process',
  ]}
/>

<style>
  .painterly-card {
    background: linear-gradient(135deg, #ffffff 0%, #f9f7f4 100%);
    border-radius: 20px;
    box-shadow:
      0 8px 32px rgba(143, 166, 142, 0.08),
      0 2px 8px rgba(143, 166, 142, 0.04);
    border: 1px solid rgba(143, 166, 142, 0.1);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .painterly-card:hover {
    transform: translateY(-4px);
    box-shadow:
      0 16px 48px rgba(143, 166, 142, 0.12),
      0 4px 16px rgba(143, 166, 142, 0.08);
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-on-scroll {
    animation: fadeInUp 0.8s ease-out forwards;
  }
</style>
