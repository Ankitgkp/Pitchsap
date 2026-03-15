import { useState, useEffect } from "react";

const links = ["How It Works", "Benefits", "Consultants", "Blogs", "Contact Us"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed left-1/2 -translate-x-1/2 z-50 rounded-2xl border border-white/10 backdrop-blur-xl flex items-center justify-between transition-all duration-300 ${scrolled ? "top-2 w-[90%] max-w-5xl px-4 py-2" : "top-4 w-[95%] max-w-6xl px-6 py-3"} bg-surface/80`}>
      <a href="/" className="flex items-center gap-2">
        <img src="/favicon.svg" alt="Pitchsap" className={`transition-all duration-300 ${scrolled ? "w-6 h-6" : "w-8 h-8"}`} />
        <span className="text-white font-bold text-lg">Pitchsap</span>
      </a>

      <ul className="hidden md:flex items-center gap-6">
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm font-bold text-muted hover:text-white transition">
              {l}
            </a>
          </li>
        ))}
      </ul>

      <a href="#login" className="hidden md:inline-block px-5 py-2 rounded-full bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-all shadow-[0_3px_0_var(--color-primary-dark)] active:shadow-[0_0px_0_var(--color-primary-dark)] active:translate-y-[3px]">
        Login
      </a>

      <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl cursor-pointer">
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl border border-white/10 bg-surface/95 backdrop-blur-xl p-6 flex flex-col gap-4 md:hidden">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} className="font-bold text-muted hover:text-white transition" onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <a href="#login" className="px-5 py-2 rounded-full bg-primary text-white text-sm font-bold text-center transition-all shadow-[0_3px_0_var(--color-primary-dark)] active:shadow-[0_0px_0_var(--color-primary-dark)] active:translate-y-[3px]">
            Login
          </a>
        </div>
      )}
    </nav>
  );
}
