import { Button } from "../ui/button";
import Image from "next/image";
import About1 from "@/assets/About1.jpg";
import About2 from "@/assets/About2.png";

const About = () => {
  return (
    <section
      id="about"
      className="mt-12 content-center gap-8 md:gap-16 bg-dark bg-opacity-90 px-16 py-12 md:mt-0 grid md:grid-cols-12 md:px-36"
    >
      <div className="m-auto flex w-auto flex-col content-center gap-4 rounded-2xl md:col-span-5 md:h-96 md:w-96">
        <Image src={About1} alt="about" className="rounded-2xl  " />
      </div>

      <div className="m-auto flex flex-col content-center gap-8 py-4 md:col-span-7">
        <h2 className="font-secondary text-3xl font-semibold text-headings md:text-6xl">
          ABOUT HACKQUEST
        </h2>
        <p className="text-justify font-primary text-base font-extralight text-white md:text-xl">
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
