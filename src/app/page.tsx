"use client";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { FloatingDock } from "../components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconTerminal2,
  IconBrandAsana,
} from "@tabler/icons-react";
import LogoRender from "@/components/ui/logo";
import FadeContent from "@/components/ui/fade-content";
import HeroText from "@/components/ui/hero-text";
import Hero from "@/components/ui/section";

// Preload components
const preloadComponents = () => {
  const WorldMapPromise = import("@/components/ui/world-map-use");
  const OurWorkPromise = import("@/components/ui/ourwork");
  return Promise.all([WorldMapPromise, OurWorkPromise]);
};

// Dynamically import components
const WorldMapDemo = dynamic(() => import("@/components/ui/world-map-use").then(mod => mod.WorldMapDemo), {
  ssr: false,
  loading: () => <div className="w-full h-[600px] bg-stone-800/40 animate-pulse rounded-lg" />
});

const OurWork = dynamic(() => import("@/components/ui/ourwork"), {
  ssr: false,
  loading: () => <div className="w-full h-[600px] bg-stone-800/40 animate-pulse rounded-lg" />
});

const TextRevealCardPreview = dynamic(() => import("@/components/ui/Revealcard").then(mod => mod.TextRevealCardPreview), {
  ssr: false,
  loading: () => <div className="w-full h-[600px] bg-stone-800/40 animate-pulse rounded-lg" />
});

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [showWorldMap, setShowWorldMap] = useState(false);
  const [showOurWork, setShowOurWork] = useState(false);
  const worldMapRef = useRef<HTMLDivElement>(null);
  const ourWorkRef = useRef<HTMLDivElement>(null);
  const textRevealCardRef = useRef<HTMLDivElement>(null);

  // Start preloading components on mount
  useEffect(() => {
    preloadComponents();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "200px", // Increased margin to start loading earlier
      threshold: 0,
    };

    const createObserver = (
      ref: React.RefObject<HTMLDivElement | null>,
      setShow: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShow(true);
            observer.disconnect();
          }
        });
      }, observerOptions);

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    };

    const worldMapObserver = createObserver(worldMapRef, setShowWorldMap);
    const ourWorkObserver = createObserver(ourWorkRef, setShowOurWork);
    const textRevealCardObserver = createObserver(textRevealCardRef, setShowOurWork);

    return () => {
      worldMapObserver.disconnect();
      ourWorkObserver.disconnect();
      textRevealCardObserver.disconnect();
    };
  }, []);

  const links = [
    { title: "Home", icon: <IconHome className="h-full w-full" />, href: "#" },
    { title: "Our Services", icon: <IconTerminal2 className="h-full w-full" />, href: "#" },
    { title: "About Us", icon: <IconBrandAsana className="h-full w-full" />, href: "#" },
    { title: "Twitter", icon: <IconBrandX className="h-full w-full" />, href: "#" },
    { title: "GitHub", icon: <IconBrandGithub className="h-full w-full" />, href: "#" },
  ];

  return (
    <>
      <Head>
        <title>Dev Nation - Connecting Talent, Delivering Excellence</title>
        <meta name="description" content="Dev Nation - Your trusted partner in software development. We connect exceptional talent with innovative projects, delivering excellence in web development, mobile apps, and digital solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="yandexbot" content="index, follow" />
        <meta name="trustpilot-one-time-domain-verification-id" content="29f389be-0439-4d16-8728-c078ab156a2b"/>
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Dev Nation",
              "url": "https://devnation.org.in",
              "logo": "https://devnation.org.in/logo.png",
              "description": "Dev Nation - Your trusted partner in software development. We connect exceptional talent with innovative projects, delivering excellence in web development, mobile apps, and digital solutions.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.linkedin.com/company/dev-nation-org-in",
                "https://x.com/DevNation178044"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi"]
              }
            })
          }}
        />

        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devnation.org.in" />
        <meta property="og:title" content="Dev Nation - Connecting Talent, Delivering Excellence" />
        <meta property="og:description" content="Dev Nation - Your trusted partner in software development. We connect exceptional talent with innovative projects, delivering excellence in web development, mobile apps, and digital solutions." />
        <meta property="og:image" content="https://devnation.org.in/og-image.jpg" />
        
        {/* LinkedIn Meta Tags */}
        <meta property="og:site_name" content="Dev Nation" />
        <meta property="og:locale" content="en_US" />
        <meta name="linkedin:company" content="dev-nation-org-in" />
        <meta property="article:publisher" content="https://www.linkedin.com/company/dev-nation-org-in" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DevNation178044" />
        <meta name="twitter:creator" content="@DevNation178044" />
        <meta name="twitter:url" content="https://devnation.org.in" />
        <meta name="twitter:title" content="Dev Nation - Connecting Talent, Delivering Excellence" />
        <meta name="twitter:description" content="Dev Nation - Your trusted partner in software development. We connect exceptional talent with innovative projects." />
        <meta name="twitter:image" content="https://devnation.org.in/og-image.jpg" />

        {/* Keywords and Additional Meta Tags */}
        <meta name="keywords" content="Dev Nation, software development, web development, mobile apps, digital solutions, IT services, technology consulting, software engineering, development team, tech talent, India" />
        <meta name="author" content="Dev Nation" />
        <meta name="language" content="English" />

        {/* Social Media Links */}
        <link rel="me" href="https://www.linkedin.com/company/dev-nation-org-in" />
        <link rel="me" href="https://x.com/DevNation178044" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://devnation.org.in" />
      </Head>

      <main className="w-full h-auto relative">
        {isMobile ? (
          <div className="space-y-4">
            <header className="flex flex-row justify-center items-center top-8 w-full absolute z-10">
              <LogoRender />
            </header>
            <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-12 gap-x-8 lg:gap-x-16 items-center">
              <div className="text-center lg:text-left mt-32 sm:mt-24 lg:mt-0">
                <HeroText />
              </div>
              <div className="w-full h-full">
                <Hero />
              </div>
            </div>
          </div>
        ) : (
          <FadeContent>
            <header className="flex flex-row items-center top-4 left-4 md:left-16 absolute z-10">
              <LogoRender />
            </header>
            <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-12 gap-x-8 lg:gap-x-16 items-center">
              <div className="text-center lg:text-left mt-32 sm:mt-24 lg:mt-0">
                <HeroText />
              </div>
              <div className="w-full h-full">
                <Hero />
              </div>
            </div>
          </FadeContent>
        )}

        <div 
          ref={worldMapRef} 
          className="min-h-[600px] px-4 md:px-0"
        >
          {showWorldMap && <WorldMapDemo />}
        </div>

        <div 
          ref={ourWorkRef} 
          className="min-h-[600px] px-4 md:px-0"
        >
          {showOurWork && <OurWork />}
        </div>

        <div
          ref={textRevealCardRef}
          className="min-h-[600px] px-4 md:px-0"
        ><FadeContent>
        <div className="w-full h-auto bg-transparent">
          <div className="text-center max-w-7xl mx-auto">
            <div className="inline-block">
              <h2 className="text-neutral-200 text-3xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text mb-1">
                Hover to reveal
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full mb-2"></div>
              <div className="-mt-4">
                <TextRevealCardPreview />
              </div>
            </div>
          </div>
        </div>
      </FadeContent>
          
        </div>

        <footer className="fixed bottom-4 md:bottom-3 w-full flex justify-center px-2">
          <FloatingDock
            mobileClassName=" bg-gray-900/80 p-2 rounded-lg "
            items={links}
          />
        </footer>
      </main>
    </>
  );
}
