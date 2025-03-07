"use client";

import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export function Card({ title, description, icon, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="p-6 bg-card text-card-foreground shadow-lg rounded-lg border border-border"
    >
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
} 