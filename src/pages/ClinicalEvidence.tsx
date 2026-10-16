import { ArrowRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { CompanyCTA } from "@/components/CompanyCTA";
import ResearchValidationSection from "@/components/ResearchValidationSection";
import { developmentFacts, developmentPriorities } from "@/data/development";
import { publicAsset } from "@/lib/publicAsset";
import { acquisitionChannels, documentedBenchRun } from "@/data/engineering";

const ClinicalEvidence = () => (
  <div className="company-page">
    <header className="border-b border-slate-200 bg-[#f3f6f8] pb-14 pt-32 lg:pb-16 lg:pt-36">
      <div className="company-container">
        <p className="company-eyebrow">Evidence & development</p>
        <h1 className="mt-5 max-w-4xl text-4xl leading-[1.08] tracking-[-0.04em] sm:text-5xl">
          A functional prototype,
          <br />now being refined
        </h1>
        <p className="company-lead mt-6 text-slate-600">
          Smart Lung Physio™ has progressed through three prototype generations
          to functional physical hardware. We are now refining the device
          and preparing structured technical and usability evaluation.
        </p>
        <p className="mt-6 inline-flex rounded-md border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700">
          Current stage: functional prototype · engineering refinement
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

    <section id="engineering-record" className="scroll-mt-24 border-y border-slate-200 bg-[#f8fafc] py-14 lg:py-16">
      <div className="company-container">
        <div className="max-w-3xl">
          <p className="company-eyebrow">Current development stage</p>
          <h2 className="company-heading mt-3">Prototype built. Refinement underway</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Smart Lung Physio™ has a functional, mains-powered physical prototype.
            The team is refining the engineering and preparing repeatable technical
            and usability evaluation.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-[#d2e4ea] bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#164d69]">01 / Built</p>
            <h3 className="mt-3 text-xl font-semibold">Physical prototype</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Three generations of development have produced functional,
              mains-powered hardware with connected sensing architecture.
            </p>
          </article>
          <article className="rounded-xl border border-[#d2e4ea] bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#164d69]">02 / In progress</p>
            <h3 className="mt-3 text-xl font-semibold">Engineering refinement</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Mechanical performance, sensor integration, caregiver feedback,
              and practical setup are being refined.
            </p>
          </article>
          <article className="rounded-xl border border-[#d2e4ea] bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#164d69]">03 / Next</p>
            <h3 className="mt-3 text-xl font-semibold">Structured evaluation</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Defined bench tests, usability methods, and applicable approvals
              will inform future pilot-readiness decisions.
            </p>
          </article>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-xs leading-6 text-slate-500">
            Development-stage technology; clinical effectiveness and regulatory
            authorization have not been established.
          </p>
          <NavLink to="/contact" className="company-text-link shrink-0 text-sm">
            Discuss a technical review <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </NavLink>
        </div>

        <details className="group mt-5 rounded-xl border border-slate-200 bg-white">
          <summary className="flex min-h-12 cursor-pointer items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-[#164d69] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#164d69]">
            <span>Supporting engineering records and development workstreams</span>
            <span className="text-xs font-medium text-slate-500 group-open:hidden" aria-hidden="true">Expand +</span>
            <span className="hidden text-xs font-medium text-slate-500 group-open:inline" aria-hidden="true">Close −</span>
          </summary>
          <div className="grid gap-8 border-t border-slate-200 p-5 md:grid-cols-2 md:p-7">
            <div>
              <h3 className="text-base font-semibold">Documented BLE bench run</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {documentedBenchRun.duration} minutes, recorded
                on <time dateTime={documentedBenchRun.dateTime}>{documentedBenchRun.date}</time>.
                Test condition: {documentedBenchRun.conditions.toLowerCase()}.
              </p>
              <p className="mt-2 text-xs leading-6 text-slate-500">
                Source: Week 5 engineering log. This communication test does
                not establish a reliability specification or clinical performance.
              </p>
              <h3 className="mt-6 text-base font-semibold">Other development workstreams</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Stakeholder discovery, usability planning, intellectual-property
                prosecution and regulatory pathway assessment continue alongside
                prototype refinement. A U.S. utility patent application has been
                filed, but a granted patent is not implied.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold">Configured sensing and telemetry rates</h3>
              <dl className="mt-2 divide-y divide-slate-200">
                {acquisitionChannels.map((channel) => (
                  <div key={channel.name} className="flex items-start justify-between gap-4 py-2.5">
                    <dt className="text-sm font-medium text-slate-700">
                      {channel.name}
                      <span className="block text-xs font-normal text-slate-500">{channel.hardware}</span>
                    </dt>
                    <dd className="shrink-0 text-sm font-semibold text-[#164d69]">{channel.rate} Hz</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-xs leading-6 text-slate-500">
                Source: prototype architecture record reviewed 7 October 2026.
                Firmware configuration values only, not verified delivery rates,
                therapeutic percussion frequencies or clinical outcomes.
              </p>
            </div>
          </div>
        </details>
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
    <section className="company-section bg-[#15384d] text-white">
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
