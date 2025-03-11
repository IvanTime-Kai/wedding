"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ImageLightbox } from "./ImageLightBox";
import useEmblaCarousel from "embla-carousel-react";
import FadeInSection from "./FadeInSection";

const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  src: `/${i + 1}.png`,
  alt: `Gallery Image ${i + 1}`,
}));

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

  return (
    <section id="gallery" className="relative min-h-screen py-20">
      <Image
        src="/bg-gallery.png"
        alt="Truong and Hien Wedding"
        fill
        className="object-fill"
        priority
      />

      <div className="absolute inset-0 flex flex-col gap-7 items-center justify-center text-center text-white ">
        <FadeInSection>
          <div className="container mx-auto px-4 flex flex-col items-center gap-[60px]">
            <div className="text-center flex flex-col gap-7 items-center">
              <div className="border-[1.4px] border-brown-800 rounded-sm px-5 py-[3px] w-fit ">
                <p className="font-montserrat text-base font-light text-brown-800 leading-5">
                  Celebrate Love With Us
                </p>
              </div>
              <h2 className="font-bodoni text-[40px] leading-[48px] font-bold text-brown-800 ">
                Relive the Joyous Chapters
                <br />
                of Our Journey
              </h2>
              <p className="font-montserrat text-brown-800 mx-auto text-base font-light leading-[20px]">
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
                        <div className="grid grid-cols-3 grid-rows-2 gap-6">
                          {galleryImages
                            .slice(index * 6, index * 6 + 6)
                            .map((image, imgIndex) => (
                              <div
                                key={imgIndex}
                                className="relative aspect-[3/2] overflow-hidden rounded-md cursor-pointer"
                                onClick={() =>
                                  openLightbox(index * 6 + imgIndex)
                                }
                              >
                                <Image
                                  src={image.src || "/placeholder.svg"}
                                  alt={image.alt}
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
