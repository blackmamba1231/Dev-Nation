"use client"; 
import Link from "next/link";
import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef } from "react";
import { motion } from "framer-motion";

export const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver({
    ref: footerRef,
    options: {
      threshold: 0.1,
      rootMargin: "100px",
    },
  });

  return (
    <motion.footer 
      ref={footerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full border-t border-gray-800 bg-black/50 backdrop-blur-xl relative z-0"
    >
      <div className="bottom-0 mx-auto max-w-screen-xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Brand Section */}
          <div>
            <div className="text-white font-bold text-2xl mb-4">Dev Nation</div>
            <p className="text-gray-400 max-w-xs">
              Empowering developers to build the future through innovative solutions and cutting-edge technology.
            </p>
            <div className="mt-8 flex gap-6">
              <Link
                href="https://x.com/DevNation178044"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <IconBrandX className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/dev-nation-org-in"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <IconBrandLinkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://github.com/blackmamba1231"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <IconBrandGithub className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h3 className="text-white font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-6">Resources</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/documentation" className="text-gray-400 hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <p className="text-sm text-gray-400">
              {new Date().getFullYear()} Dev Nation. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-400 lg:justify-end">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
