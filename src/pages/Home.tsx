import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Activity, Clock, TrendingUp, Shield, CheckCircle, BarChart3, Users, Heart, ArrowRight, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

const Home = () => {
  // Scroll animation observer
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-accent/30" />
        
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23004E8C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating gradient orbs */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-primary-light/10 rounded-full blur-3xl animate-float" />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left: Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 animate-fade-in-down">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium text-primary">Health Canada Class II (pending)</span>
                </div>
                
                <h1 className="text-[3.25rem] md:text-[3.75rem] lg:text-[4.25rem] font-heading font-extrabold leading-[1.05] tracking-tight opacity-0 animate-fade-in-up">
                  Respiratory Care,{" "}
                  <span className="relative">
                    <span className="gradient-text">Reimagined</span>
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                      <path d="M1 5.5C47 2 97 2 199 5.5" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" className="opacity-30" />
                    </svg>
                  </span>
                  <br />
                  <span className="text-foreground/90">for Long-Term Care.</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-xl leading-relaxed opacity-0 animate-fade-in-up delay-200">
                  Sensor-guided airway-clearance technology that reduces caregiver burden while delivering superior outcomes.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up delay-300">
                <Button 
                  asChild 
                  size="lg" 
                  className="btn-primary rounded-full text-base px-8 py-6 h-auto group"
                >
                  <NavLink to="/contact" className="flex items-center gap-2">
                    Request a Demo
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </NavLink>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="btn-outline-primary rounded-full text-base px-8 py-6 h-auto"
                >
                  <NavLink to="/how-it-works">How It Works</NavLink>
                </Button>
              </div>
            </div>
            
            {/* Right: Device Image */}
            <div className="relative opacity-0 animate-slide-in-right delay-400">
              {/* Glow effect behind device */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-light/10 blur-3xl scale-110 animate-pulse-soft" />
              
              {/* Device image container with parallax effect */}
              <div className="relative animate-float">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl" />
                <img 
                  alt="Smart Lung Physio Device with Mobile App" 
                  className="relative w-full rounded-2xl shadow-large"
                  src="/lovable-uploads/7f9eeca4-1724-4aec-941a-3076a034e2f7.png" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section - Multi-column */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold">The Challenge</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Long-term care facilities face critical respiratory care obstacles
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: Users,
                title: "Staff Shortages",
                description: "Severe understaffing makes time-intensive manual chest physiotherapy nearly impossible to deliver consistently."
              },
              {
                icon: Clock,
                title: "Time Constraints",
                description: "Traditional airway clearance requires 20+ minutes per session—time that overstretched caregivers simply don't have."
              },
              {
                icon: Heart,
                title: "High-Risk Residents",
                description: "Frail elderly residents face elevated pneumonia risk, requiring proactive respiratory intervention."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="scroll-animate group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1">
                  <CardContent className="p-8 space-y-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 scroll-animate">
              <div className="space-y-4">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">Our Solution</span>
                <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold leading-tight">
                  Smart Lung Physio™
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The first automated airway-clearance device designed specifically for long-term care. Using advanced sensors and AI-guided protocols, it delivers personalized 5-minute therapy sessions that require minimal staff training.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The system automatically assesses each resident's respiratory status, adapts treatment in real-time, and generates objective clinical data for care teams.
              </p>
              <Button asChild size="lg" className="btn-primary rounded-full group">
                <NavLink to="/device" className="flex items-center gap-2">
                  Explore the Device
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </NavLink>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: Activity, title: "Sensor-Guided", desc: "Real-time respiratory monitoring and adaptive therapy" },
                { icon: Clock, title: "5 Minutes", desc: "Complete therapy session vs. 20+ min manual" },
                { icon: Shield, title: "Easy to Use", desc: "Minimal training required for care staff" },
                { icon: BarChart3, title: "Data-Driven", desc: "Objective clinical insights for care teams" }
              ].map((item, index) => (
                <div key={index} className="scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Card className="h-full group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/20">
                    <CardContent className="p-6 space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-heading font-bold text-lg">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16 scroll-animate">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold">Key Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforming respiratory care delivery in long-term care homes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: Clock,
                title: "Save Caregiver Time",
                description: "Reduce therapy time from 20+ minutes to just 5 minutes per session. Free up staff to focus on other critical care tasks while maintaining superior respiratory outcomes."
              },
              {
                icon: TrendingUp,
                title: "Better Respiratory Outcomes",
                description: "Consistent, evidence-based therapy delivery reduces pneumonia risk and respiratory complications. Personalized treatment adapts to each resident's needs in real-time."
              },
              {
                icon: BarChart3,
                title: "Objective Clinical Data",
                description: "Track respiratory status trends, therapy effectiveness, and clinical outcomes. Give physicians and care teams the data they need for informed decision-making."
              }
            ].map((item, index) => (
              <div key={index} className="scroll-animate" style={{ animationDelay: `${index * 0.15}s` }}>
                <Card className="h-full group border-2 border-transparent hover:border-primary/10 transition-all duration-500 hover:shadow-large hover:-translate-y-2 bg-card">
                  <CardContent className="p-10 space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                      <item.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-20 scroll-animate">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">Simple Process</span>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold">How It Works</h2>
            <p className="text-xl text-muted-foreground">Simple, effective respiratory care in three steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
            {/* Connection lines between steps */}
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
            
            {[
              { step: "1", title: "Assess", description: "Smart sensors automatically evaluate the resident's respiratory status and lung capacity before each session." },
              { step: "2", title: "Treat", description: "Device delivers personalized airway clearance therapy, adapting pressure and rhythm in real-time based on sensor feedback." },
              { step: "3", title: "Review", description: "Clinical data syncs to the cloud dashboard. Care teams review progress, trends, and outcomes across all residents." }
            ].map((item, index) => (
              <div key={index} className="scroll-animate relative" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-center space-y-6 group">
                  <div className="relative mx-auto">
                    <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-4xl font-heading font-bold text-primary-foreground shadow-large group-hover:scale-110 transition-all duration-300 group-hover:shadow-glow">
                      {item.step}
                    </div>
                    {/* Animated ring */}
                    <div className="absolute inset-0 w-28 h-28 mx-auto rounded-full border-2 border-primary/20 animate-pulse-soft" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 scroll-animate">
            <Button asChild size="lg" variant="outline" className="rounded-full text-lg px-8 py-6 h-auto border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <NavLink to="/how-it-works">Learn More About the Technology</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Clinical Use Section */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/40 to-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Text Content */}
            <div className="space-y-8 scroll-animate">
              <div className="space-y-4">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">Proven in Practice</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">Clinical Use in Real Care Settings</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Smart Lung Physio™ began as a bedside airway-clearance prototype tested directly in ICU, hospital, and clinical environments. These early evaluations helped refine therapy strength, comfort, and placement.
              </p>
              <div className="space-y-5 pt-2">
                {[
                  { title: "Bedside Therapy", desc: "Early prototypes were tested directly at the bedside with real patients and respiratory teams." },
                  { title: "Multiple Positions", desc: "Supine, seated, and forward-leaning positions were evaluated for comfort and secretion clearance." },
                  { title: "Prototype to Product", desc: "Clinical insights shaped the design of today's Smart Lung Physio™, optimized for long-term care workflows." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold">{item.title}</p>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: 2x2 Image Grid */}
            <div className="space-y-5 scroll-animate">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { src: "/lovable-uploads/clinical-icu-monitoring.png", alt: "ICU patient receiving chest therapy with monitoring equipment" },
                  { src: "/lovable-uploads/clinical-female-therapy.png", alt: "Female patient receiving respiratory therapy" },
                  { src: "/lovable-uploads/clinical-supine-therapy.png", alt: "Supine patient receiving chest therapy" },
                  { src: "/lovable-uploads/d1085550-1fd7-4426-a23c-d2f8b8d7324a.png", alt: "Seated patient receiving shoulder therapy" }
                ].map((img, index) => (
                  <div 
                    key={index} 
                    className="aspect-square overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group"
                  >
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center italic">
                Images shown are from early clinical prototype evaluations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Evidence Section */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 scroll-animate">
              <div className="space-y-4">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">Research & Results</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">Backed by Clinical Evidence</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Smart Lung Physio™ has been validated in pilot studies across multiple long-term care facilities, demonstrating significant improvements in key clinical outcomes.
              </p>
              <div className="space-y-5">
                {[
                  { stat: "42% reduction", desc: "in hospital transfers for respiratory complications" },
                  { stat: "35% fewer", desc: "acute respiratory exacerbations among high-risk residents" },
                  { stat: "75% time savings", desc: "for caregivers compared to manual chest physiotherapy" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground font-semibold">{item.stat}</strong> {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="btn-primary rounded-full group">
                <NavLink to="/clinical-evidence" className="flex items-center gap-2">
                  View Full Clinical Data
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </NavLink>
              </Button>
            </div>
            
            <div className="scroll-animate">
              <Card className="shadow-large border-0 bg-card overflow-hidden">
                <CardContent className="p-10 space-y-8">
                  <h3 className="text-2xl font-heading font-bold">Pilot Study Highlights</h3>
                  <div className="space-y-6">
                    {[
                      { label: "Hospital Transfer Reduction", value: 42 },
                      { label: "Exacerbation Reduction", value: 35 },
                      { label: "Caregiver Time Savings", value: 75 }
                    ].map((item, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex justify-between items-baseline">
                          <span className="text-sm font-medium text-foreground">{item.label}</span>
                          <span className="text-2xl font-heading font-bold text-primary">{item.value}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                          <div 
                            className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light transition-all duration-1000 ease-out"
                            style={{ width: `${item.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose-Built Section */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto max-w-4xl text-center scroll-animate">
          <div className="space-y-8">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">Designed for You</span>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold leading-tight">Purpose-Built for Long-Term Care</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Unlike generic medical devices, Smart Lung Physio™ was designed from the ground up to integrate seamlessly into LTC workflows. We understand the unique challenges you face—staffing constraints, resident acuity, regulatory requirements, and budget pressures.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Our device requires minimal training, fits into existing care routines, and provides the documentation and outcomes data that administrators and medical directors need.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="btn-primary rounded-full text-lg px-10 py-6 h-auto group">
                <NavLink to="/long-term-care" className="flex items-center gap-2">
                  Learn More About LTC Integration
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="scroll-animate">
            <Card className="border-0 overflow-hidden relative">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark" />
              
              {/* Pattern overlay */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
              
              <CardContent className="relative p-12 md:p-16 lg:p-20 text-center space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold text-primary-foreground leading-tight">
                  Ready to Transform Your Respiratory Care?
                </h2>
                <p className="text-xl md:text-2xl max-w-2xl mx-auto text-primary-foreground/90">
                  Join leading long-term care homes across Canada in delivering better respiratory outcomes with less staff time.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 rounded-full text-lg px-10 py-6 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <NavLink to="/contact">Request a Pilot Program</NavLink>
                  </Button>
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline" 
                    className="rounded-full text-lg px-10 py-6 h-auto bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all duration-300"
                  >
                    <a href="#" download>Download One-Pager</a>
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
