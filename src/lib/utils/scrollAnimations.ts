import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { browser } from '$app/environment';

if (browser) {
  gsap.registerPlugin(ScrollTrigger);
}

// Types for animation presets
interface AnimationPreset {
  from: Record<string, any>;
  to: Record<string, any>;
  duration: number;
  ease: string;
  stagger?: number;
}

interface AnimationPresets {
  [key: string]: AnimationPreset;
}

// Kaki-inspired easing curves that reflect warmth and friendship
const KAKI_EASINGS = {
  gentle: "power1.out", // Gentle, welcoming
  warm: "power2.out", // Warm and approachable
  friendly: "back.out(1.2)", // Friendly bounce
  caring: "elastic.out(1, 0.5)", // Caring and responsive
  trustworthy: "expo.out", // Reliable and trustworthy
};

// Animation presets that match the Japanese-inspired minimalistic design
const ANIMATION_PRESETS: AnimationPresets = {
  fadeUp: {
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
    duration: 0.8,
    ease: KAKI_EASINGS.warm
  },
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: 0.6,
    ease: KAKI_EASINGS.gentle
  },
  slideInLeft: {
    from: { opacity: 0, x: -40 },
    to: { opacity: 1, x: 0 },
    duration: 0.7,
    ease: KAKI_EASINGS.warm
  },
  slideInRight: {
    from: { opacity: 0, x: 40 },
    to: { opacity: 1, x: 0 },
    duration: 0.7,
    ease: KAKI_EASINGS.warm
  },
  scaleIn: {
    from: { opacity: 0, scale: 0.95 },
    to: { opacity: 1, scale: 1 },
    duration: 0.6,
    ease: KAKI_EASINGS.friendly
  },
  stagger: {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    duration: 0.5,
    ease: KAKI_EASINGS.warm,
    stagger: 0.1
  },
  // New kaki-inspired animations
  kakiWelcome: {
    from: { opacity: 0, y: 30, scale: 0.9 },
    to: { opacity: 1, y: 0, scale: 1 },
    duration: 1,
    ease: KAKI_EASINGS.friendly
  },
  kakiFadeIn: {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    duration: 0.8,
    ease: KAKI_EASINGS.caring
  }
};

/**
 * Creates a scroll-triggered animation
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

  const animation = ANIMATION_PRESETS[preset];
  if (!animation) {
    console.warn(`Animation preset "${preset}" not found`);
    return;
  }

  const defaultOptions = {
    trigger: selector,
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none none",
    once: true,
    ...options
  };

  gsap.set(selector, animation.from);

  const tl = gsap.timeline();

  if (animation.stagger) {
    tl.to(selector, {
      ...animation.to,
      duration: animation.duration,
      ease: animation.ease,
      stagger: animation.stagger
    });
  } else {
    tl.to(selector, {
      ...animation.to,
      duration: animation.duration,
      ease: animation.ease
    });
  }

  ScrollTrigger.create({
    ...defaultOptions,
    animation: tl
  });

  return tl;
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
    ease: "none",
    scrollTrigger: {
      trigger: selector,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
}

/**
 * Creates a reveal animation for text elements
 * @param selector - CSS selector or DOM element
 * @param options - Animation options
 */
export function createTextReveal(
  selector: string | Element,
  options: Record<string, any> = {}
) {
  if (!browser) return;

  const defaultOptions = {
    trigger: selector,
    start: "top 85%",
    duration: 0.8,
    ease: "power2.out",
    ...options
  };

  gsap.fromTo(selector,
    {
      opacity: 0,
      y: 30,
      clipPath: "inset(100% 0 0 0)"
    },
    {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0 0 0)",
      duration: defaultOptions.duration,
      ease: defaultOptions.ease,
      scrollTrigger: {
        trigger: defaultOptions.trigger,
        start: defaultOptions.start,
        toggleActions: "play none none none",
        once: true
      }
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
    ease: "power2.out",
    trigger: selector,
    start: "top 80%",
    ...options
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
      toggleActions: "play none none none",
      once: true
    }
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
    stagger: options.stagger || 0.1
  });

  ScrollTrigger.create({
    trigger: containerSelector,
    start: "top 80%",
    toggleActions: "play none none none",
    once: true,
    animation: tl,
    ...options
  });

  return tl;
}

/**
 * Refreshes ScrollTrigger instances (useful after dynamic content changes)
 */
export function refreshScrollTrigger() {
  if (!browser) return;
  ScrollTrigger.refresh();
}

/**
 * Kills all ScrollTrigger instances
 */
export function killAllScrollTriggers() {
  if (!browser) return;
  ScrollTrigger.killAll();
}

// ===============================================
// MICRO-INTERACTION UTILITIES
// ===============================================

/**
 * Creates a kaki-inspired hover effect for buttons and interactive elements
 * @param selector - CSS selector for elements to enhance
 * @param options - Animation options
 */
export function createKakiHover(selector: string | Element, options: Record<string, any> = {}) {
  if (!browser) return;

  const elements = typeof selector === 'string' ? document.querySelectorAll(selector) : [selector];

  elements.forEach((element) => {
    const htmlElement = element as HTMLElement;

    htmlElement.addEventListener('mouseenter', () => {
      gsap.to(element, {
        scale: 1.05,
        y: -2,
        duration: 0.3,
        ease: KAKI_EASINGS.friendly,
        ...options.hover
      });
    });

    htmlElement.addEventListener('mouseleave', () => {
      gsap.to(element, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: KAKI_EASINGS.warm,
        ...options.leave
      });
    });
  });
}

/**
 * Creates a friendship-inspired button interaction
 * @param selector - CSS selector for button elements
 */
export function createFriendlyButtonEffect(selector: string | Element) {
  if (!browser) return;

  const elements = typeof selector === 'string' ? document.querySelectorAll(selector) : [selector];

  elements.forEach((element) => {
    const htmlElement = element as HTMLElement;

    htmlElement.addEventListener('mousedown', () => {
      gsap.to(element, {
        scale: 0.95,
        duration: 0.1,
        ease: KAKI_EASINGS.trustworthy
      });
    });

    htmlElement.addEventListener('mouseup', () => {
      gsap.to(element, {
        scale: 1.05,
        duration: 0.2,
        ease: KAKI_EASINGS.friendly
      });
    });

    htmlElement.addEventListener('mouseleave', () => {
      gsap.to(element, {
        scale: 1,
        duration: 0.2,
        ease: KAKI_EASINGS.warm
      });
    });
  });
}

/**
 * Creates a warm welcome animation for cards
 * @param selector - CSS selector for card elements
 */
export function createWarmCardAnimation(selector: string | Element) {
  if (!browser) return;

  const elements = typeof selector === 'string' ? document.querySelectorAll(selector) : [selector];

  elements.forEach((element) => {
    const htmlElement = element as HTMLElement;

    // Initial state
    gsap.set(element, { transformOrigin: "center center" });

    htmlElement.addEventListener('mouseenter', () => {
      gsap.timeline()
        .to(element, {
          y: -8,
          duration: 0.4,
          ease: KAKI_EASINGS.caring
        })
        .to(element, {
          scale: 1.02,
          duration: 0.3,
          ease: KAKI_EASINGS.friendly
        }, "-=0.2");
    });

    htmlElement.addEventListener('mouseleave', () => {
      gsap.to(element, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: KAKI_EASINGS.warm
      });
    });
  });
}

/**
 * Creates a subtle breathing animation for important CTAs
 * @param selector - CSS selector for CTA elements
 */
export function createBreathingCTA(selector: string | Element) {
  if (!browser) return;

  const elements = typeof selector === 'string' ? document.querySelectorAll(selector) : [selector];

  elements.forEach((element) => {
    gsap.to(element, {
      scale: 1.02,
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });
  });
}

/**
 * Initializes all kaki micro-interactions on the page
 */
export function initializeKakiInteractions() {
  if (!browser) return;

  // Apply to common elements
  createKakiHover('.service-card');
  createFriendlyButtonEffect('.hero-cta, .btn-primary');
  createWarmCardAnimation('.bg-white.rounded-3xl, .rounded-2xl.shadow');
  createBreathingCTA('.hero-cta');
}