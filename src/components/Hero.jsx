import Badge from "./Badge";
import HeroHeading from "./HeroHeading";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center gap-8 min-h-screen px-4">
      <Badge text="End-to-end pitch deck tool" />
      <HeroHeading />
      <p className="text-muted text-center text-lg max-w-xl">
        Effortless creation, robust feedback and seamless delivery.
      </p>
      <HeroButtons />
    </section>
  );
}
