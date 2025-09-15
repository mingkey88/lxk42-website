<script>
  const colors = [
    { name: 'Sage', class: 'bg-lxk-sage' },
    { name: 'Mint', class: 'bg-lxk-mint' },
    { name: 'Peach', class: 'bg-lxk-peach' },
    { name: 'Coral', class: 'bg-lxk-coral' },
    { name: 'Cream', class: 'bg-lxk-cream border' }
  ];
</script>

<section class="painterly-card p-6 md:p-8">
  <div class="grid md:grid-cols-2 gap-8">
    <!-- Buttons & Inputs -->
    <div class="space-y-6">
      <div>
        <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">Buttons</h4>
        <div class="flex flex-wrap gap-3">
          <button class="btn-primary">Primary Action</button>
          <button class="px-6 py-3 rounded-full font-medium border border-lxk-sage/30 text-lxk-sage hover:bg-lxk-sage/10 transition">Secondary</button>
          <button class="px-6 py-3 rounded-full font-medium bg-lxk-cream text-lxk-warm-gray hover:bg-lxk-cream/80 transition">Ghost</button>
        </div>
      </div>

      <div>
        <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">Inputs</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input class="rounded-xl border-gray-300 focus:border-lxk-sage focus:ring-lxk-sage" placeholder="Your name" />
          <input class="rounded-xl border-gray-300 focus:border-lxk-sage focus:ring-lxk-sage" placeholder="Email" />
          <input class="rounded-xl border-gray-300 focus:border-lxk-sage focus:ring-lxk-sage md:col-span-2" placeholder="Website" />
        </div>
      </div>
    </div>

    <!-- Colors & Typography -->
    <div class="space-y-6">
      <div>
        <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">Brand Colors</h4>
        <div class="flex flex-wrap gap-3">
          {#each colors as c}
            <div class="w-24">
              <div class={`h-10 rounded-xl shadow-inner border border-black/5 ${c.class}`}></div>
              <div class="text-xs text-gray-600 mt-1">{c.name}</div>
            </div>
          {/each}
        </div>
      </div>

      <div>
        <h4 class="text-lg font-semibold text-lxk-warm-gray mb-3">Typography</h4>
        <div class="rounded-2xl border border-lxk-sage/10 p-4 bg-gradient-to-br from-white to-lxk-cream/40">
          <div class="text-3xl font-extrabold text-lxk-warm-gray">Aa</div>
          <div class="text-sm text-gray-600">Inter — clean, friendly, approachable</div>
        </div>
      </div>
    </div>
  </div>
</section>

