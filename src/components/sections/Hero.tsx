import { lazy, Suspense } from 'react'; // Added lazy and Suspense
import Header from "../layout/Header";
import CaseStudyCard from "../CaseStudyCard";

import { motion } from 'motion/react';
import { AccessibleButton } from '../ui/AccessibleButton';

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
  return (
    <div
      className="text-gray-900 font-sans"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(23, 120, 99, 0.04) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(22, 50, 90, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 40% 70%, rgba(248, 244, 242, 0.06) 0%, transparent 50%),
          radial-gradient(circle at 90% 80%, rgba(23, 120, 99, 0.03) 0%, transparent 50%),
          linear-gradient(135deg, rgba(248, 244, 242, 0.02) 0%, rgba(255, 255, 255, 0.97) 50%, rgba(23, 120, 99, 0.02) 100%)
        `
      }}
    >
      <Header />
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8" role="main">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[5fr_2fr] gap-8 md:gap-10 lg:gap-20">

          {/* Left Column - Hero (mb-8) + Case Studies */}
          <div className="space-y-10">
            {/* Hero Section - Enhanced Presentation */}
            <section className="mb-16" aria-labelledby="hero-heading">
              {/* Main Headline with enhanced visual hierarchy */}
              <div className="mb-6">
                <div className="mb-2">
                  <motion.span 
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm md:text-base font-bold uppercase tracking-wider bg-gradient-to-r from-[#177863]/10 to-[#177863]/5 border border-[#177863]/20"
                    style={{ color: '#177863' }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <span className="w-2 h-2 bg-[#177863] rounded-full mr-3 animate-pulse" aria-hidden="true"></span>
                    Designing Intuitive Experiences
                  </motion.span>
                </div>
                <motion.h1
                  id="hero-heading"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black mt-4"
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  style={{ color: '#16325A' }}
                >
                  Transform Complexity into Effortless Product Experiences.
                </motion.h1>
              </div>

              {/* Enhanced Introduction with better visual treatment */}
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-gray-800 leading-relaxed">
                  <div className="relative">
                    <div className="absolute -left-1 top-0 w-1 h-full bg-gradient-to-b from-[#177863] to-[#16325A] rounded-full opacity-60" aria-hidden="true"></div>
                    <p className="text-lg md:text-xl pl-6 mb-4 leading-relaxed">
                      Imagine your users <span className="font-semibold text-[#177863] bg-[#177863]/5 px-1 rounded">empowered</span>, workflows <span className="font-semibold text-[#177863] bg-[#177863]/5 px-1 rounded">streamlined</span>. As a Product Designer, I help businesses achieve this by crafting <span className="font-semibold text-[#16325A] bg-[#16325A]/5 px-1 rounded">intuitive interfaces</span> that transform complex enterprise systems into <span className="font-semibold text-[#177863] bg-[#177863]/5 px-1 rounded">effortless interactions</span>, driving <span className="font-semibold text-[#16325A] bg-[#16325A]/5 px-1 rounded">efficiency</span> and <span className="font-semibold text-[#16325A] bg-[#16325A]/5 px-1 rounded">growth</span>.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Bullet Points with improved visual design */}
              <motion.div
                className="mt-10 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "add_circle",
                      text: "Create user-centric designs",
                      detail: "that handle complex workflows.",
                      color: "#177863"
                    },
                    {
                      icon: "percent",
                      text: "Automate repetitive user tasks",
                      detail: "— no extensive training needed.",
                      color: "#177863"
                    },
                    {
                      icon: "more_horiz",
                      text: "Plug into diverse industries",
                      detail: ": EdTech, eCommerce, and IoT.",
                      color: "#177863"
                    },
                    {
                      icon: "post_add",
                      text: "Translate complex business requirements",
                      detail: "into elegant solutions.",
                      color: "#177863"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100/50 hover:bg-white/70 hover:border-[#177863]/20 transition-all duration-300 group"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#177863]/10 to-[#177863]/5 flex items-center justify-center group-hover:from-[#177863]/15 group-hover:to-[#177863]/10 transition-all duration-300">
                        <span className="material-symbols-outlined text-[#177863] text-xl" aria-hidden="true">
                          {item.icon}
                        </span>
                      </div>
                      <div className="text-base md:text-lg text-gray-800 leading-relaxed">
                        <span className="font-semibold text-[#16325A]">{item.text}</span>
                        <span className="text-gray-700"> {item.detail}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced Call to Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                role="group"
                aria-label="Contact options"
              >
                <AccessibleButton
                  asChild
                  variant="default"
                  size="lg"
                  className="bg-gradient-to-r from-[#177863] to-[#177863]/90 text-white font-medium rounded-2xl hover:from-[#177863]/90 hover:to-[#177863]/80 focus:outline-none focus:ring-2 focus:ring-[#177863] focus:ring-offset-2 shadow-lg hover:shadow-xl relative overflow-hidden"
                  aria-label="Send email to discuss collaboration"
                >
                  <motion.a
                    href="mailto:elanthamilan12@gmail.com"
                    className="group inline-flex items-center justify-center px-8 py-4"
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" aria-hidden="true"></div>
                    <span className="flex items-center gap-3 relative z-10">
                      <span className="material-symbols-outlined text-xl" aria-hidden="true">mail</span>
                      Let's Solve Together
                    </span>
                  </motion.a>
                </AccessibleButton>
                <AccessibleButton
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#177863] text-[#177863] font-medium rounded-2xl hover:bg-[#177863] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#177863] focus:ring-offset-2 bg-white/50 backdrop-blur-sm hover:shadow-lg"
                  aria-label="Download resume PDF"
                >
                  <motion.a
                    href="/Elanthamilan_UX_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center px-8 py-4"
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
                      <span className="material-symbols-outlined text-xl group-hover:rotate-12 transition-transform duration-300" aria-hidden="true">download</span>
                      See Track Record
                    </span>
                  </motion.a>
                </AccessibleButton>
              </motion.div>
            </section>

            {/* Case Studies - Enhanced section header */}
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
                  cardClassName="bg-gradient-to-br from-[#F6F9F9] to-white/80 backdrop-blur-sm border border-gray-100/50"
                  accentColorName="brand-primary"
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
                  cardClassName="bg-gradient-to-br from-[#D9F4D7] to-white/80 backdrop-blur-sm border border-gray-100/50"
                  accentColorName="brand-secondary"
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
                  cardClassName="bg-gradient-to-br from-[#EFD7ED] to-white/80 backdrop-blur-sm border border-gray-100/50"
                  accentColorName="brand-tertiary"
                />
              </div>
            </section>
          </div>

          {/* Right Column - Everything Else with enhanced styling */}
          <div className="space-y-8 md:space-y-12 md:max-w-md lg:max-w-none mx-auto lg:mx-0">
            {/* Get In Touch - Enhanced with better visual treatment */}
            <section className="mb-8 md:mb-12 md:sticky md:top-24 md:z-10">
              <motion.div
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100/50 shadow-sm"
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <h3 className="text-lg font-semibold mb-4 text-black flex items-center">
                  <span className="text-2xl mr-2">📞</span>
                  Get In Touch
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { icon: "mail", text: "elanthamilan12@gmail.com", href: "mailto:elanthamilan12@gmail.com" },
                    { icon: "call", text: "+918148622302", href: "tel:+918148622302" },
                    { 
                      icon: "whatsapp", 
                      text: "WhatsApp", 
                      href: "https://wa.me/918148622302",
                      isExternal: true,
                      customIcon: (
                        <svg className="w-5 h-5 text-[#177863]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                      )
                    },
                    { 
                      icon: "linkedin", 
                      text: "LinkedIn Profile", 
                      href: "https://www.linkedin.com/in/elanthamilan/",
                      isExternal: true,
                      customIcon: (
                        <svg className="w-5 h-5 text-[#177863]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      )
                    }
                  ].map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      {...(item.isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                      className="group flex items-center p-3 text-[#177863] rounded-xl border-2 border-[#177863]/20 hover:border-[#177863] hover:bg-[#177863] hover:text-white font-semibold transition-all duration-300 text-sm md:text-base bg-white/50 hover:shadow-md"
                      whileHover={{
                        scale: 1.01,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.99 }}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 + index * 0.05, ease: "easeOut" }}
                    >
                      <span className="flex items-center gap-2 truncate">
                        {item.customIcon || (
                          <span className="material-symbols-outlined text-lg text-[#177863] group-hover:text-white">
                            {item.icon}
                          </span>
                        )}
                        <span className="truncate">{item.text}</span>
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
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
