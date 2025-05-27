import React, { useRef, useEffect, useCallback } from 'react'; // Imported React and useCallback
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'motion/react';
import ScrambleIn from "../fancy/components/text/scramble-in";

interface SkillCardData { // Renamed interface for clarity
  title: string;
  description: string;
  icon: string;
  size?: 'large' | 'medium' | 'small';
  color?: string;
}

// Moved skills array outside to ensure it's a stable reference if SkillsBentoGrid is memoized
const SKILLS_DATA: SkillCardData[] = [
  {
    title: 'UX Strategy',
    description: 'Strategic planning and methodology to align user needs with business objectives across enterprise products',
    icon: '🎯',
    size: 'large',
    color: 'bg-[#f0f0f0] border-[#177863]/20'
  },
  {
    title: 'User Research',
    description: 'Comprehensive research strategy including interviews, analytics, personas, and user journey mapping',
    icon: '🔍',
    size: 'small',
    color: 'bg-[#f0f0f0] border-[#16325A]/20'
  },
  {
    title: 'Product Design',
    description: 'End-to-end design process from wireframing to high-fidelity prototypes and usability testing',
    icon: '🎨',
    size: 'large',
    color: 'bg-[#f0f0f0] border-[#177863]/15'
  },
  {
    title: 'Information Architecture',
    description: 'Structuring content, navigation systems, site maps and user flows for intuitive experiences',
    icon: '🏗️',
    size: 'small',
    color: 'bg-[#f0f0f0] border-[#16325A]/15'
  },
  {
    title: 'Product Management',
    description: 'Strategic roadmap planning, stakeholder alignment, and feature prioritization for product success',
    icon: '📊',
    size: 'large',
    color: 'bg-[#f0f0f0] border-[#177863]/20'
  },
  {
    title: 'Content Strategy',
    description: 'Content planning, information design, and editorial guidelines for consistent user experiences',
    icon: '✍️',
    size: 'small',
    color: 'bg-[#f0f0f0] border-[#16325A]/15'
  }
];

// Memoized SkillCardDisplay component
const SkillCardDisplay = React.memo(({ skill, index, onCardClick }: { skill: SkillCardData, index: number, onCardClick: (e: React.MouseEvent<HTMLDivElement>) => void }) => {
  return (
    <motion.div
      className="reveal w-full"
      whileHover={{
        scale: 1.02,
        y: -2,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.99 }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
    >
      <Card
        className="relative rounded-lg cursor-pointer overflow-hidden group transition-all duration-300 bg-gray-50/50 hover:bg-gray-100/50 border border-gray-200/50 hover:border-gray-300/50"
        tabIndex={0}
        aria-label={skill.title}
        onClick={onCardClick}
      >
        <CardContent className="p-4 text-foreground relative h-full flex flex-col">
          {/* Icon at top */}
          <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 bg-gray-100/50 transition-all duration-300 group-hover:scale-105">
            <span className="text-2xl text-gray-700 transition-all duration-300 group-hover:scale-110" role="img" aria-label={skill.title}>
              {skill.icon}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 mb-3 transition-all duration-300 group-hover:text-gray-900">{skill.title}</h3>
            <p className="text-gray-600 leading-relaxed font-normal">{skill.description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
});
SkillCardDisplay.displayName = "SkillCardDisplay"; // For better debugging

const SkillsBentoGrid = React.memo(() => { // Wrapped SkillsBentoGrid with React.memo
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // gsap.registerPlugin is global, so it only needs to be called once,
    // but calling it multiple times is safe and usually done in the component using it.
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    let st: ScrollTrigger | undefined;
    const currentGridRef = gridRef.current; // Capture ref value for cleanup

    if (currentGridRef) {
      gsap.set(currentGridRef.querySelectorAll('.reveal'), { opacity: 1, y: 0 });
      st = ScrollTrigger.create({
        trigger: currentGridRef,
        start: 'top center+=200',
        toggleActions: 'play none none reverse',
        onEnter: () => gsap.fromTo(currentGridRef.querySelectorAll('.reveal'),
                                  { opacity: 0, y: 20 },
                                  { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power4.out' })
      });
    }
    return () => {
      st?.kill();
    };
  }, []); // Empty dependency array is correct here as GSAP animations are tied to the DOM element via ref

  // Memoized handleRipple function
  const handleRipple = useCallback((e: React.MouseEvent<HTMLDivElement | HTMLButtonElement | HTMLAnchorElement>) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");
    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
      ripple.remove();
    }
    button.appendChild(circle);
  }, []); // No dependencies

  return (
    <section className="mb-8 bg-background text-foreground"> {/* Removed padding, match other sections */}
      <div> {/* Removed container and padding */}
        <div className="text-left mb-8"> {/* Match other sections spacing */}
          {/* Bold brutalist typography */}
          <h3 className="text-lg font-medium mb-4 text-foreground">
            <ScrambleIn
              text="🛠️ My Problem-Solving Toolkit"
              scrambleSpeed={35}
              scrambledLetterCount={2}
              className="text-gray-900"
              scrambledClassName="text-gray-400"
              autoStart={true}
            />
          </h3>
          <p className="text-foreground leading-relaxed font-normal"> {/* Left aligned, removed max-width and centering */}
            <strong>"I design complex software and make it usable."</strong> Here's how I turn chaos into clarity - each skill is a weapon against complexity, tested in the real world of enterprise systems where failure isn't an option.
          </p>
        </div>
        <div ref={gridRef} className="grid grid-cols-1 gap-4"> {/* Single column bento grid */}
          {SKILLS_DATA.map((skill, index) => (
            <SkillCardDisplay
              key={skill.title}
              skill={skill}
              index={index}
              onCardClick={handleRipple}
            />
          ))}
        </div>
      </div>
    </section>
  );
});
SkillsBentoGrid.displayName = "SkillsBentoGrid"; // For better debugging

export default SkillsBentoGrid;


