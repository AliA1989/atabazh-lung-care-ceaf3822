import {
  Activity,
  ArrowRight,
  CheckCircle2,
  CircleDot,
  ClipboardCheck,
  Gauge,
  Hand,
  Layers3,
  MoveRight,
  ShieldCheck,
  Sparkles,
  Users,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ScrollReveal } from "@/components/ScrollReveal";
import ProductFilm from "@/components/ProductFilm";
import { publicAsset } from "@/lib/publicAsset";
import mitacsLogo from "@/assets/support/mitacs.svg";
import lab2MarketValidateLogo from "@/assets/support/lab2market-validate.webp";
import marsLogo from "@/assets/support/mars.svg";
import h2iLogo from "@/assets/support/h2i.svg";
import ibzLogo from "@/assets/support/ibz.svg";
import innovationFactoryLogo from "@/assets/support/innovation-factory.svg";

const productFlow = [
  {
    number: "01",
    title: "Position",
    description: "Guide setup at the intended treatment area.",
  },
  {
    number: "02",
    title: "Deliver",
    description: "Support a structured, caregiver-guided session.",
  },
  {
    number: "03",
    title: "Record",
    description: "Create a clearer session record for the care team.",
  },
];

const developmentStatus = [
  {
    label: "Functional prototype",
    detail: "Built and used in early workflow reviews",
    status: "Completed",
    tone: "text-emerald-700 bg-emerald-50 border-emerald-200",
  },
  {
    label: "Force-sensing architecture",
    detail: "Caregiver input and device output kept distinct",
    status: "In development",
    tone: "text-blue-700 bg-blue-50 border-blue-200",
  },
  {
    label: "Bench characterization",
    detail: "Measurement and operating-range work underway",
    status: "Active",
    tone: "text-cyan-700 bg-cyan-50 border-cyan-200",
  },
  {
    label: "Clinical validation",
    detail: "Formal clinical evaluation has not yet been completed",
    status: "Planned",
    tone: "text-amber-700 bg-amber-50 border-amber-200",
  },
];

const supportOrganizations = [
  { name: "MaRS Discovery District", src: marsLogo },
  { name: "Health Innovation Hub", src: h2iLogo },
  { name: "Innovation Boost Zone", src: ibzLogo },
  { name: "Innovation Factory", src: innovationFactoryLogo },
  { name: "Lab2Market Validate", src: lab2MarketValidateLogo },
  { name: "Mitacs", src: mitacsLogo },
];

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white">
      <section className="relative isolate overflow-hidden bg-[#07111f] px-5 pb-16 pt-28 text-white sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.055)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
        <div className="pointer-events-none absolute -right-40 top-[-15rem] -z-10 h-[42rem] w-[42rem] rounded-full bg-blue-600/25 blur-[120px]" />
        <div className="pointer-events-none absolute -left-44 bottom-[-15rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-[110px]" />

        <div className="mx-auto grid min-h-[44rem] max-w-[92rem] items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <div className="relative z-10 max-w-2xl">
            <div
              className="inline-flex items-center gap-2.5 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3.5 py-2 opacity-0 animate-fade-in"
              style={{ animationDelay: "60ms", animationFillMode: "forwards" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-200 sm:text-xs">
                Functional prototype program
              </span>
            </div>

            <h1
              className="mt-7 max-w-2xl text-[3rem] font-bold leading-[0.98] tracking-[-0.055em] text-white opacity-0 animate-fade-in sm:text-6xl lg:text-[4.7rem]"
              style={{ animationDelay: "110ms", animationFillMode: "forwards" }}
            >
              Know the force. <span className="text-sky-300">Guide the workflow.</span>
            </h1>

            <p
              className="mt-7 max-w-xl text-base leading-7 text-slate-300 opacity-0 animate-fade-in sm:text-lg sm:leading-8"
              style={{ animationDelay: "160ms", animationFillMode: "forwards" }}
            >
              Smart Lung Physio™ is a caregiver-guided airway-clearance system in development—bringing force-aware setup and structured session records into supervised respiratory care.
            </p>

            <div
              className="mt-9 flex flex-col gap-3 opacity-0 animate-fade-in sm:flex-row sm:items-center"
              style={{ animationDelay: "210ms", animationFillMode: "forwards" }}
            >
              <Button asChild size="lg" className="h-auto rounded-full bg-white px-7 py-4 text-sm font-bold text-slate-950 shadow-2xl shadow-blue-950/40 transition hover:-translate-y-0.5 hover:bg-sky-50 sm:text-base">
                <NavLink to="/device" className="flex items-center gap-2">
                  See the System
                  <ArrowRight className="h-4 w-4" />
                </NavLink>
              </Button>
              <Button asChild variant="ghost" size="lg" className="h-auto rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10 sm:text-base">
                <NavLink to="/contact">Discuss an Evaluation</NavLink>
              </Button>
            </div>

            <div
              className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "260ms", animationFillMode: "forwards" }}
            >
              {[
                ["100+", "Discovery conversations"],
                ["3", "Prototype generations"],
                ["LTC", "First care setting"],
              ].map(([value, label]) => (
                <div key={label} className="px-3 first:pl-0 sm:px-5 sm:first:pl-0">
                  <p className="text-xl font-bold tracking-tight text-white sm:text-2xl">{value}</p>
                  <p className="mt-1 text-[10px] leading-4 text-slate-400 sm:text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative w-full opacity-0 animate-fade-in lg:translate-x-4"
            style={{ animationDelay: "220ms", animationFillMode: "forwards" }}
          >
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-500/25 via-cyan-400/5 to-transparent blur-2xl" />
            <ProductFilm />
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-[92rem] items-center gap-4 border-t border-white/10 pt-6 text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500 sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          Medical device under development · Not cleared for sale
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">The system in one view</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                From bedside setup to a clearer record.
              </h2>
            </div>

            <div className="relative grid gap-7 sm:grid-cols-3 sm:gap-0">
              <div className="pointer-events-none absolute left-[12%] right-[12%] top-5 hidden h-px bg-gradient-to-r from-blue-200 via-blue-500 to-cyan-400 sm:block" />
              {productFlow.map((step, index) => (
                <div key={step.title} className="relative flex gap-4 sm:block sm:px-6">
                  <span className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-blue-200 bg-white text-xs font-bold text-blue-700 shadow-sm">
                    {step.number}
                  </span>
                  <div className="sm:mt-5">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-slate-950">{step.title}</h3>
                      {index < productFlow.length - 1 && <MoveRight className="hidden h-4 w-4 text-slate-300 lg:block" />}
                    </div>
                    <p className="mt-1.5 text-sm leading-6 text-slate-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#f5f7f9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <ScrollReveal>
            <figure className="relative aspect-[4/4.6] overflow-hidden rounded-[2rem] border border-slate-200 bg-[#dedede] shadow-[0_35px_90px_-45px_rgba(15,23,42,0.45)] sm:aspect-[5/4] lg:aspect-[4/4.6]">
              <img
                src={publicAsset("media/smart-lung-physio-product-showcase-poster.webp")}
                alt="Smart Lung Physio product visualization based on the functional prototype"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-white/5" />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/85 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.17em] text-slate-700 backdrop-blur sm:left-7 sm:top-7 sm:text-xs">
                <CircleDot className="h-3.5 w-3.5 text-emerald-600" />
                Prototype-informed product view
              </div>
              <figcaption className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-slate-950/75 p-5 text-sm leading-6 text-slate-200 backdrop-blur-xl sm:inset-x-7 sm:bottom-7 sm:p-6">
                The enclosure shown is a design visualization based on the functional prototype. Final industrial design may change.
              </figcaption>
            </figure>
          </ScrollReveal>

          <ScrollReveal delay={100} className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">Built in hardware</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-5xl">
              A physical device—not a software mockup.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Development is anchored in a working functional prototype and successive bench builds. The next engineering phase focuses on measurement quality, usability, and repeatability.
            </p>

            <div className="mt-8 border-y border-slate-200">
              {[
                [Layers3, "Functional prototype", "Physical build"],
                [Gauge, "Caregiver preload sensing", "In development"],
                [Activity, "Percussion output characterization", "Bench program"],
              ].map(([Icon, title, status]) => {
                const ItemIcon = Icon as typeof Layers3;
                return (
                  <div key={String(title)} className="flex items-center justify-between gap-5 border-b border-slate-200 py-4 last:border-0">
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                        <ItemIcon className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-semibold text-slate-800 sm:text-base">{String(title)}</span>
                    </div>
                    <span className="text-right text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400 sm:text-xs">{String(status)}</span>
                  </div>
                );
              })}
            </div>

            <Button asChild variant="ghost" className="mt-7 h-auto rounded-full px-0 py-3 text-sm font-bold text-blue-700 hover:bg-transparent hover:text-blue-900">
              <NavLink to="/device" className="flex items-center gap-2">
                Explore engineering and measurement
                <ArrowRight className="h-4 w-4" />
              </NavLink>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07111f] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute right-[-12rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-blue-600/20 blur-[110px]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <ScrollReveal className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-300">Measurement architecture</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
              Two force signals. Kept distinct.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
              Caregiver preload and device percussion output play different roles. Smart Lung Physio is being engineered to evaluate them separately—not collapse them into one number.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-400/10 text-blue-300">
                  <Hand className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">Caregiver input</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">Steady contact pressure used during positioning and setup.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300">
                  <Activity className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">Device output</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">Repeating mechanical output characterized through bench testing.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-4 shadow-[0_35px_90px_-45px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:p-6">
              <div className="rounded-[1.35rem] border border-slate-200 bg-slate-50 p-5 text-slate-950 sm:p-7">
                <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Illustrative session view</p>
                    <p className="mt-1.5 text-lg font-bold">Guided setup · Left lower zone</p>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> Live concept
                  </span>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">Caregiver preload</p>
                    <p className="mt-3 text-4xl font-bold tracking-[-0.05em]">17.4 <span className="text-base font-semibold text-slate-400">N</span></p>
                    <div className="relative mt-6 h-2 overflow-hidden rounded-full bg-slate-200">
                      <div className="absolute inset-y-0 left-0 w-[58%] rounded-full bg-gradient-to-r from-blue-700 to-cyan-500" />
                      <span className="absolute left-[58%] top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white bg-cyan-500 shadow-md" />
                    </div>
                    <div className="mt-2 flex justify-between text-[10px] font-semibold text-slate-400"><span>0</span><span>Illustrative only</span><span>30</span></div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-700">Output trace</p>
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Bench view</span>
                    </div>
                    <svg viewBox="0 0 280 95" className="mt-4 h-20 w-full" role="img" aria-label="Illustrative device output trace">
                      <path d="M0 20 H280 M0 48 H280 M0 76 H280" stroke="#e2e8f0" strokeWidth="1" />
                      <path d="M0 55 C18 55 19 20 29 20 S39 76 50 76 S62 31 74 31 S86 65 98 65 S112 26 124 26 S137 71 149 71 S162 35 174 35 S189 61 201 61 S216 28 228 28 S243 68 255 68 S267 42 280 42" fill="none" stroke="#0891b2" strokeWidth="3" strokeLinecap="round" className="animate-trace-draw" />
                    </svg>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-3 rounded-2xl bg-slate-950 px-5 py-4 text-white sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <Wifi className="h-5 w-5 text-sky-300" />
                    <div>
                      <p className="text-sm font-bold">Structured session record</p>
                      <p className="mt-0.5 text-xs text-slate-400">Platform workflow under development</p>
                    </div>
                  </div>
                  <ArrowRight className="hidden h-4 w-4 text-slate-500 sm:block" />
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-[11px] leading-5 text-slate-500">
              Interface values and ranges are illustrative. Platform features remain under development.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-200">
              <img
                src={publicAsset("media/workflow-handling.webp")}
                alt="Early Smart Lung Physio prototype reviewed in a supervised-care workflow"
                className="aspect-[5/4] w-full scale-[1.08] object-cover object-[72%_58%] sm:aspect-[16/10]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-5 sm:inset-x-7 sm:bottom-7">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-200 sm:text-xs">Design in context</p>
                  <p className="mt-2 max-w-md text-lg font-bold leading-6 text-white sm:text-2xl">Shaped around the way supervised care actually happens.</p>
                </div>
                <Users className="hidden h-8 w-8 text-white/70 sm:block" />
              </div>
            </div>
            <p className="mt-3 text-xs leading-5 text-slate-400">Early prototype workflow review; not clinical validation.</p>
          </ScrollReveal>

          <ScrollReveal delay={100} className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">Workflow-informed development</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-5xl">
              New technology has to fit real care.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              More than 100 discovery conversations with respiratory, rehabilitation, long-term care, and healthcare stakeholders have shaped the development direction.
            </p>

            <div className="mt-8 space-y-4">
              {[
                [CheckCircle2, "Caregiver handling", "Designed around supervised use and practical positioning."],
                [ShieldCheck, "Safety-focused development", "Feedback and limits remain subject to engineering and clinical validation."],
                [ClipboardCheck, "Documentation fit", "Session records are being designed for care-team communication."],
              ].map(([Icon, title, description]) => {
                const ItemIcon = Icon as typeof CheckCircle2;
                return (
                  <div key={String(title)} className="flex gap-4 border-t border-slate-200 pt-4 first:border-0 first:pt-0">
                    <ItemIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" />
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{String(title)}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-500">{String(description)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f5f7f9] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700">
                <Sparkles className="h-3.5 w-3.5" /> Development dashboard
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl">What is real today.</h2>
              <p className="mt-4 max-w-md text-base leading-7 text-slate-600">
                Clear status is part of credibility. We separate completed work from active development and future validation.
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
              {developmentStatus.map((item, index) => (
                <div key={item.label} className="grid gap-3 border-b border-slate-200 p-5 last:border-0 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6 sm:px-6">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 text-xs font-bold text-slate-300">0{index + 1}</span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{item.label}</h3>
                      <p className="mt-1 text-sm leading-5 text-slate-500">{item.detail}</p>
                    </div>
                  </div>
                  <span className={`ml-8 w-fit rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] sm:ml-0 ${item.tone}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400 sm:text-xs">Development ecosystem</p>
            <div className="mt-8 grid grid-cols-2 items-center gap-x-7 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
              {supportOrganizations.map((organization) => (
                <div key={organization.name} className="flex h-14 items-center justify-center">
                  <img
                    src={organization.src}
                    alt={organization.name}
                    className="max-h-12 max-w-[9rem] object-contain grayscale opacity-65 transition duration-300 hover:grayscale-0 hover:opacity-100"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <p className="mx-auto mt-7 max-w-3xl text-[11px] leading-5 text-slate-400">
              Logos identify program participation, ecosystem engagement, or development support. They do not indicate clinical endorsement or product validation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#0b1b2f] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <ScrollReveal className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-300">Build the evidence with us</p>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
            Help shape the next stage of respiratory-care technology.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            We are speaking with long-term care operators, respiratory and rehabilitation teams, clinical collaborators, and product-development partners.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-auto rounded-full bg-sky-400 px-8 py-4 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300 sm:text-base">
              <NavLink to="/contact" className="flex items-center gap-2">
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </NavLink>
            </Button>
            <Button asChild variant="ghost" size="lg" className="h-auto rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base">
              <NavLink to="/clinical-evidence">Review Development Evidence</NavLink>
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Home;
