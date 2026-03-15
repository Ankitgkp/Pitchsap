export default function BentoCard({ title, description, className = "", children }) {
    return (
        <div className={`relative flex flex-col justify-end p-8 overflow-hidden rounded-[2rem] bg-surface/40 backdrop-blur-md border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-colors hover:bg-surface/60 group ${className}`}>
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
            <div className="absolute inset-x-0 top-0 bottom-32 -z-10 bg-gradient-to-b from-surface/20 to-transparent p-6 pointer-events-none">
                {children}
            </div>
            <div className="relative mt-auto">
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Aeonik Pro', sans-serif" }}>
                    {title}
                </h3>
                <p className="text-muted text-sm leading-relaxed min-h-[5rem] lg:min-h-[6rem]" style={{ fontFamily: "'Aeonik Pro', sans-serif" }}>
                    {description}
                </p>
            </div>
        </div>
    );
}
