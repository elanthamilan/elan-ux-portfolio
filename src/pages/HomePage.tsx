import React, { useEffect, useState, useRef } from 'react';
import Hero from '../components/sections/Hero.js';
import Skills from '../components/sections/Skills.js';
import Contact from '../components/sections/Contact.js';
import Footer from '../components/sections/Footer.js';
import CaseStudyCard from '../components/CaseStudyCard.js';
import ScrollToTop from '../components/ui/ScrollToTop.js';
import LoadingScreen from '../components/ui/LoadingScreen.js';
import ThemeToggle from '../components/ui/ThemeToggle.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
  const [isLoading, setIsLoading] = useState(true);
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Title animation
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });
    }

    // Case Studies Section Animation with stagger
    if (caseStudiesRef.current) {
      const caseStudyCards = caseStudiesRef.current.querySelectorAll('.case-study-card');
      gsap.fromTo(
        caseStudyCards,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: caseStudiesRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    }

    // Skills Section Animation with parallax
    if (skillsRef.current) {
      gsap.fromTo(
        skillsRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      // Parallax effect for skills section
      gsap.to(skillsRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Contact Section Animation
    if (contactRef.current) {
      gsap.fromTo(
        contactRef.current,
        {
          opacity: 0,
          scale: 0.95,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    }

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <Hero />
      
      <section ref={caseStudiesRef} className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 
            ref={titleRef}
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

      <div ref={skillsRef}>
        <Skills />
      </div>
      
      <div ref={contactRef}>
        <Contact />
      </div>
      
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default HomePage;
