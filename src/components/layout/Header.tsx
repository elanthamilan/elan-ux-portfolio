import React, { useState, useEffect, useCallback, useRef } from "react"; // Added useRef
import { Link } from "react-router-dom";
import { Mail, Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNav from "../MobileNav";

const Header = React.memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null); // Ref for the menu trigger button

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Restore focus when menu closes
      menuTriggerRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = ''; // Cleanup on component unmount
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-slate-200 transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : 'shadow-none'
        }`}
        role="banner"
      >
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-2xl font-heading font-bold text-brand-primary hover:text-brand-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm transition-colors"
            aria-label="Elan, Back to Homepage"
            onClick={() => isMobileMenuOpen && toggleMobileMenu()} // Close menu on site navigation
          >
            Elan
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4" aria-label="Main navigation">
            <Button
              variant="default"
              asChild
            >
              <a href="/Elanthamilan_UX_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                Download Resume
              </a>
            </Button>

          </nav>
          {/* Mobile Navigation Trigger (Hamburger Menu) */}
          <div className="md:hidden">
            <Button
              ref={menuTriggerRef} // Assign ref to the button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-overlay"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="text-foreground hover:text-brand-primary hover:bg-brand-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-1 rounded-md"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>
      {/* Conditionally rendered MobileNav overlay */}
      <MobileNav isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </>
  );
}); // Closing React.memo
Header.displayName = "Header"; // Optional: for better debugging names

export default Header;
