import React from "react";

// Simple HomePage component that matches the attachment layout
const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b">
        <div className="text-xl font-semibold text-blue-600">Elan</div>
        <nav className="flex space-x-6">
          <a href="/Elanthamilan_UX_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Download Resume</a>
          <a href="mailto:elanthamilan12@gmail.com" className="text-blue-600 underline">Email</a>
        </nav>
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6">
        {/* Title Section */}
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
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            📄 Download Resume
          </a>
        </div>

        {/* Brands Section */}
        <div className="mb-8">
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
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-center">
          <div>
            <div className="text-sm text-gray-600">Experience</div>
            <div className="text-xl font-semibold">8+ Years</div>
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

        {/* Industries Section */}
        <div className="mb-8">
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
        </div>

        {/* Get In Touch */}
        <div className="mb-8">
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
        </div>

        {/* Case Studies */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Case Studies</h3>
          <div className="space-y-6">
            <div className="border rounded-lg overflow-hidden">
              <img
                src="/Elanable-uploads/Camu Campus Recruitment App.png"
                alt="Camu Recruiter"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold mb-2">Camu Recruiter</h4>
                <p className="text-gray-700 text-sm">Campus hiring platform design</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
