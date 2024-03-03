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

const Community = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );
  return (
    <section className="flex w-full flex-col items-center px-12 md:px-36 font-primary text-white">
      <div className="p-5 text-center">
        <h2 className="text-headings pb-5 text-5xl font-bold">Our Community Partners</h2>
        <p>Announcing Soon...</p>
      </div>
      <div className="col-span-12 mb-16 mt-36 h-1 w-full rounded-full bg-gradient-to-r from-primary to-secondary"></div>
      {/* <Carousel
        plugins={[plugin.current]}
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
                    
                    <h2 className="text-white">{item.title}</h2>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-8" variant="default" />
        <CarouselNext className="mr-10" variant="default" />
      </Carousel> */}
    </section>
  );
};

export default Community;
