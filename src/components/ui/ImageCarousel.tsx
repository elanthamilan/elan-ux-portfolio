import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ZoomableImage from './ZoomableImage'; // Assuming ZoomableImage is in the same directory

interface ImageCarouselProps {
  images: Array<{ src: string; alt: string }>;
  options?: Record<string, unknown>;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: images.length > 1, 
    align: 'start',
    containScroll: 'trimSnaps',
    ...options 
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      // Embla v5+ doesn't have an off method, cleanup is usually handled internally
      // If issues arise, consult embla-carousel-react docs for specific cleanup
    };
  }, [emblaApi, onSelect]);

  if (!images || images.length === 0) {
    return <div className="text-center text-foreground/70">No images to display.</div>;
  }
  
  // If only one image, render it directly without carousel controls
  if (images.length === 1) {
    return (
      <div className="overflow-hidden rounded-lg">
        <ZoomableImage src={images[0].src} alt={images[0].alt} className="w-full h-auto object-contain aspect-video" />
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
              <ZoomableImage
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-contain aspect-video p-2 bg-white dark:bg-gray-800 rounded-md shadow-sm"
              />
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
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-brand-primary' : 'bg-brand-primary/30 hover:bg-brand-primary/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === selectedIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
