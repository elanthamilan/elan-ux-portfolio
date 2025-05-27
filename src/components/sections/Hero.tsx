import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Skills from "../Skills";
import CaseStudyCard from "../CaseStudyCard";
import ScrambleIn from "../../fancy/components/text/scramble-in";
import { motion } from 'motion/react';


// Simple HomePage component that matches the attachment layout
const HomePage = () => {
  return (
    <div className="min-h-screen text-gray-900 font-sans relative overflow-hidden">
      {/* Subtle mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(23, 120, 99, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(22, 50, 90, 0.06) 0%, transparent 50%),
              radial-gradient(circle at 40% 70%, rgba(248, 244, 242, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 90% 80%, rgba(23, 120, 99, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 10% 90%, rgba(22, 50, 90, 0.04) 0%, transparent 50%),
              linear-gradient(135deg, rgba(248, 244, 242, 0.02) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(23, 120, 99, 0.02) 100%)
            `
          }}
        />
        {/* Additional subtle mesh overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              conic-gradient(from 0deg at 30% 30%, rgba(23, 120, 99, 0.03), rgba(22, 50, 90, 0.02), rgba(248, 244, 242, 0.04), rgba(23, 120, 99, 0.03)),
              conic-gradient(from 180deg at 70% 70%, rgba(22, 50, 90, 0.02), rgba(248, 244, 242, 0.03), rgba(23, 120, 99, 0.02), rgba(22, 50, 90, 0.02))
            `
          }}
        />
      </div>

      <Header />
      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6 relative z-10">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 md:gap-8 lg:gap-12">

          {/* Left Column - Hero (mb-8) + Case Studies */}
          <div className="space-y-8">
            {/* Title Section (the original mb-8 content) */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                <ScrambleIn
                  text="The UX Designer Who Solves"
                  scrambleSpeed={30}
                  scrambledLetterCount={3}
                  className="text-gray-900"
                  scrambledClassName="text-gray-400"
                />
              </h1>
              <h2 className="text-2xl font-semibold text-[#177863] mb-6">
                <ScrambleIn
                  text="What Others Call 'Impossible'"
                  scrambleSpeed={40}
                  scrambledLetterCount={2}
                  className="text-[#177863]"
                  scrambledClassName="text-[#177863]/50"
                  autoStart={true}
                />
              </h2>

              <motion.p
                className="text-lg mb-6 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hi, I'm <motion.span
                  className="font-semibold text-[#177863]"
                  whileHover={{
                    scale: 1.1,
                    color: "#177863",
                    transition: { duration: 0.2 }
                  }}
                >
                  Elanthamilan
                </motion.span>
              </motion.p>

              <motion.p
                className="text-gray-700 mb-8 leading-relaxed font-normal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                While others see <strong>complex enterprise systems</strong> as overwhelming, I see puzzles waiting to be solved. In 9 years, I've turned <strong>15-step workflows into 3 clicks</strong>, reduced training time from <strong>weeks to days</strong>, and saved companies <strong>$500K+ annually</strong> - all by asking one simple question: <em>"What if this was actually easy to use?"</em>
              </motion.p>

              {/* Intriguing Value Proposition */}
              <motion.div
                className="bg-gradient-to-r from-[#177863]/5 via-[#16325A]/5 to-[#177863]/5 border border-[#177863]/20 rounded-lg p-5 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3 className="font-semibold text-gray-900 mb-3">🎯 The Secret? I Think Like Your Users (Not Like a Designer)</h3>
                <div className="text-gray-700 font-normal space-y-2">
                  <p>• <strong>The Problem Solver:</strong> When recruiters said "impossible to simplify," I reduced their workflow by 80%</p>
                  <p>• <strong>The Translator:</strong> I speak fluent "Business" and "Engineering" - bridging gaps others can't</p>
                  <p>• <strong>The ROI Generator:</strong> My designs don't just look good - they save money and time</p>
                  <p>• <strong>The Ready-to-Ship Designer:</strong> 9 years of shipping real products to real users</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="mailto:elanthamilan12@gmail.com?subject=Let's Talk About Solving Your UX Challenges&body=Hi Elanthamilan,%0D%0A%0D%0AI saw your portfolio and I'm intrigued by your approach to complex UX problems. Let's discuss how you could help our team.%0D%0A%0D%0ABest regards"
                  className="inline-flex items-center justify-center px-4 sm:px-8 py-4 bg-[#177863] text-white font-semibold rounded-lg hover:bg-[#177863]/90 transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-lg"
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">rocket_launch</span>
                    Let's Solve Together
                  </span>
                </motion.a>
                <motion.a
                  href="/Elanthamilan_UX_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-4 bg-white text-[#177863] font-semibold rounded-lg border-2 border-[#177863] hover:bg-[#177863]/5 transition-colors duration-200 text-sm sm:text-base"
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">description</span>
                    See Track Record
                  </span>
                </motion.a>
              </motion.div>
            </div>

            {/* Case Studies - Prominent in Left Column */}
            <section aria-labelledby="case-studies-title">
              <h2 id="case-studies-title" className="text-2xl font-semibold mb-6 text-foreground">
                <ScrambleIn
                  text="Problems I've Actually Solved"
                  scrambleSpeed={25}
                  scrambledLetterCount={2}
                  className="text-gray-900"
                  scrambledClassName="text-gray-400"
                  autoStart={true}
                />
              </h2>
              <div className="space-y-6">
                <CaseStudyCard
                  title="Redesigning Campus Recruitment: From 15 Steps to 2 Days"
                  year="2024"
                  who="Camu (EdTech Platform)"
                  what="Streamlining University-to-Industry Hiring Workflows"
                  result="40% faster hiring, $500K revenue boost, 85% user satisfaction"
                  description="🎯 The Challenge: Recruiters were drowning in a 15-step nightmare that took 2 weeks to learn. Everyone said 'impossible to simplify.' I said 'hold my coffee.' Result? A system so intuitive, new users master it in 2 days. Sometimes the best solutions come from questioning what everyone accepts as 'just how it is.'"
                  image="/Elanable-uploads/Camu Campus Recruitment App.png"
                  link="/case-study/campus-hiring"
                  tags={["Enterprise UX", "Recruitment", "Workflow Design"]}
                  index={0}
                  cardClassName="bg-gradient-to-br from-[#177863]/5 to-[#177863]/10 border-[#177863]/20"
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
                  image="/placeholder-ux-design.svg"
                  link="/case-study/student-planner"
                  tags={["AI/UX", "Course Planning", "EdTech"]}
                  index={1}
                  cardClassName="bg-gradient-to-br from-[#16325A]/5 to-[#16325A]/10 border-[#16325A]/20"
                  accentColorName="brand-secondary"
                  buttonVariant="secondary"
                />
              </div>
            </section>
          </div>

          {/* Right Column - Everything Else */}
          <div className="space-y-6 md:space-y-8 md:max-w-md lg:max-w-none mx-auto lg:mx-0">
            {/* Brands Section */}
            <section className="mb-6 md:mb-8">
              <h3 className="text-lg font-medium mb-3 md:mb-4">
                <ScrambleIn
                  text="Brands I Have Worked With"
                  scrambleSpeed={30}
                  scrambledLetterCount={2}
                  className="text-gray-900"
                  scrambledClassName="text-gray-400"
                  autoStart={true}
                />
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 gap-3 md:gap-4">
                <motion.div
                  className="text-center p-2 md:p-3 rounded-lg bg-gray-50/50 hover:bg-gray-100/50 transition-colors duration-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <img src="/Elanable-uploads/Camu.png" alt="Camu" className="h-8 md:h-10 mx-auto mb-1 md:mb-2 object-contain" loading="lazy" width="120" height="40" />
                  <p className="text-gray-700 font-normal text-xs md:text-sm">Camu</p>
                </motion.div>
                <motion.div
                  className="text-center p-2 md:p-3 rounded-lg bg-gray-50/50 hover:bg-gray-100/50 transition-colors duration-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <img src="/Elanable-uploads/Mastek.png" alt="Mastek" className="h-8 md:h-10 mx-auto mb-1 md:mb-2 object-contain" loading="lazy" width="120" height="40" />
                  <p className="text-gray-700 font-normal text-xs md:text-sm">Mastek</p>
                </motion.div>
                <motion.div
                  className="text-center p-2 md:p-3 rounded-lg bg-gray-50/50 hover:bg-gray-100/50 transition-colors duration-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <img src="/Elanable-uploads/Geninfy.jpg" alt="Geninfy" className="h-8 md:h-10 mx-auto mb-1 md:mb-2 object-contain" loading="lazy" width="120" height="40" />
                  <p className="text-gray-700 font-normal text-xs md:text-sm">Geninfy</p>
                </motion.div>
                <motion.div
                  className="text-center p-2 md:p-3 rounded-lg bg-gray-50/50 hover:bg-gray-100/50 transition-colors duration-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <img src="/Elanable-uploads/Oceo.svg" alt="Oceo" className="h-8 md:h-10 mx-auto mb-1 md:mb-2 object-contain" loading="lazy" width="120" height="40" />
                  <p className="text-gray-700 font-normal text-xs md:text-sm">Oceo</p>
                </motion.div>
              </div>
            </section>



            {/* Industries Section */}
            <section className="mb-6 md:mb-8">
              <motion.h3
                className="text-lg font-medium mb-3 md:mb-4"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <ScrambleIn
                  text="Industries I have Worked In"
                  scrambleSpeed={30}
                  scrambledLetterCount={2}
                  className="text-gray-900"
                  scrambledClassName="text-gray-400"
                  autoStart={true}
                />
              </motion.h3>
              <div className="space-y-1 md:space-y-2">
                <motion.div
                  className="border border-gray-200/50 rounded-lg hover:border-gray-300/50 transition-colors duration-200"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                >
                  <motion.button
                    className="w-full p-4 font-medium flex items-center justify-between text-gray-800 hover:text-gray-900 transition-colors text-left cursor-pointer"
                    onClick={() => {
                      const content = document.getElementById('edtech-content');
                      const icon = document.getElementById('edtech-icon');
                      if (content && icon) {
                        const isOpen = content.style.maxHeight !== '0px' && content.style.maxHeight !== '';
                        content.style.maxHeight = isOpen ? '0px' : content.scrollHeight + 'px';
                        icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
                      }
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg text-[#177863]">school</span>
                      EdTech
                    </span>
                    <motion.svg
                      id="edtech-icon"
                      className="w-5 h-5 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ rotate: 180 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.button>
                  <motion.div
                    id="edtech-content"
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    initial={{ maxHeight: 'auto' }}
                    style={{ maxHeight: 'auto' }}
                  >
                    <div className="p-4 pt-0 text-gray-700 leading-relaxed font-normal">
                      Led UX strategy and design for SIS, LMS, Recruitment App, and Student Portals. Revamped SIS through evaluation, design systems, and redesign of 30+ features. Directed LMS design focusing on accessibility, usability, and scalable workflows. Designed Student Portal for seamless navigation and mobile responsiveness. Created eLearning platform for trading courses.
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="border border-gray-200/50 rounded-lg hover:border-gray-300/50 transition-colors duration-200"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
                >
                  <motion.button
                    className="w-full p-4 font-medium flex items-center justify-between text-gray-800 hover:text-gray-900 transition-colors text-left cursor-pointer"
                    onClick={() => {
                      const content = document.getElementById('ecommerce-content');
                      const icon = document.getElementById('ecommerce-icon');
                      if (content && icon) {
                        const isOpen = content.style.maxHeight !== '0px' && content.style.maxHeight !== '';
                        content.style.maxHeight = isOpen ? '0px' : content.scrollHeight + 'px';
                        icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
                      }
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg text-[#177863]">shopping_cart</span>
                      eCommerce
                    </span>
                    <motion.svg
                      id="ecommerce-icon"
                      className="w-5 h-5 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.button>
                  <motion.div
                    id="ecommerce-content"
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: '0px' }}
                  >
                    <div className="p-4 pt-0 text-gray-700 leading-relaxed font-normal">
                      Redesigned key flows for a B2B pharma eCommerce site. Designed eCommerce experiences for brands like Robinson Co. and Natural Partners. Improved product discovery, navigation and checkout flows. Crafted scalable UI systems for quick orders, subscriptions, and account management.
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="border border-gray-200/50 rounded-lg hover:border-gray-300/50 transition-colors duration-200"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
                >
                  <motion.button
                    className="w-full p-4 font-medium flex items-center justify-between text-gray-800 hover:text-gray-900 transition-colors text-left cursor-pointer"
                    onClick={() => {
                      const content = document.getElementById('connected-content');
                      const icon = document.getElementById('connected-icon');
                      if (content && icon) {
                        const isOpen = content.style.maxHeight !== '0px' && content.style.maxHeight !== '';
                        content.style.maxHeight = isOpen ? '0px' : content.scrollHeight + 'px';
                        icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
                      }
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg text-[#177863]">device_hub</span>
                      Connected Tech
                    </span>
                    <motion.svg
                      id="connected-icon"
                      className="w-5 h-5 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.button>
                  <motion.div
                    id="connected-content"
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: '0px' }}
                  >
                    <div className="p-4 pt-0 text-gray-700 leading-relaxed font-normal">
                      Led design for connected home interfaces (consumer & industrial IoT). As founding member of product/design team, revamped platform and built comprehensive design system. Designed subscription-based water purifier interface and mobile app for idly dosa batter making machine. Specialized in asset management solutions for real-time tool tracking in industrial IoT settings - complex systems requiring intuitive interfaces for non-technical users.
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="border border-gray-200/50 rounded-lg hover:border-gray-300/50 transition-colors duration-200"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.25, ease: "easeOut" }}
                >
                  <motion.button
                    className="w-full p-4 font-medium flex items-center justify-between text-gray-800 hover:text-gray-900 transition-colors text-left cursor-pointer"
                    onClick={() => {
                      const content = document.getElementById('startup-content');
                      const icon = document.getElementById('startup-icon');
                      if (content && icon) {
                        const isOpen = content.style.maxHeight !== '0px' && content.style.maxHeight !== '';
                        content.style.maxHeight = isOpen ? '0px' : content.scrollHeight + 'px';
                        icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
                      }
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg text-[#177863]">rocket_launch</span>
                      Startup
                    </span>
                    <motion.svg
                      id="startup-icon"
                      className="w-5 h-5 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.button>
                  <motion.div
                    id="startup-content"
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: '0px' }}
                  >
                    <div className="p-4 pt-0 text-gray-700 leading-relaxed font-normal">
                      Contributed to the design and development of various startup products, focusing on user-centered design and rapid iteration. Built MVPs that scale and deliver real value.
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Get In Touch */}
            <section className="mb-6 md:mb-8">
              <h3 className="text-lg font-medium mb-3 md:mb-4">
                <ScrambleIn
                  text="Get In Touch"
                  scrambleSpeed={30}
                  scrambledLetterCount={2}
                  className="text-gray-900"
                  scrambledClassName="text-gray-400"
                  autoStart={true}
                />
              </h3>
              <div className="grid grid-cols-1 gap-2 md:gap-3">
                <motion.a
                  href="mailto:elanthamilan12@gmail.com"
                  className="flex items-center p-2 md:p-3 text-gray-800 rounded-lg bg-gray-50/50 hover:bg-gray-100/50 border border-gray-200/50 hover:border-gray-300/50 font-normal transition-colors duration-200 text-sm md:text-base"
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
                  className="flex items-center p-2 md:p-3 text-gray-800 rounded-lg bg-gray-50/50 hover:bg-gray-100/50 border border-gray-200/50 hover:border-gray-300/50 font-normal transition-colors duration-200 text-sm md:text-base"
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
                  className="flex items-center p-2 md:p-3 text-gray-800 rounded-lg bg-gray-50/50 hover:bg-gray-100/50 border border-gray-200/50 hover:border-gray-300/50 font-normal transition-colors duration-200 text-sm md:text-base"
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
                  className="flex items-center p-2 md:p-3 text-gray-800 rounded-lg bg-gray-50/50 hover:bg-gray-100/50 border border-gray-200/50 hover:border-gray-300/50 font-normal transition-colors duration-200 text-sm md:text-base"
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

            {/* Skills & Expertise Section */}
            <Skills />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
