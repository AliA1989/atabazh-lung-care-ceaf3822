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
      {/* Hero Section - Compact, clinical */}
      <section className="relative bg-background overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-background" />
        
        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          {/* Text-dominant grid: 55% text, 45% visual */}
          <div className="grid lg:grid-cols-[1fr_0.7fr] gap-12 lg:gap-16 items-center">
            {/* Left side: Text content - primary focus */}
            <div className="space-y-6 max-w-xl lg:max-w-none">
              {/* Badge */}
              <div 
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/60 border border-border opacity-0 animate-fade-in"
                style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Medical Device in Development</span>
              </div>
              
              {/* Primary headline - Outcome-driven, operational */}
              <h1 
                className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] tracking-tight text-foreground opacity-0 animate-fade-in"
                style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}
              >
                Standardized chest physiotherapy for long-term care
              </h1>
              
              {/* Subheadline */}
              <p 
                className="text-lg md:text-xl text-muted-foreground font-normal leading-relaxed opacity-0 animate-fade-in"
                style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
              >
                Real-time pressure feedback helps staff deliver consistent sessions and supports care documentation.
              </p>
              
              {/* Supporting bullets */}
              <ul 
                className="space-y-3 opacity-0 animate-fade-in"
                style={{ animationDelay: '250ms', animationFillMode: 'forwards' }}
              >
                {HERO_BULLETS.map((bullet, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm md:text-base text-foreground/80">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <bullet.icon className="w-3 h-3 text-primary" />
                    </div>
                    {bullet.text}
                  </li>
                ))}
              </ul>
              
              {/* Differentiation line */}
              <p 
                className="text-sm text-muted-foreground/80 border-l-2 border-primary/30 pl-4 opacity-0 animate-fade-in"
                style={{ animationDelay: '280ms', animationFillMode: 'forwards' }}
              >
                Unlike traditional manual chest physiotherapy, Smart Lung Physio provides real-time guidance during each session.
              </p>
              
              {/* CTAs */}
              <div 
                className="flex flex-col sm:flex-row gap-4 pt-2 opacity-0 animate-fade-in"
                style={{ animationDelay: '320ms', animationFillMode: 'forwards' }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="rounded-lg text-base px-7 py-6 h-auto group transition-all duration-200 hover:shadow-md"
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
                  className="rounded-lg text-base px-7 py-6 h-auto border-border hover:bg-muted/50 transition-colors duration-200"
                >
                  <NavLink to="/how-it-works">
                    See how it works <span className="text-muted-foreground ml-1">(45 sec)</span>
                  </NavLink>
                </Button>
              </div>
            </div>
            
            {/* Right side: Product visual - clean, sharp */}
            <div 
              className="relative opacity-0 animate-fade-in hidden lg:block"
              style={{ animationDelay: '350ms', animationFillMode: 'forwards' }}
            >
              {/* Device-focused visual container */}
              <div className="relative">
                {/* Clean image - full quality, no heavy effects */}
                <div className="relative rounded-xl overflow-hidden shadow-sm border border-border/50">
                  <img 
                    src="/lovable-uploads/hero-nurse-device.png" 
                    alt="Smart Lung Physio device interface" 
                    className="w-full h-auto"
                  />
                  {/* Subtle top fade to soften face area without degrading quality */}
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/40 to-transparent pointer-events-none" />
                </div>
                
                {/* Floating session summary card - qualitative indicators */}
                <div 
                  className={`absolute bottom-4 -left-4 bg-card border border-border rounded-lg p-3 shadow-sm max-w-[180px] transition-all duration-500 ${
                    isPulseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
                    <span className="text-[11px] font-medium text-foreground">Session completed</span>
                  </div>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex items-start gap-1.5">
                      <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Pressure: within range</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Logged for records</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section - reduced top padding for flow */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/40">
        <div className="container mx-auto">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">The Operational Challenge</h2>
            <ScrollReveal delay={100}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Long-term care facilities face significant respiratory care constraints
              </p>
            </ScrollReveal>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
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
                <Card className="h-full bg-card border-border hover:border-primary/20 transition-colors duration-150">
                  <CardContent className="p-8 lg:p-10 space-y-5">
                    <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
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
