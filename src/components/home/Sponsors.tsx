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
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/Card";
import Image from 'next/image'
import IEEED from '@/assets/sponsors/SAC_Logo.png'


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

      <Card>
        <CardContent className="flex justify-center items-center p-6 flex-col w-[360px] py-20 h-[400px] gap-0">
          <Image src={IEEED} alt="ieee delhi sac" />
          <CardContent className="text-white mt-6 font-extralight text-xl font-primary text-center">IEEE Delhi Section Students Activities Committee</CardContent>
          <CardDescription className="text-lg">Title Sponsor</CardDescription>
        </CardContent>
      </Card>
      {/* <div 
      className="grid grid-cols-3 gap-8 w-full"
      >
        {sponsors.map((items, index) =>{
          return (
            <div key={index} className="flex justify-center items-center">
              <Card>
        <CardContent className="flex justify-center items-center p-6 flex-col w-[360px] py-20 h-[600px] gap-0">
          <Image src={items.image} alt="ieee delhi sac" />
          <CardContent className="text-white mt-6 font-extralight text-xl font-primary text-center">{items.name}</CardContent>
          <CardDescription className="text-lg">{items.title}</CardDescription>
        </CardContent>
      </Card>
            </div>
          )
        })}
      </div> */}

      <div className="col-span-12 mt-36 h-1 w-full rounded-full bg-gradient-to-r from-secondary to-primary"></div>
    </section>
  );
};

export default Sponsors;
