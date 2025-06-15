
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { usePrefersReducedMotion } from '@/components/hooks/usePrefersReducedMotion';

interface GracefulTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  animationType?: 'fadeUp' | 'slideIn' | 'typewriter' | 'wordReveal' | 'elegant' | 'gentle';
  autoStart?: boolean;
  onComplete?: () => void;
}

const GracefulTextReveal: React.FC<GracefulTextRevealProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.8,
  staggerDelay = 0.05,
  animationType = 'elegant',
  autoStart = true,
  onComplete
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const controls = useAnimation();
  const prefersReducedMotion = usePrefersReducedMotion();

  // Split text into words for animation
  const words = text.split(' ');

  useEffect(() => {
    if (prefersReducedMotion) {
      // Skip animation for users who prefer reduced motion
      controls.set({ opacity: 1, y: 0, x: 0, scale: 1, filter: 'blur(0px)' });
      onComplete?.();
      return;
    }

    if (autoStart && isInView) {
      const startAnimation = async () => {
        await controls.start('visible');
        onComplete?.();
      };

      if (delay > 0) {
        setTimeout(() => {
          startAnimation();
        }, delay * 1000);
      } else {
        startAnimation();
      }
    }
  }, [isInView, autoStart, controls, delay, prefersReducedMotion, onComplete]);

  const getAnimationVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    };

    switch (animationType) {
      case 'fadeUp':
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration,
              ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smoothness
            }
          }
        };
      
      case 'slideIn':
        return {
          hidden: { opacity: 0, x: -30 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: {
              duration,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      
      case 'wordReveal':
        return {
          hidden: { opacity: 0, y: 10 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: duration * 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      
      case 'typewriter':
        return {
          hidden: { width: 0, opacity: 0 },
          visible: {
            width: 'auto',
            opacity: 1,
            transition: {
              duration: duration * 1.5,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };

      case 'elegant':
        return {
          hidden: { opacity: 0, y: 15, scale: 0.98 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: duration * 1.2,
              ease: [0.16, 1, 0.3, 1] // Elegant easing curve
            }
          }
        };

      case 'gentle':
        return {
          hidden: { opacity: 0, y: 8, filter: 'blur(4px)' },
          visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
              duration: duration * 1.4,
              ease: [0.23, 1, 0.32, 1] // Very smooth easing
            }
          }
        };
      
      default:
        return baseVariants;
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0
      }
    }
  };

  const wordVariants = getAnimationVariants();

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {text}
      </div>
    );
  }

  if (animationType === 'typewriter') {
    return (
      <motion.div
        ref={ref}
        className={`overflow-hidden ${className}`}
        initial="hidden"
        animate={controls}
        variants={wordVariants}
      >
        {text}
      </motion.div>
    );
  }

  if (animationType === 'wordReveal') {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-1"
            variants={wordVariants}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={wordVariants}
    >
      {text}
    </motion.div>
  );
};

export default GracefulTextReveal;
