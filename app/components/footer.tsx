"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GradientText } from "./gradient-text";
import { SocialMediaLinks } from "./social-media-links";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Pricing", href: "#pricing" },
        { name: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Team", href: "#team" },
        { name: "Careers", href: "#careers" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#blog" },
        { name: "Research", href: "#research" },
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
      ],
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="center-content py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and social links */}
          <div className="lg:col-span-2">
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
            
            <p className="mt-4 text-muted-foreground max-w-md">
              A comprehensive sleep quality management platform designed specifically for university students. Improve your academic performance through better sleep habits.
            </p>
            
            <SocialMediaLinks variant="footer" className="mt-6" />
          </div>
          
          {/* Footer links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-foreground mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} LunaRest. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link 
              href="#privacy" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="#terms" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link 
              href="#cookies" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
      
      {/* Gradient border at the bottom */}
      <div className="h-1 bg-purple-gradient" />
    </footer>
  );
} 