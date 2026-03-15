export default function BackgroundLines() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden flex justify-center">
            <svg className="min-w-[1440px] w-full h-full opacity-60" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#cfb6ff" stopOpacity="0" />
                        <stop offset="100%" stopColor="#cfb6ff" stopOpacity="0.3" />
                    </linearGradient>
                    <style>
                        {`
                            @keyframes trace1 {
                                from { stroke-dashoffset: 120; }
                                auto /* Wait, 'to' instead of auto */
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

                <path d="M-100 250 L 300 250 C 350 250 380 220 400 200 L 500 100 C 520 80 550 50 600 50 L 1500 50" stroke="white" strokeOpacity="0.10" strokeWidth="1" />
                <path className="trace-animate-1" d="M-100 250 L 300 250 C 350 250 380 220 400 200 L 500 100 C 520 80 550 50 600 50 L 1500 50" stroke="url(#glow)" strokeWidth="1.5" strokeDasharray="15 100" pathLength="100" />
                <path d="M-100 300 L 250 300 C 300 300 330 270 350 250 L 450 150 C 470 130 500 100 550 100 L 1500 100" stroke="white" strokeOpacity="0.04" strokeWidth="1" />
                <path d="M1540 350 L 1150 350 C 1100 350 1070 320 1050 300 L 950 200 C 930 180 900 150 850 150 L -100 150" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
                <path d="M-100 700 L 200 700 C 250 700 280 730 300 750 L 400 850 C 420 870 450 900 500 900 L 1500 900" stroke="white" strokeOpacity="0.03" strokeWidth="1" />
                <path d="M1540 600 L 1200 600 C 1150 600 1120 630 1100 650 L 1000 750 C 980 770 950 800 900 800 L -100 800" stroke="white" strokeOpacity="0.03" strokeWidth="1" />

                <path className="trace-animate-2" d="M1540 600 L 1200 600 C 1150 600 1120 630 1100 650 L 1000 750 C 980 770 950 800 900 800 L -100 800" stroke="url(#glow)" strokeWidth="1.5" strokeDasharray="15 100" pathLength="100" />
            </svg>
        </div>
    );
}
