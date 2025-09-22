<script>
  import { onMount } from 'svelte';
  import {
    getOptimalAnimationSettings,
    applyPerformanceOptimizations,
    createOptimizedObserver
  } from '$lib/utils/mobileOptimization';

  let mounted = false;
  let heroRef;
  let titleRef;
  let subtitleRef;
  let ctaRef;
  let animationSettings;

  // Animation coordination and timing
  onMount(() => {
    // Apply performance optimizations based on device capabilities
    applyPerformanceOptimizations();
    animationSettings = getOptimalAnimationSettings();

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      mounted = true;

      // Immediately reveal hero media that uses the scroll animation utility
      if (heroRef) {
        const heroAnimatedElements = heroRef.querySelectorAll('.animate-on-scroll');
        heroAnimatedElements.forEach((el) => el.classList.add('is-visible'));
      }
    }, 100);

    // Add optimized intersection observer for animations
    const observer = createOptimizedObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }
    );

    // Observe all animated elements if complex animations are enabled
    if (animationSettings.enableComplexAnimations) {
      if (titleRef) observer.observe(titleRef);
      if (subtitleRef) observer.observe(subtitleRef);
      if (ctaRef) observer.observe(ctaRef);
    } else {
      // Immediately show all elements without animation on low-end devices
      [titleRef, subtitleRef, ctaRef].forEach(ref => {
        if (ref) ref.classList.add('animate-in');
      });
    }

    return () => observer.disconnect();
  });

  // Letter animation for title
  function animateTitle(node) {
    // Get the original HTML to preserve the span structure
    const originalHTML = node.innerHTML;

    // Extract text parts while preserving the colored span
    const beforeKakis = 'Your Creative';
    const kakisWord = 'Kakis';

    let html = '';
    let wordIndex = 0;

    // Animate "Your Creative" part
    beforeKakis.split(' ').forEach((word, idx) => {
      html += '<span class="word" style="--word-delay: ' + wordIndex * 0.1 + 's;">';
      word.split('').forEach((letter, letterIndex) => {
        const delay = (wordIndex * 0.3) + (letterIndex * 0.05);
        html += '<span class="letter" style="--letter-delay: ' + delay + 's;">' + letter + '</span>';
      });
      html += '</span>';
      if (idx < beforeKakis.split(' ').length - 1) html += ' ';
      wordIndex++;
    });

    html += ' ';

    // Add the colored "Kakis" span with animation
    html += '<span class="!text-lxk-peach hero-accent block sm:inline word" style="--word-delay: ' + wordIndex * 0.1 + 's;">';
    kakisWord.split('').forEach((letter, letterIndex) => {
      const delay = (wordIndex * 0.3) + (letterIndex * 0.05);
      html += '<span class="letter" style="--letter-delay: ' + delay + 's;">' + letter + '</span>';
    });
    html += '</span>';

    node.innerHTML = html;
  }
</script>

<section
  bind:this={heroRef}
  class="hero-section min-h-screen flex items-center relative overflow-hidden"
  class:hero-mounted={mounted}
>
  <!-- Enhanced background with animated gradients -->
  <div class="absolute inset-0 hero-background">
    <div class="bg-gradient-to-br from-lxk-sage/20 via-lxk-cream to-lxk-peach/20 h-full animated-gradient"></div>
    <div class="absolute inset-0 bg-lxk-warm-gray/5 overlay-breath"></div>

    <!-- Animated background particles -->
    <div class="floating-particle particle-1"></div>
    <div class="floating-particle particle-2"></div>
    <div class="floating-particle particle-3"></div>
    <div class="floating-particle particle-4"></div>
  </div>

  <div class="container-custom relative z-10 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16">
    <div class="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
      <!-- Left Visual Section -->
      <div class="animate-on-scroll order-2 lg:order-1">
        <div class="bg-gradient-to-br from-lxk-sage/20 to-lxk-peach/20 rounded-2xl sm:rounded-3xl h-64 sm:h-80 lg:h-96 overflow-hidden">
          <img
            src="/hero-studio-image.png"
            alt="Light & Kaki Studio workspace"
            class="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>

      <!-- Right Content -->
      <div class="max-w-4xl order-1 lg:order-2">
        <!-- Studio Name Introduction -->
        <div class="mb-4 sm:mb-6">
          <p class="text-black text-base sm:text-lg font-medium mb-2 animate-fade-in">Welcome to</p>
          <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold animate-slide-in">
            <span class="text-lxk-sage">Light & Kaki</span> <span class="text-lxk-peach">Studio</span>
          </h2>
        </div>

        <!-- Bold, impactful headline with letter animations -->
        <h1
          bind:this={titleRef}
          use:animateTitle
          class="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-lxk-warm-gray leading-[0.9] mb-6 sm:mb-8 animate-hero-title"
        >
          Your Creative
          <span class="!text-lxk-peach hero-accent block sm:inline">Kakis</span>
        </h1>

        <!-- Single powerful value proposition with fade-up animation -->
        <p
          bind:this={subtitleRef}
          class="hero-subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed mb-8 sm:mb-12 max-w-3xl font-light animate-hero-subtitle"
        >
          Local businesses work better with genuine partnership and communication.
        </p>

        <!-- Enhanced CTA with sophisticated animations -->
        <a
          href="/contact"
          bind:this={ctaRef}
          class="hero-cta inline-flex items-center bg-lxk-peach text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full font-medium text-lg sm:text-xl shadow-xl group animate-hero-cta min-h-[56px]"
        >
          <span class="cta-text">Start Growing Today</span>
          <div class="cta-arrow ml-3 sm:ml-4 w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
            <span class="text-sm arrow-icon">→</span>
          </div>
          <!-- Ripple effect for interactions -->
          <div class="cta-ripple"></div>
        </a>
      </div>
    </div>
  </div>

</section>

<style>
  /* ===== HERO ANIMATION SYSTEM ===== */

  /* Main container animations */
  .hero-section {
    position: relative;
    transform: translateZ(0); /* Hardware acceleration */
  }

  .hero-mounted .animated-gradient {
    animation: gradientShift 20s ease-in-out infinite;
  }

  .overlay-breath {
    animation: breathe 8s ease-in-out infinite;
  }

  /* ===== TITLE ANIMATIONS ===== */

  .hero-title {
    perspective: 1000px;
    transform-style: preserve-3d;
  }

  .hero-title :global(.word) {
    display: inline-block;
    opacity: 0;
    transform: translateY(50px) rotateX(90deg);
    animation: wordReveal 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    animation-delay: var(--word-delay, 0s);
  }

  .hero-title :global(.letter) {
    display: inline-block;
    opacity: 0;
    transform: translateY(30px) scale(0.8);
    animation: letterReveal 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    animation-delay: var(--letter-delay, 0s);
  }

  .hero-accent {
    position: relative;
    display: inline-block;
  }

  .hero-accent::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 0;
    height: 4px;
    background: linear-gradient(90deg, #E6A866, #D4947A);
    border-radius: 2px;
    animation: underlineGrow 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.5s forwards;
  }

  /* ===== SUBTITLE ANIMATIONS ===== */

  .hero-subtitle {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s forwards;
  }

  /* ===== CTA BUTTON ANIMATIONS ===== */

  .hero-cta {
    position: relative;
    opacity: 0;
    transform: translateY(30px) scale(0.95);
    animation: ctaReveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 2.5s forwards;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    overflow: hidden;
  }

  .hero-cta:hover {
    background-color: #D4947A;
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 20px 40px rgba(230, 168, 102, 0.3);
  }

  .hero-cta:active {
    transform: translateY(0) scale(0.98);
  }

  .cta-text {
    position: relative;
    z-index: 2;
    transition: all 0.3s ease;
  }

  .cta-arrow {
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .hero-cta:hover .cta-arrow {
    transform: translateX(4px) rotate(15deg);
    background-color: rgba(255, 255, 255, 0.3);
  }

  .arrow-icon {
    transition: transform 0.3s ease;
  }

  .hero-cta:hover .arrow-icon {
    transform: scale(1.2);
  }

  /* Ripple effect */
  .cta-ripple {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.6s ease;
    pointer-events: none;
    z-index: 1;
  }

  .hero-cta:active .cta-ripple {
    width: 300px;
    height: 300px;
  }


  /* ===== BACKGROUND PARTICLES ===== */

  .floating-particle {
    position: absolute;
    background: linear-gradient(45deg, rgba(143, 166, 142, 0.1), rgba(230, 168, 102, 0.1));
    border-radius: 50%;
    pointer-events: none;
    opacity: 0;
    animation: particleFloat 12s ease-in-out infinite;
  }

  .particle-1 {
    width: 60px;
    height: 60px;
    top: 20%;
    left: 10%;
    animation-delay: 0s;
    animation-duration: 15s;
  }

  .particle-2 {
    width: 40px;
    height: 40px;
    top: 60%;
    left: 80%;
    animation-delay: 2s;
    animation-duration: 18s;
  }

  .particle-3 {
    width: 80px;
    height: 80px;
    top: 10%;
    right: 15%;
    animation-delay: 4s;
    animation-duration: 20s;
  }

  .particle-4 {
    width: 50px;
    height: 50px;
    bottom: 30%;
    left: 20%;
    animation-delay: 6s;
    animation-duration: 16s;
  }

  /* ===== NEW STUDIO NAME ANIMATIONS ===== */

  .animate-fade-in {
    opacity: 0;
    animation: fadeIn 0.8s ease-out 0.5s forwards;
  }

  .animate-slide-in {
    opacity: 0;
    transform: translateX(-20px);
    animation: slideInLeft 0.8s ease-out 0.8s forwards;
  }

  /* These animations are used dynamically via JavaScript */
  .animate-pulse-gentle {
    animation: pulseGentle 4s ease-in-out infinite;
  }

  .animate-bounce-gentle {
    animation: bounceGentle 3s ease-in-out infinite;
  }

  /* ===== KEYFRAME ANIMATIONS ===== */

  @keyframes gradientShift {
    0%, 100% {
      background: linear-gradient(135deg, rgba(143, 166, 142, 0.2) 0%, rgba(245, 243, 240, 1) 50%, rgba(230, 168, 102, 0.2) 100%);
    }
    33% {
      background: linear-gradient(135deg, rgba(230, 168, 102, 0.25) 0%, rgba(245, 243, 240, 1) 50%, rgba(212, 148, 122, 0.2) 100%);
    }
    66% {
      background: linear-gradient(135deg, rgba(212, 148, 122, 0.2) 0%, rgba(245, 243, 240, 1) 50%, rgba(143, 166, 142, 0.25) 100%);
    }
  }

  @keyframes breathe {
    0%, 100% {
      opacity: 0.05;
      transform: scale(1);
    }
    50% {
      opacity: 0.1;
      transform: scale(1.02);
    }
  }

  @keyframes wordReveal {
    0% {
      opacity: 0;
      transform: translateY(50px) rotateX(90deg);
    }
    100% {
      opacity: 1;
      transform: translateY(0) rotateX(0deg);
    }
  }

  @keyframes letterReveal {
    0% {
      opacity: 0;
      transform: translateY(30px) scale(0.8);
    }
    50% {
      opacity: 0.5;
      transform: translateY(-5px) scale(1.1);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes underlineGrow {
    0% {
      width: 0;
      opacity: 0;
    }
    100% {
      width: 100%;
      opacity: 1;
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes ctaReveal {
    0% {
      opacity: 0;
      transform: translateY(30px) scale(0.95);
    }
    60% {
      opacity: 0.8;
      transform: translateY(-5px) scale(1.02);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }


  @keyframes particleFloat {
    0%, 100% {
      opacity: 0;
      transform: translateY(0) translateX(0) rotate(0deg);
    }
    10% {
      opacity: 0.3;
    }
    25% {
      opacity: 0.6;
      transform: translateY(-30px) translateX(20px) rotate(90deg);
    }
    50% {
      opacity: 0.4;
      transform: translateY(-50px) translateX(-10px) rotate(180deg);
    }
    75% {
      opacity: 0.6;
      transform: translateY(-30px) translateX(30px) rotate(270deg);
    }
    90% {
      opacity: 0.3;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes slideInLeft {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes pulseGentle {
    0%, 100% {
      opacity: 0.2;
      transform: scale(1);
    }
    50% {
      opacity: 0.3;
      transform: scale(1.05);
    }
  }

  @keyframes bounceGentle {
    0%, 100% {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(-5px) scale(1.05);
    }
  }

  /* ===== RESPONSIVE ANIMATIONS ===== */

  @media (max-width: 768px) {
    .floating-particle {
      display: none; /* Hide particles on mobile for performance */
    }

    .hero-title {
      font-size: clamp(2.5rem, 8vw, 4rem);
    }

    .hero-subtitle {
      font-size: clamp(1.25rem, 4vw, 1.875rem);
    }

    .hero-cta {
      padding: 1rem 2rem;
      font-size: 1rem;
    }

  }

  @media (max-width: 480px) {

    .hero-title :global(.letter) {
      animation-duration: 0.4s; /* Faster animations on mobile */
    }
  }

  /* ===== MOBILE PERFORMANCE OPTIMIZATIONS ===== */

  :global(.mobile-optimized) .floating-particle {
    display: none !important;
  }

  :global(.mobile-optimized) .animated-gradient {
    animation: none !important;
    background: linear-gradient(135deg, rgba(143, 166, 142, 0.1), rgba(245, 243, 240, 1), rgba(230, 168, 102, 0.1));
  }

  :global(.mobile-optimized) .overlay-breath {
    animation: none !important;
    opacity: 0.05;
  }

  :global(.slow-connection) .hero-title :global(.letter) {
    animation-duration: 0.3s !important;
  }

  :global(.slow-connection) .hero-title :global(.word) {
    animation-duration: 0.4s !important;
  }

  /* ===== REDUCED MOTION SUPPORT ===== */

  @media (prefers-reduced-motion: reduce) {
    .hero-title :global(.word),
    .hero-title :global(.letter),
    .hero-subtitle,
    .hero-cta,
    .floating-particle,
    .animated-gradient,
    .overlay-breath {
      animation: none !important;
      opacity: 1 !important;
      transform: none !important;
    }

    .hero-accent::after {
      width: 100%;
      opacity: 1;
      animation: none;
    }

    .hero-cta:hover {
      transform: none !important;
    }
  }

  :global(.reduced-motion) .hero-title :global(.word),
  :global(.reduced-motion) .hero-title :global(.letter),
  :global(.reduced-motion) .hero-subtitle,
  :global(.reduced-motion) .hero-cta,
  :global(.reduced-motion) .floating-particle,
  :global(.reduced-motion) .animated-gradient,
  :global(.reduced-motion) .overlay-breath {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }

  /* ===== HIGH CONTRAST SUPPORT ===== */

  @media (prefers-contrast: high) {
    .floating-particle {
      display: none;
    }

    .hero-accent::after {
      background: currentColor;
    }

  }
</style>
