<script>
  import { createEventDispatcher } from 'svelte';

  export let isOpen = false;
  export let title = 'Download Your Free Guide';
  export let description = 'Get instant access to our comprehensive resource';
  export let resourceName = 'Planning Guide';
  export let service = 'general';
  export let benefits = [
    'Expert insights and proven strategies',
    'Real Singapore market examples',
    'Actionable checklists and templates'
  ];

  const dispatch = createEventDispatcher();

  let formData = {
    email: '',
    firstName: '',
    company: '',
    projectType: ''
  };

  let isSubmitting = false;
  let isSuccess = false;

  function closeModal() {
    isOpen = false;
    dispatch('close');
  }

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

  async function handleSubmit() {
    isSubmitting = true;

    // Simulate API call - replace with actual implementation
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Track conversion event (add analytics tracking here)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'lead_magnet_download', {
        event_category: 'Lead Generation',
        event_label: service,
        value: 1
      });
    }

    isSuccess = true;
    isSubmitting = false;

    // Auto-close after success
    setTimeout(() => {
      closeModal();
      // Reset form after close
      setTimeout(() => {
        isSuccess = false;
        formData = { email: '', firstName: '', company: '', projectType: '' };
      }, 300);
    }, 2000);
  }
</script>

<!-- Modal Backdrop -->
{#if isOpen}
  <div
    class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    on:click={handleBackdropClick}
    on:keydown={handleKeydown}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    tabindex="-1">

    <!-- Modal Content -->
    <div class="bg-white rounded-3xl max-w-md w-full mx-4 shadow-2xl transform transition-all duration-300 scale-100">
      <!-- Close Button -->
      <button
        class="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
        on:click={closeModal}
        aria-label="Close modal">
        <span class="text-gray-600 text-lg">×</span>
      </button>

      {#if !isSuccess}
        <!-- Lead Magnet Form -->
        <div class="p-8">
          <!-- Header -->
          <div class="text-center mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-lxk-sage to-lxk-peach rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl text-white">📚</span>
            </div>
            <h3 id="modal-title" class="text-2xl font-bold text-lxk-warm-gray mb-2">{title}</h3>
            <p class="text-gray-600">{description}</p>
          </div>

          <!-- Resource Preview -->
          <div class="bg-gradient-to-br from-lxk-cream/50 to-lxk-mint/30 rounded-2xl p-4 mb-6">
            <h4 class="font-semibold text-lxk-warm-gray mb-3">🎁 {resourceName}</h4>
            <div class="space-y-2">
              {#each benefits as benefit (benefit)}
                <div class="flex items-start space-x-2">
                  <div class="w-2 h-2 bg-lxk-sage rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm text-gray-600">{benefit}</span>
                </div>
              {/each}
            </div>
          </div>

          <!-- Form -->
          <form on:submit|preventDefault={handleSubmit} class="space-y-4">
            <!-- Email (Required) -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span class="text-lxk-coral">*</span>
              </label>
              <input
                id="email"
                type="email"
                bind:value={formData.email}
                required
                placeholder="your.email@example.com"
                class="w-full p-3 rounded-2xl border border-gray-200 focus:border-lxk-sage focus:ring-2 focus:ring-lxk-sage/20 transition-all outline-none"
              />
            </div>

            <!-- First Name -->
            <div>
              <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                bind:value={formData.firstName}
                placeholder="Your first name"
                class="w-full p-3 rounded-2xl border border-gray-200 focus:border-lxk-sage focus:ring-2 focus:ring-lxk-sage/20 transition-all outline-none"
              />
            </div>

            <!-- Company (Optional) -->
            <div>
              <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                id="company"
                type="text"
                bind:value={formData.company}
                placeholder="Your company name"
                class="w-full p-3 rounded-2xl border border-gray-200 focus:border-lxk-sage focus:ring-2 focus:ring-lxk-sage/20 transition-all outline-none"
              />
            </div>

            <!-- Project Type (Service Specific) -->
            {#if service === 'web-design'}
              <div>
                <label for="projectType" class="block text-sm font-medium text-gray-700 mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  bind:value={formData.projectType}
                  class="w-full p-3 rounded-2xl border border-gray-200 focus:border-lxk-sage focus:ring-2 focus:ring-lxk-sage/20 transition-all outline-none">
                  <option value="">Select project type</option>
                  <option value="business-website">Business Website</option>
                  <option value="ecommerce">E-commerce Store</option>
                  <option value="portfolio">Portfolio Site</option>
                  <option value="booking-system">Booking System</option>
                  <option value="other">Other</option>
                </select>
              </div>
            {/if}

            <!-- Submit Button -->
            <button
              type="submit"
              disabled={isSubmitting || !formData.email}
              class="w-full bg-gradient-to-r from-lxk-sage to-lxk-soft-teal text-white py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105">
              {#if isSubmitting}
                <div class="flex items-center justify-center space-x-2">
                  <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Preparing Your Guide...</span>
                </div>
              {:else}
                Download Free Guide 📚
              {/if}
            </button>
          </form>

          <!-- Privacy Note -->
          <p class="text-xs text-gray-500 text-center mt-4">
            No spam, just valuable insights for Singapore businesses ✓<br>
            Unsubscribe anytime with one click
          </p>
        </div>
      {:else}
        <!-- Success State -->
        <div class="p-8 text-center">
          <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span class="text-3xl">✅</span>
          </div>
          <h3 class="text-2xl font-bold text-lxk-warm-gray mb-4">Success! Check Your Email</h3>
          <p class="text-gray-600 mb-6">
            We've sent your <strong>{resourceName}</strong> to {formData.email}.
            It should arrive within the next few minutes.
          </p>
          <div class="bg-lxk-cream/50 rounded-2xl p-4">
            <p class="text-sm text-gray-600">
              <strong>What's next?</strong><br>
              Want to discuss your project? We'd love to have a kopi session with you! ☕
            </p>
          </div>
        </div>
      {/if}
    </div>
  </div>
{/if}