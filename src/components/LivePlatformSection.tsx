import { useEffect, useMemo, useState } from "react";
import { ClipboardCheck, Cloud, Database, HeartPulse, Wifi } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const demoFrames = [
  { force: 16.8, spo2: 96, heartRate: 78, trace: "M0 48 C28 42 44 50 70 44 S110 36 138 42 S180 51 210 41 S252 34 290 40" },
  { force: 17.4, spo2: 96, heartRate: 79, trace: "M0 45 C25 38 48 48 72 42 S112 39 142 45 S182 47 212 38 S250 36 290 43" },
  { force: 18.1, spo2: 97, heartRate: 79, trace: "M0 43 C30 47 45 37 75 42 S115 48 145 39 S185 34 214 42 S255 48 290 39" },
  { force: 17.7, spo2: 96, heartRate: 78, trace: "M0 46 C27 40 48 44 76 39 S116 35 145 43 S180 50 212 42 S254 35 290 41" },
];

const platformBenefits = [
  {
    icon: Wifi,
    title: "Live session visibility",
    description: "Interface concepts surface force feedback, guidance, and session context in one focused view.",
  },
  {
    icon: ClipboardCheck,
    title: "Structured session record",
    description: "The platform is intended to capture time-stamped session information for later review.",
  },
  {
    icon: Cloud,
    title: "Export-ready direction",
    description: "Care-record export and PointClickCare integration remain planned development work.",
  },
];

const LivePlatformSection = () => {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setFrameIndex((current) => (current + 1) % demoFrames.length);
    }, 1600);

    return () => window.clearInterval(interval);
  }, []);

  const frame = demoFrames[frameIndex];
  const forcePosition = useMemo(() => Math.min(100, Math.max(0, (frame.force / 30) * 100)), [frame.force]);

  return (
    <section className="relative overflow-hidden bg-[#071321] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
      <div className="pointer-events-none absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full bg-blue-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="container relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <ScrollReveal className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-sky-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Live platform preview
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-[2.8rem]">
            Every session becomes a clearer record.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            The platform concept brings session guidance, measurement feedback, and documentation into one workflow designed for supervised care teams.
          </p>

          <div className="mt-8 space-y-5">
            {platformBenefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sky-300">
                  <benefit.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 border-l-2 border-sky-400/50 pl-4 text-xs leading-5 text-slate-400">
            Interactive interface concept. Values, ranges, alerts, integrations, and clinical workflows are illustrative and remain under development.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-blue-500/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-slate-900/90 p-3 shadow-[0_28px_70px_-35px_rgba(2,8,23,0.9)] sm:p-5 lg:p-6">
              <div className="rounded-[1.35rem] border border-slate-200 bg-slate-50 p-4 text-slate-900 sm:p-6">
                <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">SL</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Demo session</p>
                      <p className="mt-1 font-semibold text-slate-800">Training profile · Room 214</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                      Live demo
                    </span>
                    <span className="text-sm font-semibold text-slate-500">01:42</span>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">Caregiver preload</p>
                        <p className="mt-2 text-4xl font-bold tracking-[-0.05em] text-slate-950">
                          {frame.force.toFixed(1)} <span className="text-base font-semibold text-slate-400">N</span>
                        </p>
                      </div>
                      <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-700">In demo range</span>
                    </div>
                    <div className="relative mt-7 h-2.5 overflow-hidden rounded-full bg-slate-200">
                      <div className="absolute inset-y-0 left-[53%] w-[14%] bg-emerald-200" />
                      <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-700" style={{ width: `${forcePosition}%` }} />
                    </div>
                    <div className="mt-2 flex justify-between text-[10px] font-semibold text-slate-400">
                      <span>0</span>
                      <span>Illustrative range 16–20 N</span>
                      <span>30</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">Planned session context</p>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-blue-50 p-3">
                        <p className="text-xs font-semibold text-slate-500">SpO₂</p>
                        <p className="mt-1 text-2xl font-bold text-blue-800">{frame.spo2}%</p>
                      </div>
                      <div className="rounded-xl bg-rose-50 p-3">
                        <p className="text-xs font-semibold text-slate-500">Heart rate</p>
                        <p className="mt-1 text-2xl font-bold text-rose-700">{frame.heartRate}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                      <HeartPulse className="h-4 w-4 text-rose-500" />
                      Optional physiologic context under development
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">Positioning guidance</p>
                      <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Concept</span>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                      <div className="relative flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                        <div className="absolute left-1/2 top-3 h-14 w-px -translate-x-1/2 bg-blue-200" />
                        <div className="absolute left-3 top-1/2 h-px w-14 -translate-y-1/2 bg-blue-200" />
                        <span className="absolute bottom-5 left-5 h-3 w-3 rounded-full bg-blue-600 shadow-[0_0_0_6px_rgba(37,99,235,0.12)]" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">Left lower zone</p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">Placement cue shown for interface demonstration only.</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">Output trace · last 60 s</p>
                      <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live
                      </span>
                    </div>
                    <svg viewBox="0 0 290 80" className="mt-4 h-20 w-full" role="img" aria-label="Illustrative live session trace">
                      <path d="M0 64 H290 M0 40 H290 M0 16 H290" stroke="#e2e8f0" strokeWidth="1" />
                      <path d={frame.trace} fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" className="transition-all duration-700" />
                      <circle cx="288" cy="40" r="4" fill="#06b6d4" className="animate-pulse" />
                    </svg>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
                    <Database className="h-5 w-5 text-blue-700" />
                    <div>
                      <p className="text-xs font-bold text-slate-800">Session capture</p>
                      <p className="text-[11px] text-slate-500">Structured record concept</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
                    <Cloud className="h-5 w-5 text-cyan-700" />
                    <div>
                      <p className="text-xs font-bold text-slate-800">Care-record export</p>
                      <p className="text-[11px] text-slate-500">Integration planned</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LivePlatformSection;
