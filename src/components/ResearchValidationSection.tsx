import { useState } from "react";
import {
  Activity,
  BriefcaseBusiness,
  ClipboardList,
  Globe2,
  Handshake,
  Network,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const stats = [
  {
    value: "6",
    label: "Validation Pathways",
    icon: Network,
    tone: "text-sky-600 bg-sky-50",
  },
  {
    value: "2",
    label: "Countries (CA & US)",
    icon: Globe2,
    tone: "text-indigo-600 bg-indigo-50",
  },
  {
    value: "1",
    label: "Unified Mission",
    icon: Activity,
    tone: "text-emerald-600 bg-emerald-50",
  },
];

const pathways = [
  {
    short: "McG",
    name: "McGill University",
    category: "Pilot Readiness & Evidence",
    icon: ClipboardList,
    badgeTone: "bg-red-50 text-red-700",
    description:
      "Evidence-package preparation focused on intended use, workflow definition, stakeholder context, and pilot-readiness planning.",
    deliverables: [
      "Intended Use Definition",
      "Workflow Mapping",
      "Stakeholder Analysis",
      "QA & Regulatory Gap Review",
      "Pilot Readiness Planning",
    ],
  },
  {
    short: "ASU",
    name: "Arizona State University",
    category: "Usability & Human Factors",
    icon: Users,
    badgeTone: "bg-rose-50 text-rose-700",
    description:
      "Human-factors workstreams exploring caregiver workflow, usability, ergonomic fit, and practical use in care settings.",
    deliverables: [
      "Caregiver Workflow Analysis",
      "Human Factors Research",
      "Usability Testing",
      "Ergonomic Assessment",
    ],
  },
  {
    short: "NEU",
    name: "Northeastern University Toronto",
    category: "Regulatory Strategy & Compliance",
    icon: ShieldCheck,
    badgeTone: "bg-red-50 text-red-700",
    description:
      "Regulatory-readiness planning focused on pathway assessment, documentation structure, quality planning, and submission preparation.",
    deliverables: [
      "Regulatory Strategy",
      "Documentation Framework",
      "Health Canada Submission Readiness",
      "Quality Planning",
    ],
  },
  {
    short: "TMU",
    name: "Toronto Metropolitan University",
    category: "Device & Tech Refinement",
    icon: Wrench,
    badgeTone: "bg-blue-50 text-blue-700",
    description:
      "Engineering-focused development work supporting prototype refinement, technical review, and iterative device improvement.",
    deliverables: ["Mechanical Design", "Prototyping", "Engineering Validation", "Iterative Refinement"],
  },
  {
    short: "VM",
    name: "VentureMatch",
    category: "Customer & Clinical Insights",
    icon: Handshake,
    badgeTone: "bg-amber-50 text-amber-700",
    description:
      "Discovery activities capturing care-team needs, workflow constraints, clinical context, and early market assumptions.",
    deliverables: ["Clinical Workflow Analysis", "50+ Stakeholder Interviews", "User Need Validation", "Clinical Feedback"],
  },
  {
    short: "McM",
    name: "McMaster University (L2M)",
    category: "Customer Discovery & Venture Validation",
    icon: BriefcaseBusiness,
    badgeTone: "bg-yellow-50 text-yellow-700",
    description:
      "Market-validation activities focused on customer discovery, value proposition fit, commercialization insight, and early adoption pathways.",
    deliverables: [
      "Customer Discovery",
      "Value Proposition Validation",
      "Market Validation",
      "Commercialization Insights",
    ],
  },
];

const ResearchValidationSection = () => {
  const [activeIndex, setActiveIndex] = useState(5);
  const activePathway = pathways[activeIndex];
  const ActiveIcon = activePathway.icon;

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.16),transparent_32%),linear-gradient(180deg,#f8fbff_0%,#ffffff_42%,#f5f9fd_100%)] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(8,43,87,0.035)_1px,transparent_1px),linear-gradient(180deg,rgba(8,43,87,0.035)_1px,transparent_1px)] bg-[size:84px_84px] opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-12 h-64 w-[44rem] -translate-x-1/2 rounded-full bg-sky-200/30 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/75 px-4 py-2 text-xs font-bold text-primary shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-sky-500" />
            Global Validation Network
          </span>
          <h2 className="mx-auto mt-6 max-w-5xl text-4xl font-extrabold leading-[0.98] text-slate-950 md:text-6xl lg:text-7xl">
            Multi-University Validation &amp;
            <span className="block bg-gradient-to-r from-sky-600 via-primary to-indigo-600 bg-clip-text text-transparent">
              De-Risking Strategy
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-relaxed text-slate-600">
            Different expertise. One mission: advancing respiratory care. Smart Lung Physio is being developed through
            structured clinical, technical, regulatory-readiness, and market-validation workstreams.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-xs leading-relaxed text-slate-500">
            These are validation activities and research/innovation workstreams, not institutional endorsements.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-slate-200/70 bg-white/85 p-6 shadow-[0_18px_50px_rgba(8,43,87,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(8,43,87,0.14)]"
              >
                <div className="flex items-center gap-5">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.tone}`}>
                    <stat.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-4xl font-extrabold leading-none text-slate-950">{stat.value}</p>
                    <p className="mt-2 text-sm font-bold uppercase tracking-[0.08em] text-slate-500">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={140} className="mt-16">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold text-slate-950 md:text-3xl">Interactive Strategy Hub</h3>
            <p className="mt-2 text-sm font-medium text-slate-600 md:text-base">
              Click or hover on any pathway to view its validation responsibilities and workflow details.
            </p>
          </div>

          <div className="mt-9 grid gap-6 lg:grid-cols-[0.95fr_1.2fr_0.95fr] lg:items-stretch">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {pathways.map((pathway, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={pathway.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`group flex min-h-[5.2rem] items-center gap-3 rounded-xl border bg-white/82 p-4 text-left shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-lg ${
                      isActive ? "border-sky-400 bg-sky-50/80 shadow-[0_16px_45px_rgba(14,165,233,0.16)]" : "border-slate-200"
                    }`}
                    aria-pressed={isActive}
                  >
                    <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-xs font-extrabold ${pathway.badgeTone}`}>
                      {pathway.short}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-bold uppercase tracking-[0.08em] text-slate-400">
                        {pathway.name}
                      </span>
                      <span className="mt-1 block text-sm font-extrabold leading-snug text-slate-950">
                        {pathway.category}
                      </span>
                    </span>
                    <span className={`text-xl transition ${isActive ? "translate-x-0.5 text-primary" : "text-slate-400 group-hover:text-primary"}`}>
                      ›
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative min-h-[34rem] overflow-hidden rounded-[1.65rem] bg-[#071225] p-6 text-white shadow-[0_30px_90px_rgba(8,43,87,0.25)] ring-1 ring-slate-900/10">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:54px_54px]" />
              <div className="pointer-events-none absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
              <div className="relative z-10 flex justify-end">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-sky-200 backdrop-blur">
                  <span className="validation-hub-pulse h-2.5 w-2.5 rounded-full bg-sky-400" />
                  Interactive Center
                </span>
              </div>

              <div className="relative z-10 mt-10 flex min-h-[23rem] items-center justify-center">
                <svg className="pointer-events-none absolute inset-8 hidden h-[calc(100%-4rem)] w-[calc(100%-4rem)] sm:block" viewBox="0 0 420 360" aria-hidden="true">
                  {[40, 100, 160, 220, 280, 340].map((y, index) => (
                    <path
                      key={y}
                      d={`M210 180 C${activeIndex <= index ? 110 : 310} ${y}, ${activeIndex <= index ? 100 : 320} ${y}, ${activeIndex <= index ? 72 : 348} ${y}`}
                      className={`validation-connection ${activeIndex === index ? "validation-connection-active" : ""}`}
                      fill="none"
                    />
                  ))}
                </svg>

                <div className="validation-device-float relative w-full max-w-[23rem]">
                  <div className="absolute inset-8 rounded-full bg-sky-400/20 blur-3xl" />
                  <img
                    src="/lovable-uploads/product-system-new.png"
                    alt="Smart Lung Physio device and companion app"
                    className="relative z-10 mx-auto h-auto w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
                  />
                </div>
              </div>

              <div className="relative z-10 mt-8 flex items-end justify-between border-t border-white/10 pt-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.13em] text-slate-400">Active Pathway</p>
                  <p className="mt-1 text-lg font-extrabold text-white">{activePathway.category}</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-300 ring-1 ring-sky-400/20">
                  <ActiveIcon className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div className="rounded-[1.65rem] border border-slate-200 bg-white/86 p-6 shadow-[0_22px_70px_rgba(8,43,87,0.12)] backdrop-blur">
              <div className="flex items-start gap-4">
                <span className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl text-sm font-extrabold ${activePathway.badgeTone}`}>
                  {activePathway.short}
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-slate-400">{activePathway.name}</p>
                  <h4 className="mt-1 text-2xl font-extrabold leading-tight text-slate-950">{activePathway.category}</h4>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-600">{activePathway.description}</p>

              <div className="my-6 h-px bg-slate-200" />
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Key responsibilities</p>
              <ul className="mt-4 space-y-3">
                {activePathway.deliverables.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 rounded-2xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-600">
                <span className="font-bold text-primary">Validation focus:</span> reducing uncertainty across workflow,
                usability, technical readiness, documentation, and commercial adoption planning.
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ResearchValidationSection;
