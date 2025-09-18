<script>
  export let projects = [];
</script>

<div class="relative">
  <div
    class="flex gap-4 overflow-x-auto py-2 px-1 scroll-smooth no-scrollbar snap-x snap-mandatory"
  >
    {#each projects as project (project.id)}
      <div class="min-w-[280px] max-w-[320px] snap-start">
        <div class="painterly-card p-6 h-full flex flex-col">
          <div class="text-xs text-gray-500 mb-2">{project.industry} • {project.year}</div>
          <h4 class="text-lg font-semibold text-lxk-warm-gray mb-2">{project.title}</h4>
          <p class="text-gray-600 mb-4 flex-1">{project.summary}</p>
          <div class="flex flex-wrap gap-2 mt-auto">
            {#each project.tags.slice(0, 3) as tag (tag)}
              <span class="px-2.5 py-1 bg-lxk-mint/20 text-lxk-sage text-xs rounded-full"
                >{tag}</span
              >
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .snap-start {
    scroll-snap-align: start;
  }
  .scroll-smooth {
    scroll-behavior: smooth;
  }
  .min-w-\[280px\] {
    min-width: 280px;
  }
  .max-w-\[320px\] {
    max-width: 320px;
  }
</style>
