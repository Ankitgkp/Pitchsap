import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BentoGrid from "../components/BentoGrid";
import WhyPitchsap from "../components/WhyPitchsap";
import HowToMaximize from "../components/HowToMaximize";
import BackgroundLines from "../components/BackgroundLines";
import FloatingElements from "../components/FloatingElements";

export default function Landing() {
  return (
    <main className="relative min-h-screen bg-bg overflow-x-hidden">
      <FloatingElements />
      <BackgroundLines />
      <Navbar />
      <Hero />
      <BentoGrid />
      <WhyPitchsap />
      <HowToMaximize />
    </main>
  );
}
