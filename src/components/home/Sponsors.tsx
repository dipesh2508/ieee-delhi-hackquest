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
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/Card";
import Image from "next/image";
import IEEED from "@/assets/sponsors/SAC_Logo.png";

const Sponsors = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );
  return (
    <section className="flex w-full flex-col items-center px-12 py-36 font-primary text-white md:px-36">
      <div className="p-5 text-center">
        <h2 className="pb-5 text-3xl font-bold text-headings md:text-6xl">
          OUR SPONSORS
        </h2>
      </div>

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

      <Card className="opacity-90 mt-8">
        <CardContent className="flex h-[400px] w-[360px] flex-col items-center justify-center gap-0 p-6 py-20">
          <Image src={IEEED} alt="ieee delhi sac" />
          <CardContent className="mt-6 text-center font-primary text-xl font-extralight text-white">
            IEEE Delhi Section Students Activities Committee
          </CardContent>
          <CardDescription className="text-lg">Title Sponsor</CardDescription>
        </CardContent>
      </Card>
      <Card className="grid w-[360px] md:w-full md:grid-cols-4 md:gap-12 px-16 mt-12 opacity-90">
        {sponsors.map((items, index) => {
          return (
            <div key={index} className="flex items-center justify-center">
              <CardContent className="flex flex-col items-center justify-center gap-0 p-6 py-8 md:py-20">
                <div className="h-48 flex items-center justify-center">

                <Image src={items.image} alt="ieee delhi sac" />
                </div>
                <CardContent className="mt-6 text-center font-primary text-xl font-extralight text-white">
                  {items.name}
                </CardContent>
                <CardDescription className="text-lg">
                  {items.title}
                </CardDescription>
              </CardContent>
            </div>
          );
        })}
      </Card>

      <div className="col-span-12 mt-36 h-1 w-full rounded-full bg-gradient-to-r from-secondary to-primary"></div>
    </section>
  );
};

export default Sponsors;
