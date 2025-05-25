import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Menu, Sun, Moon, Download, Mail } from "lucide-react";
import MobileNav from "../MobileNav";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <>
      <header className="bg-background border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link
              to="/"
              className="text-2xl font-heading font-bold text-brand-primary hover:text-brand-secondary transition-colors"
            >
              Elan
              <span className="material-symbols-outlined text-brand-tertiary ml-1" aria-hidden="true">
                auto_awesome
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-4">
              {/* Download Resume Button */}
              <Button
                variant="outline"
                size="sm"
                asChild
                className="flex items-center gap-2"
              >
                <a
                  href="/Elanthamilan_UX_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Resume"
                >
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </Button>

              {/* Work with me Button */}
              <Button
                variant="default"
                size="sm"
                asChild
                className="flex items-center gap-2"
              >
                <a
                  href="mailto:elanthamilan12@gmail.com"
                  aria-label="Work with me - Send Email"
                >
                  <Mail className="h-4 w-4" />
                  Work with me
                </a>
              </Button>

              {/* Theme toggle button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileNavOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6 text-foreground" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  );
};

export default Header;
