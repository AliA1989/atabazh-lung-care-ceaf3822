import { ArrowUpRight, Linkedin } from "lucide-react";
import { NavLink } from "./NavLink";
import logo from "@/assets/atabazh-logo.webp";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#07111f] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-16">
          <div>
            <NavLink to="/" className="group inline-flex items-center gap-3" aria-label="Atabazh Med home">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <img src={logo} alt="" className="h-10 w-10 object-contain brightness-0 invert opacity-90" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-base font-bold uppercase tracking-[0.12em]">Atabazh</span>
                <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-300">Med</span>
              </span>
            </NavLink>
            <p className="mt-6 max-w-md text-sm leading-6 text-slate-400">
              Developing Smart Lung Physio™—a caregiver-guided airway-clearance system for supervised respiratory-care workflows.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-300/15 bg-amber-300/5 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-amber-200">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              Under development · Not cleared for sale
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Explore</p>
            <div className="mt-5 grid gap-3">
              {[
                { to: "/device", label: "Smart Lung Physio™" },
                { to: "/clinical-evidence", label: "Evidence & Development" },
                { to: "/long-term-care", label: "Long-Term Care" },
                { to: "/about", label: "Company" },
              ].map((link) => (
                <NavLink key={link.to} to={link.to} className="w-fit text-sm font-medium text-slate-300 transition hover:text-sky-300">
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Connect</p>
            <NavLink to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-sky-300">
              Discuss collaboration
              <ArrowUpRight className="h-4 w-4" />
            </NavLink>
            <a
              href="https://www.linkedin.com/company/atabazh-medical-inc"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-fit items-center gap-2 text-sm text-slate-400 transition hover:text-sky-300"
              aria-label="Follow Atabazh Medical on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Atabazh Medical Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <NavLink to="/privacy" className="transition hover:text-slate-300">Privacy</NavLink>
            <NavLink to="/terms" className="transition hover:text-slate-300">Website Terms</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
