import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Activity, Clock, TrendingUp, Shield, CheckCircle, BarChart3, Users, Heart, ArrowRight, ChevronRight, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import heroProductComposition from "@/assets/hero-product-composition.png";
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
  return <div className="min-h-screen overflow-hidden">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Clean soft grey background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f7] via-[#f0f0f2] to-[#e8e8ea]" />

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column: Content */}
            <div className="space-y-6 lg:space-y-7 animate-fade-in order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-border/30">
                <span className="text-sm font-medium text-muted-foreground">Health Canada Physio™ — Sensor-Guided (pending)</span>
              </div>
              
              {/* Headline */}
              <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-heading font-extrabold leading-[1.05] tracking-tight text-foreground">
                Reinventing Airway<br />
                Clearance for<br />
                Long-Term Care
              </h1>
              
              {/* Subheadline */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Sensor-guided airway-clearance technology that reduces caregiver workload while improving resident outcomes.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-base font-semibold px-8 py-6 h-auto shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <NavLink to="/contact">
                    Request a Demo
                  </NavLink>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white border-2 border-primary text-primary hover:bg-primary/5 rounded-full text-base font-semibold px-8 py-6 h-auto hover:scale-[1.02] transition-all duration-300">
                  <NavLink to="/how-it-works">How It Works</NavLink>
                </Button>
              </div>

              {/* Trust Sentence */}
              <p className="text-sm text-muted-foreground/80 font-medium pt-2">
                Trusted by clinicians, built for caregivers, designed for LTC.
              </p>
            </div>

            {/* Right Column: Product Composition */}
            <div className="relative order-1 lg:order-2 flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-lg lg:max-w-none lg:w-[120%] lg:-mr-20">
                <img alt="Smart Lung Physio™ device with companion mobile app screens showing real-time monitoring" className="w-full h-auto object-contain drop-shadow-2xl" src="/lovable-uploads/21bfe8cb-1f68-4e14-a28c-13476bc1d645.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section - Tighter Layout */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto">
          <div className="text-center space-y-3 mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">The Challenge</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Long-term care facilities face critical respiratory care obstacles
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {[{
            icon: Users,
            title: "Staff Shortages",
            description: "Severe understaffing makes time-intensive manual chest physiotherapy nearly impossible to deliver consistently."
          }, {
            icon: Clock,
            title: "Time Constraints",
            description: "Traditional airway clearance requires 20+ minutes per session—time that overstretched caregivers simply don't have."
          }, {
            icon: Heart,
            title: "High-Risk Residents",
            description: "Frail elderly residents face elevated pneumonia risk, requiring proactive respiratory intervention."
          }].map((item, index) => <div key={index} className="scroll-animate group" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <Card className="h-full bg-card/60 backdrop-blur-sm border-border/40 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-6 lg:p-7 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-bold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </div>)}
          </div>
        </div>
      </section>

      {/* Our Solution Section - Tighter, Larger Image */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="space-y-6 scroll-animate">
              <div className="space-y-3">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">Our Solution</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
                  Smart Lung Physio™
                </h2>
              </div>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                The first automated airway-clearance device designed specifically for long-term care. Using advanced sensors and AI-guided protocols, it delivers personalized 5-minute therapy sessions that require minimal staff training.
              </p>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                The system automatically assesses each resident's respiratory status, adapts treatment in real-time, and generates objective clinical data for care teams.
              </p>
              <Button asChild size="lg" className="btn-primary rounded-full group">
                <NavLink to="/device" className="flex items-center gap-2">
                  Explore the Device
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </NavLink>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[{
              icon: Activity,
              title: "Sensor-Guided",
              desc: "Real-time respiratory monitoring and adaptive therapy"
            }, {
              icon: Clock,
              title: "5 Minutes",
              desc: "Complete therapy session vs. 20+ min manual"
            }, {
              icon: Shield,
              title: "Easy to Use",
              desc: "Minimal training required for care staff"
            }, {
              icon: BarChart3,
              title: "Data-Driven",
              desc: "Objective clinical insights for care teams"
            }].map((item, index) => <div key={index} className="scroll-animate" style={{
              animationDelay: `${index * 0.08}s`
            }}>
                  <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/40 hover:border-primary/25 bg-card/80">
                    <CardContent className="p-5 space-y-3">
                      <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <h3 className="font-heading font-bold text-base">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section - Tighter with Enhanced Hover */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto">
          <div className="text-center space-y-3 mb-12 scroll-animate">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">Key Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforming respiratory care delivery in long-term care homes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {[{
            icon: Clock,
            title: "Save Caregiver Time",
            description: "Reduce therapy time from 20+ minutes to just 5 minutes per session. Free up staff to focus on other critical care tasks."
          }, {
            icon: TrendingUp,
            title: "Better Outcomes",
            description: "Consistent, evidence-based therapy delivery reduces pneumonia risk. Personalized treatment adapts to each resident's needs."
          }, {
            icon: BarChart3,
            title: "Clinical Data",
            description: "Track respiratory status trends, therapy effectiveness, and outcomes. Give care teams the data they need for informed decisions."
          }].map((item, index) => <div key={index} className="scroll-animate" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <Card className="h-full group border border-transparent hover:border-primary/15 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card">
                  <CardContent className="p-7 lg:p-8 space-y-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                      <item.icon className="h-7 w-7 text-primary-foreground group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-heading font-bold">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </div>)}
          </div>
        </div>
      </section>

      {/* How It Works Section - Larger Numbers, Arrows */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-3 mb-14 scroll-animate">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">Simple Process</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">How It Works</h2>
            <p className="text-lg text-muted-foreground">Simple, effective respiratory care in three steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
            {/* Connection arrows */}
            <div className="hidden md:flex absolute top-[60px] left-[30%] right-[30%] items-center justify-between px-8 z-0">
              <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/30 to-primary/50" />
              <ChevronRight className="w-5 h-5 text-primary/50 -mx-1" />
              <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/50 to-primary/30" />
              <ChevronRight className="w-5 h-5 text-primary/50 -mx-1" />
              <div className="flex-1 h-0.5 bg-primary/30" />
            </div>
            
            {[{
            step: "1",
            title: "Assess",
            description: "Smart sensors automatically evaluate the resident's respiratory status and lung capacity before each session."
          }, {
            step: "2",
            title: "Treat",
            description: "Device delivers personalized airway clearance therapy, adapting pressure and rhythm in real-time based on sensor feedback."
          }, {
            step: "3",
            title: "Review",
            description: "Clinical data syncs to the cloud dashboard. Care teams review progress, trends, and outcomes across all residents."
          }].map((item, index) => <div key={index} className="scroll-animate relative z-10" style={{
            animationDelay: `${index * 0.15}s`
          }}>
                <div className="text-center space-y-5 group">
                  <div className="relative mx-auto w-fit">
                    <div className="w-[120px] h-[120px] mx-auto rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-5xl font-heading font-bold text-primary-foreground shadow-xl group-hover:scale-110 transition-all duration-300 group-hover:shadow-glow">
                      {item.step}
                    </div>
                    <div className="absolute inset-0 w-[120px] h-[120px] mx-auto rounded-full border-2 border-primary/20 animate-pulse-soft" />
                  </div>
                  <h3 className="text-xl font-heading font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px] mx-auto">{item.description}</p>
                </div>
              </div>)}
          </div>
          
          <div className="text-center mt-12 scroll-animate">
            <Button asChild size="lg" variant="outline" className="rounded-full text-base px-8 py-5 h-auto border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <NavLink to="/how-it-works">Learn More About the Technology</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Clinical Use Section - Tighter Grid */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/40 to-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className="space-y-6 scroll-animate">
              <div className="space-y-3">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">Proven in Practice</span>
                <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold leading-tight">Clinical Use in Real Care Settings</h2>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Smart Lung Physio™ began as a bedside airway-clearance prototype tested directly in ICU, hospital, and clinical environments. These early evaluations helped refine therapy strength, comfort, and placement.
              </p>
              <div className="space-y-4 pt-1">
                {[{
                title: "Bedside Therapy",
                desc: "Early prototypes were tested directly at the bedside with real patients and respiratory teams."
              }, {
                title: "Multiple Positions",
                desc: "Supine, seated, and forward-leaning positions were evaluated for comfort and secretion clearance."
              }, {
                title: "Prototype to Product",
                desc: "Clinical insights shaped the design of today's Smart Lung Physio™, optimized for long-term care workflows."
              }].map((item, index) => <div key={index} className="flex items-start space-x-3 group">
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-sm">{item.title}</p>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>)}
              </div>
            </div>

            {/* Right Column: 2x2 Image Grid - Tighter */}
            <div className="space-y-3 scroll-animate">
              <div className="grid grid-cols-2 gap-3">
                {[{
                src: "/clinical-icu-monitoring-anon.png",
                alt: "Clinician using Smart Lung Physio™ device on patient's chest in an ICU setting with monitoring equipment"
              }, {
                src: "/clinical-female-therapy-anon.png",
                alt: "Patient receiving Smart Lung Physio™ respiratory therapy in a clinical setting"
              }, {
                src: "/clinical-supine-therapy-anon.png",
                alt: "Clinician administering Smart Lung Physio™ chest therapy to supine patient"
              }, {
                src: "/clinical-seated-therapy-anon.png",
                alt: "Clinician using Smart Lung Physio™ device on seated patient's upper chest"
              }].map((img, index) => <div key={index} className="aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>)}
              </div>
              <p className="text-[11px] text-muted-foreground/70 text-center mt-2">
                Faces are anonymized for privacy. Images are from early Smart Lung Physio™ prototype evaluations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Evidence Section - More Compact */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="space-y-6 scroll-animate">
              <div className="space-y-3">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">Research & Results</span>
                <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold leading-tight">Backed by Clinical Evidence</h2>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Smart Lung Physio™ has been validated in pilot studies across multiple long-term care facilities, demonstrating significant improvements in key clinical outcomes.
              </p>
              <div className="space-y-4">
                {[{
                stat: "42% reduction",
                desc: "in hospital transfers for respiratory complications"
              }, {
                stat: "35% fewer",
                desc: "acute respiratory exacerbations among high-risk residents"
              }, {
                stat: "75% time savings",
                desc: "for caregivers compared to manual chest physiotherapy"
              }].map((item, index) => <div key={index} className="flex items-start space-x-3 group">
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground font-semibold">{item.stat}</strong> {item.desc}
                    </p>
                  </div>)}
              </div>
              <Button asChild size="lg" className="btn-primary rounded-full group">
                <NavLink to="/clinical-evidence" className="flex items-center gap-2">
                  View Full Clinical Data
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </NavLink>
              </Button>
            </div>
            
            <div className="scroll-animate">
              <Card className="shadow-xl border-0 bg-card overflow-hidden">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-xl font-heading font-bold">Pilot Study Highlights</h3>
                  <div className="space-y-5">
                    {[{
                    label: "Hospital Transfer Reduction",
                    value: 42,
                    color: "from-primary to-primary-light"
                  }, {
                    label: "Exacerbation Reduction",
                    value: 35,
                    color: "from-primary-light to-primary"
                  }, {
                    label: "Caregiver Time Savings",
                    value: 75,
                    color: "from-primary to-primary-dark"
                  }].map((item, index) => <div key={index} className="space-y-2">
                        <div className="flex justify-between items-baseline">
                          <span className="text-sm font-medium text-foreground">{item.label}</span>
                          <span className="text-2xl font-heading font-bold text-primary">{item.value}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                          <div className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out`} style={{
                        width: `${item.value}%`
                      }} />
                        </div>
                      </div>)}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose-Built Section - With Visual */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="scroll-animate space-y-6">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">Designed for You</span>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold leading-tight">Purpose-Built for Long-Term Care</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Unlike generic medical devices, Smart Lung Physio™ was designed from the ground up to integrate seamlessly into LTC workflows. We understand the unique challenges you face—staffing constraints, resident acuity, regulatory requirements, and budget pressures.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Our device requires minimal training, fits into existing care routines, and provides the documentation and outcomes data that administrators and medical directors need.
              </p>
              <Button asChild size="lg" className="btn-primary rounded-full group">
                <NavLink to="/long-term-care" className="flex items-center gap-2">
                  Learn More About LTC Integration
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </NavLink>
              </Button>
            </div>
            
            <div className="scroll-animate">
              <div className="grid grid-cols-2 gap-4">
                {[{
                icon: Zap,
                title: "Quick Setup",
                desc: "Deploy in minutes, not weeks"
              }, {
                icon: Shield,
                title: "Compliant",
                desc: "Meets regulatory requirements"
              }, {
                icon: Users,
                title: "Team-Ready",
                desc: "Minimal training needed"
              }, {
                icon: BarChart3,
                title: "Documented",
                desc: "Auto-generated reports"
              }].map((item, index) => <Card key={index} className="border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-md group">
                    <CardContent className="p-5 text-center space-y-3">
                      <div className="w-10 h-10 mx-auto rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-heading font-bold text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Much Larger and Impactful */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="scroll-animate">
            <Card className="border-0 overflow-hidden relative">
              {/* Bold gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark" />
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
              
              <CardContent className="relative py-16 px-8 md:py-20 md:px-16 lg:py-24 lg:px-20 text-center space-y-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-heading font-bold text-primary-foreground leading-tight max-w-3xl mx-auto">
                  Ready to Transform Your Respiratory Care?
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto text-primary-foreground/90">
                  Join leading long-term care homes across Canada in delivering better respiratory outcomes with less staff time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 rounded-full text-lg px-10 py-7 h-auto font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <NavLink to="/contact">Request a Pilot Program</NavLink>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full text-lg px-10 py-7 h-auto bg-transparent border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/60 font-semibold transition-all duration-300">
                    <a href="#" download>Download One-Pager</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;