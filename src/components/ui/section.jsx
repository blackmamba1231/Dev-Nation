"use client";
import React from "react";
import { TextGenerateEffect } from "./text-generate-effect";
import SplitText from "./split-text";
import FadeContent from "./fade-content";

const words = 'Our Mission is to bridge the gap between businesses and skilled developers, ensuring seamless project execution with precision, speed, and perfection.';

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <section className="relative w-full py-12 sm:py-20 lg:py-32 overflow-visible bg-transparent">
        <div className="px-4 sm:px-6 lg:px-12 mx-auto max-w-7xl">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-12 gap-x-8 lg:gap-x-16">
            {/* LEFT TEXT SECTION */}
            <div className="text-center lg:text-left">
              <SplitText
                text="Connecting Talent, Delivering Excellence"
                className="text-3xl sm:text-4xl lg:text-6xl font-normal text-white"
                delay={150}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
              />
              <div className="mt-4 sm:mt-6">
                <TextGenerateEffect duration={1} filter={false} words={words} />
              </div>
              <FadeContent>
                <form action="#" method="POST" className="relative mt-6 sm:mt-8 rounded-full">
                <div className="relative">
                    <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                      <input
                        type="email"
                        placeholder="Try Java Developer, React Dev etc."
                        className="block w-full py-4 pr-6 text-white placeholder-gray-500 bg-black border border-transparent rounded-full pl-14 sm:py-5 focus:border-transparent focus:ring-0"
                      />
                    </div>
                  </div>
                  <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90"
                    >
                      Find A Developer
                    </button>
                  </div>
                </form>
              </FadeContent>
            </div>

            {/* RIGHT IMAGE SECTION */}
            <FadeContent>
              <div className="relative mt-8 lg:mt-0">
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
                        <stop offset="0%" style={{ stopColor: "var(--color-cyan-500)" }} />
                        <stop offset="100%" style={{ stopColor: "var(--color-purple-500)" }} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="absolute inset-0">
                  <img
                    className="object-cover w-full h-full opacity-50"
                    src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
                    alt=""
                  />
                </div>
                <img
                  className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/2/illustration.png"
                  alt=""
                />
              </div>
            </FadeContent>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;