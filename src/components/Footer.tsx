
import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Elan
            </Link>
            <p className="mt-2 text-gray-600">Enterprise UX Designer</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://linkedin.com/in/elanthamilan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-purple-600 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:elanthamilan12@gmail.com" 
              className="text-gray-500 hover:text-purple-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:+918148622302" 
              className="text-gray-500 hover:text-purple-600 transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Elanthamilan. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <Link to="/" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">
              Work
            </Link>
            <Link to="/about" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
