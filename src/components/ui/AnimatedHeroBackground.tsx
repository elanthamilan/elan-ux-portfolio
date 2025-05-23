import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const AnimatedHeroBackground: React.FC = React.memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
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
    if (prefersReducedMotion || !containerRef.current) {
      // Optionally, render a static fallback if motion is reduced
      // For now, just skip animation
      return;
    }

    const svg = containerRef.current; // containerRef is the SVG element itself
    if (!svg) return;

    const numLines = 25;
    const lines: SVGLineElement[] = [];
    // Assuming --primary-hsl is defined e.g., as `181 48% 32%` for brand-primary #2A7779
    // If not, we'll use the HSL values directly. For this example, using a placeholder for --primary-hsl
    // Let's use the HSL values for brand-primary: 181, 48%, 32%
    const brandPrimaryHsl = { h: 181, s: 48, l: 32 };


    for (let i = 0; i < numLines; i++) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      const x1 = Math.random() * 100;
      const y1 = Math.random() * 100;
      const length = Math.random() * 15 + 5; // Line length between 5% and 20% of viewport shorter side
      const angle = Math.random() * 360;
      const x2 = x1 + length * Math.cos(angle * Math.PI / 180);
      const y2 = y1 + length * Math.sin(angle * Math.PI / 180);

      gsap.set(line, {
        attr: {
          x1: `${x1}%`,
          y1: `${y1}%`,
          x2: `${x2}%`,
          y2: `${y2}%`,
          // Use HSL for brand-primary. Assuming --primary-hsl is like "181, 48%, 32%"
          stroke: `hsla(${brandPrimaryHsl.h}, ${brandPrimaryHsl.s}%, ${brandPrimaryHsl.l}%, ${Math.random() * 0.1 + 0.05})`, // Opacity 0.05 to 0.15
          'stroke-width': Math.random() * 0.3 + 0.1, // Stroke width 0.1 to 0.4
        },
      });
      svg.appendChild(line);
      lines.push(line);
    }

    const tl = gsap.timeline({ repeat: -1 });

    lines.forEach((line, index) => {
      const duration = Math.random() * 15 + 10; // 10-25 seconds
      const delay = Math.random() * 5; // Stagger start times

      // Animate opacity
      tl.to(line, {
        opacity: Math.random() * 0.2 + 0.1, // Target opacity 0.1 to 0.3
        duration: duration / 2,
        yoyo: true,
        repeat: 1, // This will make the opacity part of the yoyo
        ease: 'sine.inOut',
      }, delay);

      // Subtle positional drift for some lines
      if (index % 3 === 0) { // Animate 1/3rd of the lines
        const driftX = (Math.random() - 0.5) * 10; // Drift by -5% to +5%
        const driftY = (Math.random() - 0.5) * 10;
        tl.to(line, {
          attr: {
            x1: `+=${driftX}%`,
            y1: `+=${driftY}%`,
            x2: `+=${driftX}%`, // Keep line length and angle roughly the same
            y2: `+=${driftY}%`,
          },
          duration: duration,
          ease: 'sine.inOut',
          yoyo: true, // Yoyo the positional drift
          repeat: 1,
        }, delay); // Start at the same delay as opacity
      }
    });
    
    // Stagger the start of each line's full animation cycle if desired,
    // or rely on the individual delays and durations for asynchronicity.
    // The current setup with individual random delays and durations should provide a flowing effect.

    return () => {
      lines.forEach(line => gsap.killTweensOf(line));
      if (svg) {
        lines.forEach(line => {
          if (svg.contains(line)) {
            svg.removeChild(line);
          }
        });
      }
    };
  }, [prefersReducedMotion]); // Rerun if prefersReducedMotion changes

  // Fallback for reduced motion
  if (prefersReducedMotion) {
    const brandPrimaryHsl = { h: 181, s: 48, l: 32 }; // HSL for brand-primary #2A7779
    return (
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <svg width="100%" height="100%" className="block">
          <line x1="10%" y1="20%" x2="90%" y2="30%" stroke={`hsla(${brandPrimaryHsl.h}, ${brandPrimaryHsl.s}%, ${brandPrimaryHsl.l}%, 0.07)`} strokeWidth="0.2" />
          <line x1="20%" y1="80%" x2="70%" y2="10%" stroke={`hsla(${brandPrimaryHsl.h}, ${brandPrimaryHsl.s}%, ${brandPrimaryHsl.l}%, 0.07)`} strokeWidth="0.2" />
          <line x1="50%" y1="50%" x2="30%" y2="70%" stroke={`hsla(${brandPrimaryHsl.h}, ${brandPrimaryHsl.s}%, ${brandPrimaryHsl.l}%, 0.07)`} strokeWidth="0.2" />
        </svg>
      </div>
    );
  }

  // For non-reduced motion, the SVG is populated by GSAP
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      <svg ref={containerRef} width="100%" height="100%" className="block" preserveAspectRatio="xMidYMid slice">
        {/* Lines dynamically added by GSAP */}
      </svg>
    </div>
  );
});
AnimatedHeroBackground.displayName = "AnimatedHeroBackground";
        {/* Lines will be dynamically added here by GSAP */}
      </svg>
    </div>
  );
});
AnimatedHeroBackground.displayName = "AnimatedHeroBackground";

export default AnimatedHeroBackground;
