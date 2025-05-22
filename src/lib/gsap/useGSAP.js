import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const elementRef = useRef(null);

  const scrollAnimation = (element, animation, scrollTrigger) => {
    gsap.to(element, {
      ...animation,
      scrollTrigger: {
        ...scrollTrigger,
        trigger: element,
      },
    });
  };

  return {
    elementRef,
    scrollAnimation,
  };
}; 