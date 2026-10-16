import { ArrowRight, CheckCircle2, Gauge, ClipboardCheck } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { ScrollReveal } from "@/components/ScrollReveal";

const progress = [
  {
    icon: CheckCircle2,
    title: "Working physical prototype",
    description: "We have built and refined functional mains-powered hardware.",
  },
  {
    icon: Gauge,
    title: "Connected sensing architecture",
    description: "Contact force, orientation, and wireless telemetry inform the current engineering work.",
  },
  {
    icon: ClipboardCheck,
    title: "Refinement and verification",
    description: "Mechanical characterization, integration checks, and usability methods are the next development priorities.",
  },
];

const LivePlatformSection = () => (
  <section id="engineering-data" className="border-y border-slate-200 bg-[#eaf2f7] py-14 lg:py-16">
    <div className="company-container">
      <ScrollReveal className="max-w-3xl">
        <p className="company-eyebrow">Engineering progress</p>
        <h2 className="company-heading mt-3">Refining the working prototype</h2>
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          Smart Lung Physio™ has a functional physical prototype. We are refining mechanical output, sensing and caregiver feedback before structured verification and evaluation.
        </p>
      </ScrollReveal>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {progress.map(({ icon: Icon, title, description }) => (
          <article key={title} className="rounded-xl border border-[#d2e4ea] bg-white p-6">
            <Icon className="h-6 w-6 text-[#164d69]" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <p className="max-w-2xl text-xs leading-6 text-slate-600">
          Engineering prototype, not a validated clinical device. Firmware
          configuration and bench records do not establish therapeutic performance.
        </p>
        <NavLink to="/clinical-evidence" className="company-text-link shrink-0 text-sm">
          View development evidence <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </NavLink>
      </div>
    </div>
  </section>
);

export default LivePlatformSection;
