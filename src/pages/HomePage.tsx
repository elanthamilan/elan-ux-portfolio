import React from 'react';
import Hero from '../components/sections/Hero.tsx';
import Skills from '../components/sections/Skills.tsx';

const HomePage = () => {
  return (
    <>
      {/* Render the Hero and Skills sections on the home page */}
      <Hero />
      <Skills />
      {/* Add other sections specific to the home page here */}
    </>
  );
};

export default HomePage;
