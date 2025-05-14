
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CaseStudyCampusHiring from "./pages/CaseStudyCampusHiring";
import CaseStudyStudentPlanner from "./pages/CaseStudyStudentPlanner";
import { useLayoutEffect, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <HashRouter>
          <ScrollToTop />
          <Toaster />
          <Sonner />
          <div className={`fade-in ${loaded ? 'loaded' : ''}`}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/case-study/campus-hiring" element={<CaseStudyCampusHiring />} />
              <Route path="/case-study/student-planner" element={<CaseStudyStudentPlanner />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
