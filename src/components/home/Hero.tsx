import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="flex h-screen flex-col content-center items-center justify-center gap-4 pt-16">
      <h1 className="font-secondary text-9xl font-bold text-white ml-12">
        {"Hack </> Quest"}
      </h1>
      <h3 className="text-2xl text-slate-50">Hurdle | Hack | Hustle</h3>
      <Button variant="neon" size="xl" className="mt-20">
        Register
        </Button>
        <div className="absolute h-96 w-96 bg-secondary opacity-40 -top-8 -right-24  blur-[150px] overflow-hidden rounded-full"></div>
    </section>
  );
};

export default Hero;
