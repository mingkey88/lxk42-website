<script>
  export let title = '';
</script>

<div class="painterly-card overflow-hidden">
  <div
    class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-lxk-cream/80 to-white border-b border-lxk-sage/10"
  >
    <span class="w-3 h-3 rounded-full bg-red-400/80"></span>
    <span class="w-3 h-3 rounded-full bg-yellow-400/80"></span>
    <span class="w-3 h-3 rounded-full bg-green-400/80"></span>
    <div class="ml-3 text-xs text-gray-500 truncate">{title}</div>
  </div>
  <div class="p-4 md:p-6 bg-white">
    <slot />
  </div>
</div>
