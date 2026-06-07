import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import {
  AlertCircle,
  ArrowRight,
  ClipboardList,
  FileText,
  FlaskConical,
  HeartPulse,
  LayoutList,
  Shield,
  Users,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const learningCards = [
  {
    icon: Users,
    stat: "50+",
    title: "Stakeholder Interviews",
    desc: "Discovery with respiratory therapists, physiotherapists, LTC professionals, caregivers, and healthcare stakeholders.",
  },
  {
    icon: LayoutList,
    stat: "3",
    title: "Prototype Generations",
    desc: "Hardware and software iterations informed by usability, handling, setup, and documentation considerations.",
  },
  {
    icon: HeartPulse,
    stat: "Supervised",
    title: "Prototype Reviews",
    desc: "Early reviews helped identify bedside setup, patient positioning, and caregiver workflow considerations.",
  },
  {
    icon: ClipboardList,
    stat: "Planned",
    title: "Pilot Preparation",
    desc: "Readiness activities focus on site workflow, training, documentation, and evaluation planning.",
  },
];

const ClinicalEvidence = () => {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-24 pt-32 lg:py-32">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[hsl(200,40%,98%)] via-[hsl(200,50%,95%)] to-[hsl(210,60%,90%)]" />
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          <svg className="absolute left-0 top-1/2 h-[400px] w-[200%] -translate-y-1/2 opacity-[0.06]" viewBox="0 0 1400 200" preserveAspectRatio="none">
            <path d="M0,100 C200,60 400,140 600,100 C800,60 1000,140 1200,100" stroke="hsl(200, 80%, 60%)" strokeWidth="3" fill="none" />
          </svg>
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl space-y-6 px-6 text-center sm:px-8 lg:px-12">
          <p className="mx-auto inline-flex items-center rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 shadow-sm">
            Research & Workflow Learning
          </p>
          <h1 className="animate-fade-in text-4xl font-bold tracking-tight text-slate-800 md:text-5xl lg:text-6xl">
            From Prototype Learning to Pilot Readiness
          </h1>
          <p className="mx-auto max-w-2xl animate-fade-in text-lg leading-relaxed text-slate-600 md:text-xl">
            A regulatory-safe view of Smart Lung Physio™ development activities, stakeholder discovery, supervised prototype review, and pilot-readiness planning.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-[5] h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="container mx-auto">
          <ScrollReveal className="mb-16 space-y-4 text-center">
            <h2 className="text-3xl font-bold text-slate-800 md:text-4xl lg:text-[2.75rem]">What We Are Learning</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Current work focuses on workflow fit, caregiver usability, documentation needs, and pilot-readiness planning. Formal clinical validation has not yet been completed.
            </p>
          </ScrollReveal>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {learningCards.map((item, index) => (
              <ScrollReveal key={item.title} delay={index === 0 ? 0 : index === 1 ? 100 : index === 2 ? 150 : 200}>
                <Card className="h-full rounded-2xl border border-white/60 bg-white/80 shadow-xl shadow-slate-900/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/10">
                  <CardContent className="space-y-4 p-8 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] shadow-lg shadow-blue-500/30">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold tracking-tight text-blue-700">{item.stat}</div>
                    <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[hsl(200,40%,97%)] via-[hsl(200,50%,95%)] to-[hsl(210,50%,92%)] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-3xl font-bold text-slate-800 md:text-4xl lg:text-[2.75rem]">Operational Learning Areas</h2>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal>
              <Card className="h-full rounded-2xl border border-white/60 bg-white/80 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
                <CardContent className="p-8">
                  <h3 className="mb-4 text-xl font-semibold text-slate-800 md:text-2xl">Workflow Fit</h3>
                  <p className="mb-6 text-slate-600">
                    Development work is focused on reducing friction in setup, session flow, and documentation while preserving clinical oversight.
                  </p>
                  <div className="rounded-xl border border-blue-100/50 bg-blue-50/50 p-6">
                    <ul className="space-y-3 text-sm text-slate-600">
                      {["Setup clarity for trained caregivers", "Repeatable session prompts", "Practical documentation flow", "Fit with scheduled care routines"].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="h-full rounded-2xl border border-white/60 bg-white/80 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
                <CardContent className="p-8">
                  <h3 className="mb-4 text-xl font-semibold text-slate-800 md:text-2xl">Care-Team Feedback Themes</h3>
                  <p className="mb-6 text-slate-600">
                    Stakeholder conversations continue to shape product decisions around caregiver usability, resident comfort, and operational adoption.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-600">
                    {[
                      "Care teams need clear prompts that do not add cognitive burden",
                      "Documentation must be simple enough for routine use",
                      "Positioning guidance should reflect real bedside conditions",
                      "Training materials need to support staff turnover and onboarding",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-0.5 text-blue-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={150} className="mt-8">
            <Card className="rounded-2xl border border-white/60 bg-white/80 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
              <CardContent className="p-8">
                <h3 className="mb-4 text-xl font-semibold text-slate-800 md:text-2xl">Pilot-Readiness Questions</h3>
                <p className="mb-4 text-slate-600">
                  Current validation planning is organized around practical questions that matter to care settings and future pilot sites.
                </p>
                <ul className="space-y-3 text-sm text-slate-600">
                  {[
                    "Which residents and workflows are appropriate for evaluation?",
                    "How should session delivery and documentation be captured?",
                    "What training and support do care teams need before deployment?",
                    "How can implementation be measured without adding unnecessary workload?",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 text-blue-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-3xl font-bold text-slate-800 md:text-4xl lg:text-[2.75rem]">Safety & Usability Considerations</h2>
          </ScrollReveal>

          <ScrollReveal>
            <Card className="rounded-2xl border border-white/60 bg-white/80 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100">
                    <Shield className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-slate-800">Designed for Supervised Use</h3>
                    <p className="text-slate-600">
                      Smart Lung Physio™ development focuses on caregiver prompts, pressure-limit concepts, oxygen-saturation context, and clear pause or stop workflows. It is not intended to replace clinical judgment or licensed respiratory care.
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl border border-blue-100/50 bg-blue-50/50 p-6">
                    <h4 className="mb-3 font-semibold text-slate-800">Resident Comfort Considerations</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Positioning and session pacing</li>
                      <li>• Caregiver observation and escalation workflow</li>
                      <li>• Compatibility with facility protocols</li>
                      <li>• Clear role for clinical judgment</li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-blue-100/50 bg-blue-50/50 p-6">
                    <h4 className="mb-3 font-semibold text-slate-800">Device Safety Design Direction</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Pressure-limit concepts</li>
                      <li>• SpO₂ context during sessions</li>
                      <li>• Pause and stop prompts</li>
                      <li>• Session documentation support</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[hsl(200,40%,97%)] via-[hsl(200,50%,95%)] to-[hsl(210,50%,92%)] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-3xl font-bold text-slate-800 md:text-4xl lg:text-[2.75rem]">Pilot-Readiness Roadmap</h2>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal>
              <Card className="rounded-2xl border border-white/60 bg-white/80 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
                <CardContent className="p-8">
                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100">
                      <FlaskConical className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-slate-800">Ongoing Activities</h3>
                      <p className="text-slate-600">
                        We are building a structured evidence plan through stakeholder discovery, prototype review, and pilot preparation.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-800">Current Activities</h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        {["Stakeholder discovery and workflow mapping", "Prototype usability and handling review", "Pilot-readiness documentation and evaluation planning"].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-0.5 text-blue-600">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-800">Planned Next Steps</h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        {["Structured pilot protocols", "Site-specific workflow evaluation", "Preparation of findings for appropriate scientific dissemination"].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-0.5 text-blue-600">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="rounded-2xl border border-white/60 bg-white/80 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-slate-800">Related Materials</h3>
                  <div className="space-y-4">
                    {[
                      { title: "Workflow Learning Brief: Airway-Clearance Support in LTC", source: "Internal development brief, Atabazh Medical Inc." },
                      { title: "Pilot-Readiness Summary: Early Product Development Questions", source: "Internal planning summary, Atabazh Medical Inc." },
                    ].map((doc) => (
                      <div key={doc.title} className="flex items-start space-x-4">
                        <FileText className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                        <div>
                          <h4 className="mb-1 text-base font-medium text-slate-800">{doc.title}</h4>
                          <p className="text-sm text-slate-500">{doc.source}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200/50 px-6 py-8 sm:px-8 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-start gap-3 text-sm text-slate-500">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-400" />
            <p>
              <strong className="text-slate-700">Important Note:</strong> This page summarizes product-development learning and readiness activities. It does not present clinical efficacy claims, regulatory clearance, or peer-reviewed outcome results. Smart Lung Physio™ is under development and validation.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="container mx-auto max-w-4xl space-y-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-slate-800 md:text-4xl lg:text-[2.75rem]">Discuss Research or Pilot Collaboration</h2>
            <p className="text-lg text-slate-600">
              We welcome conversations with clinicians, researchers, LTC operators, rehabilitation teams, and innovation partners.
            </p>
            <div className="flex flex-col justify-center gap-5 pt-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-auto rounded-full bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] px-9 py-7 text-base shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:from-[hsl(200,80%,45%)] hover:to-[hsl(210,85%,40%)] hover:shadow-xl"
              >
                <NavLink to="/contact" className="flex items-center gap-2">
                  Connect for Clinical Collaboration
                  <ArrowRight className="h-4 w-4" />
                </NavLink>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-auto rounded-full border-slate-200 bg-white/80 px-9 py-7 text-base text-slate-700 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-lg"
              >
                <NavLink to="/device">View Device Workflow</NavLink>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ClinicalEvidence;
