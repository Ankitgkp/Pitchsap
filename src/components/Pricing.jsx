import { useState } from "react";
import { Check, X, Feather, Briefcase, Star, Zap } from "lucide-react";

const plans = [
    {
        name: "FREE",
        id: "free",
        icon: <X className="w-5 h-5" />,
        tagline: "For Early Ideators",
        price: "₹0",
        period: "/month",
        description: "Perfect for individuals just starting out with their ideas. Get basic validation and limited access to our consultant network.",
        buttonText: "Get started for free",
        footer: "Free and open-source forever",
        features: [
            "2/month Idea Submissions",
            "2 quick reviews/month (AI+C)",
            "5 messages to 1 consultant",
            "1/month Workshop Access",
            "Free resources only",
            "48 hours Support SLA",
        ],
        details: {
            "1:1 Sessions": false,
            "Pitch Deck Reviews": false,
            "File/Link Uploads": false,
            "Investor Access": false,
            "Event Access": false,
            "Mentorship": false,
            "Team Support": false,
            "Recorded Sessions & Notes": false,
            "Renewal Discount": false
        }
    },
    {
        name: "ALPHA",
        id: "alpha",
        icon: <Feather className="w-5 h-5" />,
        tagline: "For Growing Ideators",
        price: "₹799",
        period: "/month",
        description: "Ideal for entrepreneurs who want structured guidance and detailed feedback on their ideas from experienced consultants.",
        buttonText: "Get started",
        footer: "Billed monthly (₹799/mo)",
        highlight: true,
        features: [
            "5/month Idea Submissions",
            "5 in-depth reviews/month (AI+C)",
            "Unlimited to 5 consultants",
            "3/month Workshop Access",
            "Essential resource pack",
            "4 hours Support SLA",
        ],
        details: {
            "1:1 Sessions": true,
            "Pitch Deck Reviews": "2/month",
            "File/Link Uploads": "4/month",
            "Investor Access": false,
            "Event Access": "Basic events",
            "Mentorship": true,
            "Team Support": "Basic",
            "Recorded Sessions & Notes": false,
            "Renewal Discount": false
        }
    },
    {
        name: "OMEGA",
        id: "omega",
        icon: <Briefcase className="w-5 h-5" />,
        tagline: "For Investment-Ready Ideators",
        price: "₹1299",
        period: "/month",
        description: "The ultimate package for entrepreneurs ready to scale. Get premium mentorship, investor access, and specialized team support.",
        buttonText: "Go Premium",
        footer: "Billed monthly (₹1299/mo)",
        features: [
            "Unlimited Idea Submissions",
            "Unlimited AI+C Reviews",
            "Unlimited to all consultants",
            "All workshop access",
            "Complete resource pack",
            "1 hour (24/7) Support SLA",
        ],
        details: {
            "1:1 Sessions": true,
            "Pitch Deck Reviews": "Unlimited",
            "File/Link Uploads": "Unlimited",
            "Investor Access": "Direct access",
            "Event Access": "Premium + Networking",
            "Mentorship": true,
            "Team Support": "Full legal, finance & marketing",
            "Recorded Sessions & Notes": true,
            "Renewal Discount": "Lifetime discount"
        }
    }
];

const comparisonFeatures = [
    "1:1 Sessions",
    "Pitch Deck Reviews",
    "File/Link Uploads",
    "Investor Access",
    "Event Access",
    "Mentorship",
    "Team Support",
    "Recorded Sessions & Notes",
    "Renewal Discount"
];

export default function Pricing() {
    const [view, setView] = useState("cards");

    return (
        <section className="py-32 relative overflow-hidden bg-bg border-t border-white/5">
            {/* Background Texture & Glows */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/10 rounded-full blur-[120px] opacity-50" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 px-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.25em] mb-6 animate-pulse">
                        <Zap className="w-3 h-3 fill-accent" />
                        PLANS & PRICING
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-black mb-8 text-white tracking-tighter">
                        Simple, <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Transparent</span> Pricing
                    </h2>
                    <p className="text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
                        Transform your ideas into reality with our comprehensive suite of tools,
                        expert guidance, and investor connections. <span className="text-white">Choose the path that fits your ambition.</span>
                    </p>

                    {/* Refined Switcher Design */}
                    <div className="flex flex-col items-center gap-3">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                            {view === 'cards' ? 'Card View' : 'Comparison Table'}
                        </span>
                        <div className="flex items-center gap-4">
                            <span className={`text-[11px] font-bold uppercase tracking-wider transition-colors duration-300 ${view === 'cards' ? 'text-white' : 'text-white/20'}`}>Cards</span>
                            <button 
                                onClick={() => setView(view === 'cards' ? 'table' : 'cards')}
                                className="relative w-12 h-6 bg-white/5 rounded-full p-1 border border-white/10 transition-all duration-300 hover:border-accent/40 group shadow-inner"
                                aria-label="Toggle View Mode"
                            >
                                <div className={`absolute inset-0 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                <div className={`w-4 h-4 bg-accent rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)] transform transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-10 relative ${view === 'table' ? 'translate-x-[24px]' : 'translate-x-0'}`}></div>
                            </button>
                            <span className={`text-[11px] font-bold uppercase tracking-wider transition-colors duration-300 ${view === 'table' ? 'text-white' : 'text-white/20'}`}>Table</span>
                        </div>
                    </div>
                </div>

                {view === "cards" ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {plans.map((plan) => (
                            <div
                                key={plan.id}
                                className={`flex flex-col p-8 rounded-2xl border transition-all duration-300 bg-surface/20 backdrop-blur-sm relative overflow-hidden group ${
                                    plan.highlight 
                                        ? "border-accent/30 shadow-[0_0_40px_-15px_rgba(139,92,246,0.2)] scale-[1.02]" 
                                        : "border-white/5 hover:border-white/10"
                                }`}
                            >
                                {/* Active card glow */}
                                {plan.highlight && (
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                                )}
                                
                                <div className="mb-8 p-3 rounded-xl bg-white/5 w-fit">
                                    <div className="text-accent scale-110">
                                        {plan.id === 'free' ? <Zap className="w-5 h-5 fill-accent" /> : 
                                         plan.id === 'alpha' ? <Feather className="w-5 h-5 fill-accent" /> : 
                                         <Briefcase className="w-5 h-5 fill-accent" />}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{plan.name}</h3>
                                    <p className="text-sm text-white/50 leading-relaxed min-h-[48px]">
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-black text-white tracking-tight">{plan.price}</span>
                                        <span className="text-white/30 text-xs font-bold uppercase tracking-widest">{plan.period}</span>
                                    </div>
                                </div>

                                <button
                                    className={`w-full py-3 rounded-xl font-bold text-xs mb-4 transition-all duration-300 transform active:scale-[0.98] ${
                                        plan.highlight
                                            ? "bg-[#e5e5e5] text-black hover:bg-white shadow-lg shadow-white/5"
                                            : "bg-white/5 text-white/90 hover:bg-white/10 border border-white/10"
                                    }`}
                                >
                                    {plan.buttonText}
                                </button>

                                <p className="text-[10px] text-white/30 font-bold mb-10 tracking-wider uppercase">{plan.footer}</p>

                                <div className="mt-auto space-y-3 pt-6 border-t border-white/5">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                            <span className="text-xs text-white/60 font-medium">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="max-w-5xl mx-auto">
                        <div className="overflow-x-auto rounded-3xl bg-surface/20 border border-white/5 shadow-2xl backdrop-blur-sm">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/5">
                                        <th className="p-8 text-white/30 font-bold uppercase tracking-widest text-[11px]">Compare Features</th>
                                        {plans.map(plan => (
                                            <th key={plan.id} className={`p-8 min-w-[180px] ${plan.highlight ? 'bg-accent/5' : ''}`}>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className={`text-sm font-black tracking-widest ${plan.highlight ? "text-accent" : "text-white/80"}`}>{plan.name}</span>
                                                </div>
                                                <div className="text-2xl font-black text-white">{plan.price}</div>
                                                <button className={`mt-4 w-full py-2 rounded-xl text-xs font-bold transition-all ${
                                                    plan.highlight ? "bg-[#e5e5e5] text-black" : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10"
                                                }`}>
                                                    {plan.buttonText}
                                                </button>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonFeatures.map((feature, idx) => (
                                        <tr key={idx} className="group hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                                            <td className="p-6 pl-8 text-white/50 text-sm font-medium">{feature}</td>
                                            {plans.map(plan => (
                                                <td key={plan.id} className={`p-6 ${plan.highlight ? 'bg-accent/5' : ''}`}>
                                                    {plan.details[feature] === true ? (
                                                        <Check className="w-5 h-5 text-accent" />
                                                    ) : plan.details[feature] === false ? (
                                                        <X className="w-5 h-5 text-red-500/30" />
                                                    ) : (
                                                        <span className="text-sm font-bold text-white/70">{plan.details[feature]}</span>
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        </section>
    );
}
