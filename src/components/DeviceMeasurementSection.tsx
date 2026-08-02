import { Activity, Compass, Hand, HeartPulse } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { publicAsset } from "@/lib/publicAsset";

const primarySignals = [
  {
    icon: Hand,
    number: "01",
    eyebrow: "Caregiver input",
    title: "Caregiver preload",
    description:
      "The steady contact pressure applied while the device is positioned. Prototype sensing is being developed to make this input visible and easier to repeat.",
    status: "Prototype sensing",
    accent: "from-blue-600 to-blue-500",
  },
  {
    icon: Activity,
    number: "02",
    eyebrow: "Device output",
    title: "Percussion output",
    description:
      "The repeating mechanical output produced by the actuator. Bench characterization evaluates it independently from caregiver preload.",
    status: "Bench characterized",
    accent: "from-cyan-600 to-sky-500",
  },
];

const supportingSignals = [
  {
    icon: Compass,
    title: "Orientation guidance",
    description: "Direction and positioning feedback are being explored to support more repeatable setup.",
    status: "In development",
  },
  {
    icon: HeartPulse,
    title: "Session context",
    description: "Planned physiologic context includes optional SpO₂ and heart-rate information during supervised use.",
    status: "Planned",
  },
];

const DeviceMeasurementSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="pointer-events-none absolute left-[-12rem] top-24 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="container relative mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-700">Measurement architecture</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
            Two force signals. Kept distinct.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Smart Lung Physio™ is being developed to distinguish the caregiver&apos;s steady input from the device&apos;s mechanical output—two signals with different roles in a supervised session.
          </p>
        </ScrollReveal>

        <div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <ScrollReveal>
            <figure className="group relative h-full min-h-[30rem] overflow-hidden rounded-[2rem] border border-slate-200 bg-[#dddddd] shadow-[0_30px_80px_-45px_rgba(15,23,42,0.55)] sm:min-h-[36rem]">
              <img
                src={publicAsset("media/smart-lung-physio-product-showcase-poster.webp")}
                alt="Smart Lung Physio product visualization based on the functional prototype"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-white/5" />
              <span className="absolute left-5 top-5 rounded-full border border-white/60 bg-white/85 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-700 shadow-sm backdrop-blur-md sm:left-7 sm:top-7 sm:text-xs">
                Functional prototype visualization
              </span>
              <figcaption className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-slate-950/70 p-5 text-white shadow-xl backdrop-blur-xl sm:inset-x-7 sm:bottom-7 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">Why separation matters</p>
                <p className="mt-2 text-sm leading-6 text-slate-200 sm:text-base">
                  It supports clearer setup feedback without treating caregiver pressure and device percussion as the same measurement.
                </p>
              </figcaption>
            </figure>
          </ScrollReveal>

          <div className="flex flex-col gap-5">
            {primarySignals.map((signal, index) => (
              <ScrollReveal key={signal.title} delay={index === 0 ? 80 : 140}>
                <article className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-7">
                  <div className={`absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b ${signal.accent}`} />
                  <div className="flex items-start justify-between gap-5">
                    <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${signal.accent} text-white shadow-lg shadow-blue-900/15`}>
                      <signal.icon className="h-5 w-5" />
                    </div>
                    <span className="text-4xl font-bold tracking-[-0.05em] text-slate-100">{signal.number}</span>
                  </div>
                  <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700">{signal.eyebrow}</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">{signal.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">{signal.description}</p>
                  <span className="mt-5 inline-flex rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                    {signal.status}
                  </span>
                </article>
              </ScrollReveal>
            ))}

            <div className="grid gap-4 sm:grid-cols-2">
              {supportingSignals.map((signal, index) => (
                <ScrollReveal key={signal.title} delay={180 + index * 40}>
                  <article className="h-full rounded-2xl border border-slate-200/80 bg-slate-50 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                        <signal.icon className="h-5 w-5" />
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">{signal.status}</span>
                    </div>
                    <h3 className="mt-4 font-bold text-slate-900">{signal.title}</h3>
                    <p className="mt-2 text-sm leading-5 text-slate-600">{signal.description}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-5 text-slate-500">
          Product architecture and interface details remain under development and are subject to engineering validation and regulatory review.
        </p>
      </div>
    </section>
  );
};

export default DeviceMeasurementSection;
