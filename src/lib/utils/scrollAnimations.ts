import { browser } from '$app/environment';

/**
 * Simple scroll animation utility using IntersectionObserver
 * Replaces complex GSAP animations with performant CSS-based alternatives
 */

/**
 * Initialize simple scroll animations for elements with .animate-on-scroll class
 */
export function initializeSimpleAnimations() {
  if (!browser) return;

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeInUp');
      }
    });
  }, observerOptions);

  // Observe all elements with animate-on-scroll class
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  animateElements.forEach(el => observer.observe(el));

  return observer;
}

/**
 * Clean up animations
 */
export function cleanupAnimations(observer?: IntersectionObserver) {
  if (observer) {
    observer.disconnect();
  }
}