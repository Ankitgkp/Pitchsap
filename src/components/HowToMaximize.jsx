export default function HowToMaximize() {
  const steps = [
    {
      title: "Engage Fully",
      description: "Leverage every resource, consultant, mentors, and AI insights to accelerate your idea from spark to product.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    },
    {
      title: "Stay Open",
      description: "Embrace feedback and new perspectives; guidance is the engine that sharpens every great idea.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      )
    },
    {
      title: "Be Bolder",
      description: "Bring your most disruptive ideas. Pitchsap supports each of them from day one with courage.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative z-10 max-w-6xl mx-auto px-4 pb-24 pt-0 -mt-0 flex flex-col items-center">
      <div className="text-center mb-24">
        <div className="relative inline-block mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white relative z-10" style={{ fontFamily: "'Aeonik Pro', sans-serif" }}>
            How To Maximize Pitchsap
          </h2>
          <div className="absolute -bottom-4 left-0 w-full h-4 pointer-events-none">
            <svg viewBox="0 0 300 15" preserveAspectRatio="none" className="w-full h-full text-primary opacity-70">
              <path 
                d="M5 10 Q 50 12 150 10 T 295 12" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="4" 
                strokeLinecap="round" 
              />
              <path 
                d="M10 13 Q 60 15 160 13 T 290 15" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
              />
            </svg>
          </div>
        </div>
        <p className="text-muted text-sm max-w-lg mx-auto leading-relaxed mt-4">
          Together, we'll work toward that moment when your idea becomes a product that people use, love, and can't imagine living without.
        </p>
      </div>

      <div className="relative w-full max-w-4xl space-y-12">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="relative shrink-0">
               <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary-light">
                  {step.icon}
               </div>
            </div>
            
            <div className="flex-1 p-8 rounded-[2rem] bg-surface/30 backdrop-blur-md border border-white/[0.03] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] text-center md:text-left group hover:border-primary/10 transition-all">
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Aeonik Pro', sans-serif" }}>
                {step.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed" style={{ fontFamily: "'Aeonik Pro', sans-serif" }}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 text-center w-full max-w-2xl mx-auto pt-16 border-t border-white/[0.05]">
        <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Aeonik Pro', sans-serif" }}>
          Building Long Lasting Relationships
        </h3>
        <p className="text-muted text-sm leading-relaxed italic mb-10">
          We're here to be your long-term innovation partner. At Pitchsap, the bonds you form are just as valuable as the ideas themselves.
        </p>
        <div className="text-lg font-bold text-white" style={{ fontFamily: "'Aeonik Pro', sans-serif" }}>
          At Pitchsap — we help you create a <span className="text-primary-light italic">Legacy</span>
        </div>
      </div>
    </section>
  );
}
