import React from "react";
import { Link } from "react-router-dom";
import { Menu, X, Mail, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('header')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

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
            className="bg-[#156152] text-white hover:bg-[#156152]/90 transition-colors shadow-md text-base font-medium py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#156152] focus:ring-offset-2 flex items-center gap-2"
            asChild
          >
            <a href="/Elanthamilan_UX_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="h-5 w-5" aria-hidden="true" />
              Download Resume
            </a>
          </Button>
          <a
            href="mailto:elanthamilan12@gmail.com"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2"
            aria-label="Send Email"
          >
            <Mail size={16} className="flex-shrink-0" />
            Email
          </a>
        </nav>
        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            className="p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Menu Overlay */}
        <div 
          id="mobile-menu"
          className={`md:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-sm border-b border-brand-light-gray-accent shadow-lg py-4 z-40 transition-all duration-300 ${
            isMobileMenuOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col items-center space-y-4" aria-label="Mobile navigation">
            <Button
              className="bg-[#156152] text-white hover:bg-[#156152]/90 transition-colors shadow-md text-base font-medium py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#156152] focus:ring-offset-2 flex items-center justify-center gap-2"
              asChild
            >
              <a href="/Elanthamilan_UX_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5" aria-hidden="true" />
                Download Resume
              </a>
            </Button>
            <a
              href="mailto:elanthamilan12@gmail.com"
              className="w-full text-center text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center justify-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Send Email"
            >
              <Mail size={16} className="flex-shrink-0" />
              Email
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
