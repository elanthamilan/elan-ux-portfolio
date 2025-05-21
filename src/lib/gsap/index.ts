import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Flip } from 'gsap/Flip';
import { Draggable } from 'gsap/Draggable';
import { SplitText } from 'gsap/SplitText';
import { Observer } from 'gsap/Observer';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  ScrollToPlugin,
  DrawSVGPlugin,
  MorphSVGPlugin,
  MotionPathPlugin,
  Flip,
  Draggable,
  SplitText,
  Observer,
  TextPlugin
);

// Utility function for smooth scroll animations
export const smoothScroll = (target: string | Element, duration: number = 1) => {
  gsap.to(window, {
    duration,
    scrollTo: target,
    ease: 'power2.inOut'
  });
};

// Utility function for text animations
export const animateText = (element: Element, delay: number = 0) => {
  const split = new SplitText(element, { type: 'chars,words' });
  
  gsap.from(split.chars, {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.02,
    delay,
    ease: 'power4.out'
  });
};

// Utility function for scroll-triggered animations
export const scrollAnimation = (
  element: Element,
  animation: gsap.TweenVars,
  trigger: ScrollTrigger.Vars
) => {
  return gsap.to(element, {
    ...animation,
    scrollTrigger: {
      trigger: element,
      ...trigger
    }
  });
};

// Utility function for SVG path animations
export const drawSVG = (element: Element, duration: number = 1) => {
  return gsap.to(element, {
    duration,
    drawSVG: '100%',
    ease: 'power2.inOut'
  });
};

// Utility function for typing animation
export const typeText = (
  element: Element,
  text: string,
  duration: number = 1,
  delay: number = 0
) => {
  return gsap.to(element, {
    duration,
    text: text,
    ease: 'none',
    delay
  });
};

// Utility function for bento grid animations
export const animateBentoGrid = (elements: Element[]) => {
  elements.forEach((element, index) => {
    gsap.from(element, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: index * 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      }
    });
  });
};

// Export GSAP instance for direct use
export { gsap }; 