import Image from "next/image";
import FadeInSection from "./FadeInSection";

const scheduleItems = [
  {
    time: "3:00 PM",
    title: "Welcome",
    src: "/icon-1.svg",
  },
  {
    time: "3:30 PM",
    title: "Ceremony",
    src: "/icon-2.svg",
  },
  {
    time: "5:00 PM",
    title: "Dinner",
    src: "/icon-3.svg",
  },
  {
    time: "7:00 PM",
    title: "Party",
    src: "/icon-4.svg",
  },
];

export function Schedule() {
  return (
    <section id="detail" className="py-20 bg-[#FBF8EF]">
      <FadeInSection>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="flex flex-col gap-[60px] items-center col-span-8">
            <div className="flex flex-col items-center justify-center gap-7">
              <div className="border-[1.4px] border-brown-800 rounded-sm px-5 py-[3px] w-fit ">
                <p className="font-montserrat text-base font-light text-brown-800 leading-5">
                  Wedding Details
                </p>
              </div>
              <h2 className="text-center font-bodoni text-[40px] font-bold text-brown-800 leading-[48px]">
                Wedding Day Schedule
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-20 max-w-4xl mx-auto">
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
                    <div className="font-playfair text-xl text-brown-800 leading-5 mb-2">
                      {item.time}
                    </div>
                    <div className="font-montserrat text-brown-600 leading-5">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-7">
              <h2 className="text-center font-bodoni text-[40px] font-bold text-brown-800 leading-[48px]">
                Dresscode
              </h2>
              <p className="font-montserrat text-brown-600 max-w-2xl text-base font-light mx-auto text-center">
                We kindly encourage our guests to wear these colours on our
                special day. The dress code is formal, and we kindly request
                guests refrain from wearing white. Your presence in beautiful
                attire will make our special day even more magical.
              </p>
              <div className="flex flex-row gap-6 items-center">
                <div className="size-[50px] rounded-full bg-[#F5D9BB]"></div>
                <div className="size-[50px] rounded-full bg-[#000000]"></div>
              </div>
            </div>
          </div>
          <div className="aspect-[3/4] col-span-4 max-w-[388px] relative overflow-hidden rounded-lg cursor-pointer">
            <Image
              src="/wedding-4.png"
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
