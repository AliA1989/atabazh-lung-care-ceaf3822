import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Activity, Brain, TrendingUp, ChevronDown, ArrowRight } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

const HowItWorks = () => {
  const [openStep, setOpenStep] = useState<number | null>(null);

  const toggleStep = (step: number) => {
    setOpenStep(openStep === step ? null : step);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Master Design System */}
      <section className="relative py-24 lg:py-32 overflow-hidden pt-32">
        {/* Soft blue gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(200,40%,98%)] via-[hsl(200,50%,95%)] to-[hsl(210,60%,90%)] z-0" />
        
        {/* Abstract wave pattern */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          <svg className="absolute top-1/2 left-0 w-[200%] h-[400px] -translate-y-1/2 opacity-[0.06]" viewBox="0 0 1400 200" preserveAspectRatio="none">
            <path d="M0,100 C200,60 400,140 600,100 C800,60 1000,140 1200,100" stroke="hsl(200, 80%, 60%)" strokeWidth="3" fill="none" />
          </svg>
        </div>
        
        <div className="container mx-auto relative z-10 px-6 sm:px-8 lg:px-12 max-w-4xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 animate-fade-in">
            How It Works
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto animate-fade-in">
            A three-step approach to sensor-guided airway clearance—designed for consistency, safety, and practical use.
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[5]" />
      </section>

      {/* Three-Step Process - Clean White */}
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-8">
            
            {/* Step 1: Assess */}
            <ScrollReveal>
              <Card className="overflow-hidden backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl shadow-slate-900/5 rounded-2xl">
                <CardContent className="p-0">
                  <div className="p-8 lg:p-10">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <span className="text-2xl font-bold text-white">1</span>
                      </div>
                      <div className="flex-1 space-y-3">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Assess</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                          The device captures baseline readings—applied pressure, oxygen saturation, and placement confirmation—before therapy begins.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Collapsible open={openStep === 1} onOpenChange={() => toggleStep(1)}>
                    <CollapsibleTrigger className="w-full px-8 lg:px-10 py-4 border-t border-slate-100 bg-blue-50/30 hover:bg-blue-50/60 transition-colors flex items-center justify-between text-sm font-medium text-slate-600">
                      <span>View technical details</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openStep === 1 ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="px-8 lg:px-10 py-6 bg-blue-50/20 border-t border-slate-100 space-y-4">
                        <p className="text-sm font-medium text-slate-800">Sensor Measurements:</p>
                        <ul className="space-y-3">
                          {[
                            { label: "Applied Chest Pressure (FSR Sensor)", desc: "Measures force applied to the chest wall in real time." },
                            { label: "Oxygen Saturation (SpO₂)", desc: "Monitors blood oxygen levels throughout the session." },
                            { label: "Therapy Zone Detection", desc: "Confirms correct device placement and resident tolerance." }
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Activity className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-600">
                                <strong className="text-slate-800">{item.label}:</strong> {item.desc}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm text-slate-500 pt-2">
                          Assessment takes 20–30 seconds and is designed to help set appropriate therapy levels.
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Step 2: Treat */}
            <ScrollReveal delay={100}>
              <Card className="overflow-hidden backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl shadow-slate-900/5 rounded-2xl">
                <CardContent className="p-0">
                  <div className="p-8 lg:p-10">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <span className="text-2xl font-bold text-white">2</span>
                      </div>
                      <div className="flex-1 space-y-3">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Treat</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                          Caregivers follow a guided protocol with real-time feedback on pressure, timing, and resident safety.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Collapsible open={openStep === 2} onOpenChange={() => toggleStep(2)}>
                    <CollapsibleTrigger className="w-full px-8 lg:px-10 py-4 border-t border-slate-100 bg-blue-50/30 hover:bg-blue-50/60 transition-colors flex items-center justify-between text-sm font-medium text-slate-600">
                      <span>View technical details</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openStep === 2 ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="px-8 lg:px-10 py-6 bg-blue-50/20 border-t border-slate-100 space-y-4">
                        <p className="text-sm font-medium text-slate-800">Therapy Features:</p>
                        <ul className="space-y-3">
                          {[
                            { label: "Pressure Feedback", desc: "FSR sensor supports appropriate chest-wall pressure during therapy." },
                            { label: "Guided Technique", desc: "Visual cues on the mobile app support caregivers in maintaining consistent force and timing." },
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Brain className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-600">
                                <strong className="text-slate-800">{item.label}:</strong> {item.desc}
                              </span>
                            </li>
                          ))}
                          <li className="flex items-start gap-3">
                            <Brain className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div className="text-sm text-slate-600">
                              <strong className="text-slate-800">Safety Monitoring:</strong>
                              <ul className="mt-2 ml-4 space-y-1 text-slate-500">
                                <li>• SpO₂ drop alerts</li>
                                <li>• Pressure limit warnings</li>
                                <li>• Guided pause prompts</li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                        <p className="text-sm text-slate-500 pt-2">
                          Each treatment session typically lasts 4–5 minutes.
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Step 3: Review */}
            <ScrollReveal delay={150}>
              <Card className="overflow-hidden backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl shadow-slate-900/5 rounded-2xl">
                <CardContent className="p-0">
                  <div className="p-8 lg:p-10">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <span className="text-2xl font-bold text-white">3</span>
                      </div>
                      <div className="flex-1 space-y-3">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Review</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                          Session data syncs to a dashboard for care teams to track sessions, review trends, and support documentation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Collapsible open={openStep === 3} onOpenChange={() => toggleStep(3)}>
                    <CollapsibleTrigger className="w-full px-8 lg:px-10 py-4 border-t border-slate-100 bg-blue-50/30 hover:bg-blue-50/60 transition-colors flex items-center justify-between text-sm font-medium text-slate-600">
                      <span>View technical details</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openStep === 3 ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="px-8 lg:px-10 py-6 bg-blue-50/20 border-t border-slate-100 space-y-4">
                        <p className="text-sm font-medium text-slate-800">Dashboard Access:</p>
                        <ul className="space-y-3">
                          {[
                            { label: "Session Details", desc: "Pressure patterns, duration, and protocol compliance." },
                            { label: "SpO₂ Trends", desc: "Before, during, and after therapy readings." },
                            { label: "Resident Progress", desc: "Changes over days and weeks." },
                            { label: "Documentation Support", desc: "Session records for care notes and reporting." }
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <TrendingUp className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-600">
                                <strong className="text-slate-800">{item.label}:</strong> {item.desc}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* CTA Section - Soft Blue Gradient */}
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-[hsl(200,40%,97%)] via-[hsl(200,50%,95%)] to-[hsl(210,50%,92%)]">
        <div className="container mx-auto max-w-3xl text-center space-y-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-800">Learn More</h2>
            <p className="text-lg text-slate-600">
              Questions about how Smart Lung Physio™ may fit your facility's respiratory care approach?
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
              <Button 
                asChild 
                size="lg" 
                className="rounded-full text-base px-9 py-7 h-auto bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] hover:from-[hsl(200,80%,45%)] hover:to-[hsl(210,85%,40%)] shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <NavLink to="/contact" className="flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </NavLink>
              </Button>
              <Button 
                asChild 
                variant="outline"
                size="lg" 
                className="rounded-full text-base px-9 py-7 h-auto bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-slate-700"
              >
                <NavLink to="/clinical-evidence">View Clinical Insights</NavLink>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
