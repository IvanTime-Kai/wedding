"use client";

import { useState, useEffect, useRef, useCallback } from "react";

function FadeInSection({ children, delay = 0, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const observeSection = useCallback(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentSection);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.1 },
    );

    observer.observe(currentSection);

    return () => observer.unobserve(currentSection);
  }, []);

  useEffect(() => {
    const cleanup = observeSection();
    return cleanup;
  }, [observeSection]);

  return (
    <div
      ref={sectionRef}
      className={`w-full transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default FadeInSection;
