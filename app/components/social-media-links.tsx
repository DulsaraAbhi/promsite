"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface SocialMediaProps {
  className?: string;
  iconSize?: number;
  variant?: "default" | "footer" | "contact";
}

export function SocialMediaLinks({
  className = "",
  iconSize = 24,
  variant = "default",
}: SocialMediaProps) {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/lunarestapp",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://www.instagram.com/luna_.rest/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/luna-rest-821381340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: "Gmail",
      url: "lunaRest2024@gmail.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
  ];

  const getContainerClasses = () => {
    switch (variant) {
      case "footer":
        return "flex space-x-4 mt-4";
      case "contact":
        return "flex space-x-6 justify-center";
      default:
        return "flex space-x-4";
    }
  };

  const getLinkClasses = () => {
    switch (variant) {
      case "footer":
        return "text-muted-foreground hover:text-primary transition-colors duration-300";
      case "contact":
        return "bg-card hover:bg-primary/10 text-foreground hover:text-primary p-3 rounded-full transition-colors duration-300";
      default:
        return "text-foreground hover:text-primary transition-colors duration-300";
    }
  };

  return (
    <div className={`${getContainerClasses()} ${className}`}>
      {socialLinks.map((social, index) => (
        <motion.div
          key={social.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Link
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={getLinkClasses()}
            aria-label={social.name}
          >
            {social.icon}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
