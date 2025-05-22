import React, { useEffect, useState } from 'react';
import Hero from '../components/sections/Hero.tsx';
import SkillsBentoGrid from '../components/Skills.tsx';
import Contact from '../components/sections/Contact.tsx';
import Footer from '../components/layout/Footer.tsx';
import Header from '../components/layout/Header.tsx';
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
    index: 0,
    year: "2023",
    who: "Top Indian University",
    what: "End-to-end campus hiring platform",
    result: "50% reduction in hiring time",
    backgroundColor: "#F2F8F7",
    buttonColor: "#156152"
  },
  {
    title: "Student Course Planner Redesign",
    description: "Created an intuitive course planning tool that helps students make informed decisions about their academic journey.",
    image: "/Elanable-uploads/Student Course Planner Redesign.png",
    tags: ["UX Research", "UI Design", "Education"],
    link: "/case-study/student-planner",
    index: 1,
    year: "2025",
    who: "HR Teams, Recruiters, Students",
    what: "Unified campus hiring platform.",
    result: "40% faster hiring, 85% user satisfaction.",
    backgroundColor: "#F3F6F9",
    buttonColor: "#16325A"
  }
];

const HomePage = () => {
  const [isThemeInitialized, setIsThemeInitialized] = useState(false);

  useEffect(() => {
    // Check if theme is initialized
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    setIsThemeInitialized(true);
  }, []);

  if (!isThemeInitialized) {
    return null; // Don't render anything until theme is initialized
  }

  return (
    <main className="min-h-screen">
      <Header />
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
        <SkillsBentoGrid />
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
