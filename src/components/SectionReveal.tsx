import React, { useRef, useEffect, ReactNode } from 'react'; // Imported React for React.memo
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface SectionRevealProps {
  children: ReactNode;
}

const SectionReveal = React.memo(({ children }: SectionRevealProps) => { // Wrapped with React.memo
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    // The children prop itself is not a dependency for this effect,
    // GSAP animations are tied to the DOM elements, not directly to the children prop's identity.
    const elementsToReveal = ref.current?.querySelectorAll('.reveal');
    if (!elementsToReveal || elementsToReveal.length === 0) return;

    let mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
      // Reduced motion: Set elements directly to their final state upon trigger
      // Ensure elements are initially hidden if they are meant to appear on scroll,
      // then set to visible when ScrollTrigger activates.
      gsap.set(elementsToReveal, { opacity: 0, y: 0 }); // Keep them hidden initially
      const st = ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 80%', 
        onEnter: () => gsap.set(elementsToReveal, { opacity: 1, y: 0 }),
        // onLeaveBack: () => gsap.set(elementsToReveal, { opacity: 0, y: 0 }) // Optional: hide again on scroll up
      });
      return () => {
        st?.kill();
      };
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Original animation logic
      gsap.set(elementsToReveal, { opacity: 0, y: 10 }); // Set initial state for the animation
      const st = ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 80%',
        onEnter: () => {
          if (elementsToReveal.length > 0) { // Check if elements exist
            gsap.fromTo(elementsToReveal,
              { opacity: 0, y: 10 }, // From state
              { 
                opacity: 1, 
                y: 0, 
                stagger: 0.1,
                duration: 0.45,
                ease: 'power4.out',
                onComplete: function() {
                  // `this.targets()` refers to the elements animated by this tween
                  if (this.targets().length > 0) { // Ensure targets exist before calling set
                      gsap.set(this.targets(), { clearProps: "transform" }); 
                  }
                }
              } // To state
            );
          }
        }
        // onLeaveBack: () => gsap.set(elementsToReveal, { opacity: 0, y: 10 }) // Optional: reset on scroll up
      });
      return () => st?.kill(); // Cleanup ScrollTrigger
    });

    return () => {
      mm.revert(); // Cleanup matchMedia
    };
  }, []);

  // The section tag itself doesn't need the ref if ScrollTrigger targets ref.current
  // However, if ref.current is the trigger, it's fine.
  // For clarity, child elements with class 'reveal' are what get animated.
  return <section ref={ref}>{children}</section>;
});
SectionReveal.displayName = "SectionReveal"; // Optional: for better debugging

export default SectionReveal;
