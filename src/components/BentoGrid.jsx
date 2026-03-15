import BentoCard from "./BentoCard";

export default function BentoGrid() {
    return (
        <section className="relative z-10 max-w-6xl mx-auto px-4 pb-24 pt-0 -mt-32" id="how-it-works">
            <div className="text-center mb-16">
                <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">How Pitchsap Works</h2>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Aeonik Pro', sans-serif" }}>
                    From idea to investor ready
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <BentoCard
                    title="Expert + AI Review"
                    description="First, our powerful AI tools give you an instant overall idea review. Then our team of Startup professionals and industry experts dives deeper with detailed analysis on market potential, feasibility, and strategic direction."
                    className="md:col-span-3 min-h-[400px] flex-col md:flex-row md:items-center justify-between"
                >
                    <div className="absolute top-8 left-8 md:w-64 p-5 rounded-2xl bg-white/2 pointer-events-auto hidden sm:block shadow-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <div>
                                <div className="text-white text-sm font-semibold" style={{ fontFamily: "'Aeonik Pro', sans-serif" }}>AI Analysis</div>
                                <div className="text-muted text-xs">Ready to review</div>
                            </div>
                        </div>
                        <button className="w-full px-4 py-2 rounded-full bg-primary hover:bg-primary-dark text-white text-sm font-medium transition-all shadow-[0_3px_0_var(--color-primary-dark)] active:shadow-[0_0px_0_var(--color-primary-dark)] active:translate-y-[3px]" style={{ fontFamily: "'Aeonik Pro', sans-serif" }}>
                            Get AI Review
                        </button>
                    </div>
                    <div className="absolute top-8 right-8 w-[90%] md:w-1/2 max-w-sm rounded-xl overflow-hidden bg-bg/80 shadow-2xl opacity-60 group-hover:opacity-100 transition-opacity">
                        <div className="flex items-center px-4 py-2 bg-white/5">
                            <div className="flex gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                            </div>
                        </div>
                        <div className="p-4 font-mono text-xs text-muted space-y-2">
                            <p><span className="text-primary-light">~</span> Analyzing market size...</p>
                            <p><span className="text-green-400">✔</span> TAM calculated: $4B+</p>
                            <p><span className="text-primary-light">~</span> Generating pitch narrative...</p>
                            <div className="h-2 w-2/3 bg-white/10 rounded overflow-hidden mt-2">
                                <div className="h-full w-3/4 bg-primary animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </BentoCard>
                <BentoCard
                    title="Submit Your Startup Idea"
                    description="Submit your dream startup idea through our easy-to-use platform. We're ready to help you grow. Join a community where ideas turn into teams and products."
                    className="min-h-[320px]"
                >
                    <div className="w-full h-full opacity-30 mt-4 rounded-t-xl overflow-hidden bg-gradient-to-b from-white/5 to-transparent border-t border-white/10 p-4">
                        <div className="h-2 w-1/2 bg-white/20 rounded mb-3"></div>
                        <div className="h-2 w-3/4 bg-white/10 rounded mb-3"></div>
                        <div className="h-2 w-1/4 bg-white/10 rounded mb-3"></div>
                    </div>
                </BentoCard>

                <BentoCard
                    title="Prototype Powerhouse"
                    description="We'll help you build a minimum viable product (MVP) or prototype. Validate your idea fast with a working version and gather results."
                    className="min-h-[320px]"
                >
                    <div className="flex gap-2 opacity-30 mt-6 px-4">
                        <div className="flex-1 space-y-2">
                            <div className="w-full h-8 bg-white/10 rounded-md"></div>
                            <div className="w-full h-16 bg-white/5 rounded-md"></div>
                        </div>
                        <div className="flex-1 space-y-2">
                            <div className="w-full h-12 bg-white/5 rounded-md"></div>
                            <div className="w-full h-12 bg-white/10 rounded-md"></div>
                        </div>
                    </div>
                </BentoCard>

                <BentoCard
                    title="Investor Pitching"
                    description="Pitch your MVP directly to our curated network. We help you craft the perfect deck, rehearse your presentation, and make warm introductions."
                    className="min-h-[320px]"
                >
                    <div className="flex items-end justify-between px-6 pt-12 h-full opacity-40">
                        <div className="w-6 h-12 bg-white/10 rounded-t-sm"></div>
                        <div className="w-6 h-20 bg-white/10 rounded-t-sm"></div>
                        <div className="w-6 h-16 bg-primary/40 rounded-t-sm"></div>
                        <div className="w-6 h-28 bg-primary/60 rounded-t-sm"></div>
                        <div className="w-6 h-24 bg-white/20 rounded-t-sm"></div>
                    </div>
                </BentoCard>

            </div>
        </section>
    );
}
