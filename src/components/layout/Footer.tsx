import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => { // Keep Footer component
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center mb-8 text-center md:text-left">
          <div>
            <Link to="/" className="text-xl font-heading font-bold">
              Elan✨🤓
            </Link>
            <p className="mt-2">Enterprise UX Designer</p>
          </div>

          {/* Social Links Centered on Mobile */}
          <div className="flex space-x-6 justify-center md:justify-self-end">
            <a
              href="https://linkedin.com/in/elanthamilan"
              target="_blank"
              rel="noopener noreferrer"
              className=""
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} /><span className="sr-only">LinkedIn Profile</span>
            </a>
            <a
              href="mailto:elanthamilan12@gmail.com"
              className=""
              aria-label="Email"
            >
              <Mail size={20} /><span className="sr-only">Email</span>
            </a>
            <a
              href="tel:+918148622302"
              className=""
              aria-label="Phone"
            >
              <Phone size={20} /><span className="sr-only">Phone</span>
            </a>
          </div>
        </div>
        <div className="text-center text-sm">
          <p>© {currentYear} Elan Thamilan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
