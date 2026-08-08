import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import DeviceProductShowcase from "@/components/DeviceProductShowcase";
import DeviceMeasurementSection from "@/components/DeviceMeasurementSection";
import LivePlatformSection from "@/components/LivePlatformSection";
import { publicAsset } from "@/lib/publicAsset";

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
          <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <div className="space-y-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-white/80 px-4 py-2.5 shadow-sm animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Physical airway-clearance device</span>
            </div>
            
            <h1 className="text-4xl font-bold leading-[1.06] tracking-[-0.05em] text-slate-950 animate-fade-in md:text-5xl lg:text-[3.6rem]">
              Smart Lung Physio™
              <span className="mt-3 block text-blue-700">
                Localized Therapy. Guided by Sensing.
              </span>
            </h1>
            
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 animate-fade-in md:text-xl">
              A handheld medical device under development that combines localized mechanical chest percussion with sensing, caregiver guidance, and structured session documentation.
            </p>
            
            <div className="flex flex-col gap-5 pt-4 animate-fade-in sm:flex-row">
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

            <div className="animate-fade-in" style={{ animationDelay: "150ms" }}>
              <div className="relative mx-auto w-full max-w-[30rem]">
                <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-blue-100/80 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border-[8px] border-white bg-white shadow-[0_34px_90px_-42px_rgba(15,23,42,0.5)] ring-1 ring-slate-200">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-white">
                    <img
                      src={publicAsset("media/smart-lung-physio-device-hero.webp")}
                      alt="Illustrative Smart Lung Physio physical device visualization based on the functional prototype"
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute left-4 top-4 rounded-full border border-slate-200/80 bg-white/90 px-3.5 py-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-slate-700 shadow-sm backdrop-blur-md sm:left-5 sm:top-5">
                      Product visualization
                    </div>
                    <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-[#0b1b2f]/95 px-4 py-3.5 text-white backdrop-blur-sm sm:px-5 sm:py-4">
                      <p className="text-xs font-semibold sm:text-sm">Based on our functional prototype</p>
                      <p className="mt-1 text-[0.58rem] leading-relaxed text-slate-300 sm:text-[0.65rem]">
                        Current functional prototype is mains-powered. Displayed interface values are illustrative and are not clinical recommendations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
                            <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
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
                        {["Handheld functional prototype", "Current prototype uses mains power", "Patient-contact interface under development", "Cleaning and material requirements under review"].map((item, i) => (
                          <li key={i} className="flex items-start text-slate-700">
                            <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4 order-1 md:order-2">
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-800">Form Factor and Hygiene Development</h3>
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
