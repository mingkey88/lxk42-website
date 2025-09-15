<script>
  export let packages = [];
  export let serviceType = '';

  let selectedPackage = null;

  function selectPackage(packageId) {
    selectedPackage = selectedPackage === packageId ? null : packageId;
  }

  function getPackageColor(tier) {
    const colors = {
      starter: 'from-lxk-mint to-lxk-sage',
      professional: 'from-lxk-sage to-lxk-soft-teal',
      enterprise: 'from-lxk-soft-teal to-lxk-coral'
    };
    return colors[tier] || colors.professional;
  }

  function formatPrice(price) {
    if (typeof price === 'string') return price;
    return `$${price.toLocaleString()}`;
  }
</script>

<!-- Service Packages Section -->
<section class="section-padding bg-gradient-to-br from-white to-lxk-cream/30">
  <div class="container-custom">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-lxk-warm-gray mb-4">
        Service Packages
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Choose the perfect package for your journey together 🎯
      </p>
    </div>

    {#if packages.length > 0}
      <div class="grid md:grid-cols-{packages.length === 2 ? '2' : '3'} gap-8 max-w-6xl mx-auto">
        {#each packages as pkg (pkg.id)}
          <div class="relative group">
            <!-- Popular badge -->
            {#if pkg.popular}
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <span class="bg-gradient-to-r from-lxk-peach to-lxk-coral text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular 🌟
                </span>
              </div>
            {/if}

            <!-- Package Card -->
            <div class="relative h-full painterly-card p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 {pkg.popular ? 'ring-2 ring-lxk-peach/30' : ''}">
              <!-- Background Gradient -->
              <div class="absolute inset-0 bg-gradient-to-br {getPackageColor(pkg.tier)} opacity-5 rounded-2xl"></div>

              <div class="relative z-10">
                <!-- Package Header -->
                <div class="text-center mb-8">
                  <div class="inline-flex px-4 py-2 mx-auto mb-4 bg-gradient-to-r {getPackageColor(pkg.tier)} rounded-full">
                    <span class="text-white text-sm font-semibold tracking-wider uppercase">{pkg.tier_badge}</span>
                  </div>
                  <h3 class="text-2xl font-bold text-lxk-warm-gray mb-2">{pkg.name}</h3>
                  <p class="text-gray-600 mb-4">{pkg.description}</p>

                  <!-- Pricing -->
                  <div class="mb-6">
                    <div class="text-3xl font-bold text-lxk-sage">
                      {formatPrice(pkg.price)}
                    </div>
                    {#if pkg.timeline}
                      <div class="text-sm text-gray-500 mt-1">
                        {pkg.timeline}
                      </div>
                    {/if}
                  </div>
                </div>

                <!-- Features List -->
                <div class="space-y-3 mb-8">
                  {#each pkg.features as feature}
                    <div class="flex items-start gap-3">
                      <div class="w-5 h-5 bg-lxk-sage/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg class="w-3 h-3 text-lxk-sage" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  {/each}
                </div>

                <!-- What's Included (if expanded) -->
                {#if pkg.included && selectedPackage === pkg.id}
                  <div class="mb-8 p-4 bg-lxk-cream/50 rounded-xl">
                    <h4 class="font-semibold text-lxk-warm-gray mb-3">What's Included:</h4>
                    <div class="space-y-2">
                      {#each pkg.included as item}
                        <div class="flex items-start gap-2 text-sm text-gray-600">
                          <span class="text-lxk-coral">•</span>
                          <span>{item}</span>
                        </div>
                      {/each}
                    </div>
                  </div>
                {/if}

                <!-- Deliverables Preview -->
                {#if pkg.deliverables}
                  <div class="mb-8">
                    <h4 class="font-semibold text-lxk-warm-gray mb-3">Key Deliverables:</h4>
                    <div class="grid grid-cols-2 gap-2">
                      {#each pkg.deliverables.slice(0, 4) as deliverable}
                        <div class="text-sm text-gray-600 flex items-center gap-2">
                          <span class="w-2 h-2 bg-lxk-sage rounded-full"></span>
                          {deliverable}
                        </div>
                      {/each}
                    </div>
                    {#if pkg.deliverables.length > 4}
                      <button
                        class="text-sm text-lxk-coral hover:text-lxk-peach transition-colors mt-2"
                        on:click={() => selectPackage(pkg.id)}
                      >
                        {selectedPackage === pkg.id ? 'Show less' : `+${pkg.deliverables.length - 4} more`}
                      </button>
                    {/if}
                  </div>
                {/if}

                <!-- Action Buttons -->
                <div class="space-y-3">
                  <button class="w-full bg-gradient-to-r {getPackageColor(pkg.tier)} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                    Choose {pkg.name}
                  </button>

                  {#if pkg.included}
                    <button
                      class="w-full text-lxk-sage hover:text-lxk-warm-gray transition-colors py-2 text-sm font-medium"
                      on:click={() => selectPackage(pkg.id)}
                    >
                      {selectedPackage === pkg.id ? 'Hide Details' : 'View Full Details'}
                    </button>
                  {/if}
                </div>

                <!-- Best For -->
                {#if pkg.bestFor}
                  <div class="mt-6 p-3 bg-gray-50 rounded-lg">
                    <div class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Best For:</div>
                    <div class="text-sm text-gray-700">{pkg.bestFor}</div>
                  </div>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>

      <!-- Custom Package CTA -->
      <div class="text-center mt-12">
        <div class="inline-block p-6 bg-gradient-to-br from-lxk-cream to-white rounded-2xl shadow-lg">
          <h3 class="text-xl font-semibold text-lxk-warm-gray mb-2">
            Need Something Different? 🤝
          </h3>
          <p class="text-gray-600 mb-4 max-w-md">
            Every kaki is unique! Let's chat about a custom package that perfectly fits your vision.
          </p>
          <button class="bg-gradient-to-r from-lxk-sage to-lxk-soft-teal text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            Let's Design Together →
          </button>
        </div>
      </div>
    {/if}
  </div>
</section>

<style>
  .painterly-card {
    background: linear-gradient(135deg, #ffffff 0%, #f9f7f4 100%);
    border-radius: 24px;
    box-shadow:
      0 8px 32px rgba(143, 166, 142, 0.1),
      0 2px 8px rgba(143, 166, 142, 0.05);
    border: 1px solid rgba(143, 166, 142, 0.1);
  }
</style>