"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

interface MouseEvent {
  preventDefault: () => void;
  clientX: number;
}

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const { left, width: localWidth } = cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(localWidth);
    }
  }, []);

  function mouseMoveHandler(event: MouseEvent) {
    event.preventDefault();
    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }

  function mouseEnterHandler() {
    setIsMouseOver(true);
  }

  function touchMoveHandler(event: React.TouchEvent<HTMLDivElement>) {
    event.preventDefault();
    const clientX = event.touches[0]!.clientX;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={mouseEnterHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      ref={cardRef}
      className={cn(
        "bg-stone-800/40 hover:bg-stone-700/40 border border-white/[0.08] w-full max-w-[40rem] rounded-lg p-4 sm:p-8 relative overflow-hidden",
        className
      )}
    >
      {children}

      <div className="h-24 sm:h-40 relative flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            width: "100%",
            clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
            WebkitClipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
          }}
          initial={false}
          animate={{
            opacity: isMouseOver ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 z-20 flex items-center justify-center"
        >
          <p
            style={{
              textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
            }}
            className="text-white text-2xl sm:text-[3rem] font-bold px-2 text-center"
          >
            {revealText}
          </p>
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            opacity: isMouseOver ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="relative z-10 flex items-center justify-center w-full"
        >
          <p className="text-white text-2xl sm:text-[3rem] font-bold text-center">
            {text}
          </p>
        </motion.div>

        <motion.div
          className="absolute left-0 h-full w-[2px] bg-gradient-to-b from-transparent via-white/50 to-transparent z-30"
          animate={{
            left: `${widthPercentage}%`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={{ duration: 0 }}
        />
      </div>

      <MemoizedStars
        className="absolute inset-0 h-full w-full"
        quantity={100}
        style={{
          transform: `translateX(${(widthPercentage - 50) * 2.5}px)`,
        }}
      />
    </div>
  );
};

export const TextRevealCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={twMerge("text-white text-lg mb-2", className)}>
      {children}
    </h2>
  );
};

export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={twMerge("text-[#a9a9a9] text-sm", className)}>{children}</p>
  );
};

const Stars = ({
  className,
  quantity = 80,
  style,
}: {
  className?: string;
  quantity?: number;
  style?: React.CSSProperties;
}) => {
  const randomOpacity = () => Math.random();
  const random = () => Math.random();

  return (
    <div className={cn("absolute inset-0", className)} style={style}>
      {[...Array(quantity)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            opacity: [0, randomOpacity(), 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            height: Math.random() * 2 + 1,
            width: Math.random() * 2 + 1,
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 1,
          }}
        />
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);
