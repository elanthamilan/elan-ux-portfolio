
import { useEffect } from 'react';
import SimpleHomePage from '@/components/sections/Hero';

const HomePage = () => {
  useEffect(() => {
    document.title = "Home - Elanthamilan - UX Designer";
  }, []);

  return (
    <main id="main-content" className="flex-grow">
      <SimpleHomePage />
    </main>
  );
};

export default HomePage;
