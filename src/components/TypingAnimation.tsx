import { useEffect, useRef } from 'react';
import { useGSAP } from '../lib/gsap/useGSAP.js';

interface TypingAnimationProps {
  phrases: string[];
  className?: string;
}

const TypingAnimation = ({ phrases, className = '' }: TypingAnimationProps) => {
  const { elementRef, typeText } = useGSAP();
  const currentIndex = useRef(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animate = () => {
      const phrase = phrases[currentIndex.current];
      
      // Type the phrase
      typeText(element, phrase, 2, 0).then(() => {
        // Wait before deleting
        setTimeout(() => {
          // Delete the text
          typeText(element, '', 1, 0).then(() => {
            // Move to next phrase
            currentIndex.current = (currentIndex.current + 1) % phrases.length;
            // Start next animation
            setTimeout(animate, 500);
          });
        }, 2000);
      });
    };

    animate();

    return () => {
      // Cleanup animations on unmount
      if (element) {
        element.textContent = '';
      }
    };
  }, [phrases]);

  return (
    <span
      ref={elementRef}
      className={`inline-block ${className}`}
      role="status"
      aria-live="polite"
    />
  );
};

export default TypingAnimation; 