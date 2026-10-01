"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap-config";

type AnimationOptions = {
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  once?: boolean;
};

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  animationFn: (element: T) => void,
  options: AnimationOptions = {}
) {
  const containerRef = useRef<T>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Refresh ScrollTrigger after DOM updates
      ScrollTrigger.refresh();

      animationFn(containerRef.current);
    },
    { scope: containerRef }
  );

  return containerRef;
}