import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/assets/hackquest logo.png";
import Link from "next/link";
import { MotionDiv } from "../animation/motionDiv";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Hero = () => {
  return (
    <section className="flex h-screen flex-col content-center items-center justify-center gap-4 pt-16">
      <MotionDiv
        variants={variants}
        initial="hidden"
        transition={{
          delay: 0.75,
          ease: "easeInOut",
          duration: 0.4,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }} className="mx-8 font-secondary text-9xl font-bold text-white md:mx-64">
        <Image src={logo} alt="logo" />
      </MotionDiv>
        <MotionDiv variants={variants}
        initial="hidden"
        transition={{
          delay: 0.9,
          ease: "easeInOut",
          duration: 0.4,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }} >

      <h3 className="text-lg text-slate-50 md:text-2xl">
        Hurdle | Hack | Hustle
      </h3>
        </MotionDiv>
      <Button variant="neon" size="xl" className="mt-20">
        <Link href="https://unstop.com/p/hackquest-hackathon-ieee-delhi-section-student-activities-committee-910168">
          Register
        </Link>
      </Button>
      <div className="absolute -right-24 -top-8 h-96 w-96 overflow-hidden rounded-full  bg-secondary opacity-40 blur-[150px]"></div>
    </section>
  );
};

export default Hero;
