import React, { lazy, Suspense } from 'react'; // Added lazy and Suspense
import Header from "../layout/Header";
// import Footer from "../layout/Footer"; // Removed
// import Skills from "../Skills"; // Removed
// import Industries from "../Industries"; // Removed
import CaseStudyCard from "../CaseStudyCard";
import ScrambleIn from "../../fancy/components/text/scramble-in";
import { motion } from 'motion/react';
import { usePrefersReducedMotion } from '@/components/hooks/usePrefersReducedMotion';
// import BrandsSection from './BrandsSection'; // Removed

// Define lazy-loaded components
const Skills = lazy(() => import('../Skills'));
const Industries = lazy(() => import('../Industries'));
const Footer = lazy(() => import('../layout/Footer'));
const BrandsSection = lazy(() => import('./BrandsSection'));

const LoadingFallback = ({ minHeight = '100px', text = 'Loading...' }) => (
  <div style={{ minHeight }} aria-busy="true" className="flex items-center justify-center text-sm text-gray-500">
    {text}
  </div>
);

// Simple HomePage component that matches the attachment layout
const HomePage = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  return (
    <div
      className="text-gray-900 font-sans"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(23, 120, 99, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(22, 50, 90, 0.02) 0%, transparent 50%),
          radial-gradient(circle at 40% 70%, rgba(248, 244, 242, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 90% 80%, rgba(23, 120, 99, 0.02) 0%, transparent 50%),
          linear-gradient(135deg, rgba(248, 244, 242, 0.01) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(23, 120, 99, 0.01) 100%)
        `
      }}
    >
      <Header />
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[5fr_2fr] gap-6 md:gap-8 lg:gap-16">

          {/* Left Column - Hero (mb-8) + Case Studies */}
          <div className="space-y-8">
            {/* Hero Section - Properly Grouped */}
            <div className="mb-12">
              {/* Main Headline */}
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">
                  <ScrambleIn
                    text="Designing Intuitive Experiences"
                    scrambleSpeed={30}
                    scrambledLetterCount={3}
                    className="text-black"
                    scrambledClassName="text-gray-500"
                  />
                </h1>
                <h2 className="text-2xl font-semibold text-[#16325A] mb-8">
                  <ScrambleIn
                    text="for Complex Enterprise Systems"
                    scrambleSpeed={40}
                    scrambledLetterCount={2}
                    className="text-[#16325A]"
                    scrambledClassName="text-[#16325A]/60"
                    autoStart={true}
                  />
                </h2>
              </div>

              {/* Introduction */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-gray-800 leading-relaxed text-base">
                  <p className="text-lg">
                    Hi, I'm <motion.span
                      className="font-semibold text-[#177863]"
                      whileHover={{
                        scale: 1.05,
                        color: "#177863",
                        transition: { duration: 0.2 }
                      }}
                    >
                      Elanthamilan
                    </motion.span>, a UX designer with <strong className="text-gray-900">9 years of experience</strong> in <em className="text-[#177863] font-medium">EdTech, eCommerce, and IoT</em>. I specialize in designing <strong className="text-gray-900">intuitive interfaces</strong> that streamline workflows and drive business growth, working across <em className="text-[#16325A] font-medium">startups and enterprises</em> to solve complex design challenges.
                  </p>
                </div>
              </motion.div>

              {/* Call to Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              >
                <motion.a
                  href="mailto:elanthamilan12@gmail.com"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#177863] text-white font-medium rounded-2xl hover:bg-[#177863]/90 focus:outline-none focus:ring-2 focus:ring-[#177863] focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <span className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-xl">mail</span>
                    Let's Solve Together
                  </span>
                </motion.a>
                <motion.a
                  href="/Elanthamilan_UX_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#177863] text-[#177863] font-medium rounded-2xl hover:bg-[#177863] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#177863] focus:ring-offset-2 transition-all duration-200"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                >
                  <span className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-xl">download</span>
                    See Track Record
                  </span>
                </motion.a>
              </motion.div>
            </div>

            {/* Case Studies - Prominent in Left Column with extra spacing */}
            <section aria-labelledby="case-studies-title" className="mt-12 md:mt-16">
              <h2 id="case-studies-title" className="text-3xl md:text-4xl font-bold mb-8 text-black">
                <ScrambleIn
                  text="Problems I've Actually Solved"
                  scrambleSpeed={25}
                  scrambledLetterCount={2}
                  className="text-black"
                  scrambledClassName="text-gray-500"
                  autoStart={true}
                />
              </h2>
              <div className="space-y-8">
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
                  cardClassName="bg-[#E9F5F2]"
                  accentColorName="brand-primary"
                  buttonVariant="default"
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
                  cardClassName="bg-[#F2F8F7]"
                  accentColorName="brand-primary"
                  buttonVariant="default"
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
                  cardClassName="bg-[#F3F6F9]"
                  accentColorName="brand-secondary"
                  buttonVariant="secondary"
                />
              </div>
            </section>
          </div>

          {/* Right Column - Everything Else */}
          <div className="space-y-8 md:space-y-12 md:max-w-md lg:max-w-none mx-auto lg:mx-0">
            {/* Get In Touch - Moved to top, sticky on desktop */}
            <section className="mb-8 md:mb-12 md:sticky md:top-24 md:z-10">
              <h3 className="text-lg font-semibold mb-3 md:mb-4">
                <ScrambleIn
                  text="📞 Get In Touch"
                  scrambleSpeed={30}
                  scrambledLetterCount={2}
                  className="text-black"
                  scrambledClassName="text-gray-500"
                  autoStart={true}
                />
              </h3>
              <div className="grid grid-cols-1 gap-3 md:gap-4">
                <motion.a
                  href="mailto:elanthamilan12@gmail.com"
                  className="flex items-center p-3 md:p-4 text-[#177863] rounded-xl border-2 border-[#177863] hover:bg-[#177863] hover:text-white font-semibold transition-all duration-200 text-sm md:text-base"
                  whileHover={{
                    scale: 1.01,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.99 }}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-[#177863]">mail</span>
                    <span className="truncate">elanthamilan12@gmail.com</span>
                  </span>
                </motion.a>
                <motion.a
                  href="tel:+918148622302"
                  className="flex items-center p-3 md:p-4 text-[#177863] rounded-xl border-2 border-[#177863] hover:bg-[#177863] hover:text-white font-semibold transition-all duration-200 text-sm md:text-base"
                  whileHover={{
                    scale: 1.01,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.99 }}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-[#177863]">call</span>
                    +918148622302
                  </span>
                </motion.a>
                <motion.a
                  href="https://wa.me/918148622302"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 md:p-4 text-[#177863] rounded-xl border-2 border-[#177863] hover:bg-[#177863] hover:text-white font-semibold transition-all duration-200 text-sm md:text-base"
                  whileHover={{
                    scale: 1.01,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.99 }}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#177863]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    WhatsApp
                  </span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/elanthamilan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 md:p-4 text-[#177863] rounded-xl border-2 border-[#177863] hover:bg-[#177863] hover:text-white font-semibold transition-all duration-200 text-sm md:text-base"
                  whileHover={{
                    scale: 1.01,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.99 }}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#177863]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn Profile
                  </span>
                </motion.a>
              </div>
            </section>

            {/* Brands Section - Auto-scrolling B/W logos */}
            <Suspense fallback={<LoadingFallback text="Loading Brands..." />}>
              <BrandsSection />
            </Suspense>



            {/* Industries Section */}
            <Suspense fallback={<LoadingFallback text="Loading Industries..." />}>
              <Industries />
            </Suspense>



            {/* Skills & Expertise Section */}
            <Suspense fallback={<LoadingFallback text="Loading Skills..." />}>
              <Skills />
            </Suspense>
          </div>
        </div>
      </main>
      <Suspense fallback={<LoadingFallback text="Loading Footer..." />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default HomePage;
