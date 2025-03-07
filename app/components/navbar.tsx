"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./button";
import { GradientText } from "./gradient-text";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-card/90 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="center-content">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.jpeg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full mr-3"
            />
            <span className="text-xl font-bold">
              <GradientText animate={false}>LunaRest</GradientText>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              How It Works
            </a>
            <a 
              href="#team" 
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Team
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Contact
            </a>
            <div className="flex items-center space-x-4 ml-4">
              <ThemeToggle />
              <Button size="sm">Get Started</Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-card/95 backdrop-blur-md"
          >
            <div className="px-4 py-4 space-y-4">
              <a 
                href="#features" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#team" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Team
              </a>
              <a 
                href="#testimonials" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4 flex justify-between items-center">
                <ThemeToggle />
                <Button size="sm">Get Started</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 