import React, { useState } from 'react';
import { motion } from 'motion/react';
import ScrambleIn from "../fancy/components/text/scramble-in";

interface SkillData {
  title: string;
  description: string;
  icon: string;
}

const SKILLS_DATA: SkillData[] = [
  {
    title: 'Product Design',
    description: 'End-to-end design from wireframes to prototypes and usability testing',
    icon: 'design_services'
  },
  {
    title: 'UX Strategy',
    description: 'Strategic planning to align user needs with business objectives',
    icon: 'target'
  },
  {
    title: 'User Research',
    description: 'Interviews, analytics, personas, and user journey mapping',
    icon: 'search'
  },
  {
    title: 'Information Architecture',
    description: 'Structuring content and navigation for intuitive experiences',
    icon: 'architecture'
  },
  {
    title: 'Product Management',
    description: 'Roadmap planning, stakeholder alignment, and feature prioritization',
    icon: 'analytics'
  },
  {
    title: 'Content Strategy',
    description: 'Content planning and editorial guidelines for consistency',
    icon: 'edit'
  }
];

// Modern bento grid inspired by https://codepen.io/emilandersson/pen/NPWLEpg
const ModernBentoGrid = React.memo(() => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <div className="bento-grid-container relative">
      <style jsx>{`
        .bento-grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 1rem;
          width: 100%;
          height: auto;
          min-height: 600px;
        }

        @media (max-width: 768px) {
          .bento-grid-container {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 1fr);
            min-height: 500px;
          }
        }

        .bento-card {
          border-radius: 1.5rem;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
          background-color: #fafafa;
          border: 1px solid rgba(0, 0, 0, 0.08);
          cursor: pointer;
          transition: all 0.3s ease;
          min-height: 160px;
        }

        .bento-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px -5px rgba(16, 16, 39, 0.1);
        }

        .bento-card-large {
          grid-area: 1 / 1 / 3 / 2;
          background: linear-gradient(-225deg, #177863/5 0%, #177863/10 100%);
        }

        .bento-card-wide {
          grid-area: 1 / 2 / 2 / 4;
          background: linear-gradient(-225deg, #16325A/5 0%, #16325A/10 100%);
        }

        .bento-card-normal-1 {
          grid-area: 2 / 2 / 3 / 3;
          background: linear-gradient(-225deg, #ffffff 0%, #f8f9fa 100%);
        }

        .bento-card-normal-2 {
          grid-area: 2 / 3 / 3 / 4;
          background: linear-gradient(-225deg, #177863/3 0%, #16325A/5 100%);
        }

        .bento-card-bottom-left {
          grid-area: 3 / 1 / 4 / 2;
          background: linear-gradient(-225deg, #f8f9fa 0%, #ffffff 100%);
        }

        .bento-card-bottom-right {
          grid-area: 3 / 2 / 4 / 4;
          background: linear-gradient(-225deg, #16325A/3 0%, #177863/5 100%);
        }

        @media (max-width: 768px) {
          .bento-card-large {
            grid-area: 1 / 1 / 2 / 3;
          }
          .bento-card-wide {
            grid-area: 2 / 1 / 3 / 2;
          }
          .bento-card-normal-1 {
            grid-area: 2 / 2 / 3 / 3;
          }
          .bento-card-normal-2 {
            grid-area: 3 / 1 / 4 / 2;
          }
          .bento-card-bottom-left {
            grid-area: 3 / 2 / 4 / 3;
          }
          .bento-card-bottom-right {
            grid-area: 4 / 1 / 5 / 3;
          }
        }
      `}</style>

      {SKILLS_DATA.map((skill, index) => {
        const cardClasses = [
          'bento-card-large',
          'bento-card-wide',
          'bento-card-normal-1',
          'bento-card-normal-2',
          'bento-card-bottom-left',
          'bento-card-bottom-right'
        ];

        return (
          <motion.div
            key={skill.title}
            className={`bento-card ${cardClasses[index]}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            {/* Default content */}
            <motion.div
              className="bento-card-content"
              animate={{
                opacity: hoveredSkill === index ? 0 : 1,
                scale: hoveredSkill === index ? 0.95 : 1
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-[#177863]">
                  {skill.icon}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                {skill.title}
              </h3>
            </motion.div>


          </motion.div>
        );
      })}

      {/* Full-grid overlay for hovered skill */}
      {hoveredSkill !== null && (
        <motion.div
          className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-2xl border-2 border-[#177863] flex flex-col justify-center items-center text-center p-8 z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-6xl text-[#177863]">
              {SKILLS_DATA[hoveredSkill].icon}
            </span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            {SKILLS_DATA[hoveredSkill].title}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed max-w-md">
            {SKILLS_DATA[hoveredSkill].description}
          </p>
        </motion.div>
      )}
    </div>
  );
});
ModernBentoGrid.displayName = "ModernBentoGrid";

const SkillsBento = React.memo(() => {
  return (
    <section className="mb-8 bg-background text-foreground">
      <div>
        <div className="text-left mb-6">
          <h3 className="text-lg font-medium mb-6 text-foreground">
            <ScrambleIn
              text="🛠️ My Problem-Solving Toolkit"
              scrambleSpeed={35}
              scrambledLetterCount={2}
              className="text-gray-900"
              scrambledClassName="text-gray-400"
              autoStart={true}
            />
          </h3>
        </div>
        <ModernBentoGrid />
      </div>
    </section>
  );
});
SkillsBento.displayName = "SkillsBento";

export default SkillsBento;
