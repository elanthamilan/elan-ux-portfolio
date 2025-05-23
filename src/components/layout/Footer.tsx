import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Github, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/elanthamilan",
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn Profile"
    },
    {
      name: "GitHub",
      href: "https://github.com/elanthamilan",
      icon: <Github className="w-5 h-5" />,
      label: "GitHub Profile"
    },
    {
      name: "Twitter",
      href: "https://twitter.com/elanthamilan",
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter Profile"
    },
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
    <footer className="bg-background border-t border-gray-200 dark:border-gray-700 text-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center mb-8 text-center md:text-left">
          <div className="space-y-4">
            <Link 
              to="/" 
              aria-current="page" 
              className="text-2xl font-heading font-bold text-primary tracking-tight hover:text-primary/90 transition-colors inline-flex items-center gap-2"
            >
              Elan
              <span className="material-symbols-outlined text-tertiary" aria-hidden="true">auto_awesome</span>
            </Link>
            <p className="text-foreground/90">Enterprise UX Designer specializing in SaaS, EdTech, and HR Tech</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-self-end">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full p-2 text-foreground/90 hover:text-primary hover:bg-primary/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                aria-label={link.label}
              >
                {link.icon}
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="text-center text-foreground/90 text-sm pt-6 border-t border-gray-200 dark:border-gray-700">
          <p>© {currentYear} Elan Thamilan. All rights reserved.</p>
          <p className="mt-2">
            Built with <span className="material-symbols-outlined text-primary align-middle" aria-hidden="true">favorite</span> using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
