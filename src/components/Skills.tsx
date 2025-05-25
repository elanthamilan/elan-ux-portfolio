import React, { useRef, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  title: string;
  description: string;
  icon: string;
  size: "large" | "small";
  color: string;
}

const SKILLS_DATA: Skill[] = [
  {
    title: "UX Strategy",
    description: "Objectives clarification, Employs methodology, Vision and solutioning, Planning prioritization, Roadmap strategies.",
    icon: "📈",
    size: "large",
    color: "bg-gradient-to-br from-brand-primary/12 to-brand-primary/6 border-brand-primary shadow-brand-primary/20"
  },
  {
    title: "Product Design",
    description: "End-to-end product design, Wireframing, Prototyping, Visual design, Interaction design, Usability testing.",
    icon: "✨",
    size: "large",
    color: "bg-gradient-to-br from-brand-tertiary/15 to-brand-tertiary/8 border-brand-tertiary shadow-brand-tertiary/25"
  },
  {
    title: "User Research",
    description: "Research strategy, Heuristic reviews, User interviews, Analytics, Personas, Journey mapping.",
    icon: "🔍",
    size: "small",
    color: "bg-gradient-to-br from-brand-secondary/12 to-brand-secondary/6 border-brand-secondary shadow-brand-secondary/20"
  },
  {
    title: "Design Systems",
    description: "Component libraries, Design tokens, Documentation, Governance, Scalability.",
    icon: "🧩",
    size: "small",
    color: "bg-gradient-to-br from-brand-primary/12 to-brand-primary/6 border-brand-primary shadow-brand-primary/20"
  },
  {
    title: "Frontend Development",
    description: "HTML, CSS, JavaScript, React, TypeScript, Responsive design.",
    icon: "💻",
    size: "small",
    color: "bg-gradient-to-br from-brand-secondary/12 to-brand-secondary/6 border-brand-secondary shadow-brand-secondary/20"
  },
  {
    title: "Collaboration",
    description: "Cross-functional teamwork, Stakeholder management, Design workshops, Agile methodologies.",
    icon: "🤝",
    size: "small",
    color: "bg-gradient-to-br from-brand-tertiary/12 to-brand-tertiary/6 border-brand-tertiary shadow-brand-tertiary/20"
  }
];

interface SkillCardDisplayProps {
  skill: Skill;
  index: number;
}

const SkillCardDisplay = React.memo(({ skill, index }: SkillCardDisplayProps) => {
  return (
    <div className={`reveal ${skill.size === "large" ? "md:col-span-2" : "md:col-span-1"} sm:col-span-2`}>
      <Card
        className={`flex flex-col items-start justify-between rounded-3xl hover:shadow-xl transition-all duration-300 ease-in-out ${skill.color} p-6 h-full border-2 cursor-default hover:scale-[1.02] hover:border-opacity-80`}
        tabIndex={0}
        aria-label={skill.title}
      >
        <CardContent className="flex flex-col items-start p-0 h-full text-foreground w-full">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`text-4xl ${
                index === 0 ? "text-brand-primary" :
                index === 1 ? "text-brand-tertiary" :
                index === 2 ? "text-brand-secondary" :
                index === 3 ? "text-brand-primary" :
                index === 4 ? "text-brand-secondary" : "text-brand-tertiary"
              }`}
              role="img"
              aria-label={skill.title}
            >
              {skill.icon}
            </span>
            <h3 className={`font-semibold text-foreground ${skill.size === "large" ? "text-2xl" : "text-xl"} ${index === 1 ? "font-bold" : ""}`}>
              {skill.title}
            </h3>
          </div>
          <p className="text-foreground text-base leading-relaxed">
            {skill.description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
});

SkillCardDisplay.displayName = "SkillCardDisplay";

const SkillsBentoGrid = React.memo(() => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    let st: ScrollTrigger | undefined;
    const currentGridRef = gridRef.current;

    if (currentGridRef) {
      gsap.set(currentGridRef.querySelectorAll(".reveal"), { opacity: 1, y: 0 });

      st = ScrollTrigger.create({
        trigger: currentGridRef,
        start: "top center+=200",
        toggleActions: "play none none reverse",
        onEnter: () => gsap.fromTo(
          currentGridRef.querySelectorAll(".reveal"),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power4.out" }
        )
      });
    }

    return () => {
      st?.kill();
    };
  }, []);

  return (
    <section className="py-12 xs:py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-heading font-semibold mb-3 xs:mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-foreground max-w-2xl mx-auto text-base xs:text-lg leading-relaxed">
            With over 8 years of experience, I've developed a comprehensive skill set focused on creating exceptional user experiences for enterprise products.
          </p>
        </div>
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {SKILLS_DATA.map((skill, index) => (
            <SkillCardDisplay
              key={skill.title}
              skill={skill}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

SkillsBentoGrid.displayName = "SkillsBentoGrid";

export default SkillsBentoGrid;
