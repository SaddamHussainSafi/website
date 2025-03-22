// This file contains caching strategies and performance optimizations
// src/lib/cache.ts

/**
 * Configure cache control headers for different types of pages
 * @param type - The type of page (static, dynamic, api)
 * @returns Cache-Control header value
 */
export function getCacheControlHeader(type: 'static' | 'dynamic' | 'api'): string {
  switch (type) {
    case 'static':
      // Static pages can be cached for longer periods
      return 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400';
    case 'dynamic':
      // Dynamic pages should be revalidated more frequently
      return 'public, max-age=300, s-maxage=3600, stale-while-revalidate=3600';
    case 'api':
      // API responses should be fresh but can use stale data while revalidating
      return 'public, max-age=60, s-maxage=300, stale-while-revalidate=300';
    default:
      return 'no-cache, no-store, must-revalidate';
  }
}

/**
 * Generate image optimization configuration for different image types
 * @param type - The type of image (hero, thumbnail, icon)
 * @returns Image optimization configuration
 */
export function getImageOptimizationConfig(type: 'hero' | 'thumbnail' | 'icon'): {
  quality: number;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  sizes?: string;
} {
  switch (type) {
    case 'hero':
      // Hero images are critical and should be loaded with priority
      return {
        quality: 85,
        priority: true,
        loading: 'eager',
        sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      };
    case 'thumbnail':
      // Thumbnails can be lazy loaded
      return {
        quality: 75,
        loading: 'lazy',
        sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
      };
    case 'icon':
      // Icons are small and can be loaded with lower quality
      return {
        quality: 65,
        loading: 'lazy',
        sizes: '32px'
      };
    default:
      return { quality: 75 };
  }
}

/**
 * Generate responsive image sizes for different screen sizes
 * @param baseSize - The base size of the image in pixels
 * @returns Array of image sizes for different screen widths
 */
export function getResponsiveImageSizes(baseSize: number): number[] {
  // Generate sizes for common screen widths
  return [
    baseSize * 0.5,  // Mobile small
    baseSize * 0.75, // Mobile large
    baseSize,        // Base size (tablet)
    baseSize * 1.5,  // Desktop
    baseSize * 2     // High DPI screens
  ].map(size => Math.round(size));
}
