import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Activity, Clock, Shield, BarChart3, Users, Heart, ArrowRight, ChevronRight, ClipboardList } from "lucide-react";
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
import { useState } from "react";

const SUPPORT_ORGANIZATIONS = [
  { name: "MaRS Discovery District", src: marsLogo, square: true },
  { name: "Health Innovation Hub", src: h2iLogo, logoClassName: "h-[114px] max-h-none max-w-none sm:h-[144px] md:h-[184px]" },
  { name: "Innovation Boost Zone", src: ibzLogo, logoClassName: "h-[118px] max-h-none max-w-none sm:h-[150px] md:h-[230px]" },
  { name: "Spring", src: springLogo, square: true },
  { name: "TechAlliance", src: techAllianceLogo },
  { name: "Innovation Factory", src: innovationFactoryLogo, logoClassName: "h-[112px] max-h-none max-w-none sm:h-[140px] md:h-[180px]" },
  { name: "ElevateIP", src: elevateIpLogo, logoClassName: "h-[120px] max-h-none max-w-none sm:h-[152px] md:h-[198px]" },
  { name: "Lab2Market Validate", src: lab2MarketValidateLogo },
  { name: "Mitacs", src: mitacsLogo },
];

const Home = () => {
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState(0);

  const workflowInsights = [
    {
      icon: Clock,
      title: "Bedside Setup",
      desc: "Clear placement and a simpler start.",
      src: "/media/workflow-bedside.webp",
      alt: "Early prototype workflow review in a supervised care setting",
      label: "Bedside setup",
      mainCrop: "scale-[1.72] object-[47%_79%] group-hover:scale-[1.76]",
    },
    {
      icon: Users,
      title: "Caregiver Handling",
      desc: "Practical handling during supervised care.",
      src: "/media/workflow-handling.webp",
      alt: "Prototype positioning review during respiratory care workflow",
      label: "Handling",
      mainCrop: "scale-[1.52] object-[82%_58%] group-hover:scale-[1.56]",
    },
    {
      icon: Activity,
      title: "Patient Positioning",
      desc: "Reviewed across common care positions.",
      src: "/media/workflow-positioning.webp",
      alt: "Supine positioning review with early Smart Lung Physio prototype",
      label: "Positioning",
      mainCrop: "scale-[1.62] object-[38%_72%] group-hover:scale-[1.66]",
    },
    {
      icon: ClipboardList,
      title: "Workflow Fit",
      desc: "Designed around repeatable team routines.",
      src: "/media/workflow-fit.webp",
      alt: "Seated workflow review with early prototype setup",
      label: "Workflow fit",
      mainCrop: "scale-[1.55] object-[78%_72%] group-hover:scale-[1.59]",
    },
  ];

  const activeWorkflow = workflowInsights[activeWorkflowIndex];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#f7fbfd]">
        <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-full bg-[radial-gradient(circle_at_78%_38%,rgba(56,189,248,0.24),transparent_34%),radial-gradient(circle_at_92%_72%,rgba(37,99,235,0.12),transparent_28%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[58%] bg-[linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_left,black,transparent)] lg:block" />

        <div className="container mx-auto grid min-h-[44rem] max-w-7xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:px-12 lg:pb-20 lg:pt-32 xl:gap-20">
          <div className="max-w-xl">
            <div
              className="flex items-center gap-3 opacity-0 animate-fade-in"
              style={{ animationDelay: "80ms", animationFillMode: "forwards" }}
            >
              <span className="h-px w-9 bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">Smart Lung Physio™</span>
            </div>

            <h1
              className="mt-6 text-[2.65rem] font-bold leading-[1.02] tracking-[-0.045em] text-slate-950 opacity-0 animate-fade-in sm:text-5xl lg:text-[3.65rem] xl:text-[4rem]"
              style={{ animationDelay: "130ms", animationFillMode: "forwards" }}
            >
              Airway-clearance support, designed around <span className="text-blue-700">care teams.</span>
            </h1>

            <p
              className="mt-6 max-w-lg text-base leading-7 text-slate-600 opacity-0 animate-fade-in sm:text-lg"
              style={{ animationDelay: "180ms", animationFillMode: "forwards" }}
            >
              A sensor-guided device concept for more structured respiratory-care workflows in long-term care.
            </p>

            <div
              className="mt-8 flex flex-col gap-3 opacity-0 animate-fade-in sm:flex-row sm:items-center"
              style={{ animationDelay: "230ms", animationFillMode: "forwards" }}
            >
              <Button asChild size="lg" className="h-auto rounded-full bg-blue-700 px-7 py-4 text-sm font-semibold shadow-xl shadow-blue-800/20 transition hover:-translate-y-0.5 hover:bg-blue-800 sm:text-base">
                <NavLink to="/device" className="flex items-center gap-2">
                  Explore the Device
                  <ArrowRight className="h-4 w-4" />
                </NavLink>
              </Button>
              <Button asChild variant="ghost" size="lg" className="h-auto rounded-full px-6 py-4 text-sm font-semibold text-slate-700 transition hover:bg-white/70 sm:text-base">
                <NavLink to="/contact" className="flex items-center gap-2">
                  Discuss Collaboration
                  <ChevronRight className="h-4 w-4" />
                </NavLink>
              </Button>
            </div>

            <p
              className="mt-7 flex items-center gap-2 text-xs font-medium text-slate-500 opacity-0 animate-fade-in"
              style={{ animationDelay: "280ms", animationFillMode: "forwards" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Medical device under development · Not cleared for sale
            </p>
          </div>

          <div
            className="relative flex w-full items-center justify-center opacity-0 animate-fade-in"
            style={{ animationDelay: "260ms", animationFillMode: "forwards" }}
          >
            <ProductFilm />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/70 to-transparent" />
      </section>

      {/* Support Ecosystem Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[hsl(202,42%,97%)] to-[hsl(200,35%,96%)] pb-10 pt-12 lg:pb-12 lg:pt-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 via-[hsl(204,45%,97%)]/60 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[hsl(200,35%,96%)] to-transparent" />
        <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal className="text-center">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500/80">
              Ecosystem Engagement
            </span>
            <h2 className="mx-auto mt-3 max-w-5xl text-lg font-semibold uppercase tracking-[0.08em] text-slate-600 md:text-2xl md:tracking-[0.14em]">
              Connected to Canada's health innovation community
            </h2>
          </ScrollReveal>
        </div>

        <div className="relative z-10 mt-7 py-2 md:mt-9 md:py-3">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[hsl(204,45%,97%)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[hsl(204,45%,97%)] to-transparent" />

          <div className="support-logo-track flex w-max items-center gap-8 px-8 md:gap-14 md:px-10">
            {[...SUPPORT_ORGANIZATIONS, ...SUPPORT_ORGANIZATIONS].map((org, index) => (
              <div
                key={`${org.name}-${index}`}
                className={`${org.square ? "w-28 md:w-36" : "w-56 md:w-72"} flex h-24 flex-shrink-0 items-center justify-center overflow-hidden px-2 transition duration-300 md:h-28`}
              >
                {org.src ? (
                  <img
                    src={org.src}
                    alt={org.name}
                    className={`${org.logoClassName ?? `${org.square ? "max-h-[88px]" : "max-h-[82px]"} max-w-full`} object-contain opacity-95 drop-shadow-sm transition duration-300 hover:scale-[1.04] hover:opacity-100`}
                  />
                ) : (
                  <span className={`text-center text-lg font-semibold tracking-wide transition-colors duration-300 ${org.brandClassName ?? "text-slate-500"}`}>
                    {org.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        <p className="relative z-10 mx-auto mt-5 max-w-3xl px-6 text-center text-xs leading-relaxed text-slate-500">
          Logos identify programs, ecosystem participation, or development support. They do not indicate clinical endorsement or product validation.
        </p>
      </section>

      {/* The Challenge Section - Unified styling */}
      <section className="px-6 py-16 sm:px-8 lg:px-12 lg:py-32">
        <div className="container mx-auto">
          <ScrollReveal className="mb-10 space-y-3 text-center sm:mb-16 sm:space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-800">The Operational Challenge</h2>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Respiratory care delivery in LTC is shaped by staffing, time, documentation, and resident complexity.
              </p>
            </ScrollReveal>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Users,
                title: "Staffing Constraints",
                description: "Limited staff availability makes time-intensive manual chest physiotherapy difficult to deliver consistently across resident populations."
              },
              {
                icon: Clock,
                title: "Time Requirements",
                  description: "Manual airway-clearance routines can be difficult to repeat consistently when care teams are balancing many resident needs."
              },
              {
                icon: Heart,
                title: "Complex Resident Needs",
                  description: "Residents with frailty and multiple conditions require careful, supervised support aligned with clinical judgment."
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index === 0 ? 0 : index === 1 ? 100 : 150}>
                <Card className="h-full backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-300 group rounded-2xl">
                  <CardContent className="space-y-4 p-6 sm:p-8 lg:p-10 lg:space-y-5">
                    <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <item.icon className="h-7 w-7 text-blue-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section - Soft Blue Gradient */}
      <section className="px-6 py-16 sm:px-8 lg:px-12 lg:py-32 bg-gradient-to-br from-[hsl(200,40%,97%)] via-[hsl(200,50%,95%)] to-[hsl(210,50%,92%)]">
        <div className="container mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 items-center">
            <ScrollReveal className="space-y-5 lg:space-y-8">
              <div className="space-y-4">
                <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider">Guided Airway Clearance Support</span>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-slate-800">
                  A Practical Tool for Supervised Care Settings
                </h2>
              </div>
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                Smart Lung Physio™ is a sensor-guided airway-clearance support system being developed for long-term care and supervised care settings. It is intended to help trained caregivers follow structured routines with clearer setup, feedback, and documentation.
              </p>
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                The system is designed to support caregiver-guided sessions, capture relevant session information, and make airway-clearance workflows easier to repeat across shifts.
              </p>
              <Button asChild size="lg" className="h-auto w-full rounded-full px-8 py-5 text-base bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] hover:from-[hsl(200,80%,45%)] hover:to-[hsl(210,85%,40%)] shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 sm:w-auto sm:py-6">
                <NavLink to="/device" className="flex items-center gap-2">
                  View Device Workflow
                  <ChevronRight className="w-4 h-4" />
                </NavLink>
              </Button>
            </ScrollReveal>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  icon: Activity,
                  title: "Sensor-Guided",
                  desc: "Sensor feedback is being evaluated for guided delivery"
                },
                {
                  icon: Clock,
                  title: "Workflow-Aware",
                  desc: "Built around practical routines in supervised care"
                },
                {
                  icon: Shield,
                  title: "Structured Workflow",
                  desc: "Step-by-step guidance for care staff"
                },
                {
                  icon: BarChart3,
                  title: "Documentation",
                  desc: "Session records designed to support care communication"
                }
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index === 0 ? 0 : index === 1 ? 100 : index === 2 ? 150 : 200}>
                  <Card className="h-full backdrop-blur-xl bg-white/70 border border-white/60 shadow-lg shadow-slate-900/5 hover:shadow-xl transition-all duration-300 rounded-2xl">
                    <CardContent className="space-y-3 p-4 sm:p-6 sm:space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md shadow-blue-500/30">
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-base text-slate-800">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Field-led design */}
      <section className="relative isolate overflow-hidden bg-slate-950 px-6 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.24),transparent_31%),radial-gradient(circle_at_86%_72%,rgba(14,165,233,0.13),transparent_28%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:72px_72px]" />

        <div className="container mx-auto max-w-7xl">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-300">Design in Context</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Shaped by the way care actually happens.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Early supervised reviews inform four practical design priorities.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:gap-8">
            <ScrollReveal>
              <div className="group relative min-h-[25rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900 shadow-2xl shadow-black/30 sm:min-h-[32rem] lg:min-h-[36rem]">
                <img
                  key={activeWorkflow.src}
                  src={activeWorkflow.src}
                  alt={activeWorkflow.alt}
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${activeWorkflow.mainCrop}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/5 to-slate-950/15" />

                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-slate-950/70 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white backdrop-blur sm:left-7 sm:top-7">
                  {(activeWorkflowIndex + 1).toString().padStart(2, "0")} / 04 · Supervised review
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">{activeWorkflow.label}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{activeWorkflow.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-200 sm:text-base">{activeWorkflow.desc}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {workflowInsights.map((item, index) => {
                const isActive = activeWorkflowIndex === index;

                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveWorkflowIndex(index)}
                    onFocus={() => setActiveWorkflowIndex(index)}
                    onMouseEnter={() => setActiveWorkflowIndex(index)}
                    className={`group flex min-h-28 items-center gap-4 rounded-2xl border p-4 text-left transition duration-300 sm:p-5 ${
                      isActive
                        ? "border-white bg-white text-slate-950 shadow-xl shadow-black/20"
                        : "border-white/10 bg-white/[0.04] text-white hover:border-white/25 hover:bg-white/[0.08]"
                    }`}
                    aria-pressed={isActive}
                  >
                    <span className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition ${
                      isActive ? "bg-blue-700 text-white" : "bg-white/10 text-sky-300 group-hover:bg-white/15"
                    }`}>
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className={`block text-[0.65rem] font-bold uppercase tracking-[0.2em] ${isActive ? "text-blue-700" : "text-slate-500"}`}>
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <span className="mt-1 block text-sm font-semibold sm:text-base">{item.title}</span>
                      <span className={`mt-1 block text-xs leading-5 ${isActive ? "text-slate-600" : "text-slate-400"}`}>{item.desc}</span>
                    </span>
                  </button>
                );
              })}
            </ScrollReveal>
          </div>

          <p className="mt-5 text-center text-xs leading-5 text-slate-500">
            Early prototype workflow reviews; not clinical validation.
          </p>
        </div>
      </section>

      {/* LTC Focus Section - Unified styling */}
      <section className="px-6 py-16 sm:px-8 lg:px-12 lg:py-32">
        <div className="container mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 items-center">
            <ScrollReveal className="space-y-5 lg:space-y-8">
              <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider">Purpose-Built</span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-slate-800">Designed for Long-Term Care</h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Long-term care teams face increasing resident complexity, staffing pressure, and limited time for respiratory-care routines. Smart Lung Physio™ is being developed to support more structured airway-clearance workflows through guided setup, safety-focused feedback concepts, and practical documentation.
              </p>
              <Button asChild size="lg" className="h-auto w-full rounded-full px-8 py-5 text-base bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] hover:from-[hsl(200,80%,45%)] hover:to-[hsl(210,85%,40%)] shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 sm:w-auto sm:py-6">
                <NavLink to="/long-term-care" className="flex items-center gap-2">
                  View LTC Implementation Details
                  <ArrowRight className="w-4 h-4" />
                </NavLink>
              </Button>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    icon: Clock,
                    title: "Setup Focus",
                    desc: "Simplified bedside workflow under evaluation"
                  },
                  {
                    icon: Shield,
                    title: "Safety Focused",
                    desc: "Feedback and limits designed for supervised use"
                  },
                  {
                    icon: Users,
                    title: "Caregiver Guided",
                    desc: "Structured workflow guidance"
                  },
                  {
                    icon: BarChart3,
                    title: "Documentation",
                    desc: "Structured session records"
                  }
                ].map((item, index) => (
                  <Card key={index} className="backdrop-blur-xl bg-white/80 border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                    <CardContent className="space-y-3 p-4 text-center sm:p-6 sm:space-y-4">
                      <div className="w-12 h-12 mx-auto rounded-xl bg-blue-100 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-blue-700" />
                      </div>
                      <h4 className="font-semibold text-sm text-slate-800">{item.title}</h4>
                      <p className="text-xs text-slate-600">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section - Soft Blue Gradient */}
      <section className="px-6 py-16 sm:px-8 lg:px-12 lg:py-36 bg-gradient-to-br from-[hsl(200,40%,97%)] via-[hsl(200,50%,95%)] to-[hsl(210,50%,92%)]">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal className="space-y-6 text-center sm:space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
              Discuss Pilot Readiness or Clinical Collaboration
            </h2>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600 max-w-xl mx-auto">
                We welcome conversations with LTC operators, clinical partners, rehabilitation teams, respiratory-care stakeholders, and healthcare innovation reviewers.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center pt-2 sm:pt-4">
                <Button asChild size="lg" className="h-auto rounded-full px-10 py-5 text-base bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] hover:from-[hsl(200,80%,45%)] hover:to-[hsl(210,85%,40%)] shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 sm:py-7">
                  <NavLink to="/contact">Discuss a Pilot</NavLink>
                </Button>
                <Button asChild size="lg" className="h-auto rounded-full border-2 border-white/60 bg-white/80 px-10 py-5 text-base text-slate-700 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-xl sm:py-7">
                  <NavLink to="/about">About Our Team</NavLink>
                </Button>
              </div>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
