import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="flex h-screen flex-col content-center items-center justify-center gap-4 pt-16">
      <h1 className="ml-12 font-secondary text-9xl font-bold text-white">
        {"Hack </> Quest"}
      </h1>
      <h3 className="text-2xl text-slate-50">Hurdle | Hack | Hustle</h3>
      <Button variant="neon" size="xl" className="mt-20">
        Register
      </Button>
      <div className="absolute -right-24 -top-8 h-96 w-96 overflow-hidden rounded-full  bg-secondary opacity-40 blur-[150px]"></div>
    </section>
  );
};

export default Hero;
