export default function HeroHeading() {
  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-center bg-clip-text text-transparent" style={{ fontFamily: "'Aeonik Pro', sans-serif", backgroundImage: "linear-gradient(180deg, #ffffffe6, #ffffffbf)" }}>
      Create, Perfect and{" "}
      <br className="hidden sm:block" />
      Scale your{" "}
      <em className="text-primary-light italic">Pitch Deck</em>
    </h1>
  );
}
