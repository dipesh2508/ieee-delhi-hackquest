import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Sponsors from "@/components/home/Sponsors";
import Tracks from "@/components/home/Tracks";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-dark">
      <Hero />
      <About />
      <Tracks />
      <Sponsors />
    </main>
  );
}
