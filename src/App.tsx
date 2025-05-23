import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
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

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study/campus-hiring" element={<CaseStudyCampusHiring />} />
          <Route path="/case-study/student-planner" element={<CaseStudyStudentPlanner />} />
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center bg-background">
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
              </div>
            }
          />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
