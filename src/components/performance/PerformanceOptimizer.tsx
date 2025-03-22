'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// This component implements performance optimizations
export default function PerformanceOptimizer({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Implement lazy loading for images when component mounts
  useEffect(() => {
    // Find all images that should be lazy loaded
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    // Set up Intersection Observer to load images only when they're visible
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const image = entry.target as HTMLImageElement;
            if (image.dataset.src) {
              image.src = image.dataset.src;
            }
            observer.unobserve(image);
          }
        });
      });

      lazyImages.forEach(img => {
        imageObserver.observe(img);
      });
    } else {
      // Fallback for browsers that don't support Intersection Observer
      lazyImages.forEach(img => {
        const image = img as HTMLImageElement;
        if (image.dataset.src) {
          image.src = image.dataset.src;
        }
      });
    }
  }, [pathname]);

  // Implement preloading for critical resources
  useEffect(() => {
    // Preload critical fonts
    const fontPreloadLink = document.createElement('link');
    fontPreloadLink.rel = 'preload';
    fontPreloadLink.as = 'font';
    fontPreloadLink.href = '/fonts/inter-var.woff2';
    fontPreloadLink.type = 'font/woff2';
    fontPreloadLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreloadLink);

    // Preload critical images (like logo and hero images)
    const criticalImages = ['/images/logo.png', '/images/profile.jpg'];
    criticalImages.forEach(imagePath => {
      const imagePreloadLink = document.createElement('link');
      imagePreloadLink.rel = 'preload';
      imagePreloadLink.as = 'image';
      imagePreloadLink.href = imagePath;
      document.head.appendChild(imagePreloadLink);
    });
  }, []);

  return <>{children}</>;
}
