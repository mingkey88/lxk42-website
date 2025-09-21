/**
 * Mobile optimization utilities for LXK42 Studio website
 * Handles performance optimizations for mobile devices
 */

export interface DeviceCapabilities {
  isMobile: boolean;
  isSlowConnection: boolean;
  prefersReducedMotion: boolean;
  supportsHover: boolean;
  deviceMemory: number;
  hardwareConcurrency: number;
}

/**
 * Detects device capabilities and performance characteristics
 */
export function getDeviceCapabilities(): DeviceCapabilities {
  if (typeof window === 'undefined') {
    return {
      isMobile: false,
      isSlowConnection: false,
      prefersReducedMotion: false,
      supportsHover: true,
      deviceMemory: 8,
      hardwareConcurrency: 4
    };
  }

  const isMobile = window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  const isSlowConnection = connection && (
    connection.effectiveType === 'slow-2g' ||
    connection.effectiveType === '2g' ||
    connection.downlink < 1.5 ||
    connection.saveData === true
  );

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const supportsHover = window.matchMedia('(hover: hover)').matches;

  // Get device memory and CPU info (with fallbacks)
  const deviceMemory = (navigator as any).deviceMemory || 4;
  const hardwareConcurrency = navigator.hardwareConcurrency || 4;

  return {
    isMobile,
    isSlowConnection,
    prefersReducedMotion,
    supportsHover,
    deviceMemory,
    hardwareConcurrency
  };
}

/**
 * Determines if animations should be simplified for performance
 */
export function shouldSimplifyAnimations(): boolean {
  const capabilities = getDeviceCapabilities();

  return (
    capabilities.isMobile ||
    capabilities.isSlowConnection ||
    capabilities.prefersReducedMotion ||
    capabilities.deviceMemory < 4 ||
    capabilities.hardwareConcurrency < 4
  );
}

/**
 * Gets optimal animation settings based on device capabilities
 */
export function getOptimalAnimationSettings() {
  const shouldSimplify = shouldSimplifyAnimations();
  const capabilities = getDeviceCapabilities();

  return {
    enableComplexAnimations: !shouldSimplify,
    enableParticles: !capabilities.isMobile && !shouldSimplify,
    enableParallax: !capabilities.isMobile && !capabilities.isSlowConnection,
    animationDuration: shouldSimplify ? 0.3 : 0.6,
    staggerDelay: shouldSimplify ? 0.05 : 0.1,
    enableHoverEffects: capabilities.supportsHover,
    enableAutoplay: !capabilities.isSlowConnection && !capabilities.prefersReducedMotion
  };
}

/**
 * Creates a performance-aware CSS class for elements
 */
export function getPerformanceClass(): string {
  const capabilities = getDeviceCapabilities();
  const classes = ['performance-optimized'];

  if (capabilities.isMobile) classes.push('mobile-optimized');
  if (capabilities.isSlowConnection) classes.push('slow-connection');
  if (capabilities.prefersReducedMotion) classes.push('reduced-motion');
  if (!capabilities.supportsHover) classes.push('no-hover');

  return classes.join(' ');
}

/**
 * Throttles function calls for better performance on mobile
 */
export function createThrottledFunction<T extends (...args: any[]) => any>(
  func: T,
  delay: number = 16 // ~60fps
): T {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let lastExecTime = 0;

  return ((...args: Parameters<T>) => {
    const currentTime = Date.now();

    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  }) as T;
}

/**
 * Creates an optimized intersection observer for mobile
 */
export function createOptimizedObserver(
  callback: (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void,
  options?: {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
  }
): IntersectionObserver {
  const capabilities = getDeviceCapabilities();

  const defaultOptions = {
    rootMargin: capabilities.isMobile ? '50px' : '100px',
    threshold: capabilities.isMobile ? 0.05 : 0.1
  };

  const optimizedOptions = { ...defaultOptions, ...options };

  // Throttle callback on mobile for better performance
  const throttledCallback = capabilities.isMobile
    ? createThrottledFunction(callback, 32) // ~30fps on mobile
    : callback;

  return new IntersectionObserver(throttledCallback, optimizedOptions);
}

/**
 * Manages CSS classes for performance optimization
 */
export function applyPerformanceOptimizations(): void {
  if (typeof document === 'undefined') return;

  const capabilities = getDeviceCapabilities();
  const documentElement = document.documentElement;

  // Remove existing performance classes
  documentElement.classList.remove(
    'mobile-optimized',
    'slow-connection',
    'reduced-motion',
    'no-hover',
    'performance-optimized'
  );

  // Add performance classes
  documentElement.classList.add('performance-optimized');

  if (capabilities.isMobile) {
    documentElement.classList.add('mobile-optimized');
  }

  if (capabilities.isSlowConnection) {
    documentElement.classList.add('slow-connection');
  }

  if (capabilities.prefersReducedMotion) {
    documentElement.classList.add('reduced-motion');
  }

  if (!capabilities.supportsHover) {
    documentElement.classList.add('no-hover');
  }
}