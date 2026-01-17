import { useState, useEffect } from "react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/logo-horizontal.png";

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
    { to: "/how-it-works", label: "How It Works" },
    { to: "/clinical-evidence", label: "Clinical Insights" },
    { to: "/long-term-care", label: "For LTC Homes" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/90 backdrop-blur-xl shadow-medium border-b border-border/10" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <NavLink to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="Atabazh Medical" 
              className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-[13px] font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative py-1 group"
                activeClassName="text-primary"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button 
              asChild 
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary-dark px-6 py-2.5 text-sm font-semibold shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <NavLink to="/contact" className="flex items-center gap-2">
                Request a Demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </NavLink>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2.5 rounded-full text-foreground hover:bg-secondary transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/20 bg-white/98 backdrop-blur-xl shadow-large animate-fade-in">
          <div className="container mx-auto px-4 py-5 space-y-1">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block px-4 py-3.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-xl transition-all duration-200"
                activeClassName="text-primary bg-primary/5 font-semibold"
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-5 border-t border-border/20 mt-4">
              <Button 
                asChild 
                className="w-full rounded-full bg-primary text-primary-foreground shadow-soft hover:shadow-medium py-3 font-semibold"
              >
                <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Request a Demo
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
