import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/pitchsap_logo.png";

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
      <Link to="/" className="flex items-center gap-3">
        <img 
          src={logo} 
          alt="Pitchsap Logo" 
          className={`transition-all duration-300 object-contain ${scrolled ? "h-6" : "h-8"}`} 
        />
        <span className="font-medium text-xl bg-clip-text text-transparent" style={{ fontFamily: "'Aeonik Pro', sans-serif", backgroundImage: "linear-gradient(180deg, #ffffffe6, #ffffffbf)" }}>Pitchsap</span>
      </Link>

      <ul className="hidden md:flex items-center gap-6">
        {links.map((l) => (
          <li key={l}>
            <a href={`/#${l.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm font-medium text-muted hover:text-white transition" style={{ fontFamily: "'Aeonik Pro', sans-serif" }}>
              {l}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center gap-4">
        <Link to="/login" className="px-5 py-2 rounded-full border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-all" style={{ fontFamily: "'Aeonik Pro', sans-serif" }}>
          Login
        </Link>
        <Link to="/signup" className="px-5 py-2 rounded-full bg-primary hover:bg-primary/90 text-white text-sm font-medium transition-all shadow-[0_3px_0_var(--color-primary-dark)] active:shadow-[0_0px_0_var(--color-primary-dark)] active:translate-y-[3px]" style={{ fontFamily: "'Aeonik Pro', sans-serif" }}>
          Sign Up
        </Link>
      </div>

      <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl cursor-pointer">
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl border border-white/10 bg-surface/95 backdrop-blur-xl p-6 flex flex-col gap-4 md:hidden">
          {links.map((l) => (
            <a key={l} href={`/#${l.toLowerCase().replace(/\s+/g, "-")}`} className="font-medium text-muted hover:text-white transition" onClick={() => setOpen(false)} style={{ fontFamily: "'Aeonik Pro', sans-serif" }}>
              {l}
            </a>
          ))}
          <Link to="/login" className="px-5 py-2 rounded-full border border-white/10 text-white text-sm font-medium text-center hover:bg-white/5 transition-all" onClick={() => setOpen(false)} style={{ fontFamily: "'Aeonik Pro', sans-serif" }}>
            Login
          </Link>
          <Link to="/signup" className="px-5 py-2 rounded-full bg-primary text-white text-sm font-medium text-center transition-all shadow-[0_3px_0_var(--color-primary-dark)] active:shadow-[0_0px_0_var(--color-primary-dark)] active:translate-y-[3px]" onClick={() => setOpen(false)} style={{ fontFamily: "'Aeonik Pro', sans-serif" }}>
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
