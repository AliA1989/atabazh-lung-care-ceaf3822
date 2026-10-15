import { ArrowRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";

export const CompanyCTA = () => (
  <section className="company-section border-t border-slate-200 bg-[#eaf2f7] text-slate-950">
    <div className="company-container grid items-center gap-8 lg:grid-cols-[1fr_auto]">
      <div>
        <p className="company-eyebrow !text-[#164d69]">Work with Atabazh</p>
        <h2 className="mt-4 text-3xl leading-tight tracking-tight sm:text-4xl">
          Advance the next stage with us
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Connect with our team about technical evaluation, research
          collaboration, long-term care pilot planning, or commercialization.
        </p>
      </div>
      <NavLink
        to="/contact?intent=call"
        className="company-button bg-[#164d69] text-white hover:bg-[#103d56]"
      >
        Discuss a collaboration{" "}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </NavLink>
    </div>
  </section>
);
