
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="text-xl font-bold text-gray-800">
          Elan
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm"
          >
            Work
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm"
          >
            Contact
          </Link>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
            <a href="/resume.pdf" download>
              Resume
            </a>
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-gray-700 p-2"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 px-4 py-6">
          <nav className="flex flex-col space-y-6">
            <Link
              to="/"
              className="text-gray-800 hover:text-purple-600 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-purple-600 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-purple-600 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full" asChild>
              <a href="/resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
