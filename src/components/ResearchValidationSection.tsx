import { useState } from "react";
import {
  Activity,
  BriefcaseBusiness,
  ClipboardList,
  Cpu,
  FileText,
  Globe2,
  Handshake,
  LineChart,
  Microscope,
  Network,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const networkStats = [
  { value: "6", label: "Validation Pathways", icon: Network, tone: "text-sky-600 bg-sky-50" },
  { value: "2", label: "Countries (CA & US)", icon: Globe2, tone: "text-indigo-600 bg-indigo-50" },
  { value: "1", label: "Unified Mission", icon: Activity, tone: "text-emerald-600 bg-emerald-50" },
];

const pipelineStats = [
  { value: "50+", label: "Stakeholder Interviews", eyebrow: "Discovery", icon: Users, tone: "text-indigo-600 bg-indigo-50" },
  { value: "3", label: "Prototype Generations", eyebrow: "Hardware", icon: Cpu, tone: "text-sky-600 bg-sky-50" },
  { value: "U.S.", label: "Utility Patent Filed", eyebrow: "Intellectual Property", icon: FileText, tone: "text-amber-600 bg-amber-50" },
  { value: "3", label: "Research & Technology Presentations", eyebrow: "Dissemination", icon: LineChart, tone: "text-emerald-600 bg-emerald-50" },
];

const pathways = [
  {
    short: "McG",
    name: "McGill University",
    brandName: "McGill",
    brandSub: "University",
    brandTone: "text-red-700",
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
    brandName: "ASU",
    brandSub: "Arizona State University",
    brandTone: "text-[#8c1d40]",
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
    brandName: "Northeastern",
    brandSub: "University Toronto",
    brandTone: "text-red-700",
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
    brandName: "Toronto Metropolitan",
    brandSub: "University",
    brandTone: "text-[#006bb6]",
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
    brandName: "VentureMatch",
    brandSub: "Placements",
    brandTone: "text-slate-950",
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
    brandName: "McMaster",
    brandSub: "Lab2Market Validate",
    brandTone: "text-[#6f6145]",
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

const timeline = [
  {
    step: "01",
    eyebrow: "Discovery",
    title: "Stakeholder Discovery",
    body: "50+ interviews with respiratory therapists, physiotherapists, long-term care professionals, caregivers, and healthcare stakeholders.",
  },
  {
    step: "02",
    eyebrow: "Medical Abstract",
    title: "NACFC 2026",
    body: "Abstract accepted for presentation on variability and inefficiencies in manual airway-clearance delivery.",
  },
  {
    step: "03",
    eyebrow: "Scientific Poster",
    title: "AI4PH 2026",
    body: "Accepted as a poster presentation for AI-supported multi-sensor risk flagging during airway-clearance therapy.",
  },
  {
    step: "04",
    eyebrow: "Technology Pitch",
    title: "WCB TTPC",
    body: "Invited to present in the Poster Competition section of the World Congress of Biomechanics Translational Technology Pitch Competition.",
  },
  {
    step: "05",
    eyebrow: "Readiness",
    title: "IP & Regulatory Mapping",
    body: "U.S. Utility Patent filed and regulatory pathway assessment underway.",
  },
];

const pillars = [
  {
    eyebrow: "Workflow Evidence",
    title: "Clinical Problem Validation",
    icon: ClipboardList,
    tone: "text-sky-600 bg-sky-50",
    items: [
      "Long-term care workflow assessment",
      "Airway-clearance delivery analysis",
      "Caregiver burden exploration",
      "Treatment consistency and workflow gap identification",
    ],
  },
  {
    eyebrow: "Research Traction",
    title: "Scientific Dissemination",
    icon: Microscope,
    tone: "text-indigo-600 bg-indigo-50",
    items: [
      "NACFC 2026 abstract accepted for presentation",
      "AI4PH 2026 accepted as a poster presentation",
      "WCB TTPC invitation",
      "Research focused on variability and risk flagging",
    ],
  },
  {
    eyebrow: "Build Pathway",
    title: "Academic & Technical Development",
    icon: Activity,
    tone: "text-amber-600 bg-amber-50",
    items: [
      "Toronto Metropolitan University workstream",
      "Lab2Market Validate activity",
      "Northeastern University Toronto readiness work",
      "Prototype and usability exploration",
    ],
  },
  {
    eyebrow: "Readiness Path",
    title: "Regulatory & Commercial Readiness",
    icon: ShieldCheck,
    tone: "text-emerald-600 bg-emerald-50",
    items: [
      "U.S. Utility Patent Filed",
      "ElevateIP Recipient",
      "Regulatory pathway assessment underway",
      "Commercialization planning activities",
    ],
  },
];

const InstitutionMark = ({
  pathway,
  compact = false,
}: {
  pathway: (typeof pathways)[number];
  compact?: boolean;
}) => (
  <div className="flex min-w-0 items-center gap-3">
    <span
      className={`flex flex-shrink-0 items-center justify-center rounded-xl font-bold ${pathway.badgeTone} ${
        compact ? "h-9 w-9 text-[11px]" : "h-11 w-11 text-xs"
      }`}
    >
      {pathway.short}
    </span>
    <span className="min-w-0">
      <span className={`block truncate font-bold leading-tight ${pathway.brandTone} ${compact ? "text-sm" : "text-base"}`}>
        {pathway.brandName}
      </span>
      <span className="mt-0.5 block truncate text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-400">
        {pathway.brandSub}
      </span>
    </span>
  </div>
);

const ResearchValidationSection = () => {
  const [activeTab, setActiveTab] = useState<"validation" | "pipeline">("validation");
  const [activeIndex, setActiveIndex] = useState(5);
  const [activeStep, setActiveStep] = useState(0);
  const activePathway = pathways[activeIndex];
  const ActiveIcon = activePathway.icon;

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.12),transparent_30%),linear-gradient(180deg,#f9fcff_0%,#ffffff_46%,#f6fafc_100%)] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(8,43,87,0.032)_1px,transparent_1px),linear-gradient(180deg,rgba(8,43,87,0.032)_1px,transparent_1px)] bg-[size:84px_84px] opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-8 h-52 w-[38rem] -translate-x-1/2 rounded-full bg-sky-200/24 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-4 py-2 text-xs font-bold text-primary shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-sky-500" />
            Research & Validation
          </span>
          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-bold leading-[1.08] text-slate-900 md:text-5xl lg:text-6xl">
            Validation workstreams for
            <span className="block bg-gradient-to-r from-sky-600 via-primary to-indigo-600 bg-clip-text text-transparent">
              Smart Lung Physio
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base font-medium leading-relaxed text-slate-600 md:text-[1.05rem]">
            A clear view of the academic, technical, clinical-workflow, regulatory-readiness, and market-validation
            activities supporting Smart Lung Physio development.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-500">
            Organization names are used to describe validation-workstream context and are not presented as endorsements.
          </p>

          <div className="mt-7 inline-flex rounded-xl border border-slate-200 bg-slate-100/80 p-1 shadow-inner">
            {[
              { id: "validation" as const, label: "Validation Network", icon: Network },
              { id: "pipeline" as const, label: "Research Pipeline", icon: LineChart },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold transition sm:px-5 ${
                  activeTab === tab.id
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:bg-white/60 hover:text-slate-900"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {activeTab === "validation" ? (
          <>
            <ScrollReveal delay={80}>
              <div className="mx-auto mt-9 grid max-w-6xl gap-4 md:grid-cols-3">
                {networkStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="group rounded-xl border border-slate-200/70 bg-white/86 p-4 shadow-[0_10px_30px_rgba(8,43,87,0.06)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(8,43,87,0.1)] sm:p-5"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.tone}`}>
                        <stat.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-3xl font-bold leading-none text-slate-900">{stat.value}</p>
                        <p className="mt-1.5 text-xs font-bold uppercase tracking-[0.1em] text-slate-500">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={140} className="mt-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 md:text-[1.85rem]">Interactive validation hub</h3>
                <p className="mx-auto mt-2 max-w-2xl text-sm font-medium leading-relaxed text-slate-600 md:text-base">
                  Select a pathway to see the specific responsibilities connected to Smart Lung Physio development.
                </p>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.2fr_0.95fr] lg:items-stretch">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {pathways.map((pathway, index) => {
                    const isActive = activeIndex === index;

                    return (
                      <button
                        key={pathway.name}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        onMouseEnter={() => setActiveIndex(index)}
                        className={`group flex min-h-[5.05rem] items-center gap-3 rounded-xl border bg-white/82 p-3.5 text-left shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-lg sm:p-4 ${
                          isActive
                            ? "border-sky-400 bg-sky-50/80 shadow-[0_16px_45px_rgba(14,165,233,0.16)]"
                            : "border-slate-200"
                        }`}
                        aria-pressed={isActive}
                      >
                        <span className="min-w-0 flex-1">
                          <InstitutionMark pathway={pathway} compact />
                          <span className="mt-2 block text-sm font-bold leading-snug text-slate-900">
                            {pathway.category}
                          </span>
                        </span>
                        <span
                          className={`text-xl transition ${
                            isActive ? "translate-x-0.5 text-primary" : "text-slate-400 group-hover:text-primary"
                          }`}
                        >
                          ›
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="relative min-h-[32rem] overflow-hidden rounded-[1.35rem] bg-[#071225] p-6 text-white shadow-[0_26px_80px_rgba(8,43,87,0.22)] ring-1 ring-slate-900/10">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px]" />
                  <div className="pointer-events-none absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/18 blur-3xl" />
                  <div className="pointer-events-none absolute left-1/2 top-[9.5rem] h-64 w-64 -translate-x-1/2 rounded-full border border-sky-300/10 validation-orbit" />
                  <div className="relative z-10 flex justify-end">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-sky-200 backdrop-blur">
                      <span className="validation-hub-pulse h-2.5 w-2.5 rounded-full bg-sky-400" />
                      Live Validation Mode
                    </span>
                  </div>

                  <div className="relative z-10 mt-8 flex min-h-[21rem] flex-col items-center justify-center">
                    <div className="validation-device-float relative w-full max-w-[21.5rem]">
                      <div className="absolute inset-8 rounded-full bg-sky-400/20 blur-3xl" />
                      <img
                        src="/lovable-uploads/product-system-new.png"
                        alt="Smart Lung Physio device and companion app"
                        className="relative z-10 mx-auto h-auto w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
                      />
                    </div>

                    <div className="mt-7 grid w-full max-w-md grid-cols-3 gap-3">
                      {[
                        ["Pathway", "Synced"],
                        ["Signal", "Stable"],
                        ["Readiness", "Mapping"],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-xl border border-white/10 bg-white/[0.055] px-3 py-3 text-center backdrop-blur">
                          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">{label}</p>
                          <p className="mt-1 text-xs font-bold text-sky-100">{value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 w-full max-w-md rounded-full border border-white/10 bg-white/[0.06] p-1">
                      <div className="validation-loading-bar h-1.5 rounded-full bg-gradient-to-r from-sky-400 via-cyan-200 to-sky-500" />
                    </div>
                  </div>

                  <div className="relative z-10 mt-8 flex items-end justify-between border-t border-white/10 pt-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.13em] text-slate-400">Active Pathway</p>
                      <p className="mt-1 text-lg font-bold text-white">{activePathway.category}</p>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-300 ring-1 ring-sky-400/20">
                      <ActiveIcon className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.35rem] border border-slate-200 bg-white/86 p-6 shadow-[0_20px_62px_rgba(8,43,87,0.1)] backdrop-blur">
                  <InstitutionMark pathway={activePathway} />
                  <h4 className="mt-4 text-2xl font-bold leading-tight text-slate-900">{activePathway.category}</h4>
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

                  <div className="mt-7 rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-600">
                    <span className="font-bold text-primary">Validation focus:</span> reducing uncertainty across workflow,
                    usability, technical readiness, documentation, and commercial adoption planning.
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </>
        ) : (
          <ScrollReveal delay={80} className="mt-9">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {pipelineStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200/80 bg-white/85 p-4 shadow-[0_10px_30px_rgba(8,43,87,0.06)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(8,43,87,0.1)] sm:p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.08em] text-slate-500">{stat.eyebrow}</span>
                    <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${stat.tone}`}>
                      <stat.icon className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-4 text-3xl font-bold text-slate-900">{stat.value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.08em] text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white/84 p-6 shadow-[0_16px_48px_rgba(8,43,87,0.07)] backdrop-blur sm:p-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Validation Timeline</p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">From care workflow insight to validation planning</h3>
                </div>
                <span className="inline-flex w-fit items-center gap-2 rounded-xl border border-indigo-100 bg-indigo-50 px-3 py-2 text-xs font-bold text-indigo-700">
                  <LineChart className="h-4 w-4" />
                  Research traction + readiness planning
                </span>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-5">
                {timeline.map((item, index) => {
                  const isActive = activeStep === index;

                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setActiveStep(index)}
                      onMouseEnter={() => setActiveStep(index)}
                      className={`relative rounded-xl border p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-md ${
                        isActive ? "border-indigo-400 bg-indigo-50/50 shadow-md" : "border-slate-200 bg-white"
                      }`}
                    >
                      <span
                        className={`absolute -top-3 left-5 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold shadow-sm ${
                          isActive ? "bg-indigo-600 text-white" : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {item.step}
                      </span>
                      <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">{item.eyebrow}</p>
                      <h4 className="mt-1 text-sm font-bold leading-tight text-slate-900">{item.title}</h4>
                      <p className="mt-3 text-xs font-medium leading-relaxed text-slate-600">{item.body}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 text-center">
              <h3 className="text-2xl font-bold text-slate-900">Validation pillars</h3>
              <p className="mx-auto mt-2 max-w-2xl text-sm font-medium leading-relaxed text-slate-600">
                A structured view of workflow learning, scientific activity, technical development, and readiness planning.
              </p>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-slate-200/80 bg-white/86 p-5 shadow-[0_14px_42px_rgba(8,43,87,0.07)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_20px_58px_rgba(8,43,87,0.12)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-600">
                      {pillar.eyebrow}
                    </span>
                    <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${pillar.tone}`}>
                      <pillar.icon className="h-4 w-4" />
                    </span>
                  </div>
                  <h4 className="mt-4 text-base font-bold leading-tight text-slate-900">{pillar.title}</h4>
                  <ul className="mt-4 space-y-2.5">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex gap-2 text-xs leading-relaxed text-slate-600">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-gradient-to-r from-slate-900 to-[#082b57] p-6 text-white shadow-[0_22px_64px_rgba(8,43,87,0.18)] sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-sky-300 ring-1 ring-white/10">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-200">Validation Focus</p>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-200">
                    Reducing variability in airway-clearance delivery, supporting caregiver workflow, and enabling more
                    objective respiratory-care support.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

export default ResearchValidationSection;
