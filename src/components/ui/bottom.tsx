import Image from "next/image";
import Link from "next/link";
import { sm_handles, quicklinks } from "@/constants/footer";
import logo from "@/assets/hackquest logo.png";

const Bottom = () => {
  return (
    <footer className="grid grid-cols-2 md:grid-cols-12 justify-center items-center content-center md:gap-24 bg-black px-[5.5vw] py-[8.5vh] text-white">
      <div className="col-span-2 md:col-span-4 flex flex-col mb-6 md:mb-0">
        <div className="grid grid-cols-12 items-center gap-2">
          <img
            className=" col-span-4"
            src="https://raw.githubusercontent.com/dipesh2508/ieee-delhi-hackquest/main/public/SAC_Logo.png"
            alt="logo"
          />
          <div className="flex justify-center pb-3 text-5xl">&#124;</div>
          <Image
            src={logo}
            className="col-span-7"
            alt="HackQuest"
            loading="lazy"
          />
        </div>
        <div className="ml-1 flex gap-5">
          {sm_handles.map((item, index) => (
            <Link key={index} href={item.link} className="pt-4">
              <Image src={item.image} width={30} height={30} alt="sm_handles" />
            </Link>
          ))}

          <p className="my-auto pt-4"> | © 2024 IEEE Delhi Section SAC</p>
        </div>
      </div>
      {/* <div className="col-span-2 md:col-span-5 flex flex-row gap-8">
        <div className="h-48 w-1 bg-white text-white md:mr-12" />
        <div className="flex flex-row gap-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.989858969839!2d75.58589332459256!3d28.359214999557842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39131964f43e4575%3A0x1fbad30854cf884d!2sBirla%20Institute%20of%20Technology%20And%20Science%E2%80%93Pilani%20(BITS%E2%80%93Pilani)!5e0!3m2!1sen!2sin!4v1709992319161!5m2!1sen!2sin"
            height={"200px"}
            loading="lazy"
          ></iframe>
          <div className="flex flex-col flex-wrap gap-4">
            <h3 className="text-base md:text-lg">Venue:</h3>
            <p className="text-sm md:text-base">
              BITS Pilani, Pilani Campus Vidya Vihar, Pilani - 333031, Rajasthan,
              India{" "}
            </p>
          </div>
        </div>
      </div> */}
      <div className="col-span-1 md:col-span-5 items-end">
        <h2 className="text-lg font-semibold text-center">Quick Links</h2>
        {quicklinks.map((item, index) => (
          <Link
          key={index}
          href={item.link}
          >
          <p className="text-center font-thin">{item.name}</p>
          </Link>
        ))}
      </div>
      <div className="col-span-1 md:col-span-3">
        <h2 className="text-lg font-medium">Contact Us</h2>
        <div className="flex flex-wrap gap-2 py-2">
          <Image
            src="/social_media/mail.svg"
            width={20}
            height={20}
            alt="contacts"
          />
          <p className="text-wrap text-sm">hackquest24@gmail.com</p>
        </div>
        <div className="flex items-start gap-2">
          <Image
            src="/social_media/phone.svg"
            width={20}
            height={20}
            alt="contacts"
          />
          <div className="">
            <p className="text-sm">Ashmit: +91 8287652852,</p>
            <p className="pt-2 text-sm">Prerna: +91 8595574384</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Bottom;
