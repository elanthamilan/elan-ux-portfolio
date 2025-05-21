import React from 'react';
import SectionReveal from '../components/SectionReveal.tsx'; // Assuming SectionReveal might be used for skills animation later

const Skills = () => {
  const skills = ['JavaScript', 'React', 'Tailwind CSS', 'UI/UX Design', 'Problem Solving'];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-semibold mb-4">Skills & Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div key={skill} className="bg-gray-100 rounded-lg p-4">
            {skill}
          </div>
        ))}
      </div>
    </div>
    // Consider wrapping the content in SectionReveal if you want scroll animation
  );
};

export default Skills;
