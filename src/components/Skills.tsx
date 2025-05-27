
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import ScrambleIn from "../fancy/components/text/scramble-in";

interface SkillData {
  title: string;
  description: string;
  icon: string;
}

const SKILLS_DATA: SkillData[] = [
  {
    title: 'UX Strategy',
    description: 'Strategic planning and methodology to align user needs with business objectives across enterprise products',
    icon: '🎯'
  },
  {
    title: 'User Research',
    description: 'Comprehensive research strategy including interviews, analytics, personas, and user journey mapping',
    icon: '🔍'
  },
  {
    title: 'Product Design',
    description: 'End-to-end design process from wireframing to high-fidelity prototypes and usability testing',
    icon: '🎨'
  },
  {
    title: 'Information Architecture',
    description: 'Structuring content, navigation systems, site maps and user flows for intuitive experiences',
    icon: '🏗️'
  },
  {
    title: 'Product Management',
    description: 'Strategic roadmap planning, stakeholder alignment, and feature prioritization for product success',
    icon: '📊'
  },
  {
    title: 'Content Strategy',
    description: 'Content planning, information design, and editorial guidelines for consistent user experiences',
    icon: '✍️'
  }
];

// Simple skill list item component
const SkillListItem = React.memo(({ skill, index }: { skill: SkillData, index: number }) => {
  return (
    <motion.div
      className="reveal flex items-start gap-3 py-3 border-b border-gray-100 last:border-b-0"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
    >
      {/* Icon */}
      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
        <span className="text-xl" role="img" aria-label={skill.title}>
          {skill.icon}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-800 mb-1">{skill.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
      </div>
    </motion.div>
  );
});
SkillListItem.displayName = "SkillListItem";

const SkillsList = React.memo(() => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    let st: ScrollTrigger | undefined;
    const currentListRef = listRef.current;

    if (currentListRef) {
      gsap.set(currentListRef.querySelectorAll('.reveal'), { opacity: 1, x: 0 });
      st = ScrollTrigger.create({
        trigger: currentListRef,
        start: 'top center+=200',
        toggleActions: 'play none none reverse',
        onEnter: () => gsap.fromTo(currentListRef.querySelectorAll('.reveal'),
                                  { opacity: 0, x: -20 },
                                  { opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: 'power4.out' })
      });
    }
    return () => {
      st?.kill();
    };
  }, []);

  return (
    <section className="mb-8 bg-background text-foreground">
      <div>
        <div className="text-left mb-6">
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
          <p className="text-foreground leading-relaxed font-normal">
            <strong>"I design complex software and make it usable."</strong> Here's how I turn chaos into clarity - each skill is a weapon against complexity, tested in the real world of enterprise systems where failure isn't an option.
          </p>
        </div>
        <div ref={listRef} className="bg-white rounded-lg border border-gray-200 p-4">
          {SKILLS_DATA.map((skill, index) => (
            <SkillListItem
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
SkillsList.displayName = "SkillsList";

export default SkillsList;
