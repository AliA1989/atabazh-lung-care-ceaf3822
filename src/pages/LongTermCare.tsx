import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { CheckCircle, Users, Clock, DollarSign, Shield, FileText, Activity, ArrowRight } from "lucide-react";
import ltcCare from "@/assets/ltc-care.jpg";
import { ScrollReveal } from "@/components/ScrollReveal";

const LongTermCare = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-950">
      {/* Hero Section - Master Design System */}
      <section className="relative flex min-h-[42rem] items-center overflow-hidden border-b border-slate-200 bg-[#f8fafc] px-5 pb-20 pt-32 sm:px-8 lg:px-12">
        {/* Soft blue gradient background */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />
        
        {/* Bold circular gradient accent */}
        <div className="absolute right-[-12rem] top-10 z-0 hidden h-[34rem] w-[34rem] rounded-full bg-blue-100/70 blur-3xl lg:block">
          <div className="absolute inset-0" />
        </div>
        
        {/* Abstract wave pattern */}
        <div className="hidden">
          <svg className="absolute top-1/2 left-0 w-[200%] h-[400px] -translate-y-1/2 opacity-[0.06]" viewBox="0 0 1400 200" preserveAspectRatio="none">
            <path d="M0,100 C200,60 400,140 600,100 C800,60 1000,140 1200,100" stroke="hsl(200, 80%, 60%)" strokeWidth="3" fill="none" />
          </svg>
        </div>
        
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl font-bold leading-[1.06] tracking-[-0.05em] text-slate-950 md:text-5xl lg:text-[3.6rem]">
                Designed for Long-Term Care Respiratory Workflow
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Smart Lung Physio™ is being developed for the operational realities of long-term care: increasing resident complexity, staffing pressure, documentation demands, and limited access to specialized respiratory support.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="group h-auto rounded-xl bg-blue-700 px-7 py-4 text-base shadow-[0_14px_30px_-16px_rgba(29,78,216,0.7)] transition hover:-translate-y-0.5 hover:bg-blue-800"
              >
                <NavLink to="/contact" className="flex items-center gap-2">
                  Discuss LTC Fit
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </NavLink>
              </Button>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '150ms' }}>
              <div className="relative overflow-hidden rounded-2xl border-[8px] border-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)] ring-1 ring-slate-200">
                <img
                  src={ltcCare}
                  alt="Long-term care facility"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/50 to-transparent" />
      </section>

      {/* LTC Context Section - Unified styling */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="container mx-auto">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-800">Respiratory Care Constraints in LTC</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The product direction is informed by the realities of supervised care environments where repeatable routines, caregiver usability, and clear documentation matter.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Users, title: "Staffing Constraints", desc: "Limited staff availability makes time-intensive manual chest physiotherapy difficult to deliver consistently." },
              { icon: Activity, title: "Complex Resident Needs", desc: "Residents with multiple comorbidities and frailty require careful, individualized respiratory support." },
              { icon: DollarSign, title: "Resource Pressures", desc: "Operating budgets are limited while respiratory-care needs continue to increase across many resident populations." },
              { icon: FileText, title: "Documentation Needs", desc: "Care teams need clear records that support handoffs, internal review, and accountable care workflows." },
              { icon: Shield, title: "Infection Control", desc: "Respiratory-care workflows must account for cleaning, patient interfaces, staff safety, and practical bedside use." },
              { icon: Clock, title: "Training Challenges", desc: "Staff turnover means continuous training needs. Complex devices create barriers to consistent use." }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index === 0 ? 0 : index === 1 ? 100 : index === 2 ? 150 : index === 3 ? 200 : 200}>
                <Card className="h-full rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:border-blue-200">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Design Considerations - Soft Blue Gradient */}
      <section className="border-y border-slate-200 bg-[#f8fafc] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-800">Designed Around Caregiver Workflow</h2>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal>
              <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <CardContent className="p-8 lg:p-10">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                          <Clock className="h-5 w-5 text-blue-700" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">Workflow Integration</h3>
                      </div>
                      <p className="text-slate-600 mb-6">
                        Designed to fit within existing care routines with minimal disruption and clearer session structure.
                      </p>
                      <ul className="space-y-3 text-slate-600">
                        {[
                          "Guided setup intended for trained caregivers",
                          "Session prompts designed to support repeatable routines",
                          "Designed to fit routine care windows and bedside workflows"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mr-3 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100/50">
                      <h4 className="font-semibold text-slate-800 mb-3">Workflow Aim</h4>
                      <p className="text-sm text-slate-500 mb-4">Development is focused on making airway-clearance support easier to structure, document, and repeat.</p>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Manual routines:</span>
                          <span className="font-semibold text-slate-800">Variable by staff and setting</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Smart Lung Physio™:</span>
                          <span className="font-semibold text-blue-600">Guided, documented workflow</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <CardContent className="p-8 lg:p-10">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1 bg-blue-50/50 p-6 rounded-xl border border-blue-100/50">
                      <h4 className="font-semibold text-slate-800 mb-3">Onboarding Approach</h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li>• Self-paced orientation material</li>
                        <li>• Hands-on demonstration</li>
                        <li>• Quick reference materials at bedside</li>
                        <li>• In-app instructional guides</li>
                        <li>• Technical support planning</li>
                      </ul>
                      <p className="text-sm text-slate-500 mt-4">
                        <strong className="text-slate-800">Goal: practical onboarding for busy care teams</strong>
                      </p>
                    </div>
                    <div className="order-1 md:order-2">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                          <Users className="h-5 w-5 text-blue-700" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">Accessible Design</h3>
                      </div>
                      <p className="text-slate-600 mb-6">
                        Designed for practical use by trained care teams with varying levels of respiratory-care experience.
                      </p>
                      <ul className="space-y-3 text-slate-600">
                        {[
                          "Caregiver-guided workflow direction",
                          "Step-by-step app interface for each session",
                          "Designed to complement clinical oversight and facility protocols"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mr-3 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Implementation Approach - Unified styling */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-800">Implementation Approach</h2>
            <p className="text-lg text-slate-600">
              A practical pathway for discussing fit, workflow, and pilot readiness
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: 1, title: "Workflow Discovery", desc: "Understand your facility context, resident population, workflows, and objectives" },
              { num: 2, title: "Pilot Planning", desc: "Align scope, staff roles, onboarding needs, and documentation expectations" },
              { num: 3, title: "Supervised Use", desc: "Start with a focused workflow review or pilot-readiness activity" },
              { num: 4, title: "Learning Review", desc: "Review workflow fit, caregiver feedback, and next-step requirements" }
            ].map((step, index) => (
              <ScrollReveal key={index} delay={index === 0 ? 0 : index === 1 ? 100 : index === 2 ? 150 : 200}>
                <Card className="h-full rounded-2xl border border-slate-200 bg-white text-center shadow-sm">
                  <CardContent className="p-6 space-y-4">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-xl font-bold text-white">
                      {step.num}
                    </div>
                    <h3 className="font-semibold text-slate-800">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.desc}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Soft Blue Gradient */}
      <section className="bg-[#0b1b2f] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-white md:text-4xl lg:text-[2.75rem]">Explore Fit for Your LTC Workflow</h2>
            <p className="text-lg text-slate-300">
              We welcome conversations with LTC operators, clinical leaders, rehabilitation teams, and care organizations evaluating respiratory-care workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
              <Button 
                asChild 
                size="lg" 
                className="h-auto rounded-xl bg-sky-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300"
              >
                <NavLink to="/contact" className="flex items-center gap-2">
                  Discuss a Pilot
                  <ArrowRight className="w-4 h-4" />
                </NavLink>
              </Button>
              <Button 
                asChild 
                variant="outline"
                size="lg" 
                className="h-auto rounded-xl border-white/20 bg-white/5 px-7 py-4 text-base text-white transition hover:border-white/35 hover:bg-white/10 hover:text-white"
              >
                <NavLink to="/clinical-evidence">View Research & Workflow Learning</NavLink>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default LongTermCare;
