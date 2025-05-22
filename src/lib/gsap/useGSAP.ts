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
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!initializedRef.current) {
      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);
      initializedRef.current = true;
    }

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
    if (!initializedRef.current) {
      console.warn('GSAP not initialized yet');
      return;
    }

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
    if (scrollTrigger && tween.scrollTrigger) {
      const trigger = ScrollTrigger.getById(tween.scrollTrigger.vars.id || '');
      if (trigger) {
        scrollTriggersRef.current.push(trigger);
      }
    }

    return tween;
  };

  const animateBentoGrid = (elements: Element[]) => {
    if (!initializedRef.current) {
      console.warn('GSAP not initialized yet');
      return;
    }

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
    gsap,
    isInitialized: initializedRef.current
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