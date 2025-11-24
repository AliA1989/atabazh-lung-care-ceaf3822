import { NavLink } from "./NavLink";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">A</span>
              </div>
              <span className="font-heading font-bold text-lg">Atabazh Medical</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Automated respiratory care for long-term care homes across Canada.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/device" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Smart Lung Physio™
                </NavLink>
              </li>
              <li>
                <NavLink to="/how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  How It Works
                </NavLink>
              </li>
              <li>
                <NavLink to="/clinical-evidence" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Clinical Evidence
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/about" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/news" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  News & Resources
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Get Started</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Request a Demo
                </NavLink>
              </li>
              <li>
                <NavLink to="/long-term-care" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  For LTC Homes
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Atabazh Medical Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
