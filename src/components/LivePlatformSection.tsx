import { ArrowRight, Bluetooth, Compass, Gauge } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { ScrollReveal } from "@/components/ScrollReveal";
import { acquisitionChannels, documentedBenchRun } from "@/data/engineering";

const engineeringFocus = [
  { icon: Gauge, title: "Contact measurement", text: "A dedicated load-cell channel separates caregiver contact input from the motor command." },
  { icon: Compass, title: "Orientation feedback", text: "Accelerometer and gyroscope data support roll and pitch feedback in the prototype interface." },
  { icon: Bluetooth, title: "Traceable telemetry", text: "Packet sequence numbers, timestamps, and sensor-status flags support engineering review of the data stream." },
];

const LivePlatformSection = () => (
  <section id="engineering-data" className="bg-[#0b1b2f] py-20 text-white lg:py-24">
    <div className="company-container grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <ScrollReveal>
        <p className="company-eyebrow !text-sky-300">Inside the prototype</p>
        <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">Hardware. Sensing.<br />A traceable data path.</h2>
        <p className="mt-5 text-lg leading-8 text-slate-300">Smart Lung Physio connects mechanical percussion, a sensor hub, and a companion app. These engineering records show how the prototype acquires and communicates information.</p>
        <div className="mt-9 space-y-7">
          {engineeringFocus.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4">
              <Icon className="mt-1 h-5 w-5 shrink-0 text-sky-300" aria-hidden="true" />
              <div><h3 className="font-semibold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{text}</p></div>
            </div>
          ))}
        </div>
        <NavLink to="/clinical-evidence" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 underline-offset-4 hover:underline">Review the engineering record <ArrowRight className="h-4 w-4" aria-hidden="true" /></NavLink>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <div className="overflow-hidden rounded-xl border border-white/20 bg-white text-slate-950">
          <div className="border-b border-slate-200 px-6 py-5 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#164d69]">Engineering snapshot · October 2026</p>
            <h3 className="mt-2 text-xl font-semibold">Prototype acquisition architecture</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">Configured firmware rates</p>
          </div>
          <dl className="divide-y divide-slate-200 px-6 sm:px-8">
            {acquisitionChannels.map((channel) => (
              <div key={channel.name} className="grid grid-cols-[1fr_auto] gap-4 py-6">
                <div><dt className="font-semibold">{channel.name}</dt><dd className="mt-1 text-xs text-[#164d69]">{channel.hardware}</dd><dd className="mt-2 max-w-xs text-sm leading-6 text-slate-500">{channel.description}</dd></div>
                <div className="text-right"><dd className="text-3xl font-semibold tracking-tight text-[#164d69]">{channel.rate}<span className="ml-1 text-sm font-medium">Hz</span></dd><dd className="mt-2 max-w-24 text-xs leading-5 text-slate-500">{channel.interval}</dd></div>
              </div>
            ))}
          </dl>
          <div className="border-t border-slate-200 bg-[#edf4f6] px-6 py-6 sm:px-8">
            <div className="flex items-start gap-5">
              <p className="shrink-0 text-4xl font-semibold tracking-tight text-[#164d69]">{documentedBenchRun.duration}<span className="mt-1 block text-xs font-medium tracking-normal">minutes</span></p>
              <div><p className="text-xs font-bold uppercase tracking-widest text-[#164d69]">Recorded bench activity</p><h4 className="mt-1 font-semibold">{documentedBenchRun.title}</h4><p className="mt-2 text-xs leading-5 text-slate-600">{documentedBenchRun.conditions} · <time dateTime={documentedBenchRun.dateTime}>{documentedBenchRun.date}</time></p></div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-xs leading-6 text-slate-400">Source: internal prototype architecture and engineering logs. Rates describe firmware settings, not measured delivery performance or percussion frequency. The bench run records communication testing, not clinical outcomes.</p>
      </ScrollReveal>
    </div>
  </section>
);

export default LivePlatformSection;
