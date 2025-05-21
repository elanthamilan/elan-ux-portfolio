import { Badge } from "@/components/ui/badge";
import React from 'react'; // Ensure React is imported for JSX
import { Users, Palette, Network, Figma, Briefcase, Code, Icon as LucideIcon } from "lucide-react"; // Import necessary icons

// Helper to map icon names to actual components
const iconMap: { [key: string]: LucideIcon } = {
  Users,
  Palette,
  Network,
  Figma,
  Briefcase,
  Code,
};

const Skills = () => {
  const skillsList = [
    {
      title: "UX Research",
      content: ["User Interviews", "Usability Testing", "Surveys & Analysis", "Persona Development", "Journey Mapping"],
      iconName: "Users",
      md_colSpan: "md:col-span-2",
    },
    {
      title: "UI & Visual Design",
      content: ["Wireframing (Lo-Fi & Hi-Fi)", "Interactive Prototyping", "Visual Design & Branding", "Design System Development"],
      iconName: "Palette",
      md_colSpan: "md:col-span-2",
    },
    {
      title: "Information Architecture",
      content: ["User Flows & Task Analysis", "Sitemap Creation", "Content Strategy", "Taxonomy & Navigation"],
      iconName: "Network",
      md_colSpan: "md:col-span-2",
    },
    {
      title: "Prototyping Tools",
      content: ["Figma (Primary)", "Adobe XD", "Principle"],
      iconName: "Figma",
      sm_colSpan: "sm:col-span-1",
      md_colSpan: "md:col-span-1",
    },
    {
      title: "Collaboration & Process",
      content: ["Agile/Scrum Methodologies", "Stakeholder Management", "Cross-functional Teamwork", "Git & Version Control"],
      iconName: "Briefcase",
      sm_colSpan: "sm:col-span-1",
      md_colSpan: "md:col-span-1",
    },
    {
      title: "Frontend Familiarity",
      content: ["HTML, CSS, JavaScript", "Understanding of React", "Working with Developers"],
      iconName: "Code",
      md_colSpan: "md:col-span-2", // Adjusted to md:col-span-2 to fill the grid better with 6 items on a 3-col layout
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="bg-brand-badge-bg text-foreground px-3 py-1.5 text-sm font-medium rounded mb-4">My Expertise</Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-foreground">Skills & Expertise</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed">
            With over 8 years of experience, I've developed a comprehensive skill set
            focused on creating exceptional user experiences for enterprise products.
          </p>
        </div>

        {/* New Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillsList.map((skill, index) => {
            const IconComponent = iconMap[skill.iconName];
            const colSpanClasses = `${skill.sm_colSpan || 'sm:col-span-1'} ${skill.md_colSpan || 'md:col-span-1'}`;

            return (
              <div
                key={index}
                tabIndex={0}
                className={`bg-card text-card-foreground p-6 rounded-lg shadow-md border border-border/50 
                            transition-all duration-300 ease-in-out 
                            hover:shadow-xl hover:scale-[1.02] hover:border-primary/50
                            focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                            ${colSpanClasses}`}
              >
                {IconComponent && <IconComponent className="mb-3 h-8 w-8 text-primary" />}
                <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">{skill.title}</h3>
                {Array.isArray(skill.content) ? (
                  <ul className="space-y-1.5 text-sm text-foreground/80">
                    {skill.content.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2 mt-1 flex-shrink-0">&#8227;</span> {/* Bullet point */}
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-foreground/80">{skill.content}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
