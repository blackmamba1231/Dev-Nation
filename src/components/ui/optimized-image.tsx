"use client";
import Image from "next/image";
import { useState } from "react";
import { PERFORMANCE_CONFIG } from "@/config/performance";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false
}: OptimizedImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        className={`
          duration-700 ease-in-out
          ${isLoading ? "scale-110 blur-lg" : "scale-100 blur-0"}
        `}
        onLoadingComplete={() => setLoading(false)}
        priority={priority}
        quality={PERFORMANCE_CONFIG.IMAGE.quality}
      />
    </div>
  );
} 