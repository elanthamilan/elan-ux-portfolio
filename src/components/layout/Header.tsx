import React from "react";
import { Link } from "react-router-dom";
import { Menu, X, Mail } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-brand-light-gray-accent">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="text-xl font-heading font-semibold text-primary" aria-label="Home">
          Elan
        </Link>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center space-x-4">
          <a
            href="/Elanthamilan_UX_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground hover:bg-gray-800 px-4 py-2 text-sm rounded"
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
          >
            Download Resume
          </a>
          <a
            href="mailto:elanthamilan12@gmail.com"
            className="text-sm font-medium text-foreground hover:text-brand-link-text transition-colors flex items-center"
            aria-label="Send Email"
          >
            <Mail size={16} className="mr-1.5 flex-shrink-0" />
            <span className="hidden sm:inline">Email</span> {/* Show text on slightly larger mobile */}
          </a>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-brand-light-gray-accent shadow-lg py-4 z-40">
            <nav className="flex flex-col items-center space-y-4">
              <a
                href="/Elanthamilan_UX_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-primary text-primary-foreground hover:bg-gray-800 px-4 py-2 text-sm rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download Resume
              </a>
              {/* Add other mobile navigation links here if needed */}
              {/* Example: <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link> */}
            </nav>
          </div>
        )}


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="mailto:elanthamilan12@gmail.com"
            className="text-sm font-medium text-foreground hover:text-brand-link-text transition-colors flex items-center"
            aria-label="Send Email"
          >
            <Mail size={16} className="mr-1.5 flex-shrink-0" />
          Email
        </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
