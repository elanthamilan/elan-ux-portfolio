import { useEffect, useRef } from 'react';
import { gsap, smoothScroll, animateText, scrollAnimation, drawSVG, animateBentoGrid, typeText } from './index.js';

export const useGSAP = () => {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Cleanup function to kill all GSAP animations when component unmounts
    return () => {
      gsap.killTweensOf(elementRef.current);
    };
  }, []);

  return {
    elementRef,
    gsap,
    smoothScroll,
    animateText,
    scrollAnimation,
    drawSVG,
    animateBentoGrid,
    typeText
  };
};

// Example usage:
/*
const MyComponent = () => {
  const { elementRef, animateText } = useGSAP();

  useEffect(() => {
    if (elementRef.current) {
      animateText(elementRef.current);
    }
  }, []);

  return <div ref={elementRef}>Animated Text</div>;
};
*/ 