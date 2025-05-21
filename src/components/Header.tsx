import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header role="banner" className="sticky top-0 z-50 bg-background border-b border-brand-light-gray-accent">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="text-xl font-heading font-semibold text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
          ✨ Elan ✨
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6"> {/* Increased spacing a bit */}
          {/* Restoring asChild */}
          <Button className="bg-primary text-primary-foreground hover:bg-gray-800 px-4 py-2 text-sm" asChild> 
            <a href="/Elanthamilan_UX_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
          <a 
            href="mailto:elanthamilan12@gmail.com" 
            className="text-sm font-medium text-foreground hover:text-brand-link-text transition-colors flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            <Mail size={16} className="mr-1.5" /> {/* Slightly adjusted margin */}
            Email
          </a>
        </nav>
        
        {/* Mobile Navigation */}
        {/* Intercom mobile is usually just a hamburger. For now, styling existing elements. */}
        <div className="md:hidden flex justify-end items-center space-x-3 sm:space-x-4"> {/* Adjusted space for smaller screens */}
          {/* Restoring asChild */}
          <Button className="bg-primary text-primary-foreground hover:bg-gray-800 px-3 sm:px-4 py-2 text-xs sm:text-sm" asChild> 
            <a href="/Elanthamilan_UX_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
          <a 
            href="mailto:elanthamilan12@gmail.com" 
            className="text-foreground hover:text-brand-link-text p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full" /* Added padding for easier touch and focus ring */
            aria-label="Contact via Email"
          >
            <Mail size={20} /> {/* Icon size can be adjusted */}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
