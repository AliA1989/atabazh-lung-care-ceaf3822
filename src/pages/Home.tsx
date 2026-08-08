import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import {
  Activity,
  ArrowRight,
  BarChart3,
  ChevronRight,
  ClipboardList,
  Clock,
  Crosshair,
  Shield,
  Users,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import ProductFilm from "@/components/ProductFilm";
import techAllianceLogo from "@/assets/support/techalliance.svg";
import mitacsLogo from "@/assets/support/mitacs.svg";
import lab2MarketValidateLogo from "@/assets/support/lab2market-validate.webp";
import springLogo from "@/assets/support/spring.svg";
import marsLogo from "@/assets/support/mars.svg";
import h2iLogo from "@/assets/support/h2i.svg";
import ibzLogo from "@/assets/support/ibz.svg";
import innovationFactoryLogo from "@/assets/support/innovation-factory.svg";
import elevateIpLogo from "@/assets/support/elevate-ip.svg";
import baycrestLogo from "@/assets/support/baycrest.png";
import { publicAsset } from "@/lib/publicAsset";

const SUPPORT_ORGANIZATIONS = [
  { name: "MaRS Discovery District", src: marsLogo, square: true },
  { name: "Health Innovation Hub", src: h2iLogo, logoClassName: "h-20 max-h-none max-w-none sm:h-24" },
  { name: "Innovation Boost Zone", src: ibzLogo, logoClassName: "h-20 max-h-none max-w-none sm:h-24" },
  { name: "Spring", src: springLogo, square: true },
  { name: "TechAlliance", src: techAllianceLogo },
  { name: "Innovation Factory", src: innovationFactoryLogo, logoClassName: "h-20 max-h-none max-w-none sm:h-24" },
  { name: "ElevateIP", src: elevateIpLogo, logoClassName: "h-20 max-h-none max-w-none sm:h-24" },
  { name: "Lab2Market Validate", src: lab2MarketValidateLogo },
  { name: "Mitacs", src: mitacsLogo },
  { name: "Baycrest", src: baycrestLogo, logoClassName: "max-h-8 max-w-full brightness-0 sm:max-h-9" },
];

const productPillars = [
  {
    icon: Shield,
    title: "Guide",
    description: "Provide real-time feedback concepts during supervised therapy delivery.",
  },
  {
    icon: BarChart3,
    title: "Measure",
    description: "Capture force, motion, orientation, and session parameters for review.",
  },
  {
    icon: ClipboardList,
    title: "Document",
    description: "Create structured session records designed to support care communication.",
  },
];

const howItWorks = [
  {
    icon: Crosshair,
    title: "Position",
    description: "Identify the intended chest region and place the patient-contact interface.",
  },
  {
    icon: Activity,
    title: "Deliver",
    description: "Apply localized mechanical chest percussion through the handheld device.",
  },
  {
    icon: BarChart3,
    title: "Measure",
    description: "Prototype sensing captures contact force, motion, orientation, and session parameters.",
  },
  {
    icon: Shield,
    title: "Guide",
    description: "Interface concepts provide real-time feedback to the trained caregiver.",
  },
  {
    icon: ClipboardList,
    title: "Document",
    description: "Session information is organized into a structured record concept.",
  },
];

const challengeItems = [
  {
    icon: Users,
    title: "Staffing",
    description: "Care teams need respiratory-support approaches that can fit supervised routines without unnecessary complexity.",
  },
  {
    icon: Activity,
    title: "Consistency",
    description: "Manual delivery can vary by caregiver, positioning, and care setting.",
  },
  {
    icon: ClipboardList,
    title: "Documentation",
    description: "Care teams need a clearer record of what was delivered and when.",
  },
];

const workflowInsights = [
  {
    icon: Clock,
    title: "Bedside Setup",
    desc: "Clear placement and a simpler start.",
    src: publicAsset("media/workflow-bedside.webp"),
    alt: "Early prototype workflow review in a supervised care setting",
    crop: "scale-[1.22] object-[47%_72%]",
  },
  {
    icon: Users,
    title: "Caregiver Handling",
    desc: "Practical handling during supervised care.",
    src: publicAsset("media/workflow-handling.webp"),
    alt: "Prototype positioning review during respiratory care workflow",
    crop: "scale-[1.16] object-[76%_58%]",
  },
  {
    icon: Activity,
    title: "Patient Positioning",
    desc: "Reviewed across common care positions.",
    src: publicAsset("media/workflow-positioning.webp"),
    alt: "Supine positioning review with early Smart Lung Physio prototype",
    crop: "scale-[1.2] object-[38%_68%]",
  },
];

const developmentAreas = ["Technical", "Human Factors", "Clinical Workflow", "Regulatory Readiness", "Market Learning"];

const ltcHighlights = [
  { icon: Crosshair, label: "Clearer supervised setup" },
  { icon: BarChart3, label: "More measurable delivery" },
  { icon: ClipboardList, label: "Structured session documentation" },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-950">
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-[#f8fafc]">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
        <div className="pointer-events-none absolute -right-48 top-8 -z-10 h-[38rem] w-[38rem] rounded-full bg-blue-100/60 blur-3xl" />

        <div className="mx-auto grid min-h-[46rem] max-w-[90rem] items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 lg:px-12 lg:pb-20 lg:pt-32">
          <div className="relative z-10 max-w-[36rem]">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/85 px-3.5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-blue-800 opacity-0 shadow-sm animate-fade-in"
              style={{ animationDelay: "80ms", animationFillMode: "forwards" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              Physical airway-clearance device
            </div>

            <h1
              className="mt-7 text-[2.7rem] font-bold leading-[1.02] tracking-[-0.055em] text-slate-950 opacity-0 animate-fade-in sm:text-[3.35rem] lg:text-[3.7rem] xl:text-[4.1rem]"
              style={{ animationDelay: "130ms", animationFillMode: "forwards" }}
            >
              Making Airway Clearance <span className="text-blue-700">More Measurable.</span>
            </h1>

            <p
              className="mt-6 max-w-[34rem] text-base leading-7 text-slate-600 opacity-0 animate-fade-in sm:text-lg sm:leading-8"
              style={{ animationDelay: "180ms", animationFillMode: "forwards" }}
            >
              Smart Lung Physio™ is being developed to combine localized mechanical chest percussion with real-time sensing, guided delivery, and session documentation.
            </p>

            <div
              className="mt-8 flex flex-col gap-3 opacity-0 animate-fade-in sm:flex-row sm:items-center"
              style={{ animationDelay: "230ms", animationFillMode: "forwards" }}
            >
              <Button asChild size="lg" className="h-auto rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-semibold shadow-[0_14px_30px_-16px_rgba(29,78,216,0.75)] transition hover:-translate-y-0.5 hover:bg-blue-800 sm:text-base">
                <NavLink to="/device" className="flex items-center gap-2">
                  Explore Smart Lung Physio
                  <ArrowRight className="h-4 w-4" />
                </NavLink>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-auto rounded-xl border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-white sm:text-base">
                <NavLink to="/contact" className="flex items-center gap-2">
                  Discuss a Pilot
                  <ChevronRight className="h-4 w-4" />
                </NavLink>
              </Button>
            </div>

            <p
              className="mt-7 flex items-center gap-2.5 text-xs font-medium text-slate-500 opacity-0 animate-fade-in"
              style={{ animationDelay: "280ms", animationFillMode: "forwards" }}
            >
              <span className="h-2 w-2 rounded-full border-2 border-amber-500 bg-amber-100" />
              Medical device under development · Not yet commercially available
            </p>
          </div>

          <div className="relative w-full opacity-0 animate-fade-in" style={{ animationDelay: "260ms", animationFillMode: "forwards" }}>
            <ProductFilm />
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[0.65rem] font-bold uppercase tracking-[0.12em] text-slate-500 sm:text-xs">
              <span className="rounded-lg border border-slate-200 bg-white px-2 py-2.5">Physical device</span>
              <span className="rounded-lg border border-slate-200 bg-white px-2 py-2.5">Sensor guidance</span>
              <span className="rounded-lg border border-slate-200 bg-white px-2 py-2.5">Session record</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-blue-700">What it does</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[2.8rem]">
                Guided. Measurable. Documented.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              The physical device remains the core. Sensing, caregiver guidance, and software are being developed to make delivery more repeatable and reviewable.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-3">
            {productPillars.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 70} className="h-full bg-[#f8fafc]">
                <article className="h-full p-7 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-white">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span className="text-[0.65rem] font-bold tracking-[0.18em] text-slate-400">0{index + 1}</span>
                  </div>
                  <h3 className="mt-8 text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#f8fafc] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-blue-700">How Smart Lung Physio Works</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[2.8rem]">
              From localized therapy to a structured session record.
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {howItWorks.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 60}>
                <article className="relative h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <step.icon className="h-5 w-5" />
                    </span>
                    <span className="text-[0.65rem] font-bold tracking-[0.16em] text-slate-400">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{step.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <p className="mt-6 text-center text-xs leading-5 text-slate-500">
            Intended operation, interface details, and feedback parameters remain under development and require technical and clinical validation.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-blue-700">Why it matters</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[2.8rem]">
                Three practical gaps in supervised care.
              </h2>
            </div>
            <div className="border-t border-slate-300">
              {challengeItems.map((item, index) => (
                <article key={item.title} className="grid gap-4 border-b border-slate-300 py-6 sm:grid-cols-[3.5rem_1fr] sm:gap-5 sm:py-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-700">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div className="grid gap-2 sm:grid-cols-[0.55fr_1fr] sm:gap-8">
                    <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                      <span className="mr-3 text-xs font-bold text-slate-400">0{index + 1}</span>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f8fafc] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="grid gap-6 border-b border-slate-300 pb-8 md:grid-cols-[0.38fr_1fr] md:items-end">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-blue-700">Design in Context</p>
            <div>
              <h2 className="text-3xl font-bold leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[2.8rem]">
                Shaped by the way care actually happens.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                Early supervised reviews inform setup, handling, and positioning priorities.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {workflowInsights.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 60}>
                <article className="group grid gap-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:grid-cols-[9rem_1fr] sm:items-center md:block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200 md:aspect-[16/10]">
                    <img src={item.src} alt={item.alt} loading="lazy" className={`h-full w-full object-cover saturate-[0.88] transition duration-500 group-hover:scale-[1.03] group-hover:saturate-100 ${item.crop}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/15 to-transparent" />
                  </div>
                  <div className="flex items-start gap-3 p-2 md:pt-3">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-blue-200 bg-blue-50 text-blue-700">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                      <p className="mt-1 text-xs leading-5 text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <p className="mt-6 text-xs leading-5 text-slate-500">Early prototype workflow reviews; not clinical validation.</p>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <ScrollReveal>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-blue-700">Designed for Long-Term Care</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[2.8rem]">
              Technology designed around a real care setting.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Smart Lung Physio™ is being developed for trained caregivers who need a practical way to deliver, review, and document localized airway-clearance support.
            </p>
            <Button asChild size="lg" className="mt-8 h-auto rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-blue-800">
              <NavLink to="/long-term-care" className="flex items-center gap-2">
                Explore LTC Pilot Fit
                <ArrowRight className="h-4 w-4" />
              </NavLink>
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fafc]">
              {ltcHighlights.map((item, index) => (
                <div key={item.label} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-slate-200 p-6 last:border-0">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <item.icon className="h-[1.1rem] w-[1.1rem]" />
                  </span>
                  <p className="text-sm font-semibold text-slate-900 sm:text-base">{item.label}</p>
                  <span className="text-[0.65rem] font-bold tracking-[0.18em] text-slate-400">0{index + 1}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f8fafc] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-blue-700">Development & Validation</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[2.8rem]">
                Progress shown with clear boundaries.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                More than 100 stakeholder interviews have informed product requirements, workflow priorities, and pilot-readiness questions. This is discovery and development activity—not evidence of clinical efficacy.
              </p>
              <NavLink to="/clinical-evidence" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800">
                View Evidence & Development
                <ArrowRight className="h-4 w-4" />
              </NavLink>
            </div>

            <div className="grid gap-5">
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-5">
                {developmentAreas.map((area, index) => (
                  <div key={area} className="bg-white p-4 text-center sm:min-h-28 sm:p-5">
                    <span className="text-[0.65rem] font-bold tracking-[0.16em] text-slate-400">0{index + 1}</span>
                    <p className="mt-3 text-xs font-semibold leading-5 text-slate-800">{area}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-[#0b1b2f] p-6 text-white sm:p-7">
                {["Under development", "Not yet commercially available", "Clinical and technical validation activities ongoing"].map((status) => (
                  <div key={status} className="flex items-center gap-3 border-b border-white/10 py-3 first:pt-0 last:border-0 last:pb-0">
                    <span className="h-2 w-2 rounded-full bg-sky-300" />
                    <span className="text-sm font-medium text-slate-200">{status}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <ScrollReveal className="grid gap-8 lg:grid-cols-[0.34fr_1fr] lg:items-center">
            <div>
              <span className="block text-[0.66rem] font-bold uppercase tracking-[0.24em] text-blue-700">Ecosystem Engagement</span>
              <h2 className="mt-3 max-w-xs text-lg font-semibold leading-6 tracking-[-0.02em] text-slate-800 sm:text-xl">
                Connected to Canada's health innovation community
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-5">
              {SUPPORT_ORGANIZATIONS.map((org) => (
                <div key={org.name} className="flex h-24 items-center justify-center overflow-hidden bg-white px-4 sm:h-28">
                  <img src={org.src} alt={org.name} className={`${org.logoClassName ?? `${org.square ? "max-h-14" : "max-h-12"} max-w-full`} object-contain opacity-75 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0`} loading="lazy" />
                </div>
              ))}
            </div>
          </ScrollReveal>

          <p className="mt-5 text-xs leading-5 text-slate-500 lg:ml-[calc(34%+2rem)]">
            Logos identify programs, ecosystem participation, or development support. They do not indicate clinical endorsement or product validation.
          </p>
        </div>
      </section>

      <section className="bg-[#0b1b2f] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
        <ScrollReveal className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-sky-300">Pilot readiness</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-[2.8rem]">
              Evaluate Smart Lung Physio in Your Care Setting
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Discuss workflow fit, technical review, or a structured pilot-readiness pathway with Atabazh Medical.
            </p>
          </div>
          <Button asChild size="lg" className="h-auto rounded-xl bg-sky-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300">
            <NavLink to="/contact">Discuss Pilot Readiness</NavLink>
          </Button>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Home;
