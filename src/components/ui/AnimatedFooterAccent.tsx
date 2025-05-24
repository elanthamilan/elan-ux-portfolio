import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const AnimatedFooterAccent: React.FC = React.memo(() => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !svgRef.current) {
      // Optionally, render a static fallback or nothing if motion is reduced
      return;
    }

    const svg = svgRef.current;
    const circle = svg.querySelector('circle');

    if (!circle) return;

    // HSL for brand-secondary #234574 is approx H:216, S:53%, L:30%
    const brandSecondaryHsl = { h: 216, s: 53, l: 30 };

    gsap.set(circle, { 
      attr: { r: 4 }, 
      opacity: 0.1,
      fill: `hsla(${brandSecondaryHsl.h}, ${brandSecondaryHsl.s}%, ${brandSecondaryHsl.l}%, 0.3)`
    });

    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(circle, {
      attr: { r: 8 }, // Pulse radius from 4 to 8
      opacity: 0.5,   // Pulse opacity from 0.1 to 0.5
      duration: 3,    // Slow duration for one way (e.g., 3 seconds)
      ease: 'sine.inOut',
    })
    .to(circle, { // Explicitly define the return state for yoyo if needed, or let yoyo handle it
      attr: { r: 4 },
      opacity: 0.1,
      duration: 3,
      ease: 'sine.inOut',
    });
    
    return () => {
      if (circle) {
        gsap.killTweensOf(circle);
      }
    };
  }, [prefersReducedMotion]);

  // Static fallback for reduced motion
  const staticRadius = 5; // Slightly smaller static radius
  const staticOpacity = 0.3; // Slightly lower static opacity
  const brandSecondaryHslStatic = { h: 216, s: 53, l: 30 };


  return (
    <div className="w-16 h-16 flex items-center justify-center pointer-events-none" aria-hidden="true"> 
      <svg ref={svgRef} width="40" height="40" viewBox="0 0 40 40" className="block">
        <circle
          cx="20"
          cy="20"
          r={prefersReducedMotion ? staticRadius : 4} 
          fill={`hsla(${brandSecondaryHslStatic.h}, ${brandSecondaryHslStatic.s}%, ${brandSecondaryHslStatic.l}%, ${prefersReducedMotion ? 0.2 : 0.3})`} // Adjusted static fill opacity
          opacity={prefersReducedMotion ? staticOpacity : 0.1}
        />
      </svg>
    </div>
  );
});
AnimatedFooterAccent.displayName = "AnimatedFooterAccent";

export default AnimatedFooterAccent;
