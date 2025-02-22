"use client";

import { motion } from "framer-motion";
import {
  IconBrandX,
  IconHome,
  IconTerminal2,
  IconBrandAsana
} from "@tabler/icons-react";
import { IconBrandGithub, IconBrandLinkedin, IconCode, IconRocket, IconUsers } from "@tabler/icons-react";
import {FloatingDock} from "@/components/ui/floating-dock";
import {Footer }from "@/components/ui/footer";
import Image from "next/image";

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};
const links = [
  { title: "Home", icon: <IconHome className="h-full w-full" />, href: "https://devnation.org.in" },
  { title: "Our Services", icon: <IconTerminal2 className="h-full w-full" />, href: "https://devnation.org.in" },
  { title: "About Us", icon: <IconBrandAsana className="h-full w-full" />, href: "https://devnation.org.in/about" },
  { title: "Twitter", icon: <IconBrandX className="h-full w-full" />, href: "https://x.com/DevNation178044", target: "_blank" },
  { title: "LinkedIn", icon: <IconBrandLinkedin className="h-full w-full" />, href: "https://www.linkedin.com/company/dev-nation-org-in", target: "_blank" },
];

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Abhi Raj",
      role: "Founder & CEO",
      image: "/abhi.jpeg",
      github: "https://github.com/igabhix001",
      linkedin: "https://www.linkedin.com/in/abhi-raj-1159712a7/",
    },
    {
      name: "Sudhanshu Tiwary",
      role: "Founder & CEO",
      image: "/sudhanshu.jpeg",
      github: "https://github.com/blackmamba1231",
      linkedin: "https://www.linkedin.com/in/sudhanshu-tiwary-9b1936230/",
    }
    
    // Add more team members here
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: IconCode },
    { number: "100+", label: "Happy Clients", icon: IconUsers },
    { number: "95%", label: "Client Retention", icon: IconRocket },
  ];

  return (
    <div className="min-h-screen ">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent"
          >
            About Dev Nation
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            We are a passionate team of developers and designers dedicated to creating exceptional digital experiences that drive business growth and user engagement.
          </motion.p>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <stat.icon className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-white mb-2">{stat.number}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Mission Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-400 text-lg mb-6">
              To empower businesses with cutting-edge web solutions that combine innovative technology with exceptional user experiences. We strive to be at the forefront of digital transformation, helping our clients achieve their goals through creative and efficient solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">Our Values</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Innovation in every solution</li>
                  <li>Quality and attention to detail</li>
                  <li>Client satisfaction first</li>
                  <li>Continuous learning and improvement</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">Our Approach</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Agile development methodology</li>
                  <li>Collaborative client partnerships</li>
                  <li>Data-driven decision making</li>
                  <li>Future-proof technologies</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="relative w-full h-full object-cover rounded-full border-4 border-gray-800"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-gray-400 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <IconBrandGithub className="w-6 h-6" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <IconBrandLinkedin className="w-6 h-6" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      
      <div
            className="bottom-0 lg:bottom-0 sm:bottom-0 md:bottom-0 w-full border-t border-gray-800 bg-black/50 backdrop-blur-xl relative z-0"
          >
            <Footer />
       </div>

      <footer className="fixed bottom-4 md:bottom-3 w-full flex justify-center px-2 ">
          <FloatingDock
            mobileClassName=" bg-gray-900/80 p-2 rounded-lg "
            items={links}
          />
          
        </footer>
    </div>
  );
}
