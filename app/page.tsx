import { GlobalSpotlight } from "./components/global-spotlight";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { KeyFeatures } from "./components/key-features";
import { Section } from "./components/section";
import { GradientText } from "./components/gradient-text";
import { Button } from "./components/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { TeamMemberCard } from "./components/team-member-card";

export default function Home() {
  const teamMembers = [
    {
      name: "Rusira Sandul",
      role: "Team Leader",
      subRole: "ML and Backend Developer",
      image: "/Rusira.jpg",
      social: {
        github: "https://github.com/rusirasandul",
        linkedin: "https://www.linkedin.com/in/rusira-sandul-b6bb87292/",
        instagram: "https://www.instagram.com/hwrs_2249/"
      }
    },
    {
      name: "Lakindu Perera",
      role: "Backend Developer",
      image: "/Lakindu.jpg",
      social: {
        github: "https://github.com/lakindudev",
        linkedin: "https://www.linkedin.com/in/lakindu-perera-297b752b2/",
        instagram: "https://www.instagram.com/lakindu_x/"
      }
    },
    {
      name: "Fathima Nihla",
      role: "Frontend Developer",
      image: "/Nihila.jpg",
      social: {
        github: "https://github.com/NihlaNazim",
        linkedin: "https://www.linkedin.com/in/nihla-nazim/",
        instagram: "https://www.instagram.com/iamnihla._/"
      }
    },
    {
      name: "Dewmi Jayasundara",
      role: "Frontend Developer",
      image: "/Dewmi.jpg",
      social: {
        github: "https://github.com/dew27",
        linkedin: "https://www.linkedin.com/in/dewmi-jayasundara-952906293/",
        instagram: "https://www.instagram.com/dewmi_jayasundara27/"
      }
    },
    {
      name: "Chalitha T. Wickramasingha",
      role: "Frontend Developer",
      subRole: "Marketing Analyst",
      image: "/Chalitha.jpg",
      social: {
        github: "https://github.com/chalitha-wickramasinghe",
        linkedin: "https://www.linkedin.com/in/chalitha-t-wickramasingha-643101293/"
       
      }
    },
    {
      name: "Dulsara Abeywardena",
      role: "Backend Developer",
      subRole: "Marketing Analyst",
      image: "/dulsaraa.jpg",
      social: {
        github: "https://github.com/DulsaraAbhi",
        linkedin: "https://www.linkedin.com/in/dulsara-yapa-abeywardena-777286297/",
        instagram: "https://www.instagram.com/_dulsara_a_y_a_/"
      }
    },
    
  ];

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Global spotlight effect */}
      <GlobalSpotlight />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Key Features */}
      <KeyFeatures />
      
      {/* How It Works Section */}
      <Section id="how-it-works" className="py-20 bg-secondary/30">
        <div className="center-text mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            How <GradientText>LunaRest</GradientText> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform uses advanced technology to help you improve your sleep and academic performance.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 rounded-full"></div>
            
            {/* Timeline items */}
            {[
              {
                title: "Track Your Sleep",
                description: "Use our app to track your sleep patterns and habits.",
                icon: "📱",
              },
              {
                title: "Get Insights",
                description: "Our AI analyzes your data and provides personalized insights.",
                icon: "🧠",
              },
              {
                title: "Follow Recommendations",
                description: "Implement our tailored recommendations to improve your sleep.",
                icon: "✅",
              },
              {
                title: "Monitor Progress",
                description: "Track your progress and see how your sleep quality improves over time.",
                icon: "📈",
              },
            ].map((item, index) => (
              <div key={index} className="relative z-10 mb-12">
                <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-8`}>
                  <div className="w-1/2 text-center md:text-left">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Team Section */}
      <Section id="team" className="py-20">
        <div className="center-text mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Meet the <GradientText>Brilliant Minds</GradientText> Behind LunaRest
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of experts is dedicated to improving sleep quality and academic performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              subRole={member.subRole}
              image={member.image}
              social={member.social}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
