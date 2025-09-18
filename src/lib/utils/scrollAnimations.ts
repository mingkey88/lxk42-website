import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { browser } from '$app/environment';

if (browser) {
  gsap.registerPlugin(ScrollTrigger);

  // Performance optimization: Set GSAP defaults for better performance
  gsap.defaults({
    force3D: true, // Force GPU acceleration
    immediateRender: false,
    lazy: false,
  });

  // Configure ScrollTrigger for optimal performance
  ScrollTrigger.config({
    ignoreMobileResize: true, // Prevent unnecessary refreshes on mobile
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
  });
}

// Performance monitoring utilities
let frameRateMonitor = {
  frames: 0,
  lastTime: 0,
  fps: 0,
  isMonitoring: false,
  threshold: 45, // Warning threshold for FPS
  onLowFPS: null as ((fps: number) => void) | null,
};

// Check for reduced motion preference globally
let isReducedMotionGlobal = false;
if (browser) {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  isReducedMotionGlobal = mediaQuery.matches;
  mediaQuery.addEventListener('change', e => {
    isReducedMotionGlobal = e.matches;
    if (isReducedMotionGlobal) {
      // Disable complex animations globally
      gsap.globalTimeline.timeScale(10); // Speed up to completion
      setTimeout(() => gsap.globalTimeline.timeScale(1), 500); // Reset
    }
  });
}

// Device capability detection for performance scaling
const deviceCapabilities = {
  isLowEnd: false,
  hasReducedMotion: isReducedMotionGlobal,
  isMobile: false,
  supportsTouchEvents: false,
};

if (browser) {
  // Detect low-end devices
  deviceCapabilities.isLowEnd =
    navigator.hardwareConcurrency <= 2 ||
    /Android.*(SM-|GT-|SCH-|SPH-|LG-|HTC|SonyEricsson|MOT-|SAMSUNG)/i.test(navigator.userAgent);

  deviceCapabilities.isMobile = /Mobi|Android/i.test(navigator.userAgent);
  deviceCapabilities.supportsTouchEvents = 'ontouchstart' in window;
}

// Enhanced types for animation system
interface AnimationPreset {
  from: Record<string, any>;
  to: Record<string, any>;
  duration: number;
  ease: string;
  stagger?: number;
  mobileOptimized?: Partial<AnimationPreset>; // Mobile-specific overrides
  reducedMotion?: Partial<AnimationPreset>; // Reduced motion fallback
  willChange?: string; // CSS will-change property hint
}

interface AnimationPresets {
  [key: string]: AnimationPreset;
}

interface InteractionConfig {
  selector: string | Element;
  animation: gsap.core.Timeline | gsap.core.Tween;
  cleanup: () => void;
}

interface PerformanceMetrics {
  frameRate: number;
  animationCount: number;
  scrollTriggerCount: number;
  memoryUsage?: number;
}

// Animation performance tracker
class AnimationPerformanceTracker {
  private activeAnimations = new Set<gsap.core.Animation>();
  private performanceObserver: PerformanceObserver | null = null;

  constructor() {
    if (browser && 'PerformanceObserver' in window) {
      this.performanceObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'measure' && entry.name.includes('animation')) {
            if (entry.duration > 16.67) {
              // More than one frame at 60fps
              console.warn(`Slow animation detected: ${entry.name} took ${entry.duration}ms`);
            }
          }
        });
      });
      this.performanceObserver.observe({ entryTypes: ['measure'] });
    }
  }

  trackAnimation(animation: gsap.core.Animation, name: string) {
    this.activeAnimations.add(animation);
    if (browser) {
      performance.mark(`${name}-start`);
      animation.eventCallback('onComplete', () => {
        performance.mark(`${name}-end`);
        performance.measure(`animation-${name}`, `${name}-start`, `${name}-end`);
        this.activeAnimations.delete(animation);
      });
    }
  }

  getMetrics(): PerformanceMetrics {
    return {
      frameRate: frameRateMonitor.fps,
      animationCount: this.activeAnimations.size,
      scrollTriggerCount: ScrollTrigger.getAll().length,
      memoryUsage:
        browser && (performance as any).memory
          ? (performance as any).memory.usedJSHeapSize
          : undefined,
    };
  }
}

const performanceTracker = new AnimationPerformanceTracker();

// Kaki-inspired easing curves that reflect warmth and friendship
const KAKI_EASINGS = {
  gentle: 'power1.out', // Gentle, welcoming
  warm: 'power2.out', // Warm and approachable
  friendly: 'back.out(1.2)', // Friendly bounce
  caring: 'elastic.out(1, 0.5)', // Caring and responsive
  trustworthy: 'expo.out', // Reliable and trustworthy
};

// Enhanced animation presets with performance optimizations and mobile/accessibility support
const ANIMATION_PRESETS: AnimationPresets = {
  fadeUp: {
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
    duration: 0.8,
    ease: KAKI_EASINGS.warm,
    willChange: 'opacity, transform',
    mobileOptimized: {
      from: { opacity: 0, y: 20 },
      duration: 0.6,
    },
    reducedMotion: {
      from: { opacity: 0 },
      to: { opacity: 1 },
      duration: 0.1,
    },
  },
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: 0.6,
    ease: KAKI_EASINGS.gentle,
    willChange: 'opacity',
    reducedMotion: {
      duration: 0.1,
    },
  },
  slideInLeft: {
    from: { opacity: 0, x: -40 },
    to: { opacity: 1, x: 0 },
    duration: 0.7,
    ease: KAKI_EASINGS.warm,
    willChange: 'opacity, transform',
    mobileOptimized: {
      from: { opacity: 0, x: -20 },
      duration: 0.5,
    },
    reducedMotion: {
      from: { opacity: 0 },
      to: { opacity: 1 },
      duration: 0.1,
    },
  },
  slideInRight: {
    from: { opacity: 0, x: 40 },
    to: { opacity: 1, x: 0 },
    duration: 0.7,
    ease: KAKI_EASINGS.warm,
    willChange: 'opacity, transform',
    mobileOptimized: {
      from: { opacity: 0, x: 20 },
      duration: 0.5,
    },
    reducedMotion: {
      from: { opacity: 0 },
      to: { opacity: 1 },
      duration: 0.1,
    },
  },
  scaleIn: {
    from: { opacity: 0, scale: 0.95 },
    to: { opacity: 1, scale: 1 },
    duration: 0.6,
    ease: KAKI_EASINGS.friendly,
    willChange: 'opacity, transform',
    reducedMotion: {
      from: { opacity: 0 },
      to: { opacity: 1 },
      duration: 0.1,
    },
  },
  stagger: {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    duration: 0.5,
    ease: KAKI_EASINGS.warm,
    stagger: 0.1,
    willChange: 'opacity, transform',
    mobileOptimized: {
      duration: 0.4,
      stagger: 0.05,
    },
    reducedMotion: {
      from: { opacity: 0 },
      to: { opacity: 1 },
      duration: 0.1,
      stagger: 0.02,
    },
  },
  // Advanced kaki-inspired animations
  kakiWelcome: {
    from: { opacity: 0, y: 30, scale: 0.9 },
    to: { opacity: 1, y: 0, scale: 1 },
    duration: 1,
    ease: KAKI_EASINGS.friendly,
    willChange: 'opacity, transform',
    mobileOptimized: {
      duration: 0.7,
      from: { opacity: 0, y: 15, scale: 0.95 },
    },
    reducedMotion: {
      from: { opacity: 0 },
      to: { opacity: 1 },
      duration: 0.1,
    },
  },
  kakiFadeIn: {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    duration: 0.8,
    ease: KAKI_EASINGS.caring,
    willChange: 'opacity, transform',
    reducedMotion: {
      from: { opacity: 0 },
      to: { opacity: 1 },
      duration: 0.1,
    },
  },
  // New performance-optimized presets
  magneticHover: {
    from: { scale: 1 },
    to: { scale: 1.03 },
    duration: 0.4,
    ease: KAKI_EASINGS.friendly,
    willChange: 'transform',
  },
  gentleFloat: {
    from: { y: 0 },
    to: { y: -8 },
    duration: 2,
    ease: 'sine.inOut',
    willChange: 'transform',
  },
  organicPulse: {
    from: { scale: 1, opacity: 0.8 },
    to: { scale: 1.05, opacity: 1 },
    duration: 1.5,
    ease: 'sine.inOut',
    willChange: 'transform, opacity',
  },
};

/**
 * Creates a performance-optimized scroll-triggered animation with accessibility support
 * @param selector - CSS selector or DOM element
 * @param preset - Animation preset name
 * @param options - Additional options
 */
export function createScrollAnimation(
  selector: string | Element,
  preset: string = 'fadeUp',
  options: Record<string, any> = {}
) {
  if (!browser) return;

  const baseAnimation = ANIMATION_PRESETS[preset];
  if (!baseAnimation) {
    console.warn(`Animation preset "${preset}" not found`);
    return;
  }

  // Apply device-specific optimizations
  let animation = { ...baseAnimation };

  if (isReducedMotionGlobal && animation.reducedMotion) {
    animation = { ...animation, ...animation.reducedMotion };
  } else if (deviceCapabilities.isMobile && animation.mobileOptimized) {
    animation = { ...animation, ...animation.mobileOptimized };
  }

  const defaultOptions = {
    trigger: selector,
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none none',
    once: true,
    invalidateOnRefresh: true, // Important for responsive design
    ...options,
  };

  // Set will-change property for GPU acceleration
  const elements = typeof selector === 'string' ? document.querySelectorAll(selector) : [selector];
  elements.forEach(el => {
    if (el instanceof HTMLElement && animation.willChange) {
      el.style.willChange = animation.willChange;
    }
  });

  gsap.set(selector, animation.from);

  const tl = gsap.timeline({
    onComplete: () => {
      // Clean up will-change after animation
      elements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.willChange = 'auto';
        }
      });
    },
  });

  // Performance-aware animation creation
  if (animation.stagger) {
    tl.to(selector, {
      ...animation.to,
      duration: animation.duration,
      ease: animation.ease,
      stagger: animation.stagger,
      force3D: true, // Ensure GPU acceleration
    });
  } else {
    tl.to(selector, {
      ...animation.to,
      duration: animation.duration,
      ease: animation.ease,
      force3D: true,
    });
  }

  const scrollTrigger = ScrollTrigger.create({
    ...defaultOptions,
    animation: tl,
  });

  // Track performance
  performanceTracker.trackAnimation(tl, `scroll-${preset}`);

  return { timeline: tl, scrollTrigger };
}

/**
 * Creates a parallax effect
 * @param selector - CSS selector or DOM element
 * @param speed - Parallax speed (0-1, where 0.5 is half speed)
 */
export function createParallax(selector: string | Element, speed: number = 0.5) {
  if (!browser) return;

  gsap.to(selector, {
    yPercent: -100 * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: selector,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
}

/**
 * Creates a reveal animation for text elements
 * @param selector - CSS selector or DOM element
 * @param options - Animation options
 */
export function createTextReveal(selector: string | Element, options: Record<string, any> = {}) {
  if (!browser) return;

  const defaultOptions = {
    trigger: selector,
    start: 'top 85%',
    duration: 0.8,
    ease: 'power2.out',
    ...options,
  };

  gsap.fromTo(
    selector,
    {
      opacity: 0,
      y: 30,
      clipPath: 'inset(100% 0 0 0)',
    },
    {
      opacity: 1,
      y: 0,
      clipPath: 'inset(0% 0 0 0)',
      duration: defaultOptions.duration,
      ease: defaultOptions.ease,
      scrollTrigger: {
        trigger: defaultOptions.trigger,
        start: defaultOptions.start,
        toggleActions: 'play none none none',
        once: true,
      },
    }
  );
}

/**
 * Creates a counter animation
 * @param selector - CSS selector or DOM element
 * @param endValue - Target number
 * @param options - Animation options
 */
export function createCounterAnimation(
  selector: string | Element,
  endValue: number,
  options: Record<string, any> = {}
) {
  if (!browser) return;

  const defaultOptions = {
    duration: 2,
    ease: 'power2.out',
    trigger: selector,
    start: 'top 80%',
    ...options,
  };

  const obj = { value: 0 };

  gsap.to(obj, {
    value: endValue,
    duration: defaultOptions.duration,
    ease: defaultOptions.ease,
    onUpdate: () => {
      const element = typeof selector === 'string' ? document.querySelector(selector) : selector;
      if (element) {
        (element as HTMLElement).textContent = Math.round(obj.value).toString();
      }
    },
    scrollTrigger: {
      trigger: defaultOptions.trigger,
      start: defaultOptions.start,
      toggleActions: 'play none none none',
      once: true,
    },
  });
}

/**
 * Animates elements in a staggered sequence
 * @param containerSelector - Container CSS selector
 * @param itemSelector - Item CSS selector within container
 * @param preset - Animation preset
 * @param options - Additional options
 */
export function createStaggeredAnimation(
  containerSelector: string,
  itemSelector: string,
  preset: string = 'fadeUp',
  options: Record<string, any> = {}
) {
  if (!browser) return;

  const animation = ANIMATION_PRESETS[preset];
  if (!animation) {
    console.warn(`Animation preset "${preset}" not found`);
    return;
  }

  const items = `${containerSelector} ${itemSelector}`;

  gsap.set(items, animation.from);

  const tl = gsap.timeline();
  tl.to(items, {
    ...animation.to,
    duration: animation.duration,
    ease: animation.ease,
    stagger: options.stagger || 0.1,
  });

  ScrollTrigger.create({
    trigger: containerSelector,
    start: 'top 80%',
    toggleActions: 'play none none none',
    once: true,
    animation: tl,
    ...options,
  });

  return tl;
}

/**
 * Refreshes ScrollTrigger instances (useful after dynamic content changes)
 */
/**
 * Refreshes ScrollTrigger instances with performance considerations
 */
export function refreshScrollTrigger() {
  if (!browser) return;

  // Debounce refresh calls for performance
  clearTimeout((refreshScrollTrigger as any).timeout);
  (refreshScrollTrigger as any).timeout = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);
}

/**
 * Kills all ScrollTrigger instances and cleans up
 */
export function killAllScrollTriggers() {
  if (!browser) return;

  ScrollTrigger.killAll();
  stopPerformanceMonitoring();

  // Clean up will-change properties
  document.querySelectorAll('[style*="will-change"]').forEach(el => {
    (el as HTMLElement).style.willChange = 'auto';
  });
}

/**
 * Creates a responsive breakpoint-aware animation
 */
export function createResponsiveAnimation(
  selector: string,
  animations: {
    mobile?: Record<string, any>;
    tablet?: Record<string, any>;
    desktop?: Record<string, any>;
  },
  options: Record<string, any> = {}
) {
  if (!browser) return;

  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  const mm = gsap.matchMedia();

  // Mobile (up to 768px)
  mm.add('(max-width: 768px)', () => {
    if (animations.mobile && !isReducedMotionGlobal) {
      return gsap.fromTo(elements, animations.mobile.from || { opacity: 0 }, {
        ...(animations.mobile.to || { opacity: 1 }),
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
          ...options,
        },
      });
    }
  });

  // Tablet (769px to 1024px)
  mm.add('(min-width: 769px) and (max-width: 1024px)', () => {
    if (animations.tablet && !isReducedMotionGlobal) {
      return gsap.fromTo(elements, animations.tablet.from || { opacity: 0, y: 30 }, {
        ...(animations.tablet.to || { opacity: 1, y: 0 }),
        scrollTrigger: {
          trigger: selector,
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true,
          ...options,
        },
      });
    }
  });

  // Desktop (1025px and up)
  mm.add('(min-width: 1025px)', () => {
    if (animations.desktop && !isReducedMotionGlobal) {
      return gsap.fromTo(elements, animations.desktop.from || { opacity: 0, y: 40 }, {
        ...(animations.desktop.to || { opacity: 1, y: 0 }),
        scrollTrigger: {
          trigger: selector,
          start: 'top 75%',
          toggleActions: 'play none none none',
          once: true,
          ...options,
        },
      });
    }
  });

  return mm;
}

// ===============================================
// MICRO-INTERACTION UTILITIES
// ===============================================

/**
 * Creates a performance-optimized kaki-inspired hover effect with accessibility support
 * @param selector - CSS selector for elements to enhance
 * @param options - Animation options
 */
export function createKakiHover(selector: string | Element, options: Record<string, any> = {}) {
  if (!browser || isReducedMotionGlobal) return;

  const elements = typeof selector === 'string' ? document.querySelectorAll(selector) : [selector];

  elements.forEach(element => {
    const htmlElement = element as HTMLElement;

    // Set will-change for performance
    htmlElement.style.willChange = 'transform';

    // Enhanced hover with magnetic effect
    const handleMouseEnter = (e: MouseEvent) => {
      const rect = htmlElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * 0.1;
      const deltaY = (e.clientY - centerY) * 0.1;

      gsap.to(element, {
        scale: 1.05,
        x: deltaX,
        y: deltaY - 2,
        duration: 0.4,
        ease: KAKI_EASINGS.friendly,
        force3D: true,
        ...options.hover,
      });

      // Add subtle glow effect
      if (options.glow !== false) {
        gsap.to(element, {
          filter: 'brightness(1.05) drop-shadow(0 4px 12px rgba(143, 166, 142, 0.3))',
          duration: 0.4,
          ease: KAKI_EASINGS.gentle,
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.5,
        ease: KAKI_EASINGS.warm,
        force3D: true,
        ...options.leave,
      });

      if (options.glow !== false) {
        gsap.to(element, {
          filter: 'brightness(1) drop-shadow(0 0 0 rgba(143, 166, 142, 0))',
          duration: 0.5,
          ease: KAKI_EASINGS.gentle,
        });
      }
    };

    // Mouse tracking for subtle magnetic effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!options.magnetic) return;

      const rect = htmlElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * 0.15;
      const deltaY = (e.clientY - centerY) * 0.15;

      gsap.to(element, {
        x: deltaX,
        y: deltaY,
        duration: 0.6,
        ease: KAKI_EASINGS.gentle,
        force3D: true,
      });
    };

    htmlElement.addEventListener('mouseenter', handleMouseEnter);
    htmlElement.addEventListener('mouseleave', handleMouseLeave);
    if (options.magnetic) {
      htmlElement.addEventListener('mousemove', handleMouseMove);
    }

    // Clean up will-change on animation complete
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          htmlElement.style.willChange = 'auto';
        }
      });
    });
    observer.observe(htmlElement);
  });
}

/**
 * Creates an enhanced friendship-inspired button interaction with haptic feedback simulation
 * @param selector - CSS selector for button elements
 * @param options - Configuration options
 */
export function createFriendlyButtonEffect(
  selector: string | Element,
  options: Record<string, any> = {}
) {
  if (!browser || isReducedMotionGlobal) return;

  const elements = typeof selector === 'string' ? document.querySelectorAll(selector) : [selector];

  elements.forEach(element => {
    const htmlElement = element as HTMLElement;

    // Performance optimization
    htmlElement.style.willChange = 'transform';
    let isPressed = false;
    let pressAnimation: gsap.core.Tween | null = null;

    // Enhanced press effect with ripple
    const handleMouseDown = (e: MouseEvent) => {
      isPressed = true;

      // Kill any existing press animation
      if (pressAnimation) pressAnimation.kill();

      pressAnimation = gsap.to(element, {
        scale: 0.96,
        duration: 0.1,
        ease: KAKI_EASINGS.trustworthy,
        force3D: true,
      });

      // Create ripple effect
      if (options.ripple !== false) {
        const rect = htmlElement.getBoundingClientRect();
        const ripple = document.createElement('div');
        const size = Math.max(rect.width, rect.height) * 2;

        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          left: ${e.clientX - rect.left - size / 2}px;
          top: ${e.clientY - rect.top - size / 2}px;
          transform: scale(0);
          z-index: 10;
        `;

        htmlElement.appendChild(ripple);

        gsap.to(ripple, {
          scale: 1,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          onComplete: () => ripple.remove(),
        });
      }
    };

    const handleMouseUp = () => {
      if (!isPressed) return;
      isPressed = false;

      if (pressAnimation) pressAnimation.kill();

      // Satisfying bounce back
      gsap.to(element, {
        scale: 1.02,
        duration: 0.15,
        ease: 'back.out(1.7)',
        force3D: true,
        onComplete: () => {
          gsap.to(element, {
            scale: 1,
            duration: 0.2,
            ease: KAKI_EASINGS.friendly,
          });
        },
      });
    };

    const handleMouseLeave = () => {
      if (pressAnimation) pressAnimation.kill();
      isPressed = false;

      gsap.to(element, {
        scale: 1,
        duration: 0.3,
        ease: KAKI_EASINGS.warm,
        force3D: true,
      });
    };

    // Touch support for mobile
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      handleMouseDown({ clientX: touch.clientX, clientY: touch.clientY } as MouseEvent);
    };

    htmlElement.addEventListener('mousedown', handleMouseDown);
    htmlElement.addEventListener('mouseup', handleMouseUp);
    htmlElement.addEventListener('mouseleave', handleMouseLeave);
    htmlElement.addEventListener('touchstart', handleTouchStart, { passive: true });
    htmlElement.addEventListener('touchend', handleMouseUp);
  });
}

/**
 * Creates an enhanced warm welcome animation for cards with depth and personality
 * @param selector - CSS selector for card elements
 * @param options - Animation configuration
 */
export function createWarmCardAnimation(
  selector: string | Element,
  options: Record<string, any> = {}
) {
  if (!browser || isReducedMotionGlobal) return;

  const elements = typeof selector === 'string' ? document.querySelectorAll(selector) : [selector];

  elements.forEach(element => {
    const htmlElement = element as HTMLElement;

    // Performance setup
    gsap.set(element, {
      transformOrigin: 'center center',
      willChange: 'transform',
    });

    let hoverTl: gsap.core.Timeline | null = null;

    const handleMouseEnter = (e: MouseEvent) => {
      if (hoverTl) hoverTl.kill();

      // Calculate 3D tilt based on mouse position
      const rect = htmlElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateX = ((e.clientY - centerY) / rect.height) * -10;
      const rotateY = ((e.clientX - centerX) / rect.width) * 10;

      hoverTl = gsap
        .timeline()
        .to(element, {
          y: -12,
          rotateX: rotateX * 0.5,
          rotateY: rotateY * 0.5,
          duration: 0.5,
          ease: KAKI_EASINGS.caring,
          force3D: true,
        })
        .to(
          element,
          {
            scale: 1.03,
            duration: 0.4,
            ease: KAKI_EASINGS.friendly,
            filter: 'brightness(1.05) drop-shadow(0 8px 25px rgba(143, 166, 142, 0.15))',
          },
          '-=0.3'
        )
        // Subtle content highlight
        .to(
          element.querySelectorAll('h2, h3, .card-title'),
          {
            color: '#E6A866',
            duration: 0.3,
            ease: KAKI_EASINGS.gentle,
          },
          '-=0.2'
        );

      // Add floating elements if they exist
      const floatingElements = element.querySelectorAll('.floating-icon, .card-accent');
      if (floatingElements.length > 0) {
        gsap.to(floatingElements, {
          y: -5,
          rotate: 5,
          duration: 0.6,
          ease: KAKI_EASINGS.friendly,
          stagger: 0.1,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!options.parallax) return;

      const rect = htmlElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateX = ((e.clientY - centerY) / rect.height) * -8;
      const rotateY = ((e.clientX - centerX) / rect.width) * 8;

      gsap.to(element, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.3,
        ease: KAKI_EASINGS.gentle,
        force3D: true,
      });
    };

    const handleMouseLeave = () => {
      if (hoverTl) hoverTl.kill();

      gsap.to(element, {
        y: 0,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: KAKI_EASINGS.warm,
        filter: 'brightness(1) drop-shadow(0 0 0 transparent)',
        force3D: true,
      });

      // Reset text colors
      gsap.to(element.querySelectorAll('h2, h3, .card-title'), {
        color: '#5D5A56',
        duration: 0.4,
        ease: KAKI_EASINGS.gentle,
      });

      // Reset floating elements
      const floatingElements = element.querySelectorAll('.floating-icon, .card-accent');
      if (floatingElements.length > 0) {
        gsap.to(floatingElements, {
          y: 0,
          rotate: 0,
          duration: 0.5,
          ease: KAKI_EASINGS.warm,
          stagger: 0.05,
        });
      }
    };

    htmlElement.addEventListener('mouseenter', handleMouseEnter);
    htmlElement.addEventListener('mouseleave', handleMouseLeave);
    if (options.parallax) {
      htmlElement.addEventListener('mousemove', handleMouseMove);
    }
  });
}

/**
 * Creates an organic breathing animation for CTAs that respects accessibility
 * @param selector - CSS selector for CTA elements
 * @param options - Configuration options
 */
export function createBreathingCTA(selector: string | Element, options: Record<string, any> = {}) {
  if (!browser || isReducedMotionGlobal) return;

  const elements = typeof selector === 'string' ? document.querySelectorAll(selector) : [selector];

  elements.forEach(element => {
    const htmlElement = element as HTMLElement;

    // Performance optimization
    htmlElement.style.willChange = 'transform';

    const breathingTl = gsap
      .timeline({ repeat: -1, yoyo: true })
      .to(element, {
        scale: options.intensity || 1.015,
        filter: 'brightness(1.02)',
        duration: options.duration || 3,
        ease: 'sine.inOut',
        force3D: true,
      })
      .to(
        element,
        {
          boxShadow: '0 8px 32px rgba(230, 168, 102, 0.15)',
          duration: 2,
          ease: 'sine.inOut',
        },
        0
      );

    // Pause breathing on hover to avoid conflicts
    htmlElement.addEventListener('mouseenter', () => {
      breathingTl.pause();
      gsap.to(element, {
        scale: 1,
        duration: 0.3,
        ease: KAKI_EASINGS.gentle,
      });
    });

    htmlElement.addEventListener('mouseleave', () => {
      breathingTl.resume();
    });

    // Clean up when element is not visible
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          breathingTl.resume();
        } else {
          breathingTl.pause();
          htmlElement.style.willChange = 'auto';
        }
      });
    });
    observer.observe(htmlElement);
  });
}

// ===============================================
// PERFORMANCE MONITORING AND OPTIMIZATION
// ===============================================

/**
 * Monitors frame rate and provides performance feedback
 */
export function startPerformanceMonitoring(
  options: {
    threshold?: number;
    onLowFPS?: (fps: number) => void;
    interval?: number;
  } = {}
) {
  if (!browser) return;

  frameRateMonitor.threshold = options.threshold || 45;
  frameRateMonitor.onLowFPS = options.onLowFPS || null;
  frameRateMonitor.isMonitoring = true;

  let frames = 0;
  let lastTime = performance.now();

  const monitor = () => {
    if (!frameRateMonitor.isMonitoring) return;

    frames++;
    const currentTime = performance.now();

    if (currentTime >= lastTime + (options.interval || 1000)) {
      frameRateMonitor.fps = Math.round((frames * 1000) / (currentTime - lastTime));
      frames = 0;
      lastTime = currentTime;

      if (frameRateMonitor.fps < frameRateMonitor.threshold && frameRateMonitor.onLowFPS) {
        frameRateMonitor.onLowFPS(frameRateMonitor.fps);
      }
    }

    requestAnimationFrame(monitor);
  };

  requestAnimationFrame(monitor);
}

/**
 * Stops performance monitoring
 */
export function stopPerformanceMonitoring() {
  frameRateMonitor.isMonitoring = false;
}

/**
 * Gets current performance metrics
 */
export function getPerformanceMetrics(): PerformanceMetrics {
  return performanceTracker.getMetrics();
}

/**
 * Optimizes animations based on device capabilities
 */
export function optimizeAnimationsForDevice() {
  if (!browser) return;

  if (deviceCapabilities.isLowEnd) {
    // Reduce animation complexity on low-end devices
    gsap.globalTimeline.timeScale(1.5); // Speed up animations

    // Disable expensive effects
    const expensiveElements = document.querySelectorAll(
      '.particle-system, .floating-particle, [data-parallax]'
    );
    expensiveElements.forEach(el => {
      (el as HTMLElement).style.display = 'none';
    });
  }

  if (deviceCapabilities.isMobile) {
    // Optimize for mobile
    gsap.config({ force3D: true, nullTargetWarn: false });

    // Disable hover effects on touch devices
    if (deviceCapabilities.supportsTouchEvents) {
      document.body.classList.add('touch-device');
    }
  }
}

/**
 * Creates a scroll-based loading animation that's performance-aware
 */
export function createAdaptiveScrollAnimation(
  selector: string,
  preset: string = 'fadeUp',
  options: Record<string, any> = {}
) {
  if (!browser) return;

  // Check performance and adapt
  const metrics = getPerformanceMetrics();
  if (metrics.frameRate < 30 && metrics.frameRate > 0) {
    // Use simpler animation
    preset = 'fadeIn';
    options.duration = (options.duration || 0.8) * 0.6;
  }

  return createScrollAnimation(selector, preset, options);
}

/**
 * Initializes all kaki micro-interactions with intelligent fallbacks
 */
export function initializeKakiInteractions(
  options: {
    enableParticles?: boolean;
    enableBreathing?: boolean;
    performanceMode?: 'auto' | 'high' | 'low';
  } = {}
) {
  if (!browser) return;

  // Start performance monitoring
  startPerformanceMonitoring({
    threshold: 45,
    onLowFPS: fps => {
      console.warn(`Low FPS detected: ${fps}fps - Consider reducing animation complexity`);
      optimizeAnimationsForDevice();
    },
  });

  // Apply device optimizations
  optimizeAnimationsForDevice();

  // Initialize interactions based on capabilities
  if (!deviceCapabilities.isLowEnd) {
    createKakiHover('.service-card, .portfolio-item', { magnetic: true, glow: true });
    createWarmCardAnimation('.bg-white.rounded-3xl, .rounded-2xl.shadow, .testimonial-card', {
      parallax: !deviceCapabilities.isMobile,
    });
  } else {
    // Simplified interactions for low-end devices
    createKakiHover('.service-card, .portfolio-item', { magnetic: false, glow: false });
    createWarmCardAnimation('.bg-white.rounded-3xl, .rounded-2xl.shadow', { parallax: false });
  }

  // Button effects work well on all devices
  createFriendlyButtonEffect('.hero-cta, .btn-primary, .cta-button', {
    ripple: !deviceCapabilities.isLowEnd,
  });

  // Breathing animation only if not reduced motion
  if (options.enableBreathing !== false && !isReducedMotionGlobal) {
    createBreathingCTA('.hero-cta', {
      intensity: deviceCapabilities.isMobile ? 1.01 : 1.015,
      duration: deviceCapabilities.isLowEnd ? 4 : 3,
    });
  }

  // Additional interactive elements
  if (!deviceCapabilities.isLowEnd) {
    createKakiHover('.nav-link', { magnetic: false });
    createWarmCardAnimation('.stat-card, .feature-card');
  }
}
