"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

export function HeroSection() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const images = ["/jumbo2.jpg", "/jumbo1.jpg", "/jumbo3.jpg", "/layot.jpg"];

  return (
    <div id="" className="relative">
      {/* Carousel */}
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-auto md:h-screen"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="bg-black">
                <img
                  src={image}
                  alt={`gambar ${index + 1}`}
                  className="w-full h-[50vh] md:h-[80vh] object-cover opacity-60"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Heading */}
        <div className="absolute top-[20%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-3xl md:text-6xl text-center">
          <h1>Welcome to Seren.id!</h1>
        </div>

        {/* Subheading */}
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-xl md:text-3xl text-center px-4 max-w-md md:max-w-3xl">
          <p>We are a brand that truly cares about your satisfaction</p>
        </div>
      </Carousel>

      {/* Section Informasi */}
      <div className="px-4 md:px-20 mt-10">
        <h2 className="text-center text-3xl md:text-4xl font-bold">
          Why Choose Serendipity?
        </h2>
        <p className="mt-4 text-center text-lg md:text-xl px-2 md:px-10">
          We use premium materials to provide maximum comfort. The quality of
          our products is unbeatable. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consectetur quod dolore mollitia quo. Cum incidunt
          inventore aperiam sit, voluptatibus debitis.
        </p>
      </div>
    </div>
  );
}
