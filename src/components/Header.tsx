import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail } from "lucide-react";
import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-brand-light-gray-accent">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="text-xl font-heading font-semibold text-primary">
          Elan
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Button className="bg-primary text-primary-foreground hover:bg-gray-800 px-4 py-2 text-sm" asChild>
            <a href="/Elanthamilan_UX_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
          <a
            href="mailto:elanthamilan12@gmail.com"
            className="text-sm font-medium text-foreground hover:text-brand-link-text transition-colors flex items-center"
          >
            <Mail size={16} className="mr-1.5" />
            Email
          </a>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu size={24} className="text-foreground" />
          </SheetTrigger>
          <SheetContent side="right" className="sm:w-64">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Navigate through the site.
              </SheetDescription>
            </SheetHeader>
            <nav className="grid gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-gray-800" asChild>
                <a href="/Elanthamilan_UX_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
              <a
                href="mailto:elanthamilan12@gmail.com"
                className="text-sm font-medium text-foreground hover:text-brand-link-text transition-colors flex items-center"
              >
                <Mail size={16} className="mr-1.5" />
                Email
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
