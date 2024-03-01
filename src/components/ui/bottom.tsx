import Image from "next/image";
import Link from "next/link";
import { sm_handles, quicklinks } from "@/constants/footer";

const Bottom = () => {
  return (
    <footer className="flex flex-wrap justify-center sm:flex w-full sm:justify-between  bg-black px-[5.5vw] py-[8.5vh] text-white gap-4 sm:gap-0">
      <div className="flex flex-col">
        <Image src="/logo.png" width={200} height={150} alt="logo" />
        <div className="flex gap-5 pl-8">
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
