import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useGSAP } from './lib/gsap/useGSAP.ts';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HomePage from './pages/HomePage.tsx';
import CaseStudyCampusHiring from './pages/CaseStudyCampusHiring.tsx';
import CaseStudyStudentPlanner from './pages/CaseStudyStudentPlanner.tsx';

const App = () => {
  const { gsap } = useGSAP();

  useEffect(() => {
    // Initialize GSAP and ScrollTrigger
    if (typeof window !== 'undefined') {
      try {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Initialize smooth scrolling
        gsap.to('html, body', {
          scrollBehavior: 'smooth',
          duration: 0
        });

        // Clear all ScrollTrigger instances on unmount
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      } catch (error) {
        console.error('Error initializing GSAP:', error);
      }
    }
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/campus-hiring" element={<CaseStudyCampusHiring />} />
        <Route path="/case-study/student-planner" element={<CaseStudyStudentPlanner />} />
      </Routes>
    </div>
  );
};

export default App;
