"use client";

import Image from "next/image";
import React from "react";
import FadeInSection from "./FadeInSection";

const Invitation = () => {
  return (
    <section className="py-10 md:py-20 bg-[#f8f3ef]">
      <FadeInSection>
        <div className="container mx-auto px-6 md:px-4 text-center ">
          <div className="flex flex-col gap-4 md:gap-5 items-center">
            <div className="flex flex-col gap-4 md:gap-7 items-center justify-center">
              <div className="border md:border-[1.4px] border-brown-800 rounded-sm px-5 py-1 w-fit ">
                <p className="font-montserrat text-xs md:text-base font-semibold text-brown-800 leading-5">
                  Celebrate Love With Us
                </p>
              </div>
              <h2 className="font-bodoni text-[40px] font-bold text-brown-800 leading-[48px] hidden md:block">
                YOU ARE INVITED! BE PART
                <br />
                OF OUR LOVE STORY.
              </h2>
              <h2 className="font-bodoni text-2xl font-bold text-brown-800 leading-7 block md:hidden">
                YOU ARE INVITED!
                <br /> BE PART OF <br /> OUR LOVE STORY.
              </h2>
            </div>
            <div className="flex flex-col gap-4 md:gap-7 items-center justify-center">
              <p className="font-montserrat text-brown-600 text-sm md:text-base max-w-2xl mx-auto font-normal">
                Come join us for a magical day of love and celebration, as we
                are delighted to invite you to our wedding on April 25, 2025 - a
                moment of joy we want to share with you.
              </p>
              <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center">
                <div className="  w-full border md:border-[1.4px] border-brown-800 rounded-sm px-5 py-1 md:py-2 md:w-fit flex flex-row gap-2 items-center justify-center">
                  <Image
                    src="/history.svg"
                    alt="history"
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                  <p className="font-montserrat text-xs md:text-base font-medium text-brown-800 leading-5">
                    25 May, 2025 at 6 PM
                  </p>
                </div>
                <a
                  href="https://maps.app.goo.gl/Rd5TJSTQBJcJ6g437"
                  target="_blank"
                >
                  <div className="w-full border md:border-[1.4px] border-brown-800 rounded-sm px-5 py-1 md:py-2 md:w-fit flex flex-row gap-2 items-center justify-center ">
                    <Image
                      src="/location.svg"
                      alt="Location"
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                    <p className="font-montserrat text-xs md:text-base font-medium text-brown-800 leading-5">
                      Canton House Restaurant
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="flex md:grid grid-cols-3 gap-6 max-w-4xl mx-auto w-full mt-10 md:mt-[60px] overflow-hidden overflow-x-auto md:overflow-auto hide-scrollbar">
            {[
              "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741747740/wedding-1_mqzpk8.png",
              "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741747740/wedding-2_j4vjko.png",
              "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741747740/wedding-3_zwj5y8.png",
            ].map((image, index) => (
              <div
                key={index}
                className=" aspect-[2/3] md:aspect-[3/4] relative overflow-hidden cursor-pointer min-w-[120px]"
              >
                <Image
                  src={image}
                  alt={`Wedding Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Invitation;
