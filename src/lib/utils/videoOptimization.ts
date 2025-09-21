/**
 * Video optimization utilities for LXK42 Studio website
 * Handles lazy loading, compression detection, and mobile optimization
 */

export interface VideoLoadingOptions {
  preload?: 'none' | 'metadata' | 'auto';
  poster?: string;
  muted?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  playsInline?: boolean;
}

export interface VideoSource {
  src: string;
  type: string;
  quality?: 'low' | 'medium' | 'high';
}

/**
 * Creates optimized video sources based on device capabilities
 */
export function getOptimizedVideoSources(baseName: string): VideoSource[] {
  const sources: VideoSource[] = [];

  // Add WebM source for modern browsers (smaller file size)
  sources.push({
    src: `/video/${baseName}.webm`,
    type: 'video/webm',
    quality: 'high'
  });

  // Add MP4 fallback
  sources.push({
    src: `/video/${baseName}.mp4`,
    type: 'video/mp4',
    quality: 'medium'
  });

  return sources;
}

/**
 * Detects if device should receive optimized video
 */
export function shouldUseOptimizedVideo(): boolean {
  if (typeof window === 'undefined') return false;

  // Check for mobile device
  const isMobile = window.innerWidth < 768;

  // Check for slow connection
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  const isSlowConnection = connection && (
    connection.effectiveType === 'slow-2g' ||
    connection.effectiveType === '2g' ||
    connection.saveData === true
  );

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return isMobile || isSlowConnection || prefersReducedMotion;
}

/**
 * Gets default video options based on device capabilities
 */
export function getDefaultVideoOptions(): VideoLoadingOptions {
  const shouldOptimize = shouldUseOptimizedVideo();

  return {
    preload: shouldOptimize ? 'none' : 'metadata',
    muted: true,
    autoplay: !shouldOptimize,
    loop: true,
    playsInline: true
  };
}

/**
 * Creates a poster image path from video name
 */
export function getVideoPoster(videoName: string): string {
  return `/posters/${videoName}-poster.webp`;
}