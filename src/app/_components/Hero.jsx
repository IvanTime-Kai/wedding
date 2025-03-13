import React from "react";
import Image from "next/image";

export function Hero() {
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
    <section className="relative mt-[72px] md:mt-[100px] h-[calc(100%-72px)] md:h-[calc(100vh-100px)]">
      <div className="relative aspect-[2/3] md:aspect-auto md:size-full">
        <Image
          src="https://res.cloudinary.com/dhjjtwvws/image/upload/v1741747757/bg-hero_qjjo70.png"
          alt="Truong and Hien Wedding"
          fill
          className="object-cover"
          loading="eager"
        />
      </div>

      <div className="absolute inset-0 flex flex-col gap-5 md:gap-10 items-center justify-center text-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[350px]">
        <div className="flex flex-col gap-4 md:gap-7 items-center justify-center">
          <div className="border md:border-[1.4px] border-white rounded-sm px-5 md:px-8 py-1">
            <p className="font-montserrat text-xs md:text-base font-semibold whitespace-nowrap">
              Witness The Start of Our Forever
            </p>
          </div>
          <h1 className="font-bodoni text-[32px] md:text-6xl font-bold whitespace-nowrap">
            TRUONG & HIEN
          </h1>
        </div>
        <div className="flex flex-col gap-4 md:gap-7 items-center justify-center">
          <p className="font-montserrat text-sm md:text-xl max-w-3xl mx-auto font-normal">
            Two hearts, one love, and endless possibilities. We invite you to
            share in our joy as we celebrate the beginning of our new life
            together.
          </p>
          <div className="flex flex-row gap-6 items-center">
            <button
              className="px-5 md:px-8 py-2 border-[1.4px] border-white font-montserrat hover:bg-white hover:text-brown-800 transition-colors rounded-sm text-xs md:text-base font-medium"
              onClick={(e) => handleNavClick(e, "rsvp")}
            >
              RSVP
            </button>
            <button
              className="px-5 md:px-8 py-2 border-[1.4px] border-white font-montserrat hover:bg-white hover:text-brown-800 transition-colors rounded-sm text-xs md:text-base font-medium"
              onClick={(e) => handleNavClick(e, "detail")}
            >
              DETAIL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
