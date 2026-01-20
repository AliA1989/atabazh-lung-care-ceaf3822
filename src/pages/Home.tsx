import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Activity, Clock, TrendingUp, Shield, CheckCircle, BarChart3, Users, Heart, ArrowRight, ChevronRight, Repeat, FileCheck, ClipboardList, Play, Info } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import FounderWelcomeModal from "@/components/FounderWelcomeModal";
import BreathingGlow from "@/components/BreathingGlow";
import AppPhoneMockup from "@/components/AppPhoneMockup";
import { useEffect, useState } from "react";

const HERO_BULLETS = [
  { icon: Repeat, text: "Consistent pressure guidance across all staff" },
  { icon: ClipboardList, text: "Structured workflow for each session" },
  { icon: FileCheck, text: "Automatic session documentation" },
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
      {/* Hero Section - Premium MedTech Glassmorphism Aesthetic */}
      <section className="relative min-h-[95vh] lg:min-h-screen flex items-center overflow-hidden">
        {/* Full background - Refined soft blue gradient with subtle radial */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(200,35%,98%)] via-[hsl(200,45%,96%)] to-[hsl(210,55%,92%)] z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(200,60%,90%)_0%,_transparent_60%)] z-0" />
        
        {/* Bold circular gradient container for nurse - refined colors */}
        <div className="absolute top-0 right-0 w-[70%] h-full z-0 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-bl from-[hsl(205,70%,78%)] via-[hsl(200,65%,82%)] to-transparent rounded-bl-[40%]" />
          {/* Inner gradient circle with glow */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[10%] w-[700px] h-[700px]">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[hsl(200,60%,85%)] via-[hsl(205,65%,78%)] to-[hsl(210,70%,72%)] opacity-85 blur-sm" />
          </div>
        </div>
        
        {/* Premium organic swoosh shape - top right accent */}
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] z-[1] hidden lg:block">
          <svg viewBox="0 0 600 600" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="swoosh-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(200, 75%, 75%)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="hsl(210, 70%, 65%)" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            <ellipse cx="400" cy="200" rx="300" ry="250" fill="url(#swoosh-gradient)" />
          </svg>
        </div>
        
        {/* Refined glowing wave pattern - finer lines with slow pulse animation */}
        <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
          <svg 
            className="absolute top-1/2 left-0 w-[250%] h-[500px] -translate-y-1/2 opacity-[0.12]"
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
            className="absolute top-1/2 left-0 w-[250%] h-[400px] -translate-y-1/2 translate-y-6 opacity-[0.08]"
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
            className="absolute top-1/2 left-0 w-[200%] h-[600px] -translate-y-1/2 -translate-y-8 opacity-[0.05]"
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
        
        {/* Ambient light overlay - soft directional lighting */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent z-[3] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,_hsl(200,70%,90%)_0%,_transparent_70%)] opacity-40 blur-3xl z-[1]" />
        
        <div className="container mx-auto relative z-10 px-6 sm:px-8 lg:px-12 py-24 lg:py-0">
          {/* FLEXBOX: Perfect vertical centering between text and image */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-14 lg:gap-8">
            {/* Left side: Text content - vertically centered with image */}
            <div className="space-y-8 max-w-xl lg:max-w-none lg:pr-6 lg:w-[42%] lg:flex-shrink-0 flex flex-col justify-center">
              {/* Badge - Monochromatic blue palette */}
              <div 
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-blue-50/90 border border-blue-100/70 shadow-sm opacity-0 animate-fade-in"
                style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-semibold text-blue-600/90 uppercase tracking-wider">Medical Device in Development</span>
              </div>
              
              {/* Primary headline - slate grey text */}
              <h1 
                className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] tracking-tight text-slate-800 opacity-0 animate-fade-in"
                style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}
              >
                Sensor-Guided Respiratory Therapy<br className="hidden md:block" /> 
                <span className="text-primary">for Care Facilities & Beyond</span>
              </h1>
              
              {/* Subheadline - slate grey - reduced gap with mt-4 instead of space-y-8 */}
              <p 
                className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed opacity-0 animate-fade-in max-w-lg !mt-4"
                style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
              >
                Smart Lung Physio™ delivers real-time FSR-guided chest percussion with SpO₂ monitoring—designed for long-term care facilities with potential for home-based remote patient monitoring.
              </p>
              
              {/* Supporting bullets */}
              <ul 
                className="space-y-4 opacity-0 animate-fade-in"
                style={{ animationDelay: '250ms', animationFillMode: 'forwards' }}
              >
                {HERO_BULLETS.map((bullet, index) => (
                  <li key={index} className="flex items-center gap-3.5 text-[15px] text-slate-700">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <bullet.icon className="w-3.5 h-3.5 text-blue-700" />
                    </div>
                    {bullet.text}
                  </li>
                ))}
              </ul>
              
              {/* Differentiation - Glassmorphism card with icon */}
              <div 
                className="relative opacity-0 animate-fade-in max-w-md"
                style={{ animationDelay: '280ms', animationFillMode: 'forwards' }}
              >
                <div className="relative px-5 py-4 rounded-2xl bg-gradient-to-br from-[hsl(200,70%,95%)]/80 to-[hsl(210,60%,92%)]/60 backdrop-blur-xl border border-white/60 shadow-lg shadow-[hsl(200,70%,50%)]/10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[hsl(200,75%,55%)] to-[hsl(210,80%,45%)] flex items-center justify-center flex-shrink-0 shadow-md shadow-[hsl(200,70%,50%)]/30">
                      <Info className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Unlike traditional manual chest physiotherapy, Smart Lung Physio provides real-time guidance during each session.
                    </p>
                  </div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[hsl(200,80%,70%)]/10 to-transparent pointer-events-none" />
                </div>
              </div>
              
              {/* CTAs - Premium polished buttons */}
              <div 
                className="flex flex-col sm:flex-row gap-5 pt-4 opacity-0 animate-fade-in"
                style={{ animationDelay: '320ms', animationFillMode: 'forwards' }}
              >
                {/* Primary button with gradient and colored shadow */}
                <Button 
                  asChild 
                  size="lg" 
                  className="relative rounded-full text-base px-9 py-7 h-auto group transition-all duration-300 bg-gradient-to-r from-[hsl(200,80%,55%)] via-[hsl(205,85%,50%)] to-[hsl(210,80%,45%)] hover:from-[hsl(200,85%,50%)] hover:via-[hsl(205,90%,45%)] hover:to-[hsl(210,85%,40%)] shadow-xl shadow-[hsl(205,80%,45%)]/35 hover:shadow-2xl hover:shadow-[hsl(205,80%,45%)]/45 hover:-translate-y-1 overflow-hidden"
                >
                  <NavLink to="/contact" className="flex items-center gap-2.5 relative z-10">
                    Request a demo
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    {/* Shine effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </NavLink>
                </Button>
                {/* Secondary button with glassmorphism and play icon */}
                <Button 
                  asChild 
                  variant="outline"
                  size="lg" 
                  className="relative rounded-full text-base px-9 py-7 h-auto bg-white/50 backdrop-blur-xl border-2 border-white/70 hover:bg-white/70 hover:border-white/90 transition-all duration-300 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:-translate-y-1 text-slate-700 group overflow-hidden"
                >
                  <NavLink to="/how-it-works" className="flex items-center gap-3 relative z-10">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[hsl(200,75%,55%)] to-[hsl(210,80%,45%)] flex items-center justify-center shadow-md shadow-[hsl(200,70%,50%)]/25 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-3.5 h-3.5 text-white ml-0.5" fill="white" />
                    </span>
                    See how it works
                    {/* Subtle glass reflection */}
                    <span className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </NavLink>
                </Button>
              </div>
            </div>
            
            {/* Right side: Hero image with glowing halo effect */}
            <div 
              className="relative opacity-0 animate-fade-in hidden lg:flex items-center justify-center lg:w-[52%] xl:w-[55%] self-center flex-shrink-0"
              style={{ animationDelay: '350ms', animationFillMode: 'forwards' }}
            >
              {/* Breathing Glow Animation - behind everything */}
              <BreathingGlow 
                className="z-0" 
                size={650} 
                duration={4}
              />
              
              {/* Tech ring elements - finer, more refined */}
              <div className="absolute inset-0 flex items-center justify-center z-[1]">
                <div className="w-[580px] h-[580px] rounded-full border border-[hsl(200,70%,75%)]/40 animate-pulse-soft" />
                <div className="absolute w-[480px] h-[480px] rounded-full border border-[hsl(200,75%,70%)]/25" />
                <div className="absolute w-[680px] h-[680px] rounded-full border border-dashed border-[hsl(200,60%,80%)]/20" style={{ animation: 'spin 60s linear infinite' }} />
              </div>
              
              {/* Hero image with enhanced lighting */}
              <div 
                className="relative flex items-center justify-center py-8 z-[2]"
                style={{ 
                  maskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 98%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 98%)'
                }}
              >
                {/* Edge lighting effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 rounded-full blur-sm pointer-events-none" />
                <img 
                  src="/lovable-uploads/hero-nurse-clean.png" 
                  alt="Healthcare professional demonstrating Smart Lung Physio device" 
                  className="relative w-auto h-[70vh] max-h-[680px] min-h-[400px] object-contain drop-shadow-2xl"
                  style={{ 
                    filter: 'drop-shadow(0 20px 40px hsl(200, 50%, 30%, 0.15)) drop-shadow(0 8px 16px hsl(200, 60%, 40%, 0.1))'
                  }}
                />
              </div>
              
              {/* Animated App Phone Mockup - positioned to the right of the nurse */}
              <div 
                className="absolute right-4 xl:right-12 bottom-[15%] z-[5] opacity-0 animate-fade-in"
                style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
              >
                <AppPhoneMockup />
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[5]" />
      </section>

      {/* Market Opportunity - TAM Section for Investors */}
      <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-gradient-to-r from-[hsl(210,50%,15%)] via-[hsl(210,45%,18%)] to-[hsl(205,40%,20%)]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal className="space-y-6">
              <span className="inline-block text-xs font-semibold text-blue-400 uppercase tracking-wider">Market Opportunity</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="text-blue-400">1.5 Billion</span> People Impacted Globally
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Chronic respiratory conditions affect over 1.5 billion people worldwide. Long-term care facilities alone manage millions of residents with complex respiratory needs—creating a significant opportunity for technology-enabled care solutions.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
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
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-6">Why Smart Lung Physio™</h3>
                <ul className="space-y-4">
                  {[
                    "First sensor-guided chest percussion device for LTC",
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
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12">
        <div className="container mx-auto">
          <ScrollReveal className="text-center space-y-4 mb-16">
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
                  <CardContent className="p-8 lg:p-10 space-y-5">
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
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-[hsl(200,40%,97%)] via-[hsl(200,50%,95%)] to-[hsl(210,50%,92%)]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <ScrollReveal className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Approach</span>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-slate-800">
                  Smart Lung Physio™
                </h2>
              </div>
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                An automated airway-clearance device designed specifically for long-term care settings. The system uses integrated sensors to guide therapy delivery, with the goal of supporting consistent respiratory care across care teams.
              </p>
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                The device is designed to assess respiratory status, adapt treatment parameters, and generate session documentation for care records.
              </p>
              <Button asChild size="lg" className="rounded-full text-base px-8 py-6 h-auto bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] hover:from-[hsl(200,80%,45%)] hover:to-[hsl(210,85%,40%)] shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <NavLink to="/device" className="flex items-center gap-2">
                  Learn About the Device
                  <ChevronRight className="w-4 h-4" />
                </NavLink>
              </Button>
            </ScrollReveal>
            
            <div className="grid grid-cols-2 gap-6">
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
                    <CardContent className="p-6 space-y-4">
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

      {/* Mechanism of Action - For Clinicians */}
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-[hsl(210,60%,98%)] via-[hsl(200,50%,96%)] to-[hsl(220,40%,94%)]">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider">For Clinicians</span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-800">Mechanism of Action</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              How Smart Lung Physio™ technology delivers sensor-guided airway clearance
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <ScrollReveal className="space-y-6">
              <div className="space-y-8">
                {[
                  {
                    title: "Force-Sensing Resistor (FSR) Guidance",
                    description: "Integrated FSR sensors detect applied percussion pressure in real-time, providing visual feedback to caregivers to ensure consistent therapeutic force delivery. The system calibrates to optimal pressure ranges based on clinical guidelines for chest physiotherapy.",
                    icon: Activity
                  },
                  {
                    title: "Continuous SpO₂ Monitoring",
                    description: "Pulse oximetry integration monitors oxygen saturation throughout therapy sessions. The system alerts caregivers to any drops below configurable thresholds, ensuring patient safety during airway clearance procedures.",
                    icon: Heart
                  },
                  {
                    title: "Adaptive Therapy Algorithm",
                    description: "The device combines force and SpO₂ data to guide caregivers through structured percussion sequences. The algorithm adapts to real-time patient response, supporting evidence-based therapy delivery.",
                    icon: TrendingUp
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-500/30">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                    <div className="flex items-center gap-3">
                      <Shield className="h-6 w-6 text-white" />
                      <h3 className="text-lg font-semibold text-white">Data Security & Compliance</h3>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 space-y-6">
                    <p className="text-slate-600 leading-relaxed">
                      Smart Lung Physio™ is designed with healthcare data security as a priority.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Cloud-based data storage with encryption at rest and in transit",
                        "Role-based access controls for care teams",
                        "Audit trails for all session data",
                        "Designed for PIPEDA compliance (Canada)",
                        "Health Canada Class II medical device pathway"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-slate-200">
                      <p className="text-xs text-slate-500">
                        Regulatory documentation and technical specifications available upon request.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Design Goals Section - Unified styling */}
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12">
        <div className="container mx-auto">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider">Design Goals</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Intended Benefits</h2>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Designed to address key challenges in long-term care respiratory support
              </p>
            </ScrollReveal>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: Clock,
                title: "Workflow Integration",
                description: "Designed to fit within existing care routines with structured, guided therapy sessions."
              },
              {
                icon: TrendingUp,
                title: "Consistent Delivery",
                description: "Sensor feedback supports consistent therapy application across different caregivers."
              },
              {
                icon: BarChart3,
                title: "Care Documentation",
                description: "Automatic session logging provides objective data for care teams and records."
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index === 0 ? 0 : index === 1 ? 100 : 150}>
                <Card className="h-full backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl shadow-slate-900/5 hover:shadow-2xl transition-all duration-300 rounded-2xl">
                  <CardContent className="p-8 lg:p-10 space-y-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md shadow-blue-500/30">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Soft Blue Gradient */}
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-[hsl(200,40%,97%)] via-[hsl(200,50%,95%)] to-[hsl(210,50%,92%)]">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal className="text-center space-y-4 mb-20">
            <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider">Process Overview</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">How It Works</h2>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600">A three-step approach to sensor-guided therapy</p>
            </ScrollReveal>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-10 lg:gap-16 relative">
            <div className="hidden md:flex absolute top-[48px] left-[25%] right-[25%] items-center justify-between z-0">
              <div className="flex-1 h-px bg-blue-200" />
              <div className="flex-1 h-px bg-blue-200" />
            </div>
            
            {[
              {
                step: "1",
                title: "Assess",
                description: "Sensors capture baseline readings including applied pressure, oxygen saturation, and placement confirmation."
              },
              {
                step: "2",
                title: "Treat",
                description: "Guided therapy delivery with real-time feedback on pressure and technique. Built-in safety monitoring throughout."
              },
              {
                step: "3",
                title: "Review",
                description: "Session data is logged automatically. Care teams can review therapy records and observe trends over time."
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index === 0 ? 0 : index === 1 ? 100 : 150} className="relative z-10">
                <div className="text-center space-y-6">
                  <div className="relative mx-auto w-fit">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-4xl font-bold text-white shadow-xl shadow-blue-500/30">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-[280px] mx-auto">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal className="text-center mt-16">
            <Button asChild size="lg" className="rounded-full text-base px-8 py-6 h-auto bg-white/80 backdrop-blur-sm border-2 border-white/60 shadow-lg hover:shadow-xl hover:bg-white hover:-translate-y-0.5 transition-all duration-300 text-slate-700">
              <NavLink to="/how-it-works">Technical Details</NavLink>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Development Context Section - Unified styling */}
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <ScrollReveal className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider">Development</span>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-slate-800">Tested in Clinical Settings</h2>
              </div>
              <p className="text-base text-slate-600 leading-relaxed">
                Smart Lung Physio™ began as a prototype tested in ICU, hospital, and clinical environments. These early evaluations informed therapy parameters, comfort considerations, and device placement.
              </p>
              <div className="space-y-5 pt-2">
                {[
                  {
                    title: "Bedside Evaluation",
                    desc: "Early prototypes were assessed at the bedside with clinical supervision."
                  },
                  {
                    title: "Multiple Positions",
                    desc: "Supine, seated, and forward-leaning positions were evaluated for comfort and feasibility."
                  },
                  {
                    title: "Iterative Design",
                    desc: "Clinical feedback shaped the current design, now optimized for long-term care workflows."
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
                Images from early clinical prototype evaluations.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Early Observations Section - Soft Blue Gradient */}
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-[hsl(200,40%,97%)] via-[hsl(200,50%,95%)] to-[hsl(210,50%,92%)]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <ScrollReveal className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider">Early Observations</span>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-slate-800">Preliminary Pilot Data</h2>
              </div>
              <p className="text-base text-slate-600 leading-relaxed">
                Initial pilot deployments in Canadian long-term care settings have provided directional data. Formal validation studies are planned.
              </p>
              <div className="space-y-5">
                {[
                  {
                    stat: "~40% reduction",
                    desc: "observed in respiratory-related hospital transfers during pilot period"
                  },
                  {
                    stat: "~35% fewer",
                    desc: "acute respiratory episodes among observed residents"
                  },
                  {
                    stat: "~75% time reduction",
                    desc: "compared to traditional manual chest physiotherapy"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-blue-700" />
                    </div>
                    <p className="text-sm text-slate-600">
                      <strong className="text-slate-800 font-semibold">{item.stat}</strong> {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500">
                Based on internal pilot observations. Not from peer-reviewed clinical trials.
              </p>
              <Button asChild size="lg" className="rounded-full text-base px-8 py-6 h-auto bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] hover:from-[hsl(200,80%,45%)] hover:to-[hsl(210,85%,40%)] shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <NavLink to="/clinical-evidence" className="flex items-center gap-2">
                  View Clinical Insights
                  <ChevronRight className="w-4 h-4" />
                </NavLink>
              </Button>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <Card className="backdrop-blur-xl bg-white/70 border-2 border-white/60 shadow-2xl shadow-slate-900/10 rounded-2xl">
                <CardContent className="p-8 lg:p-10 space-y-8">
                  <h3 className="text-xl font-semibold text-slate-800">Observed Trends from Pilots</h3>
                  <div className="space-y-6">
                    {[
                      {
                        label: "Fewer Hospital Transfers",
                        value: 40
                      },
                      {
                        label: "Fewer Acute Episodes",
                        value: 35
                      },
                      {
                        label: "Time Reduction",
                        value: 75
                      }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-baseline">
                          <span className="text-sm font-medium text-slate-700">{item.label}</span>
                          <span className="text-xl font-bold text-blue-600">~{item.value}%</span>
                        </div>
                        <div className="w-full bg-blue-100 rounded-full h-2.5 overflow-hidden">
                          <div 
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-1000 ease-out" 
                            style={{ width: `${item.value}%` }} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 text-center pt-4 border-t border-slate-200">
                    Preliminary observations from internal pilot deployments
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* LTC Focus Section - Unified styling */}
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <ScrollReveal className="space-y-8">
              <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider">Purpose-Built</span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-slate-800">Designed for Long-Term Care</h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Unlike general respiratory devices, Smart Lung Physio™ was developed specifically for the long-term care environment—accounting for staffing realities, resident acuity, and operational constraints.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                The device is designed to require minimal training, integrate into existing care routines, and provide documentation for care records.
              </p>
              <Button asChild size="lg" className="rounded-full text-base px-8 py-6 h-auto bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] hover:from-[hsl(200,80%,45%)] hover:to-[hsl(210,85%,40%)] shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <NavLink to="/long-term-care" className="flex items-center gap-2">
                  LTC Implementation Details
                  <ArrowRight className="w-4 h-4" />
                </NavLink>
              </Button>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <div className="grid grid-cols-2 gap-6">
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
                    <CardContent className="p-6 text-center space-y-4">
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
      <section className="py-28 lg:py-36 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-[hsl(200,40%,97%)] via-[hsl(200,50%,95%)] to-[hsl(210,50%,92%)]">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal className="text-center space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
              Interested in Learning More?
            </h2>
            <ScrollReveal delay={100}>
              <p className="text-lg text-slate-600 max-w-xl mx-auto">
                We welcome conversations with LTC operators, clinical partners, and healthcare innovation stakeholders.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
                <Button asChild size="lg" className="rounded-full text-base px-10 py-7 h-auto bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] hover:from-[hsl(200,80%,45%)] hover:to-[hsl(210,85%,40%)] shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                  <NavLink to="/contact">Contact Us</NavLink>
                </Button>
                <Button asChild size="lg" className="rounded-full text-base px-10 py-7 h-auto bg-white/80 backdrop-blur-sm border-2 border-white/60 shadow-lg hover:shadow-xl hover:bg-white hover:-translate-y-0.5 transition-all duration-300 text-slate-700">
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
