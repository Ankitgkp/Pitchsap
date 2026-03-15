export default function BackgroundLines() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden flex justify-center">
            <svg className="min-w-[1440px] w-full h-full opacity-50" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#cfb6ff" stopOpacity="0" />
                        <stop offset="100%" stopColor="#cfb6ff" stopOpacity="0.25" />
                    </linearGradient>
                    <style>
                        {`
                            @keyframes trace1 {
                                from { stroke-dashoffset: 120; }
                                to { stroke-dashoffset: -20; }
                            }
                            @keyframes trace2 {
                                from { stroke-dashoffset: -20; }
                                to { stroke-dashoffset: 120; }
                            }
                            .trace-animate-1 {
                                animation: trace1 6s linear infinite;
                            }
                            .trace-animate-2 {
                                animation: trace2 8s linear infinite;
                            }
                        `}
                    </style>
                </defs>

                <path d="M-100 250 L 300 250 C 350 250 380 220 400 200 L 500 100 C 520 80 550 50 600 50 L 840 50 C 890 50 920 80 940 100 L 1040 200 C 1060 220 1090 250 1140 250 L 1540 250" stroke="white" strokeOpacity="0.1" strokeWidth="0.5" />
                <path className="trace-animate-1" d="M-100 250 L 300 250 C 350 250 380 220 400 200 L 500 100 C 520 80 550 50 600 50 L 840 50 C 890 50 920 80 940 100 L 1040 200 C 1060 220 1090 250 1140 250 L 1540 250" stroke="url(#glow)" strokeWidth="0.8" strokeDasharray="15 100" pathLength="100" />
            </svg>
        </div>
    );
}
