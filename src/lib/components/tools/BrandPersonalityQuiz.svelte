<script>
  import { onMount } from 'svelte';

  let currentQuestion = 0;
  let answers = {};
  let showResults = false;
  let brandPersonality = null;

  const questions = [
    {
      id: 1,
      question: "How would you describe your business's voice?",
      options: [
        { id: 'warm', text: 'Warm and approachable - like chatting with a friend', personality: 'friend' },
        { id: 'professional', text: 'Professional and trustworthy - established expertise', personality: 'expert' },
        { id: 'innovative', text: 'Bold and innovative - pushing boundaries', personality: 'innovator' },
        { id: 'luxury', text: 'Premium and exclusive - sophisticated elegance', personality: 'luxury' }
      ]
    },
    {
      id: 2,
      question: "What's your ideal customer relationship?",
      options: [
        { id: 'partnership', text: 'Long-term partnership - growing together', personality: 'friend' },
        { id: 'advisor', text: 'Trusted advisor - they come to you for guidance', personality: 'expert' },
        { id: 'catalyst', text: 'Innovation catalyst - inspiring their transformation', personality: 'innovator' },
        { id: 'curator', text: 'Exclusive curator - providing premium experiences', personality: 'luxury' }
      ]
    },
    {
      id: 3,
      question: "How do you want customers to feel after working with you?",
      options: [
        { id: 'supported', text: 'Supported and understood - like family', personality: 'friend' },
        { id: 'confident', text: 'Confident and secure - in capable hands', personality: 'expert' },
        { id: 'empowered', text: 'Empowered and ahead of the curve', personality: 'innovator' },
        { id: 'elevated', text: 'Elevated and exclusive - part of something special', personality: 'luxury' }
      ]
    },
    {
      id: 4,
      question: "What Singapore business would you most relate to?",
      options: [
        { id: 'kopitiam', text: 'Neighborhood kopitiam - authentic, welcoming, community', personality: 'friend' },
        { id: 'clinic', text: 'Established medical clinic - trusted, reliable, professional', personality: 'expert' },
        { id: 'startup', text: 'Tech startup - innovative, agile, forward-thinking', personality: 'innovator' },
        { id: 'hotel', text: 'Luxury hotel - premium, refined, exceptional service', personality: 'luxury' }
      ]
    },
    {
      id: 5,
      question: "How do you prefer to communicate with clients?",
      options: [
        { id: 'casual', text: 'Casual conversations - WhatsApp, kopi sessions', personality: 'friend' },
        { id: 'structured', text: 'Structured consultations - professional meetings', personality: 'expert' },
        { id: 'dynamic', text: 'Dynamic collaboration - brainstorming, workshops', personality: 'innovator' },
        { id: 'curated', text: 'Curated presentations - polished, exclusive touchpoints', personality: 'luxury' }
      ]
    }
  ];

  const personalities = {
    friend: {
      name: 'The Trusted Kaki',
      description: 'Your brand is all about genuine relationships and authentic connections',
      traits: ['Approachable', 'Authentic', 'Community-focused', 'Trustworthy'],
      colors: ['Warm sage green', 'Soft peach', 'Cream tones'],
      voice: 'Conversational, friendly, uses "we" language, includes local expressions naturally',
      examples: 'Local F&B, Community services, Family businesses',
      strategy: 'Focus on storytelling, customer testimonials, community engagement, and building long-term relationships through genuine care and personal attention.',
      color: 'from-lxk-sage to-lxk-mint'
    },
    expert: {
      name: 'The Trusted Authority',
      description: 'Your brand represents expertise, reliability, and professional excellence',
      traits: ['Professional', 'Reliable', 'Knowledgeable', 'Established'],
      colors: ['Deep sage', 'Professional grays', 'Clean whites'],
      voice: 'Authoritative but accessible, evidence-based, clear and direct',
      examples: 'Professional services, Healthcare, Financial services',
      strategy: 'Showcase credentials, case studies, industry recognition, and thought leadership. Position as the go-to expert in your field.',
      color: 'from-lxk-peach to-lxk-coral'
    },
    innovator: {
      name: 'The Bold Pioneer',
      description: 'Your brand pushes boundaries and leads industry innovation',
      traits: ['Innovative', 'Forward-thinking', 'Dynamic', 'Cutting-edge'],
      colors: ['Vibrant coral', 'Electric mint', 'Bold contrasts'],
      voice: 'Energetic, future-focused, uses industry terminology confidently',
      examples: 'Tech startups, Design agencies, Digital solutions',
      strategy: 'Highlight innovation, showcase latest work, demonstrate thought leadership, and position as industry disruptors.',
      color: 'from-lxk-coral to-lxk-sage'
    },
    luxury: {
      name: 'The Premium Experience',
      description: 'Your brand delivers exclusive, high-end experiences and exceptional quality',
      traits: ['Premium', 'Exclusive', 'Sophisticated', 'Exceptional'],
      colors: ['Rich corals', 'Elegant golds', 'Sophisticated neutrals'],
      voice: 'Refined, exclusive, quality-focused, subtly confident',
      examples: 'Luxury services, High-end retail, Premium consulting',
      strategy: 'Emphasize exclusivity, showcase premium materials, highlight exceptional service, and create anticipation through scarcity.',
      color: 'from-lxk-mint to-lxk-peach'
    }
  };

  function selectAnswer(questionIndex, optionId) {
    answers[questionIndex] = optionId;

    if (questionIndex < questions.length - 1) {
      currentQuestion = questionIndex + 1;
    } else {
      calculatePersonality();
    }
  }

  function calculatePersonality() {
    const personalityScores = {
      friend: 0,
      expert: 0,
      innovator: 0,
      luxury: 0
    };

    // Count personality votes from answers
    Object.values(answers).forEach(answerId => {
      questions.forEach(question => {
        const option = question.options.find(opt => opt.id === answerId);
        if (option) {
          personalityScores[option.personality]++;
        }
      });
    });

    // Find the highest scoring personality
    const winningPersonality = Object.keys(personalityScores).reduce((a, b) =>
      personalityScores[a] > personalityScores[b] ? a : b
    );

    brandPersonality = personalities[winningPersonality];
    showResults = true;
  }

  function restartQuiz() {
    currentQuestion = 0;
    answers = {};
    showResults = false;
    brandPersonality = null;
  }

  function goBack() {
    if (currentQuestion > 0) {
      currentQuestion--;
    }
  }
</script>

<!-- Brand Personality Quiz -->
<div class="bg-gradient-to-br from-lxk-coral/10 to-lxk-sage/10 rounded-3xl p-8 border border-lxk-coral/20">
  <div class="text-center mb-8">
    <div class="w-16 h-16 bg-gradient-to-br from-lxk-coral to-lxk-sage rounded-2xl flex items-center justify-center mx-auto mb-4">
      <span class="text-2xl text-white">🎭</span>
    </div>
    <h3 class="text-2xl font-bold text-lxk-warm-gray mb-2">Brand Personality Quiz</h3>
    <p class="text-gray-600">Discover your authentic brand voice in the Singapore market</p>
  </div>

  {#if !showResults}
    <!-- Progress Bar -->
    <div class="mb-8">
      <div class="flex justify-between text-sm font-medium text-gray-600 mb-2">
        <span>Question {currentQuestion + 1} of {questions.length}</span>
        <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2">
        <div
          class="bg-gradient-to-r from-lxk-coral to-lxk-sage h-2 rounded-full transition-all duration-300"
          style="width: {((currentQuestion + 1) / questions.length) * 100}%">
        </div>
      </div>
    </div>

    <!-- Current Question -->
    <div class="mb-8">
      <h4 class="text-xl font-semibold text-lxk-warm-gray mb-6 text-center">
        {questions[currentQuestion].question}
      </h4>

      <div class="space-y-4">
        {#each questions[currentQuestion].options as option (option.id)}
          <button
            on:click={() => selectAnswer(currentQuestion, option.id)}
            class="w-full text-left p-4 rounded-2xl border-2 border-gray-200 hover:border-lxk-coral hover:bg-lxk-coral/5 transition-all duration-300 hover:shadow-lg group">
            <div class="flex items-start space-x-3">
              <div class="w-6 h-6 border-2 border-gray-300 rounded-full group-hover:border-lxk-coral transition-colors flex-shrink-0 mt-0.5"></div>
              <span class="font-medium text-gray-700 group-hover:text-lxk-warm-gray">{option.text}</span>
            </div>
          </button>
        {/each}
      </div>
    </div>

    <!-- Navigation -->
    {#if currentQuestion > 0}
      <div class="text-center">
        <button
          on:click={goBack}
          class="px-6 py-2 text-gray-600 hover:text-lxk-coral font-medium transition-colors">
          ← Previous Question
        </button>
      </div>
    {/if}

  {:else}
    <!-- Results -->
    <div class="bg-white rounded-3xl p-8 border-2 border-lxk-sage/20 shadow-lg">
      <div class="text-center mb-8">
        <div class="w-20 h-20 bg-gradient-to-br {brandPersonality.color} rounded-full mx-auto mb-4 shadow-lg"></div>
        <h4 class="text-2xl font-bold text-lxk-warm-gray mb-2">{brandPersonality.name}</h4>
        <p class="text-lg text-gray-600 max-w-md mx-auto">{brandPersonality.description}</p>
      </div>

      <!-- Personality Traits -->
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h5 class="font-semibold text-lxk-warm-gray mb-3">Your Brand Traits</h5>
          <div class="flex flex-wrap gap-2">
            {#each brandPersonality.traits as trait}
              <span class="px-3 py-1 bg-lxk-sage/20 text-lxk-sage text-sm font-medium rounded-full">
                {trait}
              </span>
            {/each}
          </div>
        </div>

        <div>
          <h5 class="font-semibold text-lxk-warm-gray mb-3">Recommended Colors</h5>
          <div class="space-y-1">
            {#each brandPersonality.colors as color}
              <div class="text-sm text-gray-600">• {color}</div>
            {/each}
          </div>
        </div>
      </div>

      <!-- Voice & Strategy -->
      <div class="space-y-6 mb-8">
        <div>
          <h5 class="font-semibold text-lxk-warm-gray mb-2">Brand Voice</h5>
          <p class="text-gray-600 text-sm">{brandPersonality.voice}</p>
        </div>

        <div>
          <h5 class="font-semibold text-lxk-warm-gray mb-2">Similar Singapore Businesses</h5>
          <p class="text-gray-600 text-sm">{brandPersonality.examples}</p>
        </div>

        <div>
          <h5 class="font-semibold text-lxk-warm-gray mb-2">Recommended Strategy</h5>
          <p class="text-gray-600 text-sm">{brandPersonality.strategy}</p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-4">
        <button
          on:click={restartQuiz}
          class="flex-1 bg-gray-100 text-gray-700 py-3 rounded-2xl font-medium hover:bg-gray-200 transition-colors">
          Take Quiz Again
        </button>
        <a
          href="#/contact?service=branding&personality={Object.keys(personalities).find(key => personalities[key] === brandPersonality)}"
          class="flex-1 bg-gradient-to-r from-lxk-coral to-lxk-sage text-white py-3 rounded-2xl font-bold text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          Get Brand Strategy
        </a>
      </div>
    </div>
  {/if}
</div>