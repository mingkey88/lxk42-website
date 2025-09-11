<script>
  export let width = '100%';
  export let height = '1rem';
  export let borderRadius = '0.75rem';
  export let className = '';
  export let ariaLabel = 'Loading content';
</script>

<div
  role="status"
  aria-live="polite"
  aria-busy="true"
  aria-label={ariaLabel}
  class={`relative overflow-hidden bg-lxk-cream ${className}`}
  style={`width:${width};height:${height};border-radius:${borderRadius};`}
>
  <div class="shimmer absolute inset-0 pointer-events-none"></div>
</div>

<style>
  .shimmer {
    background: linear-gradient(
      90deg,
      rgba(245, 243, 240, 0) 0%,
      rgba(255, 255, 255, 0.9) 50%,
      rgba(245, 243, 240, 0) 100%
    );
    transform: translateX(-100%);
    animation: lxk-shimmer 1.6s var(--transition-smooth, cubic-bezier(0.4, 0, 0.2, 1)) infinite;
  }

  @keyframes lxk-shimmer {
    100% {
      transform: translateX(100%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .shimmer {
      animation: none;
    }
  }
</style>
