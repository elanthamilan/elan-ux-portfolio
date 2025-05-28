
import React, { useEffect } from 'react'; // Ensure useEffect is imported
import SimpleHomePage from '@/components/sections/Hero';

const HomePage = () => {
  useEffect(() => {
    document.title = "Home - Elanthamilan - UX Designer";
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <main id="main-content" className="flex-grow">
      <SimpleHomePage />
    </main>
  );
};

export default HomePage;
