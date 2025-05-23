import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from "@/components/ui/card";

interface SkillCard {
  title: string;
  description: string;
  icon: string;
  size?: 'large' | 'medium' | 'small';
  color?: string;
}

const skills: SkillCard[] = [
  {
    title: 'Product Strategy',
    description: 'Applying user-centered design thinking and creating product roadmaps to align product vision with user needs.',
    icon: '📈', // Consider updating icon if desired
    size: 'large',
    color: 'bg-accent-light border-brand-primary' // Prominent background and border
  },
  {
    title: 'Interaction Design',
    description: 'Designing engaging user experiences through micro-interactions, animations, and motion design.',
    icon: '✨', // Consider updating icon if desired
    size: 'large',
    color: 'bg-accent-light border-brand-secondary' // Prominent background and border
  },
  {
    title: 'UI Design',
    description: 'Creating visually appealing and user-friendly interfaces through wireframing, prototyping, and visual design.',
    icon: '🎨',
    size: 'medium',
    color: 'bg-accent-bg border-slate-200'
  },
  {
    title: 'UX Research',
    description: 'Conducting user interviews, surveys, usability testing, and analyzing data to understand user needs and behaviors.',
    icon: '🔍',
    size: 'medium',
    color: 'bg-accent-off-white border-slate-200'
  },
  {
    title: 'Design Systems',
    description: 'Creating and maintaining component libraries, style guides, and design tokens to ensure consistency and scalability.',
    icon: '🎯',
    size: 'medium',
    color: 'bg-accent-bg border-slate-200'
  },
  {
    title: 'Accessibility',
    description: 'Ensuring WCAG compliance, inclusive design, and usability for all users.',
    icon: '♿',
    size: 'medium',
    color: 'bg-accent-off-white border-slate-200'
  },
  {
    title: 'Coding',
    description: 'Building interactive prototypes and implementing designs using React, TypeScript, and modern web technologies.',
    icon: '💻',
    size: 'medium',
    color: 'bg-accent-bg border-slate-200'
  }
];

const SkillsBentoGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    let st: ScrollTrigger | undefined;
    if (gridRef.current) {
      // Ensure elements are visible by default
      gsap.set(gridRef.current.querySelectorAll('.reveal'), { opacity: 1, y: 0 });

      // Animate from a slightly visible state or use fromTo for robustness
      st = ScrollTrigger.create({
        trigger: gridRef.current,
        start: 'top center+=200', // Existing start condition
        toggleActions: 'play none none reverse', // Existing toggleActions
        onEnter: () => gsap.fromTo(gridRef.current.querySelectorAll('.reveal'),
                                  { opacity: 0, y: 20 }, // Start from opacity 0 and slight y offset
                                  { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power4.out' })
        // Consider onLeaveBack or onEnterBack if specific reverse animations are needed,
        // but toggleActions already handles reverse.
      });
    }
    return () => {
      st?.kill(); // Kill the ScrollTrigger instance on component unmount
    };
  }, []);

  const handleRipple = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
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
  };

  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-foreground">Skills & Expertise</h2>
          <p className="text-foreground max-w-2xl mx-auto text-lg leading-relaxed"> {/* Changed text-foreground/80 to text-foreground for better contrast */}
            With over 8 years of experience, I've developed a comprehensive skill set focused on creating exceptional user experiences for enterprise products.
          </p>
        </div>
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {skills.map((skill, index) => ( // Added index for key if titles aren't unique, but title should be fine
            <div
              className={`reveal ${skill.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'} sm:col-span-1`} // Adjusted responsive col-span
              key={skill.title}
            >
              <Card
                className={`flex flex-col items-start justify-between rounded-3xl shadow-lg hover:scale-[1.02] focus-within:ring-2 focus-within:ring-brand-primary focus-within:ring-offset-2 transition-all duration-300 ease-in-out ${skill.color} p-6 ${skill.size === 'large' ? 'md:p-8' : 'p-6'} h-full border`} // Added border for all cards, updated shadow, focus states
                tabIndex={0}
                aria-label={skill.title}
                onClick={handleRipple} // Ripple effect retained
              >
                <CardContent className="flex flex-col items-start p-0 h-full text-foreground"> {/* Ensured text-foreground */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-4xl ${index < 2 ? 'text-brand-primary' : 'text-brand-secondary'}`} role="img" aria-label={skill.title}>{skill.icon}</span> {/* Conditional icon color */}
                    <h3 className={`font-semibold text-foreground ${skill.size === 'large' ? 'text-2xl' : 'text-xl'}`}>{skill.title}</h3>
                  </div>
                  <p className="text-foreground text-base">{skill.description}</p> {/* Changed text-foreground/80 to text-foreground */}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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
