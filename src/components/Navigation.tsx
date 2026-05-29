import { useState, useEffect } from "react";
import { NavLink } from "./NavLink";
import { Menu, X } from "lucide-react";
import logo from "@/assets/atabazh-logo.svg";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/device", label: "Smart Lung Physio™" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-900/5 border-b border-white/10" 
        : "bg-white/20 backdrop-blur-lg border-b border-white/10"
    }`}>
      {/* Glassmorphism overlay */}
      <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
        scrolled ? "bg-gradient-to-r from-white/50 via-white/40 to-white/50" : "bg-transparent"
      }`} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3.5 group shrink-0" aria-label="Atabazh Med home">
            <span className="flex h-12 w-12 items-center justify-center transition-transform duration-300 group-hover:scale-[1.03] lg:h-[3.25rem] lg:w-[3.25rem]">
              <img 
                src={logo} 
                alt="" 
                className="h-11 w-11 object-contain contrast-125 saturate-110 drop-shadow-[0_1px_2px_rgba(15,23,42,0.18)] lg:h-12 lg:w-12"
              />
            </span>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-[15px] lg:text-base font-bold tracking-[0.08em] text-slate-950 uppercase">
                Atabazh
              </span>
              <span className="mt-1 text-[11px] lg:text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                Med
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation - Centered with wider gaps */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-[12px] xl:text-[13px] font-semibold text-slate-600 hover:text-primary transition-all duration-300 relative py-2 group tracking-wide whitespace-nowrap"
                activeClassName="text-primary"
              >
                {link.label}
                {/* Dot indicator on hover */}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary scale-0 transition-transform duration-300 group-hover:scale-100" />
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2.5 rounded-full text-slate-700 hover:bg-white/50 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-white/95 backdrop-blur-xl shadow-2xl animate-fade-in">
          <div className="container mx-auto px-4 py-6 space-y-1">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block px-4 py-3.5 text-sm font-semibold text-slate-600 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200"
                activeClassName="text-primary bg-primary/5"
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
