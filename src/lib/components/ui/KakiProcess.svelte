<script>
  import { onMount } from 'svelte';

  let currentStep = 0;
  let processContainer;

  const processSteps = [
    {
      id: 1,
      title: 'Kopi Chat & Dreams',
      subtitle: 'Getting to know each other ☕',
      description:
        "We start with a relaxed conversation over kopi (or tea, if that's your thing!). Tell us about your vision, your challenges, and what success looks like for you. No sales pitch, no pressure – just genuine curiosity about your story.",
      icon: '☕',
      bgColor: 'from-amber-400 to-orange-500',
      duration: '1-2 weeks',
      activities: [
        'Initial coffee chat or video call',
        'Understanding your business goals',
        'Exploring your brand personality',
        'Discussing budget and timeline honestly',
      ],
    },
    {
      id: 2,
      title: 'Research & Friendship',
      subtitle: 'Learning about your world 🔍',
      description:
        "We dive deep into your industry, competitors, and audience. But more importantly, we get to know your team, your culture, and what makes your business special. This isn't just research – it's the beginning of our friendship.",
      icon: '🔍',
      bgColor: 'from-blue-400 to-purple-500',
      duration: '1-2 weeks',
      activities: [
        'Market and competitor analysis',
        'User research and persona development',
        'Brand audit and positioning',
        'Technical requirements discovery',
      ],
    },
    {
      id: 3,
      title: 'Collaborative Creation',
      subtitle: 'Designing together, not for you 🎨',
      description:
        "This is where the magic happens! We don't disappear into a black box – we create together. Regular check-ins, shared mood boards, collaborative design sessions. Your input shapes everything we build.",
      icon: '🎨',
      bgColor: 'from-pink-400 to-rose-500',
      duration: '3-6 weeks',
      activities: [
        'Collaborative wireframing sessions',
        'Shared design iteration process',
        'Regular feedback and refinement',
        'Prototype testing together',
      ],
    },
    {
      id: 4,
      title: 'Building & Bonding',
      subtitle: 'Making it real, making it right 💻',
      description:
        "Development time! We keep you in the loop with regular updates, preview links, and chances to test things out. Found a bug? Worried about something? Just WhatsApp us – we're always here for our kakis.",
      icon: '💻',
      bgColor: 'from-green-400 to-teal-500',
      duration: '4-8 weeks',
      activities: [
        'Agile development with weekly demos',
        'Continuous testing and feedback',
        'Performance optimization',
        'Cross-browser and device testing',
      ],
    },
    {
      id: 5,
      title: 'Launch Celebration',
      subtitle: 'Going live together! 🚀',
      description:
        "Launch day is always exciting! We handle all the technical stuff while you focus on celebrating with your team. We're probably more nervous than you are – that's how much we care about your success.",
      icon: '🚀',
      bgColor: 'from-purple-400 to-indigo-500',
      duration: '1 week',
      activities: [
        'Final quality assurance testing',
        'Launch planning and preparation',
        'Go-live support and monitoring',
        'Launch celebration (virtual kopi!)',
      ],
    },
    {
      id: 6,
      title: 'Ongoing Friendship',
      subtitle: 'Kakis for life, not just for projects 🤝',
      description:
        "The project might be done, but our friendship isn't! We're here for updates, improvements, new ideas, or just to chat about how things are going. Many of our kakis become our closest collaborators and friends.",
      icon: '🤝',
      bgColor: 'from-teal-400 to-cyan-500',
      duration: 'Forever',
      activities: [
        'Ongoing support and maintenance',
        'Performance monitoring and optimization',
        'Future project collaborations',
        'Genuine friendship and support',
      ],
    },
  ];

  function selectStep(index) {
    currentStep = index;
  }

  onMount(() => {
    // Auto-cycle through steps
    const interval = setInterval(() => {
      currentStep = (currentStep + 1) % processSteps.length;
    }, 5000);

    return () => clearInterval(interval);
  });
</script>

<!-- Kaki Process Section -->
<section class="section-padding bg-gradient-to-br from-white via-lxk-cream/20 to-lxk-mint/10">
  <div class="container-custom">
    <!-- Section Header -->
    <div class="text-center mb-16 animate-on-scroll">
      <h2 class="text-3xl md:text-4xl font-bold text-lxk-warm-gray mb-4">
        How We Kaki Together 🤝
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Our process isn't just about delivering projects – it's about building genuine friendships
        and creating something amazing together. Here's how our collaborative journey typically
        unfolds:
      </p>
    </div>

    <div class="max-w-7xl mx-auto">
      <!-- Process Timeline -->
      <div class="mb-12">
        <div class="flex flex-wrap justify-center gap-4 mb-8">
          {#each processSteps as step, index}
            <button
              class="group relative px-4 py-3 rounded-full transition-all duration-300 {currentStep ===
              index
                ? 'bg-lxk-sage text-white shadow-lg scale-105'
                : 'bg-white text-lxk-warm-gray hover:bg-lxk-sage/10 border border-lxk-sage/20'}"
              on:click={() => selectStep(index)}
            >
              <div class="flex items-center gap-2">
                <span class="text-lg">{step.icon}</span>
                <span class="hidden md:inline font-medium">{step.title}</span>
                <span class="md:hidden font-medium">{index + 1}</span>
              </div>

              <!-- Hover tooltip for mobile -->
              <div
                class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-lxk-warm-gray text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap md:hidden pointer-events-none z-10"
              >
                {step.title}
                <div
                  class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-lxk-warm-gray"
                ></div>
              </div>
            </button>
          {/each}
        </div>

        <!-- Progress Bar -->
        <div class="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div
            class="bg-gradient-to-r from-lxk-sage to-lxk-soft-teal h-2 rounded-full transition-all duration-1000 ease-out"
            style="width: {((currentStep + 1) / processSteps.length) * 100}%"
          ></div>
        </div>
      </div>

      <!-- Current Step Details -->
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Step Content -->
        <div class="space-y-6">
          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-16 h-16 bg-gradient-to-br {processSteps[currentStep]
                .bgColor} rounded-full flex items-center justify-center text-2xl text-white shadow-lg"
            >
              {processSteps[currentStep].icon}
            </div>
            <div>
              <h3 class="text-2xl font-bold text-lxk-warm-gray">
                {processSteps[currentStep].title}
              </h3>
              <p class="text-lxk-coral font-medium">
                {processSteps[currentStep].subtitle}
              </p>
            </div>
          </div>

          <p class="text-lg text-gray-600 leading-relaxed">
            {processSteps[currentStep].description}
          </p>

          <!-- Duration -->
          <div class="flex items-center gap-2 text-sm">
            <span class="text-gray-500">Typical Duration:</span>
            <span class="bg-lxk-sage/10 text-lxk-sage px-3 py-1 rounded-full font-medium">
              {processSteps[currentStep].duration}
            </span>
          </div>

          <!-- Activities -->
          <div>
            <h4 class="font-semibold text-lxk-warm-gray mb-3">What happens during this phase:</h4>
            <div class="space-y-2">
              {#each processSteps[currentStep].activities as activity}
                <div class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-lxk-sage rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-gray-600">{activity}</span>
                </div>
              {/each}
            </div>
          </div>
        </div>

        <!-- Visual Representation -->
        <div class="relative">
          <!-- Background decoration -->
          <div
            class="absolute inset-0 bg-gradient-to-br {processSteps[currentStep]
              .bgColor} rounded-3xl opacity-10 transform rotate-3"
          ></div>

          <!-- Main content area -->
          <div class="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div class="text-center">
              <div class="text-6xl mb-6">
                {processSteps[currentStep].icon}
              </div>
              <h4 class="text-xl font-semibold text-lxk-warm-gray mb-4">
                Step {currentStep + 1} of {processSteps.length}
              </h4>

              <!-- Mini timeline -->
              <div class="flex justify-center items-center gap-2 mb-6">
                {#each processSteps as _, index}
                  <div
                    class="w-3 h-3 rounded-full transition-all duration-300 {index <= currentStep
                      ? 'bg-lxk-sage'
                      : 'bg-gray-200'}"
                  ></div>
                {/each}
              </div>

              <!-- Quote -->
              <blockquote class="text-gray-600 italic leading-relaxed">
                {#if currentStep === 0}
                  "The best projects start with the best conversations."
                {:else if currentStep === 1}
                  "Understanding comes before creating."
                {:else if currentStep === 2}
                  "Great design happens when we create together."
                {:else if currentStep === 3}
                  "Building is better when we build together."
                {:else if currentStep === 4}
                  "Launch day: nervous excitement for everyone!"
                {:else}
                  "Projects end, but friendships are forever."
                {/if}
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16 animate-on-scroll">
        <div class="max-w-2xl mx-auto">
          <h3 class="text-2xl font-semibold text-lxk-warm-gray mb-4">
            Ready to Start Our Journey? ✨
          </h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            Every great collaboration starts with a simple conversation. Let's grab some kopi and
            see where our creative journey takes us!
          </p>
          <button
            class="bg-gradient-to-r from-lxk-sage to-lxk-soft-teal text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Start with Kopi Chat →
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
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
