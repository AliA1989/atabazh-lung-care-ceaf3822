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
    <nav className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
      scrolled
        ? "border-slate-200 bg-white/95 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.45)] backdrop-blur-xl"
        : "border-slate-200/70 bg-[#f8fafc]/90 backdrop-blur-xl"
    }`}>
      <div className="relative mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-[4.5rem]"}`}>
          {/* Logo */}
          <NavLink to="/" className="group flex shrink-0 items-center gap-2.5 sm:gap-3" aria-label="Atabazh Med home">
            <span className="flex h-10 w-10 items-center justify-center transition-transform duration-300 group-hover:scale-[1.03] sm:h-11 sm:w-11">
              <img 
                src={logo} 
                alt="" 
                className="h-9 w-9 object-contain contrast-125 saturate-110 sm:h-10 sm:w-10"
              />
            </span>
            <div className="flex flex-col leading-none">
              <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-slate-950 sm:text-sm">
                Atabazh
              </span>
              <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-blue-700 sm:text-[10px]">
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
                  ? "ml-2 rounded-lg bg-blue-700 px-4 py-2.5 text-xs font-semibold tracking-wide text-white shadow-sm transition hover:bg-blue-800"
                  : "rounded-lg px-3.5 py-2.5 text-xs font-semibold tracking-wide text-slate-600 transition hover:bg-white hover:text-slate-950 xl:px-4 xl:text-[13px]"}
                activeClassName={link.emphasis ? "bg-blue-800" : "bg-white text-blue-700 shadow-sm"}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="rounded-lg border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm transition-colors duration-200 hover:bg-slate-50 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-navigation" className="animate-fade-in border-t border-slate-200 bg-white shadow-xl lg:hidden">
          <div className="mx-auto max-w-[90rem] space-y-1 px-5 py-5 sm:px-8">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={link.emphasis
                  ? "mt-3 block rounded-lg bg-blue-700 px-4 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-blue-800"
                  : "block rounded-lg px-4 py-3.5 text-sm font-semibold text-slate-600 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700"}
                activeClassName={link.emphasis ? "bg-blue-800" : "bg-blue-50 text-blue-700"}
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
