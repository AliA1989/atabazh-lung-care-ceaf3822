import {
  ClipboardList,
  Microscope,
  Presentation,
  ShieldCheck,
  TrendingUp,
  University,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollReveal";

const validationStats = [
  { value: "50+", label: "Stakeholder Interviews" },
  { value: "3", label: "Prototype Generations" },
  { value: "U.S.", label: "Utility Patent Filed" },
  { value: "3", label: "Research & Technology Presentations" },
];

const validationTimeline = [
  {
    title: "Stakeholder Discovery",
    detail:
      "50+ interviews with respiratory therapists, physiotherapists, long-term care professionals, caregivers, and healthcare stakeholders",
  },
  {
    title: "NACFC 2026",
    detail:
      "Abstract accepted for presentation on variability and inefficiencies in manual airway clearance delivery",
  },
  {
    title: "AI4PH 2026",
    detail:
      "Accepted as a poster presentation for AI-supported multi-sensor risk flagging during airway clearance therapy in home care",
  },
  {
    title: "WCB TTPC",
    detail:
      "Invited to present in the Poster Competition section of the World Congress of Biomechanics Translational Technology Pitch Competition",
  },
  {
    title: "IP & Readiness",
    detail: "U.S. Utility Patent Filed and regulatory pathway assessment underway",
  },
];

const validationPillars = [
  {
    icon: ClipboardList,
    title: "Clinical Problem Validation",
    eyebrow: "Workflow evidence",
    content: [
      "Long-term care workflow assessment",
      "Airway clearance delivery analysis",
      "Caregiver burden exploration",
      "Treatment consistency and workflow gap identification",
    ],
  },
  {
    icon: Microscope,
    title: "Scientific Recognition",
    eyebrow: "Research traction",
    content: [
      "NACFC 2026 abstract accepted for presentation",
      "AI4PH 2026 accepted as a poster presentation",
      "World Congress of Biomechanics TTPC invitation",
      "Research focused on airway clearance variability, risk flagging, and respiratory-care implementation",
    ],
  },
  {
    icon: University,
    title: "Academic & Technical Development",
    eyebrow: "Build pathway",
    content: [
      "Toronto Metropolitan University",
      "Lab2Market Validate Program",
      "Northeastern University Toronto",
      "Prototype development and usability exploration",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Regulatory & Commercial Readiness",
    eyebrow: "Readiness",
    content: [
      "U.S. Utility Patent Filed",
      "ElevateIP Recipient",
      "Regulatory pathway assessment underway",
      "Commercialization planning activities",
    ],
  },
];

const ResearchValidationSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/35 to-white px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-blue-100/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-80 w-80 rounded-full bg-sky-100/60 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <ScrollReveal className="space-y-5">
            <span className="inline-flex items-center rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 shadow-sm shadow-blue-900/5">
              Research Pipeline
            </span>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold leading-tight text-slate-950 md:text-4xl lg:text-[3rem]">
                Research & Validation
              </h2>
              <p className="max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
                From clinical problem discovery to recognized research presentations, Smart Lung Physio is being developed through stakeholder validation, academic collaboration, and respiratory-care implementation insights.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid gap-3 sm:grid-cols-2">
              {validationStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/80 bg-white/85 p-4 shadow-xl shadow-blue-900/[0.06] ring-1 ring-blue-100/60 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-blue-900/10"
                >
                  <p className="text-2xl font-bold text-blue-700">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    {stat.label}
                  </p>
                  <div className="mt-3 h-1 rounded-full bg-blue-50">
                    <div className="h-full rounded-full bg-gradient-to-r from-blue-700 to-sky-400" style={{ width: `${64 + index * 8}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={140} className="mt-12">
          <div className="rounded-[1.75rem] border border-blue-100/80 bg-white/90 p-5 shadow-2xl shadow-blue-900/[0.07] ring-1 ring-white/80 backdrop-blur sm:p-7 lg:p-8">
            <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                  Validation Timeline
                </span>
                <h3 className="mt-2 text-2xl font-bold text-slate-950">Clinical insight to translational presentation</h3>
              </div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-800">
                <TrendingUp className="h-4 w-4" />
                Scientific credibility + commercialization progress
              </div>
            </div>

            <div className="relative grid gap-4 lg:grid-cols-5 lg:gap-3">
              <div className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100 lg:block" />
              {validationTimeline.map((item, index) => (
                <div key={item.title} className="relative rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-blue-50/50 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/10">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-sky-500 text-sm font-bold text-white shadow-lg shadow-blue-500/20">
                    {index + 1}
                  </div>
                  <h4 className="text-base font-bold text-slate-950">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {validationPillars.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 90}>
              <Card className="group h-full overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/88 shadow-xl shadow-slate-900/[0.04] ring-1 ring-white/90 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-sky-500 shadow-lg shadow-blue-500/20 transition duration-300 group-hover:scale-105">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-700">
                      {item.eyebrow}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold leading-tight text-slate-950">{item.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {item.content.map((line) => (
                      <li key={line} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={180} className="mt-8">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-blue-100 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 p-6 text-white shadow-2xl shadow-blue-950/20 sm:p-8">
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-sky-400/20 blur-3xl" />
            <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                  <Presentation className="h-6 w-6 text-sky-200" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">Validation focus</p>
                  <p className="mt-2 max-w-4xl text-base leading-relaxed text-slate-100 md:text-lg">
                    Reducing variability in airway clearance delivery, supporting caregiver workflow, and enabling more objective respiratory-care support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ResearchValidationSection;
