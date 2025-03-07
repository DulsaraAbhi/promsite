"use client";

import { motion } from "framer-motion";
import { Section } from "./section";
import { FeatureCard } from "./feature-card";
import { GradientText } from "./gradient-text";
import { useState } from "react";

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      title: "Predictions",
      description: "Advanced ML algorithms predict your sleep quality based on personal metrics and help you understand your sleep patterns.",
      icon: (
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
        >
          <path d="m2 12 5.25 5 2.625-5H8c0-3.75 3-7.5 7.5-7.5 3 0 5.25 1.5 6 4.5" />
          <path d="M22 12c-1.5 3.75-4.5 6-8.25 6-3 0-5.25-1.5-6-4.5" />
          <path d="M8 12h.75" />
        </svg>
      ),
      isActive: true,
    },
    {
      title: "Recommendation",
      description: "Get tailored advice to improve your sleep habits based on your unique patterns and academic schedule.",
      icon: (
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
        >
          <path d="M20 7h-9" />
          <path d="M14 17H5" />
          <circle cx="17" cy="17" r="3" />
          <circle cx="7" cy="7" r="3" />
        </svg>
      ),
      isActive: true,
    },
    {
      title: "Dashboard",
      description: "Visualize your sleep patterns and academic performance in an intuitive dashboard with detailed analytics.",
      icon: (
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
        >
          <rect width="7" height="9" x="3" y="3" rx="1" />
          <rect width="7" height="5" x="14" y="3" rx="1" />
          <rect width="7" height="9" x="14" y="12" rx="1" />
          <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
      ),
      isActive: false,
    },
    {
      title: "Goal Tracker",
      description: "Set and track your sleep goals to continuously improve your sleep quality and academic performance.",
      icon: (
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
        >
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      isActive: false,
    },
    {
      title: "Journal",
      description: "Keep track of your sleep experiences and factors affecting your sleep quality with our digital sleep journal.",
      icon: (
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
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" x2="8" y1="13" y2="13" />
          <line x1="16" x2="8" y1="17" y2="17" />
          <line x1="10" x2="8" y1="9" y2="9" />
        </svg>
      ),
      isActive: false,
    },
    {
      title: "Music",
      description: "Access a library of calming sounds and music to help you fall asleep faster and improve sleep quality.",
      icon: (
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
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <line x1="12" x2="12" y1="2" y2="4" />
          <line x1="12" x2="12" y1="20" y2="22" />
          <line x1="4.93" x2="6.34" y1="4.93" y2="6.34" />
          <line x1="17.66" x2="19.07" y1="17.66" y2="19.07" />
          <line x1="2" x2="4" y1="12" y2="12" />
          <line x1="20" x2="22" y1="12" y2="12" />
          <line x1="4.93" x2="6.34" y1="19.07" y2="17.66" />
          <line x1="17.66" x2="19.07" y1="6.34" y2="4.93" />
        </svg>
      ),
      isActive: false,
    },
  ];

  return (
    <Section id="features" className="py-20">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Features
          </span>
        </motion.div>
        <motion.h2
          className="text-3xl md:text-4xl font-bold mt-2 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <GradientText>Powerful Features</GradientText> to Improve Your Sleep
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our platform offers comprehensive tools to help you achieve better
          sleep and improve your academic performance.
        </motion.p>
      </div>

      {/* Feature tabs for mobile */}
      <div className="md:hidden mb-8 overflow-x-auto pb-4 flex space-x-2 px-4">
        {features.map((feature, index) => (
          <button
            key={index}
            onClick={() => setActiveFeature(index)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
              activeFeature === index
                ? "bg-primary text-white"
                : "bg-secondary text-foreground hover:bg-primary/10"
            }`}
          >
            {feature.title}
          </button>
        ))}
      </div>

      {/* Mobile view - show only active feature */}
      <div className="md:hidden px-4">
        <FeatureCard
          title={features[activeFeature].title}
          description={features[activeFeature].description}
          icon={features[activeFeature].icon}
          isActive={features[activeFeature].isActive}
        />
      </div>

      {/* Desktop view - grid layout */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            delay={index * 0.1}
            isActive={feature.isActive}
          />
        ))}
      </div>
    </Section>
  );
} 