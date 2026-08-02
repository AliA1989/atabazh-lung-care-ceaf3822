import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import {
  Activity,
  ArrowRight,
  BarChart3,
  ChevronRight,
  ClipboardList,
  Clock,
  Heart,
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

const challengeItems = [
  {
    icon: Users,
    title: "Staffing Constraints",
    description:
      "Limited staff availability makes time-intensive manual chest physiotherapy difficult to deliver consistently across resident populations.",
  },
  {
    icon: Clock,
    title: "Time Requirements",
    description:
      "Manual airway-clearance routines can be difficult to repeat consistently when care teams are balancing many resident needs.",
  },
  {
    icon: Heart,
    title: "Complex Resident Needs",
    description:
      "Residents with frailty and multiple conditions require careful, supervised support aligned with clinical judgment.",
  },
];

const approachItems = [
  {
    icon: Activity,
    title: "Sensor-Guided",
    desc: "Sensor feedback is being evaluated for guided delivery",
  },
  {
    icon: Clock,
    title: "Workflow-Aware",
    desc: "Built around practical routines in supervised care",
  },
  {
    icon: Shield,
    title: "Structured Workflow",
    desc: "Step-by-step guidance for care staff",
  },
  {
    icon: BarChart3,
    title: "Documentation",
    desc: "Session records designed to support care communication",
  },
];

const ltcFeatures = [
  {
    icon: Clock,
    title: "Setup Focus",
    desc: "Simplified bedside workflow under evaluation",
  },
  {
    icon: Shield,
    title: "Safety Focused",
    desc: "Feedback and limits designed for supervised use",
  },
  {
    icon: Users,
    title: "Caregiver Guided",
    desc: "Structured workflow guidance",
  },
  {
    icon: BarChart3,
    title: "Documentation",
    desc: "Structured session records",
  },
];

const Home = () => {
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
    {
      icon: ClipboardList,
      title: "Workflow Fit",
      desc: "Designed around repeatable team routines.",
      src: publicAsset("media/workflow-fit.webp"),
      alt: "Seated workflow review with early prototype setup",
      crop: "scale-[1.18] object-[74%_68%]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-950">
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-[#f8fafc]">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
        <div className="pointer-events-none absolute -right-48 top-8 -z-10 h-[38rem] w-[38rem] rounded-full bg-blue-100/60 blur-3xl" />

        <div className="mx-auto grid min-h-[46rem] max-w-[90rem] items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 lg:px-12 lg:pb-20 lg:pt-32">
          <div className="relative z-10 max-w-[35rem]">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3.5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-blue-800 opacity-0 shadow-sm animate-fade-in backdrop-blur"
              style={{ animationDelay: "80ms", animationFillMode: "forwards" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              Smart Lung Physio™
            </div>

            <h1
              className="mt-7 text-[2.7rem] font-bold leading-[1.04] tracking-[-0.05em] text-slate-950 opacity-0 animate-fade-in sm:text-[3.35rem] lg:text-[3.65rem] xl:text-[4rem]"
              style={{ animationDelay: "130ms", animationFillMode: "forwards" }}
            >
              Airway-clearance support, designed around <span className="text-blue-700">care teams.</span>
            </h1>

            <p
              className="mt-6 max-w-[31rem] text-base leading-7 text-slate-600 opacity-0 animate-fade-in sm:text-lg sm:leading-8"
              style={{ animationDelay: "180ms", animationFillMode: "forwards" }}
            >
              A sensor-guided device concept for more structured respiratory-care workflows in long-term care.
            </p>

            <div
              className="mt-8 flex flex-col gap-3 opacity-0 animate-fade-in sm:flex-row sm:items-center"
              style={{ animationDelay: "230ms", animationFillMode: "forwards" }}
            >
              <Button
                asChild
                size="lg"
                className="h-auto rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-semibold shadow-[0_14px_30px_-16px_rgba(29,78,216,0.75)] transition hover:-translate-y-0.5 hover:bg-blue-800 sm:text-base"
              >
                <NavLink to="/device" className="flex items-center gap-2">
                  Explore the Device
                  <ArrowRight className="h-4 w-4" />
                </NavLink>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-auto rounded-xl border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-white sm:text-base"
              >
                <NavLink to="/contact" className="flex items-center gap-2">
                  Discuss Collaboration
                  <ChevronRight className="h-4 w-4" />
                </NavLink>
              </Button>
            </div>

            <p
              className="mt-7 flex items-center gap-2.5 text-xs font-medium text-slate-500 opacity-0 animate-fade-in"
              style={{ animationDelay: "280ms", animationFillMode: "forwards" }}
            >
              <span className="h-2 w-2 rounded-full border-2 border-amber-500 bg-amber-100" />
              Medical device under development · Not cleared for sale
            </p>
          </div>

          <div
            className="relative w-full opacity-0 animate-fade-in"
            style={{ animationDelay: "260ms", animationFillMode: "forwards" }}
          >
            <ProductFilm />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <ScrollReveal className="grid gap-8 lg:grid-cols-[0.34fr_1fr] lg:items-center">
            <div>
              <span className="block text-[0.66rem] font-bold uppercase tracking-[0.24em] text-blue-700">
                Ecosystem Engagement
              </span>
              <h2 className="mt-3 max-w-xs text-lg font-semibold leading-6 tracking-[-0.02em] text-slate-800 sm:text-xl">
                Connected to Canada's health innovation community
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-5">
              {SUPPORT_ORGANIZATIONS.map((org) => (
                <div
                  key={org.name}
                  className="flex h-24 items-center justify-center overflow-hidden bg-white px-4 sm:h-28"
                >
                  <img
                    src={org.src}
                    alt={org.name}
                    className={`${org.logoClassName ?? `${org.square ? "max-h-14" : "max-h-12"} max-w-full`} object-contain opacity-75 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>

          <p className="mt-5 text-xs leading-5 text-slate-500 lg:ml-[calc(34%+2rem)]">
            Logos identify programs, ecosystem participation, or development support. They do not indicate clinical endorsement or product validation.
          </p>
        </div>
      </section>

      <section className="bg-[#f8fafc] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-blue-700">The context</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[2.8rem]">
                The Operational Challenge
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-slate-600 sm:text-lg">
                Respiratory care delivery in LTC is shaped by staffing, time, documentation, and resident complexity.
              </p>
            </div>

            <div className="border-t border-slate-300">
              {challengeItems.map((item, index) => (
                <article
                  key={item.title}
                  className="grid gap-4 border-b border-slate-300 py-6 sm:grid-cols-[3.5rem_1fr] sm:gap-5 sm:py-7"
                >
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

      <section className="border-y border-slate-200 bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <ScrollReveal>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-blue-700">
              Guided Airway Clearance Support
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[2.8rem]">
              A Practical Tool for Supervised Care Settings
            </h2>
            <div className="mt-6 max-w-xl space-y-4 border-l-2 border-blue-600 pl-5 text-base leading-7 text-slate-600 sm:pl-6 sm:text-lg">
              <p>
                Smart Lung Physio™ is a sensor-guided airway-clearance support system being developed for long-term care and supervised care settings. It is intended to help trained caregivers follow structured routines with clearer setup, feedback, and documentation.
              </p>
              <p>
                The system is designed to support caregiver-guided sessions, capture relevant session information, and make airway-clearance workflows easier to repeat across shifts.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="mt-8 h-auto rounded-xl border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
            >
              <NavLink to="/device" className="flex items-center gap-2">
                View Device Workflow
                <ChevronRight className="h-4 w-4" />
              </NavLink>
            </Button>
          </ScrollReveal>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {approachItems.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 60} className="h-full bg-[#f8fafc]">
                <article className="h-full min-h-44 p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-white">
                      <item.icon className="h-[1.15rem] w-[1.15rem]" />
                    </span>
                    <span className="text-[0.65rem] font-bold tracking-[0.18em] text-slate-400">0{index + 1}</span>
                  </div>
                  <h3 className="mt-7 text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="grid gap-6 border-b border-slate-300 pb-8 md:grid-cols-[0.38fr_1fr] md:items-end">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-blue-700">Design in Context</p>
            <div>
              <h2 className="text-3xl font-bold leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[2.8rem]">
                Shaped by the way care actually happens.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                Four practical priorities from early supervised workflow reviews.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {workflowInsights.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 60}>
                <article className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className={`h-full w-full object-cover saturate-[0.88] transition duration-500 group-hover:scale-[1.03] group-hover:saturate-100 ${item.crop}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
                  </div>
                  <div className="mt-4 flex items-start gap-3">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-blue-200 bg-white text-blue-700">
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

          <p className="mt-7 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
            Early prototype workflow reviews; not clinical validation.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20">
          <ScrollReveal>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-blue-700">Purpose-Built</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[2.8rem]">
              Designed for Long-Term Care
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              Long-term care teams face increasing resident complexity, staffing pressure, and limited time for respiratory-care routines. Smart Lung Physio™ is being developed to support more structured airway-clearance workflows through guided setup, safety-focused feedback concepts, and practical documentation.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 h-auto rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-semibold shadow-[0_14px_30px_-16px_rgba(29,78,216,0.65)] transition hover:-translate-y-0.5 hover:bg-blue-800"
            >
              <NavLink to="/long-term-care" className="flex items-center gap-2">
                View LTC Implementation Details
                <ArrowRight className="h-4 w-4" />
              </NavLink>
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fafc]">
              {ltcFeatures.map((item, index) => (
                <article
                  key={item.title}
                  className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-slate-200 p-5 last:border-0 sm:gap-6 sm:px-6 sm:py-5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <item.icon className="h-[1.1rem] w-[1.1rem]" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">{item.desc}</p>
                  </div>
                  <span className="hidden text-[0.65rem] font-bold tracking-[0.18em] text-slate-400 sm:block">0{index + 1}</span>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#0b1b2f] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
        <ScrollReveal className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-sky-300">Next-stage collaboration</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-[2.8rem]">
              Discuss Pilot Readiness or Clinical Collaboration
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              We welcome conversations with LTC operators, clinical partners, rehabilitation teams, respiratory-care stakeholders, and healthcare innovation reviewers.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Button
              asChild
              size="lg"
              className="h-auto rounded-xl bg-sky-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300"
            >
              <NavLink to="/contact">Discuss a Pilot</NavLink>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-auto rounded-xl border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10 hover:text-white"
            >
              <NavLink to="/about">About Our Team</NavLink>
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Home;
