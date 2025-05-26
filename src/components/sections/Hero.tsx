import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Skills from "../Skills";
import CaseStudyCard from "../CaseStudyCard";
import ScrambleIn from "../../fancy/components/text/scramble-in";
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

// Simple HomePage component that matches the attachment layout
const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left Column - Hero (mb-8) + Case Studies */}
          <div className="space-y-8">
            {/* Title Section (the original mb-8 content) */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">
                <ScrambleIn
                  text="Enterprise UX Designer"
                  scrambleSpeed={30}
                  scrambledLetterCount={3}
                  className="text-gray-900"
                  scrambledClassName="text-gray-400"
                />
              </h1>
              <h2 className="text-2xl font-semibold text-[#177863] mb-4">
                <ScrambleIn
                  text="Expert in EdTech & HR Tech"
                  scrambleSpeed={40}
                  scrambledLetterCount={2}
                  className="text-[#177863]"
                  scrambledClassName="text-[#177863]/50"
                  autoStart={true}
                />
              </h2>

              <motion.p
                className="text-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hi, I'm <motion.span
                  className="font-semibold"
                  whileHover={{
                    scale: 1.1,
                    color: "#177863",
                    transition: { duration: 0.2 }
                  }}
                >
                  Elanthamilan
                </motion.span> 👋🤓
              </motion.p>

              <motion.p
                className="text-gray-700 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Experienced UX designer specializing in enterprise SaaS, EdTech, and HR Tech. I transform complex business challenges into intuitive, user-centered solutions that drive measurable impact and enhance usability for large-scale products.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button
                  asChild
                  variant="default"
                  size="lg"
                  className="text-base"
                >
                  <a
                    href="/Elanthamilan_UX_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📄 Download Resume
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Case Studies - Prominent in Left Column */}
            <section aria-labelledby="case-studies-title">
              <h2 id="case-studies-title" className="text-2xl lg:text-3xl font-bold mb-6 text-foreground">
                <ScrambleIn
                  text="Featured Case Studies"
                  scrambleSpeed={25}
                  scrambledLetterCount={2}
                  className="text-gray-900"
                  scrambledClassName="text-gray-400"
                  autoStart={true}
                />
              </h2>
              <div className="space-y-6">
                <CaseStudyCard
                  title="Camu Recruiter"
                  year="2024"
                  who="Camu (EdTech Platform)"
                  what="Campus Recruitment Platform Design"
                  result="40% faster hiring process, $500K revenue increase"
                  description="Designed an end-to-end campus recruitment platform that streamlines the hiring process for educational institutions and companies."
                  image="/Elanable-uploads/Camu Campus Recruitment App.png"
                  link="/case-study/campus-hiring"
                  tags={["UX Design", "Enterprise", "HR Tech"]}
                  index={0}
                  cardClassName="bg-gradient-to-br from-[#177863]/5 to-[#177863]/10 border-[#177863]/20"
                  accentColorName="brand-primary"
                  buttonVariant="default"
                />
                <CaseStudyCard
                  title="Student Course Planner"
                  year="2024"
                  who="EdTech Startup"
                  what="AI-Powered Course Planning Tool"
                  result="60% improvement in course completion rates"
                  description="Developed an intelligent course planning system that helps students optimize their academic journey with AI-powered recommendations."
                  image="/placeholder-ux-design.svg"
                  link="/case-study/student-planner"
                  tags={["AI/ML", "EdTech", "Product Design"]}
                  index={1}
                  cardClassName="bg-gradient-to-br from-[#16325A]/5 to-[#16325A]/10 border-[#16325A]/20"
                  accentColorName="brand-secondary"
                  buttonVariant="secondary"
                />
              </div>
            </section>
          </div>

          {/* Right Column - Everything Else */}
          <div className="space-y-8">
            {/* Brands Section */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                <ScrambleIn
                  text="Brands I Have Worked With"
                  scrambleSpeed={30}
                  scrambledLetterCount={2}
                  className="text-gray-900"
                  scrambledClassName="text-gray-400"
                  autoStart={true}
                />
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  <img src="/Elanable-uploads/Camu.png" alt="Camu" className="h-12 mx-auto mb-2 object-contain" />
                  <p className="text-sm">Camu</p>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  <img src="/Elanable-uploads/Mastek.png" alt="Mastek" className="h-12 mx-auto mb-2 object-contain" />
                  <p className="text-sm">Mastek</p>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  <img src="/Elanable-uploads/Geninfy.jpg" alt="Geninfy" className="h-12 mx-auto mb-2 object-contain" />
                  <p className="text-sm">Geninfy</p>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  <img src="/Elanable-uploads/Oceo.svg" alt="Oceo" className="h-12 mx-auto mb-2 object-contain" />
                  <p className="text-sm">Oceo</p>
                </motion.div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                <ScrambleIn
                  text="Key Metrics"
                  scrambleSpeed={30}
                  scrambledLetterCount={2}
                  className="text-gray-900"
                  scrambledClassName="text-gray-400"
                  autoStart={true}
                />
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="p-3 rounded-lg bg-blue-50 dark:bg-slate-800"
                >
                  <div className="text-sm text-gray-600">Years Exp</div>
                  <div className="text-xl font-semibold">9+</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="p-3 rounded-lg bg-green-50 dark:bg-slate-800"
                >
                  <div className="text-sm text-gray-600">Products</div>
                  <div className="text-xl font-semibold">10+</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="p-3 rounded-lg bg-purple-50 dark:bg-slate-800"
                >
                  <div className="text-sm text-gray-600">Features</div>
                  <div className="text-xl font-semibold">30+</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="p-3 rounded-lg bg-orange-50 dark:bg-slate-800"
                >
                  <div className="text-sm text-gray-600">Design systems</div>
                  <div className="text-xl font-semibold">2</div>
                </motion.div>
              </div>
            </section>

            {/* Industries Section */}
            <section className="mb-8">
              <motion.h3
                className="text-xl font-semibold mb-4"
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
              <div className="space-y-2">
                <motion.details
                  className="border border-[#177863]/20 rounded-lg hover:border-[#177863]/40 transition-colors"
                  open
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                >
                  <summary className="p-4 cursor-pointer font-medium flex items-center text-[#177863] hover:text-[#177863]/80 transition-colors">
                    🎓 EdTech
                  </summary>
                  <div className="p-4 pt-0 text-gray-700">
                    Led UX strategy and design for SIS, LMS, Recruitment App, and Student Portals. Revamped SIS through evaluation, design systems, and redesign of 30+ features. Directed LMS design focusing on accessibility, usability, and scalable workflows. Designed Student Portal for seamless navigation and mobile responsiveness. Created eLearning platform for trading courses.
                  </div>
                </motion.details>

                <motion.details
                  className="border border-[#16325A]/20 rounded-lg hover:border-[#16325A]/40 transition-colors"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                >
                  <summary className="p-4 cursor-pointer font-medium flex items-center text-[#16325A] hover:text-[#16325A]/80 transition-colors">
                    🛒 eCommerce
                  </summary>
                  <div className="p-4 pt-0 text-gray-700">
                    Redesigned key flows for a B2B pharma eCommerce site. Designed eCommerce experiences for brands like Robinson Co. and Natural Partners. Improved product discovery, navigation and checkout flows. Crafted scalable UI systems for quick orders, subscriptions, and account management.
                  </div>
                </motion.details>

                <motion.details
                  className="border border-[#177863]/20 rounded-lg hover:border-[#177863]/40 transition-colors"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                >
                  <summary className="p-4 cursor-pointer font-medium flex items-center text-[#177863] hover:text-[#177863]/80 transition-colors">
                    🔗 Connected Tech
                  </summary>
                  <div className="p-4 pt-0 text-gray-700">
                    Led design for connected home interfaces (consumer & industrial IoT). Founding member of product/design team, revamped platform, built design system. Designed subscription-based water purifier interface and mobile app for idly dosa batter making machine. Experience includes designing asset management solutions for real-time tool tracking in industrial IoT settings.
                  </div>
                </motion.details>

                <motion.details
                  className="border border-[#16325A]/20 rounded-lg hover:border-[#16325A]/40 transition-colors"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.25, ease: "easeOut" }}
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                >
                  <summary className="p-4 cursor-pointer font-medium flex items-center text-[#16325A] hover:text-[#16325A]/80 transition-colors">
                    🚀 Startup
                  </summary>
                  <div className="p-4 pt-0 text-gray-700">
                    Contributed to the design and development of various startup products, focusing on user-centered design and rapid iteration.
                  </div>
                </motion.details>
              </div>
            </section>

            {/* Get In Touch */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                <ScrambleIn
                  text="Get In Touch"
                  scrambleSpeed={30}
                  scrambledLetterCount={2}
                  className="text-gray-900"
                  scrambledClassName="text-gray-400"
                  autoStart={true}
                />
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.a
                  href="mailto:elanthamilan12@gmail.com"
                  className="flex items-center p-3 border border-[#177863] text-[#177863] rounded-lg hover:bg-[#177863]/5 transition-colors"
                  whileHover={{
                    scale: 1.01,
                    borderColor: "#177863",
                    backgroundColor: "#177863",
                    color: "#FFFFFF",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.99 }}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
                >
                  📧 elanthamilan12@gmail.com
                </motion.a>
                <motion.a
                  href="tel:+918148622302"
                  className="flex items-center p-3 border border-[#16325A] text-[#16325A] rounded-lg hover:bg-[#16325A]/5 transition-colors"
                  whileHover={{
                    scale: 1.01,
                    borderColor: "#16325A",
                    backgroundColor: "#16325A",
                    color: "#FFFFFF",
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
                  className="flex items-center p-3 border border-[#177863] text-[#177863] rounded-lg hover:bg-[#177863]/5 transition-colors"
                  whileHover={{
                    scale: 1.01,
                    borderColor: "#177863",
                    backgroundColor: "#177863",
                    color: "#FFFFFF",
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
                  href="https://linkedin.com/in/elanthamilan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 border border-[#16325A] text-[#16325A] rounded-lg hover:bg-[#16325A]/5 transition-colors"
                  whileHover={{
                    scale: 1.01,
                    borderColor: "#16325A",
                    backgroundColor: "#16325A",
                    color: "#FFFFFF",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.99 }}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
                >
                  💼 LinkedIn
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
