import React from 'react';
import UnifiedAccordion from './UnifiedAccordion';

const INDUSTRIES_DATA = [
  {
    id: 'edtech',
    title: 'EdTech',
    description: 'Led UX strategy and design for SIS, LMS, Recruitment App, and Student Portals. Revamped SIS through evaluation, design systems, and redesign of 30+ features. Directed LMS design focusing on accessibility, usability, and scalable workflows. Designed Student Portal for seamless navigation and mobile responsiveness. Created eLearning platform for trading courses.',
    icon: 'school'
  },
  {
    id: 'ecommerce',
    title: 'eCommerce',
    description: 'Redesigned key flows for a B2B pharma eCommerce site. Designed eCommerce experiences for brands like Robinson Co. and Natural Partners. Improved product discovery, navigation and checkout flows. Crafted scalable UI systems for quick orders, subscriptions, and account management.',
    icon: 'shopping_cart'
  },
  {
    id: 'connected-tech',
    title: 'Connected Tech',
    description: 'Led design for connected home interfaces (consumer & industrial IoT). As founding member of product/design team, revamped platform and built comprehensive design system. Designed subscription-based water purifier interface and mobile app for idly dosa batter making machine. Specialized in asset management solutions for real-time tool tracking in industrial IoT settings - complex systems requiring intuitive interfaces for non-technical users.',
    icon: 'device_hub'
  },
  {
    id: 'startup',
    title: 'Startup',
    description: 'Contributed to the design and development of various startup products, focusing on user-centered design and rapid iteration. Built MVPs that scale and deliver real value.',
    icon: 'rocket_launch'
  }
];

const Industries = React.memo(() => {
  return (
    <section className="mb-6 md:mb-8">
      <UnifiedAccordion
        title="🏭 Industries I have Worked In"
        items={INDUSTRIES_DATA}
      />
    </section>
  );
});
Industries.displayName = "Industries";

export default Industries;
