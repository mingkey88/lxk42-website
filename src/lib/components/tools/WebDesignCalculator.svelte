<script>

  let selectedStyle = '';
  let selectedScope = '';
  let selectedFeatures = [];
  let selectedIndustry = '';
  let estimatedCost = 0;
  let estimatedTimeline = '';
  let showResults = false;

  // Project styles with Singapore market focus
  const styles = [
    { id: 'modern', name: 'Modern Singapore', description: 'Clean, contemporary design with local flair', basePrice: 3500 },
    { id: 'corporate', name: 'Corporate Professional', description: 'Trustworthy and established business presence', basePrice: 4200 },
    { id: 'creative', name: 'Creative & Artistic', description: 'Bold, unique design for creative industries', basePrice: 4800 },
    { id: 'minimalist', name: 'Minimalist Zen', description: 'Simple, focused, premium aesthetic', basePrice: 3800 }
  ];

  const scopes = [
    { id: 'landing', name: 'Landing Page', description: 'Single conversion-focused page', multiplier: 0.3, weeks: '2-3' },
    { id: 'brochure', name: 'Business Website', description: '5-8 pages with CMS', multiplier: 1, weeks: '4-6' },
    { id: 'ecommerce', name: 'E-commerce Store', description: 'Online store with payment integration', multiplier: 1.8, weeks: '6-8' },
    { id: 'platform', name: 'Web Application', description: 'Custom functionality and user accounts', multiplier: 2.5, weeks: '8-12' }
  ];

  const features = [
    { id: 'seo', name: 'SEO Optimization', price: 800 },
    { id: 'analytics', name: 'Analytics Setup', price: 400 },
    { id: 'booking', name: 'Booking System', price: 1500 },
    { id: 'multilingual', name: 'English + Chinese', price: 1200 },
    { id: 'mobile', name: 'Mobile App Version', price: 2500 },
    { id: 'maintenance', name: '6-month Maintenance', price: 1200 }
  ];

  const industries = [
    { id: 'fnb', name: 'F&B / Restaurant', adjustment: 0 },
    { id: 'retail', name: 'Retail / E-commerce', adjustment: 500 },
    { id: 'professional', name: 'Professional Services', adjustment: 300 },
    { id: 'healthcare', name: 'Healthcare / Wellness', adjustment: 800 },
    { id: 'education', name: 'Education / Training', adjustment: 200 },
    { id: 'tech', name: 'Tech / SaaS', adjustment: 1000 }
  ];

  $: selectedStyle, selectedScope, selectedFeatures, selectedIndustry, calculateEstimate();

  function calculateEstimate() {
    if (!selectedStyle || !selectedScope) {
      estimatedCost = 0;
      showResults = false;
      return;
    }

    const style = styles.find(s => s.id === selectedStyle);
    const scope = scopes.find(s => s.id === selectedScope);
    const industry = industries.find(i => i.id === selectedIndustry);

    if (style && scope) {
      let cost = style.basePrice * scope.multiplier;

      // Add features
      selectedFeatures.forEach(featureId => {
        const feature = features.find(f => f.id === featureId);
        if (feature) cost += feature.price;
      });

      // Industry adjustment
      if (industry) cost += industry.adjustment;

      estimatedCost = Math.round(cost);
      estimatedTimeline = scope.weeks;
      showResults = true;
    }
  }

  function toggleFeature(featureId) {
    if (selectedFeatures.includes(featureId)) {
      selectedFeatures = selectedFeatures.filter(id => id !== featureId);
    } else {
      selectedFeatures = [...selectedFeatures, featureId];
    }
  }

  function resetCalculator() {
    selectedStyle = '';
    selectedScope = '';
    selectedFeatures = [];
    selectedIndustry = '';
    showResults = false;
  }
</script>

<!-- Web Design Calculator Tool -->
<div class="bg-gradient-to-br from-lxk-cream/30 to-lxk-mint/20 rounded-3xl p-8 border border-lxk-sage/10">
  <div class="text-center mb-8">
    <div class="w-16 h-16 bg-gradient-to-br from-lxk-sage to-lxk-soft-teal rounded-2xl flex items-center justify-center mx-auto mb-4">
      <span class="text-2xl text-white">🎨</span>
    </div>
    <h3 class="text-2xl font-bold text-lxk-warm-gray mb-2">Website Project Calculator</h3>
    <p class="text-gray-600">Get an instant estimate for your Singapore business website</p>
  </div>

  <div class="space-y-8">
    <!-- Style Selection -->
    <fieldset>
      <legend class="text-lg font-semibold text-lxk-warm-gray mb-4">Choose Your Style</legend>
      <div class="grid md:grid-cols-2 gap-4">
        {#each styles as style (style.id)}
          <button
            on:click={() => selectedStyle = style.id}
            class="text-left p-4 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg {
              selectedStyle === style.id
                ? 'border-lxk-sage bg-lxk-sage/10 shadow-lg'
                : 'border-gray-200 hover:border-lxk-sage/50'
            }">
            <div class="font-semibold text-lxk-warm-gray mb-1">{style.name}</div>
            <div class="text-sm text-gray-600 mb-2">{style.description}</div>
            <div class="text-sm font-medium text-lxk-peach">From SGD ${style.basePrice.toLocaleString()}</div>
          </button>
        {/each}
      </div>
    </fieldset>

    <!-- Scope Selection -->
    <fieldset>
      <legend class="text-lg font-semibold text-lxk-warm-gray mb-4">Project Scope</legend>
      <div class="grid md:grid-cols-2 gap-4">
        {#each scopes as scope (scope.id)}
          <button
            on:click={() => selectedScope = scope.id}
            class="text-left p-4 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg {
              selectedScope === scope.id
                ? 'border-lxk-peach bg-lxk-peach/10 shadow-lg'
                : 'border-gray-200 hover:border-lxk-peach/50'
            }">
            <div class="font-semibold text-lxk-warm-gray mb-1">{scope.name}</div>
            <div class="text-sm text-gray-600 mb-2">{scope.description}</div>
            <div class="text-sm font-medium text-lxk-coral">{scope.weeks} weeks</div>
          </button>
        {/each}
      </div>
    </fieldset>

    <!-- Industry Selection -->
    <div>
      <label for="industry-select" class="block text-lg font-semibold text-lxk-warm-gray mb-4">Your Industry</label>
      <select
        id="industry-select"
        bind:value={selectedIndustry}
        class="w-full p-4 rounded-2xl border-2 border-gray-200 focus:border-lxk-sage focus:ring-2 focus:ring-lxk-sage/20 transition-all outline-none">
        <option value="">Select your industry</option>
        {#each industries as industry (industry.id)}
          <option value={industry.id}>{industry.name}</option>
        {/each}
      </select>
    </div>

    <!-- Additional Features -->
    <div>
      <div class="block text-lg font-semibold text-lxk-warm-gray mb-4">Additional Features</div>
      <div class="grid md:grid-cols-2 gap-3">
        {#each features as feature (feature.id)}
          <button
            on:click={() => toggleFeature(feature.id)}
            class="text-left p-3 rounded-xl border transition-all duration-200 hover:shadow-md {
              selectedFeatures.includes(feature.id)
                ? 'border-lxk-coral bg-lxk-coral/10 text-lxk-warm-gray'
                : 'border-gray-200 hover:border-lxk-coral/50'
            }">
            <div class="flex justify-between items-center">
              <span class="font-medium">{feature.name}</span>
              <span class="text-sm font-semibold">+SGD ${feature.price}</span>
            </div>
          </button>
        {/each}
      </div>
    </div>

    <!-- Results -->
    {#if showResults}
      <div class="bg-white rounded-3xl p-6 border-2 border-lxk-sage/20 shadow-lg">
        <div class="text-center mb-6">
          <h4 class="text-xl font-bold text-lxk-warm-gray mb-2">Your Project Estimate</h4>
          <div class="text-4xl font-bold text-lxk-sage mb-2">SGD ${estimatedCost.toLocaleString()}</div>
          <div class="text-lg text-lxk-coral font-medium">{estimatedTimeline} weeks timeline</div>
        </div>

        <div class="space-y-3 mb-6">
          <div class="flex justify-between py-2 border-b border-gray-100">
            <span class="text-gray-600">Base Package</span>
            <span class="font-semibold text-lxk-warm-gray">
              {styles.find(s => s.id === selectedStyle)?.name} + {scopes.find(s => s.id === selectedScope)?.name}
            </span>
          </div>
          {#if selectedFeatures.length > 0}
            <div class="text-sm text-gray-600">Additional Features:</div>
            {#each selectedFeatures as featureId (featureId)}
              <div class="flex justify-between py-1 pl-4">
                <span class="text-gray-600">{features.find(f => f.id === featureId)?.name}</span>
                <span class="text-lxk-coral">+SGD ${features.find(f => f.id === featureId)?.price}</span>
              </div>
            {/each}
          {/if}
        </div>

        <div class="flex gap-4">
          <button
            on:click={resetCalculator}
            class="flex-1 bg-gray-100 text-gray-700 py-3 rounded-2xl font-medium hover:bg-gray-200 transition-colors">
            Start Over
          </button>
          <a
            href="#contact?service=web-design&estimate={estimatedCost}&timeline={estimatedTimeline}"
            class="flex-1 bg-gradient-to-r from-lxk-sage to-lxk-soft-teal text-white py-3 rounded-2xl font-bold text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Get Detailed Quote
          </a>
        </div>
      </div>
    {/if}

    {#if !showResults && (selectedStyle || selectedScope)}
      <div class="text-center text-gray-500 text-sm">
        Select both style and scope to see your estimate
      </div>
    {/if}

    <!-- Screen reader live region for calculator updates -->
    <div aria-live="polite" aria-atomic="true" class="sr-only">
      {#if showResults}
        Estimate updated: SGD {estimatedCost.toLocaleString()} for {estimatedTimeline} delivery
      {/if}
    </div>
  </div>
</div>