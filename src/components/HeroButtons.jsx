export default function HeroButtons() {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
                className="px-6 py-2.5 rounded-full bg-primary hover:bg-primary-dark text-white font-medium text-base flex items-center gap-2 transition-all cursor-pointer shadow-[0_3px_0_var(--color-primary-dark)] active:shadow-[0_0px_0_var(--color-primary-dark)] active:translate-y-[3px]"
                style={{ fontFamily: "'Aeonik Pro', sans-serif" }}
            >
                <span>Submit Idea</span>
                <svg fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            </button>

            <button
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-base transition-all cursor-pointer shadow-[0_3px_0_rgba(255,255,255,0.05)] active:shadow-[0_0px_0_rgba(255,255,255,0.05)] active:translate-y-[3px]"
                style={{ fontFamily: "'Aeonik Pro', sans-serif" }}
            >
                Get AI Review
            </button>
        </div>
    );
}
