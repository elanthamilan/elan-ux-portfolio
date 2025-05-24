import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Github, Twitter, Mail, Phone } from "lucide-react";
import AnimatedFooterAccent from "@/components/ui/AnimatedFooterAccent"; // Import the accent component

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:elanthamilan12@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      label: "Send Email"
    },
    {
      name: "Phone",
      href: "tel:+918148622302",
      icon: <Phone className="w-5 h-5" />,
      label: "Call Phone"
    }
  ];

  return (
    <footer className="bg-accent-off-white/50 border-t border-slate-200 dark:border-slate-700 text-foreground mt-16" role="contentinfo"> {/* Added ARIA role and themed background/border */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center mb-8 text-center md:text-left">
          <div className="space-y-3"> {/* Reduced space-y slightly */}
            <Link 
              to="/" 
              aria-current="page" 
              className="text-2xl font-heading font-bold text-brand-primary hover:text-brand-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm transition-colors inline-flex items-center gap-2"
            >
              Elan
              {/* Consider replacing material-symbols-outlined with an SVG or Lucide icon if not used elsewhere, or ensure it's loaded */}
              <span className="material-symbols-outlined text-brand-tertiary" aria-hidden="true">auto_awesome</span>
            </Link>
            <p className="text-foreground">Enterprise UX Designer specializing in SaaS, EdTech, and HR Tech</p> {/* text-foreground/90 to text-foreground */}
          </div>
          <nav className="flex flex-wrap gap-3 justify-center md:justify-self-end" aria-label="Social media links"> {/* Added ARIA label, reduced gap slightly */}
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full p-2.5 text-foreground hover:text-brand-primary hover:bg-brand-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-1 transition-all duration-200" // Adjusted padding and focus ring
                aria-label={link.label}
              >
                {React.cloneElement(link.icon, { className: "w-5 h-5 group-hover:scale-110 transition-transform" })} {/* Added hover effect to icon */}
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </nav>
        </div>
        <div className="text-center text-foreground text-sm pt-8 border-t border-slate-200 dark:border-slate-700"> {/* text-foreground/90 to text-foreground, themed border, increased pt */}
          <p>&copy; {currentYear} Elan Thamilan. All rights reserved.</p>
          <p className="mt-2 inline-flex items-center gap-1">
            Built with <span className="material-symbols-outlined text-brand-primary align-middle text-base" aria-hidden="true">favorite</span> using React, TypeScript, and Tailwind CSS
          </p>
          <div className="mt-6 flex justify-center"> {/* Container for the accent */}
            <AnimatedFooterAccent />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
