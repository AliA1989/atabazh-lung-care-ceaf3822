import { useState } from "react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/device", label: "Smart Lung Physio™" },
    { to: "/how-it-works", label: "How It Works" },
    { to: "/clinical-evidence", label: "Clinical Evidence" },
    { to: "/long-term-care", label: "For LTC Homes" },
    { to: "/about", label: "About" },
    { to: "/news", label: "News & Resources" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">A</span>
            </div>
            <span className="font-heading font-bold text-xl text-foreground">Atabazh Medical</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-md hover:bg-secondary/50"
                activeClassName="text-primary bg-secondary"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild variant="outline" size="sm">
              <NavLink to="/contact">Contact</NavLink>
            </Button>
            <Button asChild size="sm" className="hero-gradient border-0">
              <NavLink to="/contact">Request a Demo</NavLink>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-smooth"
                activeClassName="text-primary bg-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-4 space-y-2">
              <Button asChild variant="outline" className="w-full">
                <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </NavLink>
              </Button>
              <Button asChild className="w-full hero-gradient border-0">
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
