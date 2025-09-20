<script>
  import { onMount } from 'svelte';

  export let src;
  export let poster = '';
  export let className = '';
  export let alt = '';
  export let controls = false;
  export let lazy = true;
  export let muted = true;
  export let loop = true;
  export let playsinline = true;

  let videoElement;
  let isLoaded = false;
  let isInView = false;
  let observer;

  onMount(() => {
    if (!lazy) {
      isLoaded = true;
      return;
    }

    // Intersection Observer for lazy loading
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            isInView = true;
            isLoaded = true;
            // Start loading video when it comes into view
            if (videoElement) {
              videoElement.load();
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px'
      }
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (observer && videoElement) {
        observer.unobserve(videoElement);
      }
    };
  });

  function handleLoadedData() {
    // Auto-play when video is loaded and in view (for muted videos only)
    if (isInView && muted && !controls) {
      videoElement?.play()?.catch(() => {
        // Fallback if autoplay fails
        console.log('Autoplay prevented');
      });
    }
  }
</script>

<video
  bind:this={videoElement}
  class={className}
  {poster}
  {muted}
  {loop}
  {playsinline}
  {controls}
  on:loadeddata={handleLoadedData}
  preload={lazy ? 'none' : 'metadata'}
  role="img"
  aria-label={alt || 'Promotional video'}
>
  {#if isLoaded}
    <source {src} type="video/mp4" />
  {/if}

  <!-- Fallback content -->
  <div class="flex items-center justify-center h-full bg-gradient-to-br from-lxk-sage/20 to-lxk-peach/20">
    <div class="text-center">
      <div class="text-4xl mb-2">🎬</div>
      <p class="text-lxk-warm-gray">Video not supported in this browser</p>
    </div>
  </div>
</video>