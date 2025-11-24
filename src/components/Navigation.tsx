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
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/99 backdrop-blur-md border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 transition-all duration-300 group-hover:scale-105">
              <img src={logo} alt="Atabazh Medical Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-heading font-bold text-lg text-foreground hidden sm:block">Atabazh Medical</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="px-3.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 rounded-md hover:bg-secondary/50 relative"
                activeClassName="text-primary bg-secondary/70 font-semibold"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <Button asChild variant="ghost" size="sm" className="font-medium text-sm">
              <NavLink to="/contact">Contact</NavLink>
            </Button>
            <Button asChild size="sm" className="hero-gradient border-0 shadow-sm hover:shadow-md transition-all duration-300 text-sm">
              <NavLink to="/contact">Request a Demo</NavLink>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2.5 rounded-lg text-foreground hover:bg-secondary/60 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/50 bg-background/98 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-5 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block px-5 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60 rounded-lg transition-all duration-200"
                activeClassName="text-primary bg-secondary/80 font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-5 space-y-3 border-t border-border/50 mt-4">
              <Button asChild variant="outline" className="w-full font-medium">
                <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </NavLink>
              </Button>
              <Button asChild className="w-full hero-gradient border-0 shadow-md">
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
