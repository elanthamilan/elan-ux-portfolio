
import { motion } from 'motion/react';
import CaseStudyCard from "../CaseStudyCard";

const CaseStudiesSection = () => {
  return (
    <section aria-labelledby="case-studies-title" className="mt-16 md:mt-20">
      <div className="relative mb-12">
        <motion.h2
          id="case-studies-title"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-black relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          Problems I've Actually Solved
        </motion.h2>
        <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-[#177863] to-[#16325A] rounded-full"></div>
      </div>
      <div className="space-y-10">
        <CaseStudyCard
          title="CAMU Course Compass: Revolutionizing Student Planning"
          year="2023"
          who="CAMU (University Tech)"
          what="Streamlining Student Academic Scheduling with AI"
          result="80% faster planning, 95% conflict reduction, 90% NPS"
          description="🗓️ The Challenge: Students spent 4-6 hours in stressful, manual course planning, with 40% facing conflicts. I led the UX to build an AI-powered planner that cut planning time to 45 minutes and nearly eliminated conflicts."
          image="/Elanable-uploads/camu-planner-card.png"
          link="/case-study/camu-course-planner"
          tags={["UX Design", "EdTech", "AI", "Product Design"]}
          index={0}
        />
        <CaseStudyCard
          title="Redesigning Campus Recruitment: From 15 Steps to 2 Days"
          year="2024"
          who="Camu (EdTech Platform)"
          what="Streamlining University-to-Industry Hiring Workflows"
          result="40% faster hiring, $500K revenue boost, 85% user satisfaction"
          description="🎯 The Challenge: Recruiters were drowning in a 15-step nightmare that took 2 weeks to learn. Everyone said 'impossible to simplify.' I said 'hold my coffee.' Result? A system so intuitive, new users master it in 2 days. Sometimes the best solutions come from questioning what everyone accepts as 'just how it is.'"
          image="/Elanable-uploads/Camu-Recruitment-Dashboard.png"
          link="/case-study/campus-hiring"
          tags={["Enterprise UX", "Recruitment", "Workflow Design"]}
          index={1}
        />
        <CaseStudyCard
          title="AI-Powered Course Planner: Eliminating Scheduling Conflicts"
          year="2024"
          who="EdTech Startup"
          what="Student Course Planning with Intelligent Constraint Management"
          result="60% faster course planning, 90% student adoption rate"
          description="🤖 The Paradox: How do you make AI recommendations feel helpful, not creepy? Students like Priya needed course planning that was smart but not overwhelming. I designed a system where AI works behind the scenes while students feel in control. The secret? Making complex algorithms feel like a helpful friend, not a robot overlord."
          image="/Elanable-uploads/AI-Course-Planner-Dashboard.png"
          link="/case-study/student-planner"
          tags={["AI/UX", "Course Planning", "EdTech"]}
          index={2}
        />
      </div>
    </section>
  );
};

export default CaseStudiesSection;
