import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroWithSkills from "../components/sections/Hero";
import ScrollToTop from "../components/ScrollToTop";
import PerformanceOptimizer from "../components/PerformanceOptimizer";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <PerformanceOptimizer />
      <Header />
      <main className="flex-1 p-6 mb-6">
        <HeroWithSkills />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
