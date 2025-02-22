"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IconBrandGithub, IconBrandLinkedin, IconBrandX, IconMail, IconMapPin, IconPhone, IconCheck, IconX } from "@tabler/icons-react";
import { useState } from "react";

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

type NotificationType = {
  type: 'success' | 'error';
  message: string;
} | null;

export const AnimatedContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<NotificationType>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Send email using your preferred method (e.g., API endpoint, email service)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '32b1cf97-a337-4dad-97be-d7bf76d821b6', // Replace with your Web3Forms access key
          ...formData
        })
      });

      if (!response.ok) throw new Error('Failed to send message');

      setNotification({
        type: 'success',
        message: 'Message sent successfully! We will get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setNotification({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsLoading(false);
      // Clear notification after 5 seconds
      setTimeout(() => setNotification(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <IconPhone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 8210423816",
      href: "tel:+918210423816"
    },
    {
      icon: <IconMail className="w-6 h-6" />,
      title: "Email",
      value: "devnation.org@gmail.com",
      href: "mailto:devnation.org@gmail.com"
    },
    {
      icon: <IconMapPin className="w-6 h-6" />,
      title: "Location",
      value: "New Delhi, India",
      href: "https://maps.google.com/?q=New+Delhi,India"
    }
  ];

  const socialLinks = [
    {
      icon: <IconBrandGithub className="w-6 h-6" />,
      href: "https://github.com/blackmamba1231",
      label: "GitHub"
    },
    {
      icon: <IconBrandX className="w-6 h-6" />,
      href: "https://x.com/DevNation178044",
      label: "Twitter"
    },
    {
      icon: <IconBrandLinkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/company/dev-nation-org-in",
      label: "LinkedIn"
    }
  ];

  return (
    <motion.section
      id="contact"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 " />
      <div className="absolute inset-0" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={fadeInUp} className="relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="John Doe"
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="john@example.com"
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Tell us about your project..."
                  required
                  disabled={isLoading}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg font-medium hover:from-purple-700 hover:to-purple-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>

            {/* Notification */}
            <AnimatePresence>
              {notification && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`absolute bottom-full left-0 right-0 mb-4 p-4 rounded-lg ${
                    notification.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 
                    'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}
                >
                  <div className="flex items-center">
                    {notification.type === 'success' ? (
                      <IconCheck className="w-5 h-5 mr-2" />
                    ) : (
                      <IconX className="w-5 h-5 mr-2" />
                    )}
                    {notification.message}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.title === "Location" ? "_blank" : undefined}
                  rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                  className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors p-4 rounded-lg bg-gray-800/30 border border-gray-700/50 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-3 rounded-full bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-300">{info.title}</h3>
                    <p className="text-base">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-800/30 border border-gray-700/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
