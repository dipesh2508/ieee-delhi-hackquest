import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { tracks } from "@/constants/tracks";
import Image from "next/image";

const Tracks = () => {
  return (
    <div className="flex w-full flex-col items-center px-5 py-12 font-primary text-white">
      <div className="px-5 py-10">
        <h1 className="text-headings pb-10 text-center text-5xl font-bold">
          Tracks
        </h1>
        <p className="text-center font-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          congue metus quis accumsan euismod. Maecenas sed est mollis, convallis
          nisi convallis, imperdiet massa.{" "}
        </p>
      </div>
      <div className="flex w-full flex-wrap justify-evenly md:flex-row">
        {tracks.map((item, index) => (
          <Card
            key={index}
            className=" border-0 my-5 w-[300px] bg-gradient-to-r from-zinc-800 via-black/90 to-zinc-800 backdrop-blur-xl py-5 text-white hover:border-headings hover:border-2"
          >
            <CardContent>
              <div className="hover:bg-secondary bg-inherit border border-headings w-fit p-2 relative rounded-[50px] bottom-12 left-24">
                <Image
                  src={item.icon}
                  width={40}
                  height={40}
                  alt="hello"
                  className=""
                />
              </div>
              <CardTitle className="text-center">{item.title}</CardTitle>
              <p className=" text-center pt-3 font-secondary font-light">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
