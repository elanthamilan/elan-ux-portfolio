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
    title: 'Interaction Design',
    description: 'Designing engaging user experiences through micro-interactions, animations, and motion design.',
    icon: '✨',
    size: 'large',
    color: 'bg-pink-50 dark:bg-pink-900/20 border-pink-100 dark:border-pink-800'
  },
  {
    title: 'Product Strategy',
    description: 'Applying user-centered design thinking and creating product roadmaps to align product vision with user needs.',
    icon: '📈',
    size: 'large',
    color: 'bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-800'
  },
  {
    title: 'UI Design',
    description: 'Creating visually appealing and user-friendly interfaces through wireframing, prototyping, and visual design.',
    icon: '🎨',
    size: 'medium',
    color: 'bg-white/90 dark:bg-gray-900/80 border-gray-100 dark:border-gray-800'
  },
  {
    title: 'UX Research',
    description: 'Conducting user interviews, surveys, usability testing, and analyzing data to understand user needs and behaviors.',
    icon: '🔍',
    size: 'medium',
    color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800'
  },
  {
    title: 'Design Systems',
    description: 'Creating and maintaining component libraries, style guides, and design tokens to ensure consistency and scalability.',
    icon: '🎯',
    size: 'medium',
    color: 'bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800'
  },
  {
    title: 'Accessibility',
    description: 'Ensuring WCAG compliance, inclusive design, and usability for all users.',
    icon: '♿',
    size: 'medium',
    color: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-100 dark:border-yellow-800'
  },
  {
    title: 'Coding',
    description: 'Building interactive prototypes and implementing designs using React, TypeScript, and modern web technologies.',
    icon: '💻',
    size: 'medium',
    color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-100 dark:border-purple-800'
  }
];

const SkillsBentoGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    if (gridRef.current) {
      gsap.from(gridRef.current.querySelectorAll('.reveal'), {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top center+=200',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
      });
    }
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
          <p className="text-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed">
            With over 8 years of experience, I've developed a comprehensive skill set focused on creating exceptional user experiences for enterprise products.
          </p>
        </div>
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {skills.map((skill) => (
            <div
              className={`reveal ${skill.size === 'large' ? 'col-span-2' : ''}`}
              key={skill.title}
            >
              <Card
                className={`flex flex-col items-start justify-between rounded-3xl shadow-xl hover:scale-[1.02] transition-transform ${skill.color} p-6 ${skill.size === 'large' ? 'p-8' : ''} h-full`}
                tabIndex={0}
                aria-label={skill.title}
                onClick={handleRipple}
              >
                <CardContent className="flex flex-col items-start p-0 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl" role="img" aria-label={skill.title}>{skill.icon}</span>
                    <h3 className={`font-semibold text-foreground ${skill.size === 'large' ? 'text-2xl' : 'text-xl'}`}>{skill.title}</h3>
                  </div>
                  <p className="text-foreground/80 text-base">{skill.description}</p>
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
    background: rgba(25, 118, 210, 0.18);
    pointer-events: none;
    z-index: 10;
  }
  @keyframes ripple {
    to {
      transform: scale(2.5);
      opacity: 0;
    }
  }
  .m3-card {
    position: relative;
    overflow: hidden;
  }
`}</style>
