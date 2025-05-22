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
    // Initialize smooth scrolling
    gsap.to('html, body', {
      scrollBehavior: 'smooth',
      duration: 0
    });

    // Initialize ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/case-study/campus-hiring" element={<CaseStudyCampusHiring />} />
      <Route path="/case-study/student-planner" element={<CaseStudyStudentPlanner />} />
    </Routes>
  );
};

export default App;
