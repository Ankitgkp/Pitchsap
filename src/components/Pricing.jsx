import { useState } from "react";
import { Check, Feather, Briefcase, Star, Zap } from "lucide-react";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

const plans = [
    {
        name: "FREE",
        id: "free",
        icon: <Zap className="w-5 h-5 fill-accent" />,
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
            "Idea Submissions": "2/month",
            "AI + Consultant Reviews": "2 quick reviews/month",
            "Consultant Messages": "5 messages to 1 consultant",
            "Workshop Access": "1/month",
            "Resource Library": "Free resources only",
            "Support SLA": "48 hours",
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
        icon: <Feather className="w-5 h-5 fill-accent" />,
        tagline: "For Growing Ideators",
        price: "₹799",
        period: "/month",
        description: "Ideal for entrepreneurs who want structured guidance and detailed feedback on their ideas from experienced consultants.",
        buttonText: "Get started",
        footer: "Billed monthly (₹799/mo)",
        highlight: true,
        badge: "Most Popular",
        features: [
            "5/month Idea Submissions",
            "5 in-depth reviews/month (AI+C)",
            "Unlimited to 5 consultants",
            "3/month Workshop Access",
            "Essential resource pack",
            "4 hours Support SLA",
        ],
        details: {
            "Idea Submissions": "5/month",
            "AI + Consultant Reviews": "5 in-depth reviews/month",
            "Consultant Messages": "Unlimited to 5 consultants",
            "Workshop Access": "3/month",
            "Resource Library": "Essential pack",
            "Support SLA": "4 hours",
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
        icon: <Briefcase className="w-5 h-5 fill-accent" />,
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
            "Idea Submissions": "Unlimited",
            "AI + Consultant Reviews": "Unlimited comprehensive",
            "Consultant Messages": "Unlimited to all consultants",
            "Workshop Access": "All workshops",
            "Resource Library": "Complete pack",
            "Support SLA": "1 hour (24/7)",
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
    "Idea Submissions",
    "AI + Consultant Reviews",
    "Consultant Messages",
    "Workshop Access",
    "Resource Library",
    "Support SLA",
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
    const isTableView = view === "table";

    const handleViewChange = (nextView) => {
        setView(nextView);
    };

    return (
        <section className="py-32 relative overflow-hidden bg-bg border-t border-white/5">
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

                    <div className="flex flex-col items-center gap-4">
                        <div className="inline-flex items-center gap-2 md:gap-4 px-3 md:px-5 py-2 rounded-full bg-white/4 border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md">
                            <button
                                type="button"
                                onClick={() => handleViewChange("cards")}
                                className={`text-[11px] md:text-xs font-black uppercase tracking-[0.16em] transition-colors duration-300 px-2 ${!isTableView ? "text-white" : "text-white/35 hover:text-white/60"}`}
                                aria-pressed={!isTableView}
                            >
                                Card View
                            </button>

                            <button
                                type="button"
                                onClick={() => handleViewChange(isTableView ? "cards" : "table")}
                                aria-label="Toggle view mode"
                                role="switch"
                                aria-checked={isTableView}
                                className="relative w-14 h-8 rounded-full bg-white/6 border border-white/15 p-1 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                            >
                                <span
                                    className={`block h-5 w-5 rounded-full bg-[#f4f4f5] shadow-[0_1px_2px_rgba(0,0,0,0.4)] transition-transform duration-300 ${isTableView ? "translate-x-5" : "translate-x-0"}`}
                                />
                            </button>

                            <button
                                type="button"
                                onClick={() => handleViewChange("table")}
                                className={`text-[11px] md:text-xs font-black uppercase tracking-[0.16em] transition-colors duration-300 px-2 ${isTableView ? "text-white" : "text-white/35 hover:text-white/60"}`}
                                aria-pressed={isTableView}
                            >
                                Comparison Table
                            </button>
                        </div>
                    </div>
                </div>

                {view === "cards" ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {plans.map((plan) => (
                            <div
                                key={plan.id}
                                className={`flex flex-col p-8 rounded-2xl border transition-all duration-300 bg-surface/20 backdrop-blur-sm relative overflow-hidden group ${plan.highlight
                                        ? "border-accent/30 shadow-[0_0_40px_-15px_rgba(139,92,246,0.2)] scale-[1.02]"
                                        : "border-white/5 hover:border-white/10"
                                    }`}
                            >
                                {plan.badge && (
                                    <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-300 text-black text-[10px] font-black uppercase tracking-wide shadow-md">
                                        <Star className="w-3 h-3 fill-black" />
                                        {plan.badge}
                                    </div>
                                )}

                                {plan.highlight && (
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-accent to-transparent"></div>
                                )}

                                <div className="mb-8 p-3 rounded-xl bg-white/5 w-fit">
                                    <div className="text-accent scale-110">
                                        {plan.icon}
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
                                    className={`w-full py-3 rounded-xl font-bold text-base mb-4 transition-all cursor-pointer ${plan.highlight
                                            ? "bg-primary hover:bg-primary-dark text-white shadow-[0_3px_0_var(--color-primary-dark)] active:shadow-[0_0px_0_var(--color-primary-dark)] active:translate-y-0.75"
                                            : plan.id === "omega"
                                                ? "bg-linear-to-r from-primary/85 to-primary hover:from-primary hover:to-primary-dark text-white border border-primary-light/30 shadow-[0_3px_0_rgba(76,29,149,0.95)] active:shadow-[0_0px_0_rgba(76,29,149,0.95)] active:translate-y-0.75"
                                            : "bg-[#19172a] hover:bg-[#221f36] text-white border border-white/10 shadow-[0_3px_0_rgba(0,0,0,0.45)] active:shadow-[0_0px_0_rgba(0,0,0,0.45)] active:translate-y-0.75"
                                        }`}
                                    style={{ fontFamily: "'Aeonik Pro', sans-serif" }}
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
                    <div className="max-w-5xl mx-auto px-0 md:px-4 w-full">
                        <div className="overflow-x-auto rounded-none md:rounded-3xl bg-surface/20 border-y md:border border-white/5 shadow-2xl backdrop-blur-sm -mx-4 md:mx-0">
                            <table className="w-full text-left border-collapse min-w-[600px] md:min-w-0">
                                <thead>
                                    <tr className="border-b border-white/5">
                                        <th className="p-4 md:p-8 text-white/30 font-bold uppercase tracking-widest text-[10px] md:text-[11px] sticky left-0 z-20 bg-[#070514]/95 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none border-r border-white/5 md:border-r-0 shadow-[4px_0_24px_-4px_rgba(0,0,0,0.3)] md:shadow-none">Compare Features</th>
                                        {plans.map(plan => (
                                            <th key={plan.id} className={`p-5 md:p-8 min-w-[160px] md:min-w-[180px] ${plan.highlight ? 'bg-accent/5' : ''}`}>
                                                <div className="h-7 mb-3 flex items-center">
                                                    {plan.badge && (
                                                        <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-300 text-black text-[10px] font-black uppercase tracking-wide shadow-sm">
                                                            <Star className="w-3 h-3 fill-black" />
                                                            {plan.badge}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className={`text-sm font-black tracking-widest ${plan.highlight ? "text-accent" : "text-white/80"}`}>{plan.name}</span>
                                                </div>
                                                <div className="text-2xl font-black text-white">{plan.price}</div>
                                                <button
                                                    className={`mt-4 w-full py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${plan.highlight
                                                        ? "bg-primary hover:bg-primary-dark text-white shadow-[0_3px_0_var(--color-primary-dark)] active:shadow-[0_0px_0_var(--color-primary-dark)] active:translate-y-0.75"
                                                        : plan.id === "omega"
                                                            ? "bg-linear-to-r from-primary/85 to-primary hover:from-primary hover:to-primary-dark text-white border border-primary-light/30 shadow-[0_3px_0_rgba(76,29,149,0.95)] active:shadow-[0_0px_0_rgba(76,29,149,0.95)] active:translate-y-0.75"
                                                        : "bg-[#19172a] hover:bg-[#221f36] text-white border border-white/10 shadow-[0_3px_0_rgba(0,0,0,0.45)] active:shadow-[0_0px_0_rgba(0,0,0,0.45)] active:translate-y-0.75"
                                                    }`}
                                                    style={{ fontFamily: "'Aeonik Pro', sans-serif" }}
                                                >
                                                    {plan.buttonText}
                                                </button>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonFeatures.map((feature, idx) => (
                                        <tr key={idx} className="group hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                                            <td className="p-4 md:p-6 md:pl-8 text-white/50 text-xs md:text-sm font-medium sticky left-0 z-10 bg-[#070514]/95 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none border-r border-white/5 md:border-r-0 group-hover:bg-[#120f26]/95 md:group-hover:bg-transparent transition-colors shadow-[4px_0_24px_-4px_rgba(0,0,0,0.3)] md:shadow-none">{feature}</td>
                                            {plans.map(plan => (
                                                <td key={plan.id} className={`p-4 md:p-6 ${plan.highlight ? 'bg-accent/5' : ''}`}>
                                                    {plan.details[feature] === true ? (
                                                            <FaCircleCheck className="w-4 h-4 text-emerald-400" />
                                                    ) : plan.details[feature] === false ? (
                                                            <FaCircleXmark className="w-4 h-4 text-rose-400/90" />
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

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        </section>
    );
}
