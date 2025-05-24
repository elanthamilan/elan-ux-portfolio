import React, { useRef, useEffect, useCallback } from 'react'; // Imported React and useCallback
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from "@/components/ui/card";

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
    title: 'UX Strategist',
    description: 'Objectives clarification, Employs methodology, Vision and solutioning, Planning prioritization, Roadmap strategies, Execution oversight, Measurement.',
    icon: '📈', // Or '💼'
    size: 'large',
    color: 'bg-accent-light border-brand-primary'
  },
  {
    title: 'User Researcher',
    description: 'Owns research strategy, Performs heuristic reviews, Plans and conducts research, Reviews analytics, Builds personas, empathy maps, journeys, Voice of the user/customer.',
    icon: '🔍', // Or '💼'
    size: 'large',
    color: 'bg-accent-light border-brand-secondary'
  },
  {
    title: 'Business Analyst',
    description: 'Understands business strategy, scope, Articulates and clarifies business objectives, Deep product knowledge, Defines business value, Voice of the business.',
    icon: '📊', // Or '⚙️'
    size: 'medium',
    color: 'bg-accent-bg border-slate-200'
  },
  {
    title: 'Information Architect',
    description: 'Person-logical architectures, Navigation schemas, Organization schemas, Scalable patterns, Journey maps, Taxonomies.',
    icon: '🧭', // Or '⚙️'
    size: 'medium',
    color: 'bg-accent-off-white border-slate-200'
  },
  {
    title: 'Interaction Designer',
    description: 'Interaction modeling, Experience design, Mental modeling, Storyboards, Wireframes, Mockups, UI accessibility.',
    icon: '✨', // Or '⚙️'
    size: 'medium',
    color: 'bg-accent-bg border-slate-200'
  },
  {
    title: 'Content Strategist',
    description: 'Content mapping, Tone, voice, style, Content creation, Cultural context review, Content organization, Copy editing, Communications.',
    icon: '✍️', // Or '⚙️'
    size: 'medium',
    color: 'bg-accent-off-white border-slate-200'
  },
  {
    title: 'Visual Designer',
    description: 'Graphics and art, Iconography, Typography, Color, Style, Branding, Spacing and hierarchy.',
    icon: '🎨', // Or '⚙️'
    size: 'large',
    color: 'bg-accent-bg border-slate-200'
  },
  {
    title: 'Front-End Developer',
    description: 'Code to implement designs, Front-end frameworks, Development languages, Web, native, hybrid management, Functionality and integration, Coded accessibility.',
    icon: '💻', // Or '⚙️'
    size: 'large',
    color: 'bg-accent-off-white border-slate-200'
  }
];

// Memoized SkillCardDisplay component
const SkillCardDisplay = React.memo(({ skill, index, onCardClick }: { skill: SkillCardData, index: number, onCardClick: (e: React.MouseEvent<HTMLDivElement>) => void }) => {
  return (
    <div
      className={`reveal ${skill.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'} sm:col-span-1`}
      // key prop is correctly on the SkillCardDisplay in the map, not needed here
    >
      <Card
        className={`flex flex-col items-start justify-between rounded-3xl shadow-md hover:shadow-lg hover:scale-[1.02] focus-within:ring-2 focus-within:ring-brand-primary focus-within:ring-offset-2 transition-all duration-300 ease-in-out ${skill.color} px-3 py-4 xs:p-4 ${skill.size === 'large' ? 'md:p-8' : 'sm:p-6'} h-full border`} // Responsive padding
        tabIndex={0}
        aria-label={skill.title}
        onClick={onCardClick}
      >
        <CardContent className="flex flex-col items-start p-0 h-full text-foreground">
          <div className="flex items-center gap-2 xs:gap-3 mb-3 xs:mb-4"> {/* Adjusted gap and margin */}
            <span className={`text-3xl xs:text-4xl ${index < 2 ? 'text-brand-primary' : 'text-brand-secondary'}`} role="img" aria-label={skill.title}>{skill.icon}</span> {/* Responsive icon size */}
            {/* Adaptive Typography for skill title H3 */}
            <h3 className={`font-semibold text-foreground ${skill.size === 'large' ? 'text-xl xs:text-2xl' : 'text-lg xs:text-xl'}`}>{skill.title}</h3>
          </div>
          <p className="text-foreground text-sm xs:text-base">{skill.description}</p> {/* Responsive description text */}
        </CardContent>
      </Card>
    </div>
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
    <section className="py-12 xs:py-16 md:py-24 bg-background text-foreground"> {/* Adjusted vertical padding */}
      <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8"> {/* Adjusted horizontal padding */}
        <div className="text-center mb-10 md:mb-14"> {/* Adjusted margin */}
          {/* Adaptive Typography for Skills H2 */}
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-heading font-semibold mb-3 xs:mb-4 text-foreground">Skills & Expertise</h2>
          <p className="text-foreground max-w-2xl mx-auto text-base xs:text-lg leading-relaxed"> {/* Adjusted typography */}
            With over 8 years of experience, I've developed a comprehensive skill set focused on creating exceptional user experiences for enterprise products.
          </p>
        </div>
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 md:gap-8 max-w-7xl mx-auto"> {/* Adjusted gap */}
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

<style>{`
  .ripple {
    position: absolute;
    border-radius: 9999px;
    transform: scale(0);
    animation: ripple 500ms linear;
    background: rgba(42, 119, 121, 0.2); /* Ripple color based on brand-primary */
    pointer-events: none;
    z-index: 10;
  }
  @keyframes ripple {
    to {
      transform: scale(2.5);
      opacity: 0;
    }
  }
  .m3-card { /* This class seems unused in the component, can be removed if not needed elsewhere */
    position: relative;
    overflow: hidden;
  }
`}</style>
