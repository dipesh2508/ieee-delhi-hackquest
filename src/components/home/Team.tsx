import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import Image from "next/image";
import { team } from "@/constants/team";

const Team = () => {
  return (
    <div className="flex flex-col items-center text-white">
      <div className="w-full pb-20 text-center">
        <h1 className="font-primary text-4xl font-semibold text-headings">
          Meet Our team
        </h1>
      </div>
      <div className="flex w-[90%] flex-wrap justify-center gap-y-8">
        {team.map((item, index) => (
          <Card
            key={index}
            className=" flex w-[300px] justify-center rounded-3xl bg-none opacity-90"
          >
            <CardContent className="relative transform overflow-hidden rounded py-0 shadow-lg transition duration-300 hover:shadow-2xl lg:hover:-translate-y-2">
              <img
                src={item.image}
                className="rounded-xl h-full"
                width="300"
                height="300"
                alt="team image"
              />
              <div className="ml-5 w-[260px] absolute inset-0 flex flex-col justify-center rounded-xl  hover:border-2 bg-black bg-opacity-75 px-5 text-center opacity-0 transition-opacity duration-300 hover:border-headings hover:opacity-100">
                <CardTitle>{item.position}</CardTitle>
                <CardDescription className="text-headings">{item.Name}</CardDescription>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="col-span-12 mb-8 mt-36 h-1 w-[82%] rounded-full bg-gradient-to-r from-primary to-secondary"></div>
    </div>
  );
};

export default Team;
