import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturesRow from "../components/FeaturesRow";
import BackgroundLines from "../components/BackgroundLines";
import FloatingElements from "../components/FloatingElements";

export default function Landing() {
  return (
    <main className="relative min-h-screen bg-bg overflow-x-hidden">
      <FloatingElements />
      <BackgroundLines />
      <Navbar />
      <Hero />
      <FeaturesRow />
    </main>
  );
}
