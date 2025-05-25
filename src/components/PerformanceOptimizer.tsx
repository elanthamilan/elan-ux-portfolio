import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical fonts
    const preloadFont = (href: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      link.href = href;
      document.head.appendChild(link);
    };

    // Preload critical images
    const preloadImage = (src: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    };

    // Preload critical resources
    const criticalImages = [
      '/Elanable-uploads/Camu Campus Recruitment App.png',
      '/Elanable-uploads/78be9a59-8230-4ea5-b024-d96fd3cdd83e.png'
    ];

    criticalImages.forEach(preloadImage);

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Add loading="lazy" to any iframe elements
      const iframes = document.querySelectorAll('iframe');
      iframes.forEach(iframe => {
        if (!iframe.hasAttribute('loading')) {
          iframe.setAttribute('loading', 'lazy');
        }
      });
    };

    // Run optimizations
    optimizeThirdPartyScripts();

    // Cleanup function
    return () => {
      // Remove preload links if component unmounts
      const preloadLinks = document.querySelectorAll('link[rel="preload"]');
      preloadLinks.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;
