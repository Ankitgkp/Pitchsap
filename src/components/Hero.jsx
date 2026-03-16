import Badge from "./Badge";
import HeroHeading from "./HeroHeading";
import HeroButtons from "./HeroButtons";
import BackgroundLines from "./BackgroundLines";

export default function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center gap-8 min-h-[80vh] sm:min-h-screen px-4 pt-20 pb-12 sm:py-0">
      <div className="relative w-full flex items-center justify-center">
        <BackgroundLines />
        <Badge text="Your idea deserves momentum." />
      </div>
      <HeroHeading />
      <p className="text-muted text-center text-lg max-w-xl">
        Turn ideas into action with confidence. Pitchsap combines expert guidance, AI-powered insights, and community feedback to help you shape, validate, and move forward with clarity.
      </p>
      <HeroButtons />
    </section>
  );
}
