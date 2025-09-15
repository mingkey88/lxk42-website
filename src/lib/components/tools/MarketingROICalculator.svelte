<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  let monthlyRevenue = '';
  let conversionRate = '';
  let averageOrderValue = '';
  let marketingBudget = '';
  let industry = '';
  let businessType = '';

  let showResults = false;
  let results = {};

  // Animated values for visual impact
  const animatedROI = tweened(0, { duration: 1500, easing: cubicOut });
  const animatedRevenue = tweened(0, { duration: 2000, easing: cubicOut });
  const animatedLeads = tweened(0, { duration: 1800, easing: cubicOut });

  const industries = [
    { id: 'fnb', name: 'F&B / Restaurant', conversionBoost: 1.2, avgCPC: 1.50 },
    { id: 'retail', name: 'Fashion / Retail', conversionBoost: 1.15, avgCPC: 2.20 },
    { id: 'professional', name: 'Professional Services', conversionBoost: 1.3, avgCPC: 4.50 },
    { id: 'healthcare', name: 'Healthcare / Beauty', conversionBoost: 1.25, avgCPC: 3.80 },
    { id: 'education', name: 'Education / Training', conversionBoost: 1.1, avgCPC: 2.80 },
    { id: 'tech', name: 'Tech / SaaS', conversionBoost: 1.4, avgCPC: 6.20 }
  ];

  const businessTypes = [
    { id: 'new', name: 'New Business (< 1 year)', riskFactor: 0.7, growthPotential: 2.5 },
    { id: 'growing', name: 'Growing Business (1-3 years)', riskFactor: 0.85, growthPotential: 1.8 },
    { id: 'established', name: 'Established Business (3+ years)', riskFactor: 0.95, growthPotential: 1.3 }
  ];

  function calculateROI() {
    if (!monthlyRevenue || !conversionRate || !averageOrderValue || !marketingBudget || !industry || !businessType) {
      showResults = false;
      return;
    }

    const revenue = parseFloat(monthlyRevenue);
    const currentConversion = parseFloat(conversionRate) / 100;
    const aov = parseFloat(averageOrderValue);
    const budget = parseFloat(marketingBudget);

    const selectedIndustry = industries.find(i => i.id === industry);
    const selectedBusinessType = businessTypes.find(b => b.id === businessType);

    // Calculate improved metrics with our optimization
    const improvedConversion = currentConversion * selectedIndustry.conversionBoost;
    const currentTraffic = revenue / (aov * currentConversion);

    // Estimate additional traffic from budget (conservative)
    const additionalClicks = (budget * 0.7) / selectedIndustry.avgCPC; // 70% of budget goes to ads
    const totalTraffic = currentTraffic + additionalClicks;

    // New revenue calculation
    const newRevenue = totalTraffic * improvedConversion * aov * selectedBusinessType.riskFactor;
    const additionalRevenue = newRevenue - revenue;
    const roi = ((additionalRevenue - budget) / budget) * 100;

    // Calculate leads (assuming 1 purchase per 10 leads on average)
    const estimatedLeads = additionalClicks * improvedConversion * 10;

    // 6-month projection with growth
    const sixMonthRevenue = additionalRevenue * 6 * selectedBusinessType.growthPotential;

    results = {
      currentRevenue: revenue,
      projectedRevenue: newRevenue,
      additionalRevenue: additionalRevenue,
      roi: Math.max(roi, -100), // Cap at -100%
      estimatedLeads: Math.round(estimatedLeads),
      sixMonthProjection: sixMonthRevenue,
      investmentRecovery: budget > 0 ? Math.ceil(budget / Math.max(additionalRevenue, 1)) : 0
    };

    // Animate the results
    animatedROI.set(results.roi);
    animatedRevenue.set(results.additionalRevenue);
    animatedLeads.set(results.estimatedLeads);

    showResults = true;
  }

  function resetCalculator() {
    monthlyRevenue = '';
    conversionRate = '';
    averageOrderValue = '';
    marketingBudget = '';
    industry = '';
    businessType = '';
    showResults = false;
    animatedROI.set(0);
    animatedRevenue.set(0);
    animatedLeads.set(0);
  }
</script>

<!-- Marketing ROI Calculator Tool -->
<div class="bg-gradient-to-br from-lxk-peach/10 to-lxk-coral/10 rounded-3xl p-8 border border-lxk-peach/20">
  <div class="text-center mb-8">
    <div class="w-16 h-16 bg-gradient-to-br from-lxk-peach to-lxk-coral rounded-2xl flex items-center justify-center mx-auto mb-4">
      <span class="text-2xl text-white">📈</span>
    </div>
    <h3 class="text-2xl font-bold text-lxk-warm-gray mb-2">Digital Marketing ROI Forecaster</h3>
    <p class="text-gray-600">See your potential return with our Singapore-focused marketing strategies</p>
  </div>

  <div class="space-y-6">
    <div class="grid md:grid-cols-2 gap-6">
      <!-- Current Business Metrics -->
      <div>
        <label for="revenue" class="block text-sm font-semibold text-lxk-warm-gray mb-2">
          Monthly Revenue (SGD)
        </label>
        <input
          id="revenue"
          type="number"
          bind:value={monthlyRevenue}
          on:input={calculateROI}
          placeholder="15000"
          class="w-full p-4 rounded-2xl border-2 border-gray-200 focus:border-lxk-peach focus:ring-2 focus:ring-lxk-peach/20 transition-all outline-none"
        />
      </div>

      <div>
        <label for="conversion" class="block text-sm font-semibold text-lxk-warm-gray mb-2">
          Current Conversion Rate (%)
        </label>
        <input
          id="conversion"
          type="number"
          step="0.1"
          bind:value={conversionRate}
          on:input={calculateROI}
          placeholder="2.5"
          class="w-full p-4 rounded-2xl border-2 border-gray-200 focus:border-lxk-peach focus:ring-2 focus:ring-lxk-peach/20 transition-all outline-none"
        />
      </div>

      <div>
        <label for="aov" class="block text-sm font-semibold text-lxk-warm-gray mb-2">
          Average Order Value (SGD)
        </label>
        <input
          id="aov"
          type="number"
          bind:value={averageOrderValue}
          on:input={calculateROI}
          placeholder="85"
          class="w-full p-4 rounded-2xl border-2 border-gray-200 focus:border-lxk-peach focus:ring-2 focus:ring-lxk-peach/20 transition-all outline-none"
        />
      </div>

      <div>
        <label for="budget" class="block text-sm font-semibold text-lxk-warm-gray mb-2">
          Monthly Marketing Budget (SGD)
        </label>
        <input
          id="budget"
          type="number"
          bind:value={marketingBudget}
          on:input={calculateROI}
          placeholder="3000"
          class="w-full p-4 rounded-2xl border-2 border-gray-200 focus:border-lxk-peach focus:ring-2 focus:ring-lxk-peach/20 transition-all outline-none"
        />
      </div>
    </div>

    <!-- Industry & Business Type -->
    <div class="grid md:grid-cols-2 gap-6">
      <div>
        <label for="industry-select" class="block text-sm font-semibold text-lxk-warm-gray mb-2">
          Your Industry
        </label>
        <select
          id="industry-select"
          bind:value={industry}
          on:change={calculateROI}
          class="w-full p-4 rounded-2xl border-2 border-gray-200 focus:border-lxk-peach focus:ring-2 focus:ring-lxk-peach/20 transition-all outline-none">
          <option value="">Select your industry</option>
          {#each industries as industryOption (industryOption.id)}
            <option value={industryOption.id}>{industryOption.name}</option>
          {/each}
        </select>
      </div>

      <div>
        <label for="business-type" class="block text-sm font-semibold text-lxk-warm-gray mb-2">
          Business Stage
        </label>
        <select
          id="business-type"
          bind:value={businessType}
          on:change={calculateROI}
          class="w-full p-4 rounded-2xl border-2 border-gray-200 focus:border-lxk-peach focus:ring-2 focus:ring-lxk-peach/20 transition-all outline-none">
          <option value="">Select business stage</option>
          {#each businessTypes as type (type.id)}
            <option value={type.id}>{type.name}</option>
          {/each}
        </select>
      </div>
    </div>

    <!-- Results -->
    {#if showResults}
      <div class="bg-white rounded-3xl p-6 border-2 border-lxk-peach/20 shadow-lg">
        <h4 class="text-xl font-bold text-lxk-warm-gray mb-6 text-center">Your Marketing Forecast</h4>

        <!-- Key Metrics Grid -->
        <div class="grid md:grid-cols-3 gap-6 mb-6">
          <div class="text-center">
            <div class="text-3xl font-bold text-lxk-peach mb-2">
              {Math.round($animatedROI)}%
            </div>
            <div class="text-sm font-medium text-gray-600">ROI (First Month)</div>
          </div>

          <div class="text-center">
            <div class="text-3xl font-bold text-lxk-coral mb-2">
              SGD {Math.round($animatedRevenue).toLocaleString()}
            </div>
            <div class="text-sm font-medium text-gray-600">Additional Monthly Revenue</div>
          </div>

          <div class="text-center">
            <div class="text-3xl font-bold text-lxk-sage mb-2">
              {Math.round($animatedLeads)}
            </div>
            <div class="text-sm font-medium text-gray-600">New Leads/Month</div>
          </div>
        </div>

        <!-- Detailed Breakdown -->
        <div class="bg-lxk-cream/30 rounded-2xl p-4 mb-6">
          <div class="text-sm font-semibold text-lxk-warm-gray mb-3">Projection Details:</div>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-600">Current Monthly Revenue:</span>
              <span class="font-medium">SGD {results.currentRevenue?.toLocaleString()}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Projected Monthly Revenue:</span>
              <span class="font-medium text-lxk-peach">SGD {results.projectedRevenue?.toLocaleString()}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">6-Month Revenue Growth:</span>
              <span class="font-medium text-lxk-coral">SGD {results.sixMonthProjection?.toLocaleString()}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Investment Recovery:</span>
              <span class="font-medium">{results.investmentRecovery} month{results.investmentRecovery !== 1 ? 's' : ''}</span>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-4">
          <button
            on:click={resetCalculator}
            class="flex-1 bg-gray-100 text-gray-700 py-3 rounded-2xl font-medium hover:bg-gray-200 transition-colors">
            Try Different Numbers
          </button>
          <a
            href="#/contact?service=digital-marketing&budget={marketingBudget}&industry={industry}"
            class="flex-1 bg-gradient-to-r from-lxk-peach to-lxk-coral text-white py-3 rounded-2xl font-bold text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Get Marketing Strategy
          </a>
        </div>

        <!-- Disclaimer -->
        <p class="text-xs text-gray-500 text-center mt-4">
          * Projections based on Singapore market data and our client results. Actual results may vary.
        </p>
      </div>
    {/if}

    {#if !showResults && (monthlyRevenue || conversionRate || averageOrderValue || marketingBudget)}
      <div class="text-center text-gray-500 text-sm">
        Fill in all fields to see your marketing forecast
      </div>
    {/if}
  </div>
</div>