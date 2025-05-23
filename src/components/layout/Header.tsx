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
      className={`sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-brand-light-gray-accent transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link 
          to="/" 
          className="text-xl font-heading font-bold text-primary tracking-tight hover:text-primary/90 transition-colors" 
          aria-label="Home"
        >
          Elan
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6" aria-label="Main navigation">
          <Button
            variant="default" 
            className="shadow-md text-base font-medium py-3 px-6 rounded-lg flex items-center gap-2" 
            asChild
          >
            <a href="/Elanthamilan_UX_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="h-5 w-5" aria-hidden="true" />
              Download Resume
            </a>
          </Button>
          <Button
            variant="link"
            asChild
            className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2"
          >
            <a href="mailto:elanthamilan12@gmail.com" aria-label="Send Email">
              <Mail size={16} className="flex-shrink-0" />
              Email
            </a>
          </Button>
        </nav>
        {/* Mobile Navigation - Updated */}
        <div className="md:hidden flex items-center space-x-3"> {/* Increased space-x to 3 */}
          <Button
            variant="default"
            size="sm" 
            asChild
            className="flex items-center gap-1.5" // Added gap for icon and text
          >
            <a href="/Elanthamilan_UX_Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download Resume">
              <Download className="h-4 w-4" /> {/* Adjusted icon size */}
              Resume
            </a>
          </Button>
          <Button
            variant="outline" 
            size="sm" 
            asChild
            className="flex items-center gap-1.5" // Added gap for icon and text
          >
            <a href="mailto:elanthamilan12@gmail.com" aria-label="Send Email">
              <Mail className="h-4 w-4" /> {/* Adjusted icon size */}
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
