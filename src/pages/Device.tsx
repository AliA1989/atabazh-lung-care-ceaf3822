import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Smartphone, Database, Shield, ArrowRight, ChevronRight } from "lucide-react";
import HowItWorksSection from "@/components/HowItWorksSection";
import { ScrollReveal } from "@/components/ScrollReveal";

const Device = () => {
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
            <defs>
              <linearGradient id="wave-gradient-device" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(200, 80%, 50%)" stopOpacity="0" />
                <stop offset="30%" stopColor="hsl(200, 80%, 60%)" stopOpacity="1" />
                <stop offset="70%" stopColor="hsl(210, 85%, 55%)" stopOpacity="1" />
                <stop offset="100%" stopColor="hsl(210, 80%, 50%)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,100 C200,60 400,140 600,100 C800,60 1000,140 1200,100 C1400,60 1600,140 1800,100" stroke="url(#wave-gradient-device)" strokeWidth="3" fill="none" />
          </svg>
        </div>
        
        <div className="container mx-auto relative z-10 px-6 sm:px-8 lg:px-12">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-blue-50/90 border border-blue-100/70 shadow-sm animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-semibold text-blue-600/90 uppercase tracking-wider">Sensor-Guided Technology</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-slate-800 animate-fade-in">
              Smart Lung Physio™
              <span className="block mt-3 bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] bg-clip-text text-transparent">
                Sensor-Guided Airway Clearance
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              A medical device under development designed to support assisted airway clearance in long-term care settings through real-time sensor feedback and structured workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4 animate-fade-in">
              <Button 
                asChild 
                size="lg" 
                className="rounded-full text-base px-9 py-7 h-auto group transition-all duration-300 bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] hover:from-[hsl(200,80%,45%)] hover:to-[hsl(210,85%,40%)] shadow-lg shadow-[hsl(210,80%,45%)]/25 hover:shadow-xl hover:-translate-y-0.5"
              >
                <NavLink to="/contact" className="flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </NavLink>
              </Button>
              <Button 
                asChild 
                variant="outline"
                size="lg" 
                className="rounded-full text-base px-9 py-7 h-auto bg-white/80 backdrop-blur-sm border-slate-200 hover:bg-white hover:border-slate-300 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-slate-700"
              >
                <NavLink to="/how-it-works">Technical Details</NavLink>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[5]" />
      </section>

      {/* How Smart Lung Physio Works Section */}
      <HowItWorksSection />

      {/* Transition line */}
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-sm text-slate-500 italic">
            — Built around this simple workflow —
          </p>
        </div>
      </div>

      {/* System Components - Soft Blue Gradient */}
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-[hsl(200,40%,97%)] via-[hsl(200,50%,95%)] to-[hsl(210,50%,92%)]">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-800">System Components</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              An integrated hardware and software platform designed to support structured airway-clearance protocols.
            </p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Smartphone,
                title: "Companion App",
                description: "Connects via Bluetooth to provide step-by-step workflow guidance and session documentation for care staff."
              },
              {
                icon: Database,
                title: "Data Dashboard",
                description: "Cloud-based interface for viewing session data, generating reports, and supporting care documentation."
              },
              {
                icon: Shield,
                title: "Safety Features",
                description: "Includes configurable force limits, SpO₂ monitoring integration, and session logging. Device is being developed for Health Canada Class II alignment."
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index === 0 ? 0 : index === 1 ? 100 : 150}>
                <Card className="h-full backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-300 group rounded-2xl">
                  <CardContent className="p-8 lg:p-10 space-y-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-7 w-7 text-white" />
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

      {/* Designed for Care Settings - Clean White */}
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-800">Designed for Care Settings</h2>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal>
              <Card className="backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl shadow-slate-900/5 rounded-2xl">
                <CardContent className="p-8 lg:p-10">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-800">Structured Training</h3>
                      <p className="text-base text-slate-600">
                        The system is designed to support caregiver onboarding with guided workflows, visual prompts, and instructional content.
                      </p>
                    </div>
                    <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100/50">
                      <ul className="space-y-3 text-sm">
                        {["Intuitive touchscreen interface", "Video tutorials in the app", "Automated session quality checks", "Technical support available"].map((item, i) => (
                          <li key={i} className="flex items-start text-slate-700">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
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
              <Card className="backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl shadow-slate-900/5 rounded-2xl">
                <CardContent className="p-8 lg:p-10">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1 bg-blue-50/50 p-6 rounded-xl border border-blue-100/50">
                      <ul className="space-y-3 text-sm">
                        {["Compact, portable design", "Battery-powered for bedside use", "Disposable patient interfaces", "Standard cleaning protocols"].map((item, i) => (
                          <li key={i} className="flex items-start text-slate-700">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4 order-1 md:order-2">
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-800">Portability and Hygiene</h3>
                      <p className="text-base text-slate-600">
                        Compact form factor designed for bedside use. Single-use patient interfaces support infection control requirements.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section - Soft Blue Gradient */}
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-[hsl(200,40%,97%)] via-[hsl(200,50%,95%)] to-[hsl(210,50%,92%)]">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-800">Get in Touch</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              For clinical inquiries, pilot discussions, or technical questions, please contact our team.
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
                <NavLink to="/how-it-works">Technical Details</NavLink>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Device;
