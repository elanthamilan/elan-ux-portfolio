import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/providers/ThemeProvider'
import './index.css'

// Cache busting - force fresh load
console.log('App loaded at:', new Date().toISOString());

// Lazy load components for better performance
const HomePage = React.lazy(() => import('./pages/HomePage'))
const CaseStudyCampusHiring = React.lazy(() => import('./pages/CaseStudyCampusHiring'))
const CaseStudyStudentPlanner = React.lazy(() => import('./pages/CaseStudyStudentPlanner'))

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-primary"></div>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/case-study/campus-hiring" element={<CaseStudyCampusHiring />} />
            <Route path="/case-study/student-planner" element={<CaseStudyStudentPlanner />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
)

// Service worker temporarily disabled for development
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/sw.js')
//       .then((registration) => {
//         console.log('SW registered: ', registration);
//       })
//       .catch((registrationError) => {
//         console.log('SW registration failed: ', registrationError);
//       });
//   });
// }
