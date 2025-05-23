import React, { useState, useRef, useEffect, useCallback } from 'react'; // Imported useCallback
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = React.memo(({ src, alt, className = '' }) => { // Wrapped with React.memo
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleClose = useCallback(() => { // Wrapped handleClose with useCallback
    setIsZoomed(false);
    containerRef.current?.focus();
  }, []); // No dependencies as setIsZoomed is stable and containerRef is a ref

  const handleClick = useCallback(() => { // Wrapped handleClick with useCallback
    if (!isLoading) {
      setIsZoomed(prevIsZoomed => !prevIsZoomed); // Use functional update for setIsZoomed
    }
  }, [isLoading]); // Dependency: isLoading

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => { // Wrapped handleKeyDown with useCallback
    if (e.key === 'Escape' && isZoomed) {
      handleClose();
    } else if ((e.key === 'Enter' || e.key === ' ') && !isLoading) {
      e.preventDefault();
      handleClick();
    }
  }, [isZoomed, isLoading, handleClose, handleClick]); // Dependencies: isZoomed, isLoading, handleClose, handleClick

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => { // Wrapped handleMouseMove with useCallback
    if (!containerRef.current || !imageRef.current || !isZoomed) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  }, [isZoomed]); // Dependency: isZoomed

  useEffect(() => {
    // Define event handlers within useEffect or ensure they are stable via useCallback if defined outside
    // For this effect, handleClickOutside and handleEscapeAndTab are only relevant when isZoomed is true
    // and are re-added/removed based on isZoomed.
    // handleClose is already memoized with useCallback.

    const localHandleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        handleClose(); // handleClose is stable
      }
    };

    const localHandleEscapeAndTab = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose(); // handleClose is stable
      } else if (e.key === 'Tab') {
        if (closeButtonRef.current && document.activeElement === closeButtonRef.current) {
          e.preventDefault(); 
        } else if (closeButtonRef.current) {
          closeButtonRef.current.focus();
          e.preventDefault();
        }
      }
    };

    if (isZoomed) {
      document.addEventListener('mousedown', localHandleClickOutside);
      document.addEventListener('keydown', localHandleEscapeAndTab);
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
      return () => {
        clearTimeout(timer);
        document.removeEventListener('mousedown', localHandleClickOutside);
        document.removeEventListener('keydown', localHandleEscapeAndTab);
      };
    }
    // No explicit cleanup needed for the 'else' case here if listeners are only added when isZoomed
  }, [isZoomed, handleClose]); // Dependency: isZoomed and the stable handleClose

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
        <div className="absolute inset-0 flex items-center justify-center bg-accent-bg dark:bg-slate-800 rounded-lg"> {/* Themed loading background, added rounded-lg to match image container */}
          <div className="w-8 h-8 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div> {/* Ensured border-brand-primary */}
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
});
ZoomableImage.displayName = "ZoomableImage"; // Optional: for better debugging

export default ZoomableImage; 