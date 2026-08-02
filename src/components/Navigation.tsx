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
    { to: "/contact", label: "Collaborate", emphasis: true },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-5">
      <div className={`mx-auto max-w-[90rem] rounded-2xl border border-white/35 bg-white/90 px-3 backdrop-blur-2xl transition-all duration-300 sm:px-5 ${
        scrolled ? "shadow-[0_16px_45px_-24px_rgba(15,23,42,0.45)]" : "shadow-[0_10px_35px_-26px_rgba(15,23,42,0.4)]"
      }`}>
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14 sm:h-16" : "h-16 sm:h-[4.5rem]"}`}>
          {/* Logo */}
          <NavLink to="/" className="group flex shrink-0 items-center gap-2.5 sm:gap-3" aria-label="Atabazh Med home">
            <span className="flex h-10 w-10 items-center justify-center transition-transform duration-300 group-hover:scale-[1.03] sm:h-12 sm:w-12">
              <img 
                src={logo} 
                alt="" 
                className="h-9 w-9 object-contain contrast-125 saturate-110 sm:h-11 sm:w-11"
              />
            </span>
            <div className="flex flex-col leading-none">
              <span className="text-[13px] font-bold uppercase tracking-[0.09em] text-slate-950 sm:text-[15px] sm:tracking-[0.1em]">
                Atabazh
              </span>
              <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.26em] text-blue-700 sm:text-[10px] sm:tracking-[0.3em]">
                Med
              </span>
            </div>
          </NavLink>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={link.emphasis
                  ? "ml-2 rounded-full bg-slate-950 px-5 py-2.5 text-xs font-bold tracking-wide text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-800"
                  : "rounded-full px-4 py-2.5 text-xs font-semibold tracking-wide text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 xl:text-[13px]"}
                activeClassName={link.emphasis ? "bg-blue-800" : "text-primary"}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="rounded-full p-2.5 text-slate-700 transition-colors duration-200 hover:bg-slate-100 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="animate-fade-in border-t border-slate-200 py-3 lg:hidden">
            <div className="space-y-1">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={link.emphasis
                  ? "mt-3 block rounded-xl bg-slate-950 px-4 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-blue-800"
                  : "block rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-950"}
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
      </div>
    </nav>
  );
};

export default Navigation;
