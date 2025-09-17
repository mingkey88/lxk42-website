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

// Animation presets that match the Japanese-inspired minimalistic design
const ANIMATION_PRESETS: AnimationPresets = {
  fadeUp: {
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
    duration: 0.8,
    ease: "power2.out"
  },
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: 0.6,
    ease: "power1.out"
  },
  slideInLeft: {
    from: { opacity: 0, x: -40 },
    to: { opacity: 1, x: 0 },
    duration: 0.7,
    ease: "power2.out"
  },
  slideInRight: {
    from: { opacity: 0, x: 40 },
    to: { opacity: 1, x: 0 },
    duration: 0.7,
    ease: "power2.out"
  },
  scaleIn: {
    from: { opacity: 0, scale: 0.95 },
    to: { opacity: 1, scale: 1 },
    duration: 0.6,
    ease: "power2.out"
  },
  stagger: {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    duration: 0.5,
    ease: "power2.out",
    stagger: 0.1
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