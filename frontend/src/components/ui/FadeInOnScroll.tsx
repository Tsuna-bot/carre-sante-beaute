"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface FadeInOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  threshold?: number;
}

export default function FadeInOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.1,
}: FadeInOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold]);

  const getTransformClass = () => {
    switch (direction) {
      case "up":
        return "translate-y-8";
      case "down":
        return "-translate-y-8";
      case "left":
        return "translate-x-8";
      case "right":
        return "-translate-x-8";
      default:
        return "translate-y-8";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 transform translate-y-0"
          : `opacity-0 ${getTransformClass()}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
