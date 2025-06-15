
import { motion } from 'motion/react';
import { AccessibleButton } from '../ui/AccessibleButton';

const HeroCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="flex flex-col sm:flex-row gap-4 sm:gap-6"
      role="group"
      aria-label="Contact options"
    >
      <AccessibleButton
        asChild
        variant="dark"
        size="lg"
        className="font-medium rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2 shadow-lg hover:shadow-xl relative overflow-hidden text-[#171717]"
        aria-label="Send email to discuss collaboration"
        style={{ color: '#171717' }}
      >
        <motion.a
          href="mailto:elanthamilan12@gmail.com"
          className="group inline-flex items-center justify-center px-8 py-4"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" aria-hidden="true"></div>
          <span className="flex items-center gap-3 relative z-10">
            <span className="material-symbols-outlined text-xl" aria-hidden="true" style={{ color: '#171717' }}>mail</span>
            Let's Solve Together
          </span>
        </motion.a>
      </AccessibleButton>
      <AccessibleButton
        asChild
        variant="secondary"
        size="lg"
        className="font-medium rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2 hover:shadow-lg text-[#171717]"
        aria-label="Download resume PDF"
        style={{ color: '#171717' }}
      >
        <motion.a
          href="/Elanthamilan_UX_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center px-8 py-4"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
        >
          <span className="flex items-center gap-3">
            <span className="material-symbols-outlined text-xl group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" style={{ color: '#171717' }}>download</span>
            See Track Record
          </span>
        </motion.a>
      </AccessibleButton>
    </motion.div>
  );
};

export default HeroCTA;
