import { NavLink } from "./NavLink";
import logo from "@/assets/atabazh-logo.webp";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1e3a5f] border-t border-[#2a4a70]">
      <div className="container mx-auto px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.25fr_1fr_1fr_1fr] lg:gap-14">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-1">
            <NavLink to="/" className="group mb-6 inline-flex items-center gap-3.5 sm:gap-4" aria-label="Atabazh Med home">
              <span className="flex h-14 w-14 items-center justify-center transition-transform duration-300 group-hover:scale-[1.03] sm:h-[4.5rem] sm:w-[4.5rem]">
                <img 
                  src={logo} 
                  alt="" 
                  className="h-[3.25rem] w-[3.25rem] object-contain brightness-0 invert opacity-90 drop-shadow-[0_2px_10px_rgba(125,211,252,0.18)] sm:h-[4.25rem] sm:w-[4.25rem]"
                />
              </span>
              <span className="flex flex-col leading-none pt-0.5">
                <span className="text-xl font-bold uppercase tracking-[0.11em] text-white">
                  Atabazh
                </span>
                <span className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
                  Med
                </span>
              </span>
            </NavLink>
            <p className="max-w-[18rem] text-sm leading-relaxed text-slate-300/85">
              Developing workflow-informed respiratory-care technology for long-term care and supervised care settings.
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
                { to: "/clinical-evidence", label: "Evidence & Development" },
                { to: "/long-term-care", label: "LTC Implementation" }
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
                { to: "/news", label: "News & Resources" },
                { to: "/contact", label: "Discuss a Pilot" }
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
                { to: "/contact", label: "Book a Discovery Call" },
                { to: "/long-term-care", label: "View LTC Fit" }
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
            <NavLink to="/privacy" className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200">
              Website Terms
            </NavLink>
          </div>
          
          <div className="text-center md:text-right space-y-1">
            <p className="text-xs text-slate-500">
              Smart Lung Physio™ is under development and is not cleared for sale.
            </p>
            <p className="text-xs text-slate-500">
              © 2026 Atabazh Medical Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
