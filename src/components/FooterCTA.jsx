import { Check, Lightbulb, Users, TrendingUp } from "lucide-react";
import DisplayCards from "./ui/DisplayCards";

export default function FooterCTA() {
    const solutionCards = [
        {
            icon: <Lightbulb className="size-4 text-accent" />,
            title: "Ideators",
            description: "From Spark to Startup",
            iconClassName: "text-accent",
            titleClassName: "text-accent",
            className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
        },
        {
            icon: <Users className="size-4 text-accent" />,
            title: "Consultants",
            description: "Expert Scale Strategies",
            iconClassName: "text-accent",
            titleClassName: "text-accent",
            className: "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
        },
        {
            icon: <TrendingUp className="size-4 text-accent" />,
            title: "Investors",
            description: "Venture Ready Portfolios",
            iconClassName: "text-accent",
            titleClassName: "text-accent",
            className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-bg border-t border-white/5">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl -z-10" />
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="text-left">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter italic bg-clip-text text-transparent bg-[linear-gradient(180deg,#ffffffe6,#ffffffbf)] mb-6 leading-[1.1]">
                                Ready to Launch Your Startup?
                            </h2>
                            <p className="text-zinc-400 text-lg mb-10 max-w-xl font-medium leading-relaxed">
                                Join thousands of successful entrepreneurs who turned their ideas into thriving businesses with <span className="text-white hover:text-accent transition-colors cursor-pointer">Pitchsap</span>.
                            </p>

                            <div className="flex flex-col gap-4 mb-8">
                                {["No Setup Fees", "Cancel Anytime", "24/7 Support"].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <div className="bg-accent/10 p-1 rounded-full border border-accent/20">
                                            <Check className="w-4 h-4 text-accent" />
                                        </div>
                                        <span className="text-zinc-300 font-bold text-xs tracking-[0.2em] uppercase">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative h-[400px] flex items-center justify-center lg:justify-end pr-20">
                            <DisplayCards cards={solutionCards} />
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <p className="text-xl md:text-2xl text-white/30 font-medium italic">
                        At Pitchsap we help create <span className="text-white border-b border-white/20 pb-1 px-2">Legacy</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
