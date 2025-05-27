
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      icon: '🎯',
      title: 'UX Strategy',
      description: 'Strategic planning and methodology to align user needs with business objectives across enterprise products'
    },
    {
      icon: '🔍',
      title: 'User Research',
      description: 'Comprehensive research strategy including interviews, analytics, personas, and user journey mapping'
    },
    {
      icon: '🎨',
      title: 'Product Design',
      description: 'End-to-end design process from wireframing to high-fidelity prototypes and usability testing'
    },
    {
      icon: '🏗️',
      title: 'Information Architecture',
      description: 'Structuring content, navigation systems, site maps and user flows for intuitive experiences'
    },
    {
      icon: '📊',
      title: 'Product Management',
      description: 'Strategic roadmap planning, stakeholder alignment, and feature prioritization for product success'
    },
    {
      icon: '✍️',
      title: 'Content Strategy',
      description: 'Content planning, information design, and editorial guidelines for consistent user experiences'
    }
  ];

  return (
    <section className="mb-6 md:mb-8">
      <motion.h3
        className="text-lg font-medium mb-3 md:mb-4"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        Skills & Expertise
      </motion.h3>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50/50 transition-colors duration-200"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
          >
            <span className="text-lg flex-shrink-0 mt-0.5">{skill.icon}</span>
            <div>
              <h4 className="font-medium text-gray-900 text-sm mb-1">{skill.title}</h4>
              <p className="text-gray-600 text-xs leading-relaxed">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
