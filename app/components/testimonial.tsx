"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  imageSrc: string;
  delay?: number;
}

export function Testimonial({
  quote,
  author,
  role,
  imageSrc,
  delay = 0,
}: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-card p-6 rounded-lg shadow-lg border border-border"
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative w-16 h-16 mb-4 overflow-hidden rounded-full border-2 border-primary">
          <Image
            src={imageSrc}
            alt={author}
            fill
            className="object-cover"
          />
        </div>
        <p className="text-card-foreground mb-4 italic">"{quote}"</p>
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </motion.div>
  );
} 