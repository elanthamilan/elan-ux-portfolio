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
    <header className="sticky top-0 z-50 bg-background border-b border-brand-light-gray-accent">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="text-xl font-bold text-foreground">
          Elan
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
            className="text-sm font-medium text-foreground hover:text-brand-link-text transition-colors flex items-center"
          >
            <Mail size={16} className="mr-1.5" /> {/* Slightly adjusted margin */}
            Email
          </a>
        </nav>
        
        {/* Mobile Navigation */}
        {/* Intercom mobile is usually just a hamburger. For now, styling existing elements. */}
        <div className="md:hidden flex justify-end items-center space-x-4">
          {/* Restoring asChild */}
          <Button className="bg-primary text-primary-foreground hover:bg-gray-800 px-3 py-1.5 text-xs" asChild> 
            <a href="/Elanthamilan_UX_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
          <a 
            href="mailto:elanthamilan12@gmail.com" 
            className="text-foreground hover:text-brand-link-text"
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
