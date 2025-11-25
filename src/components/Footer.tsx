import { NavLink } from "./NavLink";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center shadow-soft">
                <span className="text-primary-foreground font-heading font-bold text-2xl">A</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">Atabazh Medical</span>
            </div>
            <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-xs">
              Automated respiratory care for long-term care homes across Canada.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-heading font-bold text-base text-foreground mb-6">Product</h3>
            <ul className="space-y-3">
              <li>
                <NavLink 
                  to="/device" 
                  className="text-sm text-muted-foreground/70 hover:text-primary transition-smooth block"
                >
                  Smart Lung Physio™
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/how-it-works" 
                  className="text-sm text-muted-foreground/70 hover:text-primary transition-smooth block"
                >
                  How It Works
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/clinical-evidence" 
                  className="text-sm text-muted-foreground/70 hover:text-primary transition-smooth block"
                >
                  Clinical Evidence
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-heading font-bold text-base text-foreground mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <NavLink 
                  to="/about" 
                  className="text-sm text-muted-foreground/70 hover:text-primary transition-smooth block"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/news" 
                  className="text-sm text-muted-foreground/70 hover:text-primary transition-smooth block"
                >
                  News & Resources
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className="text-sm text-muted-foreground/70 hover:text-primary transition-smooth block"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Get Started Column */}
          <div>
            <h3 className="font-heading font-bold text-base text-foreground mb-6">Get Started</h3>
            <ul className="space-y-3">
              <li>
                <NavLink 
                  to="/contact" 
                  className="text-sm text-muted-foreground/70 hover:text-primary transition-smooth block"
                >
                  Request a Demo
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/long-term-care" 
                  className="text-sm text-muted-foreground/70 hover:text-primary transition-smooth block"
                >
                  For LTC Homes
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <Separator className="my-12 bg-border/50" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground/60">
            © {new Date().getFullYear()} Atabazh Medical Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a 
              href="#" 
              className="text-sm text-muted-foreground/60 hover:text-foreground transition-smooth"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground/60 hover:text-foreground transition-smooth"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;