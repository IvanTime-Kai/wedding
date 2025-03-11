"use client";

import Image from "next/image";
import React from "react";

const Header = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = 100;

      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FBF8EF]">
      <div className="container mx-auto px-4 h-[100px]">
        <nav className="flex justify-between items-center h-full">
          <Image
            src="/tandh.svg"
            alt="Truong & Hien Wedding"
            width={128}
            height={32}
            priority
            loading="eager"
          />
          <div className="space-x-10">
            <a
              href="#detail"
              onClick={(e) => handleNavClick(e, "detail")}
              className="text-brown-800 font-montserrat font-extralight text-xl relative group"
            >
              Detail
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-brown-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#gallery"
              onClick={(e) => handleNavClick(e, "gallery")}
              className="text-brown-800 font-montserrat font-extralight text-xl relative group"
            >
              Gallery
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-brown-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#rsvp"
              onClick={(e) => handleNavClick(e, "rsvp")}
              className="text-brown-800 font-montserrat font-extralight text-xl relative group"
            >
              RSVP
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-brown-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
