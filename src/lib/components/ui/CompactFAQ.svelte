<script>
  export let faqs = [];

  let openIndex = null;

  function toggleFAQ(index) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<!-- Visual-First FAQ Section -->
<section class="section-padding bg-gradient-to-br from-lxk-cream/10 via-white to-lxk-mint/5">
  <div class="container-custom">
    <!-- Simplified header -->
    <div class="text-center mb-12">
      <h2 class="text-4xl lg:text-6xl font-bold text-lxk-warm-gray mb-6 leading-tight">
        Got <span class="text-lxk-peach">Questions?</span>
      </h2>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Quick answers to help you make the right decision for your project.
      </p>
    </div>

    <!-- Compact Dropdown FAQs -->
    <div class="max-w-3xl mx-auto space-y-4">
      {#each faqs as faq, index}
        <div
          class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
        >
          <button
            class="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-lxk-cream/20 transition-colors duration-200"
            on:click={() => toggleFAQ(index)}
          >
            <h3 class="text-lg font-semibold text-lxk-warm-gray pr-4">{faq.question}</h3>
            <div
              class="flex-shrink-0 w-8 h-8 bg-lxk-sage/10 rounded-full flex items-center justify-center transition-transform duration-200 {openIndex ===
              index
                ? 'rotate-180'
                : ''}"
            >
              <svg
                class="w-4 h-4 text-lxk-sage"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </button>

          {#if openIndex === index}
            <div class="px-6 pb-6 pt-4">
              <div class="text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Simple CTA -->
    <div class="text-center mt-12">
      <p class="text-gray-600 mb-6">Still have questions? Let's chat over kopi!</p>
      <a
        href="#contact"
        class="inline-flex items-center bg-lxk-sage text-white px-8 py-4 rounded-full hover:bg-lxk-soft-teal transition-all duration-300 font-medium text-lg group"
      >
        Get in Touch
        <div
          class="ml-3 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform"
        >
          <span class="text-sm">→</span>
        </div>
      </a>
    </div>
  </div>
</section>
