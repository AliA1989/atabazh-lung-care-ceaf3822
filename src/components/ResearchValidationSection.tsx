import { useState } from "react";
import {
  BriefcaseBusiness,
  ClipboardList,
  Handshake,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import logo from "@/assets/atabazh-logo.svg";
import { ScrollReveal } from "@/components/ScrollReveal";

const metrics = [
  { value: "6", label: "Validation Pathways" },
  { value: "2", label: "Countries", detail: "Canada + United States" },
  { value: "1", label: "Mission", detail: "Advancing respiratory care" },
];

const pathways = [
  {
    name: "McGill University",
    accent: "text-red-600",
    category: "Pilot Readiness & Evidence Package",
    icon: ClipboardList,
    deliverables: [
      "Intended Use Definition",
      "Workflow Mapping",
      "Stakeholder Analysis",
      "QA & Regulatory Gap Review",
      "Pilot Readiness Planning",
    ],
    position: "lg:left-1/2 lg:top-0 lg:-translate-x-1/2",
  },
  {
    name: "Arizona State University",
    accent: "text-[#8c1d40]",
    category: "Human Factors & Usability",
    icon: Users,
    deliverables: [
      "Caregiver Workflow Analysis",
      "Human Factors Research",
      "Usability Testing",
      "Ergonomic Assessment",
    ],
    position: "lg:left-0 lg:top-[205px]",
  },
  {
    name: "Northeastern University Toronto",
    accent: "text-red-700",
    category: "Regulatory Strategy & Readiness",
    icon: ShieldCheck,
    deliverables: [
      "Regulatory Strategy",
      "Documentation Framework",
      "Health Canada Submission Readiness",
      "Quality Planning",
    ],
    position: "lg:right-0 lg:top-[205px]",
  },
  {
    name: "Toronto Metropolitan University",
    accent: "text-[#006bb6]",
    category: "Device Development & Technical Refinement",
    icon: Wrench,
    deliverables: ["Mechanical Design", "Prototyping", "Engineering Validation", "Iterative Refinement"],
    position: "lg:left-0 lg:bottom-[110px]",
  },
  {
    name: "McMaster University + Lab2Market",
    accent: "text-[#6b5d46]",
    category: "Customer Discovery & Venture Validation",
    icon: BriefcaseBusiness,
    deliverables: [
      "Customer Discovery",
      "Value Proposition Validation",
      "Market Validation",
      "Commercialization Insights",
    ],
    position: "lg:right-0 lg:bottom-[110px]",
  },
  {
    name: "VentureMatch",
    accent: "text-slate-950",
    category: "Customer Discovery & Clinical Insights",
    icon: Handshake,
    deliverables: ["Clinical Workflow Analysis", "50+ Stakeholder Interviews", "User Need Validation", "Clinical Feedback"],
    position: "lg:left-1/2 lg:bottom-0 lg:-translate-x-1/2",
  },
];

const connectionPaths = [
  "M600 348 C600 258 600 150 600 86",
  "M600 348 C442 292 316 272 170 282",
  "M600 348 C758 292 884 272 1030 282",
  "M600 348 C438 420 308 510 170 565",
  "M600 348 C762 420 892 510 1030 565",
  "M600 348 C600 455 600 560 600 648",
];

const ResearchValidationSection = () => {
  const [activePathway, setActivePathway] = useState<number | null>(null);
  const isDeviceActive = activePathway !== null;

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f6fbff_48%,#eef8ff_100%)] px-5 py-14 text-slate-950 sm:px-8 lg:px-12 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(14,165,233,0.14),transparent_34%),radial-gradient(circle_at_10%_18%,rgba(2,132,199,0.08),transparent_28%),radial-gradient(circle_at_90%_68%,rgba(12,74,110,0.08),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <ScrollReveal className="relative mx-auto max-w-5xl text-center">
          <img
            src={logo}
            alt="Smart Lung Physio"
            className="mx-auto mb-5 h-20 w-auto object-contain opacity-80 lg:absolute lg:left-0 lg:top-0 lg:mx-0 lg:mb-0 lg:h-24"
          />
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Validation Ecosystem</p>
          <h2 className="mx-auto mt-3 max-w-4xl text-3xl font-bold leading-tight text-[#082b57] md:text-5xl">
            Multi-University Validation &amp; De-Risking Strategy
            <span className="block text-primary">for Smart Lung Physio</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            Different expertise. One mission: advancing practical respiratory care through engineering, workflow,
            usability, regulatory-readiness, pilot-preparation, and market-validation activities.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-xs leading-relaxed text-slate-500">
            Listed activities describe research, innovation, and validation workstreams. They are not presented as
            institutional endorsements.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120} className="mt-12">
          <div className="relative mx-auto min-h-[920px] max-w-7xl lg:min-h-[780px]">
            <svg
              className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
              viewBox="0 0 1200 720"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {connectionPaths.map((d, index) => (
                <path
                  key={d}
                  d={d}
                  className={`validation-connection ${activePathway === index ? "validation-connection-active" : ""}`}
                  fill="none"
                />
              ))}
            </svg>

            <div className="relative z-20 mx-auto flex max-w-[410px] flex-col items-center justify-center pt-2 lg:absolute lg:left-1/2 lg:top-[330px] lg:-translate-x-1/2">
              <div
                className={`relative rounded-[2rem] bg-white/70 p-5 shadow-[0_30px_90px_rgba(8,43,87,0.16)] ring-1 ring-sky-100/90 backdrop-blur transition-all duration-500 ${
                  isDeviceActive ? "scale-[1.03] shadow-[0_36px_110px_rgba(2,132,199,0.28)] ring-2 ring-sky-300/70" : ""
                }`}
              >
                <div
                  className={`absolute inset-4 rounded-[1.5rem] bg-sky-200/30 blur-3xl transition-opacity duration-500 ${
                    isDeviceActive ? "opacity-100" : "opacity-45"
                  }`}
                />
                <img
                  src="/lovable-uploads/product-system-new.png"
                  alt="Smart Lung Physio device and companion app"
                  className="relative z-10 h-auto w-full object-contain drop-shadow-[0_24px_42px_rgba(15,23,42,0.22)]"
                />
              </div>
              <div className="mt-4 rounded-full border border-sky-200 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary shadow-sm">
                Smart Lung Physio
              </div>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-0 lg:block">
              {pathways.map((pathway, index) => (
                <div
                  key={pathway.name}
                  className={`group relative z-30 rounded-[1.3rem] border border-sky-100 bg-white/88 p-4 shadow-[0_18px_50px_rgba(8,43,87,0.1)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-[0_26px_70px_rgba(8,43,87,0.16)] focus-within:border-sky-300 lg:absolute lg:w-[20rem] ${pathway.position}`}
                  onMouseEnter={() => setActivePathway(index)}
                  onMouseLeave={() => setActivePathway(null)}
                  onFocus={() => setActivePathway(index)}
                  onBlur={() => setActivePathway(null)}
                  tabIndex={0}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-sky-50 text-primary ring-1 ring-sky-100 transition group-hover:bg-primary group-hover:text-white">
                      <pathway.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className={`text-xl font-extrabold leading-tight ${pathway.accent}`}>{pathway.name}</h3>
                      <div className="mt-3 rounded-lg bg-[#082b57] px-3 py-2 text-center text-xs font-bold uppercase leading-tight tracking-[0.08em] text-white shadow-sm">
                        {pathway.category}
                      </div>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {pathway.deliverables.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-snug text-slate-700">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <div className="mx-auto mt-8 grid max-w-6xl overflow-hidden rounded-2xl bg-[#082b57] text-white shadow-[0_24px_70px_rgba(8,43,87,0.24)] sm:grid-cols-3">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`flex items-center justify-center gap-4 px-6 py-6 text-center ${
                  index > 0 ? "border-t border-white/15 sm:border-l sm:border-t-0" : ""
                }`}
              >
                <span className="text-5xl font-bold leading-none text-white md:text-6xl">{metric.value}</span>
                <span className="text-left">
                  <span className="block text-sm font-bold uppercase tracking-[0.12em] text-white">{metric.label}</span>
                  {metric.detail && (
                    <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.12em] text-sky-100/80">
                      {metric.detail}
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ResearchValidationSection;
