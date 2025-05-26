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
    description: 'Strategic planning and methodology to align user needs with business objectives across enterprise products.',
    icon: '🎯',
    size: 'large',
    color: 'bg-gradient-to-r from-[#177863]/8 to-[#177863]/4 border-[#177863]/20'
  },
  {
    title: 'User Research',
    description: 'Comprehensive research strategy including interviews, analytics, personas, and user journey mapping.',
    icon: '🔍',
    size: 'small',
    color: 'bg-gradient-to-r from-[#16325A]/8 to-[#16325A]/4 border-[#16325A]/20'
  },
  {
    title: 'Product Design',
    description: 'End-to-end design process from wireframing to high-fidelity prototypes and usability testing.',
    icon: '🎨',
    size: 'large',
    color: 'bg-gradient-to-r from-[#F8F4F2]/60 to-[#F8F4F2]/30 border-[#177863]/15'
  },
  {
    title: 'Information Architecture',
    description: 'Structuring content, navigation systems, site maps and user flows.',
    icon: '🏗️',
    size: 'small',
    color: 'bg-gradient-to-r from-[#177863]/6 to-[#16325A]/6 border-[#16325A]/15'
  },
  {
    title: 'Product Management',
    description: 'Strategic roadmap planning, stakeholder alignment, and feature prioritization for product success.',
    icon: '📊',
    size: 'large',
    color: 'bg-gradient-to-r from-[#16325A]/8 to-[#177863]/8 border-[#177863]/20'
  },
  {
    title: 'Content Strategy',
    description: 'Content planning, information design, and editorial guidelines for consistent user experiences.',
    icon: '✍️',
    size: 'small',
    color: 'bg-gradient-to-r from-[#F8F4F2]/50 to-[#16325A]/8 border-[#16325A]/15'
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
        className={`relative rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ease-in-out ${skill.color} border border-opacity-20 cursor-pointer overflow-hidden group`}
        tabIndex={0}
        aria-label={skill.title}
        onClick={onCardClick}
      >
        <CardContent className="flex items-center p-6 text-foreground">
          {/* Left side - Icon and main content */}
          <div className="flex-1">
            <div className="flex items-start gap-5">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${index % 2 === 0 ? 'bg-[#177863]/12' : 'bg-[#16325A]/12'} flex-shrink-0`}>
                <span className={`text-2xl ${index % 2 === 0 ? 'text-[#177863]' : 'text-[#16325A]'}`} role="img" aria-label={skill.title}>
                  {skill.icon}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">{skill.title}</h3>
                <p className="text-foreground/75 text-sm leading-relaxed">{skill.description}</p>
              </div>
            </div>
          </div>

          {/* Right side - Decorative element with unique emoji */}
          <div className="flex-shrink-0 ml-6">
            <div className={`w-16 h-16 rounded-full ${index % 2 === 0 ? 'bg-[#177863]/8' : 'bg-[#16325A]/8'} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
              <span className={`text-2xl ${index % 2 === 0 ? 'text-[#177863]/40' : 'text-[#16325A]/40'}`}>
                {skill.title === 'UX Strategy' ? '📈' :
                 skill.title === 'User Research' ? '🔍' :
                 skill.title === 'Product Design' ? '🎨' :
                 skill.title === 'Information Architecture' ? '🏗️' :
                 skill.title === 'Product Management' ? '📊' : '✍️'}
              </span>
            </div>
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
        <div className="text-left mb-4"> {/* Match other sections spacing */}
          {/* Match Get In Touch title size */}
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            <ScrambleIn
              text="Skills & Expertise"
              scrambleSpeed={35}
              scrambledLetterCount={2}
              className="text-gray-900"
              scrambledClassName="text-gray-400"
              autoStart={true}
            />
          </h3>
          <p className="text-foreground text-base leading-relaxed"> {/* Left aligned, removed max-width and centering */}
            With over 8 years of experience, I've developed a comprehensive skill set focused on creating exceptional user experiences for enterprise products.
          </p>
        </div>
        <div ref={gridRef} className="grid grid-cols-1 gap-4"> {/* Single column layout like Salesforce */}
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


