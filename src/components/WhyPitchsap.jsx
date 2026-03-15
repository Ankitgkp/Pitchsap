import BentoCard from "./BentoCard";

export default function WhyPitchsap() {
    return (
        <section className="relative z-10 max-w-6xl mx-auto px-4 pb-24 pt-0" id="why-pitchsap">
            <div className="flex justify-center mb-16">
                <div className="flex items-center gap-4 bg-black/80 border border-white/10 rounded-full px-6 py-3 shadow-2xl backdrop-blur-xl">
                    <div className="w-6 h-6 bg-primary flex items-center justify-center rounded-sm text-xs font-bold text-white shrink-0">
                        P
                    </div>
                    <div className="text-white/90 text-sm sm:text-lg font-medium tracking-tight" style={{ fontFamily: "'Aeonik Pro', sans-serif" }}>
                        Why <span className="text-secondary">Pitchsap</span> ?
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <BentoCard
                    title="Why Ideators Need Pitchsap"
                    description="Pitchsap gives ideators early, honest, actionable feedback to understand risks, see how experts view their idea, identify what needs improvement, and save time by shaping a clearer, stronger startup plan from the beginning."
                    className="md:col-span-2 min-h-[300px] border-secondary/20 hover:border-secondary/40"
                >
                    <div className="absolute top-6 left-6 w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                    </div>
                    <div className="w-full h-full opacity-20 flex flex-col items-center justify-center pt-10">
                        <div className="flex gap-3">
                            <div className="w-16 h-20 rounded-lg border border-secondary/30 bg-secondary/10 flex flex-col p-2 gap-2">
                                <div className="w-full h-1 bg-secondary/30 rounded"></div>
                                <div className="w-2/3 h-1 bg-secondary/20 rounded"></div>
                            </div>
                            <div className="w-16 h-20 rounded-lg border border-secondary/40 bg-secondary/20 flex flex-col p-2 gap-2 -translate-y-4">
                                <div className="w-full h-1 bg-secondary/40 rounded"></div>
                                <div className="w-3/4 h-1 bg-secondary/30 rounded"></div>
                                <div className="w-1/2 h-1 bg-secondary/20 rounded"></div>
                            </div>
                            <div className="w-16 h-20 rounded-lg border border-secondary/30 bg-secondary/10 flex flex-col p-2 gap-2">
                                <div className="w-full h-1 bg-secondary/30 rounded"></div>
                                <div className="w-1/2 h-1 bg-secondary/20 rounded"></div>
                            </div>
                        </div>
                    </div>
                </BentoCard>

                <BentoCard
                    title="Why Consultants Love Pitchsap"
                    description="Consultants use Pitchsap to help people who truly need guidance, build their reputation through quality reviews, and gain steady opportunities."
                    className="md:col-span-1 min-h-[300px] border-secondary/20 hover:border-secondary/40"
                >
                    <div className="absolute top-6 right-6 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary/60">
                         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                    </div>
                </BentoCard>
                <BentoCard
                    title="Why AI Matters Here"
                    description="AI makes idea reviews faster and smarter, bringing clarity to complex concepts. It supports consultants with deeper insights."
                    className="md:col-span-1 min-h-[300px] border-secondary/20 hover:border-secondary/40"
                >
                    <div className="flex items-center justify-center h-full opacity-25">
                         <svg className="w-16 h-16 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                </BentoCard>

                <BentoCard
                    title="A Clear, Transparent, Structured System"
                    description="Pitchsap keeps everything simple and open with easy steps, straightforward communication, and organized reviews. It builds trust, supports growth, and ensures strong privacy to prevent idea leakage."
                    className="md:col-span-2 min-h-[300px] border-secondary/20 hover:border-secondary/40"
                >
                    <div className="absolute top-8 right-8 flex gap-3 opacity-20">
                        <div className="w-24 h-24 rounded-lg bg-secondary/20 border border-secondary/30 rotate-12"></div>
                        <div className="w-24 h-24 rounded-lg bg-secondary/10 border border-secondary/20 -rotate-6"></div>
                    </div>
                </BentoCard>
            </div>
        </section>
    );
}
