import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Activity, ArrowRight, ClipboardList, Clock, FileText, Users } from "lucide-react";
import ltcCare from "@/assets/ltc-care.jpg";
import { ScrollReveal } from "@/components/ScrollReveal";

const careGaps = [
  {
    icon: Users,
    title: "Staffing",
    description: "Respiratory-support routines must fit the time and training realities of supervised care teams.",
  },
  {
    icon: Activity,
    title: "Delivery Consistency",
    description: "Manual delivery can vary across caregivers, resident positioning, and shifts.",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Care leaders need a clearer record of what was delivered without adding unnecessary burden.",
  },
];

const pilotEvaluationAreas = [
  {
    icon: Clock,
    title: "Workflow Fit",
    description: "Can trained staff integrate the system into existing supervised care routines?",
  },
  {
    icon: Users,
    title: "Usability",
    description: "Can staff learn, handle, and repeat the intended workflow consistently?",
  },
  {
    icon: ClipboardList,
    title: "Documentation",
    description: "Can session information be captured without adding unnecessary workload?",
  },
  {
    icon: Activity,
    title: "Technical Performance",
    description: "Does the prototype operate consistently under defined evaluation conditions?",
  },
];

const pilotSteps = [
  {
    number: "01",
    title: "Site & Workflow Review",
    description: "Clarify the care setting, staff roles, resident context, and evaluation questions.",
  },
  {
    number: "02",
    title: "Staff Demonstration",
    description: "Review the functional prototype on a mannequin or test surface with a clinical champion.",
  },
  {
    number: "03",
    title: "Pilot-Readiness Planning",
    description: "Define training, technical, documentation, ethics, and site-approval requirements before any resident use.",
  },
];

const LongTermCare = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-950">
      <section className="relative flex min-h-[42rem] items-center overflow-hidden border-b border-slate-200 bg-[#f8fafc] px-5 pb-20 pt-32 sm:px-8 lg:px-12">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />
        <div className="absolute right-[-12rem] top-10 z-0 hidden h-[34rem] w-[34rem] rounded-full bg-blue-100/70 blur-3xl lg:block" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
            <div className="animate-fade-in space-y-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Long-term care</p>
              <h1 className="text-4xl font-bold leading-[1.06] tracking-[-0.05em] text-slate-950 md:text-5xl lg:text-[3.6rem]">
                A More Measurable Approach to Airway-Clearance Support
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
                Smart Lung Physio™ is being developed to help trained caregivers deliver localized mechanical chest percussion with sensing, guidance, and structured documentation.
              </p>
              <Button asChild size="lg" className="group h-auto rounded-xl bg-blue-700 px-7 py-4 text-base transition hover:-translate-y-0.5 hover:bg-blue-800">
                <NavLink to="/contact" className="flex items-center gap-2">
                  Discuss LTC Pilot Fit
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </NavLink>
              </Button>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "150ms" }}>
              <div className="relative overflow-hidden rounded-2xl border-[8px] border-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)] ring-1 ring-slate-200">
                <img src={ltcCare} alt="Supervised long-term care environment" className="h-auto w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Why it matters</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[2.75rem]">
                LTC leaders already know the constraints.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              The product is being designed around three gaps that directly affect implementation: staff capacity, delivery consistency, and documentation.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {careGaps.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 70}>
                <Card className="h-full rounded-2xl border border-slate-200 bg-[#f8fafc] shadow-sm">
                  <CardContent className="p-7">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-white">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-bold tracking-[0.16em] text-slate-400">0{index + 1}</span>
                    </div>
                    <h3 className="mt-7 text-xl font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f8fafc] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Pilot questions</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[2.75rem]">
              What a Pilot Could Evaluate
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              A useful early pilot should answer practical questions—not imply clinical efficacy before the evidence exists.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-2">
            {pilotEvaluationAreas.map((area, index) => (
              <ScrollReveal key={area.title} delay={index * 60} className="h-full bg-white">
                <article className="grid h-full gap-4 p-7 sm:grid-cols-[3rem_1fr] sm:p-8">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <area.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">{area.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{area.description}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <p className="mt-6 text-center text-xs leading-5 text-slate-500">
            Any resident-facing evaluation would require an appropriate protocol, site approvals, clinical oversight, and ethics review where applicable.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Pilot-readiness pathway</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl">Start with fit—not commitment.</h2>
              <p className="mt-5 text-base leading-7 text-slate-600">No resident use or clinical commitment is required at the first discussion stage.</p>
            </div>

            <div className="border-t border-slate-300">
              {pilotSteps.map((step) => (
                <article key={step.number} className="grid gap-3 border-b border-slate-300 py-6 sm:grid-cols-[4rem_0.7fr_1fr] sm:items-start sm:gap-6">
                  <span className="text-xs font-bold tracking-[0.16em] text-blue-700">{step.number}</span>
                  <h3 className="font-semibold text-slate-950">{step.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{step.description}</p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#0b1b2f] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
        <ScrollReveal className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">Next step</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-[2.75rem]">
              Evaluate Fit for Your LTC Setting
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Discuss workflow fit, staff demonstration, technical review, or pilot-readiness planning with Atabazh Medical.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-auto rounded-xl bg-sky-400 px-7 py-4 text-base font-semibold text-slate-950 hover:bg-sky-300">
              <NavLink to="/contact" className="flex items-center gap-2">
                Discuss a Pilot
                <ArrowRight className="h-4 w-4" />
              </NavLink>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-auto rounded-xl border-white/20 bg-white/5 px-7 py-4 text-base text-white hover:border-white/35 hover:bg-white/10 hover:text-white">
              <NavLink to="/clinical-evidence">View Evidence & Development</NavLink>
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default LongTermCare;
