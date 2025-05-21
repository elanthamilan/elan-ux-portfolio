import { useEffect, useRef } from 'react';
import { useGSAP } from '../lib/gsap/useGSAP.js';
import { motion } from 'framer-motion';

interface SkillCard {
  title: string;
  description: string;
  icon: string;
  color: string;
  size: 'small' | 'medium' | 'large';
}

const skills: SkillCard[] = [
  {
    title: 'UX Research',
    description: 'User interviews, surveys, usability testing, and data analysis',
    icon: '🔍',
    color: 'bg-blue-50 dark:bg-blue-900/20',
    size: 'medium'
  },
  {
    title: 'UI Design',
    description: 'Wireframing, prototyping, and visual design',
    icon: '🎨',
    color: 'bg-purple-50 dark:bg-purple-900/20',
    size: 'large'
  },
  {
    title: 'Interaction Design',
    description: 'Micro-interactions, animations, and motion design',
    icon: '✨',
    color: 'bg-pink-50 dark:bg-pink-900/20',
    size: 'small'
  },
  {
    title: 'Design Systems',
    description: 'Component libraries, style guides, and design tokens',
    icon: '🎯',
    color: 'bg-green-50 dark:bg-green-900/20',
    size: 'medium'
  },
  {
    title: 'Accessibility',
    description: 'WCAG compliance, inclusive design, and usability',
    icon: '♿',
    color: 'bg-yellow-50 dark:bg-yellow-900/20',
    size: 'small'
  },
  {
    title: 'Product Strategy',
    description: 'User-centered design thinking and product roadmaps',
    icon: '📈',
    color: 'bg-red-50 dark:bg-red-900/20',
    size: 'large'
  }
];

const SkillsBentoGrid = () => {
  const { elementRef, animateBentoGrid } = useGSAP();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      const elements = Array.from(gridRef.current.children);
      animateBentoGrid(elements);
    }
  }, []);

  return (
    <div 
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto"
      role="region"
      aria-label="Skills and Expertise"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.title}
          className={`
            ${skill.color}
            rounded-2xl p-6
            ${skill.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
            ${skill.size === 'medium' ? 'md:col-span-2' : ''}
            transition-all duration-300
            hover:scale-[1.02]
            hover:shadow-lg
            dark:shadow-none
          `}
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl" role="img" aria-label={skill.title}>
              {skill.icon}
            </span>
            <div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {skill.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsBentoGrid; 