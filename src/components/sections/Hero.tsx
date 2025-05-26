import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Skills from "../Skills";
import CaseStudyCard from "../CaseStudyCard";

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
              <h1 className="text-4xl font-bold mb-2">Enterprise UX Designer</h1>
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Expert in EdTech & HR Tech</h2>

              <p className="text-lg mb-6">
                Hi, I'm <span className="font-semibold">Elanthamilan</span> 👋🤓
              </p>

              <p className="text-gray-700 mb-8 leading-relaxed">
                Experienced UX designer specializing in enterprise SaaS, EdTech, and HR Tech. I transform complex business challenges into intuitive, user-centered solutions that drive measurable impact and enhance usability for large-scale products.
              </p>

              <a
                href="/Elanthamilan_UX_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-brand-primary text-primary-foreground rounded-lg hover:bg-brand-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
              >
                📄 Download Resume
              </a>
            </div>

            {/* Case Studies - Prominent in Left Column */}
            <section aria-labelledby="case-studies-title">
              <h2 id="case-studies-title" className="text-2xl lg:text-3xl font-bold mb-6 text-foreground">
                Featured Case Studies
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
                  cardClassName="bg-accent-bg dark:bg-slate-800/50"
                  accentColorName="brand-primary"
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
                  cardClassName="bg-accent-bg dark:bg-slate-800/50"
                  accentColorName="brand-secondary"
                />
              </div>
            </section>
          </div>

          {/* Right Column - Everything Else */}
          <div className="space-y-8">
            {/* Brands Section */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Brands I Have Worked With</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <img src="/Elanable-uploads/Camu.png" alt="Camu" className="h-12 mx-auto mb-2 object-contain" />
                  <p className="text-sm">Camu</p>
                </div>
                <div className="text-center">
                  <img src="/Elanable-uploads/Mastek.png" alt="Mastek" className="h-12 mx-auto mb-2 object-contain" />
                  <p className="text-sm">Mastek</p>
                </div>
                <div className="text-center">
                  <img src="/Elanable-uploads/Geninfy.jpg" alt="Geninfy" className="h-12 mx-auto mb-2 object-contain" />
                  <p className="text-sm">Geninfy</p>
                </div>
                <div className="text-center">
                  <img src="/Elanable-uploads/Oceo.svg" alt="Oceo" className="h-12 mx-auto mb-2 object-contain" />
                  <p className="text-sm">Oceo</p>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Key Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-sm text-gray-600">Years Exp</div>
                  <div className="text-xl font-semibold">9+</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Products</div>
                  <div className="text-xl font-semibold">10+</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Features</div>
                  <div className="text-xl font-semibold">30+</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Design systems</div>
                  <div className="text-xl font-semibold">2</div>
                </div>
              </div>
            </section>

            {/* Industries Section */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Industries I have Worked In</h3>
              <div className="space-y-2">
                <details className="border rounded-lg" open>
                  <summary className="p-4 cursor-pointer font-medium flex items-center">
                    🎓 EdTech
                  </summary>
                  <div className="p-4 pt-0 text-gray-700">
                    Led UX strategy and design for SIS, LMS, Recruitment App, and Student Portals. Revamped SIS through evaluation, design systems, and redesign of 30+ features. Directed LMS design focusing on accessibility, usability, and scalable workflows. Designed Student Portal for seamless navigation and mobile responsiveness. Created eLearning platform for trading courses.
                  </div>
                </details>

                <details className="border rounded-lg">
                  <summary className="p-4 cursor-pointer font-medium flex items-center">
                    🛒 eCommerce
                  </summary>
                  <div className="p-4 pt-0 text-gray-700">
                    Redesigned key flows for a B2B pharma eCommerce site. Designed eCommerce experiences for brands like Robinson Co. and Natural Partners. Improved product discovery, navigation and checkout flows. Crafted scalable UI systems for quick orders, subscriptions, and account management.
                  </div>
                </details>

                <details className="border rounded-lg">
                  <summary className="p-4 cursor-pointer font-medium flex items-center">
                    🔗 Connected Tech
                  </summary>
                  <div className="p-4 pt-0 text-gray-700">
                    Led design for connected home interfaces (consumer & industrial IoT). Founding member of product/design team, revamped platform, built design system. Designed subscription-based water purifier interface and mobile app for idly dosa batter making machine. Experience includes designing asset management solutions for real-time tool tracking in industrial IoT settings.
                  </div>
                </details>

                <details className="border rounded-lg">
                  <summary className="p-4 cursor-pointer font-medium flex items-center">
                    🚀 Startup
                  </summary>
                  <div className="p-4 pt-0 text-gray-700">
                    Contributed to the design and development of various startup products, focusing on user-centered design and rapid iteration.
                  </div>
                </details>
              </div>
            </section>

            {/* Get In Touch */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="mailto:elanthamilan12@gmail.com"
                  className="flex items-center p-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  📧 elanthamilan12@gmail.com
                </a>
                <a
                  href="tel:+918148622302"
                  className="flex items-center p-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  📞 +918148622302
                </a>
                <a
                  href="https://wa.me/918148622302"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  💬 WhatsApp
                </a>
                <a
                  href="https://linkedin.com/in/elanthamilan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  💼 LinkedIn
                </a>
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
