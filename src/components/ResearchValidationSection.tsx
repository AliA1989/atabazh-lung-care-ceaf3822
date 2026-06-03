import { ClipboardList, Microscope, Presentation, ShieldCheck, University, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollReveal";

const validationStats = [
  { value: "50+", label: "Stakeholder Interviews" },
  { value: "3", label: "Prototype Generations" },
  { value: "U.S.", label: "Utility Patent Filed" },
  { value: "3", label: "Research & Technology Presentations" },
];

const technologyMilestone = {
  icon: Presentation,
  title: "World Congress of Biomechanics TTPC Invitation",
  content: [
    "Invited to present Smart Lung Physio technology",
    "Poster Competition section",
    "Translational Technology Pitch Competition (TTPC)",
    "World Congress of Biomechanics",
  ],
};

const validationCards = [
  {
    icon: University,
    title: "Academic Collaboration",
    badge: "Collaboration",
    content: [
      "Toronto Metropolitan University",
      "Lab2Market Validate Program",
      "Northeastern University Toronto",
      "Ongoing research engagement",
    ],
  },
  {
    icon: Users,
    title: "Stakeholder Discovery",
    badge: "50+ interviews",
    content: [
      "50+ stakeholder interviews",
      "Respiratory therapists",
      "Physiotherapists",
      "Long-term care professionals",
      "Caregivers",
    ],
  },
  {
    icon: ClipboardList,
    title: "Clinical Workflow Insights",
    badge: "Workflow",
    content: [
      "Long-term care workflow assessment",
      "Airway clearance delivery analysis",
      "Caregiver burden evaluation",
      "Treatment consistency exploration",
    ],
  },
  {
    icon: Microscope,
    title: "Scientific Dissemination & Recognition",
    badge: "Presentations",
    content: [
      "NACFC 2026 abstract accepted for presentation",
      "AI4PH 2026 accepted as a poster presentation",
      "World Congress of Biomechanics TTPC poster competition invitation",
      "Research focused on airway clearance variability, risk flagging, and technology-supported respiratory care",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Regulatory & Commercial Readiness",
    badge: "Readiness",
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
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-28">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto max-w-3xl space-y-4 text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            Research Pipeline
          </span>
          <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-[2.75rem]">
            Research & Validation
          </h2>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            Building Smart Lung Physio through stakeholder validation, academic collaboration, and real-world respiratory care insights.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {validationStats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 80}>
              <div className="h-full rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-white p-4 text-center shadow-sm shadow-blue-900/5 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/10">
                <p className="text-2xl font-bold text-blue-700">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={120} className="mt-8">
          <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-6 shadow-xl shadow-blue-900/5 sm:p-7 lg:p-8">
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-200/30 blur-3xl" />
            <div className="relative grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-sky-500 shadow-lg shadow-blue-500/20">
                  <technologyMilestone.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                    Technology Milestone
                  </span>
                  <h3 className="mt-2 text-xl font-bold leading-tight text-slate-900 sm:text-2xl">
                    {technologyMilestone.title}
                  </h3>
                </div>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {technologyMilestone.content.map((line) => (
                  <li key={line} className="flex gap-3 rounded-2xl border border-white/80 bg-white/70 p-3 text-sm font-medium text-slate-700 shadow-sm shadow-blue-900/5">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {validationCards.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 80}>
              <Card className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10">
                <CardContent className="flex h-full flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 shadow-lg shadow-blue-500/20 transition duration-300 group-hover:scale-105">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">{item.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {item.content.map((line) => (
                      <li key={line} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchValidationSection;
