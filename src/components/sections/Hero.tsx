import { Button } from "../ui/button.tsx";
import { ArrowRight, Download, Mail, Phone, Linkedin, MessageSquare } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile.js";
import { Badge } from "../components/ui/badge.tsx"; // Updated path
// Card components were imported but not used in the final version
// import { Card, CardContent, CardFooter, CardHeader } from "./ui/card.tsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion.tsx";
import CaseStudyCard from "../components/CaseStudyCard.tsx"; // Updated path
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useState, useEffect, useRef } from "react";
import SectionReveal from "./SectionReveal.tsx";
import { useGSAP } from '../../lib/gsap/useGSAP.js';
import { motion } from 'framer-motion';
import TypingAnimation from '../TypingAnimation.js';

const phrases = [
  'UX Designer',
  'Product Designer',
  'Interaction Designer',
  'Design Systems Expert',
  'Accessibility Advocate'
];

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const isMobile = useIsMobile();
  const { elementRef, scrollAnimation } = useGSAP();
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    tl.fromTo(
      ".hero-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, stagger: 0.2 }
    );

    tl.to(".hero-text", {
      y: -50,
      scrollTrigger: {
        trigger: ".hero-text",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.fromTo(
      ".elan-text",
      { rotation: 0 },
      { rotation: 5, duration: 0.5, yoyo: true, repeat: 1 }
    );

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (heroRef.current) {
      scrollAnimation(
        heroRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out'
        },
        {
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        }
      );
    }
  }, []);

  const industries = [
    {
      title: "EdTech",
      content:
        "Led UX strategy and design for SIS, LMS, Recruitment App, and Student Portals.   Revamped SIS through evaluation, design systems, and redesign of 30+ features.    Directed LMS design focusing on accessibility, usability, and scalable workflows.    Designed Student Portal for seamless navigation and mobile responsiveness.    Created eLearning platform for trading courses.",
    },
    {
      title: "eCommerce",
      content:
        "Redesigned key flows for a B2B pharma eCommerce site.   Designed eCommerce experiences for brands like Robinson Co. and Natural Partners.    Improved product discovery, navigation and checkout flows.    Crafted scalable UI systems for quick orders, subscriptions, and account management.",
    },
    {
      title: "Connected Home",
      content:
        "Led design for connected home interfaces (consumer & industrial IoT).   Founding member of product/design team, revamped platform, built design system.    Designed subscription-based water purifier interface and mobile app for idly dosa batter making machine.",
    },
    {
      title: "Construction",
      content:
        "Designed construction asset management app for real-time tool tracking.   ",
    },
    {
      title: "Startup",
      content: "Contributed to the design and development of various startup products, focusing on user-centered design and rapid iteration.  ",
    }
  ];

  return (
    <motion.section
      ref={heroRef}
      initial={{ opacity: 0, y: 20 }}
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gray-900 dark:text-white"
        >
          Hi, I'm Elanthamilan
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-4xl font-serif mb-8 text-gray-700 dark:text-gray-300"
        >
          <TypingAnimation
            phrases={phrases}
            className="inline-block min-h-[2.5em]"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
        >
          I create intuitive and accessible digital experiences that solve real user problems.
          Specializing in UX research, interaction design, and design systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="/resume"
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            aria-label="View Resume"
          >
            View Resume
          </a>
          <a
            href="/contact"
            className="px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-full border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
            aria-label="Get in Touch"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20"
        >
          <div className="flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
