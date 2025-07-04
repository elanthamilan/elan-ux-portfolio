import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from './components/hooks/useReducedMotion';
import { SkipLink } from './components/ui/SkipLink';
import { PerformanceWrapper } from './components/ui/PerformanceWrapper';
import ScrollToTop from './components/ui/ScrollToTop';
import HomePageSkeleton from './components/ui/HomePageSkeleton';
import CaseStudySkeleton from './components/ui/CaseStudySkeleton';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';
import { PWAUpdateNotification, ConnectionStatus } from './components/PWAUpdateNotification';
import CSSDebug from './components/CSSDebug';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage.tsx'));
const CaseStudyCampusHiring = lazy(() => import('./pages/CaseStudyCampusHiring.tsx'));
const CaseStudyStudentPlanner = lazy(() => import('./pages/CaseStudyStudentPlanner.tsx'));
const CaseStudyCAMUPlanner = lazy(() => import('./pages/CaseStudyCAMUPlanner.tsx'));
const SkeletonDemo = lazy(() => import('./components/ui/SkeletonDemo.tsx'));
const PWATestPage = lazy(() => import('./components/ui/PWATestPage.tsx'));

const NotFoundPage = () => (
  <main className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center p-8 max-w-md">
      <h1 className="text-2xl font-bold text-foreground mb-4">
        Page Not Found
      </h1>
      <p className="text-foreground/80 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Go Home
      </a>
    </div>
  </main>
);

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center p-8 max-w-md">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Something went wrong
            </h1>
            <p className="text-foreground/80 mb-6">
              We're sorry, but there was an error loading this page. Please try refreshing or contact support if the problem persists.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Reload Page
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

function App() {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  // Preload critical pages
  useEffect(() => {
    const preloadPages = () => {
      import('./pages/HomePage.tsx');
    };

    const timeoutId = setTimeout(preloadPages, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  const pageTransition = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.3,
      ease: 'easeInOut'
    }
  };

  return (
    <ErrorBoundary>
      <SkipLink href="#main-content">
        Skip to main content
      </SkipLink>

      <ScrollToTop />

      {/* PWA Components */}
      <ConnectionStatus />
      <PWAUpdateNotification />
      <PWAInstallPrompt />

      {/* CSS Debug Route - Remove this after testing */}
      <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 9999 }}>
        <a 
          href="#debug" 
          onClick={(e) => {
            e.preventDefault();
            document.body.innerHTML = '';
            const debugContainer = document.createElement('div');
            document.body.appendChild(debugContainer);
            import('react-dom/client').then(({ createRoot }) => {
              const root = createRoot(debugContainer);
              root.render(React.createElement(CSSDebug));
            });
          }}
          style={{ 
            background: 'red', 
            color: 'white', 
            padding: '10px', 
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '12px'
          }}
        >
          CSS DEBUG
        </a>
      </div>

      <AnimatePresence mode="wait">
        <PerformanceWrapper fallback={<HomePageSkeleton />}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div key="home" {...pageTransition}>
                  <React.Suspense fallback={<HomePageSkeleton />}>
                    <HomePage />
                  </React.Suspense>
                </motion.div>
              }
            />
            <Route
              path="/case-study/campus-hiring"
              element={
                <motion.div key="cs-campus" {...pageTransition}>
                  <React.Suspense fallback={<CaseStudySkeleton variant="campus-hiring" />}>
                    <CaseStudyCampusHiring />
                  </React.Suspense>
                </motion.div>
              }
            />
            <Route
              path="/case-study/student-planner"
              element={
                <motion.div key="cs-student-planner" {...pageTransition}>
                  <React.Suspense fallback={<CaseStudySkeleton variant="student-planner" />}>
                    <CaseStudyStudentPlanner />
                  </React.Suspense>
                </motion.div>
              }
            />
            <Route
              path="/case-study/camu-course-planner"
              element={
                <motion.div key="cs-camu-planner" {...pageTransition}>
                  <React.Suspense fallback={<CaseStudySkeleton />}>
                    <CaseStudyCAMUPlanner />
                  </React.Suspense>
                </motion.div>
              }
            />
            <Route
              path="/skeleton-demo"
              element={
                <motion.div key="skeleton-demo" {...pageTransition}>
                  <React.Suspense fallback={<CaseStudySkeleton variant="campus-hiring" />}>
                    <SkeletonDemo />
                  </React.Suspense>
                </motion.div>
              }
            />
            <Route
              path="/pwa-test"
              element={
                <motion.div key="pwa-test" {...pageTransition}>
                  <React.Suspense fallback={<HomePageSkeleton />}>
                    <PWATestPage />
                  </React.Suspense>
                </motion.div>
              }
            />
            <Route
              path="*"
              element={
                <motion.div key="notfound" {...pageTransition}>
                  <NotFoundPage />
                </motion.div>
              }
            />
          </Routes>
        </PerformanceWrapper>
      </AnimatePresence>
    </ErrorBoundary>
  );
}

export default App;
