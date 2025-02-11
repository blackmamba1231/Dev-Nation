"use client";
import { BackgroundBeamsWithCollision } from "@/components/Beams/Beams";
import React from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconTerminal2,
  IconBrandAsana,
} from "@tabler/icons-react";
import Hero from "@/components/ui/section";
import LogoRender from "@/components/ui/logo";
import FadeContent from "@/components/ui/fade-content";
import { WorldMapDemo } from "@/components/ui/world-map-use";
import OurWork from "@/components/ui/ourwork";
import { useState, useEffect } from "react";


export default function Home() {
  const links = [
    { title: "Home", icon: <IconHome className="h-full w-full" />, href: "#" },
    { title: "Our Services", icon: <IconTerminal2 className="h-full w-full" />, href: "#" },
    { title: "About Us", icon: <IconBrandAsana className="h-full w-full" />, href: "#" },
    { title: "Twitter", icon: <IconBrandX className="h-full w-full" />, href: "#" },
    { title: "GitHub", icon: <IconBrandGithub className="h-full w-full" />, href: "#" },
  ];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };
  
    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full h-auto relative">
      {!isMobile ? (
        <BackgroundBeamsWithCollision>
          {/* Header Section */}
          <div className="flex flex-row items-center top-4 left-4 md:left-16 absolute z-10">
            <LogoRender />
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
              <div className="flex flex-row space-x-1 font-bold py-2 text-2xl md:text-4xl">
                <p className="text-white">Dev</p>
                <p className="text-green-800">Nation</p>
              </div>
            </FadeContent>
          </div>
  
          {/* Background and Hero Section */}
          <div className="py-12 px-4 md:px-0 w-full">
            <Hero />
          </div>
        </BackgroundBeamsWithCollision>
      ) : (
        <FadeContent>
          {/* Header Section (Without Background Beams) */}
          <div className="flex flex-row items-center top-4 left-4 md:left-16 absolute z-10">
            <LogoRender />
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
              <div className="flex flex-row space-x-1 font-bold py-2 text-2xl md:text-4xl">
                <p className="text-white">Dev</p>
                <p className="text-green-800">Nation</p>
              </div>
            </FadeContent>
          </div>
  
          {/* Background and Hero Section */}
          <div className="py-12 px-4 md:px-0 w-full">
            <Hero />
          </div>
        </FadeContent>
      )}
  
      {/* World Map */}
      <div className="px-4 md:px-0">
        <WorldMapDemo />
      </div>
  
      {/* Our Work */}
      <div className="px-4 md:px-0">
        <OurWork />
      </div>
  
      {/* Floating Dock */}
      <div className="fixed bottom-4 w-full flex justify-center px-2">
        <FloatingDock
          desktopClassName="bg-gray-900/90"
          mobileClassName="translate-y-12 bg-gray-900/80 p-2 rounded-lg"
          items={links}
        />
      </div>
    </div>
  );
}
