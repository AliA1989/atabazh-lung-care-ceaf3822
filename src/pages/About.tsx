import { BOOKING_URL } from "@/lib/contact";
import { eyeopenerFeature } from "@/data/mediaCoverage";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight, Linkedin } from "lucide-react";
import aliAzadeganImage from "@/assets/team/ali-azadegan.png";
import aliHosseiniImage from "@/assets/team/ali-hosseini.png";
import ahmedTablImage from "@/assets/team/ahmed-tabl.jpg";
import jeffKofmanImage from "@/assets/team/jeff-kofman.png";
import kamranAzmaImage from "@/assets/team/kamran-azma.png";
import gabrielSauveImage from "@/assets/team/gabriel-sauve.webp";
import valentinaCeballosImage from "@/assets/team/valentina-ceballos-jimenez.jpeg";
import asuLogo from "@/assets/support/asu.svg";
import innovationFactoryLogo from "@/assets/support/innovation-factory.svg";
import lab2MarketLogo from "@/assets/support/lab2market-validate.webp";
import marsLogo from "@/assets/support/mars.svg";
import northeasternLogo from "@/assets/support/northeastern.svg";
import h2iLogo from "@/assets/support/h2i.svg";
import springLogo from "@/assets/support/spring.svg";
import techAllianceLogo from "@/assets/support/techalliance.svg";
import elevateIpLogo from "@/assets/support/elevate-ip.svg";
import tmuLogo from "@/assets/support/tmu.svg";
import { publicAsset } from "@/lib/publicAsset";

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
    description:
      "Supports ergonomic design, mechanical refinement, and prototype development activities.",
    image: aliAzadeganImage,
  },
  {
    name: "Ali Hosseini",
    role: "Electronics & Sensor Integration Contributor",
    description:
      "Supports electronics architecture, sensor integration, and hardware development activities.",
    image: aliHosseiniImage,
  },
  {
    name: "Ahmed Tabl",
    role: "Embedded Systems & Biomechanics Contributor",
    description:
      "Supports embedded systems development, data acquisition, and prototype testing activities.",
    image: ahmedTablImage,
  },
  {
    name: "Valentina Ceballos Jimenez",
    role: "Pilot Readiness & Workflow Integration Fellow",
    description:
      "Supports pilot-ready package development, long-term care workflow integration, and deployment-readiness documentation.",
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
    description:
      "Supports commercialization planning, stakeholder engagement, and market development activities.",
    image: jeffKofmanImage,
  },
];

const ecosystemSupport = [
  { name: "Health Innovation Hub", logo: h2iLogo },
  { name: "Spring", logo: springLogo },
  { name: "TechAlliance", logo: techAllianceLogo },
  { name: "ElevateIP", logo: elevateIpLogo },
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
              A medical-device company focused on measurable respiratory care.
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
              Based in Toronto, Atabazh Medical Inc. brings together
              engineering, clinical workflow input, and commercialization
              expertise to develop Smart Lung Physio™.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="company-section bg-white">
        <div className="company-container grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="company-eyebrow">Our focus</p>
            <h2 className="company-heading mt-4">
              Make airway-clearance delivery more measurable.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Atabazh is developing Smart Lung Physio™ to connect localized
              mechanical chest percussion with sensing, caregiver guidance, and
              structured session records. Our initial focus is long-term care
              and supervised care settings.
            </p>
            <NavLink to="/device" className="company-text-link mt-5">
              Explore Smart Lung Physio™{" "}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </NavLink>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-7">
            <h2 className="text-xl font-semibold">Company at a glance</h2>
            <dl className="mt-5 divide-y divide-slate-200">
              {[
                ["Company", "Atabazh Medical Inc."],
                ["Location", "Toronto, Ontario, Canada"],
                ["Lead program", "Smart Lung Physio™"],
                [
                  "Development stage",
                  "Physical prototype and engineering evaluation",
                ],
                [
                  "Next focus",
                  "Technical evaluation, usability, and pilot readiness",
                ],
              ].map(([term, value]) => (
                <div
                  key={term}
                  className="grid gap-1 py-3 sm:grid-cols-[0.65fr_1fr]"
                >
                  <dt className="text-sm font-semibold text-slate-700">
                    {term}
                  </dt>
                  <dd className="text-sm text-slate-600">{value}</dd>
                </div>
              ))}
            </dl>
            <NavLink
              to="/clinical-evidence"
              className="company-text-link mt-3 text-sm"
            >
              Review development status{" "}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </NavLink>
          </div>
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
              Leadership, technical contributors & advisors
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
              Smart Lung Physio™ is being developed through founder-led product
              development, technical contributors, clinical workflow input, and
              project-based support from academic and innovation ecosystems.
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
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                          {founder.name}
                        </h3>
                        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-blue-100">
                          {founder.role}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-white/85">
                          {founder.background}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-5 p-7 sm:p-8">
                    <p className="text-base leading-relaxed text-slate-600">
                      {founder.description}
                    </p>
                    <div className="border-l-2 border-blue-600 pl-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Featured in The Eyeopener
                      </p>
                      <a
                        href={eyeopenerFeature.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:decoration-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
                      >
                        Read the story behind Smart Lung Physio™
                        <ArrowRight
                          className="h-4 w-4 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </div>
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
                  <Card
                    key={member.name}
                    className="rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:border-blue-200"
                  >
                    <CardContent className="flex h-full flex-col gap-4 p-5">
                      <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-sm font-bold text-primary ring-1 ring-blue-100">
                          {"image" in member && member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <span>{member.initials}</span>
                          )}
                        </div>
                        <div>
                          <p className="font-bold leading-tight text-slate-800">
                            {member.name}
                          </p>
                          <p className="mt-1 text-xs font-semibold leading-relaxed text-primary">
                            {member.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {member.description}
                      </p>
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
              Clinical and commercialization guidance.
            </h3>
          </ScrollReveal>

          <ScrollReveal className="mt-8">
            <Card className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
              <CardContent className="flex flex-col gap-6 p-6 sm:flex-row sm:gap-8 sm:p-8">
                <div className="h-44 w-44 flex-shrink-0 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200 sm:h-48 sm:w-48">
                  <img
                    src={gabrielSauveImage}
                    alt="Gabriel Sauvé"
                    loading="lazy"
                    decoding="async"
                    width={192}
                    height={192}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0 max-w-3xl space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Clinical Advisor
                  </p>
                  <h4 className="text-2xl font-bold tracking-tight text-slate-800">
                    Gabriel Sauvé
                  </h4>
                  <p className="text-sm font-semibold text-primary sm:text-base">
                    Physiotherapy &amp; Critical Care
                  </p>
                  <p className="text-sm leading-7 text-slate-600 sm:text-base">
                    Gabriel is an acute care physiotherapist with 15 years of
                    hospital experience, specializing in chest physiotherapy and
                    functional rehabilitation in a large teaching hospital
                    intensive care unit. He is passionate about clinical
                    education and mentorship, typically supervising 1–3
                    physiotherapy students each year during clinical placements.
                    He also has a strong interest in advancing research that
                    enhances patient care and physiotherapy education.
                  </p>
                  <p className="text-xs leading-relaxed text-slate-500">
                    Professional background is provided for context and does not imply hospital endorsement.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {clinicalStrategicGuidance.map((advisor, index) => (
              <ScrollReveal key={advisor.name} delay={index * 100}>
                <Card className="h-full rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:border-blue-200">
                  <CardContent className="flex gap-5 p-6 sm:p-7">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200">
                      <img
                        src={advisor.image}
                        alt={advisor.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-lg font-bold leading-tight text-slate-800">
                        {advisor.name}
                      </p>
                      <p className="text-sm font-semibold text-primary">
                        {advisor.role}
                      </p>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {advisor.description}
                      </p>
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
                      Ecosystem support across academic, innovation, and
                      entrepreneurship programs.
                    </h3>
                    <p className="text-base leading-relaxed text-slate-600">
                      Development activities include mentorship, academic
                      projects, and entrepreneurship programs. These connections
                      do not imply institutional endorsement or completed
                      clinical validation.
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
                            <img
                              src={item.logo}
                              alt={`${item.name} logo`}
                              className="max-h-11 max-w-[5.75rem] object-contain"
                            />
                          ) : (
                            <span className="text-sm font-bold text-primary">
                              {item.label}
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-semibold leading-snug text-slate-700">
                          {item.name}
                        </p>
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
              Build the next stage with Atabazh.
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/90">
              We welcome conversations about technology evaluation,
              supervised-care workflows, research collaboration, and
              commercialization.
            </p>
            <div className="flex flex-col items-center gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="h-auto rounded-xl bg-sky-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300 sm:px-8"
              >
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Book a discovery call
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <p className="text-sm font-medium text-white/85">
                Contact:{" "}
                <a
                  href="mailto:support@atabazh-med.com"
                  className="underline underline-offset-4"
                >
                  support@atabazh-med.com
                </a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
