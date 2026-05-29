import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Activity, Clock, TrendingUp, Shield, CheckCircle, BarChart3, Users, Heart, ArrowRight, ChevronRight, Repeat, FileCheck, ClipboardList, Info } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import FounderWelcomeModal from "@/components/FounderWelcomeModal";
import PremiumPhoneMockup from "@/components/PremiumPhoneMockup";
import techAllianceLogo from "@/assets/support/techalliance.svg";
import mitacsLogo from "@/assets/support/mitacs.svg";
import lab2MarketValidateLogo from "@/assets/support/lab2market-validate.webp";
import springLogo from "@/assets/support/spring.svg";
import marsLogo from "@/assets/support/mars.svg";
import h2iLogo from "@/assets/support/h2i.svg";
import ibzLogo from "@/assets/support/ibz.svg";
import heroDeviceImage from "@/assets/hero-device.webp";
import { useEffect, useState } from "react";

const HERO_BULLETS = [
  { icon: Repeat, text: "Consistent therapy guidance across care teams" },
  { icon: ClipboardList, text: "Structured workflow for every session" },
  { icon: FileCheck, text: "Automatic progress documentation" },
];

const SUPPORT_ORGANIZATIONS = [
  { name: "MaRS Discovery District", src: marsLogo, square: true },
  { name: "Health Innovation Hub", src: h2iLogo },
  { name: "Innovation Boost Zone", src: ibzLogo, logoClassName: "h-[170px] max-h-none max-w-none md:h-[230px]" },
  { name: "Spring", src: springLogo, square: true },
  { name: "TechAlliance", src: techAllianceLogo },
  { name: "Lab2Market Validate", src: lab2MarketValidateLogo },
  { name: "Mitacs", src: mitacsLogo },
];

const Home = () => {
  const [isPulseVisible, setIsPulseVisible] = useState(false);

  // Subtle pulse animation for the session card
  useEffect(() => {
    const timer = setTimeout(() => setIsPulseVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen">
      {/* Founder Welcome Modal - Shows once per session */}
      <FounderWelcomeModal />
      {/* Hero Section - clinical product introduction */}
      <section className="relative flex min-h-[74vh] items-center overflow-hidden bg-gradient-to-br from-white via-[hsl(204,45%,97%)] to-[hsl(205,45%,91%)] lg:min-h-[76vh]">
        <div className="absolute inset-y-0 right-0 hidden w-[58%] bg-gradient-to-l from-[hsl(205,58%,82%)] via-[hsl(204,52%,91%)] to-transparent lg:block" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,_hsl(210,35%,88%)_1px,_transparent_1px),linear-gradient(180deg,_hsl(210,35%,88%)_1px,_transparent_1px)] bg-[size:56px_56px] opacity-[0.16] lg:block" />
        
        {/* Refined glowing wave pattern - finer lines with slow pulse animation */}
        <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
          <svg 
            className="absolute top-1/2 left-0 w-[250%] h-[500px] -translate-y-1/2 opacity-[0.055]"
            viewBox="0 0 1800 200"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(200, 85%, 55%)" stopOpacity="0" />
                <stop offset="20%" stopColor="hsl(200, 85%, 65%)" stopOpacity="0.8" />
                <stop offset="50%" stopColor="hsl(205, 90%, 60%)" stopOpacity="1" />
                <stop offset="80%" stopColor="hsl(210, 85%, 55%)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="hsl(210, 80%, 50%)" stopOpacity="0" />
              </linearGradient>
              <filter id="glow-strong" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Primary flowing wave - finer, glowing */}
            <path 
              d="M0,100 C180,50 360,150 540,100 C720,50 900,150 1080,100 C1260,50 1440,150 1620,100 C1800,50 1980,150 2160,100" 
              stroke="url(#wave-gradient-1)" 
              strokeWidth="1.5" 
              fill="none"
              filter="url(#glow-strong)"
              style={{ animation: 'pulse-wave 4s ease-in-out infinite' }}
            />
          </svg>
          {/* Secondary finer wave */}
          <svg 
            className="absolute top-1/2 left-0 w-[250%] h-[400px] -translate-y-1/2 translate-y-6 opacity-[0.045]"
            viewBox="0 0 1800 200"
            preserveAspectRatio="none"
          >
            <path 
              d="M0,100 C120,130 280,70 440,100 C600,130 760,70 920,100 C1080,130 1240,70 1400,100 C1560,130 1720,70 1880,100" 
              stroke="hsl(205, 80%, 60%)" 
              strokeWidth="1" 
              fill="none"
              filter="url(#glow-strong)"
              style={{ animation: 'pulse-wave 5s ease-in-out infinite reverse' }}
            />
          </svg>
          {/* Tertiary subtle wave */}
          <svg 
            className="absolute top-1/2 left-0 w-[200%] h-[600px] -translate-y-1/2 -translate-y-8 opacity-[0.03]"
            viewBox="0 0 1600 200"
            preserveAspectRatio="none"
          >
            <path 
              d="M0,100 C400,40 800,160 1200,100 C1600,40 2000,160 2400,100" 
              stroke="hsl(210, 75%, 65%)" 
              strokeWidth="2" 
              fill="none"
              style={{ animation: 'pulse-wave 7s ease-in-out infinite' }}
            />
          </svg>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/35 to-transparent z-[3] pointer-events-none" />
        
        <div className="container mx-auto relative z-10 max-w-7xl px-5 pb-10 pt-24 sm:px-8 sm:pt-[4.5rem] lg:px-12 lg:pb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-10">
            <div className="space-y-3.5 max-w-2xl sm:space-y-4 lg:max-w-none lg:pr-4 lg:w-[46%] lg:flex-shrink-0 flex flex-col justify-center">
              <div 
                className="inline-flex w-fit max-w-full items-center gap-2.5 rounded-full border border-blue-100 bg-white/80 px-3.5 py-2 shadow-sm opacity-0 animate-fade-in"
                style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
              >
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-xs font-semibold text-blue-700 uppercase tracking-[0.18em]">Medical device in development</span>
              </div>
              
              <h1 
                className="text-[2.2rem] font-bold leading-[1.05] tracking-tight text-slate-900 opacity-0 animate-fade-in sm:text-4xl md:text-5xl lg:text-[2.9rem] xl:text-[3.15rem]"
                style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}
              >
                Sensor-Guided Respiratory Therapy<br className="hidden md:block" /> 
                <span className="text-primary">for Care Facilities & Beyond</span>
              </h1>
              
              <p 
                className="text-base lg:text-[1.05rem] text-slate-600 font-normal leading-relaxed opacity-0 animate-fade-in max-w-xl !mt-2"
                style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
              >
                Smart Lung Physio™ brings guided airway-clearance therapy, live care insights, and simple session documentation to long-term care teams, with future potential for connected home support.
              </p>

              <p
                className="w-fit max-w-full rounded-full border border-slate-200 bg-white/65 px-3.5 py-2 text-[11px] font-semibold uppercase leading-relaxed tracking-[0.11em] text-slate-500 shadow-sm opacity-0 animate-fade-in sm:text-xs sm:tracking-[0.14em]"
                style={{ animationDelay: '230ms', animationFillMode: 'forwards' }}
              >
                Smart Lung Physio™ — U.S. Utility Patent Pending
              </p>
              
              <ul 
                className="grid gap-2.5 opacity-0 animate-fade-in"
                style={{ animationDelay: '250ms', animationFillMode: 'forwards' }}
              >
                {HERO_BULLETS.map((bullet, index) => (
                  <li key={index} className="flex items-center gap-3 text-[15px] font-medium text-slate-700">
                    <div className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <bullet.icon className="w-4 h-4 text-primary" />
                    </div>
                    {bullet.text}
                  </li>
                ))}
              </ul>
              
              <div 
                className="relative hidden opacity-0 animate-fade-in max-w-xl sm:block"
                style={{ animationDelay: '280ms', animationFillMode: 'forwards' }}
              >
                <div className="relative border-l-2 border-primary bg-white/60 py-3 pl-4 pr-5 shadow-sm shadow-slate-900/5 backdrop-blur">
                  <div className="flex items-start gap-3">
                    <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <p className="text-sm font-medium text-slate-700 leading-relaxed">
                      Built to help caregivers deliver more consistent therapy with clear, real-time guidance during each session.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="relative mx-auto mt-4 w-full max-w-[300px] opacity-0 animate-fade-in lg:hidden"
                style={{ animationDelay: '360ms', animationFillMode: 'forwards' }}
              >
                <div className="absolute inset-x-8 bottom-5 h-8 rounded-full bg-slate-600/20 blur-2xl" />
                <img
                  src={heroDeviceImage}
                  alt="Healthcare professional demonstrating Smart Lung Physio device"
                  className="relative mx-auto h-auto max-h-[280px] w-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
            
            <div 
              className="relative opacity-0 animate-fade-in hidden lg:flex items-center justify-center lg:w-[50%] xl:w-[51%] self-center flex-shrink-0"
              style={{ animationDelay: '350ms', animationFillMode: 'forwards' }}
            >
              <div className="absolute inset-x-10 bottom-16 h-px bg-gradient-to-r from-transparent via-slate-400/30 to-transparent" />
              <div 
                className="relative flex items-center justify-center py-4 z-[2]"
                style={{ 
                  maskImage: 'linear-gradient(to bottom, black 0%, black 82%, transparent 99%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 82%, transparent 99%)'
                }}
              >
                <img 
                  src={heroDeviceImage} 
                  alt="Healthcare professional demonstrating Smart Lung Physio device" 
                  className="relative w-auto h-[52vh] max-h-[500px] min-h-[330px] object-contain drop-shadow-2xl"
                  style={{ 
                    filter: 'drop-shadow(0 24px 42px hsl(210, 35%, 25%, 0.16))'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(204,45%,97%)] via-white/80 to-transparent z-[5]" />
      </section>

      {/* Support Ecosystem Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[hsl(204,45%,97%)] via-[hsl(202,42%,97%)] to-[hsl(200,35%,96%)] pb-10 pt-10 lg:-mt-28 lg:pb-12 lg:pt-16">
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
      </section>

      {/* App Experience Section - Real-time Monitoring Interface */}
      <section className="overflow-hidden bg-gradient-to-b from-[hsl(200,35%,96%)] via-[hsl(200,35%,96%)] to-background px-6 py-12 sm:px-8 lg:px-12 lg:py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.75fr)] lg:gap-16 items-center">
            {/* Left side: Tablet therapy dashboard */}
            <ScrollReveal className="order-2 flex justify-center lg:order-1 lg:justify-center">
              <div className="relative w-full">
                {/* Ambient glow behind tablet */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-[320px] w-[640px] max-w-full rounded-[60px] bg-gradient-to-br from-[hsl(200,70%,75%)]/30 via-[hsl(205,65%,80%)]/20 to-[hsl(210,60%,85%)]/10 blur-3xl" />
                </div>
                {/* Spotlight effect */}
                <div className="absolute -top-16 left-1/2 h-[360px] w-[560px] max-w-full -translate-x-1/2 bg-[radial-gradient(circle,_hsl(200,80%,90%)_0%,_transparent_60%)] opacity-60 blur-2xl" />
                <PremiumPhoneMockup className="relative z-10 mx-auto" />
              </div>
            </ScrollReveal>
            
            {/* Right side: Content */}
            <ScrollReveal delay={100} className="order-1 space-y-5 lg:order-2 lg:space-y-6">
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider">Real-Time Monitoring</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                Live Feedback at Your Fingertips
              </h2>
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                The Smart Lung Physio™ companion app provides a live view of each therapy session, including treatment guidance, patient wellness signals, and care-team documentation synced securely to the cloud.
              </p>
              <ul className="space-y-5 pt-4">
                {[
                  { icon: Activity, text: "Live therapy guidance", desc: "Clear feedback while care is being delivered" },
                  { icon: Heart, text: "Patient wellness tracking", desc: "Helpful context for comfort and safety" },
                  { icon: Shield, text: "HIPAA-compliant cloud data storage", desc: "Secure, encrypted session records" },
                  { icon: BarChart3, text: "Session history and trend analytics", desc: "Track progress over time" }
                ].map((item, index) => (
                  <li
                    key={index}
                    className="group flex items-start gap-4 opacity-0 animate-feature-in"
                    style={{ animationDelay: `${180 + index * 120}ms`, animationFillMode: "forwards" }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center flex-shrink-0 border border-primary/10 transition duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/20 group-hover:bg-primary/10 group-hover:shadow-lg group-hover:shadow-primary/10">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">{item.text}</p>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Market Opportunity - TAM Section for Investors */}
      <section className="px-6 py-14 sm:px-8 lg:px-12 lg:py-28 bg-gradient-to-r from-[hsl(210,50%,15%)] via-[hsl(210,45%,18%)] to-[hsl(205,40%,20%)]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <ScrollReveal className="space-y-5 lg:space-y-6">
              <span className="inline-block text-xs font-semibold text-blue-400 uppercase tracking-wider">Market Opportunity</span>
              <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                <span className="text-blue-400">1.5 Billion</span> People Impacted Globally
              </h2>
              <p className="text-base leading-relaxed text-slate-300 md:text-lg">
                Chronic respiratory conditions affect over 1.5 billion people worldwide. Long-term care facilities alone manage millions of residents with complex respiratory needs—creating a significant opportunity for technology-enabled care solutions.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2 sm:gap-6 lg:pt-4">
                {[
                  { stat: "$50B+", label: "Respiratory Care Market" },
                  { stat: "4M+", label: "LTC Residents in North America" },
                  { stat: "30%", label: "LTC Residents with Respiratory Conditions" },
                  { stat: "2-3x", label: "Higher Hospital Transfer Rates" }
                ].map((item, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <p className="text-2xl lg:text-3xl font-bold text-blue-400">{item.stat}</p>
                    <p className="text-sm text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={100} className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-8 lg:rounded-3xl">
                <h3 className="mb-5 text-lg font-semibold text-white sm:mb-6 sm:text-xl">Why Smart Lung Physio™</h3>
                <ul className="space-y-3.5 sm:space-y-4">
                  {[
                    "Guided airway-clearance platform for LTC",
                    "Addresses staffing constraints with workflow efficiency",
                    "Potential to reduce costly hospital transfers",
                    "Scalable SaaS model with hardware placement",
                    "Clear regulatory pathway (Health Canada Class II)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Challenge Section - Unified styling */}
      <section className="px-6 py-16 sm:px-8 lg:px-12 lg:py-32">
        <div className="container mx-auto">
          <ScrollReveal className="mb-10 space-y-3 text-center sm:mb-16 sm:space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-800">The Operational Challenge</h2>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Long-term care facilities face significant respiratory care constraints
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
                description: "Traditional airway clearance methods require 20+ minutes per session—time that care teams often cannot allocate."
              },
              {
                icon: Heart,
                title: "Complex Resident Needs",
                description: "Frail elderly residents with multiple comorbidities require careful, individualized respiratory support."
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
                <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Approach</span>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-slate-800">
                  Smart Lung Physio™
                </h2>
              </div>
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                An automated airway-clearance device designed specifically for long-term care settings. The system provides guided therapy support, with the goal of helping care teams deliver consistent respiratory care across residents and shifts.
              </p>
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                The device is designed to assess respiratory status, adapt treatment parameters, and generate session documentation for care records.
              </p>
              <Button asChild size="lg" className="h-auto w-full rounded-full px-8 py-5 text-base bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] hover:from-[hsl(200,80%,45%)] hover:to-[hsl(210,85%,40%)] shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 sm:w-auto sm:py-6">
                <NavLink to="/device" className="flex items-center gap-2">
                  Learn About the Device
                  <ChevronRight className="w-4 h-4" />
                </NavLink>
              </Button>
            </ScrollReveal>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  icon: Activity,
                  title: "Sensor-Guided",
                  desc: "Real-time feedback supports consistent therapy delivery"
                },
                {
                  icon: Clock,
                  title: "Designed for Efficiency",
                  desc: "Intended to reduce session time compared to manual methods"
                },
                {
                  icon: Shield,
                  title: "Structured Workflow",
                  desc: "Step-by-step guidance for care staff"
                },
                {
                  icon: BarChart3,
                  title: "Documentation",
                  desc: "Automatic session logging for care records"
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

      {/* Development Context Section - Unified styling */}
      <section className="px-6 py-16 sm:px-8 lg:px-12 lg:py-32">
        <div className="container mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 items-center">
            <ScrollReveal className="space-y-5 lg:space-y-8">
              <div className="space-y-4">
                <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider">Development</span>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-slate-800">Clinical Workflow Learning</h2>
              </div>
              <p className="text-base text-slate-600 leading-relaxed">
                Early Smart Lung Physio™ prototypes were reviewed in clinical environments to better understand workflow needs, caregiver usability, patient positioning, and practical design considerations.
              </p>
              <div className="space-y-5 pt-2">
                {[
                  {
                    title: "Bedside Workflow Review",
                    desc: "Prototype use was observed in supervised care settings to understand setup, handling, and workflow fit."
                  },
                  {
                    title: "Positioning Considerations",
                    desc: "Supine, seated, and forward-leaning positions informed comfort, placement, and practical use considerations."
                  },
                  {
                    title: "Iterative Development",
                    desc: "Feedback from early prototype work continues to guide design decisions for long-term care workflows."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-blue-700" />
                    </div>
                    <div>
                      <p className="text-slate-800 font-medium text-sm">{item.title}</p>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal className="space-y-4" delay={100}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    src: "/lovable-uploads/clinical-icu-monitoring.png",
                    alt: "ICU patient receiving chest therapy with monitoring equipment"
                  },
                  {
                    src: "/lovable-uploads/clinical-female-therapy.png",
                    alt: "Female patient receiving respiratory therapy"
                  },
                  {
                    src: "/lovable-uploads/clinical-supine-therapy.png",
                    alt: "Supine patient receiving chest therapy"
                  },
                  {
                    src: "/lovable-uploads/d1085550-1fd7-4426-a23c-d2f8b8d7324a.png",
                    alt: "Seated patient receiving shoulder therapy"
                  }
                ].map((img, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-2xl border border-white/60 shadow-lg">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 text-center">
                Images from early prototype and workflow review activities.
              </p>
            </ScrollReveal>
          </div>
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
                Unlike general respiratory devices, Smart Lung Physio™ was developed specifically for the long-term care environment—accounting for staffing realities, resident acuity, and operational constraints.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                The device is designed to require minimal training, integrate into existing care routines, and provide documentation for care records.
              </p>
              <Button asChild size="lg" className="h-auto w-full rounded-full px-8 py-5 text-base bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] hover:from-[hsl(200,80%,45%)] hover:to-[hsl(210,85%,40%)] shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 sm:w-auto sm:py-6">
                <NavLink to="/long-term-care" className="flex items-center gap-2">
                  LTC Implementation Details
                  <ArrowRight className="w-4 h-4" />
                </NavLink>
              </Button>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    icon: Clock,
                    title: "Efficient Setup",
                    desc: "Designed for quick deployment"
                  },
                  {
                    icon: Shield,
                    title: "Safety Focused",
                    desc: "Built-in monitoring and limits"
                  },
                  {
                    icon: Users,
                    title: "Minimal Training",
                    desc: "Structured workflow guidance"
                  },
                  {
                    icon: BarChart3,
                    title: "Documentation",
                    desc: "Automatic session records"
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
              Interested in Learning More?
            </h2>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600 max-w-xl mx-auto">
                We welcome conversations with LTC operators, clinical partners, and healthcare innovation stakeholders.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center pt-2 sm:pt-4">
                <Button asChild size="lg" className="h-auto rounded-full px-10 py-5 text-base bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] hover:from-[hsl(200,80%,45%)] hover:to-[hsl(210,85%,40%)] shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 sm:py-7">
                  <NavLink to="/contact">Contact Us</NavLink>
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
