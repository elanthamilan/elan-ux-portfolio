import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

// SVG placeholder generator
const PlaceholderSVG = ({ width = 800, height = 450, text = 'Image Placeholder' }) => (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width={width} height={height} rx="32" fill="#F3F6F9" />
    <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="32" fill="#B0B7C3">{text}</text>
    <circle cx={width/2} cy={height/2} r="80" fill="#E0E7EF" />
    <rect x="20" y={height-60} width={width-40} height="20" rx="10" fill="#D1D9E6" />
  </svg>
);

interface BigImageCarouselProps {
  images: Array<{ src?: string; alt?: string; svgPlaceholder?: boolean }>;
}

const BigImageCarousel: React.FC<BigImageCarouselProps> = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: images.length > 1, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);


  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {};
  }, [emblaApi]);

  const handleImageClick = () => {
    setIsFullscreen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  // Handle escape key for fullscreen
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
                className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow-md hover:shadow-lg transition-all z-10"
                onClick={(e) => { e.stopPropagation(); handleImageClick(); }}
                aria-label="Full screen view"
              >
                <Maximize2 className="w-4 h-4 text-brand-primary" />
              </button>
            </div>
          ))}
        </div>
      </div>
      {images.length > 1 && (
        <>
          <button onClick={scrollPrev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-brand-primary/10 transition" aria-label="Previous image">
            <ChevronLeft className="w-6 h-6 text-brand-primary" />
          </button>
          <button onClick={scrollNext} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-brand-primary/10 transition" aria-label="Next image">
            <ChevronRight className="w-6 h-6 text-brand-primary" />
          </button>
        </>
      )}
      {/* Fullscreen Modal */}
      {isFullscreen && createPortal(
        <div
          className="fullscreen-modal bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={handleCloseFullscreen}
        >
          <button
            className="absolute top-4 right-4 z-[10000] text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3 backdrop-blur-sm"
            onClick={handleCloseFullscreen}
            aria-label="Close full screen (Press Escape)"
            title="Close full screen (Press Escape)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation in fullscreen */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); scrollPrev(); }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors backdrop-blur-sm z-[10000]"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); scrollNext(); }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors backdrop-blur-sm z-[10000]"
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
                style={{
                  maxWidth: '95vw',
                  maxHeight: '95vh'
                }}
              />
            )}
          </div>

          {/* Image counter and instructions */}
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
