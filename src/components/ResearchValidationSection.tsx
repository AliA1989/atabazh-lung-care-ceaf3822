import { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  ClipboardList,
  FileCheck2,
  Handshake,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { ScrollReveal } from "@/components/ScrollReveal";

const metrics = [
  { value: "50+", label: "Stakeholder Interviews" },
  { value: "6", label: "Validation Pathways" },
  { value: "2", label: "Countries" },
  { value: "1", label: "Mission" },
];

const pathways = [
  {
    name: "Toronto Metropolitan University",
    category: "Engineering & Technical Development",
    icon: Wrench,
    deliverables: ["Mechanical Design", "Prototyping", "Engineering Validation", "Iterative Refinement"],
    position: "lg:left-0 lg:top-4",
  },
  {
    name: "McGill University",
    category: "Pilot Readiness & Evidence Package",
    icon: ClipboardList,
    deliverables: [
      "Intended Use Definition",
      "Workflow Mapping",
      "Stakeholder Analysis",
      "QA & Regulatory Gap Review",
      "Pilot Readiness Planning",
    ],
    position: "lg:left-4 lg:bottom-10",
  },
  {
    name: "Arizona State University",
    category: "Human Factors & Usability",
    icon: Users,
    deliverables: ["Caregiver Workflow Analysis", "Human Factors Research", "Usability Testing", "Ergonomic Assessment"],
    position: "lg:left-1/2 lg:top-0 lg:-translate-x-1/2",
  },
  {
    name: "Northeastern University",
    category: "Regulatory Readiness",
    icon: ShieldCheck,
    deliverables: ["Regulatory Strategy", "Documentation Framework", "Health Canada Readiness", "Quality Planning"],
    position: "lg:right-0 lg:top-4",
  },
  {
    name: "McMaster University (Lab2Market)",
    category: "Customer Discovery & Market Validation",
    icon: BriefcaseBusiness,
    deliverables: ["Customer Discovery", "Value Proposition Validation", "Market Validation", "Commercialization Insights"],
    position: "lg:right-4 lg:bottom-10",
  },
  {
    name: "VentureMatch",
    category: "Clinical Workflow Insights",
    icon: Handshake,
    deliverables: ["Clinical Workflow Analysis", "Stakeholder Interviews", "User Need Validation", "Clinical Feedback"],
    position: "lg:left-1/2 lg:bottom-0 lg:-translate-x-1/2",
  },
];

const ResearchValidationSection = () => {
  const [activePathway, setActivePathway] = useState<number | null>(null);
  const isDeviceActive = activePathway !== null;

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_18%,rgba(14,165,233,0.26),transparent_34%),linear-gradient(135deg,#06162e_0%,#092344_48%,#041225_100%)] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-45" />
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-28 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto max-w-4xl space-y-5 text-center">
          <span className="inline-flex items-center rounded-full border border-sky-300/25 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200 shadow-lg shadow-sky-950/20 backdrop-blur">
            Validation Ecosystem
          </span>
          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl lg:text-[3.35rem]">
            From Assumptions to Evidence
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
            Smart Lung Physio is being systematically de-risked through six independent validation pathways spanning engineering, clinical workflow, usability, regulatory readiness, pilot preparation, and market validation.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 rounded-[1.75rem] border border-white/10 bg-white/[0.07] p-3 shadow-2xl shadow-slate-950/25 backdrop-blur-xl lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 text-center">
                <p className="text-2xl font-bold text-sky-200 md:text-3xl">{metric.value}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300">{metric.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150} className="mt-12">
          <div className="relative min-h-[760px] lg:min-h-[720px]">
            <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 1200 720" preserveAspectRatio="none" aria-hidden="true">
              {[
                "M600 320 C420 190 300 120 155 110",
                "M600 320 C420 410 300 548 165 585",
                "M600 320 C600 190 600 115 600 72",
                "M600 320 C780 190 900 120 1045 110",
                "M600 320 C780 410 900 548 1035 585",
                "M600 320 C600 430 600 585 600 650",
              ].map((d, index) => (
                <path
                  key={d}
                  d={d}
                  className={`validation-connection ${activePathway === index ? "validation-connection-active" : ""}`}
                  fill="none"
                />
              ))}
            </svg>

            <div className="relative z-20 mx-auto flex max-w-[460px] flex-col items-center justify-center pt-4 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
              <div className={`relative rounded-[2rem] border border-white/12 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-xl transition-all duration-500 ${isDeviceActive ? "shadow-sky-400/30 ring-2 ring-sky-300/35" : "shadow-slate-950/30 ring-1 ring-white/10"}`}>
                <div className={`absolute inset-0 rounded-[2rem] bg-sky-400/10 blur-2xl transition-opacity duration-500 ${isDeviceActive ? "opacity-100" : "opacity-35"}`} />
                <img
                  src="/lovable-uploads/product-system-new.png"
                  alt="Smart Lung Physio device and companion app"
                  className="relative z-10 h-auto w-full object-contain drop-shadow-[0_28px_60px_rgba(0,0,0,0.45)]"
                />
              </div>
              <div className="mt-5 rounded-full border border-sky-300/20 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-100">
                Smart Lung Physio
              </div>
            </div>

            <div className="mt-10 grid gap-4 lg:mt-0">
              {pathways.map((pathway, index) => (
                <div
                  key={pathway.name}
                  className={`group relative z-30 rounded-[1.4rem] border border-white/10 bg-white/[0.08] p-5 shadow-xl shadow-slate-950/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/35 hover:bg-white/[0.12] hover:shadow-2xl hover:shadow-sky-950/25 focus-within:border-sky-300/35 lg:absolute lg:w-[19.5rem] ${pathway.position}`}
                  onMouseEnter={() => setActivePathway(index)}
                  onMouseLeave={() => setActivePathway(null)}
                  onFocus={() => setActivePathway(index)}
                  onBlur={() => setActivePathway(null)}
                  tabIndex={0}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 shadow-lg shadow-sky-950/30">
                      <pathway.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">Validation Activities</p>
                      <h3 className="mt-1 text-lg font-bold leading-tight text-white">{pathway.name}</h3>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-slate-300">{pathway.category}</p>
                    </div>
                  </div>

                  <div className="mt-4 max-h-none overflow-hidden opacity-100 transition-all duration-300 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-72 lg:group-hover:opacity-100 lg:group-focus-within:max-h-72 lg:group-focus-within:opacity-100">
                    <div className="h-px bg-gradient-to-r from-transparent via-sky-300/35 to-transparent" />
                    <ul className="mt-4 space-y-2.5">
                      {pathway.deliverables.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-200">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-8 rounded-[1.75rem] border border-sky-300/15 bg-white/[0.08] p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:p-7 lg:mt-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-sky-400/15 ring-1 ring-sky-300/25">
                  <FileCheck2 className="h-6 w-6 text-sky-200" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">Validation focus</p>
                  <p className="mt-2 max-w-3xl text-base leading-relaxed text-slate-200">
                    Preparing Smart Lung Physio for pilot studies, regulatory submissions, and institutional adoption through structured validation activities across engineering, clinical workflow, usability, readiness, and market discovery.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-shrink-0">
                <NavLink
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-sky-950/20 transition hover:-translate-y-0.5 hover:bg-sky-200"
                >
                  View Validation Strategy
                  <ArrowRight className="h-4 w-4" />
                </NavLink>
                <NavLink
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-sky-300/40 hover:bg-white/12"
                >
                  Request Collaboration Brief
                </NavLink>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ResearchValidationSection;
