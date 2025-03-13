"use client";

import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FBF8EF]">
      <div className="container mx-auto px-4 h-[72px] md:h-[100px] max-w-screen-xl">
        <nav className="flex justify-between items-center h-full">
          <div className="relative w-[70px] h-[40px] md:w-[128px] md:h-[70px]">
            <Image
              src="/tandh.svg"
              alt="Truong & Hien Wedding"
              fill
              priority
              loading="eager"
            />
          </div>

          {/* Hamburger button */}
          <button
            className="md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <span
                className={`block w-6 h-[2px] bg-brown-800 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-[2px] bg-brown-800 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-[2px] bg-brown-800 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              ></span>
            </div>
          </button>
          <div
            className={`fixed inset-0 bg-black transition-opacity duration-300  mt-[72px] md:mt-[100px] md:hidden ${
              isMenuOpen
                ? "opacity-50 delay-0"
                : "opacity-0 delay-500 pointer-events-none"
            }`}
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div
            className={`fixed top-[72px] md:top-[100px] left-0 right-0 bg-[#FBF8EF] transition-all duration-500 ease-linear md:static md:bg-transparent md:p-0 md:flex md:flex-row md:space-x-10 md:space-y-0 z-40 ${
              isMenuOpen
                ? "max-h-64"
                : "max-h-0 overflow-hidden md:max-h-fit md:overflow-auto"
            }`}
          >
            <div className="flex flex-col space-y-4 p-4 md:flex-row md:space-y-0 md:space-x-10 md:p-0">
              <a
                href="#detail"
                onClick={(e) => handleNavClick(e, "detail")}
                className="text-brown-800 font-montserrat font-normal text-xl relative group"
              >
                Detail
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-brown-800 transition-all duration-300 group-hover:w-full md:block hidden"></span>
              </a>
              <a
                href="#gallery"
                onClick={(e) => handleNavClick(e, "gallery")}
                className="text-brown-800 font-montserrat font-normal text-xl relative group"
              >
                Gallery
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-brown-800 transition-all duration-300 group-hover:w-full md:block hidden"></span>
              </a>
              <a
                href="#rsvp"
                onClick={(e) => handleNavClick(e, "rsvp")}
                className="text-brown-800 font-montserrat font-normal text-xl relative group"
              >
                RSVP
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-brown-800 transition-all duration-300 group-hover:w-full md:block hidden"></span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
