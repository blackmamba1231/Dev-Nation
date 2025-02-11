import { BackgroundBeamsWithCollision } from "@/components/Beams/Beams";
import React from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconTerminal2,
  IconBrandAsana
} from "@tabler/icons-react";
import Hero from "@/components/ui/section";
import LogoRender from "@/components/ui/logo";
import FadeContent from "@/components/ui/fade-content";
import { WorldMapDemo } from "@/components/ui/world-map-use";
import OurWork from "@/components/ui/ourwork";
export default function Home() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full " />
      ),
      href: "#",
    },
 
    {
      title: "Our Services",
      icon: (
        <IconTerminal2 className="h-full w-full " />
      ),
      href: "#",
    },
    {
      title: "About Us",
      icon: (
        <IconBrandAsana className="h-full w-full  " />
      ),
      href: "#",
    },
 
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full " />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full " />
      ),
      href: "#",
    },
  ];
  return (
    <div className="w-full h-auto">
      <div className="flex flex-row  top-4 left-16 w-full h-full absolute z-0">
       <LogoRender />
       <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
       <div className="flex flex-row space-x-1 font-bold py-2">
      <p className="text-white text-4xl">Dev</p>
      <p className="text-green-800 text-4xl">Nation</p>
      </div>
      </FadeContent>
      
      </div>
      
      {/* Background and Hero Section */}
         
        <BackgroundBeamsWithCollision>
          <div className="py-12 h-full w-full">
            <Hero />
          </div>
        </BackgroundBeamsWithCollision>

      {/* World Map */}
      <WorldMapDemo/>

      {/* Our Work */}
      <OurWork />
     {/* Floating Dock */}
     <div className="fixed bottom-4 w-full flex justify-center">
        <FloatingDock
          desktopClassName="bg-gray-900/90"
          mobileClassName="translate-y-20"
          items={links}
        />
      </div>
    </div>
    
  );
  
}
