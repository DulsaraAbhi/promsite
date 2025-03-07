"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface TeamMemberProps {
  name: string;
  role: string;
  subRole?: string;
  image: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
  delay?: number;
}

export function TeamMemberCard({
  name,
  role,
  subRole,
  image,
  social = {},
  delay = 0,
}: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative group h-[400px] rounded-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
      </div>

      {/* Purple glow effect on hover */}
      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-xl"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        {/* Social icons - appear on hover */}
        <motion.div 
          className="flex justify-end space-x-3 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
          transition={{ duration: 0.3 }}
        >
          {social.instagram && (
            <Link 
              href={social.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-primary/80 p-2 rounded-full backdrop-blur-sm transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
            </Link>
          )}
          {social.github && (
            <Link 
              href={social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-primary/80 p-2 rounded-full backdrop-blur-sm transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </Link>
          )}
          {social.linkedin && (
            <Link 
              href={social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-primary/80 p-2 rounded-full backdrop-blur-sm transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
            </Link>
          )}
          {social.twitter && (
            <Link 
              href={social.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-primary/80 p-2 rounded-full backdrop-blur-sm transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>
          )}
        </motion.div>

        {/* Member info - slides up on hover */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -20 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative line */}
          <div className="w-10 h-1 bg-primary mb-3 rounded-full"></div>
          
          <h3 className="text-xl font-bold mb-1">{name}</h3>
          <p className="text-primary font-medium">{role}</p>
          {subRole && <p className="text-white/70 text-sm">{subRole}</p>}
          
          {/* Bio - only visible on hover */}
          <motion.p 
            className="text-white/80 text-sm mt-3 line-clamp-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              height: isHovered ? "auto" : 0
            }}
            transition={{ duration: 0.3 }}
          >
            Passionate about creating innovative solutions that improve people's lives through technology.
          </motion.p>
        </motion.div>
      </div>
      
      {/* Shine effect on hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
        animate={{ 
          translateX: isHovered ? ["100%", "-100%"] : "-100%" 
        }}
        transition={{ 
          duration: 1,
          ease: "easeInOut",
          repeat: isHovered ? Infinity : 0,
          repeatDelay: 0.5
        }}
      />
    </motion.div>
  );
} 