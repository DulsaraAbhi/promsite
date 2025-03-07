"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import { GradientText } from "./gradient-text";
import { useRef, useEffect } from "react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const spotlight = spotlightRef.current;
    
    if (!container || !spotlight) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      spotlight.style.left = `${x}px`;
      spotlight.style.top = `${y}px`;
    };
    
    container.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(138,92,246,0.15),transparent_50%)]"></div>
        
        {/* Animated circles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/5"
              initial={{
                x: Math.random() * 100 - 50 + "%",
                y: Math.random() * 100 - 50 + "%",
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: [
                  Math.random() * 100 - 50 + "%",
                  Math.random() * 100 - 50 + "%",
                  Math.random() * 100 - 50 + "%",
                ],
                y: [
                  Math.random() * 100 - 50 + "%",
                  Math.random() * 100 - 50 + "%",
                  Math.random() * 100 - 50 + "%",
                ],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                width: (Math.random() * 300 + 100) + "px",
                height: (Math.random() * 300 + 100) + "px",
                opacity: Math.random() * 0.3 + 0.1,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Spotlight effect */}
      <div 
        ref={spotlightRef}
        className="spotlight"
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary mx-auto animate-float"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />
            <path d="M20 3v4" />
            <path d="M22 5h-4" />
          </svg>
        </motion.div>
        
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Better Sleep for <GradientText className="animate-glow">Better Grades</GradientText>
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A comprehensive sleep quality management platform designed
          specifically for university students. Improve your academic
          performance through better sleep habits.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button size="lg" className="bg-purple-gradient hover:opacity-90">
            Start Your Sleep Journey
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary">
            Learn More
          </Button>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1, duration: 1 },
            y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
          }}
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
            className="text-primary"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
} 