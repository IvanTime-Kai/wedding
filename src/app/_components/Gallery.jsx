"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ImageLightbox } from "./ImageLightBox";
import useEmblaCarousel from "embla-carousel-react";
import FadeInSection from "./FadeInSection";

const galleryImages = [
  "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741757231/18_tkyzj0.png",
  "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741757231/17_qa7mrh.png",
  "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741757231/14_fpihj5.png",
  "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741757231/16_koozgt.png",
  "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741757231/15_ptqwoc.png",
  "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741757231/13_ngkyrw.png",
  "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741747756/6_sgx5ai.png",
  "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741747755/5_mzw19q.png",
  "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741747754/1_avasqa.png",
  "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741747755/4_vbwrvc.png",
  "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741747755/3_oc3gqg.png",
  "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741747754/2_u6u27v.png",
  "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741747756/12_vsdqdz.png",
  "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741747756/11_qfrr7k.png",
  "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741747756/7_kzbv4t.png",
  "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741747756/10_btwhj8.png",
  "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741747756/9_fmc3iw.png",
  "https://res.cloudinary.com/dhjjtwvws/image/upload/v1741747756/8_z30cv2.png",
];

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Embla Carousel Config
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    setTotalSlides(emblaApi.scrollSnapList().length);
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const interval = setInterval(autoplay, 2000);
    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <section
      id="gallery"
      className="relative h-[calc(100vh+100px)] py-10 md:min-h-screen md:py-20"
    >
      <Image
        src="https://res.cloudinary.com/dhjjtwvws/image/upload/v1741747757/bg-gallery_uqth9i.png"
        alt="Truong and Hien Wedding"
        fill
        className="object-cover hidden md:block"
        priority
      />

      <Image
        src="https://res.cloudinary.com/dhjjtwvws/image/upload/v1741879335/bg-mobile_tc03sd.png"
        alt="Truong and Hien Wedding"
        fill
        className="object-cover block md:hidden"
        priority
      />

      <div className="absolute inset-0 flex flex-col gap-7 items-center justify-center text-center text-white ">
        <FadeInSection>
          <div className="container mx-auto px-6 md:px-4 flex flex-col items-center gap-10">
            <div className="text-center flex flex-col gap-7 items-center">
              <div className="border md:border-[1.4px] border-brown-800 rounded-sm px-5 py-[3px] w-fit ">
                <p className="font-montserrat text-xs md:text-base font-semibold text-brown-800 leading-5">
                  Our Precious Moments
                </p>
              </div>
              <h2 className="font-bodoni text-2xl md:text-[40px] leading-7 md:leading-[48px] font-bold text-brown-800 ">
                Relive the Joyous Chapters
                <br />
                of Our Journey
              </h2>
              <p className="font-montserrat text-brown-800 mx-auto text-sm md:text-base font-normal leading-[20px]">
                Discover the cherished memories and highlights from our
                unforgettable moments together.
              </p>
            </div>

            {/* Carousel Section */}
            <div className="relative max-w-5xl w-full">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {Array.from(
                    { length: Math.ceil(galleryImages.length / 6) },
                    (_, index) => (
                      <div key={index} className="flex-[0_0_100%]">
                        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-6">
                          {galleryImages
                            .slice(index * 6, index * 6 + 6)
                            .map((image, imgIndex) => (
                              <div
                                key={imgIndex}
                                className="relative aspect-[3/2] overflow-hidden cursor-pointer"
                                onClick={() =>
                                  openLightbox(index * 6 + imgIndex)
                                }
                              >
                                <Image
                                  src={image || "/placeholder.svg"}
                                  alt={`Image ${imgIndex + 1}`}
                                  fill
                                  className="object-cover transition-transform duration-500 hover:scale-110"
                                  loading="lazy"
                                />
                              </div>
                            ))}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === selectedIndex ? "bg-brown-800" : "bg-brown-500"
                    } transition-all`}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Image Lightbox */}
        <ImageLightbox
          images={galleryImages}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          onNavigate={setCurrentImageIndex}
        />
      </div>
    </section>
  );
}
