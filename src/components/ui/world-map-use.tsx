"use client";
import { WorldMap } from "@/components/ui/worldmap";
import { memo } from "react";
import FadeContent from "./fade-content";

const AnimatedText = memo(({ text }: { text: string }) => {
  return (
    <span className="text-neutral-200">
      {text.split("").map((char, idx) => (
        <span
          key={idx}
          className="inline-block transition-all duration-300"
          style={{
            opacity: 1,
            transform: 'translateX(0)',
            animation: `fadeIn 0.5s ease-out ${idx * 0.04}s`
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
});

AnimatedText.displayName = "AnimatedText";

const WorldMapContent = memo(() => {
  return (
    <div className="py-16 bg-transparent w-full">
      <FadeContent>
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-bold text-xl md:text-4xl text-neutral-200">
            Remote <AnimatedText text="Connectivity" />
          </p>
          <p className="text-sm md:text-lg text-neutral-400 max-w-2xl mx-auto py-4">
            Break free from traditional boundaries. Work from anywhere, at the
            comfort of your own studio apartment. Perfect for remote teams.
          </p>
        </div>
      </FadeContent>
      <WorldMap
        dots={[
          {
            start: { lat: 64.2008, lng: -149.4937 },
            end: { lat: 34.0522, lng: -118.2437 },
          },
          {
            start: { lat: 64.2008, lng: -149.4937 },
            end: { lat: -15.7975, lng: -47.8919 },
          },
          {
            start: { lat: -15.7975, lng: -47.8919 },
            end: { lat: 38.7223, lng: -9.1393 },
          },
          {
            start: { lat: 51.5074, lng: -0.1278 },
            end: { lat: 28.6139, lng: 77.209 },
          },
          {
            start: { lat: 28.6139, lng: 77.209 },
            end: { lat: 43.1332, lng: 131.9113 },
          },
          {
            start: { lat: 28.6139, lng: 77.209 },
            end: { lat: -1.2921, lng: 36.8219 },
          },
        ]}
      />
    </div>
  );
});

WorldMapContent.displayName = "WorldMapContent";

export function WorldMapDemo() {
  return <WorldMapContent />;
}
