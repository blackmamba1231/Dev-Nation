import React from "react";
import { IconLicense, IconCode, IconShieldCheck, IconUserCircle } from "@tabler/icons-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen  text-gray-300">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-gray-400">Please read these terms carefully</p>
        </div>
        
        <div className="space-y-12">
          <section className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50">
            <div className="flex items-center gap-4 mb-6">
              <IconLicense className="w-8 h-8 text-blue-400" />
              <h2 className="text-2xl font-semibold text-white">Agreement Overview</h2>
            </div>
            <p className="text-gray-300">
              By using Dev Nation&apos;s services, you agree to these terms. We provide web development
              and design services with a focus on creating exceptional digital experiences.
            </p>
          </section>

          <section className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50">
            <div className="flex items-center gap-4 mb-6">
              <IconCode className="w-8 h-8 text-blue-400" />
              <h2 className="text-2xl font-semibold text-white">Our Services</h2>
            </div>
            <p className="mb-4 text-gray-300">We specialize in:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Custom web development and design</li>
              <li>Interactive user interfaces</li>
              <li>Performance optimization</li>
              <li>SEO and digital presence enhancement</li>
            </ul>
          </section>

          <section className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50">
            <div className="flex items-center gap-4 mb-6">
              <IconUserCircle className="w-8 h-8 text-blue-400" />
              <h2 className="text-2xl font-semibold text-white">User Responsibilities</h2>
            </div>
            <p className="mb-4 text-gray-300">When working with us, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Provide accurate project requirements and information</li>
              <li>Maintain timely communication during project development</li>
              <li>Respect intellectual property rights</li>
              <li>Use our services in compliance with applicable laws</li>
            </ul>
          </section>

          <section className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50">
            <div className="flex items-center gap-4 mb-6">
              <IconShieldCheck className="w-8 h-8 text-blue-400" />
              <h2 className="text-2xl font-semibold text-white">Intellectual Property</h2>
            </div>
            <p className="text-gray-300">
              Upon full payment, you receive rights to the final deliverables. We retain rights to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400">
              <li>Our pre-existing tools and frameworks</li>
              <li>Generic components that may be reused</li>
              <li>Portfolio display rights</li>
            </ul>
          </section>

          <section className="text-center mt-12">
            <p className="text-gray-400">
              Questions about our terms? Contact us at{" "}
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
