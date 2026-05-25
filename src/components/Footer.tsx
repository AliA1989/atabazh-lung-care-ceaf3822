import { NavLink } from "./NavLink";
import logo from "@/assets/atabazh-logo.svg";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1e3a5f] border-t border-[#2a4a70]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-14">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-1">
            <NavLink to="/" className="inline-flex items-center gap-4 mb-5 group" aria-label="Atabazh Med home">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg shadow-slate-950/20 ring-1 ring-white/30 transition-transform duration-300 group-hover:scale-[1.03]">
                <img 
                  src={logo} 
                  alt="" 
                  className="h-14 w-14 object-contain contrast-125 saturate-110"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-[0.08em] text-white uppercase">
                  Atabazh
                </span>
                <span className="mt-1.5 text-xs font-semibold tracking-[0.24em] text-blue-300 uppercase">
                  Med
                </span>
              </span>
            </NavLink>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Automated respiratory care for long-term care homes across Canada.
            </p>
            <a 
              href="https://www.linkedin.com/company/atabazh-medical-inc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="Follow Atabazh Medical on LinkedIn"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Linkedin className="h-4 w-4 text-blue-400" />
              </div>
              <span>Follow us on LinkedIn</span>
            </a>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-semibold text-sm text-white mb-5 uppercase tracking-wider">Product</h3>
            <ul className="space-y-3">
              {[
                { to: "/device", label: "Smart Lung Physio™" },
                { to: "/how-it-works", label: "How It Works" },
                { to: "/clinical-evidence", label: "Clinical Insights" },
                { to: "/long-term-care", label: "For LTC Homes" }
              ].map((link) => (
                <li key={link.to}>
                  <NavLink 
                    to={link.to} 
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-sm text-white mb-5 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {[
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" }
              ].map((link) => (
                <li key={link.to}>
                  <NavLink 
                    to={link.to} 
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started Column */}
          <div>
            <h3 className="font-semibold text-sm text-white mb-5 uppercase tracking-wider">Get Started</h3>
            <ul className="space-y-3">
              {[
                { to: "/contact", label: "Request a Demo" },
                { to: "/long-term-care", label: "For LTC Homes" }
              ].map((link) => (
                <li key={link.to}>
                  <NavLink 
                    to={link.to} 
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-700/50 my-10" />
        
        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <a 
              href="#" 
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
          
          <div className="text-center md:text-right space-y-1">
            <p className="text-xs text-slate-500">
              Smart Lung Physio™ — U.S. Utility Patent Pending (Application No. 19/278,634)
            </p>
            <p className="text-xs text-slate-500">
              © 2025 Atabazh Med. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
