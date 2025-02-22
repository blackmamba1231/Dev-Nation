import Link from "next/link";
import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import { useNavigate } from "react-router";
export const Footer = () => {
  const navigate = useNavigate();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bottom-0 w-full border-t border-gray-800 bg-black/50 backdrop-blur-xl relative z-0">
      <div className="mx-auto max-w-screen-xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Brand Section */}
          <div>
            <div className="text-white font-bold text-2xl mb-4">Dev Nation</div>
            <p className="text-gray-400 max-w-xs">
              Transforming ideas into exceptional digital experiences. Your trusted partner for innovative web development and design solutions.
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
              <h3 className="text-white font-semibold mb-6">Navigation</h3>
              <ul className="space-y-4">
                <li>
                  <button 
                    onClick={() => navigate('https://devnation.org.in/about')}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('work')}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Our Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('testimonials')}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-6">Legal</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
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
    </footer>
  );
};
