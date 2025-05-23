import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from './lib/gsap/useGSAP.ts';
import HomePage from './pages/HomePage.tsx';
import CaseStudyCampusHiring from './pages/CaseStudyCampusHiring.tsx';
import CaseStudyStudentPlanner from './pages/CaseStudyStudentPlanner.tsx';

function App() {
  const { isInitialized } = useGSAP();

  useEffect(() => {
    if (isInitialized && typeof window !== 'undefined') {
      try {
        gsap.registerPlugin(ScrollTrigger);
      } catch (error) {
        console.error('Error initializing GSAP:', error);
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isInitialized]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/case-study/campus-hiring" element={<CaseStudyCampusHiring />} />
      <Route path="/case-study/student-planner" element={<CaseStudyStudentPlanner />} />
    </Routes>
  );
}

export default App;
