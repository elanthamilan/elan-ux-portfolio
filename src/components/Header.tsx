import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button.tsx";
import { Menu, X, Mail } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-brand-light-gray-accent">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:top-2 focus:left-2 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:border-ring focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="text-xl font-heading font-semibold text-foreground">
          ✨ Elan ✨
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Button className="bg-primary text-primary-foreground hover:bg-gray-800 px-4 py-2 text-sm" asChild>
            <a href="/resume" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
          <a 
            href="mailto:elanthamilan12@gmail.com" 
            className="text-sm font-medium text-foreground hover:text-brand-link-text transition-colors flex items-center"
          >
            <Mail size={16} className="mr-1.5" />
            Email
          </a>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-end items-center space-x-4">
          <Button className="bg-primary text-primary-foreground hover:bg-gray-800 px-3 py-1.5 text-xs" asChild>
            <a href="/resume" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-gray-800 px-3 py-1.5 text-xs" asChild>
            <a 
              href="mailto:elanthamilan12@gmail.com" 
              className="text-primary-foreground flex items-center"
              aria-label="Contact via Email"
            >
              <Mail size={16} className="mr-1.5" />
              Email
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
