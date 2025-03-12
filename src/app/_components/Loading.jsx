"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CustomHeart from "./CustomHeart";

export default function Loading({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 35);

    setHearts(
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 4,
        rotation: Math.random() * 360,
      })),
    );

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onFinish, 1000);
    }, 3500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FBF8EF] overflow-hidden transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-brown-800 opacity-20 animate-float-heart"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            transform: `scale(${heart.size}) rotate(${heart.rotation}deg)`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          <CustomHeart fill="#8a6d55" size={32} stroke="none" />
        </div>
      ))}

      <div className="relative w-32 h-32 mb-8 animate-gentle-shake">
        <Image
          src="/tandh.svg"
          alt="Truong & Hien"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Lời chào */}
      <div className="text-center mb-8 relative z-10">
        <h1 className="font-bodoni font-bold text-[40px] leading-[48px] text-brown-800 text-3xl mb-2">
          Truong & Hien
        </h1>
        <p className="font-montserrat text-brown-800 text-sm">
          We&apos;re excited to celebrate with you
        </p>
      </div>

      {/* Thanh Loading */}
      <div className="relative w-40 h-1 bg-[#e9e2d8] rounded-full z-10">
        <div
          className="absolute top-0 left-0 h-full bg-brown-800 rounded-full transition-all ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="font-montserrat text-brown-800 text-xs mt-2 animate-pulse z-10">
        {progress < 30
          ? "Gathering memories..."
          : progress < 60
            ? "Preparing our love story..."
            : "Almost ready..."}{" "}
        {progress}%
      </p>
    </div>
  );
}
