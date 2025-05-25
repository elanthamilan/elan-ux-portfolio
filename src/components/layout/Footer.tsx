import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone, MessageSquare } from "lucide-react";
import AnimatedFooterAccent from "../ui/AnimatedFooterAccent";

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
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/918148622302",
      icon: <MessageSquare className="w-5 h-5" />,
      label: "WhatsApp"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/elanthamilan",
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn Profile"
    }
  ];

  return (
    <footer className="bg-accent-off-white/50 border-t border-slate-200 dark:border-slate-700 text-foreground mt-16" role="contentinfo">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="flex flex-col items-center text-center space-y-6 mb-8">
          <div className="space-y-3">
            <Link
              to="/"
              aria-current="page"
              className="text-2xl font-heading font-bold text-brand-primary hover:text-brand-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm transition-colors inline-flex items-center gap-2"
            >
              Elan
              <span className="material-symbols-outlined text-brand-tertiary" aria-hidden="true">auto_awesome</span>
            </Link>
            <p className="text-foreground text-sm sm:text-base max-w-md">Enterprise UX Designer specializing in SaaS, EdTech, and HR Tech</p>
          </div>
          <nav className="flex flex-wrap gap-3 justify-center" aria-label="Social media links">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full p-2.5 text-foreground hover:text-brand-primary hover:bg-brand-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-1 transition-all duration-200"
                aria-label={link.label}
              >
                {React.cloneElement(link.icon, { className: "w-5 h-5 group-hover:scale-110 transition-transform" })}
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </nav>
        </div>
        <div className="text-center text-foreground text-sm pt-8 border-t border-slate-200 dark:border-slate-700">
          <p>&copy; {currentYear} Elan Thamilan. All rights reserved.</p>
          <div className="mt-6 flex justify-center">
            <AnimatedFooterAccent />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
