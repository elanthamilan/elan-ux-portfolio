import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Skills from "../Skills";
import CaseStudyCard from "../CaseStudyCard";
import ScrambleIn from "../../fancy/components/text/scramble-in";
import { motion } from 'motion/react';


// Simple HomePage component that matches the attachment layout
const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#177863]/10 to-[#177863]/5 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-[#16325A]/10 to-[#16325A]/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-[#F8F4F2]/40 to-[#F8F4F2]/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-[#177863]/8 to-[#177863]/4 rounded-full blur-xl"></div>
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
                </motion.span> 👋
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
                  🚀 Let's Solve Together
                </motion.a>
                <motion.a
                  href="/Elanthamilan_UX_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-4 bg-white text-[#177863] font-semibold rounded-lg border-2 border-[#177863] hover:bg-[#177863]/5 transition-colors duration-200 text-sm sm:text-base"
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                >
                  📄 See Track Record
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
                  <img src="/Elanable-uploads/Camu.png" alt="Camu" className="h-8 md:h-10 mx-auto mb-1 md:mb-2 object-contain" />
                  <p className="text-gray-700 font-normal text-xs md:text-sm">Camu</p>
                </motion.div>
                <motion.div
                  className="text-center p-2 md:p-3 rounded-lg bg-gray-50/50 hover:bg-gray-100/50 transition-colors duration-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <img src="/Elanable-uploads/Mastek.png" alt="Mastek" className="h-8 md:h-10 mx-auto mb-1 md:mb-2 object-contain" />
                  <p className="text-gray-700 font-normal text-xs md:text-sm">Mastek</p>
                </motion.div>
                <motion.div
                  className="text-center p-2 md:p-3 rounded-lg bg-gray-50/50 hover:bg-gray-100/50 transition-colors duration-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <img src="/Elanable-uploads/Geninfy.jpg" alt="Geninfy" className="h-8 md:h-10 mx-auto mb-1 md:mb-2 object-contain" />
                  <p className="text-gray-700 font-normal text-xs md:text-sm">Geninfy</p>
                </motion.div>
                <motion.div
                  className="text-center p-2 md:p-3 rounded-lg bg-gray-50/50 hover:bg-gray-100/50 transition-colors duration-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <img src="/Elanable-uploads/Oceo.svg" alt="Oceo" className="h-8 md:h-10 mx-auto mb-1 md:mb-2 object-contain" />
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
                <motion.details
                  className="border border-gray-200/50 rounded-lg hover:border-gray-300/50 transition-colors duration-200"
                  open
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                >
                  <summary className="p-4 cursor-pointer font-medium flex items-center justify-between text-gray-800 hover:text-gray-900 transition-colors">
                    <span className="flex items-center gap-2">
                      🎓 EdTech
                    </span>
                    <svg
                      className="w-5 h-5 transition-transform duration-200 details-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-4 pt-0 text-gray-700 leading-relaxed font-normal">
                    Led UX strategy and design for SIS, LMS, Recruitment App, and Student Portals. Revamped SIS through evaluation, design systems, and redesign of 30+ features. Directed LMS design focusing on accessibility, usability, and scalable workflows. Designed Student Portal for seamless navigation and mobile responsiveness. Created eLearning platform for trading courses.
                  </div>
                </motion.details>

                <motion.details
                  className="border border-gray-200/50 rounded-lg hover:border-gray-300/50 transition-colors duration-200"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
                >
                  <summary className="p-4 cursor-pointer font-medium flex items-center justify-between text-gray-800 hover:text-gray-900 transition-colors">
                    <span className="flex items-center gap-2">
                      🛒 eCommerce
                    </span>
                    <svg
                      className="w-5 h-5 transition-transform duration-200 details-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-4 pt-0 text-gray-700 leading-relaxed font-normal">
                    Redesigned key flows for a B2B pharma eCommerce site. Designed eCommerce experiences for brands like Robinson Co. and Natural Partners. Improved product discovery, navigation and checkout flows. Crafted scalable UI systems for quick orders, subscriptions, and account management.
                  </div>
                </motion.details>

                <motion.details
                  className="border border-gray-200/50 rounded-lg hover:border-gray-300/50 transition-colors duration-200"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
                >
                  <summary className="p-4 cursor-pointer font-medium flex items-center justify-between text-gray-800 hover:text-gray-900 transition-colors">
                    <span className="flex items-center gap-2">
                      🔗 Connected Tech
                    </span>
                    <svg
                      className="w-5 h-5 transition-transform duration-200 details-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-4 pt-0 text-gray-700 leading-relaxed font-normal">
                    Led design for connected home interfaces (consumer & industrial IoT). As founding member of product/design team, revamped platform and built comprehensive design system. Designed subscription-based water purifier interface and mobile app for idly dosa batter making machine. Specialized in asset management solutions for real-time tool tracking in industrial IoT settings - complex systems requiring intuitive interfaces for non-technical users.
                  </div>
                </motion.details>

                <motion.details
                  className="border border-gray-200/50 rounded-lg hover:border-gray-300/50 transition-colors duration-200"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.25, ease: "easeOut" }}
                >
                  <summary className="p-4 cursor-pointer font-medium flex items-center justify-between text-gray-800 hover:text-gray-900 transition-colors">
                    <span className="flex items-center gap-2">
                      🚀 Startup
                    </span>
                    <svg
                      className="w-5 h-5 transition-transform duration-200 details-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-4 pt-0 text-gray-700 leading-relaxed font-normal">
                    Contributed to the design and development of various startup products, focusing on user-centered design and rapid iteration. Built MVPs that scale and deliver real value.
                  </div>
                </motion.details>
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
                  <span className="truncate">📧 elanthamilan12@gmail.com</span>
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
                  📞 +918148622302
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
                  💬 WhatsApp
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
                  💼 LinkedIn Profile
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
