import {
  ArrowRight,
  Cable,
  ClipboardCheck,
  Hand,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ScrollReveal } from "@/components/ScrollReveal";
import DeviceProductShowcase from "@/components/DeviceProductShowcase";
import DeviceMeasurementSection from "@/components/DeviceMeasurementSection";
import LivePlatformSection from "@/components/LivePlatformSection";
import { publicAsset } from "@/lib/publicAsset";

const careRealityItems = [
  {
    icon: Hand,
    title: "Caregiver handling",
    description: "Handheld use, positioning, and guided setup are being refined around supervised workflows.",
    status: "Active development",
  },
  {
    icon: Cable,
    title: "Power and portability",
    description: "The current functional prototype is mains-powered. Final portability requirements remain under review.",
    status: "Current build",
  },
  {
    icon: Wrench,
    title: "Cleaning pathway",
    description: "A removable patient-contact interface and suitable cleaning materials are part of the design direction.",
    status: "Under review",
  },
  {
    icon: ClipboardCheck,
    title: "Onboarding and records",
    description: "Guided prompts and structured session documentation are being designed for care-team use.",
    status: "Interface development",
  },
];

const Device = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white">
      <section className="relative isolate overflow-hidden bg-[#07111f] px-5 pb-20 pt-32 text-white sm:px-8 lg:px-12 lg:pb-28 lg:pt-36">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.055)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
        <div className="pointer-events-none absolute -right-48 top-[-14rem] -z-10 h-[44rem] w-[44rem] rounded-full bg-blue-600/25 blur-[120px]" />

        <div className="mx-auto grid max-w-[90rem] items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-sky-300/20 bg-sky-300/10 px-3.5 py-2 opacity-0 animate-fade-in">
              <Sparkles className="h-3.5 w-3.5 text-sky-300" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-200 sm:text-xs">Smart Lung Physio™</span>
            </div>

            <h1 className="mt-7 max-w-2xl text-[2.8rem] font-bold leading-[0.99] tracking-[-0.055em] text-white opacity-0 animate-fade-in sm:text-6xl lg:text-[4.55rem]">
              A respiratory-care device built to make <span className="text-sky-300">setup measurable.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 opacity-0 animate-fade-in sm:text-lg sm:leading-8">
              A caregiver-guided airway-clearance system in development, combining localized mechanical percussion, force-aware setup, and structured session documentation.
            </p>

            <div className="mt-9 flex flex-col gap-3 opacity-0 animate-fade-in sm:flex-row">
              <Button asChild size="lg" className="h-auto rounded-full bg-white px-7 py-4 text-sm font-bold text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-sky-50 sm:text-base">
                <a href="#measurement" className="flex items-center gap-2">
                  See the Measurement System
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="h-auto rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base">
                <NavLink to="/contact">Discuss Technical Review</NavLink>
              </Button>
            </div>

            <div className="mt-10 grid max-w-xl gap-3 border-t border-white/10 pt-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/10">
              {[
                ["Built", "Functional prototype"],
                ["Mains", "Current power source"],
                ["Planned", "Clinical validation"],
              ].map(([value, label]) => (
                <div key={label} className="sm:px-4 sm:first:pl-0">
                  <p className="text-sm font-bold text-white sm:text-base">{value}</p>
                  <p className="mt-1 text-[10px] leading-4 text-slate-400 sm:text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative opacity-0 animate-fade-in lg:translate-x-5">
            <div className="absolute -inset-6 rounded-[2.75rem] bg-gradient-to-br from-blue-500/25 via-cyan-400/5 to-transparent blur-2xl" />
            <figure className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/15 bg-[#dddddd] shadow-[0_35px_90px_-35px_rgba(0,0,0,0.9)]">
              <img
                src={publicAsset("media/smart-lung-physio-product-showcase-poster.webp")}
                alt="Smart Lung Physio product visualization informed by the functional prototype"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/15" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/45 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:left-6 sm:top-6 sm:text-[10px]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                Prototype-informed product view
              </div>
              <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-slate-950/70 p-4 text-xs leading-5 text-slate-200 backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-5 sm:text-sm">
                Product enclosure and interface are design visualizations. Final industrial design and specifications may change.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <DeviceProductShowcase />

      <DeviceMeasurementSection />

      <LivePlatformSection />

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="grid gap-8 border-b border-slate-200 pb-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">Designed for care reality</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-5xl">
                Engineering beyond the demo.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Product development also has to address handling, power, cleaning, training, and documentation—not only the core mechanism.
            </p>
          </ScrollReveal>

          <div className="mt-2">
            {careRealityItems.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 40}>
                <div className="grid gap-4 border-b border-slate-200 py-6 sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:gap-6 lg:grid-cols-[3rem_0.55fr_1fr_auto]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-blue-700">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                  <p className="text-sm leading-6 text-slate-500 sm:col-start-2 lg:col-start-auto">{item.description}</p>
                  <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-slate-500 sm:col-start-3 sm:row-start-1 lg:col-start-auto">
                    {item.status}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
            <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-700" />
            <p>Smart Lung Physio™ is intended for future supervised use and is not designed to replace clinical judgment, licensed respiratory care, or facility protocols.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#0b1b2f] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <ScrollReveal className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-300">Product collaboration</p>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">Help evaluate the system around real care.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            We welcome technical review, clinical-workflow feedback, and pilot-readiness discussions with care organizations and research partners.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-auto rounded-full bg-sky-400 px-8 py-4 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300 sm:text-base">
              <NavLink to="/contact" className="flex items-center gap-2">
                Start a Product Conversation
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

export default Device;
