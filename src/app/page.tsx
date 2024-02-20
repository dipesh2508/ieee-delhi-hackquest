import Hero from "@/components/home/Hero";
import Sponsors from "@/components/home/Sponsors";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-dark min-h-screen overflow-hidden relative">
      <Hero />
      <Sponsors />
      </main>
  );
}
