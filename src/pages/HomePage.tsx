import React from 'react';
import Hero from '../components/sections/Hero.tsx';
import Skills from '../components/Skills.tsx';
import Contact from '../components/sections/Contact.tsx';
import Footer from '../components/Footer.tsx';
import CaseStudyCard from '../components/CaseStudyCard.tsx';
import ScrollToTop from '../components/ui/ScrollToTop.tsx';
import ThemeToggle from '../components/ui/ThemeToggle.tsx';

const caseStudies = [
  {
    title: "Campus Hiring Platform",
    description: "Redesigned the campus hiring experience for a leading university, reducing hiring time by 50% and improving student engagement.",
    image: "/Elanable-uploads/Camu Campus Recruitment App.png",
    tags: ["UX Research", "UI Design", "Education"],
    link: "/case-study/campus-hiring",
    index: 0
  },
  {
    title: "Student Course Planner",
    description: "Created an intuitive course planning tool that helps students make informed decisions about their academic journey.",
    image: "/Elanable-uploads/Camu Campus Recruitment App.png",
    tags: ["UX Research", "UI Design", "Education"],
    link: "/case-study/student-planner",
    index: 1
  }
];

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <Hero />
      
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Featured Case Studies
          </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.title} className="case-study-card">
                <CaseStudyCard {...study} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div>
        <Skills />
      </div>
      
      <div>
        <Contact />
      </div>
      
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default HomePage;
