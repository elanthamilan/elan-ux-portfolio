
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugin
gsap.registerPlugin(ScrollTrigger);

export interface AnimationConfig {
  element: Element | string;
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
  respectReducedMotion?: boolean;
}

export interface ScrollAnimationConfig extends AnimationConfig {
  trigger?: Element | string;
  start?: string;
  end?: string;
  toggleActions?: string;
  scrub?: boolean | number;
}

class AnimationManager {
  private animations: gsap.core.Tween[] = [];
  private scrollTriggers: ScrollTrigger[] = [];
  private prefersReducedMotion: boolean;

  constructor() {
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Listen for changes in motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      this.prefersReducedMotion = e.matches;
    };
    
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }
  }

  private shouldAnimate(respectReducedMotion = true): boolean {
    return !respectReducedMotion || !this.prefersReducedMotion;
  }

  fadeIn(config: AnimationConfig): gsap.core.Tween | null {
    if (!this.shouldAnimate(config.respectReducedMotion)) {
      gsap.set(config.element, { opacity: 1, y: 0 });
      return null;
    }

    const tween = gsap.fromTo(config.element, 
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: config.duration || 0.6,
        delay: config.delay || 0,
        ease: config.ease || 'power2.out',
        stagger: config.stagger || 0
      }
    );

    this.animations.push(tween);
    return tween;
  }

  slideIn(config: AnimationConfig & { direction?: 'left' | 'right' | 'up' | 'down' }): gsap.core.Tween | null {
    if (!this.shouldAnimate(config.respectReducedMotion)) {
      gsap.set(config.element, { opacity: 1, x: 0, y: 0 });
      return null;
    }

    const { direction = 'up' } = config;
    const fromValues: any = { opacity: 0 };
    const toValues: any = { opacity: 1, x: 0, y: 0 };

    switch (direction) {
      case 'left':
        fromValues.x = -50;
        break;
      case 'right':
        fromValues.x = 50;
        break;
      case 'up':
        fromValues.y = 50;
        break;
      case 'down':
        fromValues.y = -50;
        break;
    }

    const tween = gsap.fromTo(config.element, fromValues, {
      ...toValues,
      duration: config.duration || 0.8,
      delay: config.delay || 0,
      ease: config.ease || 'power3.out',
      stagger: config.stagger || 0
    });

    this.animations.push(tween);
    return tween;
  }

  scale(config: AnimationConfig & { from?: number; to?: number }): gsap.core.Tween | null {
    if (!this.shouldAnimate(config.respectReducedMotion)) {
      gsap.set(config.element, { scale: config.to || 1, opacity: 1 });
      return null;
    }

    const tween = gsap.fromTo(config.element,
      { scale: config.from || 0.8, opacity: 0 },
      {
        scale: config.to || 1,
        opacity: 1,
        duration: config.duration || 0.5,
        delay: config.delay || 0,
        ease: config.ease || 'back.out(1.7)',
        stagger: config.stagger || 0
      }
    );

    this.animations.push(tween);
    return tween;
  }

  scrollAnimation(config: ScrollAnimationConfig): ScrollTrigger | null {
    if (!this.shouldAnimate(config.respectReducedMotion)) {
      gsap.set(config.element, { opacity: 1, y: 0, x: 0, scale: 1 });
      return null;
    }

    const trigger = ScrollTrigger.create({
      trigger: config.trigger || config.element,
      start: config.start || 'top 80%',
      end: config.end,
      toggleActions: config.toggleActions || 'play none none reverse',
      scrub: config.scrub,
      onEnter: () => {
        this.fadeIn({
          element: config.element,
          duration: config.duration,
          delay: config.delay,
          ease: config.ease,
          stagger: config.stagger
        });
      }
    });

    this.scrollTriggers.push(trigger);
    return trigger;
  }

  cleanup(): void {
    this.animations.forEach(tween => tween.kill());
    this.scrollTriggers.forEach(trigger => trigger.kill());
    this.animations = [];
    this.scrollTriggers = [];
  }
}

export const animationManager = new AnimationManager();

// Utility functions for common animations
export const fadeInElements = (selector: string, stagger = 0.1) => {
  const elements = document.querySelectorAll(selector);
  return animationManager.fadeIn({ element: elements, stagger });
};

export const slideInElements = (selector: string, direction: 'left' | 'right' | 'up' | 'down' = 'up') => {
  const elements = document.querySelectorAll(selector);
  return animationManager.slideIn({ element: elements, direction });
};

export const createScrollAnimations = (selector: string) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    animationManager.scrollAnimation({
      element,
      delay: index * 0.1
    });
  });
};
