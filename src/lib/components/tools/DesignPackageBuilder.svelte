<script>
  let selectedCategory = '';
  let selectedItems = [];
  let selectedStyle = '';
  let selectedRevisions = 'standard';
  let selectedRushOrder = false;
  let showResults = false;

  const categories = [
    {
      id: 'digital',
      name: 'Digital Assets',
      description: 'Social posts, web graphics, presentations',
      category: 'Digital'
    },
    {
      id: 'print',
      name: 'Print Design',
      description: 'Business cards, posters, packaging',
      category: 'Print'
    }
  ];

  const designItems = {
    digital: [
      { id: 'social-pack', name: 'Social Media Pack', price: 400, description: '10 post templates + story templates' },
      { id: 'presentation', name: 'Presentation Design', price: 500, description: '15-slide PowerPoint template' },
      { id: 'web-graphics', name: 'Web Graphics Set', price: 300, description: 'Icons, buttons, banners for website' },
      { id: 'email-template', name: 'Email Template', price: 200, description: 'HTML email design' },
      { id: 'infographic', name: 'Infographic', price: 450, description: 'Data visualization design' },
      { id: 'digital-ad', name: 'Digital Ad Set', price: 350, description: 'Google/Facebook ad variations' }
    ],
    print: [
      { id: 'packaging', name: 'Package Design', price: 600, description: 'Product packaging design' },
      { id: 'stationery', name: 'Stationery Set', price: 400, description: 'Business cards, letterhead, envelopes' },
      { id: 'signage', name: 'Signage Design', price: 350, description: 'Storefront or directional signage' },
      { id: 'book-cover', name: 'Book/Magazine Cover', price: 300, description: 'Publication cover design' },
      { id: 'label', name: 'Product Labels', price: 250, description: 'Product labeling design' },
      { id: 'poster', name: 'Large Format Poster', price: 400, description: 'A1 or larger poster design' }
    ]
  };

  const styles = [
    {
      id: 'singapore-modern',
      name: 'Singapore Modern',
      description: 'Clean, contemporary with local cultural elements',
      multiplier: 1.0,
      popular: true
    },
    {
      id: 'traditional-heritage',
      name: 'Traditional Heritage',
      description: 'Classic Singapore shophouse & heritage inspired',
      multiplier: 1.1
    },
    {
      id: 'minimalist-zen',
      name: 'Minimalist Zen',
      description: 'Simple, clean, focused design philosophy',
      multiplier: 0.9
    },
    {
      id: 'vibrant-tropical',
      name: 'Vibrant Tropical',
      description: 'Bold colors, energetic, Southeast Asian flair',
      multiplier: 1.2
    },
    {
      id: 'corporate-professional',
      name: 'Corporate Professional',
      description: 'Trustworthy, established, business-focused',
      multiplier: 1.0
    }
  ];

  const revisionOptions = [
    { id: 'basic', name: 'Basic (2 rounds)', multiplier: 1.0, description: 'Standard revision process' },
    { id: 'standard', name: 'Standard (3 rounds)', multiplier: 1.1, description: 'Most popular option', popular: true },
    { id: 'premium', name: 'Premium (5 rounds)', multiplier: 1.25, description: 'Maximum flexibility' }
  ];

  function toggleItem(itemId) {
    if (selectedItems.includes(itemId)) {
      selectedItems = selectedItems.filter(id => id !== itemId);
    } else {
      selectedItems = [...selectedItems, itemId];
    }
    calculateTotal();
  }

  function calculateTotal() {
    if (!selectedCategory || selectedItems.length === 0) {
      showResults = false;
      return;
    }

    let baseTotal = 0;
    const categoryItems = designItems[selectedCategory];

    selectedItems.forEach(itemId => {
      const item = categoryItems.find(i => i.id === itemId);
      if (item) {
        baseTotal += item.price;
      }
    });

    // Apply style multiplier
    const style = styles.find(s => s.id === selectedStyle);
    if (style) {
      baseTotal *= style.multiplier;
    }

    // Apply revision multiplier
    const revision = revisionOptions.find(r => r.id === selectedRevisions);
    if (revision) {
      baseTotal *= revision.multiplier;
    }

    // Rush order surcharge
    if (selectedRushOrder) {
      baseTotal *= 1.5;
    }

    showResults = true;
    return Math.round(baseTotal);
  }

  function resetBuilder() {
    selectedCategory = '';
    selectedItems = [];
    selectedStyle = '';
    selectedRevisions = 'standard';
    selectedRushOrder = false;
    showResults = false;
  }

  function getTimeline() {
    const itemCount = selectedItems.length;
    let weeks = Math.ceil(itemCount / 2); // Rough estimate: 2 items per week

    if (selectedRushOrder) {
      weeks = Math.ceil(weeks / 2); // Rush cuts time in half
    }

    return Math.max(1, weeks); // Minimum 1 week
  }

  $: totalPrice = selectedCategory && selectedItems.length > 0 ? calculateTotal() : 0;
  $: timeline = selectedItems.length > 0 ? getTimeline() : 1;
</script>

<!-- Design Package Builder Tool -->
<div class="bg-gradient-to-br from-lxk-sage/10 to-lxk-mint/10 rounded-3xl p-8 border border-lxk-sage/20">
  <div class="text-center mb-8">
    <div class="w-16 h-16 bg-gradient-to-br from-lxk-sage to-lxk-mint rounded-2xl flex items-center justify-center mx-auto mb-4">
      <span class="text-2xl text-white">🎨</span>
    </div>
    <h3 class="text-2xl font-bold text-lxk-warm-gray mb-2">Custom Design Package Builder</h3>
    <p class="text-gray-600">Build your perfect graphic design package with Singapore flair</p>
  </div>

  <div class="space-y-8">
    <!-- Category Selection -->
    <div>
      <h4 class="text-lg font-semibold text-lxk-warm-gray mb-4">1. Choose Your Design Category</h4>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {#each categories as category (category.id)}
          <button
            on:click={() => {selectedCategory = category.id; selectedItems = []; showResults = false;}}
            class="text-center p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg {
              selectedCategory === category.id
                ? 'border-lxk-sage bg-lxk-sage/10 shadow-lg'
                : 'border-gray-200 hover:border-lxk-sage/50'
            }">
            <div class="text-xs font-bold text-lxk-sage bg-lxk-sage/10 px-3 py-1 rounded-full mb-3 inline-block">{category.category}</div>
            <div class="font-semibold text-lxk-warm-gray mb-2">{category.name}</div>
            <div class="text-sm text-gray-600">{category.description}</div>
          </button>
        {/each}
      </div>
    </div>

    <!-- Design Items Selection -->
    {#if selectedCategory}
      <div>
        <h4 class="text-lg font-semibold text-lxk-warm-gray mb-4">2. Select Design Items</h4>
        <div class="grid md:grid-cols-2 gap-4">
          {#each designItems[selectedCategory] as item (item.id)}
            <button
              on:click={() => toggleItem(item.id)}
              class="text-left p-4 rounded-2xl border-2 transition-all duration-300 hover:shadow-md {
                selectedItems.includes(item.id)
                  ? 'border-lxk-peach bg-lxk-peach/10 shadow-md'
                  : 'border-gray-200 hover:border-lxk-peach/50'
              }">
              <div class="flex justify-between items-start mb-2">
                <div class="font-semibold text-lxk-warm-gray">{item.name}</div>
                <div class="text-lg font-bold text-lxk-peach">SGD ${item.price}</div>
              </div>
              <div class="text-sm text-gray-600">{item.description}</div>
              {#if selectedItems.includes(item.id)}
                <div class="mt-2 text-sm text-lxk-peach font-medium">✓ Added to package</div>
              {/if}
            </button>
          {/each}
        </div>
      </div>

      <!-- Style Selection -->
      <div>
        <h4 class="text-lg font-semibold text-lxk-warm-gray mb-4">3. Choose Design Style</h4>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {#each styles as style}
            <button
              on:click={() => selectedStyle = style.id}
              class="text-left p-4 rounded-2xl border-2 transition-all duration-300 hover:shadow-md relative {
                selectedStyle === style.id
                  ? 'border-lxk-coral bg-lxk-coral/10 shadow-md'
                  : 'border-gray-200 hover:border-lxk-coral/50'
              }">
              {#if style.popular}
                <div class="absolute -top-2 -right-2 bg-lxk-peach text-white text-xs px-2 py-1 rounded-full font-medium">
                  Popular
                </div>
              {/if}
              <div class="font-semibold text-lxk-warm-gray mb-1">{style.name}</div>
              <div class="text-sm text-gray-600 mb-2">{style.description}</div>
              <div class="text-xs text-lxk-coral">
                {style.multiplier === 1.0 ? 'Standard pricing' : style.multiplier > 1.0 ? `+${Math.round((style.multiplier - 1) * 100)}% premium` : `${Math.round((1 - style.multiplier) * 100)}% discount`}
              </div>
            </button>
          {/each}
        </div>
      </div>

      <!-- Options -->
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Revision Rounds -->
        <div>
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-4">4. Revision Rounds</h4>
          <div class="space-y-3">
            {#each revisionOptions as option}
              <button
                on:click={() => selectedRevisions = option.id}
                class="w-full text-left p-4 rounded-2xl border-2 transition-all duration-300 hover:shadow-md relative {
                  selectedRevisions === option.id
                    ? 'border-lxk-mint bg-lxk-mint/10 shadow-md'
                    : 'border-gray-200 hover:border-lxk-mint/50'
                }">
                {#if option.popular}
                  <div class="absolute -top-1 -right-1 bg-lxk-sage text-white text-xs px-2 py-1 rounded-full font-medium">
                    Most Popular
                  </div>
                {/if}
                <div class="font-semibold text-lxk-warm-gray">{option.name}</div>
                <div class="text-sm text-gray-600">{option.description}</div>
              </button>
            {/each}
          </div>
        </div>

        <!-- Rush Order -->
        <div>
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-4">5. Timeline Options</h4>
          <label class="flex items-start space-x-3 p-4 rounded-2xl border-2 border-gray-200 hover:border-lxk-coral/50 transition-colors cursor-pointer">
            <input
              type="checkbox"
              bind:checked={selectedRushOrder}
              class="mt-1 text-lxk-coral focus:ring-lxk-coral rounded"
            />
            <div>
              <div class="font-semibold text-lxk-warm-gray">Rush Order (+50%)</div>
              <div class="text-sm text-gray-600">Expedited delivery, priority handling</div>
              <div class="text-xs text-lxk-coral mt-1">⚡ Cut timeline in half!</div>
            </div>
          </label>

          {#if selectedItems.length > 0}
            <div class="mt-4 p-4 bg-lxk-cream/50 rounded-2xl">
              <div class="text-sm text-gray-600 mb-2">Estimated Timeline:</div>
              <div class="text-lg font-semibold text-lxk-sage">
                {timeline} week{timeline !== 1 ? 's' : ''}
                {#if selectedRushOrder}
                  <span class="text-sm text-lxk-coral">(Rush)</span>
                {/if}
              </div>
            </div>
          {/if}
        </div>
      </div>

      <!-- Results -->
      {#if showResults && totalPrice}
        <div class="bg-white rounded-3xl p-8 border-2 border-lxk-sage/20 shadow-lg">
          <h4 class="text-xl font-bold text-lxk-warm-gray mb-6 text-center">Your Custom Design Package</h4>

          <!-- Package Summary -->
          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <!-- Selected Items -->
            <div>
              <h5 class="font-semibold text-lxk-warm-gray mb-4">Package Contents:</h5>
              <div class="space-y-2">
                {#each selectedItems as itemId}
                  {@const item = designItems[selectedCategory].find(i => i.id === itemId)}
                  <div class="flex justify-between items-center py-2 border-b border-gray-100">
                    <span class="text-gray-700 text-sm">{item.name}</span>
                    <span class="font-medium text-lxk-sage">SGD ${item.price}</span>
                  </div>
                {/each}
              </div>

              {#if selectedStyle}
                <div class="mt-4 p-3 bg-lxk-cream/30 rounded-xl">
                  <div class="text-sm font-medium text-lxk-warm-gray">Design Style:</div>
                  <div class="text-sm text-gray-600">{styles.find(s => s.id === selectedStyle)?.name}</div>
                </div>
              {/if}
            </div>

            <!-- Pricing Breakdown -->
            <div class="bg-gradient-to-br from-lxk-sage/5 to-lxk-peach/5 rounded-2xl p-6">
              <div class="text-center mb-4">
                <div class="text-4xl font-bold text-lxk-sage mb-2">SGD ${totalPrice.toLocaleString()}</div>
                <div class="text-lg text-lxk-coral font-medium">{timeline} week{timeline !== 1 ? 's' : ''} delivery</div>
              </div>

              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-600">Items ({selectedItems.length}):</span>
                  <span class="text-gray-700">{selectedItems.length} designs</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Style:</span>
                  <span class="text-gray-700">{styles.find(s => s.id === selectedStyle)?.name || 'Not selected'}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Revisions:</span>
                  <span class="text-gray-700">{revisionOptions.find(r => r.id === selectedRevisions)?.name}</span>
                </div>
                {#if selectedRushOrder}
                  <div class="flex justify-between text-lxk-coral">
                    <span>Rush Order:</span>
                    <span>+50% surcharge</span>
                  </div>
                {/if}
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-4">
            <button
              on:click={resetBuilder}
              class="flex-1 bg-gray-100 text-gray-700 py-3 rounded-2xl font-medium hover:bg-gray-200 transition-colors">
              Start Over
            </button>
            <a
              href="#contact?service=graphic-design&package={selectedCategory}&items={selectedItems.length}&total={totalPrice}"
              class="flex-1 bg-gradient-to-r from-lxk-sage to-lxk-mint text-white py-3 rounded-2xl font-bold text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Request Quote
            </a>
          </div>

          <p class="text-xs text-gray-500 text-center mt-4">
            * Final pricing may vary based on specific requirements. Let's have a kopi session to discuss details! ☕
          </p>
        </div>
      {/if}
    {/if}
  </div>
</div>