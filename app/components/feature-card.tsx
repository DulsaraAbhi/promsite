"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
  isActive?: boolean;
}

export function FeatureCard({
  title,
  description,
  icon,
  delay = 0,
  isActive = false,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className={`feature-card relative h-full p-6 rounded-lg border ${
        isActive
          ? "bg-purple-dark/10 border-primary"
          : "bg-card border-border"
      } transition-all duration-300 backdrop-blur-sm overflow-hidden`}
    >
      <div className="feature-spotlight" />
      <div className="flex flex-col h-full relative z-10">
        <div className="mb-4 text-primary text-2xl">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground flex-grow">{description}</p>
        {isActive && (
          <div className="mt-4 flex items-center text-sm text-primary">
            <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse-slow"></span>
            Active Feature
          </div>
        )}
      </div>
    </motion.div>
  );
} 