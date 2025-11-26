import { NavLink } from "./NavLink";
import { Separator } from "./ui/separator";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-20">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-4 mb-7">
              <img 
                src={logo} 
                alt="Atabazh Medical Logo" 
                className="h-20 w-auto object-contain"
              />
              <span className="font-heading font-bold text-2xl text-foreground leading-tight">Atabazh Medical</span>
            </div>
            <p className="text-[13px] text-muted-foreground/75 leading-relaxed max-w-xs">
              Automated respiratory care for long-term care homes across Canada.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-heading font-bold text-[15px] text-foreground mb-7 tracking-wide">Product</h3>
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
            <h3 className="font-heading font-bold text-[15px] text-foreground mb-7 tracking-wide">Company</h3>
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
            <h3 className="font-heading font-bold text-[15px] text-foreground mb-7 tracking-wide">Get Started</h3>
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
        <Separator className="my-16 bg-border/40" />
        
        <div className="flex justify-center items-center gap-10">
          <a 
            href="#" 
            className="text-[13px] text-muted-foreground/65 hover:text-foreground transition-smooth"
          >
            Privacy Policy
          </a>
          <a 
            href="#" 
            className="text-[13px] text-muted-foreground/65 hover:text-foreground transition-smooth"
          >
            Terms of Service
          </a>
        </div>

        {/* Legal Section Divider */}
        <div className="w-full h-px bg-border my-5" />

        {/* Legal Section */}
        <div className="text-center">
          <p className="text-[12px] text-muted-foreground leading-relaxed">
            Smart Lung Physio™ — U.S. Utility Patent Pending (Application No. 19/278,634)
          </p>
          <p className="text-[12px] text-muted-foreground mt-1">
            © 2025 Atabazh Med. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;