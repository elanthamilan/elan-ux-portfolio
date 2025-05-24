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
    // as the animation targets DOM elements selected via ref.current.querySelectorAll.
    // GSAP animations are tied to the DOM elements, not directly to the children prop's identity.
    let st: ScrollTrigger | undefined;
    if (ref.current) {
      // Ensure elements are visible by default
      gsap.set(ref.current.querySelectorAll('.reveal'), { opacity: 1, y: 0 });

      // Animate from a slightly visible state or use fromTo for robustness
      st = ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 80%', // When the top of the trigger hits 80% of the viewport height
        onEnter: () => gsap.fromTo(ref.current.querySelectorAll('.reveal'),
                                  { opacity: 0, y: 10 }, // From: slightly lower, invisible
                                  { 
                                    opacity: 1, 
                                    y: 0, 
                                    stagger: 0.15, // Slightly faster stagger
                                    duration: 0.65, // Slightly faster duration
                                    ease: 'power4.out' 
                                  } // To: fully visible, original position
                                 )
      });
    }
    return () => {
      st?.kill(); // Kill the ScrollTrigger instance on component unmount
    };
  }, []);

  return <section ref={ref}>{children}</section>;
});
SectionReveal.displayName = "SectionReveal"; // Optional: for better debugging

export default SectionReveal;
