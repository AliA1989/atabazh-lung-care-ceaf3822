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
import aliAzadeganImage from "@/assets/team/ali-azadegan.png";
import aliHosseiniImage from "@/assets/team/ali-hosseini.png";
import ahmedTablImage from "@/assets/team/ahmed-tabl.jpg";
import jeffKofmanImage from "@/assets/team/jeff-kofman.png";
import kamranAzmaImage from "@/assets/team/kamran-azma.png";
import valentinaCeballosImage from "@/assets/team/valentina-ceballos-jimenez.jpeg";
import asuLogo from "@/assets/support/asu.svg";
import innovationFactoryLogo from "@/assets/support/innovation-factory.svg";
import lab2MarketLogo from "@/assets/support/lab2market-validate.webp";
import marsLogo from "@/assets/support/mars.svg";
import northeasternLogo from "@/assets/support/northeastern.svg";
import tmuLogo from "@/assets/support/tmu.svg";
import { publicAsset } from "@/lib/publicAsset";

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
      "Being developed to support more consistent, localized mechanical chest percussion for adults who have difficulty clearing pulmonary secretions.",
  },
  {
    icon: Activity,
    title: "Sensor Feedback Development",
    description:
      "Prototype sensing and feedback are being developed to support review of session delivery within defined care workflows.",
  },
  {
    icon: ClipboardList,
    title: "Documentation Support",
    description:
      "Intended to support structured session records and clearer communication across care teams.",
  },
];

const founder = {
  name: "Ali Abedinpour",
  role: "Founder & CEO",
  background: "Biomedical Engineer & Medical-Device Entrepreneur",
  image: publicAsset("media/founder-ali-abedinpour.jpg"),
  linkedin: "https://www.linkedin.com/in/aliabedinpour/",
  description:
    "Biomedical engineer and medical-device entrepreneur leading Smart Lung Physio™ product strategy, clinical engagement, commercialization planning, and long-term care market development.",
};

const technicalContributors = [
  {
    name: "Ali Azadegan Mehr",
    role: "Mechanical Design Contributor",
    description: "Supports ergonomic design, mechanical refinement, and prototype development activities.",
    image: aliAzadeganImage,
  },
  {
    name: "Ali Hosseini",
    role: "Electronics & Sensor Integration Contributor",
    description: "Supports electronics architecture, sensor integration, and hardware development activities.",
    image: aliHosseiniImage,
  },
  {
    name: "Ahmed Tabl",
    role: "Embedded Systems & Biomechanics Contributor",
    description: "Supports embedded systems development, data acquisition, and prototype testing activities.",
    image: ahmedTablImage,
  },
  {
    name: "Valentina Ceballos Jimenez",
    role: "Pilot Readiness & Workflow Integration Fellow",
    description: "Supports pilot-ready package development, long-term care workflow integration, and deployment-readiness documentation.",
    image: valentinaCeballosImage,
  },
];

const clinicalStrategicGuidance = [
  {
    name: "Kamran Azma",
    role: "Respiratory Care & Clinical Workflow Advisor",
    description:
      "Provides guidance on respiratory-care workflow, airway-clearance practices, and clinical implementation considerations.",
    image: kamranAzmaImage,
  },
  {
    name: "Jeff Kofman",
    role: "Commercialization Advisor",
    description: "Supports commercialization planning, stakeholder engagement, and market development activities.",
    image: jeffKofmanImage,
  },
];

const ecosystemSupport = [
  { name: "Toronto Metropolitan University", logo: tmuLogo },
  { name: "Northeastern University Toronto", logo: northeasternLogo },
  { name: "Arizona State University", logo: asuLogo },
  { name: "Lab2Market Validate", logo: lab2MarketLogo },
  { name: "Innovation Factory", logo: innovationFactoryLogo },
  { name: "MaRS Discovery District", logo: marsLogo },
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] pt-20 text-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#f8fafc] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />
        <div className="absolute left-10 top-20 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[hsl(200,60%,90%)]/40 blur-3xl" />

        <div className="container relative mx-auto max-w-5xl text-center">
          <ScrollReveal className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              About Atabazh Medical
            </p>
            <h1 className="text-4xl font-bold leading-[1.06] tracking-[-0.05em] text-slate-950 md:text-5xl lg:text-[3.6rem]">
              Building practical respiratory-care technology for long-term care and home-care settings.
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
              Atabazh Medical Inc. is a Canadian medical-device startup developing respiratory-care technology for long-term care and home-care settings.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
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
      <section className="relative overflow-hidden border-y border-slate-200 bg-[#f8fafc] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="absolute inset-0 bg-transparent" />
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
                Smart Lung Physio™ is a sensor-guided airway-clearance support device under development, intended to help trained caregivers deliver more structured, localized mechanical chest percussion for adults who have difficulty clearing pulmonary secretions.
              </p>
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                The system is being developed to support guided session workflows, sensor feedback, documentation, and more measurable airway-clearance delivery.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm">
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
                      "Guided session workflow",
                      "Sensor-feedback development",
                      "Structured session workflow",
                      "Session documentation support",
                      "Structured and reviewable support",
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
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
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
                  <Card className="h-full rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:border-blue-200">
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
      <section className="bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-6 shadow-sm sm:p-8 lg:p-10">
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

      {/* Team, Contributors & Ecosystem Support */}
      <section className="relative overflow-hidden border-y border-slate-200 bg-[#f8fafc] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="absolute inset-0 bg-transparent" />
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="container relative mx-auto max-w-6xl">
          <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Team
            </p>
            <h2 className="text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
              Team, Contributors & Ecosystem Support
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
              Smart Lung Physio™ is being developed through founder-led product development, technical contributors, clinical workflow input, and project-based support from academic and innovation ecosystems.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <ScrollReveal>
              <Card className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <CardContent className="p-0">
                  <div className="bg-[#0b1b2f] p-7 text-white sm:p-8">
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                      Founder Profile
                    </p>
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                      <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/20 sm:h-36 sm:w-36">
                        <img src={founder.image} alt={founder.name} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{founder.name}</h3>
                        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-blue-100">{founder.role}</p>
                        <p className="mt-3 text-sm leading-relaxed text-white/85">{founder.background}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-5 p-7 sm:p-8">
                    <p className="text-base leading-relaxed text-slate-600">
                      {founder.description}
                    </p>
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-blue-100"
                    >
                      <Linkedin className="h-4 w-4" />
                      Connect on LinkedIn
                    </a>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="grid h-full gap-5 sm:grid-cols-2">
                {technicalContributors.map((member, index) => (
                  <Card key={member.name} className="rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:border-blue-200">
                    <CardContent className="flex h-full flex-col gap-4 p-5">
                      <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-sm font-bold text-primary ring-1 ring-blue-100">
                          {"image" in member && member.image ? (
                            <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                          ) : (
                            <span>{member.initials}</span>
                          )}
                        </div>
                        <div>
                          <p className="font-bold leading-tight text-slate-800">{member.name}</p>
                          <p className="mt-1 text-xs font-semibold leading-relaxed text-primary">{member.role}</p>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600">{member.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal className="mx-auto mt-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Clinical / Strategic Guidance
            </p>
            <h3 className="mt-3 text-2xl font-bold text-slate-800 md:text-3xl">
              Careful guidance for workflow, implementation, and commercialization.
            </h3>
          </ScrollReveal>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {clinicalStrategicGuidance.map((advisor, index) => (
              <ScrollReveal key={advisor.name} delay={index * 100}>
                <Card className="h-full rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:border-blue-200">
                  <CardContent className="flex gap-5 p-6 sm:p-7">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200">
                      <img src={advisor.image} alt={advisor.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-lg font-bold leading-tight text-slate-800">{advisor.name}</p>
                      <p className="text-sm font-semibold text-primary">{advisor.role}</p>
                      <p className="text-sm leading-relaxed text-slate-600">{advisor.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-14">
            <Card className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      Research & Development Ecosystem
                    </p>
                    <h3 className="text-2xl font-bold leading-tight text-slate-800 md:text-3xl">
                      Ecosystem support across academic, innovation, and entrepreneurship programs.
                    </h3>
                    <p className="text-base leading-relaxed text-slate-600">
                      Smart Lung Physio™ benefits from ongoing collaboration, mentorship, and project-based support through academic, innovation, and entrepreneurship programs.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {ecosystemSupport.map((item) => (
                      <div
                        key={item.name}
                        className="flex min-h-[5rem] items-center gap-4 rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 shadow-sm"
                      >
                        <div className="flex h-14 w-24 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-50 ring-1 ring-slate-100">
                          {"logo" in item && item.logo ? (
                            <img src={item.logo} alt={`${item.name} logo`} className="max-h-11 max-w-[5.75rem] object-contain" />
                          ) : (
                            <span className="text-sm font-bold text-primary">{item.label}</span>
                          )}
                        </div>
                        <p className="text-sm font-semibold leading-snug text-slate-700">{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0b1b2f] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="absolute inset-0 bg-transparent" />
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

        <div className="container relative mx-auto max-w-4xl text-center">
          <ScrollReveal className="space-y-7">
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.04em] text-white md:text-4xl lg:text-[2.8rem]">
              Interested in discussing airway-clearance workflows in long-term care?
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/90">
              We are currently speaking with LTC leaders, clinicians, physiotherapists, respiratory therapists, and innovation partners as part of our validation work.
            </p>
            <div className="flex flex-col items-center gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="h-auto rounded-xl bg-sky-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300 sm:px-8"
              >
                <NavLink to="/contact" className="flex items-center gap-2">
                  Book a 15-minute discovery conversation
                  <ArrowRight className="h-5 w-5" />
                </NavLink>
              </Button>
              <p className="text-sm font-medium text-white/85">
                Contact: <a href="mailto:support@atabazh-med.com" className="underline underline-offset-4">support@atabazh-med.com</a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
