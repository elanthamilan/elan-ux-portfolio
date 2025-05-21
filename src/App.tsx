import React, { lazy, Suspense } from 'react'; // Import lazy and Suspense
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header.js'; // Updated path
import Footer from './components/layout/Footer.js'; // Updated path

// Lazy load the HomePage component
const HomePage = lazy(() => import('./pages/HomePage.js'));

function App() {
  return (
    <div className="app-container">
      {/* Header and Footer are outside Routes so they appear on all pages */}
      <Header />
      {/* Use Suspense for lazy loaded components */}
      <Suspense fallback={<div>Loading...</div>}> {/* Add a loading fallback */}
        <Routes>
          {/* Define a route for the home page */}
          <Route path="/" element={<HomePage />} />
          {/* Add more routes here as needed */}
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
