import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

import { tracks } from "@/constants/tracks";
import Image from "next/image";

const Tracks = () => {
  return (
    <section
      id="tracks"
      className="flex w-full flex-col items-center px-5 py-12 font-primary text-white"
    >
      <div className="px-5 py-10 md:mb-8">
        <h2 className="pb-10 text-center text-5xl font-bold text-headings">
          Tracks
        </h2>
        <h3 className="text-center text-xl font-secondary">
          Dive into innovation across diverse tracks and challenges, navigating
          through HackQuest{"'"}s exhilarating journey.
        </h3>
      </div>
      <div className="flex w-full flex-wrap justify-evenly md:flex-row">
        {tracks.map((item, index) => (
          <Card
            key={index}
            className=" my-5 w-[300px] border-dark py-5 transition-colors delay-150 text-white backdrop-blur-xl border-2 hover:border-headings"
          >
            <CardContent>
              <div className="relative bottom-12 left-24 w-fit rounded-[50px] border transition-colors delay-150 border-headings bg-dark p-2 hover:bg-secondary">
                <Image
                  src={item.icon}
                  width={40}
                  height={40}
                  alt="hello"
                  className=""
                />
              </div>
              <CardTitle className="text-center">{item.title}</CardTitle>
              <p className=" pt-3 text-center font-secondary font-light">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Tracks;
