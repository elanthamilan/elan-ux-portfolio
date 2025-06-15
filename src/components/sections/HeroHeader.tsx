
import { motion } from 'motion/react';

const HeroHeader = () => {
  return (
    <section className="mb-16" aria-labelledby="hero-heading">
      {/* Main Headline with enhanced visual hierarchy */}
      <div className="mb-6">
        <div className="mb-2">
          <motion.span 
            className="inline-flex items-center px-4 py-2 rounded-full text-sm md:text-base font-bold uppercase tracking-wider bg-gradient-to-r from-[#177863]/10 to-[#177863]/5 border border-[#177863]/20"
            style={{ color: '#177863' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="w-2 h-2 bg-[#177863] rounded-full mr-3 animate-pulse" aria-hidden="true"></span>
            Designing Intuitive Experiences
          </motion.span>
        </div>
        <motion.h1
          id="hero-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black mt-4"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ color: '#16325A' }}
        >
          Transform Complexity into Effortless Product Experiences.
        </motion.h1>
      </div>
    </section>
  );
};

export default HeroHeader;
