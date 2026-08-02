import {
  Activity,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Cpu,
  FileSearch,
  FlaskConical,
  HeartPulse,
  Microscope,
  Network,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ScrollReveal } from "@/components/ScrollReveal";

const evidenceStats = [
  { value: "100+", label: "Stakeholder interviews", icon: Users },
  { value: "3", label: "Prototype generations", icon: Cpu },
  { value: "2", label: "Accepted presentations", icon: Microscope },
  { value: "Planned", label: "Formal clinical validation", icon: FlaskConical },
];

const developmentStages = [
  {
    number: "01",
    eyebrow: "Discovery",
    title: "Understand the care problem",
    description: "Discovery work examines how airway-clearance routines fit staffing, resident needs, clinical oversight, and documentation in supervised care.",
    status: "Foundation built",
    tone: "border-emerald-200 bg-emerald-50 text-emerald-700",
    icon: Users,
    evidence: ["100+ stakeholder interviews", "Respiratory, rehabilitation, LTC, and caregiver perspectives", "Workflow and adoption barriers mapped"],
  },
  {
    number: "02",
    eyebrow: "Prototype",
    title: "Turn needs into a physical system",
    description: "Successive prototype builds translate workflow requirements into device handling, contact-interface, sensing, and documentation concepts.",
    status: "Iterating",
    tone: "border-blue-200 bg-blue-50 text-blue-700",
    icon: Cpu,
    evidence: ["Three prototype generations", "Early supervised workflow reviews", "Handling and positioning priorities identified"],
  },
  {
    number: "03",
    eyebrow: "Bench",
    title: "Characterize before clinical use",
    description: "Engineering work is focused on measurement integrity, operating behavior, mechanical safeguards, and repeatable test methods.",
    status: "Active",
    tone: "border-cyan-200 bg-cyan-50 text-cyan-700",
    icon: Scale,
    evidence: ["Caregiver preload sensing under development", "Device output bench characterization", "Calibration, drift, and fixture effects under review"],
  },
  {
    number: "04",
    eyebrow: "Clinical",
    title: "Evaluate through an approved protocol",
    description: "Future clinical work must assess safety, tolerance, usability, workflow fit, and appropriate performance outcomes in the intended population.",
    status: "Planned",
    tone: "border-amber-200 bg-amber-50 text-amber-700",
    icon: HeartPulse,
    evidence: ["Pilot-readiness planning underway", "Site, training, and documentation requirements being defined", "Formal clinical validation not yet completed"],
  },
];

const validationPriorities = [
  {
    icon: Scale,
    title: "Measurement integrity",
    description: "Keep caregiver preload and device output distinct, with traceable calibration and repeatable bench methods.",
  },
  {
    icon: ShieldCheck,
    title: "Safety and tolerance",
    description: "Evaluate comfort, vital-sign context, contraindications, adverse events, and clear pause or stop workflows.",
  },
  {
    icon: ClipboardCheck,
    title: "Usability and workflow",
    description: "Assess setup, positioning, training burden, documentation, cleaning, and fit with supervised care routines.",
  },
  {
    icon: Activity,
    title: "Clinical performance",
    description: "Define appropriate outcomes and comparator conditions through a reviewed clinical protocol—not marketing assumptions.",
  },
];

const workstreams = [
  {
    title: "Engineering and prototyping",
    organizations: "Toronto Metropolitan University and McMaster workstreams",
  },
  {
    title: "Human factors and workflow",
    organizations: "ASU project work and stakeholder discovery",
  },
  {
    title: "Pilot readiness and evidence",
    organizations: "McGill student-placement workstream",
  },
  {
    title: "Regulatory and quality planning",
    organizations: "Northeastern University Toronto workstream and external guidance",
  },
];

const ClinicalEvidence = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white">
      <section className="relative isolate overflow-hidden bg-[#07111f] px-5 pb-20 pt-32 text-white sm:px-8 lg:px-12 lg:pb-28 lg:pt-36">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.055)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
        <div className="pointer-events-none absolute -right-48 top-[-15rem] -z-10 h-[42rem] w-[42rem] rounded-full bg-indigo-600/20 blur-[120px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-sky-300/20 bg-sky-300/10 px-3.5 py-2 opacity-0 animate-fade-in">
              <FileSearch className="h-3.5 w-3.5 text-sky-300" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-200 sm:text-xs">Evidence & development</span>
            </div>
            <h1 className="mt-7 text-[3rem] font-bold leading-[0.98] tracking-[-0.055em] text-white opacity-0 animate-fade-in sm:text-6xl lg:text-[4.7rem]">
              Build the evidence <span className="text-sky-300">before making the claim.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 opacity-0 animate-fade-in sm:text-lg sm:leading-8">
              Smart Lung Physio™ development is moving from stakeholder discovery and physical prototypes toward bench characterization and future clinical evaluation.
            </p>
            <div className="mt-9 flex flex-col gap-3 opacity-0 animate-fade-in sm:flex-row">
              <Button asChild size="lg" className="h-auto rounded-full bg-white px-7 py-4 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-50 sm:text-base">
                <a href="#development-path" className="flex items-center gap-2">
                  See the Development Path
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="h-auto rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base">
                <NavLink to="/contact">Discuss Research Collaboration</NavLink>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.75rem] bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.055] p-4 shadow-[0_35px_90px_-35px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-6">
              <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/50 p-5 sm:p-7">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Evidence map</p>
                    <p className="mt-1.5 text-lg font-bold text-white">Current development state</p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-cyan-200">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" /> Active
                  </span>
                </div>

                <div className="mt-6 space-y-1">
                  {developmentStages.map((stage, index) => (
                    <div key={stage.title} className="relative flex items-center gap-4 py-3">
                      {index < developmentStages.length - 1 && <span className="absolute left-[0.92rem] top-10 h-8 w-px bg-white/10" />}
                      <span className={`relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-[10px] font-bold ${index < 2 ? "border-emerald-300/25 bg-emerald-300/10 text-emerald-200" : index === 2 ? "border-cyan-300/25 bg-cyan-300/10 text-cyan-200" : "border-white/15 bg-white/5 text-slate-400"}`}>
                        {stage.number}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-white">{stage.eyebrow}</p>
                        <p className="mt-0.5 truncate text-xs text-slate-500">{stage.status}</p>
                      </div>
                      <span className={`h-2 w-2 rounded-full ${index < 2 ? "bg-emerald-300" : index === 2 ? "animate-pulse bg-cyan-300" : "bg-slate-700"}`} />
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-xl border border-amber-300/15 bg-amber-300/5 p-4 text-xs leading-5 text-amber-100/80">
                  Development evidence is not the same as clinical evidence. Formal clinical efficacy and safety have not yet been established.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 sm:grid-cols-4 sm:divide-x sm:divide-slate-200">
          {evidenceStats.map((stat) => (
            <ScrollReveal key={stat.label} className="px-3 sm:px-6 sm:first:pl-0">
              <stat.icon className="h-4 w-4 text-blue-700" />
              <p className="mt-3 text-2xl font-bold tracking-[-0.04em] text-slate-950 sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="development-path" className="scroll-mt-24 bg-[#f5f7f9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="grid gap-6 border-b border-slate-200 pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">The development path</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-5xl">Four stages. Different evidence.</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Each stage answers a different question. Discovery identifies the problem; prototyping tests the design; bench work characterizes the system; clinical evaluation assesses use in people.
            </p>
          </ScrollReveal>

          <div>
            {developmentStages.map((stage, index) => (
              <ScrollReveal key={stage.title} delay={index * 40}>
                <article className="grid gap-6 border-b border-slate-200 py-9 lg:grid-cols-[4rem_0.7fr_1fr] lg:gap-10 lg:py-12">
                  <span className="text-3xl font-bold tracking-[-0.05em] text-slate-300">{stage.number}</span>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                        <stage.icon className="h-5 w-5" />
                      </span>
                      <span className={`rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] ${stage.tone}`}>{stage.status}</span>
                    </div>
                    <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700">{stage.eyebrow}</p>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">{stage.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">{stage.description}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-slate-400">Current evidence and activity</p>
                    <div className="mt-4 space-y-3">
                      {stage.evidence.map((item) => (
                        <div key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-700" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">Evidence boundaries</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-5xl">What we can say—and what we cannot say yet.</h2>
          </ScrollReveal>

          <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-slate-200 lg:grid-cols-2">
            <ScrollReveal className="bg-slate-950 p-7 text-white sm:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">Supported today</p>
              <h3 className="mt-3 text-2xl font-bold text-white">Development evidence</h3>
              <div className="mt-7 space-y-4">
                {[
                  "A functional prototype has been built",
                  "100+ stakeholder interviews have shaped the product direction",
                  "Three prototype generations have informed handling and workflow",
                  "Bench characterization and sensing development are active",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-emerald-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80} className="bg-amber-50 p-7 sm:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-700">Not established yet</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Clinical and regulatory evidence</h3>
              <div className="mt-7 space-y-4">
                {[
                  "Clinical efficacy in the intended population",
                  "Clinical safety and tolerance",
                  "Reduction in treatment time or healthcare utilization",
                  "Health Canada or FDA clearance for commercial sale",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-6 text-amber-950/75">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full border border-amber-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-[#07111f] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-300">Validation priorities</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">The questions that matter next.</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              A credible evaluation plan must examine the complete system—not just whether the actuator runs.
            </p>
          </ScrollReveal>

          <div className="mt-2 grid lg:grid-cols-2">
            {validationPriorities.map((priority, index) => (
              <ScrollReveal key={priority.title} delay={index * 40}>
                <div className={`h-full border-white/10 py-8 lg:px-8 ${index % 2 === 0 ? "lg:border-r" : ""} ${index < 2 ? "border-b" : ""}`}>
                  <priority.icon className="h-6 w-6 text-sky-300" />
                  <h3 className="mt-5 text-xl font-bold text-white">{priority.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">{priority.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7f9] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">
                <Network className="h-3.5 w-3.5" /> Development network
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl">Workstreams, not endorsements.</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Academic and ecosystem activities contribute to defined development questions. Participation does not mean clinical validation or institutional endorsement.
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
              {workstreams.map((workstream, index) => (
                <div key={workstream.title} className="grid gap-2 border-b border-slate-200 p-5 last:border-0 sm:grid-cols-[2rem_0.8fr_1.2fr] sm:items-center sm:gap-5 sm:px-6">
                  <span className="text-xs font-bold text-slate-300">0{index + 1}</span>
                  <h3 className="text-sm font-bold text-slate-900 sm:text-base">{workstream.title}</h3>
                  <p className="text-sm leading-5 text-slate-500">{workstream.organizations}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#0b1b2f] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <ScrollReveal className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-300">Research collaboration</p>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">Help define the right evaluation—not the easiest one.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            We welcome discussions with clinicians, researchers, long-term care organizations, rehabilitation teams, and technical reviewers.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-auto rounded-full bg-sky-400 px-8 py-4 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300 sm:text-base">
              <NavLink to="/contact" className="flex items-center gap-2">
                Discuss Research Collaboration
                <ArrowRight className="h-4 w-4" />
              </NavLink>
            </Button>
            <Button asChild variant="ghost" size="lg" className="h-auto rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base">
              <NavLink to="/device">Explore the Device</NavLink>
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default ClinicalEvidence;
