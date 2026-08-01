import { useState, useEffect } from "react";
import { NavLink } from "./NavLink";
import { Menu, X } from "lucide-react";
import logo from "@/assets/atabazh-logo.webp";

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
    { to: "/device", label: "Product" },
    { to: "/clinical-evidence", label: "Evidence" },
    { to: "/long-term-care", label: "Long-Term Care" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact", emphasis: true },
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
        <div className="flex h-16 items-center justify-between sm:h-20">
          {/* Logo */}
          <NavLink to="/" className="group flex shrink-0 items-center gap-2.5 sm:gap-3.5" aria-label="Atabazh Med home">
            <span className="flex h-11 w-11 items-center justify-center transition-transform duration-300 group-hover:scale-[1.03] sm:h-14 sm:w-14 lg:h-16 lg:w-16">
              <img 
                src={logo} 
                alt="" 
                className="h-10 w-10 object-contain contrast-125 saturate-110 drop-shadow-[0_2px_5px_rgba(15,23,42,0.16)] sm:h-[3.25rem] sm:w-[3.25rem] lg:h-[3.75rem] lg:w-[3.75rem]"
              />
            </span>
            <div className="flex flex-col leading-none">
              <span className="text-[13px] font-bold uppercase tracking-[0.09em] text-slate-950 sm:text-base sm:tracking-[0.1em] lg:text-[1.05rem]">
                Atabazh
              </span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-primary sm:mt-1.5 sm:text-[11px] sm:tracking-[0.3em] lg:text-xs">
                Med
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation - Centered with wider gaps */}
          <div className="hidden items-center gap-3 lg:flex xl:gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={link.emphasis
                  ? "rounded-full bg-blue-700 px-5 py-2.5 text-xs font-semibold tracking-wide text-white shadow-md shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800"
                  : "group relative whitespace-nowrap py-2 text-xs font-semibold tracking-wide text-slate-600 transition-all duration-300 hover:text-primary xl:text-[13px]"}
                activeClassName={link.emphasis ? "bg-blue-800" : "text-primary"}
              >
                {link.label}
                {!link.emphasis && (
                  <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 scale-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-100" />
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2.5 rounded-full text-slate-700 hover:bg-white/50 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="lg:hidden border-t border-white/10 bg-white/95 backdrop-blur-xl shadow-2xl animate-fade-in">
          <div className="container mx-auto px-4 py-6 space-y-1">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={link.emphasis
                  ? "mt-3 block rounded-xl bg-blue-700 px-4 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-blue-800"
                  : "block rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-600 transition-all duration-200 hover:bg-primary/5 hover:text-primary"}
                activeClassName={link.emphasis ? "bg-blue-800" : "text-primary bg-primary/5"}
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
