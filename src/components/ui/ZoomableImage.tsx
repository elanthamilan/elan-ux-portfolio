import React, { useState, useEffect } from "react";
import { X, ZoomIn } from "lucide-react";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ src, alt, className }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseZoom = () => {
    setIsZoomed(false);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isZoomed) {
        handleCloseZoom();
      }
    };

    if (isZoomed) {
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isZoomed]);

  return (
    <>
      <div className={`relative group cursor-zoom-in ${className}`} onClick={handleImageClick}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {isZoomed && (
        <div
          className="fullscreen-modal bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={handleCloseZoom}
        >
          <button
            className="absolute top-4 right-4 z-[10000] text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 backdrop-blur-sm"
            onClick={handleCloseZoom}
            aria-label="Close zoom (Press Escape)"
            title="Close zoom (Press Escape)"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center">
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '95vw',
                maxHeight: '95vh'
              }}
            />
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
            Click outside or press Escape to close
          </div>
        </div>
      )}
    </>
  );
};

export default ZoomableImage;
