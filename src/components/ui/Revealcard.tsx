"use client";
import React from "react";
import {
  TextRevealCard,
} from "./text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-transparent min-h-[15rem] sm:min-h-[30rem] rounded-2xl w-full px-4 sm:px-8">
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry "
      >
      </TextRevealCard>
    </div>
  );
}
