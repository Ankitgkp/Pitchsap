export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 p-6">
      <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-primary-light text-xl">
        {icon}
      </div>
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}
