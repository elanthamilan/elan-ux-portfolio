
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CaseStudyCampusHiring from "./pages/CaseStudyCampusHiring";
import CaseStudyStudentPlanner from "./pages/CaseStudyStudentPlanner";
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsapUtils'; // Corrected import path

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const contentRef = useRef<HTMLDivElement>(null);
  const isInitialRender = useRef(true); // Track initial render

  // Initial load animation
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current, 
        { opacity: 0, scale: 0.98 }, 
        { opacity: 1, scale: 1, duration: 0.3, ease: "power1.out" }
      );
    }
  }, []);

  // Route change animation
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return; // Skip animation on initial render, handled by the effect above
    }

    if (contentRef.current) {
      // Fade out and scale down
      gsap.to(contentRef.current, {
        opacity: 0,
        scale: 0.98,
        duration: 0.3,
        ease: "power1.in",
        onComplete: () => {
          window.scrollTo(0, 0);
          // Fade in and scale up for the new content
          gsap.fromTo(contentRef.current,
            { opacity: 0, scale: 0.98 }, // Start from faded out and scaled down
            { opacity: 1, scale: 1, duration: 0.3, ease: "power1.out", delay: 0.1 } 
          );
        }
      });
    }
  }, [location.pathname]); // Trigger on pathname change

  return (
    <div ref={contentRef} className="main-content-wrapper"> {/* This div is the target of animations */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/case-study/campus-hiring" element={<CaseStudyCampusHiring />} />
        <Route path="/case-study/student-planner" element={<CaseStudyStudentPlanner />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <HashRouter>
          {/* ScrollToTop component is removed as GSAP handles scroll */}
          <Toaster />
          <Sonner />
          <AppContent />
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
