"use client";

import * as React from "react";
import { sponsors } from "@/constants/sponsor";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardTitle } from "@/components/ui/Card";

const Sponsors = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );
  return (
    <section className="flex w-full flex-col items-center px-5 py-12 font-primary text-white">
      <div className="p-5 text-center">
        <h1 className="text-headings pb-5 text-5xl font-bold">Our Sponsors</h1>
        <p>tagline for sponsors</p>
      </div>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "center",
        }}
        className="w-full"
      >
        <CarouselContent>
          {sponsors.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-4 flex justify-center">
                <Card className=" border-0 hover:border-headings w-[350px]  hover:border-2">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    
                    <h1 className="text-white">{item.title}</h1>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-8" variant="default" />
        <CarouselNext className="mr-10" variant="default" />
      </Carousel>
    </section>
  );
};

export default Sponsors;
