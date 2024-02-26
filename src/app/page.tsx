import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Sponsors from "@/components/home/Sponsors";
import Tracks from "@/components/home/Tracks";
import Timeline from "@/components/home/Timeline";
import FAQs from "@/components/home/FAQs";
import ParticleBackground from "@/components/design/ParticleBackground";
import Team from "@/components/home/Team";
export default function Home() {
  return (
    <main className="relative bg-opacity-20 bg-dark min-h-screen overflow-hidden">
      <Hero />
      <About />
      <Tracks />
      <Timeline />
      {/* <Sponsors /> */}
      <Team />
      <FAQs />
      <div className="relative -z-10">
        <ParticleBackground />
      </div>
    </main>
  );
}
