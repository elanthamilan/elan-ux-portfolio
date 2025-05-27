
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/components/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
  loadingClassName?: string;
  errorClassName?: string;
  lazy?: boolean;
  priority?: boolean;
  width?: number;
  height?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  placeholder,
  className,
  loadingClassName,
  errorClassName,
  lazy = true,
  priority = false,
  width,
  height,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(!lazy || priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!lazy || priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, priority]);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div 
        className={cn(
          'flex items-center justify-center bg-muted text-muted-foreground',
          'min-h-[200px] rounded-lg',
          errorClassName,
          className
        )}
        role="img"
        aria-label={`Failed to load image: ${alt}`}
      >
        <span className="text-sm">Image failed to load</span>
      </div>
    );
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {isLoading && (
        <div 
          className={cn(
            'absolute inset-0 flex items-center justify-center bg-muted',
            'animate-pulse',
            loadingClassName
          )}
          aria-hidden="true"
        >
          {placeholder ? (
            <img 
              src={placeholder} 
              alt="" 
              className="w-full h-full object-cover opacity-50"
            />
          ) : (
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          )}
        </div>
      )}
      
      {isIntersecting && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100'
          )}
          loading={priority ? 'eager' : lazy ? 'lazy' : 'eager'}
          decoding="async"
          width={width}
          height={height}
          {...props}
        />
      )}
    </div>
  );
};

export { OptimizedImage };
