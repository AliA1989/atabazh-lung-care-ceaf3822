import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import DeviceProductShowcase from "@/components/DeviceProductShowcase";
import DeviceMeasurementSection from "@/components/DeviceMeasurementSection";
import LivePlatformSection from "@/components/LivePlatformSection";

const Device = () => {
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
        
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-4xl space-y-7 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-white/80 px-4 py-2.5 shadow-sm animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Respiratory Workflow Technology</span>
            </div>
            
            <h1 className="text-4xl font-bold leading-[1.06] tracking-[-0.05em] text-slate-950 animate-fade-in md:text-5xl lg:text-[3.6rem]">
              Smart Lung Physio™
              <span className="mt-3 block text-blue-700">
                Guided Airway-Clearance Workflow
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              A medical device under development exploring sensor-guided setup, assisted airway-clearance workflows, and structured session documentation for long-term care and supervised care settings.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4 animate-fade-in">
              <Button 
                asChild 
                size="lg" 
                className="group h-auto rounded-xl bg-blue-700 px-7 py-4 text-base shadow-[0_14px_30px_-16px_rgba(29,78,216,0.7)] transition hover:-translate-y-0.5 hover:bg-blue-800"
              >
                <NavLink to="/contact" className="flex items-center gap-2">
                  Request More Information
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/50 to-transparent" />
      </section>

      <DeviceProductShowcase />

      <DeviceMeasurementSection />

      <LivePlatformSection />

      {/* Designed for Care Settings - Unified styling */}
      <section className="border-t border-slate-200 bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-800">Built Around Caregiver Usability</h2>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal>
              <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <CardContent className="p-8 lg:p-10">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-800">Structured Onboarding</h3>
                      <p className="text-base text-slate-600">
                        The system is designed to support caregiver onboarding with guided workflows, visual prompts, and practical reference material.
                      </p>
                    </div>
                    <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100/50">
                      <ul className="space-y-3 text-sm">
                        {["Intuitive companion app interface", "Instructional content in the app", "Session guidance and documentation prompts", "Technical support planning"].map((item, i) => (
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
              <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <CardContent className="p-8 lg:p-10">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1 bg-blue-50/50 p-6 rounded-xl border border-blue-100/50">
                      <ul className="space-y-3 text-sm">
                        {["Portable handheld prototype", "Current prototype uses mains power", "Removable patient-contact interface concept", "Cleaning and material requirements under review"].map((item, i) => (
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
                        The current handheld prototype is mains-powered. Portability, patient-interface materials, and cleaning workflows are being evaluated for supervised care environments.
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
      <section className="bg-[#0b1b2f] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="container mx-auto max-w-4xl space-y-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-white md:text-4xl lg:text-[2.75rem]">Discuss Product Fit for Your Care Setting</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-300">
              For clinical workflow questions, pilot discussions, or technical review, connect with the Atabazh Medical team.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
              <Button 
                asChild 
                size="lg" 
                className="h-auto rounded-xl bg-sky-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300"
              >
                <NavLink to="/contact" className="flex items-center gap-2">
                  Request More Information
                  <ArrowRight className="w-4 h-4" />
                </NavLink>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Device;
