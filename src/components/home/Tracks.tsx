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
    <div className="flex w-full flex-col items-center px-5 py-12 font-primary text-white">
      <div className="px-5 py-10">
        <h1 className="pb-10 text-center text-5xl font-bold text-headings">
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
            className=" my-5 w-[300px] border-0 py-5 text-white backdrop-blur-xl hover:border-2 hover:border-headings"
          >
            <CardContent>
              <div className="relative bottom-12 left-24 w-fit rounded-[50px] border border-headings bg-inherit p-2 hover:bg-secondary">
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
    </div>
  );
};

export default Tracks;
