import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from './config.js';

interface AnimationConfig {
  element: HTMLElement;
  animation: gsap.TweenVars;
  scrollTrigger?: ScrollTrigger.Vars;
}

export const useGSAP = () => {
  const elementRef = useRef<HTMLElement | null>(null);
  const animationsRef = useRef<gsap.core.Tween[]>([]);
  const scrollTriggersRef = useRef<ScrollTrigger[]>([]);

  // Cleanup function
  useEffect(() => {
    return () => {
      // Kill all animations
      animationsRef.current.forEach(animation => animation.kill());
      // Kill all scroll triggers
      scrollTriggersRef.current.forEach(trigger => trigger.kill());
      // Clear refs
      animationsRef.current = [];
      scrollTriggersRef.current = [];
    };
  }, []);

  const scrollAnimation = ({ element, animation, scrollTrigger }: AnimationConfig) => {
    // Create the animation
    const tween = gsap.to(element, {
      ...animation,
      scrollTrigger: scrollTrigger ? {
        ...scrollTrigger,
        trigger: element,
      } : undefined,
    });

    // Store the animation for cleanup
    animationsRef.current.push(tween);

    // If there's a scroll trigger, store it for cleanup
    if (scrollTrigger) {
      const trigger = ScrollTrigger.getById(tween.scrollTrigger?.id || '');
      if (trigger) {
        scrollTriggersRef.current.push(trigger);
      }
    }

    return tween;
  };

  const animateBentoGrid = (elements: Element[]) => {
    elements.forEach((element, index) => {
      const tween = gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: element,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        }
      });
      animationsRef.current.push(tween);
    });
  };

  return {
    elementRef,
    scrollAnimation,
    animateBentoGrid,
    gsap
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