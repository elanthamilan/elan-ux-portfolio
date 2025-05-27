import React from 'react';
import UnifiedAccordion from './UnifiedAccordion';

const SKILLS_DATA = [
  {
    id: 'product-design',
    title: 'Product Design',
    description: 'End-to-end design from wireframes to prototypes and usability testing',
    icon: 'design_services'
  },
  {
    id: 'ux-strategy',
    title: 'UX Strategy',
    description: 'Strategic planning to align user needs with business objectives',
    icon: 'target'
  },
  {
    id: 'user-research',
    title: 'User Research',
    description: 'Interviews, analytics, personas, and user journey mapping',
    icon: 'search'
  },
  {
    id: 'information-architecture',
    title: 'Information Architecture',
    description: 'Structuring content and navigation for intuitive experiences',
    icon: 'architecture'
  },
  {
    id: 'product-management',
    title: 'Product Management',
    description: 'Roadmap planning, stakeholder alignment, and feature prioritization',
    icon: 'analytics'
  },
  {
    id: 'content-strategy',
    title: 'Content Strategy',
    description: 'Content planning and editorial guidelines for consistency',
    icon: 'edit'
  }
];

const Skills = React.memo(() => {
  return (
    <section className="mb-8">
      <UnifiedAccordion
        title="🛠️ My Problem-Solving Toolkit"
        items={SKILLS_DATA}
      />
    </section>
  );
});
Skills.displayName = "Skills";

export default Skills;


