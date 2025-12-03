"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(
  threshold: number = 0.1,
  rootMargin: string = "0px 0px -100px 0px"
) {
  const elementRef = useRef<HTMLElement | HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold, rootMargin }
    );

    if (elementRef.current) {
      // Check if already in viewport
      const rect = elementRef.current.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (isInViewport) {
        setTimeout(() => setIsVisible(true), 100);
      } else {
        observer.observe(elementRef.current);
      }
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, rootMargin]);

  return { elementRef, isVisible };
}

