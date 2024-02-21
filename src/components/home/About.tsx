import { Button } from "../ui/button";
import Image from "next/image";
import About1 from "@/assets/About1.jpg";
import About2 from "@/assets/About2.png";

const About = () => {
  return (
    <section className="grid grid-cols-12 gap-16 px-36">
      <div className="relative col-span-5">
        <div className="absolute  left-0 top-0 z-10 h-96 w-96  rounded-2xl">
          <Image src={About1} alt="about" className="rounded-2xl  " />
        </div>
        <div className="absolute bottom-0 right-0 z-20 h-96 w-96 rounded-2xl">
          <Image src={About2} alt="about" className="rounded-2xl  " />
        </div>
      </div>
      <div className="col-span-7 flex flex-col gap-12 py-16">
        <h2 className="font-secondary text-6xl font-semibold text-secondary">
          ABOUT HACKQUEST
        </h2>
        <p className="font-primary text-xl font-extralight text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          congue metus quis accumsan euismod. Maecenas sed est mollis, convallis
          nisi convallis, imperdiet massa. Proin ipsum nunc, lacinia ac faucibus
          quis, ullamcorper non metus. Aliquam viverra volutpat feugiat. Donec
          fringilla aliquam mollis. Sed cursus quam nibh, quis placerat metus
          dapibus sed. Nam varius nisi in nisi maximus blandit sit amet ac
          tellus.
        </p>
        <div>
          <Button size={"lg"} className="font-secondary text-lg">
            Register
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
