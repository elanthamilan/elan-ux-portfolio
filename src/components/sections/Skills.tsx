import { useEffect, useRef } from 'react';
import { useGSAP } from '../../lib/gsap/useGSAP.js';
import { motion } from 'framer-motion';

const skills = [
  {
    title: 'UX Research',
    description: 'User interviews, usability testing, and data analysis to inform design decisions.',
    icon: '🔍'
  },
  {
    title: 'Interaction Design',
    description: 'Creating intuitive and engaging user interfaces with micro-interactions.',
    icon: '🎯'
  },
  {
    title: 'Design Systems',
    description: 'Building scalable and maintainable design systems for enterprise products.',
    icon: '🎨'
  },
  {
    title: 'Accessibility',
    description: 'Ensuring digital products are usable by everyone, regardless of abilities.',
    icon: '♿'
  },
  {
    title: 'Prototyping',
    description: 'Rapid prototyping and iteration using modern design tools.',
    icon: '⚡'
  },
  {
    title: 'User Testing',
    description: 'Conducting user research and testing to validate design solutions.',
    icon: '👥'
  }
];

const Skills = () => {
  const { elementRef, scrollAnimation } = useGSAP();
  const skillsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (skillsRef.current) {
      scrollAnimation(
        skillsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out'
        },
        {
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        }
      );
    }
  }, []);

  return (
    <motion.section
      ref={skillsRef}
      initial={{ opacity: 0, y: 20 }}
      className="py-20 px-4 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
