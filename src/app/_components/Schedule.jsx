import Image from "next/image";
import FadeInSection from "./FadeInSection";

const scheduleItems = [
  {
    time: "6:00 PM",
    title: "Welcome",
    src: "/icon-1.svg",
  },
  {
    time: "6:30 PM",
    title: "Ceremony",
    src: "/icon-2.svg",
  },
  {
    time: "7:00 PM",
    title: "Dinner",
    src: "/icon-3.svg",
  },
  {
    time: "8:00 PM",
    title: "Party",
    src: "/icon-4.svg",
  },
];

export function Schedule() {
  return (
    <section id="detail" className="py-10 md:py-20 bg-[#FBF8EF]">
      <FadeInSection>
        <div className="container mx-auto px-6 md:px-4 flex flex-col md:grid grid-cols-12 gap-5 md:gap-8">
          <div className="flex flex-col gap-[60px] items-center col-span-12 md:col-span-8">
            <div className="flex flex-col items-center justify-center gap-4 md:gap-7">
              <div className="border-[1.4px] border-brown-800 rounded-sm px-5 py-[3px] w-fit ">
                <p className="font-montserrat test-xs md:text-base font-semibold text-brown-800 leading-5">
                  Wedding Details
                </p>
              </div>
              <h2 className="text-center font-bodoni text-2xl md:text-[40px] font-bold text-brown-800 leading-7 md:leading-[48px]">
                Wedding Day Schedule
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-4 md:gap-20 max-w-4xl mx-auto">
                {scheduleItems.map((item, i) => (
                  <div key={i} className="text-center">
                    <div className=" mx-auto flex items-center justify-center mb-2">
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={48}
                        height={48}
                        loading="lazy"
                      />
                    </div>
                    <div className="font-bodoni font-bold text-sm md:text-xl text-brown-800 leading-5 mb-1 md:mb-2">
                      {item.time}
                    </div>
                    <div className="font-montserrat text-sm md:text-base font-normal text-brown-600 leading-5">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 md:gap-7">
              <h2 className="text-center font-bodoni text-2xl md:text-[40px] font-bold text-brown-800 leading-7 md:leading-[48px]">
                Dresscode
              </h2>
              <p className="font-montserrat text-brown-800 max-w-2xl text-sm md:text-base font-normal mx-auto text-center">
                We kindly encourage our guests to wear these colours on our
                special day. The dress code is formal, and we kindly request
                guests refrain from wearing white. Your presence in beautiful
                attire will make our special day even more magical.
              </p>
              <div className="flex flex-row gap-6 items-center">
                <div className="size-[36px] md:size-[50px] rounded-full bg-[#F5D9BB]"></div>
                <div className="size-[36px] md:size-[50px] rounded-full bg-[#000000]"></div>
              </div>
            </div>
          </div>
          <div className="aspect-[3/4] col-span-12 md:col-span-4 md:max-w-[388px] relative overflow-hidden cursor-pointer">
            <Image
              src="https://res.cloudinary.com/dhjjtwvws/image/upload/v1741747755/4_vbwrvc.png"
              alt="Wedding moments"
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
