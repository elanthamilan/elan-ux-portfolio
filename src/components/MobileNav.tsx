import React, { useEffect } from 'react'; // Removed useRef as GSAP animation is removed
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom'; // Added useLocation
import { useTheme } from "next-themes";
import { Button } from './ui/button';
import { X, Home, Briefcase, Mail, Download, Linkedin, MessageSquare, Phone, Sun, Moon } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/case-study/campus-hiring", label: "Campus Hiring Case Study", icon: Briefcase },
  { href: "/case-study/student-planner", label: "Student Planner Case Study", icon: Briefcase },
  // Removed Download Resume from navItems
];

const MobileNav = React.memo<MobileNavProps>(({ isOpen, onClose }) => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Close menu on route change
    if (isOpen) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]); // Only re-run if pathname changes while open

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const navVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30, duration: 0.4 } },
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
          className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm md:hidden"
          onClick={onClose} // Close on overlay click
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navVariants}
            className="fixed top-0 left-0 h-full w-4/5 max-w-xs bg-background shadow-xl flex flex-col"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside nav
          >
            <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700">
              <Link
                to="/"
                className="text-xl font-heading font-bold text-brand-primary"
                onClick={onClose}
              >
                Elan
              </Link>
              <div className="flex items-center gap-2">
                {/* Theme toggle button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  aria-label="Toggle theme"
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
                <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close navigation menu">
                  <X className="h-6 w-6 text-foreground" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col p-4 space-y-2 overflow-y-auto flex-grow">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center py-3 px-3 text-md font-medium text-foreground hover:bg-accent-bg hover:text-brand-primary rounded-md transition-colors w-full"
                  onClick={onClose}
                >
                  <item.icon className="mr-3 h-5 w-5 text-brand-secondary" />
                  {item.label}
                </Link>
              ))}
            </div>
            {/* New Section for Explicit Contact Info + Download Resume */}
            <div className="p-4 mt-auto border-t border-slate-200 dark:border-slate-700">
              <h3 className="text-sm font-medium text-foreground/70 mb-2">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <a href="mailto:elanthamilan12@gmail.com" className="flex flex-row items-center gap-2 border border-brand-primary text-brand-primary rounded-lg py-3 px-4 hover:bg-brand-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary transition-all w-full min-h-[52px] text-base font-medium justify-center">
                  <Mail className="w-5 h-5" />
                  elanthamilan12@gmail.com
                </a>
                <a href="tel:+918148622302" className="flex flex-row items-center gap-2 border border-brand-primary text-brand-primary rounded-lg py-3 px-4 hover:bg-brand-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary transition-all w-full min-h-[52px] text-base font-medium justify-center">
                  <Phone className="w-5 h-5" />
                  +918148622302
                </a>
                <a href="https://wa.me/918148622302" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-2 border border-brand-primary text-brand-primary rounded-lg py-3 px-4 hover:bg-brand-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary transition-all w-full min-h-[52px] text-base font-medium justify-center">
                  <MessageSquare className="w-5 h-5" />
                  WhatsApp
                </a>
                <a href="https://linkedin.com/in/elanthamilan" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-2 border border-brand-primary text-brand-primary rounded-lg py-3 px-4 hover:bg-brand-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary transition-all w-full min-h-[52px] text-base font-medium justify-center">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                {/* Download Resume button, styled as a primary button */}
                <a href="/Elanthamilan_UX_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-2 bg-brand-primary text-white border border-brand-primary rounded-lg py-3 px-4 hover:bg-brand-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary transition-all w-full min-h-[52px] text-base font-medium justify-center">
                  <Download className="w-5 h-5" />
                  Download Resume
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
