import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import ZoomableImage from './ZoomableImage';

// Enhanced UX-related SVG placeholder for smaller carousels
const PlaceholderSVG = ({ width = 400, height = 300, text = 'Design Process' }) => (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width={width} height={height} rx="16" fill="#F2F8F7" />
    <rect x="20" y="20" width={width-40} height="40" rx="6" fill="#3E8385" />
    <rect x="30" y="30" width="80" height="8" rx="4" fill="#ffffff" opacity="0.9" />
    <rect x={width-80} y="30" width="50" height="8" rx="4" fill="#ffffff" opacity="0.7" />
    <rect x="20" y="80" width={width-40} height={height-120} rx="8" fill="#FBF9F8" stroke="#E0E7EF" strokeWidth="1" />
    <circle cx={width/2} cy={height/2} r="20" fill="#385681" opacity="0.8" />
    <text x="50%" y="85%" textAnchor="middle" dy=".3em" fontSize="14" fill="#385681" fontWeight="500">{text}</text>
  </svg>
);

interface ImageCarouselProps {
  images: Array<{ src?: string; alt?: string; svgPlaceholder?: boolean }>;
  options?: Record<string, unknown>;
}

const ImageCarousel: React.FC<ImageCarouselProps> = React.memo(({ images, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: images.length > 1,
    align: 'start',
    containScroll: 'trimSnaps',
    ...options
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const handleImageClick = useCallback((index: number) => {
    setFullscreenIndex(index);
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const handleCloseFullscreen = useCallback(() => {
    setIsFullscreen(false);
    document.body.style.overflow = 'unset';
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

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
  }, [isFullscreen, handleCloseFullscreen]);

  if (!images || images.length === 0) {
    return <div className="text-center text-foreground/70">No images to display.</div>;
  }

  // If only one image, render it directly without carousel controls
  if (images.length === 1) {
    return (
      <div className="overflow-hidden rounded-lg relative group">
        <div className="cursor-pointer" onClick={() => handleImageClick(0)}>
          {images[0].svgPlaceholder ? (
            <PlaceholderSVG text={images[0].alt || 'Design Process'} />
          ) : (
            <ZoomableImage src={images[0].src!} alt={images[0].alt || 'Image'} className="w-full h-auto object-contain aspect-video" />
          )}
        </div>
        <button
          className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow-md hover:shadow-lg transition-all z-10 opacity-0 group-hover:opacity-100"
          onClick={(e) => { e.stopPropagation(); handleImageClick(0); }}
          aria-label="Full screen view"
        >
          <Maximize2 className="w-4 h-4 text-brand-primary" />
        </button>
      </div>
    );
  }

  return (
    <div className="relative group/carousel">
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div
              className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.3333%] min-w-0 pl-4"
              key={index}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${images.length}`}
            >
              <div className="relative group cursor-pointer" onClick={() => handleImageClick(index)}>
                {image.svgPlaceholder ? (
                  <PlaceholderSVG text={image.alt || 'Design Process'} />
                ) : (
                  <ZoomableImage
                    src={image.src!}
                    alt={image.alt || `Image ${index + 1}`}
                    className="w-full h-auto object-contain aspect-[4/3] p-2 bg-white dark:bg-gray-800 rounded-md shadow-sm"
                  />
                )}
                <button
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow-md hover:shadow-lg transition-all z-10 opacity-0 group-hover:opacity-100"
                  onClick={(e) => { e.stopPropagation(); handleImageClick(index); }}
                  aria-label="Full screen view"
                >
                  <Maximize2 className="w-3 h-3 text-brand-primary" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 -translate-y-1/2 left-2 p-2 bg-brand-primary/60 hover:bg-brand-primary text-white rounded-full shadow-md transition-opacity opacity-0 group-hover/carousel:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed z-10"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 -translate-y-1/2 right-2 p-2 bg-brand-primary/60 hover:bg-brand-primary text-white rounded-full shadow-md transition-opacity opacity-0 group-hover/carousel:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed z-10"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3"> {/* Increased space-x for larger dots */}
        {images.map((_, index) => (
          // Added a larger invisible touch area around the visible dot for easier interaction
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className="p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-1" // Added padding for larger touch target and focus ring
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === selectedIndex ? 'true' : 'false'}
          >
            <span
              className={`block w-2.5 h-2.5 xs:w-3 xs:h-3 rounded-full transition-colors ${ // Slightly larger visible dot, responsive
                index === selectedIndex ? 'bg-brand-primary' : 'bg-brand-primary/40 hover:bg-brand-primary/70'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && createPortal(
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm z-[10000]"
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
          onClick={handleCloseFullscreen}
        >
          <button
            className="absolute top-4 right-4 z-[10001] text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3 backdrop-blur-sm"
            onClick={handleCloseFullscreen}
            aria-label="Close full screen (Press Escape)"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center">
            {images[fullscreenIndex].svgPlaceholder ? (
              <PlaceholderSVG width={800} height={600} text={images[fullscreenIndex].alt || 'Full Design View'} />
            ) : (
              <img
                src={images[fullscreenIndex].src}
                alt={images[fullscreenIndex].alt || `Image ${fullscreenIndex + 1}`}
                className="max-w-full max-h-full object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                style={{ maxWidth: '95vw', maxHeight: '95vh' }}
              />
            )}
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm flex items-center space-x-4">
            {images.length > 1 && (
              <span>{fullscreenIndex + 1} / {images.length}</span>
            )}
            <span>Click outside or press Escape to close</span>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
});
ImageCarousel.displayName = "ImageCarousel";

export default ImageCarousel;
