import { useState } from "react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/device", label: "Smart Lung Physio™" },
    { to: "/how-it-works", label: "How It Works" },
    { to: "/clinical-evidence", label: "Clinical Evidence" },
    { to: "/long-term-care", label: "For LTC Homes" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border/20 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo and Brand Name */}
          <NavLink to="/" className="flex items-center gap-4 group">
            <img 
              src={logo} 
              alt="Atabazh Medical Logo" 
              className="h-[52px] w-[52px] object-contain rounded-full"
              style={{ imageRendering: 'crisp-edges' }}
            />
            <span className="font-sans font-medium text-sm text-foreground tracking-[0.15em] uppercase hidden sm:block">
              ATABAZH MED
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                activeClassName="text-foreground after:w-full"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 text-sm font-medium shadow-sm">
              <NavLink to="/contact">Request a Demo</NavLink>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-full text-foreground hover:bg-secondary/60 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/30 bg-white/95 backdrop-blur-xl shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/40 rounded-lg transition-all duration-200"
                activeClassName="text-foreground bg-secondary/50 font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-4 border-t border-border/30 mt-3">
              <Button asChild className="w-full rounded-full bg-primary text-primary-foreground shadow-md">
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
