import React, { useEffect, useRef } from 'react'; // Added useRef
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { X, Home, Briefcase, Mail, Download, ExternalLink, MessageSquare } from 'lucide-react';
import { usePrefersReducedMotion } from '@/components/hooks/usePrefersReducedMotion';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/case-study/campus-hiring", label: "Campus Hiring Case Study", icon: Briefcase },
  { href: "/case-study/student-planner", label: "Student Planner Case Study", icon: Briefcase },
  { href: "/Elanthamilan_UX_Resume.pdf", label: "Download Resume", icon: Download, isExternal: true },
  { href: "mailto:elanthamilan12@gmail.com", label: "Email", icon: Mail, isExternal: true }
];

const MobileNav = React.memo<MobileNavProps>(({ isOpen, onClose }) => {
  const location = useLocation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const navRef = useRef<HTMLElement>(null); // Ref for the nav container



  useEffect(() => {
    // Close menu on route change
    if (isOpen) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Focus Trapping Logic
  useEffect(() => {
    if (isOpen && navRef.current) {
      const focusableElements = navRef.current.querySelectorAll<HTMLElement>(
        'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      // Initially focus the first element in the nav, or the nav itself if no focusable children
      firstElement?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) { // Shift + Tab
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else { // Tab
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      };

      const currentNavRef = navRef.current;
      currentNavRef.addEventListener('keydown', handleKeyDown);

      return () => {
        currentNavRef.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);


  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: prefersReducedMotion ? 0 : 0.3 } },
  };

  const navVariants = {
    hidden: {
      opacity: 0, // Always start with opacity 0 for fade-in effect
      x: prefersReducedMotion ? 0 : "-100%"
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: prefersReducedMotion
        ? { duration: 0.1, ease: "easeInOut" } // Quick fade for reduced motion
        : { type: "spring", stiffness: 300, damping: 30, duration: 0.4 } // Original spring
    },
    // Exit animation will also respect these by reversing 'visible' to 'hidden'
    // If x is 0 in hidden for reduced motion, it will fade out in place.
  };

  // This component no longer uses GSAP directly, so useGSAP hook and related useEffect are removed.

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-nav-overlay"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-md md:hidden"
          onClick={onClose} // Close on overlay click
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <motion.nav
            ref={navRef} // Attach ref here
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navVariants}
            className="fixed top-0 left-0 h-full w-4/5 max-w-xs bg-background shadow-xl flex flex-col"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside nav
            aria-labelledby="mobile-nav-title" // Assuming a title is present or can be added
          >
            {/* Optional: Add a visually hidden title for aria-labelledby if no visible title exists */}
            <h2 id="mobile-nav-title" className="sr-only">Mobile Navigation Menu</h2>

            <div className="flex justify-between items-center p-4 border-b border-slate-200">
              <Link
                to="/"
                className="text-xl font-heading font-bold text-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                onClick={onClose}
              >
                Elan
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="text-brand-primary hover:text-brand-secondary hover:bg-brand-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-1 focus-visible:ring-offset-background rounded-md"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex flex-col p-4 space-y-2 overflow-y-auto flex-grow">
              {navItems.map((item) => (
                item.isExternal ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center py-3 px-3 text-md font-medium text-foreground hover:bg-brand-primary/10 hover:text-brand-primary rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-1 focus-visible:ring-offset-background"
                    onClick={onClose}
                  >
                    <item.icon className="mr-3 h-5 w-5 text-brand-secondary" />
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="flex items-center py-3 px-3 text-md font-medium text-foreground hover:bg-brand-primary/10 hover:text-brand-primary rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-1 focus-visible:ring-offset-background"
                    onClick={onClose}
                  >
                    <item.icon className="mr-3 h-5 w-5 text-brand-secondary" />
                    {item.label}
                  </Link>
                )
              ))}
            </div>
            {/* New Section for Explicit Contact Info */}
            <div className="p-4 mt-auto border-t border-slate-200">
              <h3 className="text-sm font-medium text-foreground/70 mb-3">Contact Information</h3>
              <div className="space-y-2 mb-4">
                <div>
                  <span className="text-xs text-foreground/70">Email:</span>
                  <p className="text-sm font-medium text-foreground">elanthamilan12@gmail.com</p>
                </div>
                <div>
                  <span className="text-xs text-foreground/70">Mobile:</span>
                  <p className="text-sm font-medium text-foreground">+918148622302</p>
                </div>
              </div>
              <div className="flex gap-3">
                <a href="https://wa.me/918148622302" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-2 border border-brand-primary text-brand-primary rounded-lg py-3 px-4 hover:bg-brand-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary transition-all w-full min-h-[52px] text-base font-medium justify-center">
                  <MessageSquare className="w-5 h-5" />
                  WhatsApp
                </a>
                <a href="https://linkedin.com/in/elanthamilan" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-2 border border-brand-primary text-brand-primary rounded-lg py-3 px-4 hover:bg-brand-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary transition-all w-full min-h-[52px] text-base font-medium justify-center">
                  <ExternalLink className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
});
MobileNav.displayName = "MobileNav"; // Optional: for better debugging

export default MobileNav;