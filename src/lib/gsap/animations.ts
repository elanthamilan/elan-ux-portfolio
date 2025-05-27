
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Basic fade in animation
export const fadeIn = (
  element: string | Element | Element[],
  options: {
    duration?: number;
    delay?: number;
    y?: number;
    ease?: string;
  } = {}
) => {
  const { duration = 0.8, delay = 0, y = 30, ease = 'power2.out' } = options;
  
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: y,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease,
    }
  );
};

// Slide in from left
export const slideInLeft = (
  element: string | Element | Element[],
  options: {
    duration?: number;
    delay?: number;
    x?: number;
    ease?: string;
  } = {}
) => {
  const { duration = 0.8, delay = 0, x = -100, ease = 'power2.out' } = options;
  
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      x: x,
    },
    {
      opacity: 1,
      x: 0,
      duration,
      delay,
      ease,
    }
  );
};

// Slide in from right
export const slideInRight = (
  element: string | Element | Element[],
  options: {
    duration?: number;
    delay?: number;
    x?: number;
    ease?: string;
  } = {}
) => {
  const { duration = 0.8, delay = 0, x = 100, ease = 'power2.out' } = options;
  
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      x: x,
    },
    {
      opacity: 1,
      x: 0,
      duration,
      delay,
      ease,
    }
  );
};

// Scale in animation
export const scaleIn = (
  element: string | Element | Element[],
  options: {
    duration?: number;
    delay?: number;
    scale?: number;
    ease?: string;
  } = {}
) => {
  const { duration = 0.6, delay = 0, scale = 0.8, ease = 'back.out(1.7)' } = options;
  
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: scale,
    },
    {
      opacity: 1,
      scale: 1,
      duration,
      delay,
      ease,
    }
  );
};

// Stagger animation for multiple elements
export const staggerIn = (
  elements: string | Element[],
  options: {
    duration?: number;
    stagger?: number;
    y?: number;
    ease?: string;
  } = {}
) => {
  const { duration = 0.8, stagger = 0.1, y = 30, ease = 'power2.out' } = options;
  
  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: y,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease,
    }
  );
};

// Scroll-triggered animation
export const scrollReveal = (
  element: string | Element | Element[],
  options: {
    duration?: number;
    y?: number;
    ease?: string;
    trigger?: string | Element;
    start?: string;
    end?: string;
    toggleActions?: string;
  } = {}
) => {
  const {
    duration = 0.8,
    y = 50,
    ease = 'power2.out',
    trigger,
    start = 'top 80%',
    end = 'bottom 20%',
    toggleActions = 'play none none reverse',
  } = options;

  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: y,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      ease,
      scrollTrigger: {
        trigger: trigger || element,
        start,
        end,
        toggleActions,
      },
    }
  );
};

// Batch scroll reveal for multiple elements
export const batchScrollReveal = (
  selector: string,
  options: {
    duration?: number;
    y?: number;
    stagger?: number;
    ease?: string;
    start?: string;
    end?: string;
  } = {}
) => {
  const {
    duration = 0.8,
    y = 50,
    stagger = 0.15,
    ease = 'power2.out',
    start = 'top 80%',
    end = 'bottom 20%',
  } = options;

  const elements = document.querySelectorAll(selector);
  
  if (elements.length === 0) return null;

  return ScrollTrigger.batch(elements, {
    onEnter: (elements) => {
      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: y,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease,
        }
      );
    },
    onLeave: (elements) => {
      gsap.to(elements, {
        opacity: 0,
        y: -y,
        duration: duration * 0.5,
        stagger,
        ease,
      });
    },
    onEnterBack: (elements) => {
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease,
      });
    },
    start,
    end,
  });
};

// Text reveal animation
export const textReveal = (
  element: string | Element,
  options: {
    duration?: number;
    delay?: number;
    ease?: string;
    stagger?: number;
  } = {}
) => {
  const { duration = 0.8, delay = 0, ease = 'power2.out', stagger = 0.02 } = options;

  const target = typeof element === 'string' ? document.querySelector(element) : element;
  if (!target) return null;

  // Split text into characters
  const text = target.textContent || '';
  const chars = text.split('');
  
  target.innerHTML = chars
    .map((char) => `<span style="display: inline-block;">${char === ' ' ? '&nbsp;' : char}</span>`)
    .join('');

  const charElements = target.querySelectorAll('span');

  return gsap.fromTo(
    Array.from(charElements),
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease,
    }
  );
};

// Hover animations
export const createHoverEffect = (
  element: string | Element,
  options: {
    scale?: number;
    duration?: number;
    ease?: string;
  } = {}
) => {
  const { scale = 1.05, duration = 0.3, ease = 'power2.out' } = options;

  const target = typeof element === 'string' ? document.querySelector(element) : element;
  if (!target) return null;

  const onMouseEnter = () => {
    gsap.to(target, {
      scale,
      duration,
      ease,
    });
  };

  const onMouseLeave = () => {
    gsap.to(target, {
      scale: 1,
      duration,
      ease,
    });
  };

  target.addEventListener('mouseenter', onMouseEnter);
  target.addEventListener('mouseleave', onMouseLeave);

  // Return cleanup function
  return () => {
    target.removeEventListener('mouseenter', onMouseEnter);
    target.removeEventListener('mouseleave', onMouseLeave);
  };
};
