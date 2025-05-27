import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
const Footer = () => {

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:elanthamilan12@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      label: "Send Email (opens in new tab)"
    },
    {
      name: "Phone",
      href: "tel:+918148622302",
      icon: <Phone className="w-5 h-5" />,
      label: "Call Phone (opens in new tab)"
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/918148622302",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      ),
      label: "WhatsApp (opens in new tab)"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/elanthamilan/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ), // LinkedIn icon
      label: "LinkedIn Profile (opens in new tab)"
    }
  ];

  return (
    <footer className="bg-accent-off-white/50 border-t border-slate-200 text-foreground mt-8" role="contentinfo"> {/* Added ARIA role and themed background/border */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center text-center md:text-left">
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
            <p className="text-foreground">Enterprise UX Designer specializing in Complex enterprise design</p> {/* text-foreground/90 to text-foreground */}
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

      </div>
    </footer>
  );
};

export default Footer;
