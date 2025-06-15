
import { lazy, Suspense } from 'react';
import Header from "../layout/Header";
import HeroHeader from './HeroHeader';
import HeroIntro from './HeroIntro';
import HeroFeatures from './HeroFeatures';
import HeroCTA from './HeroCTA';
import CaseStudiesSection from './CaseStudiesSection';
import ContactSection from './ContactSection';

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

const HomePage = () => {
  return (
    <div
      className="text-gray-900 font-sans"
      style={{
        background: '#FFFFFF'
      }}
    >
      <Header />
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8" role="main">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[5fr_2fr] gap-8 md:gap-10 lg:gap-20">

          {/* Left Column - Hero + Case Studies */}
          <div className="space-y-10">
            {/* Hero Section */}
            <HeroHeader />
            <HeroIntro />
            <HeroFeatures />
            <HeroCTA />

            {/* Case Studies */}
            <CaseStudiesSection />
          </div>

          {/* Right Column - Sidebar Content */}
          <div className="space-y-8 md:space-y-12 md:max-w-md lg:max-w-none mx-auto lg:mx-0">
            {/* Get In Touch */}
            <ContactSection />

            {/* Brands Section */}
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
