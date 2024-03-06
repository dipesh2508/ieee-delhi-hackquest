import Image from "next/image";
import Link from "next/link";
import { sm_handles, quicklinks } from "@/constants/footer";
import logo from "@/assets/hackquest logo.png";

const Bottom = () => {
  return (
    <footer className="flex flex-wrap justify-center sm:flex w-full sm:justify-between  bg-black px-[5.5vw] py-[8.5vh] text-white gap-4 sm:gap-0">
      <div className="flex flex-col w-96">
        <div className="grid grid-cols-12 gap-2 items-center">
        <img className=" col-span-4" src="https://raw.githubusercontent.com/dipesh2508/ieee-delhi-hackquest/main/public/SAC_Logo.png" alt="logo" />
        <div className="flex text-5xl pb-3 justify-center">
        &#124;
        </div>
        <Image src={logo} className="col-span-7" alt="HackQuest" loading="lazy" />
        </div>
        <div className="flex ml-1 gap-5">
          {sm_handles.map((item, index) => (
            <Link
            key={index}
            href={item.link}
            className="pt-4"
            >
            <Image
              src={item.image}
              width={30}
              height={30}
              alt="sm_handles"
            />
            </Link>
          ))}

            <p className="my-auto pt-4"> | © 2024 IEEE Delhi Section SAC</p>

        </div>
      </div>
      <div>
        <h2 className="text-lg font-medium">Quick Links</h2>
        {quicklinks.map((item, index) => (
          <Link
          key={index}
          href={item.link}
          >
          <p>{item.name}</p>
          </Link>
        ))}
      </div>
      <div>
        <h2 className="text-lg font-medium">Contact Us</h2>
        <div className="flex gap-2 py-2">
            <Image src="/social_media/mail.svg" width={20} height={20} alt="contacts" />
            <p className="text-sm text-wrap">hackquest24@gmail.com</p>
        </div>
        <div className="flex items-start gap-2">
            <Image src="/social_media/phone.svg" width={20} height={20} alt="contacts" />
            <div className="">
            <p className="text-sm">Ashmit: +91 8287652852,</p>
            <p className="text-sm pt-2">Prerna: +91 8595574384</p>
            </div>
        </div>

          
      </div> 
    </footer>
  );
};

export default Bottom;
