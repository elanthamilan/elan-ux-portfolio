import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-background border-t border-brand-light-gray-accent text-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center mb-6 sm:mb-8 text-center md:text-left">
          <div>
            <Link to="/" className="text-lg sm:text-xl font-['Montserrat'] font-bold text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
              Elan
            </Link>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base text-foreground/80">Enterprise UX Designer</p>
          </div>
          
          <div className="flex space-x-5 sm:space-x-6 justify-center md:justify-self-end">
            <a 
              href="https://linkedin.com/in/elanthamilan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full"  // text-foreground/60 to text-foreground/80
              aria-label="Elanthamilan on LinkedIn" 
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:elanthamilan12@gmail.com" 
              className="text-foreground/80 hover:text-foreground transition-colors p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full"  // text-foreground/60 to text-foreground/80
              aria-label="Email Elanthamilan" 
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:+918148622302" 
              className="text-foreground/80 hover:text-foreground transition-colors p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full"  // text-foreground/60 to text-foreground/80
              aria-label="Call Elanthamilan" 
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
        <div className="text-center text-xs sm:text-sm text-foreground/80 border-t border-brand-light-gray-accent/50 pt-6 sm:pt-8"> {/* text-foreground/60 to text-foreground/80 */}
          © {currentYear} Elanthamilan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
