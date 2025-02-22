import React from "react";
import { IconShieldLock, IconUserCircle, IconServer, IconCookie } from "@tabler/icons-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-gray-300">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Your privacy is our top priority</p>
        </div>
        
        <div className="space-y-12">
          <section className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50">
            <div className="flex items-center gap-4 mb-6">
              <IconUserCircle className="w-8 h-8 text-blue-400" />
              <h2 className="text-2xl font-semibold text-white">Information We Collect</h2>
            </div>
            <p className="mb-4 text-gray-300">
              At Dev Nation, we collect minimal information to provide you with the best possible experience:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Contact information (name, email) when you reach out to us</li>
              <li>Usage analytics to improve our services</li>
              <li>Technical information for better compatibility</li>
            </ul>
          </section>

          <section className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50">
            <div className="flex items-center gap-4 mb-6">
              <IconServer className="w-8 h-8 text-blue-400" />
              <h2 className="text-2xl font-semibold text-white">How We Use Your Data</h2>
            </div>
            <p className="mb-4 text-gray-300">Your data helps us:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Provide and improve our web development services</li>
              <li>Communicate about your projects</li>
              <li>Enhance your experience on our platform</li>
            </ul>
          </section>

          <section className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50">
            <div className="flex items-center gap-4 mb-6">
              <IconShieldLock className="w-8 h-8 text-blue-400" />
              <h2 className="text-2xl font-semibold text-white">Data Security</h2>
            </div>
            <p className="text-gray-300">
              We implement industry-standard security measures to protect your information. 
              This includes encryption, secure servers, and regular security audits.
            </p>
          </section>

          <section className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50">
            <div className="flex items-center gap-4 mb-6">
              <IconCookie className="w-8 h-8 text-blue-400" />
              <h2 className="text-2xl font-semibold text-white">Cookies & Tracking</h2>
            </div>
            <p className="text-gray-300">
              We use essential cookies to ensure our website functions properly. Analytics cookies 
              help us understand how visitors interact with our site.
            </p>
          </section>

          <section className="text-center mt-12">
            <p className="text-gray-400">
              Questions about our privacy policy? Contact us at{" "}
              <a href="mailto:contact@devnation.org.in" className="text-blue-400 hover:text-blue-300">
                contact@devnation.org.in
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: February 22, 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
