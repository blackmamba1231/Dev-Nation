"use client";
import { useState, useEffect, Suspense } from "react";
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
import LoadingSkeleton from "@/components/ui/loading-skeleton"; 

const Hero = dynamic(
  () => import("@/components/ui/section"),
  { 
    ssr: false,
    loading: () => <div></div>,
  }
);
const WorldMapDemo = dynamic(
  () => import("@/components/ui/world-map-use").then((mod) => mod.WorldMapDemo),
  { 
    ssr: false,
    loading: () => <div></div>,
  }
);
const OurWork = dynamic(
  () => import("@/components/ui/ourwork"),
  { 
    ssr: false,
    loading: () => <div></div>,
  }
);

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
      setIsMobile(window.innerWidth < 768);
    };

    const preloadComponents = async () => {
      const heroComponent = import("@/components/ui/section");
      const worldMapComponent = import("@/components/ui/world-map-use");
      await Promise.all([heroComponent, worldMapComponent]);
    };
    
    preloadComponents();
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>Dev Nation - Connecting Talent, Delivering Excellence</title>
        <meta name="description" content="Connecting Talent, Delivering Excellence" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="w-full h-auto relative">
        {isMobile ? (
          <div className="space-y-4">
            <header className="flex flex-row justify-center items-center top-8 w-full absolute z-10">
              <LogoRender />
            </header>
            <Suspense fallback={<div></div>}>
              <Hero />
            </Suspense>
          </div>
        ) : (
          <FadeContent>
            <header className="flex flex-row items-center top-4 left-4 md:left-16 absolute z-10">
              <LogoRender />
            </header>
      
            <Suspense fallback={<div></div>}>
              <Hero />
            </Suspense>
          </FadeContent>
        )}

        {/* World Map Section */}
        <section className="px-4 md:px-0">
          <Suspense fallback={<LoadingSkeleton />}>
            <WorldMapDemo />
          </Suspense>
        </section>

        {/* Our Work (Our Expertise) Section */}
        <section className="px-4 md:px-0">
          <Suspense fallback={<LoadingSkeleton />}>
            <OurWork />
          </Suspense>
        </section>

        {/* Floating Navigation */}
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
