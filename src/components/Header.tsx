
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
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="text-xl font-bold text-gray-800">
          Elan
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
            <a href="/Elanthamilan_UX_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
          <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50" asChild>
            <a href="mailto:elanthamilan12@gmail.com">
              <Mail size={16} className="mr-2" />
              Email
            </a>
          </Button>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-end items-center space-x-4">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
            <a href="/Elanthamilan_UX_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
          <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50" asChild aria-label="Contact via Email">
            <a href="mailto:elanthamilan12@gmail.com">
              <Mail size={16} className="mr-2" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
