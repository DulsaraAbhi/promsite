"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureItemProps {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
}

function FeatureItem({ title, description, icon, index }: FeatureItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-start gap-4 p-4"
    >
      <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}

interface FeatureListProps {
  features: {
    title: string;
    description: string;
    icon: ReactNode;
  }[];
}

export function FeatureList({ features }: FeatureListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          index={index}
        />
      ))}
    </div>
  );
} 