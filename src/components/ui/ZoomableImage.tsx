import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ src, alt, className = '' }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null); // Ref for the close button

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !imageRef.current || !isZoomed) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  const handleClick = () => {
    if (!isLoading) {
      setIsZoomed(!isZoomed);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && isZoomed) {
      handleClose(); // Use centralized close handler
    } else if ((e.key === 'Enter' || e.key === ' ') && !isLoading) {
      e.preventDefault();
      handleClick(); // Toggle zoom state
    }
  };

  const handleClose = () => {
    setIsZoomed(false);
    containerRef.current?.focus(); // Return focus to the trigger
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isZoomed && containerRef.current && !containerRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };

    const handleEscapeAndTab = (e: KeyboardEvent) => {
      if (isZoomed) {
        if (e.key === 'Escape') {
          handleClose();
        } else if (e.key === 'Tab') {
          // Focus trap for the modal
          if (closeButtonRef.current && document.activeElement === closeButtonRef.current) {
            // If focus is on the close button, keep it there (as it's the only focusable element)
            e.preventDefault(); 
          } else if (closeButtonRef.current) {
            // If focus is somehow elsewhere in the modal, move it to the close button
            closeButtonRef.current.focus();
            e.preventDefault();
          }
        }
      }
    };

    if (isZoomed) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeAndTab);
      // Focus the close button when modal opens
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100); // Small delay to ensure modal is rendered
      return () => {
        clearTimeout(timer);
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscapeAndTab);
      };
    }
    
    // Cleanup for when not zoomed (original listeners if any, or ensure no listeners if isZoomed is false from start)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeAndTab); // Ensure this is also cleaned up
    };
  }, [isZoomed]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${!isLoading ? 'cursor-zoom-in' : 'cursor-wait'} ${className}`}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`${isZoomed ? 'Close' : 'Zoom'} image: ${alt}`}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-300 ${
          isZoomed ? 'scale-150' : 'hover:scale-105'
        } ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        style={
          isZoomed
            ? {
                transformOrigin: `${position.x}% ${position.y}%`,
              }
            : {}
        }
        onLoad={() => setIsLoading(false)}
        loading="lazy"
      />

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Zoomed image view"
          >
            <motion.img
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              src={src}
              alt={alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              ref={closeButtonRef} // Assign ref to close button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors"
              onClick={handleClose} // Use centralized close handler
              aria-label="Close zoomed view"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ZoomableImage; 