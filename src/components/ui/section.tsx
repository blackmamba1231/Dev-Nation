"use client";
import React from "react";
import { TextGenerateEffect } from "./text-generate-effect";
import SplitText from "./split-text";
import Image from "next/image";

interface HeroProps {
  className?: string;
}

const words = 'Our Mission is to bridge the gap between businesses and skilled developers, ensuring seamless project execution with precision, speed, and perfection.';

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  return (
    <div className={`w-full min-h-screen flex flex-col justify-center items-center bg-transparent ${className}`}>
      <section className="relative w-full bg-transparent">
        <div className="px-4 sm:px-6 lg:px-12 mx-auto max-w-7xl">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-12 gap-x-8 lg:gap-x-16">
            {/* LEFT TEXT SECTION */}
            <div className="text-center lg:text-left mt-32 sm:mt-24 lg:mt-0">
              <div className="w-full">
                <SplitText
                  text="Connecting Talent, Delivering Excellence"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white inline-block w-full"
                  delay={100}
                />
              </div>
              <div className="mt-4 sm:mt-6">
                <TextGenerateEffect duration={1} filter={false} words={words} />
              </div>
            </div>

            {/* RIGHT IMAGE SECTION */}
            <div className="relative mt-8 lg:mt-0 flex justify-center">
              <div className="absolute inset-0">
                <svg
                  className="blur-3xl filter opacity-70"
                  style={{ filter: "blur(64px)" }}
                  width="100%"
                  height="100%"
                  viewBox="0 0 444 536"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z"
                    fill="url(#c)"
                  />
                  <defs>
                    <linearGradient
                      id="c"
                      x1="82.7339"
                      y1="550.792"
                      x2="-39.945"
                      y2="118.965"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" style={{ stopColor: "#06b6d4" }} />
                      <stop offset="100%" style={{ stopColor: "#8b5cf6" }} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <Image
                className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
                src="https://res.cloudinary.com/dkjgrv8cy/image/upload/v1740068339/illustration_clne4l.png"
                alt="Illustration"
                width={500}
                height={500}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;