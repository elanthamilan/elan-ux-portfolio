import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

// UX-related icon components
const UXIcon: React.FC<{ type: string; className?: string }> = ({ type, className = "" }) => {
  const iconClass = `w-12 h-12 ${className}`;

  switch (type) {
    case 'userFlow':
      return (
        <svg className={iconClass} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="45" cy="15" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="30" cy="45" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M23 15 L37 15" stroke="currentColor" strokeWidth="2"/>
          <path d="M37 23 L37 37" stroke="currentColor" strokeWidth="2"/>
        </svg>
      );
    case 'wireframe':
      return (
        <svg className={iconClass} viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="5" width="40" height="50" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="10" y="10" width="30" height="8" rx="2" fill="currentColor" opacity="0.3"/>
          <rect x="10" y="22" width="20" height="4" rx="1" fill="currentColor" opacity="0.5"/>
          <rect x="10" y="30" width="25" height="4" rx="1" fill="currentColor" opacity="0.5"/>
          <rect x="10" y="38" width="15" height="4" rx="1" fill="currentColor" opacity="0.5"/>
          <circle cx="35" cy="40" r="3" fill="currentColor" opacity="0.4"/>
        </svg>
      );
    case 'prototype':
      return (
        <svg className={iconClass} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="5" width="20" height="15" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="30" y="5" width="20" height="15" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="5" y="35" width="20" height="15" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="30" y="35" width="20" height="15" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M25 12.5 L30 12.5" stroke="currentColor" strokeWidth="2"/>
          <path d="M15 20 L15 35" stroke="currentColor" strokeWidth="2"/>
          <path d="M40 20 L40 35" stroke="currentColor" strokeWidth="2"/>
        </svg>
      );
    case 'userPersona':
      return (
        <svg className={iconClass} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="18" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M10 42 C10 35 16 30 25 30 C34 30 40 35 40 42" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="15" cy="8" r="2" fill="currentColor" opacity="0.6"/>
          <circle cx="35" cy="8" r="2" fill="currentColor" opacity="0.6"/>
          <circle cx="8" cy="25" r="2" fill="currentColor" opacity="0.6"/>
          <circle cx="42" cy="25" r="2" fill="currentColor" opacity="0.6"/>
        </svg>
      );
    case 'analytics':
      return (
        <svg className={iconClass} viewBox="0 0 55 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="25" width="8" height="15" rx="2" fill="currentColor" opacity="0.6"/>
          <rect x="18" y="15" width="8" height="25" rx="2" fill="currentColor" opacity="0.7"/>
          <rect x="31" y="20" width="8" height="20" rx="2" fill="currentColor" opacity="0.5"/>
          <rect x="44" y="10" width="8" height="30" rx="2" fill="currentColor" opacity="0.8"/>
          <path d="M5 5 L50 5" stroke="currentColor" strokeWidth="2"/>
          <circle cx="13" cy="5" r="2" fill="currentColor"/>
          <circle cx="26" cy="5" r="2" fill="currentColor"/>
          <circle cx="39" cy="5" r="2" fill="currentColor"/>
        </svg>
      );
    case 'designSystem':
      return (
        <svg className={iconClass} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="5" width="15" height="15" rx="3" fill="currentColor" opacity="0.4"/>
          <rect x="25" y="5" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="12.5" cy="32.5" r="7.5" fill="currentColor" opacity="0.5"/>
          <circle cx="32.5" cy="32.5" r="7.5" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="42" y="25" width="6" height="15" rx="3" fill="currentColor" opacity="0.6"/>
        </svg>
      );
    default:
      return null;
  }
};

const UXAnimatedBackground = React.memo(() => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [icons, setIcons] = useState<Array<{
    type: string;
    x: number;
    y: number;
    id: number;
  }>>([]);

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
    if (prefersReducedMotion) {
      setIcons([]);
      return;
    }

    const iconTypes = ['userFlow', 'wireframe', 'prototype', 'userPersona', 'analytics', 'designSystem'];
    const newIcons = [];

    // Create floating UX icons
    for (let i = 0; i < 8; i++) {
      newIcons.push({
        type: iconTypes[Math.floor(Math.random() * iconTypes.length)],
        x: Math.random() * 90 + 5,
        y: Math.random() * 90 + 5,
        id: i
      });
    }

    setIcons(newIcons);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion || icons.length === 0) return;

    const elements = icons.map(icon => document.querySelector(`[data-icon-id="${icon.id}"]`));

    elements.forEach((element, index) => {
      if (!element) return;

      gsap.to(element, {
        x: `+=${Math.random() * 100 - 50}`,
        y: `+=${Math.random() * 100 - 50}`,
        rotation: Math.random() * 360,
        duration: 25 + index * 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Add subtle opacity animation
      gsap.to(element, {
        opacity: 0.15 + Math.random() * 0.25,
        duration: 8 + index * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

    return () => {
      elements.forEach(element => {
        if (element) {
          gsap.killTweensOf(element);
        }
      });
    };
  }, [icons, prefersReducedMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {icons.map((icon) => (
        <div
          key={icon.id}
          data-icon-id={icon.id}
          className="absolute text-brand-primary/20 opacity-20"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            transform: 'scale(0.75)'
          }}
        >
          <UXIcon type={icon.type} />
        </div>
      ))}
    </div>
  );
});

UXAnimatedBackground.displayName = "UXAnimatedBackground";

export default UXAnimatedBackground;
