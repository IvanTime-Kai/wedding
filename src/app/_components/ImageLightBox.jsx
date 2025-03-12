"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) {
  const [loaded, setLoaded] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
      } else if (e.key === "ArrowRight") {
        onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setAnimationClass("animate-in fade-in zoom-in-95 duration-300");
    } else {
      document.body.style.overflow = "";
      setAnimationClass("animate-out fade-out zoom-out-95 duration-300");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Reset loaded state when changing images
  useEffect(() => {
    setLoaded(false);
  }, [currentIndex]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/90 flex items-center justify-center ${animationClass}`}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors z-10"
        aria-label="Close lightbox"
      >
        <Image width={24} height={24} src="/close.svg" alt="close" />
      </button>

      {/* Navigation buttons */}
      <button
        onClick={() =>
          onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1)
        }
        className="absolute left-4 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors z-10"
        aria-label="Previous image"
      >
        <Image width={24} height={24} src="/caret-left.svg" alt="left" />
      </button>

      <button
        onClick={() =>
          onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0)
        }
        className="absolute right-4 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors z-10"
        aria-label="Next image"
      >
        <Image width={24} height={24} src="/caret-right.svg" alt="right" />
      </button>

      {/* Image container */}
      <div className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center p-4">
        <div
          className={`relative w-full h-full transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={images[currentIndex]}
            fill
            className="object-contain"
            onLoad={() => setLoaded(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            priority
          />
        </div>

        {/* Image counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
