import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-8 px-4 bg-gray-900 text-gray-400"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} Elan Thamilan. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/elanthamilan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/elanthamilan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
            <a
              href="https://dribbble.com/elanthamilan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Dribbble Profile"
            >
              Dribbble
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          <p>
            Designed and built with ❤️ using React, GSAP, and Framer Motion
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 