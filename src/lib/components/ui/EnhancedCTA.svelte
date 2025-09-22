<script>
  import LeadMagnetModal from './LeadMagnetModal.svelte';

  export let service = 'consultation';
  export let primaryTitle = 'Ready to Start Your Project?';
  export let primaryDescription = 'Book a free 30-minute strategy session to discuss your goals';
  export let primaryCTA = 'Book Free Strategy Session →';
  export let primaryValue = 'Usually $200 value • Limited slots available';
  export let secondaryTitle = 'Not Ready to Talk?';
  export let secondaryDescription = 'Download our free guide with insider tips for your project';
  export let secondaryResource = 'Download Free Guide';
  export let leadMagnetTitle = '10 Questions to Ask Before Starting';
  export let leadMagnetBenefits = [
    'Expert insights and proven strategies',
    'Real Singapore market examples',
    'Actionable checklists and templates',
  ];

  let showLeadMagnet = false;

  function openLeadMagnet() {
    showLeadMagnet = true;
  }
</script>

<!-- Enhanced CTA Section with Two-Path Conversion -->
<section class="section-padding bg-gradient-to-br from-lxk-sage/5 to-lxk-peach/5">
  <div class="container-custom">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-lxk-warm-gray mb-4">
          Ready to Turn Your Vision into Reality?
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose your next step - we're here to support your journey as your trusted kakis ✨
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- Primary CTA - High Intent -->
        <div class="relative">
          <div
            class="absolute -inset-0.5 bg-gradient-to-r from-lxk-sage to-lxk-soft-teal rounded-3xl blur opacity-20"
          ></div>
          <div
            class="relative bg-gradient-to-br from-lxk-sage to-lxk-soft-teal rounded-3xl p-8 text-white transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <div class="absolute top-4 right-4">
              <div class="w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
            </div>

            <div class="text-center space-y-6">
              <div class="text-4xl mb-4">🚀</div>
              <h3 class="text-2xl font-bold">{primaryTitle}</h3>
              <p class="opacity-90 leading-relaxed">{primaryDescription}</p>

              <!-- Urgency Element -->
              <div class="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
                <div class="text-sm font-medium mb-2">🔥 January Special Offer</div>
                <div class="text-sm opacity-90">
                  Save 20% on any package • Only 3 spots left this month
                </div>
              </div>

              <a
                href="#contact?service={service}&type=consultation&offer=jan2025"
                class="inline-flex items-center justify-center w-full bg-white text-lxk-sage px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <span>{primaryCTA}</span>
                <div
                  class="ml-3 w-6 h-6 bg-lxk-sage/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                >
                  <span class="text-sm">→</span>
                </div>
              </a>

              <p class="text-sm opacity-75">{primaryValue}</p>
            </div>
          </div>
        </div>

        <!-- Secondary CTA - Lead Magnet -->
        <div
          class="painterly-card p-8 hover:shadow-xl transition-all duration-300 border border-lxk-sage/10"
        >
          <div class="text-center space-y-6">
            <div class="text-4xl mb-4">📚</div>
            <h3 class="text-xl font-bold text-lxk-warm-gray">{secondaryTitle}</h3>
            <p class="text-gray-600 leading-relaxed">{secondaryDescription}</p>

            <!-- Lead Magnet Preview -->
            <div class="bg-lxk-cream/50 rounded-2xl p-4 text-left">
              <div class="font-semibold text-lxk-warm-gray text-sm mb-2">Free Resource:</div>
              <div class="text-lxk-coral font-medium">{leadMagnetTitle}</div>
              <div class="text-xs text-gray-600 mt-2">
                ✓ Expert insights ✓ Real examples ✓ Actionable checklist
              </div>
            </div>

            <!-- Lead Magnet Button -->
            <button
              on:click={openLeadMagnet}
              class="w-full bg-lxk-peach text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-lxk-coral transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {secondaryResource}
            </button>

            <p class="text-xs text-gray-500">
              No spam, just valuable insights for Singapore businesses ✓
            </p>
          </div>
        </div>
      </div>

      <!-- Trust Signals -->
      <div class="mt-12 text-center">
        <div class="flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-lxk-sage rounded-full"></div>
            <span class="text-sm text-gray-600">Singapore businesses trust us</span>
          </div>
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-lxk-peach rounded-full"></div>
            <span class="text-sm text-gray-600">Average 6-week delivery</span>
          </div>
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-lxk-coral rounded-full"></div>
            <span class="text-sm text-gray-600">100% satisfaction guarantee</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Lead Magnet Modal -->
<LeadMagnetModal
  bind:isOpen={showLeadMagnet}
  {service}
  title="Get Your Free {leadMagnetTitle}"
  description={secondaryDescription}
  resourceName={leadMagnetTitle}
  benefits={leadMagnetBenefits}
/>
