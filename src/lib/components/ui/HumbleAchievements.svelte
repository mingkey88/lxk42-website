<script>
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  // Animated counters
  const projectsCompleted = tweened(0, { duration: 2000, easing: cubicOut });
  const happyKakis = tweened(0, { duration: 2500, easing: cubicOut });
  const yearsExperience = tweened(0, { duration: 1500, easing: cubicOut });
  const coffeeChats = tweened(0, { duration: 3000, easing: cubicOut });

  let isVisible = false;

  // Humble achievements data
  const certifications = [
    {
      name: 'Svelte Society Member',
      icon: '⚡',
      description: 'Keeping up with the latest web technologies to serve you better',
      year: '2024',
    },
    {
      name: 'Singapore Tech Association',
      icon: '🇸🇬',
      description: 'Connected with the local tech community we love',
      year: '2024',
    },
    {
      name: 'Accessibility Certified',
      icon: '♿',
      description: 'Making sure everyone can enjoy the websites we build together',
      year: '2024',
    },
  ];

  const recognitions = [
    {
      title: 'Featured in Design Singapore',
      description: 'Our kaki-first approach to design caught some attention',
      icon: '🏆',
      year: '2024',
    },
    {
      title: 'Client Choice Award',
      description: 'When your kakis nominate you, that means everything ❤️',
      icon: '🌟',
      year: '2024',
    },
    {
      title: 'Sustainable Web Design Initiative',
      description: 'Proud to build websites that are kind to our planet',
      icon: '🌱',
      year: '2024',
    },
  ];

  function startAnimations() {
    projectsCompleted.set(25);
    happyKakis.set(40);
    yearsExperience.set(8);
    coffeeChats.set(150);
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !isVisible) {
          isVisible = true;
          startAnimations();
        }
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector('#achievements-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  });
</script>

<!-- Humble Achievements Section -->
<section
  id="achievements-section"
  class="section-padding bg-gradient-to-br from-lxk-cream/20 via-white to-lxk-mint/10"
>
  <div class="container-custom">
    <!-- Section Header -->
    <div class="text-center mb-16 animate-on-scroll">
      <h2 class="text-3xl md:text-4xl font-bold text-lxk-warm-gray mb-4">
        Grateful for the Journey ✨
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        We're honored by the recognition we've received, but what matters most is how these
        experiences help us serve our kakis better. Still learning, still growing, still grateful
        for each collaboration.
      </p>
    </div>

    <!-- Animated Statistics -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
      <div class="text-center group">
        <div
          class="w-16 h-16 bg-gradient-to-br from-lxk-sage to-lxk-soft-teal rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
        >
          <span class="text-2xl">🎨</span>
        </div>
        <div class="text-3xl font-bold text-lxk-sage mb-2">
          {Math.round($projectsCompleted)}+
        </div>
        <div class="text-sm text-gray-600 leading-relaxed">
          Projects <br class="hidden md:block" />Completed Together
        </div>
      </div>

      <div class="text-center group">
        <div
          class="w-16 h-16 bg-gradient-to-br from-lxk-coral to-lxk-peach rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
        >
          <span class="text-2xl">🤝</span>
        </div>
        <div class="text-3xl font-bold text-lxk-coral mb-2">
          {Math.round($happyKakis)}+
        </div>
        <div class="text-sm text-gray-600 leading-relaxed">
          Happy Kakis <br class="hidden md:block" />& Counting
        </div>
      </div>

      <div class="text-center group">
        <div
          class="w-16 h-16 bg-gradient-to-br from-lxk-peach to-lxk-coral rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
        >
          <span class="text-2xl">📚</span>
        </div>
        <div class="text-3xl font-bold text-lxk-peach mb-2">
          {Math.round($yearsExperience)}+
        </div>
        <div class="text-sm text-gray-600 leading-relaxed">
          Years Learning <br class="hidden md:block" />& Growing
        </div>
      </div>

      <div class="text-center group">
        <div
          class="w-16 h-16 bg-gradient-to-br from-lxk-soft-teal to-lxk-sage rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
        >
          <span class="text-2xl">☕</span>
        </div>
        <div class="text-3xl font-bold text-lxk-soft-teal mb-2">
          {Math.round($coffeeChats)}+
        </div>
        <div class="text-sm text-gray-600 leading-relaxed">
          Coffee Chats <br class="hidden md:block" />& Kopi Sessions
        </div>
      </div>
    </div>

    <!-- Certifications & Learning -->
    <div class="mb-16 animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-warm-gray mb-8 text-center">
        How We Stay Sharp for Our Kakis 📚
      </h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each certifications as cert, index}
          <div
            class="painterly-card p-6 text-center hover:shadow-xl transition-all duration-500 group"
            style="animation-delay: {index * 0.1}s"
          >
            <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {cert.icon}
            </div>
            <h4 class="font-semibold text-lxk-warm-gray mb-2">{cert.name}</h4>
            <p class="text-sm text-gray-600 leading-relaxed mb-3">{cert.description}</p>
            <span class="text-xs text-lxk-coral bg-lxk-coral/10 px-2 py-1 rounded-full">
              {cert.year}
            </span>
          </div>
        {/each}
      </div>
    </div>

    <!-- Recognition (Humble) -->
    <div class="animate-on-scroll">
      <h3 class="text-2xl font-semibold text-lxk-warm-gray mb-4 text-center">
        Grateful for the Recognition 🙏
      </h3>
      <p class="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        These moments remind us we're on the right track, but the real reward is seeing our kakis
        succeed.
      </p>

      <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {#each recognitions as recognition, index}
          <div class="relative group">
            <!-- Subtle glow effect -->
            <div
              class="absolute -inset-0.5 bg-gradient-to-r from-lxk-sage/20 to-lxk-soft-teal/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"
            ></div>

            <div
              class="relative painterly-card p-6 text-center hover:shadow-xl transition-all duration-500"
            >
              <div class="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {recognition.icon}
              </div>
              <h4 class="font-semibold text-lxk-warm-gray mb-3">{recognition.title}</h4>
              <p class="text-sm text-gray-600 leading-relaxed mb-4 italic">
                "{recognition.description}"
              </p>
              <span class="text-xs text-lxk-sage bg-lxk-sage/10 px-3 py-1 rounded-full">
                {recognition.year}
              </span>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Humble Note -->
    <div class="text-center mt-16 animate-on-scroll">
      <div
        class="max-w-2xl mx-auto p-8 bg-gradient-to-r from-lxk-cream/50 to-lxk-mint/20 rounded-2xl"
      >
        <div class="text-4xl mb-4">💝</div>
        <p class="text-lg text-lxk-warm-gray leading-relaxed italic">
          "Every recognition, every certification, every milestone – they're all just tools that
          help us serve our kakis better. The real achievement is when we see your vision come to
          life and your business thrive."
        </p>
        <div class="mt-4 text-sm text-gray-500">— The LXK42 Family</div>
      </div>
    </div>
  </div>
</section>

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
