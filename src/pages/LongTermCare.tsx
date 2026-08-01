import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { CheckCircle, Users, Clock, DollarSign, Shield, FileText, Activity, ArrowRight } from "lucide-react";
import ltcCare from "@/assets/ltc-care.jpg";
import { ScrollReveal } from "@/components/ScrollReveal";

const LongTermCare = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Master Design System */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-24">
        {/* Soft blue gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(200,40%,98%)] via-[hsl(200,50%,95%)] to-[hsl(210,60%,90%)] z-0" />
        
        {/* Bold circular gradient accent */}
        <div className="absolute top-0 right-0 w-[60%] h-full z-0 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-bl from-[hsl(205,75%,75%)] via-[hsl(200,70%,80%)] to-transparent rounded-bl-[40%]" />
        </div>
        
        {/* Abstract wave pattern */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          <svg className="absolute top-1/2 left-0 w-[200%] h-[400px] -translate-y-1/2 opacity-[0.06]" viewBox="0 0 1400 200" preserveAspectRatio="none">
            <path d="M0,100 C200,60 400,140 600,100 C800,60 1000,140 1200,100" stroke="hsl(200, 80%, 60%)" strokeWidth="3" fill="none" />
          </svg>
        </div>
        
        <div className="container mx-auto relative z-10 px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-slate-800">
                Designed for Long-Term Care Respiratory Workflow
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Smart Lung Physio™ is being developed for the operational realities of long-term care: increasing resident complexity, staffing pressure, documentation demands, and limited access to specialized respiratory support.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="rounded-full text-base px-9 py-7 h-auto group transition-all duration-300 bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] hover:from-[hsl(200,80%,45%)] hover:to-[hsl(210,85%,40%)] shadow-lg shadow-[hsl(210,80%,45%)]/25 hover:shadow-xl hover:-translate-y-0.5"
              >
                <NavLink to="/contact" className="flex items-center gap-2">
                  Discuss LTC Fit
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </NavLink>
              </Button>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '150ms' }}>
              <div 
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{ 
                  maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)'
                }}
              >
                <img
                  src={ltcCare}
                  alt="Long-term care facility"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[5]" />
      </section>

      {/* LTC Context Section - Unified styling */}
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12">
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
                <Card className="h-full backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-300 rounded-2xl">
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
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-[hsl(200,40%,97%)] via-[hsl(200,50%,95%)] to-[hsl(210,50%,92%)]">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-800">Designed Around Caregiver Workflow</h2>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal>
              <Card className="backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl shadow-slate-900/5 rounded-2xl">
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
              <Card className="backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl shadow-slate-900/5 rounded-2xl">
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
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12">
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
                <Card className="text-center backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl shadow-slate-900/5 rounded-2xl h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-blue-500/30">
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
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-[hsl(200,40%,97%)] via-[hsl(200,50%,95%)] to-[hsl(210,50%,92%)]">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-800">Explore Fit for Your LTC Workflow</h2>
            <p className="text-lg text-slate-600">
              We welcome conversations with LTC operators, clinical leaders, rehabilitation teams, and care organizations evaluating respiratory-care workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
              <Button 
                asChild 
                size="lg" 
                className="rounded-full text-base px-9 py-7 h-auto bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] hover:from-[hsl(200,80%,45%)] hover:to-[hsl(210,85%,40%)] shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
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
                className="rounded-full text-base px-9 py-7 h-auto bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-slate-700"
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
