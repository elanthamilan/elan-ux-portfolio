import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

// Enhanced UX-related SVG placeholder generator with more design elements
const PlaceholderSVG = ({ width = 800, height = 450, text = 'UX Design Mockup' }) => (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background */}
    <rect width={width} height={height} rx="32" fill="#F2F8F7" />

    {/* Header */}
    <rect x="40" y="40" width={width-80} height="60" rx="8" fill="#3E8385" />
    <rect x="60" y="55" width="120" height="12" rx="6" fill="#ffffff" opacity="0.9" />
    <rect x={width-160} y="55" width="80" height="12" rx="6" fill="#ffffff" opacity="0.7" />

    {/* Navigation */}
    <rect x="40" y="120" width={(width-80)*0.7} height="20" rx="4" fill="#B0B7C3" />
    <rect x="40" y="150" width={(width-80)*0.5} height="20" rx="4" fill="#D1D9E6" />

    {/* Main content area */}
    <rect x="40" y="200" width={width-80} height="200" rx="12" fill="#FBF9F8" stroke="#E0E7EF" strokeWidth="2" />

    {/* Design elements */}
    <circle cx={width/2-60} cy={280} r="25" fill="#385681" opacity="0.8" />
    <circle cx={width/2+60} cy={280} r="25" fill="#3E8385" opacity="0.6" />
    <rect x={width/2-40} y="320" width="80" height="8" rx="4" fill="#B0B7C3" />
    <rect x={width/2-60} y="340" width="120" height="6" rx="3" fill="#D1D9E6" />

    {/* Footer */}
    <rect x="40" y={height-60} width={width-80} height="40" rx="8" fill="#FBF9F8" stroke="#E0E7EF" strokeWidth="1" />

    {/* Central text */}
    <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="24" fill="#385681" fontWeight="600">{text}</text>

    {/* Decorative UX elements */}
    <path d={`M${width-100} 30 L${width-80} 30 L${width-90} 20 Z`} fill="#3E8385" opacity="0.5" />
    <path d={`M${width-70} 30 L${width-50} 30 L${width-60} 20 Z`} fill="#385681" opacity="0.5" />
  </svg>
);

interface BigImageCarouselProps {
  images: Array<{ src?: string; alt?: string; svgPlaceholder?: boolean }>;
  options?: Record<string, unknown>;
}

const BigImageCarousel: React.FC<BigImageCarouselProps> = ({ images, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: images.length > 1,
    align: 'center',
    containScroll: 'trimSnaps',
    ...options
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // Scroll to start initially
    emblaApi.scrollTo(0, true); // Instant scroll to the beginning

    onSelect(); // This updates button states etc.
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      // Cleanup handled by embla internally
    };
  }, [emblaApi, onSelect]);

  const handleImageClick = () => {
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        handleCloseFullscreen();
      }
    };

    if (isFullscreen) {
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isFullscreen]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {images.map((img, idx) => (
            <div key={idx} className="min-w-0 flex-[0_0_100%] flex justify-center items-center relative">
              <div className="w-full cursor-pointer" onClick={handleImageClick}>
                {img.svgPlaceholder ? (
                  <PlaceholderSVG />
                ) : (
                  <img src={img.src} alt={img.alt || `Image ${idx+1}`} className="w-full h-auto object-contain aspect-video rounded-xl shadow-md" loading="lazy" />
                )}
              </div>
              <button
                className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow-md hover:shadow-lg transition-all z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-1 focus-visible:ring-offset-background"
                onClick={(e) => { e.stopPropagation(); handleImageClick(); }}
                aria-label="Full screen view"
              >
                <Maximize2 className="w-4 h-4 text-brand-primary" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-brand-primary p-2 rounded-full shadow-md hover:shadow-lg transition-all z-10 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-1 focus-visible:ring-offset-background"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-brand-primary p-2 rounded-full shadow-md hover:shadow-lg transition-all z-10 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-1 focus-visible:ring-offset-background"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-3 py-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              } focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50`}
              aria-label={`Go to image ${index + 1}`}
              aria-current={index === selectedIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      )}

      {/* Fullscreen Modal */}
      {isFullscreen && createPortal(
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm z-[10000]"
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
          onClick={handleCloseFullscreen}
        >
          <button
            className="absolute top-4 right-4 z-[10001] text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/70"
            onClick={handleCloseFullscreen}
            aria-label="Close full screen (Press Escape)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation in fullscreen */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); scrollPrev(); }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors backdrop-blur-sm z-[10001] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/70"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); scrollNext(); }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors backdrop-blur-sm z-[10001] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/70"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center">
            {images[selectedIndex].svgPlaceholder ? (
              <PlaceholderSVG width={1200} height={700} text="Full Page Design Mockup" />
            ) : (
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt || `Image ${selectedIndex+1}`}
                className="max-w-full max-h-full object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                style={{ maxWidth: '95vw', maxHeight: '95vh' }}
              />
            )}
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm flex items-center space-x-4">
            {images.length > 1 && (
              <span>{selectedIndex + 1} / {images.length}</span>
            )}
            <span>Click outside or press Escape to close</span>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default BigImageCarousel;
