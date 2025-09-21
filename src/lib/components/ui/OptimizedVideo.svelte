<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import {
    getOptimizedVideoSources,
    shouldUseOptimizedVideo,
    getDefaultVideoOptions,
    getVideoPoster,
    type VideoLoadingOptions
  } from '$lib/utils/videoOptimization';

  export let src: string;
  export let alt: string = '';
  export let className: string = '';
  export let poster: string = '';
  export let autoplay: boolean = true;
  export let muted: boolean = true;
  export let loop: boolean = true;
  export let playsInline: boolean = true;
  export let priority: 'high' | 'medium' | 'low' = 'medium';

  let videoElement: HTMLVideoElement;
  let containerElement: HTMLDivElement;
  let shouldLoad = false;
  let isIntersecting = false;
  let hasLoaded = false;

  // Extract video name from src
  $: videoName = src.replace(/\.(mp4|webm)$/, '').replace(/^\//, '');
  $: videoPoster = poster || getVideoPoster(videoName);
  $: videoSources = browser ? getOptimizedVideoSources(videoName) : [];
  $: shouldOptimize = browser ? shouldUseOptimizedVideo() : false;
  $: videoOptions = browser ? getDefaultVideoOptions() : { preload: 'none', muted: true, autoplay: false, loop: true, playsInline: true };

  let observer: IntersectionObserver;

  onMount(() => {
    // High priority videos load immediately
    if (priority === 'high') {
      shouldLoad = true;
      return;
    }

    // Set up intersection observer for lazy loading
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasLoaded) {
            isIntersecting = true;

            // Load based on priority and connection
            const delay = priority === 'medium' ? 500 : 1500;
            setTimeout(() => {
              shouldLoad = true;
              hasLoaded = true;
            }, delay);

            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: priority === 'low' ? '50px' : '200px',
        threshold: 0.1
      }
    );

    if (containerElement) {
      observer.observe(containerElement);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  });

  // Handle video loading and error states
  function handleVideoLoad() {
    hasLoaded = true;
  }

  function handleVideoError() {
    console.warn(`Failed to load optimized video: ${src}`);
    // Fallback to original src
    if (videoElement) {
      videoElement.src = src;
    }
  }

  // Play video when it becomes visible (if autoplay is disabled)
  function handleVideoIntersection() {
    if (videoElement && !videoOptions.autoplay && isIntersecting) {
      videoElement.play().catch(() => {
        // Auto-play was prevented - this is normal on mobile
      });
    }
  }

  $: if (videoElement && isIntersecting) {
    handleVideoIntersection();
  }
</script>

<div bind:this={containerElement} class="relative overflow-hidden {className}">
  {#if shouldLoad}
    <!-- Optimized video with multiple sources -->
    <video
      bind:this={videoElement}
      class="w-full h-full object-cover"
      poster={videoPoster}
      muted={videoOptions.muted || muted}
      autoplay={videoOptions.autoplay && autoplay}
      loop={videoOptions.loop && loop}
      playsinline={videoOptions.playsInline && playsInline}
      preload={videoOptions.preload}
      on:loadeddata={handleVideoLoad}
      on:error={handleVideoError}
      aria-label={alt}
    >
      {#if !shouldOptimize}
        <!-- Full quality sources for desktop/fast connections -->
        {#each videoSources as source}
          <source src={source.src} type={source.type} />
        {/each}
      {/if}

      <!-- Fallback to original source -->
      <source src={src} type="video/mp4" />

      <!-- Fallback content for browsers that don't support video -->
      <img src={videoPoster} alt={alt} class="w-full h-full object-cover" />
    </video>
  {:else}
    <!-- Loading state with poster image -->
    <div class="w-full h-full bg-gradient-to-br from-lxk-sage/10 to-lxk-peach/10 flex items-center justify-center">
      {#if videoPoster}
        <img
          src={videoPoster}
          alt={alt}
          class="w-full h-full object-cover opacity-80"
          loading="lazy"
        />
      {:else}
        <!-- Loading skeleton -->
        <div class="w-full h-full bg-gradient-to-br from-lxk-sage/20 to-lxk-peach/20 animate-pulse flex items-center justify-center">
          <div class="text-lxk-sage/60 text-sm font-medium">Loading...</div>
        </div>
      {/if}
    </div>
  {/if}
</div>

<style>
  /* Ensure video covers container properly */
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: linear-gradient(135deg, rgba(143, 166, 142, 0.1), rgba(230, 168, 102, 0.1));
  }

  /* Optimize for mobile performance */
  @media (max-width: 768px) {
    video {
      /* Reduce quality on mobile if needed */
      image-rendering: optimizeSpeed;
    }
  }

  /* Respect reduced motion preferences */
  @media (prefers-reduced-motion: reduce) {
    video {
      animation: none !important;
    }
  }
</style>