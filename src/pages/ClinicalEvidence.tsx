import { ArrowRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { CompanyCTA } from "@/components/CompanyCTA";
import ResearchValidationSection from "@/components/ResearchValidationSection";
import { developmentFacts, developmentPriorities } from "@/data/development";
import { publicAsset } from "@/lib/publicAsset";
import { acquisitionChannels, documentedBenchRun } from "@/data/engineering";

const evidenceAreas = [
  {
    area: "Engineering",
    status: "Prototype development",
    current:
      "Three generations of hardware and software iteration. A functional, mains-powered physical prototype.",
    next: "Define test methods and acceptance criteria; document mechanical, sensor, and system performance.",
  },
  {
    area: "Customer discovery",
    status: "100+ interviews",
    current:
      "Input from respiratory therapists, physiotherapists, LTC professionals, caregivers, and healthcare stakeholders.",
    next: "Translate identified needs into prioritized requirements and site-specific evaluation questions.",
  },
  {
    area: "Usability",
    status: "Early supervised review",
    current:
      "Prototype handling, bedside setup, patient positioning, and documentation needs explored in early reviews.",
    next: "Structured usability evaluation with defined tasks, training requirements, and measures.",
  },
  {
    area: "Clinical evaluation",
    status: "Planning",
    current:
      "Pilot-readiness planning and definition of appropriate workflows. Formal clinical validation has not been completed.",
    next: "Agree protocols, oversight, site requirements, and necessary approvals before any clinical evaluation.",
  },
  {
    area: "Intellectual property",
    status: "Application filed",
    current:
      "A U.S. utility patent application has been filed for the technology.",
    next: "Continue the application process. Filing does not mean that a patent has been granted.",
  },
  {
    area: "Regulatory & quality",
    status: "Pathway assessment",
    current:
      "Regulatory pathway assessment and documentation planning are underway.",
    next: "Refine intended use, risk documentation, quality-system needs, and evidence requirements.",
  },
];

const ClinicalEvidence = () => (
  <div className="company-page">
    <header className="border-b border-slate-200 bg-[#f3f6f8] pb-14 pt-32 lg:pb-16 lg:pt-36">
      <div className="company-container">
        <p className="company-eyebrow">Evidence & development</p>
        <h1 className="mt-5 max-w-4xl text-4xl leading-[1.08] tracking-[-0.04em] sm:text-5xl">
          Documenting development progress
          <br />and the evidence still needed
        </h1>
        <p className="company-lead mt-6 text-slate-600">
          A clear view of Smart Lung Physio™: the work completed to date, the
          questions still being evaluated, and the priorities for the next
          phase.
        </p>
        <p className="mt-6 inline-flex rounded-md border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700">
          Current focus: prototype engineering & evaluation
        </p>
      </div>
    </header>
    <section className="company-section">
      <div className="company-container">
        <p className="company-eyebrow">Progress to date</p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {developmentFacts.map((item) => (
            <article
              key={item.label}
              className="border-l-2 border-[#164d69] pl-6"
            >
              <p className="text-4xl font-semibold text-[#164d69]">
                {item.value}
              </p>
              <h2 className="mt-3 text-lg font-semibold">{item.label}</h2>
              <p className="mt-2 text-sm text-slate-600">{item.context}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-500">
          Company-reported milestones, supported by prototype development records
          and stakeholder discovery activity.
        </p>
      </div>
    </section>
    <section id="engineering-record" className="company-section scroll-mt-24 border-t border-slate-200 bg-white">
      <div className="company-container">
        <p className="company-eyebrow">Engineering record</p>
        <h2 className="company-heading mt-4">From configuration to documented testing</h2>
        <div className="mt-9 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="rounded-xl bg-[#0b1b2f] p-7 text-white">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-300">Recorded bench activity</p>
            <p className="mt-6 text-5xl font-semibold">{documentedBenchRun.duration}<span className="ml-2 text-lg font-normal">minutes</span></p>
            <h3 className="mt-5 text-xl">{documentedBenchRun.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{documentedBenchRun.finding}</p>
            <dl className="mt-6 space-y-4 border-t border-white/20 pt-5 text-sm">
              <div><dt className="text-slate-400">Test condition</dt><dd className="mt-1">{documentedBenchRun.conditions}</dd></div>
              <div><dt className="text-slate-400">Record date</dt><dd className="mt-1"><time dateTime={documentedBenchRun.dateTime}>{documentedBenchRun.date}</time></dd></div>
            </dl>
            <p className="mt-6 text-xs leading-6 text-slate-400">Source: Week 5 engineering log. This is a documented communication test; it does not establish a reliability specification or clinical performance.</p>
          </article>
          <div>
            <h3 className="text-xl font-semibold">Configured acquisition rates</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">The prototype architecture record describes the firmware settings below. Actual acquisition and wireless delivery rates require run-specific verification.</p>
            <dl className="mt-5 divide-y divide-slate-200">
              {acquisitionChannels.map((channel) => (
                <div key={channel.name} className="flex items-start justify-between gap-5 py-5">
                  <dt className="text-sm font-semibold">{channel.name}<span className="mt-1 block text-xs font-normal text-slate-500">{channel.hardware}</span></dt>
                  <dd className="text-right text-xl font-semibold text-[#164d69]">{channel.rate} Hz<span className="mt-1 block text-xs font-normal text-slate-500">{channel.interval}</span></dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs leading-6 text-slate-500">Source: internal prototype architecture record, reviewed 7 October 2026. These are sensor and communication settings, not therapeutic settings or measured percussion frequencies.</p>
            <NavLink to="/contact" className="company-text-link mt-6">Discuss a technical review <ArrowRight className="h-4 w-4" aria-hidden="true" /></NavLink>
          </div>
        </div>
      </div>
    </section>
    <section className="border-y border-slate-200 bg-[#f8fafc] company-section">
      <div className="company-container">
        <h2 className="company-heading">
          Current status & next evidence needs
        </h2>
        <p className="mt-4 max-w-3xl text-slate-600">
          Each workstream has a different purpose. Current activity is shown
          separately from planned testing and evaluation.
        </p>
        <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="hidden grid-cols-[0.65fr_1.2fr_1.2fr] gap-8 bg-[#0b1b2f] px-7 py-4 text-xs font-bold uppercase tracking-wider text-white md:grid">
            <span>Workstream</span>
            <span>Current position</span>
            <span>Next evidence need</span>
          </div>
          <div className="divide-y divide-slate-200">
            {evidenceAreas.map((item) => (
              <article
                key={item.area}
                className="grid gap-5 p-6 md:grid-cols-[0.65fr_1.2fr_1.2fr] md:gap-8 md:p-7"
              >
                <div>
                  <h3 className="text-lg font-semibold">{item.area}</h3>
                  <p className="mt-2 text-xs font-medium text-[#164d69]">
                    {item.status}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-xs font-bold uppercase text-slate-500 md:hidden">
                    Current position
                  </p>
                  <p className="text-sm leading-7 text-slate-600">
                    {item.current}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-xs font-bold uppercase text-slate-500 md:hidden">
                    Next evidence need
                  </p>
                  <p className="text-sm leading-7 text-slate-600">
                    {item.next}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="company-section">
      <div className="company-container grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="company-eyebrow">Prototype learning</p>
          <h2 className="company-heading mt-4">
            Connecting device design to supervised care
          </h2>
          <p className="company-lead mt-5 text-slate-600">
            Early prototype reviews have informed handling, positioning, and
            bedside setup. These observations help define the questions for
            structured usability and workflow evaluation.
          </p>
          <NavLink to="/long-term-care" className="company-text-link mt-6">
            What an LTC evaluation could measure{" "}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </NavLink>
        </div>
        <figure className="overflow-hidden rounded-xl border border-slate-200">
          <img
            src={publicAsset("media/workflow-bedside.webp")}
            alt="Early supervised prototype review of bedside setup"
            loading="lazy"
            className="aspect-[3/2] w-full object-cover"
          />
          <figcaption className="bg-slate-50 p-4 text-xs leading-5 text-slate-500">
            Early prototype workflow review: handling, positioning, and bedside setup.
          </figcaption>
        </figure>
      </div>
    </section>
    <section className="company-section bg-[#0b1b2f] text-white">
      <div className="company-container">
        <p className="company-eyebrow !text-sky-300">Next development phase</p>
        <h2 className="company-heading mt-4">
          Three priorities for structured evaluation
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {developmentPriorities.map((item, i) => (
            <article key={item.title} className="border-t border-white/25 pt-6">
              <p className="text-sm text-sky-300">0{i + 1}</p>
              <h3 className="mt-3 text-xl">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.summary}
              </p>
              <p className="mt-5 text-sm font-medium leading-6 text-sky-200">
                {item.output}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-10 border-t border-white/15 pt-6 text-sm leading-6 text-slate-400">
          Each evaluation phase is planned around defined methods, technical
          readiness, collaborators, and applicable oversight.
        </p>
      </div>
    </section>
    <ResearchValidationSection />
    <section id="development-status" className="scroll-mt-24 border-t border-slate-200 bg-slate-50 py-8">
      <div className="company-container">
        <p className="text-sm leading-7 text-slate-600">
          <strong className="text-slate-900">Development status:</strong> Smart
          Lung Physio™ is under development. This website does not present
          completed clinical validation, regulatory clearance, or peer-reviewed
          clinical outcome results. Scientific presentation acceptance and media
          coverage are distinct from product validation.
        </p>
        <NavLink to="/news" className="company-text-link mt-3 text-sm">
          View company and research updates{" "}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </NavLink>
      </div>
    </section>
    <CompanyCTA />
  </div>
);
export default ClinicalEvidence;
