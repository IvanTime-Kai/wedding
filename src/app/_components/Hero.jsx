import React from "react";
import Image from "next/image";

export function Hero() {
  return (
    <section
      className="relative mt-[100px]"
      style={{
        height: "calc(100vh - 100px)",
      }}
    >
      <Image
        src="https://res.cloudinary.com/dhjjtwvws/image/upload/v1741746387/bg-hero_srbxfv.png"
        alt="Truong and Hien Wedding"
        fill
        className="object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 flex flex-col gap-7 items-center justify-center text-center text-white">
        <div className="border-[1.4px] border-white rounded-sm px-8 py-1">
          <p className="font-montserrat text-base font-semibold">
            Witness The Start of Our Forever
          </p>
        </div>
        <h1 className="font-bodoni text-6xl font-bold">TRUONG & HIEN</h1>
        <p className="font-montserrat text-xl max-w-3xl mx-auto font-normal">
          Two hearts, one love, and endless possibilities. We invite you to
          share in our joy as we celebrate the beginning of our new life
          together.
        </p>
        <div className="flex flex-row gap-6 items-center">
          <button className="px-8 py-2 border-[1.4px] border-white font-montserrat hover:bg-white hover:text-brown-800 transition-colors rounded-sm text-base font-medium">
            RSVP
          </button>
          <button className="px-8 py-2 border-[1.4px] border-white font-montserrat hover:bg-white hover:text-brown-800 transition-colors rounded-sm text-base font-medium">
            DETAIL
          </button>
        </div>
      </div>
    </section>
  );
}
