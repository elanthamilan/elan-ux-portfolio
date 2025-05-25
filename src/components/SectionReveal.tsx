import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
}

const SectionReveal = React.memo(({ children, className }: SectionRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let st: ScrollTrigger | undefined;
    
    if (ref.current) {
      gsap.set(ref.current.querySelectorAll(".reveal"), { opacity: 1, y: 0 });
      
      st = ScrollTrigger.create({
        trigger: ref.current,
        start: "top 80%",
        onEnter: () => gsap.fromTo(
          ref.current!.querySelectorAll(".reveal"),
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: "power2.out"
          }
        )
      });
    }

    return () => {
      st?.kill();
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
});

SectionReveal.displayName = "SectionReveal";

export default SectionReveal;
