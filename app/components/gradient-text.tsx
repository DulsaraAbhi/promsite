"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  delay?: number;
}

export function GradientText({
  children,
  className = "",
  animate = true,
  delay = 0,
}: GradientTextProps) {
  return animate ? (
    <motion.span
      className={`text-gradient font-bold ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.span>
  ) : (
    <span className={`text-gradient font-bold ${className}`}>{children}</span>
  );
} 