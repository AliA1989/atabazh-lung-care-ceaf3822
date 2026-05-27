import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Activity,
  ArrowRight,
  ClipboardList,
  HeartPulse,
  Linkedin,
  Settings,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

const focusAreas = [
  {
    icon: Users,
    title: "Caregiver Workflow",
    description:
      "Designed around the realities of trained care teams who need clear session structure, practical setup, and repeatable routines across shifts.",
  },
  {
    icon: ShieldCheck,
    title: "Consistency",
    description:
      "Developed to support more consistent, localized mechanical chest percussion for adults who have difficulty clearing pulmonary secretions.",
  },
  {
    icon: Activity,
    title: "Real-Time Sensing",
    description:
      "Built with real-time sensing and feedback intended to help caregivers monitor session delivery and adjust within defined care workflows.",
  },
  {
    icon: ClipboardList,
    title: "Documentation Support",
    description:
      "Intended to reduce documentation burden by supporting structured session records and clearer communication across care teams.",
  },
];

const founder = {
  name: "Ali Abedinpour",
  role: "Founder & CEO",
  background: "Biomedical Engineer & Medical-Device Entrepreneur",
  image: "/lovable-uploads/079da378-496f-4ba6-82b7-ff2adf75d7f8.jpg",
  linkedin: "https://www.linkedin.com/in/aliabedinpour/",
};

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,60%,98%)] via-[hsl(200,50%,96%)] to-[hsl(220,40%,94%)]" />
        <div className="absolute left-10 top-20 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[hsl(200,60%,90%)]/40 blur-3xl" />

        <div className="container relative mx-auto max-w-5xl text-center">
          <ScrollReveal className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              About Atabazh Medical
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-800 md:text-5xl lg:text-6xl">
              Building practical respiratory-care technology for long-term care and home-care settings.
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
              Atabazh Medical Inc. is a Canadian medical-device startup developing respiratory-care technology for long-term care and home-care settings.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <ScrollReveal className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Why We Exist
              </p>
              <h2 className="text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
                Respiratory care is a clinical need, but in long-term care and home care, the gap is often operational.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100} className="space-y-5 text-slate-600">
              <p className="text-base leading-relaxed md:text-lg">
                Care teams support adults who have difficulty clearing pulmonary secretions while managing staffing pressure, inconsistent workflows, documentation burden, and limited access to specialized respiratory support.
              </p>
              <p className="text-base leading-relaxed md:text-lg">
                The challenge is not only whether airway-clearance support is useful. It is whether care teams can deliver repeatable routines across shifts, document what happened, and coordinate care without adding unnecessary workload.
              </p>
              <div className="grid gap-3 pt-2 sm:grid-cols-2">
                {[
                  "Staffing pressure",
                  "Inconsistent workflows",
                  "Documentation burden",
                  "Limited specialized support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white/70 px-4 py-3 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We Are Building */}
      <section className="relative overflow-hidden px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,60%,97%)] via-[hsl(200,50%,95%)] to-[hsl(220,40%,96%)]" />
        <div className="absolute right-16 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="container relative mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <ScrollReveal className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                What We Are Building
              </p>
              <h2 className="text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
                Smart Lung Physio™
              </h2>
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                Smart Lung Physio™ is a sensor-guided airway-clearance support device designed to help trained caregivers deliver more consistent, localized mechanical chest percussion for adults who have difficulty clearing pulmonary secretions.
              </p>
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                The system is being developed to support guided therapy delivery, real-time sensing, session structure, documentation support, and more measurable airway-clearance workflows.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="border-white/70 bg-white/75 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
                <CardContent className="space-y-5 p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                      <HeartPulse className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">Development Focus</h3>
                      <p className="text-sm text-slate-500">Practical support for real care workflows</p>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    {[
                      "Guided therapy delivery",
                      "Real-time sensing and feedback",
                      "Structured session workflow",
                      "Session documentation support",
                      "Consistent and measurable support",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-xl bg-slate-50/80 px-4 py-3">
                        <Stethoscope className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-sm font-medium text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Focus */}
      <section className="px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Our Focus
            </p>
            <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
              Designed around the care team, not only the device.
            </h2>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <ScrollReveal key={area.title} delay={index * 75}>
                  <Card className="h-full border-white/70 bg-white/75 shadow-lg shadow-slate-900/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <CardContent className="space-y-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                        <Icon className="h-6 w-6 text-blue-700" />
                      </div>
                      <h3 className="font-bold text-slate-800">{area.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600">{area.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Status */}
      <section className="px-6 py-12 sm:px-8 lg:px-12 lg:py-20">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="rounded-3xl border border-primary/15 bg-gradient-to-br from-blue-50 via-white to-blue-50/70 p-6 shadow-lg shadow-slate-900/5 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
                  <Settings className="h-6 w-6" />
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    Development Status
                  </p>
                  <h2 className="text-2xl font-bold text-slate-800 md:text-3xl">
                    Under development and validation
                  </h2>
                  <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                    Smart Lung Physio™ is currently under development and validation. It is not intended to replace clinical judgment or licensed respiratory care.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Leadership */}
      <section className="relative overflow-hidden px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,60%,97%)] via-[hsl(200,50%,95%)] to-[hsl(220,40%,96%)]" />
        <div className="container relative mx-auto max-w-6xl">
          <ScrollReveal className="mb-10 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Leadership
            </p>
            <h2 className="text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
              Practical leadership for medical-device development.
            </h2>
          </ScrollReveal>

          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <ScrollReveal>
              <Card className="mx-auto max-w-sm border-white/80 bg-white/70 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
                <CardContent className="p-6 text-center sm:p-8">
                  <div className="mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full bg-slate-100 ring-4 ring-white shadow-lg">
                    <img src={founder.image} alt={founder.name} className="h-full w-full object-cover" />
                  </div>
                  <h3 className="text-2xl font-bold text-[hsl(215,50%,25%)]">{founder.name}</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-primary">{founder.role}</p>
                  <p className="mt-3 text-sm text-slate-500">{founder.background}</p>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100} className="space-y-5">
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                Ali leads product strategy, customer discovery, partnership development, and regulatory-readiness planning for Smart Lung Physio™.
              </p>
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                Founded by Ali Abedinpour, Atabazh Medical is focused on building healthcare technology that is practical, evidence-informed, and designed around real care workflows.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Current Contributors */}
      <section className="px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <Card className="border-white/70 bg-white/75 shadow-lg shadow-slate-900/5 backdrop-blur-sm">
              <CardContent className="space-y-4 p-6 sm:p-8 lg:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Current Contributors
                </p>
                <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                  Atabazh Medical works with student contributors and project-based collaborators who support research, documentation, engineering, regulatory-readiness, and pilot-preparation activities for Smart Lung Physio™.
                </p>
                <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                  Individual contributors are listed publicly only when their role and permission have been confirmed.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Academic & Innovation Collaboration */}
      <section className="relative overflow-hidden px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,60%,98%)] via-[hsl(200,50%,96%)] to-[hsl(220,40%,94%)]" />
        <div className="container relative mx-auto max-w-5xl">
          <ScrollReveal>
            <Card className="border-white/70 bg-white/75 shadow-lg shadow-slate-900/5 backdrop-blur-sm">
              <CardContent className="space-y-4 p-6 sm:p-8 lg:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Academic & Innovation Collaboration
                </p>
                <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                  Atabazh Medical is actively engaged in academic and innovation-based collaboration to support customer discovery, regulatory-readiness planning, clinical workflow research, and early validation preparation for Smart Lung Physio™.
                </p>
                <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                  Current collaboration activities include student project work, capstone-based research, market validation, regulatory-readiness analysis, and stakeholder discovery with healthcare and aging-care professionals.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

        <div className="container relative mx-auto max-w-4xl text-center">
          <ScrollReveal className="space-y-7">
            <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
              Interested in discussing airway-clearance workflows in long-term care?
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/90">
              We are currently speaking with LTC leaders, clinicians, physiotherapists, respiratory therapists, and innovation partners as part of our validation work.
            </p>
            <div className="flex flex-col items-center gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="h-auto rounded-full bg-white px-8 py-5 text-base font-semibold text-primary shadow-lg hover:bg-white/90 sm:px-10"
              >
                <NavLink to="/contact" className="flex items-center gap-2">
                  Book a 15-minute discovery conversation
                  <ArrowRight className="h-5 w-5" />
                </NavLink>
              </Button>
              <p className="text-sm font-medium text-white/85">
                Contact: <a href="mailto:ali@atabazh-med.com" className="underline underline-offset-4">ali@atabazh-med.com</a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
