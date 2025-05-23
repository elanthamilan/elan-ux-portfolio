import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
import { useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from './lib/gsap/useGSAP.ts';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage.tsx'));
const CaseStudyCampusHiring = lazy(() => import('./pages/CaseStudyCampusHiring.tsx'));
const CaseStudyStudentPlanner = lazy(() => import('./pages/CaseStudyStudentPlanner.tsx'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-foreground mb-4">Something went wrong</h1>
            <p className="text-foreground/80 mb-4">We're sorry, but there was an error loading this page.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const { isInitialized } = useGSAP();
  const location = useLocation(); // Get location object

  useEffect(() => {
    if (isInitialized && typeof window !== 'undefined') {
      try {
        gsap.registerPlugin(ScrollTrigger);
      } catch (error) {
        console.error('Error initializing GSAP:', error);
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isInitialized]);

  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  };

  return (
    <ErrorBoundary>
      <AnimatePresence mode="wait">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes location={location} key={location.pathname}>
            <Route 
              path="/" 
              element={
                <motion.div key="home" {...pageTransition}>
                  <HomePage />
                </motion.div>
              } 
            />
            <Route 
              path="/case-study/campus-hiring" 
              element={
                <motion.div key="cs-campus" {...pageTransition}>
                  <CaseStudyCampusHiring />
                </motion.div>
              } 
            />
            <Route 
              path="/case-study/student-planner" 
              element={
                <motion.div key="cs-student-planner" {...pageTransition}>
                  <CaseStudyStudentPlanner />
                </motion.div>
              } 
            />
            <Route
              path="*"
              element={
                <motion.div key="notfound" {...pageTransition}>
                  <main className="min-h-screen flex items-center justify-center bg-background"> {/* Added main tag */}
                    <div className="text-center p-8">
                      <h1 className="text-2xl font-bold text-foreground mb-4">Page Not Found</h1>
                      <p className="text-foreground/80 mb-4">The page you're looking for doesn't exist.</p>
                      <a
                        href="/"
                        className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors inline-block"
                      >
                        Go Home
                      </a>
                    </div>
                  </main> {/* Closed main tag */}
                </motion.div>
              }
            />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </ErrorBoundary>
  );
}

export default App;
