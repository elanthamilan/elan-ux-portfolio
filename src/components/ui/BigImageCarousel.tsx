import React, { useCallback, useEffect, useState } from 'react';
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
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {};
  }, [emblaApi]);

  const handleImageClick = () => setIsFullscreen(true);
  const handleCloseFullscreen = () => setIsFullscreen(false);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {images.map((img, idx) => (
            <div key={idx} className="min-w-0 flex-[0_0_100%] flex justify-center items-center cursor-pointer" onClick={handleImageClick}>
              {img.svgPlaceholder ? (
                <PlaceholderSVG />
              ) : (
                <img src={img.src} alt={img.alt || `Image ${idx+1}`} className="w-full h-auto object-contain aspect-video rounded-xl shadow-md" loading="lazy" />
              )}
              <button className="absolute top-2 right-2 bg-white/80 rounded-full p-1 shadow" onClick={handleImageClick} aria-label="Full screen view">
                <Maximize2 className="w-5 h-5 text-brand-primary" />
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
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button className="absolute top-4 right-4 bg-white/80 rounded-full p-2 shadow" onClick={handleCloseFullscreen} aria-label="Close full screen">
            <X className="w-6 h-6 text-brand-primary" />
          </button>
          <div className="w-full max-w-5xl flex justify-center items-center">
            {images[selectedIndex].svgPlaceholder ? (
              <PlaceholderSVG width={1200} height={700} text="Full Page SVG" />
            ) : (
              <img src={images[selectedIndex].src} alt={images[selectedIndex].alt || `Image ${selectedIndex+1}`} className="w-full h-auto object-contain aspect-video rounded-xl shadow-2xl" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BigImageCarousel;
