import React, { useEffect } from 'react'; // Removed useRef as GSAP animation is removed
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom'; // Added useLocation
import { Button } from '@/components/ui/button'; // For close button
import { X, Home, FileText, Briefcase, Mail, Download, ExternalLink, MessageSquare, Github, Sun, Moon } from 'lucide-react'; // Added icons

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

  // Theme toggle functionality
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

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
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                  className="text-foreground hover:text-brand-primary hover:bg-brand-primary/10"
                >
                  {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
                <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close navigation menu">
                  <X className="h-6 w-6 text-foreground" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col p-4 space-y-2 overflow-y-auto flex-grow">
              {navItems.map((item) => (
                item.isExternal ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center py-3 px-3 text-md font-medium text-foreground hover:bg-accent-bg hover:text-brand-primary rounded-md transition-colors"
                    onClick={onClose}
                  >
                    <item.icon className="mr-3 h-5 w-5 text-brand-secondary" />
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="flex items-center py-3 px-3 text-md font-medium text-foreground hover:bg-accent-bg hover:text-brand-primary rounded-md transition-colors"
                    onClick={onClose}
                  >
                    <item.icon className="mr-3 h-5 w-5 text-brand-secondary" />
                    {item.label}
                  </Link>
                )
              ))}
            </div>
            {/* New Section for Explicit Contact Info */}
            <div className="p-4 mt-auto border-t border-slate-200 dark:border-slate-700">
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