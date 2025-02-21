"use client";
import React from "react";
import { TextGenerateEffect } from "./text-generate-effect";
import AnimatedText from "./animated-text";

const words = 'Our Mission is to bridge the gap between businesses and skilled developers, ensuring seamless project execution with precision, speed, and perfection.';

export default function HeroText() {
  return (
    <div className="text-center px-10 lg:text-left mt-32 sm:mt-24 lg:mt-0 sm:py-2">
      <div className="w-full">
        <AnimatedText
          text="Connecting Talent, Delivering Excellence"
          className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white"
          delay={25}
        />
      </div>
      <div className="mt-4 sm:mt-6">
        <TextGenerateEffect duration={1} filter={false} words={words} />
      </div>
    </div>
  );
}
