export default function BackgroundLines() {
    return (
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 w-full overflow-visible flex items-center justify-center -z-10">
            <svg className="w-full h-[150px]" viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.20" />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                    </linearGradient>
                    <style>
                        {`
                            @keyframes trace {
                                0% { stroke-dashoffset: 600; }
                                100% { stroke-dashoffset: -600; }
                            }
                            .trace-animate {
                                animation: trace 3.5s linear infinite;
                            }
                        `}
                    </style>
                </defs>
                <path
                    d="M 0 170 C 80 170 130 75 220 75 L 1220 75 C 1310 75 1360 170 1440 170"
                    stroke="white"
                    strokeOpacity="0.08"
                    strokeWidth="0.5"
                    fill="none"
                />
                <path
                    className="trace-animate"
                    d="M 0 170 C 80 170 130 75 220 75 L 1220 75 C 1310 75 1360 170 1440 170"
                    stroke="url(#glow)"
                    strokeWidth="1.2"
                    strokeDasharray="120 480"
                    fill="none"
                />
            </svg>
        </div>
    );
}
