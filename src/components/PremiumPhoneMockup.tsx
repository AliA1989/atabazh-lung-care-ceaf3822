import { useEffect, useState } from "react";
import { Activity, CheckCircle2, HeartPulse, Pause, ShieldCheck, Square, Wind } from "lucide-react";
import tabletLogo from "@/assets/tablet-logo.svg";

interface PremiumPhoneMockupProps {
  className?: string;
}

const rhythmBars = [18, 34, 46, 58, 42, 52, 36, 48, 28, 40, 22, 30, 18, 26, 16, 24];

const PremiumPhoneMockup = ({ className = "" }: PremiumPhoneMockupProps) => {
  const [oxygenLevel, setOxygenLevel] = useState(94);
  const [heartRate, setHeartRate] = useState(72);
  const [force, setForce] = useState(19.2);
  const forcePosition = Math.min(70, Math.max(30, force * 2.65));

  useEffect(() => {
    const oxygenInterval = setInterval(() => {
      setOxygenLevel((prev) => (prev === 94 ? 95 : 94));
    }, 2800);

    const heartInterval = setInterval(() => {
      setHeartRate((prev) => {
        const next = prev + (Math.random() > 0.5 ? 1 : -1);
        return Math.min(74, Math.max(71, next));
      });
    }, 1800);

    const forceInterval = setInterval(() => {
      setForce((prev) => {
        const next = prev + (Math.random() > 0.5 ? 0.2 : -0.2);
        return Math.min(19.8, Math.max(18.8, Number(next.toFixed(1))));
      });
    }, 1600);

    return () => {
      clearInterval(oxygenInterval);
      clearInterval(heartInterval);
      clearInterval(forceInterval);
    };
  }, []);

  return (
    <div className={`relative h-[370px] w-full max-w-[760px] overflow-visible sm:h-[500px] md:h-[520px] lg:h-[485px] ${className}`}>
      <div className="absolute left-1/2 top-0 w-[860px] -translate-x-1/2 origin-top scale-[0.33] sm:scale-[0.52] md:scale-[0.7] lg:scale-[0.65]">
        <div className="absolute inset-x-8 -bottom-8 h-16 rounded-full bg-slate-700/18 blur-3xl animate-tablet-shadow" />
        <div className="relative rounded-[36px] bg-gradient-to-br from-slate-100 via-white to-slate-300 p-3 shadow-2xl shadow-slate-900/16 ring-1 ring-white/90 animate-tablet-float">
          <div className="absolute left-1/2 top-1.5 z-20 h-1.5 w-14 -translate-x-1/2 rounded-full bg-slate-300/70" />
          <div className="absolute right-5 top-1/2 z-20 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-slate-800/70 ring-2 ring-slate-300/70" />
          <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-inner shadow-slate-900/5 ring-1 ring-slate-900/5">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/50 via-transparent to-[hsl(205,55%,92%)]/35" />

        <div className="relative flex items-center justify-between border-b border-slate-200 bg-white/95 px-4 py-3 sm:px-5">
          <div className="flex min-w-0 items-center gap-4">
            <div className="hidden h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-blue-900/5 sm:flex">
              <img src={tabletLogo} alt="Atabazh Med" className="h-16 w-16 max-w-none object-contain contrast-125 saturate-110" />
            </div>
            <div className="min-w-0 border-l border-slate-200 pl-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Therapy Session</p>
              <p className="truncate text-lg font-bold text-slate-900 sm:text-xl">Mrs. Okafor · Room 214</p>
              <p className="mt-0.5 text-[11px] font-semibold text-slate-500">Resident ID 214-08 · Left lower lobe protocol</p>
            </div>
          </div>
          <div className="flex flex-shrink-0 items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-sm font-bold text-slate-700 ring-1 ring-slate-200 sm:flex">
              <span className="h-2 w-2 rounded-full bg-slate-500 animate-pulse" />
              Device paired
            </div>
            <div className="hidden items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-sm font-bold text-slate-700 ring-1 ring-slate-200 sm:flex">
              <ShieldCheck className="h-4 w-4" />
              Safe range
            </div>
            <p className="font-sans tabular-nums text-base font-bold text-slate-500 sm:text-xl">04:32 / 10:00</p>
          </div>
        </div>

            <div className="relative h-1.5 overflow-hidden bg-slate-100">
          <div className="h-full w-[45%] bg-gradient-to-r from-slate-600 to-blue-500" />
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-session-scan" />
        </div>

        <div className="relative grid bg-white/90 md:grid-cols-[1.05fr_1fr]">
          <div className="border-b border-slate-200 p-4 sm:p-5 md:border-b-0 md:border-r">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500">Therapy Pressure</p>
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="font-sans tabular-nums text-6xl font-bold leading-none text-slate-800 sm:text-7xl">
                    {force.toFixed(1)}
                  </span>
                  <span className="text-3xl font-bold text-slate-500">N</span>
                </div>
                <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-base font-semibold text-slate-700 ring-1 ring-slate-200">
                  <CheckCircle2 className="h-4 w-4" />
                  In target range · continue
                </p>
              </div>
                <div className="text-right">
                  <p className="font-sans tabular-nums text-sm font-bold text-slate-600 sm:text-base">Target 15 - 20 N</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Calibrated</p>
                </div>
            </div>

            <div className="mt-6">
              <div className="relative pb-8 pt-6">
                <div
                  className="absolute top-0 -translate-x-1/2 rounded-md bg-slate-900 px-2 py-0.5 text-[11px] font-bold text-white shadow-sm"
                  style={{ left: `${forcePosition}%` }}
                >
                  {force.toFixed(1)}
                </div>
                <div className="relative h-5 overflow-hidden rounded-full bg-slate-200 shadow-inner shadow-slate-900/10 ring-1 ring-slate-200">
                  <div className="absolute inset-y-0 left-0 w-[18%] bg-slate-200" />
                  <div className="absolute inset-y-0 left-[18%] w-[14%] bg-slate-300" />
                  <div className="absolute inset-y-0 left-[32%] w-[23%] bg-gradient-to-r from-slate-500 to-blue-600" />
                  <div className="absolute inset-y-0 left-[55%] w-[18%] bg-slate-300" />
                  <div className="absolute inset-y-0 left-[73%] right-0 bg-slate-400" />
                  <div className="absolute inset-y-0 left-[32%] w-px bg-white/70" />
                  <div className="absolute inset-y-0 left-[55%] w-px bg-white/70" />
                  <div
                    className="absolute -top-2 h-9 w-1.5 rounded-full bg-slate-950 shadow-lg shadow-slate-900/25 ring-2 ring-white transition-all duration-500"
                    style={{ left: `${forcePosition}%` }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 font-sans tabular-nums text-xs font-semibold text-slate-500">
                  <span className="absolute left-0 -translate-x-0">8</span>
                  <span className="absolute left-[18%] -translate-x-1/2">12</span>
                  <span className="absolute left-[32%] -translate-x-1/2">15</span>
                  <span className="absolute left-[44%] -translate-x-1/2 text-[10px] uppercase tracking-[0.16em] text-slate-700">Target</span>
                  <span className="absolute left-[55%] -translate-x-1/2">20</span>
                  <span className="absolute right-0">30 N</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500">Guidance</p>
                <p className="font-sans tabular-nums text-sm font-semibold text-slate-500">Cycle 2 / 4</p>
              </div>
              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                  <svg viewBox="0 0 100 88" className="h-16 w-20 text-slate-700" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M49 10c-10 13-27 13-34 27-6 12-4 31 9 35 14 4 22-8 18-25-2-9-6-16-13-22" />
                    <path d="M51 10c10 13 27 13 34 27 6 12 4 31-9 35-14 4-22-8-18-25 2-9 6-16 13-22" />
                    <circle cx="73" cy="61" r="9" fill="currentColor" fillOpacity="0.12" />
                    <circle cx="73" cy="61" r="4" fill="currentColor" />
                  </svg>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Target Lobe</p>
                    <p className="mt-2 text-lg font-bold text-slate-900">
                      <span className="mr-2 rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 font-sans tabular-nums text-sm text-slate-700">LLL</span>
                      Left lower
                    </p>
                    <p className="mt-2 text-xs font-semibold text-slate-500">Percussion rhythm: 145 BPM</p>
                    <div className="mt-3 flex items-end gap-1">
                      {rhythmBars.map((height, index) => (
                        <span
                          key={index}
                          className="w-1.5 rounded-full bg-slate-500/60"
                          style={{ height: `${height}px`, opacity: index > 9 ? 0.16 : 1 }}
                        />
                      ))}
                      <span className="ml-3 font-sans tabular-nums text-sm font-bold text-slate-600">Cycle 2/4</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-slate-800">
                <Wind className="h-6 w-6 flex-shrink-0 text-slate-700" />
                <div>
                  <p className="text-base font-bold">Percussion · left lower lobe</p>
                  <p className="text-sm font-medium text-slate-600">Maintain rhythm. Reposition prompt in 00:45.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-blue-50 bg-white/80 px-3 py-2 shadow-sm shadow-blue-900/[0.03]">
              <div className="flex items-center gap-3">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 ring-1 ring-slate-200">
                  <span className="absolute h-7 w-7 rounded-full bg-slate-200/60 animate-ping" />
                  <span className="relative h-3 w-3 rounded-full bg-slate-700 shadow-sm shadow-blue-600/40 animate-live-dot" />
                </div>
                <p className="text-base font-bold uppercase tracking-[0.22em] text-slate-700">
                  Vitals
                  <span className="mx-1 text-slate-300">·</span>
                  <span className="text-slate-700">Live</span>
                </p>
              </div>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-sans tabular-nums text-sm font-bold text-slate-700 shadow-sm shadow-blue-900/5">
                Clinical floor set
              </span>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-[1fr_1.25fr] md:grid-cols-1 xl:grid-cols-[1fr_1.25fr]">
              <div className="relative mx-auto h-44 w-44">
                <svg viewBox="0 0 220 220" className="h-full w-full -rotate-[130deg]">
                  <circle cx="110" cy="110" r="84" fill="none" stroke="hsl(210 20% 94%)" strokeWidth="18" strokeLinecap="round" />
                  <circle
                    cx="110"
                    cy="110"
                    r="84"
                    fill="none"
                    stroke="url(#oxygenGradient)"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeDasharray="390 528"
                    className="transition-all duration-700"
                  />
                  <defs>
                    <linearGradient id="oxygenGradient" x1="20%" y1="0%" x2="100%" y2="100%">
                      <stop stopColor="#2f5f89" />
                      <stop offset="1" stopColor="#6fa8cf" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="flex items-end">
                    <span className="font-sans tabular-nums text-5xl font-bold text-slate-900">{oxygenLevel}</span>
                    <span className="mb-3 ml-1 text-2xl font-bold text-slate-500">%</span>
                  </div>
                  <p className="font-sans tabular-nums text-sm font-bold uppercase tracking-[0.18em] text-slate-700">Stable</p>
                </div>
              </div>

              <div className="grid content-center gap-4">
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-700">
                    <HeartPulse className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Heart Rate</p>
                    <p className="font-sans tabular-nums text-3xl font-bold text-slate-900">
                      {heartRate} <span className="text-base text-slate-500">bpm</span>
                    </p>
                    <p className="text-[11px] font-semibold text-slate-500">Signal quality good</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-700">
                    <Activity className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Oxygen Range</p>
                    <p className="font-sans tabular-nums text-3xl font-bold text-slate-900">
                      92-96 <span className="text-base text-slate-500">%</span>
                    </p>
                    <p className="text-[11px] font-semibold text-slate-500">No oxygen dip detected</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Trend · Last 60 S</p>
                <div className="flex items-center gap-4 font-sans tabular-nums text-xs font-bold text-slate-500">
                  <span className="flex items-center gap-1"><span className="h-1 w-5 rounded-full bg-slate-700" />Oxygen</span>
                  <span className="flex items-center gap-1"><span className="h-1 w-5 rounded-full bg-slate-300" />Baseline</span>
                </div>
              </div>
              <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <svg viewBox="0 0 520 190" className="h-40 w-full">
                  <defs>
                    <linearGradient id="traceFill" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop stopColor="#9bc5dc" stopOpacity="0.35" />
                      <stop offset="1" stopColor="#9bc5dc" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 128 C45 112 70 142 112 124 S178 112 224 112 278 98 318 104 368 86 420 92 474 106 520 82 L520 190 L0 190 Z" fill="url(#traceFill)" />
                  <path className="animate-trace-draw" d="M0 128 C45 112 70 142 112 124 S178 112 224 112 278 98 318 104 368 86 420 92 474 106 520 82" fill="none" stroke="#2f5f89" strokeWidth="8" strokeLinecap="round" pathLength="1" />
                  <path d="M0 88 H520" stroke="#b7d4e6" strokeWidth="2" strokeDasharray="5 8" opacity="0.75" />
                  <path d="M0 166 H520" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 8" opacity="0.8" />
                  <text x="8" y="92" className="fill-slate-500 font-sans tabular-nums text-sm">96</text>
                  <text x="8" y="174" className="fill-slate-400 font-sans tabular-nums text-sm">92</text>
                  <circle cx="512" cy="84" r="9" fill="#2f5f89" stroke="white" strokeWidth="4" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-3 border-t border-slate-200 bg-slate-50/95 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div className="flex items-center gap-4">
            <span className="rounded-full bg-slate-50 px-3 py-2 text-sm font-bold text-slate-700 ring-1 ring-slate-200">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-slate-500" />
              Active · Protocol A
            </span>
            <span className="text-base font-semibold text-slate-500">Session auto-saved · Cycle 2 of 4</span>
          </div>
          <div className="flex gap-3">
            <button className="inline-flex h-11 items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 font-semibold text-slate-700 shadow-sm">
              <Pause className="h-4 w-4" />
              Pause
            </button>
            <button className="inline-flex h-11 items-center gap-3 rounded-xl bg-slate-400 px-5 font-semibold text-white shadow-sm shadow-slate-900/10">
              <Square className="h-4 w-4" />
              End session
            </button>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPhoneMockup;
