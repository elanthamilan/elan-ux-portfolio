import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const AnimatedHeroBackground = React.memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) {
      return;
    }

    const container = containerRef.current;
    const shapes: HTMLDivElement[] = [];

    // Create floating shapes
    for (let i = 0; i < 6; i++) {
      const shape = document.createElement("div");
      shape.className = `absolute rounded-full opacity-10 bg-gradient-to-br from-brand-primary to-brand-secondary`;
      
      const size = Math.random() * 100 + 50;
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
      shape.style.left = `${Math.random() * 100}%`;
      shape.style.top = `${Math.random() * 100}%`;
      
      container.appendChild(shape);
      shapes.push(shape);
    }

    // Animate shapes
    shapes.forEach((shape, index) => {
      gsap.to(shape, {
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        rotation: 360,
        duration: 20 + index * 5,
        repeat: -1,
        yoyo: true,
        ease: "none"
      });
    });

    return () => {
      shapes.forEach(shape => {
        if (shape.parentNode) {
          shape.parentNode.removeChild(shape);
        }
      });
    };
  }, [prefersReducedMotion]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    />
  );
});

AnimatedHeroBackground.displayName = "AnimatedHeroBackground";

export default AnimatedHeroBackground;
