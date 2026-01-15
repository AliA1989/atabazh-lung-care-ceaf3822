import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Activity, Clock, TrendingUp, Shield, CheckCircle, BarChart3, Users, Heart, ArrowRight, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

const Home = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -30px 0px"
    });
    document.querySelectorAll(".scroll-animate").forEach(el => {
      observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);
  
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-contain bg-no-repeat bg-right"
          style={{
            backgroundImage: `url('/lovable-uploads/hero-nurse-device.png')`,
          }}
        />
        <div className="absolute inset-0 bg-background lg:bg-transparent lg:bg-gradient-to-r lg:from-background lg:via-background/60 lg:to-transparent" />

        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <div className="space-y-8">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted border border-border">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Medical Device in Development</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  Smart Lung Physio
                  <br />
                  <span className="text-muted-foreground">Sensor-Guided Chest Physiotherapy</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                  A medical device designed to support consistent airway-clearance therapy for long-term care residents through real-time sensor feedback.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-md text-base px-8 py-6 h-auto">
                  <NavLink to="/contact" className="flex items-center gap-2">
                    Contact Us
                    <ArrowRight className="w-4 h-4" />
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto">
          <div className="text-center space-y-3 mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold">The Operational Challenge</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Long-term care facilities face significant respiratory care constraints
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
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
              <div key={index} className="scroll-animate group" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="h-full bg-card/60 backdrop-blur-sm border-border/40 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-6 lg:p-7 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="space-y-6 scroll-animate">
              <div className="space-y-3">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">Our Approach</span>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Smart Lung Physio™
                </h2>
              </div>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                An automated airway-clearance device designed specifically for long-term care settings. The system uses integrated sensors to guide therapy delivery, with the goal of supporting consistent respiratory care across care teams.
              </p>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                The device is designed to assess respiratory status, adapt treatment parameters, and generate session documentation for care records.
              </p>
              <Button asChild size="lg" className="rounded-lg group">
                <NavLink to="/device" className="flex items-center gap-2">
                  Learn About the Device
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </NavLink>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
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
                <div key={index} className="scroll-animate" style={{ animationDelay: `${index * 0.08}s` }}>
                  <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/40 hover:border-primary/25 bg-card/80">
                    <CardContent className="p-5 space-y-3">
                      <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <h3 className="font-semibold text-base">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Goals Section */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto">
          <div className="text-center space-y-3 mb-12 scroll-animate">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">Design Goals</span>
            <h2 className="text-3xl md:text-4xl font-bold">Intended Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed to address key challenges in long-term care respiratory support
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
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
              <div key={index} className="scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="h-full group border border-transparent hover:border-primary/15 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card">
                  <CardContent className="p-7 lg:p-8 space-y-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                      <item.icon className="h-7 w-7 text-primary-foreground group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-3 mb-14 scroll-animate">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">Process Overview</span>
            <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
            <p className="text-lg text-muted-foreground">A three-step approach to sensor-guided therapy</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
            <div className="hidden md:flex absolute top-[60px] left-[30%] right-[30%] items-center justify-between px-8 z-0">
              <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/30 to-primary/50" />
              <ChevronRight className="w-5 h-5 text-primary/50 -mx-1" />
              <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/50 to-primary/30" />
              <ChevronRight className="w-5 h-5 text-primary/50 -mx-1" />
              <div className="flex-1 h-0.5 bg-primary/30" />
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
              <div key={index} className="scroll-animate relative z-10" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="text-center space-y-5 group">
                  <div className="relative mx-auto w-fit">
                    <div className="w-[120px] h-[120px] mx-auto rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-5xl font-bold text-primary-foreground shadow-xl group-hover:scale-110 transition-all duration-300 group-hover:shadow-glow">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px] mx-auto">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 scroll-animate">
            <Button asChild size="lg" variant="outline" className="rounded-lg text-base px-8">
              <NavLink to="/how-it-works">Technical Details</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Development Context Section */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/40 to-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="space-y-6 scroll-animate">
              <div className="space-y-3">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">Development</span>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">Tested in Clinical Settings</h2>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Smart Lung Physio™ began as a prototype tested in ICU, hospital, and clinical environments. These early evaluations informed therapy parameters, comfort considerations, and device placement.
              </p>
              <div className="space-y-4 pt-1">
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
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-sm">{item.title}</p>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 scroll-animate">
              <div className="grid grid-cols-2 gap-3">
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
                  <div key={index} className="aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground text-center italic">
                Images from early clinical prototype evaluations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Early Observations Section */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="space-y-6 scroll-animate">
              <div className="space-y-3">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">Early Observations</span>
                <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight">Preliminary Pilot Data</h2>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Initial pilot deployments in Canadian long-term care settings have provided directional data. Formal validation studies are planned.
              </p>
              <div className="space-y-4">
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
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground font-semibold">{item.stat}</strong> {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground italic">
                Based on internal pilot observations. Not from peer-reviewed clinical trials.
              </p>
              <Button asChild size="lg" className="btn-primary rounded-full group">
                <NavLink to="/clinical-evidence" className="flex items-center gap-2">
                  View Clinical Insights
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </NavLink>
              </Button>
            </div>
            
            <div className="scroll-animate">
              <Card className="shadow-xl border-0 bg-card overflow-hidden">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-xl font-bold">Observed Trends from Pilots</h3>
                  <div className="space-y-5">
                    {[
                      {
                        label: "Fewer Hospital Transfers",
                        value: 40,
                        color: "from-primary to-primary-light"
                      },
                      {
                        label: "Fewer Acute Episodes",
                        value: 35,
                        color: "from-primary-light to-primary"
                      },
                      {
                        label: "Time Reduction",
                        value: 75,
                        color: "from-primary to-primary-dark"
                      }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-baseline">
                          <span className="text-sm font-medium text-foreground">{item.label}</span>
                          <span className="text-2xl font-bold text-primary">~{item.value}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                          <div 
                            className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out`} 
                            style={{ width: `${item.value}%` }} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground text-center pt-2 border-t border-border">
                    Preliminary observations from internal pilot deployments
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* LTC Focus Section */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="scroll-animate space-y-6">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">Purpose-Built</span>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight">Designed for Long-Term Care</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Unlike general respiratory devices, Smart Lung Physio™ was developed specifically for the long-term care environment—accounting for staffing realities, resident acuity, and operational constraints.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                The device is designed to require minimal training, integrate into existing care routines, and provide documentation for care records.
              </p>
              <Button asChild size="lg" className="btn-primary rounded-full group">
                <NavLink to="/long-term-care" className="flex items-center gap-2">
                  LTC Implementation Details
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </NavLink>
              </Button>
            </div>
            
            <div className="scroll-animate">
              <div className="grid grid-cols-2 gap-4">
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
                  <Card key={index} className="border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-md group">
                    <CardContent className="p-5 text-center space-y-3">
                      <div className="w-10 h-10 mx-auto rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-bold text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="scroll-animate">
            <Card className="border-0 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark" />
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }} />
              
              <CardContent className="relative py-16 px-8 md:py-20 md:px-16 lg:py-24 lg:px-20 text-center space-y-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-primary-foreground leading-tight max-w-3xl mx-auto">
                  Interested in Learning More?
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto text-primary-foreground/90">
                  We welcome conversations with LTC operators, clinical partners, and healthcare innovation stakeholders.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 rounded-full text-lg px-10 py-7 h-auto font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <NavLink to="/contact">Contact Us</NavLink>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full text-lg px-10 py-7 h-auto bg-transparent border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/60 font-semibold transition-all duration-300">
                    <NavLink to="/about">About Our Team</NavLink>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
