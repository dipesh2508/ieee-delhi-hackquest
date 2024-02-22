import Image from "next/image";
import React from "react";
import { Button } from "./button";

const Bottom = () => {
  const sm_handles = [
    "/social_media/insta.svg",
    "/social_media/FB.svg",
    "/social_media/twitter.svg",
  ];

  const contact_details = [
    ["/social_media/mail.svg", "example@example.com"],
    ["/social_media/phone.svg", "+91 9999888888"],
  ];
  return (
    <div className="flex flex-wrap justify-center sm:flex w-full sm:justify-between  bg-black px-[5.5vw] py-[8.5vh] text-white gap-4 sm:gap-0">
      <div className="flex flex-col">
        <Image src="/logo.png" width={200} height={150} alt="logo" />
        <div className="flex gap-5 pl-8">
          {sm_handles.map((item) => (
            <Image
              key={item}
              src={item}
              width={30}
              height={30}
              alt="sm_handles"
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-lg font-medium">Quick Links</h2>
        <p>About</p>
        <p>Register</p>
      </div>
      <div>
        <h2 className="text-lg font-medium">Contact Us</h2>
        {contact_details.map((item, index) => (
          <div key={index} className="flex gap-2 py-1">
            <Image src={item[0]} width={20} height={20} alt="contacts" />
            <p className="text-sm">{item[1]}</p>
          </div>
        ))}
      </div> 
    </div>
  );
};

export default Bottom;
