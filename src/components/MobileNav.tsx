import { useEffect, useRef } from 'react';
import { useGSAP } from '../lib/gsap/useGSAP.js';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MobileNav = () => {
  const { elementRef, scrollAnimation } = useGSAP();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (navRef.current) {
      scrollAnimation(
        navRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out'
        },
        {
          start: 'top top',
          end: 'bottom top',
          toggleActions: 'play none none reverse'
        }
      );
    }
  }, []);

  return (
    <motion.nav
      ref={navRef}
      initial={{ opacity: 0, y: 20 }} // Changed initial y from -20 to 20 for bottom nav
      className="fixed bottom-0 left-0 right-0 bg-background/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-700 z-50 md:hidden shadow-t-lg" // Themed background, border, added shadow-t-lg
      role="navigation" // Added ARIA role
      aria-label="Mobile Navigation"
    >
      <div className="container mx-auto px-4"> {/* Changed max-w-screen-xl to container for consistency */}
        <div className="flex items-center justify-around h-16"> {/* justify-around for better spacing */}
          <Link
            to="/Elanthamilan_UX_Resume.pdf" // Changed from /resume to direct PDF link
            target="_blank" // Open resume in new tab
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center px-3 py-2 text-xs font-medium text-foreground hover:text-brand-primary focus-visible:text-brand-primary focus-visible:bg-brand-primary/10 rounded-md transition-colors" // Themed text, hover, focus. Added flex-col for icon above text.
            aria-label="View Resume"
          >
            <svg // Using a generic document icon, consider replacing with Download icon from lucide-react if preferred
              className="w-5 h-5 mb-0.5" // Adjusted margin
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Resume
          </Link>

          <a // Changed Link to /contact to a direct mailto link
            href="mailto:elanthamilan12@gmail.com"
            className="flex flex-col items-center justify-center px-3 py-2 text-xs font-medium text-foreground hover:text-brand-primary focus-visible:text-brand-primary focus-visible:bg-brand-primary/10 rounded-md transition-colors" // Themed text, hover, focus
            aria-label="Contact via Email"
          >
            <svg
              className="w-5 h-5 mb-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Email
          </a>

          <a
            href="https://wa.me/918148622302" // Updated placeholder
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center px-3 py-2 text-xs font-medium text-foreground hover:text-brand-primary focus-visible:text-brand-primary focus-visible:bg-brand-primary/10 rounded-md transition-colors" // Themed text, hover, focus
            aria-label="Contact via WhatsApp"
          >
            <svg
              className="w-5 h-5 mb-0.5"
              fill="currentColor" // WhatsApp uses filled icon more often
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>

          <a
            href="https://linkedin.com/in/elanthamilan" // Updated placeholder
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center px-3 py-2 text-xs font-medium text-foreground hover:text-brand-primary focus-visible:text-brand-primary focus-visible:bg-brand-primary/10 rounded-md transition-colors" // Themed text, hover, focus
            aria-label="Connect on LinkedIn"
          >
            <svg
              className="w-5 h-5 mb-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default MobileNav; 