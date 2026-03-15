import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BentoGrid from "../components/BentoGrid";
import WhyPitchsap from "../components/WhyPitchsap";
import HowToMaximize from "../components/HowToMaximize";
import Pricing from "../components/Pricing";
import FloatingElements from "../components/FloatingElements";
import FooterCTA from "../components/FooterCTA";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <main className="relative min-h-screen bg-bg overflow-x-hidden">
      <FloatingElements />
      <Navbar />
      <Hero />
      <BentoGrid />
      <WhyPitchsap />
      <HowToMaximize />
      <Pricing />
      <FooterCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
