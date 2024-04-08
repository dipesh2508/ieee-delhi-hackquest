"use client";

import * as React from "react";
import { community } from "@/constants/community";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardTitle } from "@/components/ui/Card";
import Image from "next/image";

const Community = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );
  return (
    <section className="flex w-full flex-col items-center px-12 font-primary text-white md:px-36">
      <div className="p-5 text-center">
        <h2 className="pb-5 text-3xl font-bold text-headings md:text-6xl">
          OUR COMMUNITY PARTNERS
        </h2>
        {/* <p>Announcing Soon...</p> */}
      </div>

      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "center",
        }}
        className="w-full mt-8"
      >
        <CarouselContent>
          {community.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/5 lg:basis-1/5">
              <div className="flex justify-center items-center mx-auto">
                <Card className=" border-0 hover:border-headings h-72 hover:border-2 overflow-hidden mx-auto">
                  <CardContent className="flex flex-col aspect-square mx-auto items-center h-56 justify-center p-4 py-8">
                    <Image src={item.image} alt={item.title} className="mx-auto" />
                  </CardContent>
                  <CardTitle className="text-center text-md font-bold px-4 pb-3 h-fit">
                    {item.title}
                  </CardTitle>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-8" variant="default" />
        <CarouselNext className="mr-10" variant="default" />
      </Carousel>

      <div className="col-span-12 mb-16 mt-36 h-1 w-full mx-4 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
    </section>
  );
};

export default Community;
