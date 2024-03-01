import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/Card";
import Image from "next/image";
import { team, Sac } from "@/constants/team";
import Link from "next/link";
import { Button } from "../ui/button";

const Team = () => {
  return (
    <div className="flex flex-col items-center text-white">
      <div>
        <h1 className="mt-6 font-primary text-3xl font-semibold text-headings md:text-5xl">
          IEEE DELHI SECTION SAC TEAM
        </h1>
      </div>
      <div className="pt-12">
        <Card className=" flex w-[300px] justify-center rounded-3xl bg-none opacity-90">
          <CardContent className="relative transform overflow-hidden rounded py-0 shadow-lg transition duration-300 hover:shadow-2xl lg:hover:-translate-y-2">
            <img
              src="https://raw.githubusercontent.com/dipesh2508/ieee-delhi-hackquest/main/public/team/rachna_maam2.jpg"
              className="h-full rounded-xl"
              width="300"
              height="300"
              alt="rachna"
            />
            <div className="absolute inset-0 ml-5 flex w-[260px] flex-col justify-center rounded-xl  bg-black bg-opacity-75 px-5 text-center opacity-0 transition-opacity duration-300 hover:border-2 hover:border-headings hover:opacity-100">
              <CardTitle>Prof. Rachana Garg</CardTitle>
              <CardDescription className="text-headings">
                SAC Chair
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex w-[90%] flex-wrap justify-center gap-y-8 py-16">
        {Sac.map((item, index) => (
          <Card
            key={index}
            className=" flex w-[300px] justify-center rounded-3xl bg-none opacity-90"
          >
            <CardContent className="relative transform overflow-hidden rounded py-0 shadow-lg transition duration-300 hover:shadow-2xl lg:hover:-translate-y-2">
              <img
                src={item.image}
                className="h-full rounded-xl"
                width="300"
                height="300"
                alt={item.Name}
              />
              <div className="absolute inset-0 ml-5 flex w-[260px] flex-col justify-center rounded-xl  bg-black bg-opacity-75 px-5 text-center opacity-0 transition-opacity duration-300 hover:border-2 hover:border-headings hover:opacity-100">
                <CardTitle>{item.Name}</CardTitle>
                <CardDescription className="text-headings">
                  {item.position}
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Link href="/team">
        <Button className="block md:hidden">Know Our Team</Button>
      </Link>
      <div className="-mt-28 w-full  pb-20 text-center md:mt-16">
        <h1 className="hidden font-primary text-3xl font-semibold text-headings md:block md:text-5xl">
          MEET OUR SECTION STUDENT NETWORK TEAM
        </h1>
      </div>
      <div className="hidden w-[90%] flex-wrap justify-center gap-y-8 md:visible md:flex">
        {team.map((item, index) => (
          <Link href={item.link} key={index}>
            <Card className=" flex w-[300px] justify-center rounded-3xl bg-none opacity-90">
              <CardContent className="relative transform overflow-hidden rounded py-0 shadow-lg transition duration-300 hover:shadow-2xl lg:hover:-translate-y-2">
                <img
                  src={item.image}
                  className="h-full rounded-xl"
                  width="300"
                  height="300"
                  alt={item.Name}
                  loading="lazy"
                />
                <div className="absolute inset-0 ml-5 flex w-[260px] flex-col justify-center rounded-xl  bg-black bg-opacity-75 px-5 text-center opacity-0 transition-opacity duration-300 hover:border-2 hover:border-headings hover:opacity-100">
                  <CardTitle>{item.Name}</CardTitle>
                  <CardDescription className="text-headings">
                    {item.position}
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <div className="col-span-12 mb-8 mt-36 h-1 w-[82%] rounded-full bg-gradient-to-r from-primary to-secondary"></div>
    </div>
  );
};

export default Team;
