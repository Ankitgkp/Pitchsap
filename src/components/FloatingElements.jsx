export default function FloatingElements() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden flex justify-center">
            <div className="min-w-[1440px] w-full h-full relative">
                <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-primary/20 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute top-[40%] right-[15%] w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
                <div className="absolute top-[60%] left-[30%] w-64 h-64 bg-primary-light/10 rounded-full blur-[90px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s', animationDelay: '4s' }} />
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <style>
                        {`
              @keyframes twinkle {
                0%, 100% { opacity: 0.2; transform: scale(0.8); }
                50% { opacity: 0.8; transform: scale(1.2); }
              }
              .star { transform-origin: center; animation: twinkle infinite ease-in-out; fill: white; }
            `}
                    </style>

                    <circle cx="250" cy="150" r="1.5" className="star" style={{ animationDuration: '3s', animationDelay: '0s' }} />
                    <circle cx="1150" cy="200" r="2" className="star" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                    <circle cx="150" cy="450" r="1.5" className="star" style={{ animationDuration: '3.5s', animationDelay: '2s' }} />
                    <circle cx="1250" cy="550" r="1" className="star" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }} />
                    <circle cx="350" cy="800" r="2" className="star" style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
                    <circle cx="1000" cy="750" r="1.5" className="star" style={{ animationDuration: '5s', animationDelay: '2.5s' }} />
                </svg>
            </div>
        </div>
    );
}
