"use client";

import Image from "next/image";
import React from "react";
import FadeInSection from "./FadeInSection";

const Invitation = () => {
  return (
    <section className="py-20 bg-[#f8f3ef]">
      <FadeInSection>
        <div className="container mx-auto px-4 text-center ">
          <div className="flex flex-col gap-6 items-center">
            <div className="border-[1.4px] border-brown-800 rounded-sm px-5 py-1 w-fit ">
              <p className="font-montserrat text-base font-semibold text-brown-800 leading-5">
                Celebrate Love With Us
              </p>
            </div>
            <h2 className="font-bodoni text-[40px] font-bold text-brown-800 leading-[48px]">
              YOU ARE INVITED! BE PART
              <br />
              OF OUR LOVE STORY.
            </h2>
            <p className="font-montserrat text-brown-600 max-w-2xl mx-auto font-normal">
              Come join us for a magical day of love and celebration, as we are
              delighted to invite you to our wedding on April 25, 2025 - a
              moment of joy we want to share with you.
            </p>
            <div className="flex flex-row gap-6 items-center">
              <div className="border-[1.4px] border-brown-800 rounded-sm px-5 py-2 w-fit flex flex-row gap-2 items-center ">
                <Image
                  src="/history.svg"
                  alt="history"
                  width={20}
                  height={20}
                  loading="lazy"
                />
                <p className="font-montserrat text-base font-medium text-brown-800 leading-5">
                  25 May, 2025 at 6 PM
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/s9xgztZ8ihVc8MKv8"
                target="_blank"
              >
                <div className="border-[1.4px] border-brown-800 rounded-sm px-5 py-2 w-fit flex flex-row gap-2 items-center ">
                  <Image
                    src="/location.svg"
                    alt="Location"
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                  <p className="font-montserrat text-base font-medium text-brown-800 leading-5">
                    Canton House Restaurant
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto w-full mt-[60px]">
            {[
              "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741747740/wedding-1_mqzpk8.png",
              "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741747740/wedding-2_j4vjko.png",
              "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741747740/wedding-3_zwj5y8.png",
            ].map((image, index) => (
              <div
                key={index}
                className="aspect-[3/4] relative overflow-hidden cursor-pointer"
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
