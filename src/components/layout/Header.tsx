import React from "react";
import { Link } from "react-router-dom";
// Removed duplicate React import
import { Mail, Download } from "lucide-react"; // Removed Menu, X
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  // Removed isMobileMenuOpen state and toggleMobileMenu function
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed useEffect for handleClickOutside

  return (
    <header 
      className={`sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-none' // Updated shadow and added shadow-none for non-scrolled
      }`}
      role="banner" // Added ARIA role
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link 
          to="/" 
          className="text-2xl font-heading font-bold text-brand-primary hover:text-brand-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm transition-colors" 
          aria-label="Elan, Back to Homepage"
        >
          Elan
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4" aria-label="Main navigation"> {/* Reduced space-x slightly */}
          <Button
            variant="default" 
            className="shadow-lg hover:shadow-xl transition-shadow text-base font-medium py-2.5 px-5 rounded-lg flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2" 
            asChild
          >
            <a href="/Elanthamilan_UX_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" /> {/* Slightly smaller icon */}
              Download Resume
            </a>
          </Button>
          <Button
            variant="ghost" // Changed to ghost for a less prominent look, using brand colors for interaction
            asChild
            className="text-sm font-medium text-foreground hover:text-brand-primary hover:bg-brand-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-1 rounded-md transition-colors flex items-center gap-1.5"
          >
            <a href="mailto:elanthamilan12@gmail.com" aria-label="Send Email">
              <Mail size={16} className="flex-shrink-0 h-4 w-4 sm:h-5 sm:w-5" /> {/* Slightly smaller icon */}
              Email
            </a>
          </Button>
        </nav>
        {/* Mobile Navigation - Updated */}
        <div className="md:hidden flex items-center space-x-2"> {/* Reduced space-x slightly */}
          <Button
            variant="default" // Main CTA, keep default
            size="sm" 
            asChild
            className="flex items-center gap-1.5 shadow-md hover:shadow-lg transition-shadow bg-brand-primary hover:bg-brand-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2" 
          >
            <a href="/Elanthamilan_UX_Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download Resume">
              <Download className="h-4 w-4" /> 
              Resume
            </a>
          </Button>
          <Button
            variant="ghost" // Secondary action, use ghost
            size="icon"  // Changed to icon for a more compact mobile view
            asChild
            className="text-foreground hover:text-brand-primary hover:bg-brand-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-1 rounded-md"
          >
            <a href="mailto:elanthamilan12@gmail.com" aria-label="Send Email">
              <Mail className="h-5 w-5" /> {/* Slightly larger icon for icon-only button */}
              Email
            </a>
          </Button>
        </div>
        {/* Mobile Menu Overlay - Removed */}
      </div>
    </header>
  );
};

export default Header;
