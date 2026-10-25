"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Gentle fade-and-rise container (8-10px, once, ~250ms).
 * Strictly respects prefers-reduced-motion.
 */
export default function FadeRiseSection({
  children,
  className = "",
  id = "",
  as: Component = "section",
  initialVisible = false,
}) {
  const [isVisible, setIsVisible] = useState(initialVisible);
  const elementRef = useRef(null);

  useEffect(() => {
    if (initialVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Trigger once only
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
    };
  }, [initialVisible]);

  return (
    <Component
      id={id || undefined}
      ref={elementRef}
      className={`transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2.5"
      } ${className}`}
    >
      {children}
    </Component>
  );
}
