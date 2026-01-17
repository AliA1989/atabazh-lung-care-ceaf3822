import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Activity, Clock, TrendingUp, Shield, CheckCircle, BarChart3, Users, Heart, ArrowRight, ChevronRight, Repeat, FileCheck, ClipboardList } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
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
      {/* Hero Section - Modern MedTech Aesthetic */}
      <section className="relative min-h-[95vh] lg:min-h-screen flex items-center overflow-hidden">
        {/* Full background - Soft blue gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(200,40%,98%)] via-[hsl(200,50%,95%)] to-[hsl(210,60%,90%)] z-0" />
        
        {/* Large organic swoosh shape - top right */}
        <div className="absolute -top-40 -right-40 w-[900px] h-[900px] z-0">
          <svg viewBox="0 0 800 800" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="swoosh-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(200, 80%, 65%)" stopOpacity="0.4" />
                <stop offset="50%" stopColor="hsl(205, 75%, 55%)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(210, 70%, 50%)" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path 
              d="M400,0 C600,0 800,200 800,400 C800,600 600,800 400,800 C200,800 100,650 150,450 C200,250 200,0 400,0 Z" 
              fill="url(#swoosh-gradient)"
            />
          </svg>
        </div>
        
        {/* Secondary swoosh - smaller, lighter */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] z-0 opacity-60">
          <svg viewBox="0 0 600 600" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="swoosh-gradient-2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(195, 85%, 70%)" stopOpacity="0.25" />
                <stop offset="100%" stopColor="hsl(200, 80%, 60%)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <ellipse cx="450" cy="200" rx="350" ry="280" fill="url(#swoosh-gradient-2)" />
          </svg>
        </div>
        
        {/* Horizontal EKG line running across the hero - subtle depth effect */}
        <div className="absolute inset-0 flex items-center z-[1] pointer-events-none overflow-hidden">
          <svg 
            className="w-[200%] h-32 opacity-[0.08]"
            viewBox="0 0 2000 100"
            preserveAspectRatio="none"
          >
            <path 
              d="M0,50 L200,50 L210,50 L220,20 L230,80 L240,35 L250,65 L260,50 L400,50 L410,50 L420,15 L430,85 L440,30 L450,70 L460,50 L600,50 L610,50 L620,20 L630,80 L640,35 L650,65 L660,50 L800,50 L810,50 L820,15 L830,85 L840,30 L850,70 L860,50 L1000,50 L1010,50 L1020,20 L1030,80 L1040,35 L1050,65 L1060,50 L1200,50 L1210,50 L1220,15 L1230,85 L1240,30 L1250,70 L1260,50 L1400,50 L1410,50 L1420,20 L1430,80 L1440,35 L1450,65 L1460,50 L1600,50 L1610,50 L1620,15 L1630,85 L1640,30 L1650,70 L1660,50 L1800,50 L1810,50 L1820,20 L1830,80 L1840,35 L1850,65 L1860,50 L2000,50" 
              stroke="hsl(210, 80%, 45%)" 
              strokeWidth="3" 
              fill="none"
              className="animate-pulse-soft"
            />
          </svg>
        </div>
        
        <div className="container mx-auto relative z-10 px-6 sm:px-8 lg:px-12 py-24 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
            {/* Left side: Text content */}
            <div className="space-y-8 max-w-xl lg:max-w-none lg:pr-10">
              {/* Badge */}
              <div 
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-amber-100/90 border border-amber-200/70 shadow-sm opacity-0 animate-fade-in"
                style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
              >
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-xs font-semibold text-amber-800 uppercase tracking-wider">Medical Device in Development</span>
              </div>
              
              {/* Primary headline - slate grey text */}
              <h1 
                className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] tracking-tight text-slate-800 opacity-0 animate-fade-in"
                style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}
              >
                Standardized chest physiotherapy<br className="hidden md:block" /> for long-term care
              </h1>
              
              {/* Subheadline - slate grey */}
              <p 
                className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed opacity-0 animate-fade-in max-w-lg"
                style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
              >
                Real-time pressure feedback helps staff deliver consistent sessions and supports care documentation.
              </p>
              
              {/* Supporting bullets */}
              <ul 
                className="space-y-4 opacity-0 animate-fade-in"
                style={{ animationDelay: '250ms', animationFillMode: 'forwards' }}
              >
                {HERO_BULLETS.map((bullet, index) => (
                  <li key={index} className="flex items-center gap-3.5 text-[15px] text-slate-700">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[hsl(200,70%,55%)] to-[hsl(210,80%,45%)] flex items-center justify-center flex-shrink-0 shadow-sm">
                      <bullet.icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    {bullet.text}
                  </li>
                ))}
              </ul>
              
              {/* Differentiation line */}
              <p 
                className="text-sm text-slate-500 border-l-3 border-[hsl(200,70%,55%)] pl-4 opacity-0 animate-fade-in max-w-md"
                style={{ animationDelay: '280ms', animationFillMode: 'forwards', borderLeftWidth: '3px' }}
              >
                Unlike traditional manual chest physiotherapy, Smart Lung Physio provides real-time guidance during each session.
              </p>
              
              {/* CTAs - enhanced shadows */}
              <div 
                className="flex flex-col sm:flex-row gap-5 pt-4 opacity-0 animate-fade-in"
                style={{ animationDelay: '320ms', animationFillMode: 'forwards' }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="rounded-full text-base px-9 py-7 h-auto group transition-all duration-300 bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] hover:from-[hsl(200,80%,45%)] hover:to-[hsl(210,85%,40%)] shadow-lg shadow-[hsl(210,80%,45%)]/25 hover:shadow-xl hover:shadow-[hsl(210,80%,45%)]/30 hover:-translate-y-0.5"
                >
                  <NavLink to="/contact" className="flex items-center gap-2">
                    Request a demo
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </NavLink>
                </Button>
                <Button 
                  asChild 
                  variant="outline"
                  size="lg" 
                  className="rounded-full text-base px-9 py-7 h-auto bg-white/80 backdrop-blur-sm border-slate-200 hover:bg-white hover:border-slate-300 transition-all duration-300 shadow-md shadow-slate-900/5 hover:shadow-lg hover:-translate-y-0.5 text-slate-700"
                >
                  <NavLink to="/how-it-works">
                    See how it works <span className="text-slate-400 ml-1">(45 sec)</span>
                  </NavLink>
                </Button>
              </div>
            </div>
            
            {/* Right side: Hero image with tech elements */}
            <div 
              className="relative opacity-0 animate-fade-in hidden lg:flex items-center justify-center"
              style={{ animationDelay: '350ms', animationFillMode: 'forwards' }}
            >
              {/* Tech ring background element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[420px] h-[420px] rounded-full border-2 border-[hsl(200,60%,70%)]/30 animate-pulse-soft" />
                <div className="absolute w-[360px] h-[360px] rounded-full border border-[hsl(200,70%,60%)]/20" />
                <div className="absolute w-[480px] h-[480px] rounded-full border border-dashed border-[hsl(200,50%,75%)]/25" />
              </div>
              
              {/* Medical icon overlays - subtle tech elements */}
              <div className="absolute top-8 right-16 w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm border border-white/80 shadow-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-[hsl(200,70%,50%)]" />
              </div>
              <div className="absolute bottom-24 left-8 w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm border border-white/80 shadow-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-[hsl(200,70%,50%)]" />
              </div>
              
              {/* Hero image container with soft mask */}
              <div className="relative">
                {/* Soft gradient backdrop behind image */}
                <div className="absolute inset-0 -m-6 rounded-[40px] bg-gradient-to-br from-white/40 to-[hsl(200,60%,90%)]/40 backdrop-blur-sm" />
                
                <img 
                  src="/lovable-uploads/hero-nurse-device.png" 
                  alt="Healthcare professional demonstrating Smart Lung Physio device" 
                  className="w-full max-w-md h-auto object-contain relative z-10 drop-shadow-2xl"
                />
                
                {/* Floating session card - Glassmorphism effect */}
                <div 
                  className={`absolute bottom-1/4 -left-6 backdrop-blur-xl bg-white/70 border border-white/90 rounded-2xl p-5 shadow-2xl shadow-slate-900/10 transition-all duration-700 z-20 ${
                    isPulseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="space-y-3 min-w-[165px]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
                      <span className="text-[13px] font-semibold text-slate-800">Session completed</span>
                    </div>
                    <div className="space-y-2 text-[12px]">
                      <div className="flex items-center gap-2 text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-[hsl(200,70%,50%)] flex-shrink-0" />
                        <span>Pressure: within range</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-[hsl(200,70%,50%)] flex-shrink-0" />
                        <span>Logged for records</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[5]" />
      </section>

      {/* The Challenge Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground">The Operational Challenge</h2>
            <ScrollReveal delay={100}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                <Card className="h-full bg-gradient-to-br from-[hsl(200,85%,97%)] to-[hsl(210,70%,95%)] border-[hsl(200,60%,85%)] hover:border-primary/40 transition-all duration-200 hover:shadow-lg group">
                  <CardContent className="p-8 lg:p-10 space-y-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <ScrollReveal className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider">Our Approach</span>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-foreground">
                  Smart Lung Physio™
                </h2>
              </div>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                An automated airway-clearance device designed specifically for long-term care settings. The system uses integrated sensors to guide therapy delivery, with the goal of supporting consistent respiratory care across care teams.
              </p>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                The device is designed to assess respiratory status, adapt treatment parameters, and generate session documentation for care records.
              </p>
              <Button asChild size="lg" className="rounded">
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
                  <Card className="h-full border-border hover:border-primary/20 transition-colors duration-150 bg-card">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-10 h-10 rounded bg-primary flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <h3 className="font-semibold text-base text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Goals Section */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-muted/40">
        <div className="container mx-auto">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider">Design Goals</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Intended Benefits</h2>
            <ScrollReveal delay={100}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                <Card className="h-full border-border hover:border-primary/20 transition-colors duration-150 bg-card">
                  <CardContent className="p-8 lg:p-10 space-y-5">
                    <div className="w-12 h-12 rounded bg-primary flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal className="text-center space-y-4 mb-20">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider">Process Overview</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">How It Works</h2>
            <ScrollReveal delay={100}>
              <p className="text-lg text-muted-foreground">A three-step approach to sensor-guided therapy</p>
            </ScrollReveal>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-10 lg:gap-16 relative">
            <div className="hidden md:flex absolute top-[48px] left-[25%] right-[25%] items-center justify-between z-0">
              <div className="flex-1 h-px bg-border" />
              <div className="flex-1 h-px bg-border" />
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
                    <div className="w-24 h-24 mx-auto rounded-full bg-primary flex items-center justify-center text-4xl font-bold text-primary-foreground">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px] mx-auto">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal className="text-center mt-16">
            <Button asChild size="lg" variant="outline" className="rounded text-base px-8">
              <NavLink to="/how-it-works">Technical Details</NavLink>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Development Context Section */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-muted/40">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <ScrollReveal className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider">Development</span>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-foreground">Tested in Clinical Settings</h2>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
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
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium text-sm">{item.title}</p>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
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
                  <div key={index} className="aspect-square overflow-hidden rounded border border-border">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover opacity-90 saturate-[0.9]" />
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Images from early clinical prototype evaluations.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Early Observations Section */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <ScrollReveal className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider">Early Observations</span>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-foreground">Preliminary Pilot Data</h2>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
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
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground font-medium">{item.stat}</strong> {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                Based on internal pilot observations. Not from peer-reviewed clinical trials.
              </p>
              <Button asChild size="lg" className="rounded">
                <NavLink to="/clinical-evidence" className="flex items-center gap-2">
                  View Clinical Insights
                  <ChevronRight className="w-4 h-4" />
                </NavLink>
              </Button>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <Card className="border-border bg-card">
                <CardContent className="p-8 lg:p-10 space-y-8">
                  <h3 className="text-xl font-semibold text-foreground">Observed Trends from Pilots</h3>
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
                          <span className="text-sm font-medium text-foreground">{item.label}</span>
                          <span className="text-xl font-semibold text-primary">~{item.value}%</span>
                        </div>
                        <div className="w-full bg-muted rounded h-2 overflow-hidden">
                          <div 
                            className="h-full rounded bg-primary transition-all duration-1000 ease-out" 
                            style={{ width: `${item.value}%` }} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground text-center pt-4 border-t border-border">
                    Preliminary observations from internal pilot deployments
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* LTC Focus Section */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-muted/40">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <ScrollReveal className="space-y-8">
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider">Purpose-Built</span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-foreground">Designed for Long-Term Care</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Unlike general respiratory devices, Smart Lung Physio™ was developed specifically for the long-term care environment—accounting for staffing realities, resident acuity, and operational constraints.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                The device is designed to require minimal training, integrate into existing care routines, and provide documentation for care records.
              </p>
              <Button asChild size="lg" className="rounded">
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
                  <Card key={index} className="border-border hover:border-primary/20 transition-colors duration-150">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="w-10 h-10 mx-auto rounded bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-sm text-foreground">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal className="text-center space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Interested in Learning More?
            </h2>
            <ScrollReveal delay={100}>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                We welcome conversations with LTC operators, clinical partners, and healthcare innovation stakeholders.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="rounded text-base px-10 py-6 h-auto">
                  <NavLink to="/contact">Contact Us</NavLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded text-base px-10 py-6 h-auto">
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
