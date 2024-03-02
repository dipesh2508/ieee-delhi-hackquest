import { Button } from "../ui/button";
import Image from "next/image";
import About1 from '@/assets/About1.gif'
import About2 from "@/assets/About2.jpg";
import Link from "next/link";
import { MotionDiv } from "../animation/motionDiv";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const About = () => {
  return (
    <section
      id="about"
      className="mt-12 md:grid content-center items-center gap-8 bg-dark bg-opacity-90 px-6 py-12 md:mt-0 grid-cols-1 md:grid-cols-12 md:gap-16 md:px-36"
    >
      <div className="col-span-12 mb-16 h-1 w-full rounded-full bg-gradient-to-r from-primary to-secondary"></div>

      <MotionDiv
        variants={variants}
        initial="hidden"
        transition={{
          delay: 0.3,
          ease: "easeInOut",
          duration: 0.4,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="col-span-12 m-auto w-auto bg-white align-middle grid content-center gap-4 rounded-2xl md:col-span-5 md:h-80"
      >
        {/* <Image src={About1} alt="about" className="rounded-2xl  " /> */}
        <img src="https://raw.githubusercontent.com/dipesh2508/ieee-delhi-hackquest/main/src/assets/About1.gif" alt="IEEE Delhi SSN" className="rounded-2xl" />
      </MotionDiv>

      <MotionDiv
        variants={variants}
        initial="hidden"
        transition={{
          delay: 0.3,
          ease: "easeInOut",
          duration: 0.4,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="col-span-12 m-auto flex flex-col content-center gap-6 py-4 md:col-span-7"
      >
        <h2 className="font-secondary text-3xl font-semibold text-headings md:text-5xl">
          ABOUT IEEE Delhi Section
        </h2>
        <p className="text-justify font-primary text-base font-thin text-white md:text-xl">
          IEEE Delhi Section is one of the 13 Sections in India Council coming
          under Asia-Pacific Region, the Region-10 of IEEE. At present it covers
          entire northern part of the country consisting of the four states of
          Rajasthan, Haryana, Punjab, Himachal Pradesh, and the National Capital
          Territory of Delhi, Union Territories of Chandigarh, Jammu & Kashmir,
          Ladakh.
        </p>
        <div>
          <Button size={"lg"} className="font-secondary text-lg">
            <Link href="https://ieeedelhisac.in/">Know More</Link>
          </Button>
        </div>
       
      </MotionDiv>

      <MotionDiv
        variants={variants}
        initial="hidden"
        transition={{
          delay: 0.3,
          ease: "easeInOut",
          duration: 0.4,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="col-span-12 m-auto flex flex-col content-center gap-8 py-4 md:col-span-7"
      >
         <h1 className="font-secondary text-3xl font-semibold text-headings md:text-5xl">
          {"ABOUT IEEE Delhi Section SAC's HACKQUEST"}
        </h1>
        <p className="text-justify font-primary text-base font-thin text-white md:text-xl">
          Discover the pulse-pounding excitement of HackQuest, the premier event
          hosted by IEEE Delhi Section SAC. Dive into a world of innovation and
          collaboration, where challenges ignite creativity and connections
          thrive. Get ready to unleash your potential and conquer cutting-edge
          technology challenges!
        </p>
        <div>
          <Button size={"lg"} className="font-secondary text-lg">
            <Link href="https://www.instagram.com/hack_quest.ds/">
              Know More
            </Link>
          </Button>
        </div>
      </MotionDiv>

      <MotionDiv
        variants={variants}
        initial="hidden"
        transition={{
          delay: 0.3,
          ease: "easeInOut",
          duration: 0.4,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="col-span-12 m-auto w-auto bg-white align-middle grid content-center gap-4 rounded-2xl md:col-span-5"
      >
        <img src="https://raw.githubusercontent.com/dipesh2508/ieee-delhi-hackquest/main/src/assets/About2.jpg" alt="Hackquest" className="rounded-2xl" />
        {/* <Image src={About2} alt="about" className="rounded-2xl" /> */}
      </MotionDiv>

      <div className="col-span-12 mt-16 h-1 w-full rounded-full bg-gradient-to-l from-primary to-secondary"></div>
    </section>
  );
};

export default About;
