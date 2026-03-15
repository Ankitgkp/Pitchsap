import FeatureCard from "./FeatureCard";

const features = [
    {
        title: "Upload your deck",
        description: "Prepare to supercharge your pitch deck presentation.",
    },
    {
        title: "Bulletproof your Deck",
        description: "Weaknesses identified, best practices suggested.",
    },
    {
        title: "Ensure smooth delivery",
        description: "Keep your audience engaged with reliable flow.",
    },
];

export default function FeaturesRow() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto border-t border-white/10 pt-12">
            {features.map((f) => (
                <FeatureCard key={f.title} {...f} />
            ))}
        </div>
    );
}
