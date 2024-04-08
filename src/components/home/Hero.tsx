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
        <Image src={logo} alt="HackQuest" />
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
        <h3 className="text-lg text-slate-50 font-semibold md:text-4xl">
          HURDLE&#160;&#160;&#160; |&#160;&#160;&#160; HACK&#160;&#160;&#160; | &#160;&#160;&#160;HUSTLE
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
        className="mt-8 flex flex-col md:flex-row items-center gap-8 md:gap-24 align-middle"
      >
        <div className="flex flex-col gap-4 md:gap-6 items-center">
          <div className="mt-4">
            <h3 className="font-secondary text-2xl md:text-4xl text-white">
              Starts
              <span className="text-primary"> In</span>
            </h3>
          </div>
          <CountDown />
        </div>
        {/* <div className="flex flex-col md:flex-row align-middle items-center justify-center gap-8 text-white text-center">


        <Button variant="neon" size="xl" className="md:mt-4 py-3 md:py-12">
          <Link href="https://unstop.com/p/hackquest-hackathon-ieee-delhi-section-student-activities-committee-906129?lb=juhgQeA">
            Register Now 
            <br />
            For Just Rs. 29/-
            
          </Link>
        </Button>
        <p className="text-xl px-4">
        Use coupon code <br /> <span className="text-secondary font-bold text-4xl">IEEEHQ71</span> 
        </p>
        </div> */}
      </MotionDiv>
      <div className="absolute -right-24 -top-8 h-96 w-96 overflow-hidden rounded-full  bg-secondary opacity-40 blur-[150px]"></div>
    </section>
  );
};

export default Hero;
