import { Button } from "../ui/button";
import Image from "next/image";
import About1 from "@/assets/About1.jpg";
import About2 from "@/assets/About2.png";
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
      className="mt-12 grid content-center gap-8 bg-dark bg-opacity-90 px-16 py-12 md:mt-0 md:grid-cols-12 md:gap-16 md:px-36"
    >
      <MotionDiv
        variants={variants}
        initial="hidden"
        transition={{
          delay: 0.3,
          ease: "easeInOut",
          duration: 0.4,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }} className="m-auto flex w-auto flex-col content-center gap-4 rounded-2xl md:col-span-5 md:h-96 md:w-96">
        <Image src={About1} alt="about" className="rounded-2xl  " />
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
        viewport={{ once: true, amount: 0.5 }} className="m-auto flex flex-col content-center gap-8 py-4 md:col-span-7">
        <h2 className="font-secondary text-3xl font-semibold text-headings md:text-6xl">
          ABOUT HACKQUEST
        </h2>
        <p className="text-justify font-primary text-base font-thin text-white md:text-xl">
          Discover the pulse-pounding excitement of HackQuest, the premier
          event hosted by IEEE Delhi Section SAC. Dive into a world of innovation
          and collaboration, where challenges ignite creativity and connections
          thrive. Get ready to unleash your potential and conquer cutting-edge
          technology challenges!
        </p>
        <div>
          <Button size={"lg"} className="font-secondary text-lg">
            <Link href="https://unstop.com/p/hackquest-hackathon-ieee-delhi-section-student-activities-committee-910168">
              Know More
            </Link>
          </Button>
        </div>
      </MotionDiv>
    </section>
  );
};

export default About;
