
import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-brand-light-gray-accent text-foreground"> {/* Updated border color */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center mb-8">
          <div>
            <Link to="/" className="text-xl font-bold text-foreground">
              Elan
            </Link>
            <p className="mt-2 text-foreground/80">Enterprise UX Designer</p> {/* Adjusted text color */}
          </div>
          
          <div className="flex space-x-6 md:justify-self-end">
            <a 
              href="https://linkedin.com/in/elanthamilan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors" /* Adjusted text color */
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:elanthamilan12@gmail.com" 
              className="text-foreground/60 hover:text-foreground transition-colors" /* Adjusted text color */
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:+918148622302" 
              className="text-foreground/60 hover:text-foreground transition-colors" /* Adjusted text color */
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-brand-light-gray-accent pt-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center"> {/* Updated border color */}
          <p className="text-foreground/60 text-sm"> {/* Adjusted text color */}
            © {currentYear} Elanthamilan. All rights reserved.
          </p>
          
          <div className="flex space-x-6 md:justify-self-end">
            <Link to="/" className="text-sm text-foreground/80 hover:text-foreground transition-colors"> {/* Adjusted text color */}
              Work
            </Link>
            <Link to="/about" className="text-sm text-foreground/80 hover:text-foreground transition-colors"> {/* Adjusted text color */}
              About
            </Link>
            <Link to="/contact" className="text-sm text-foreground/80 hover:text-foreground transition-colors"> {/* Adjusted text color */}
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
