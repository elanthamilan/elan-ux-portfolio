// src/components/sections/BrandsSection.tsx
import React from 'react';
import { motion } from 'motion/react';
import ScrambleIn from '../../fancy/components/text/scramble-in';
import { usePrefersReducedMotion } from '@/components/hooks/usePrefersReducedMotion';

const BrandsSection: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  return (
    <section className="mb-8 md:mb-12" aria-labelledby="brands-worked-with-title">
      <h3 id="brands-worked-with-title" className="text-lg font-semibold mb-3 md:mb-4">
        <ScrambleIn
          text="🏢 Brands I Have Worked With"
          scrambleSpeed={30}
          scrambledLetterCount={2}
          className="text-black"
          scrambledClassName="text-gray-500"
          autoStart={true}
        />
      </h3>
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6 items-center"
          animate={{ x: prefersReducedMotion ? 0 : [0, -200] }}
          transition={
            prefersReducedMotion
              ? { duration: 0, repeat: 0, ease: "linear" }
              : {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear",
                  },
                }
          }
        >
          {/* First set of logos */}
          <div className="flex gap-6 items-center flex-shrink-0">
            <img src="/Elanable-uploads/Camu.png" alt="Camu" className="h-8 md:h-10 w-auto object-contain filter grayscale opacity-60 hover:opacity-90 hover:grayscale-0 transition-all duration-300" loading="lazy" />
            <img src="/Elanable-uploads/Mastek.png" alt="Mastek" className="h-8 md:h-10 w-auto object-contain filter grayscale opacity-60 hover:opacity-90 hover:grayscale-0 transition-all duration-300" loading="lazy" />
            <img src="/Elanable-uploads/Geninfy.jpg" alt="Geninfy" className="h-8 md:h-10 w-auto object-contain filter grayscale opacity-60 hover:opacity-90 hover:grayscale-0 transition-all duration-300" loading="lazy" />
            <img src="/Elanable-uploads/Oceo.svg" alt="Oceo" className="h-8 md:h-10 w-auto object-contain filter grayscale opacity-60 hover:opacity-90 hover:grayscale-0 transition-all duration-300" loading="lazy" />
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex gap-6 items-center flex-shrink-0">
            <img src="/Elanable-uploads/Camu.png" alt="Camu" className="h-8 md:h-10 w-auto object-contain filter grayscale opacity-60 hover:opacity-90 hover:grayscale-0 transition-all duration-300" loading="lazy" />
            <img src="/Elanable-uploads/Mastek.png" alt="Mastek" className="h-8 md:h-10 w-auto object-contain filter grayscale opacity-60 hover:opacity-90 hover:grayscale-0 transition-all duration-300" loading="lazy" />
            <img src="/Elanable-uploads/Geninfy.jpg" alt="Geninfy" className="h-8 md:h-10 w-auto object-contain filter grayscale opacity-60 hover:opacity-90 hover:grayscale-0 transition-all duration-300" loading="lazy" />
            <img src="/Elanable-uploads/Oceo.svg" alt="Oceo" className="h-8 md:h-10 w-auto object-contain filter grayscale opacity-60 hover:opacity-90 hover:grayscale-0 transition-all duration-300" loading="lazy" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsSection;
