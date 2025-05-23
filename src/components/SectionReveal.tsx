import { useRef, useEffect, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface SectionRevealProps {
  children: ReactNode;
}

export default function SectionReveal({ children }: SectionRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    let st: ScrollTrigger | undefined;
    if (ref.current) {
      // Ensure elements are visible by default
      gsap.set(ref.current.querySelectorAll('.reveal'), { opacity: 1, y: 0 });

      // Animate from a slightly visible state or use fromTo for robustness
      st = ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 80%',
        onEnter: () => gsap.fromTo(ref.current.querySelectorAll('.reveal'),
                                  { opacity: 0, y: 20 }, // Start from opacity 0 and slight y offset
                                  { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: 'power4.out' })
      });
    }
    return () => {
      st?.kill(); // Kill the ScrollTrigger instance on component unmount
    };
  }, []);

  return <section ref={ref}>{children}</section>;
}
