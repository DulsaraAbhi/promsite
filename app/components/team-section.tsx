"use client";

import { motion } from "framer-motion";
import { Section } from "./section";
import { GradientText } from "./gradient-text";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      name: "Alex Johnson",
      role: "Lead Developer",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Sarah Williams",
      role: "UX Designer",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Michael Brown",
      role: "Data Scientist",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Emily Davis",
      role: "Product Manager",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "David Wilson",
      role: "ML Engineer",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Jessica Taylor",
      role: "Sleep Specialist",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ];

  // Duplicate the team members for infinite scrolling effect
  const duplicatedTeamMembers = [...teamMembers, ...teamMembers];

  return (
    <Section id="team" className="py-20">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Our Team
          </span>
        </motion.div>
        <motion.h2
          className="text-3xl md:text-4xl font-bold mt-2 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Meet the <GradientText>Brilliant Minds</GradientText> Behind LunaRest
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our diverse team of experts is dedicated to improving sleep quality and academic performance.
        </motion.p>
      </div>

      {/* Infinite scrolling team members */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedTeamMembers.map((member, index) => (
            <div
              key={index}
              className="w-[280px] flex-shrink-0 mx-4"
            >
              <div className="bg-card rounded-lg overflow-hidden shadow-lg border border-border hover:border-primary transition-colors duration-300">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                  <div className="mt-4 flex space-x-3">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
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
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="text-muted-foreground hover:text-primary transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3-1 3.33 1.5 1.34 3.34z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
} 