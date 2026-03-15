export default function Badge({ text }) {
    return (
        <div className="relative inline-flex rounded-full p-[1px] overflow-hidden">
            <span className="absolute inset-0 " style={{ background: "conic-gradient(from 0deg, transparent, #7C3AED, transparent 40%)" }} />
            <span className="relative inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface text-xs text-muted tracking-widest uppercase">
                {text}
            </span>
        </div>
    );
}
