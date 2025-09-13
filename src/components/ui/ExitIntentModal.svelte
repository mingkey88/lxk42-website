<script>
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let isVisible = false;
  let hasShown = false;
  let isSubmitting = false;
  let isSuccess = false;
  let email = '';

  // Only show once per session
  const EXIT_INTENT_KEY = 'lxk42_exit_intent_shown';

  onMount(() => {
    // Check if already shown this session
    if (sessionStorage.getItem(EXIT_INTENT_KEY)) {
      return;
    }

    let exitIntentTriggered = false;

    // Track mouse movement for exit intent
    function handleMouseLeave(event) {
      // Only trigger if mouse is leaving from the top of the page
      if (event.clientY <= 5 && !exitIntentTriggered && !hasShown) {
        exitIntentTriggered = true;
        hasShown = true;
        isVisible = true;
        sessionStorage.setItem(EXIT_INTENT_KEY, 'true');

        // Analytics tracking
        if (typeof gtag !== 'undefined') {
          gtag('event', 'exit_intent_triggered', {
            event_category: 'User Behavior',
            event_label: 'Exit Intent Modal'
          });
        }
      }
    }

    // Alternative trigger: after 45 seconds on page
    const timeoutTrigger = setTimeout(() => {
      if (!hasShown && !sessionStorage.getItem(EXIT_INTENT_KEY)) {
        hasShown = true;
        isVisible = true;
        sessionStorage.setItem(EXIT_INTENT_KEY, 'true');

        if (typeof gtag !== 'undefined') {
          gtag('event', 'time_based_exit_intent', {
            event_category: 'User Behavior',
            event_label: 'Exit Intent Modal - Time Based'
          });
        }
      }
    }, 45000);

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeoutTrigger);
    };
  });

  function closeModal() {
    isVisible = false;
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
    if (!email) return;

    isSubmitting = true;

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Track conversion
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exit_intent_conversion', {
        event_category: 'Lead Generation',
        event_label: 'Exit Intent Email Capture',
        value: 1
      });
    }

    isSuccess = true;
    isSubmitting = false;

    // Auto close after success
    setTimeout(() => {
      closeModal();
      // Reset after close animation
      setTimeout(() => {
        isSuccess = false;
        email = '';
      }, 300);
    }, 3000);
  }
</script>

<!-- Exit Intent Modal -->
{#if isVisible}
  <div
    class="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fadeIn"
    on:click={handleBackdropClick}
    on:keydown={handleKeydown}
    role="dialog"
    aria-modal="true"
    aria-labelledby="exit-modal-title"
    tabindex="-1">

    <div class="bg-white rounded-3xl max-w-sm w-full mx-4 shadow-2xl transform animate-slideUp">
      <!-- Close Button -->
      <button
        class="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10 text-gray-600 hover:text-gray-800"
        on:click={closeModal}
        aria-label="Close modal">
        <span class="text-xl">×</span>
      </button>

      {#if !isSuccess}
        <!-- Main Content -->
        <div class="p-6 text-center">
          <!-- Attention-grabbing header -->
          <div class="mb-4">
            <div class="w-16 h-16 bg-gradient-to-br from-lxk-coral to-lxk-peach rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-2xl text-white">👋</span>
            </div>
            <h3 id="exit-modal-title" class="text-xl font-bold text-lxk-warm-gray mb-2">
              Wait! Don't Leave Empty-Handed
            </h3>
            <p class="text-gray-600 text-sm">
              Get our <strong>Singapore Business Digital Checklist</strong> — see how your website stacks up!
            </p>
          </div>

          <!-- Value proposition -->
          <div class="bg-gradient-to-br from-lxk-cream/50 to-lxk-mint/30 rounded-2xl p-4 mb-4 text-left">
            <h4 class="font-semibold text-lxk-warm-gray mb-3 text-center text-sm">🎁 Free Checklist (Worth $200)</h4>
            <div class="space-y-2 text-xs">
              <div class="flex items-center space-x-2">
                <div class="w-1.5 h-1.5 bg-lxk-sage rounded-full flex-shrink-0"></div>
                <span class="text-gray-600">25-point website audit checklist</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-1.5 h-1.5 bg-lxk-peach rounded-full flex-shrink-0"></div>
                <span class="text-gray-600">Local competitor comparison guide</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-1.5 h-1.5 bg-lxk-coral rounded-full flex-shrink-0"></div>
                <span class="text-gray-600">Quick win recommendations</span>
              </div>
            </div>
          </div>

          <!-- Email capture form -->
          <form on:submit|preventDefault={handleSubmit} class="space-y-3">
            <div class="relative">
              <input
                bind:value={email}
                type="email"
                placeholder="your.email@company.com"
                required
                class="w-full p-3 pr-10 rounded-2xl border-2 border-lxk-sage/30 focus:border-lxk-sage focus:ring-2 focus:ring-lxk-sage/20 transition-all outline-none text-center"
              />
              <div class="absolute right-3 top-1/2 transform -translate-y-1/2 text-lxk-sage">
                <span class="text-lg">✉️</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !email}
              class="w-full bg-gradient-to-r from-lxk-coral to-lxk-peach text-white py-3 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105">
              {#if isSubmitting}
                <div class="flex items-center justify-center space-x-2">
                  <div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span class="text-sm">Sending...</span>
                </div>
              {:else}
                Get Free Checklist 🚀
              {/if}
            </button>
          </form>

          <!-- Trust and urgency -->
          <div class="mt-4 space-y-2">
            <p class="text-xs text-gray-500">
              No spam • 450+ downloads • ⭐ 4.9/5 rating
            </p>

            <!-- Alternative action -->
            <div class="pt-3 border-t border-gray-200">
              <a
                href="#/contact?source=exit-intent"
                on:click={closeModal}
                class="text-sm text-lxk-sage hover:text-lxk-soft-teal font-medium transition-colors">
                Or book a free call instead →
              </a>
            </div>
          </div>
        </div>
      {:else}
        <!-- Success State -->
        <div class="p-6 text-center">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">🎉</span>
          </div>
          <h3 class="text-lg font-bold text-lxk-warm-gray mb-3">Check Your Email!</h3>
          <p class="text-gray-600 text-sm mb-4">
            Your <strong>Digital Checklist</strong> is on its way to {email}
          </p>
          <div class="bg-lxk-cream/50 rounded-2xl p-4">
            <p class="text-sm text-gray-600">
              <strong>What's next?</strong> After reviewing, we'd love to help implement the recommendations. Book a free consultation! ☕
            </p>
          </div>
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }

  .animate-slideUp {
    animation: slideUp 0.4s ease-out;
  }
</style>