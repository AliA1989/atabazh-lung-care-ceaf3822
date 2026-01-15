import { NavLink } from "./NavLink";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-10 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logo} 
                alt="Atabazh Medical Logo" 
                className="h-14 w-14 object-contain rounded-full"
              />
              <span className="font-semibold text-base text-foreground">Atabazh Medical</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Automated respiratory care for long-term care homes across Canada.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-5 uppercase tracking-wider">Product</h3>
            <ul className="space-y-3">
              {[
                { to: "/device", label: "Smart Lung Physio™" },
                { to: "/how-it-works", label: "How It Works" },
                { to: "/clinical-evidence", label: "Clinical Evidence" }
              ].map((link) => (
                <li key={link.to}>
                  <NavLink 
                    to={link.to} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-5 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {[
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" }
              ].map((link) => (
                <li key={link.to}>
                  <NavLink 
                    to={link.to} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started Column */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-5 uppercase tracking-wider">Get Started</h3>
            <ul className="space-y-3">
              {[
                { to: "/contact", label: "Request a Demo" },
                { to: "/long-term-care", label: "For LTC Homes" }
              ].map((link) => (
                <li key={link.to}>
                  <NavLink 
                    to={link.to} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-8" />
        
        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
          
          <div className="text-center md:text-right space-y-1">
            <p className="text-xs text-muted-foreground">
              Smart Lung Physio™ — U.S. Utility Patent Pending (Application No. 19/278,634)
            </p>
            <p className="text-xs text-muted-foreground">
              © 2025 Atabazh Med. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
