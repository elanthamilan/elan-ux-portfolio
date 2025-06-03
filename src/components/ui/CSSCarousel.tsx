import React, { useRef, useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { createPortal } from 'react-dom';
import '../../styles/carousel.css';

// Placeholder SVG component (reused from BigImageCarousel)
const PlaceholderSVG: React.FC<{ width?: number; height?: number; text?: string }> = ({
  width = 800,
  height = 450,
  text = "UX Design Mockup"
}) => (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
    <defs>
      <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F8F4F2" />
        <stop offset="100%" stopColor="#E8E4E2" />
      </linearGradient>
    </defs>

    <rect width={width} height={height} fill="url(#bgGradient)" stroke="#D0D7DE" strokeWidth="2" rx="12" />

    {/* Header */}
    <rect x="20" y="20" width={width-40} height="40" rx="8" fill="#FFFFFF" stroke="#E0E7EF" strokeWidth="1" />

    {/* Sidebar */}
    <rect x="20" y="80" width="120" height={height-140} rx="8" fill="#F6F8FA" stroke="#E0E7EF" strokeWidth="1" />

    {/* Main content area */}
    <rect x="160" y="80" width={width-200} height={height-140} rx="8" fill="#FFFFFF" stroke="#E0E7EF" strokeWidth="1" />

    {/* Footer */}
    <rect x="40" y={height-60} width={width-80} height="40" rx="8" fill="#FBF9F8" stroke="#E0E7EF" strokeWidth="1" />

    {/* Central text */}
    <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="24" fill="#385681" fontWeight="600">{text}</text>

    {/* Decorative UX elements */}
    <path d={`M${width-100} 30 L${width-80} 30 L${width-90} 20 Z`} fill="#3E8385" opacity="0.5" />
    <path d={`M${width-70} 30 L${width-50} 30 L${width-60} 20 Z`} fill="#385681" opacity="0.5" />
  </svg>
);

interface CSSCarouselProps {
  images: Array<{ src?: string; alt?: string; svgPlaceholder?: boolean }>;
  carouselLabel?: string;
  imageWidth?: number;
  imageHeight?: number;
}

const CSSCarousel: React.FC<CSSCarouselProps> = ({
  images,
  carouselLabel = "Image gallery",
  imageWidth,
  imageHeight,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Handle scroll events to update current index
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const itemWidth = carousel.clientWidth;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setCurrentIndex(newIndex);
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index); // Optimistically update active dot
    const carousel = carouselRef.current;
    if (!carousel) return;

    const itemWidth = carousel.clientWidth;
    carousel.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth'
    });
  };

  const handleImageClick = () => {
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = 'unset';
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' && currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    } else if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  return (
    <div className="css-carousel relative w-full">
      {/* CSS Carousel with scroll-button styling */}
      <div
        ref={carouselRef}
        className="carousel-track overflow-x-auto scroll-smooth snap-x snap-mandatory rounded-xl"
        role="region"
        aria-roledescription="carousel"
        aria-label={carouselLabel}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        style={{
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE/Edge
        }}
      >
        <div className="flex">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="carousel-slide min-w-full snap-center flex justify-center items-center relative"
              role="group"
              aria-roledescription="slide"
              aria-label={`Image ${idx + 1} of ${images.length}`}
            >
              <div className="w-full cursor-pointer" onClick={handleImageClick}>
                {img.svgPlaceholder ? (
                  <PlaceholderSVG />
                ) : (
                  img.src && (
                    <img
                      src={img.src}
                      alt={img.alt || ''}
                      className="w-full h-auto object-contain aspect-video rounded-xl shadow-md"
                      loading="lazy"
                      width={imageWidth || 1280}
                      height={imageHeight || 720}
                    />
                  )
                )}
              </div>

              {/* Fullscreen button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleImageClick();
                }}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
                aria-label="View fullscreen"
              >
                <Maximize2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons implementing scroll-button functionality */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => scrollToIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className="nav-button prev"
            aria-label="Scroll Left"
            title="Scroll Left"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => scrollToIndex(Math.min(images.length - 1, currentIndex + 1))}
            disabled={currentIndex === images.length - 1}
            className="nav-button next"
            aria-label="Scroll Right"
            title="Scroll Right"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-3 py-2" role="tablist" aria-label="Image navigation dots">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              } focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50`}
              role="tab"
              aria-label={`Go to image ${index + 1}`}
              aria-selected={index === currentIndex}
            />
          ))}
        </div>
      )}

      {/* ARIA live region for screen readers */}
      <div
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      >
        Image {currentIndex + 1} of {images.length}. {images[currentIndex]?.alt || ''}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && createPortal(
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleCloseFullscreen}
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen image view"
        >
          <button
            onClick={handleCloseFullscreen}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close fullscreen view"
          >
            <X size={24} />
          </button>

          <div className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center">
            {images[currentIndex].svgPlaceholder ? (
              <PlaceholderSVG width={1200} height={700} text="Full Page Design Mockup" />
            ) : (
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt || `Image ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                style={{ maxWidth: '95vw', maxHeight: '95vh' }}
              />
            )}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default CSSCarousel;
