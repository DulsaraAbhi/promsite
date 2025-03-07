"use client";

import { motion } from "framer-motion";

interface StatProps {
  value: string;
  label: string;
  delay?: number;
}

function Stat({ value, label, delay = 0 }: StatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="text-center p-6"
    >
      <motion.div
        initial={{ scale: 0.5 }}
      >
        {value}
      </motion.div>
      <p>{label}</p>
    </motion.div>
  );
}

export default Stat; 