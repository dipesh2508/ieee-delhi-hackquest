import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/assets/hackquest logo.png";
import Link from "next/link";
import { MotionDiv } from "../animation/motionDiv";
import CountDown from "../ui/Countdown";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Hero = () => {
  return (
    <section className="flex h-screen flex-col content-center items-center justify-center gap-6 pt-16">
      <MotionDiv
        variants={variants}
        initial="hidden"
        transition={{
          delay: 0.75,
          ease: "easeInOut",
          duration: 0.4,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="mx-8 font-secondary text-9xl font-bold text-white md:mx-64"
      >
        <Image src={logo} alt="logo" />
      </MotionDiv>
      <MotionDiv
        variants={variants}
        initial="hidden"
        transition={{
          delay: 0.9,
          ease: "easeInOut",
          duration: 0.4,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h3 className="text-lg text-slate-50 md:text-4xl">
          HURDLE | HACK | HUSTLE
        </h3>
      </MotionDiv>

      <MotionDiv
        variants={variants}
        initial="hidden"
        transition={{
          delay: 1.1,
          ease: "easeInOut",
          duration: 0.4,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="mt-8 flex flex-row items-center gap-24 align-middle"
      >
        <div>
          <div className="mt-4">
            <h3 className="font-secondary text-4xl text-white">
              Registration
              <span className="text-primary"> Closes</span> In
            </h3>
          </div>
          <CountDown />
        </div>

        <Button variant="neon" size="xl" className="mt-4 py-8">
          <Link href="https://unstop.com/p/hackquest-hackathon-ieee-delhi-section-student-activities-committee-910168">
            Register Now
          </Link>
        </Button>
      </MotionDiv>
      <div className="absolute -right-24 -top-8 h-96 w-96 overflow-hidden rounded-full  bg-secondary opacity-40 blur-[150px]"></div>
    </section>
  );
};

export default Hero;
