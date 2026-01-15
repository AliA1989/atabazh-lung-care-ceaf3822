import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Smartphone, Database, Shield } from "lucide-react";
import HowItWorksSection from "@/components/HowItWorksSection";
const Device = () => {
  return <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-background via-background to-secondary/10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto relative z-10 max-w-7xl">
          <div className="text-center space-y-8 mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold leading-[1.05] tracking-tight max-w-5xl mx-auto">
              Smart Lung Physio™{" "}
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                Sensor-Guided Airway Clearance
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-light px-4">
              A medical device under development designed to support assisted airway clearance in long-term care settings through real-time sensor feedback and guided workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              <Button asChild size="lg" className="hero-gradient border-0 text-lg font-semibold px-10 py-6 shadow-xl hover:shadow-[0_20px_50px_-12px_hsl(var(--primary)/0.4)] hover:scale-105 transition-all duration-300">
                <NavLink to="/contact">Learn More</NavLink>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg font-semibold px-10 py-6 border-2 border-border bg-background/80 backdrop-blur-sm hover:bg-secondary/50 hover:border-primary/30 hover:scale-105 transition-all duration-300 shadow-lg">
                <NavLink to="/how-it-works">Technical Overview</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Demonstration Image */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="container mx-auto max-w-5xl">
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent blur-[60px] rounded-full scale-110"></div>
            <div className="relative bg-gradient-to-br from-background/60 to-secondary/20 backdrop-blur-sm rounded-2xl p-6 shadow-[0_15px_60px_-15px_rgba(0,0,0,0.25)] border border-border/40">
              <img alt="Smart Lung Physio Device - Advanced respiratory care technology for long-term care" className="w-full object-contain rounded-xl" src="/lovable-uploads/01f67823-cf67-482a-af68-892844b66843.png" />
            </div>
          </div>
        </div>
      </section>

      {/* How Smart Lung Physio Works Section */}
      <HowItWorksSection />

      {/* Technology Highlights Section */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
              System Components
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto font-light leading-relaxed">
              An integrated hardware and software platform designed to support structured airway-clearance protocols in long-term care environments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Workflow App */}
            <Card className="group shadow-soft hover:shadow-medium transition-smooth border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/20">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold tracking-tight">Companion Mobile App</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  Connects via Bluetooth to provide step-by-step workflow guidance and session documentation for care staff.
                </p>
              </CardContent>
            </Card>

            {/* Clinical Data Platform */}
            <Card className="group shadow-soft hover:shadow-medium transition-smooth border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/20">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Database className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold tracking-tight">Data Dashboard</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  Cloud-based interface for viewing session data, generating reports, and supporting care documentation workflows.
                </p>
              </CardContent>
            </Card>

            {/* Medical-Grade Safety */}
            <Card className="group shadow-soft hover:shadow-medium transition-smooth border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/20">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold tracking-tight">Safety Features</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  Includes configurable force limits, SpO₂ monitoring integration, and session logging. Device is being developed to align with Health Canada Class II requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Designed for LTC Operations */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">Designed for Care Environments</h2>
          </div>

          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardContent className="p-6 lg:p-8">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-3">
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold">Structured Training Approach</h3>
                    <p className="text-base text-muted-foreground">
                      The system is designed to support caregiver onboarding with guided workflows, visual prompts, and built-in instructional content.
                    </p>
                  </div>
                  <div className="bg-secondary/50 p-6 rounded-xl">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3">✓</span>
                        <span>Intuitive touchscreen interface</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3">✓</span>
                        <span>Video tutorials built into app</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3">✓</span>
                        <span>Automated quality checks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3">✓</span>
                        <span>Remote support available 24/7</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6 lg:p-8">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="order-2 md:order-1 bg-secondary/50 p-6 rounded-xl">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3">✓</span>
                        <span>Compact, portable design</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3">✓</span>
                        <span>Battery-powered for bedside use</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3">✓</span>
                        <span>Disposable patient interfaces</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-3">✓</span>
                        <span>Easy cleaning protocols</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3 order-1 md:order-2">
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold">Portability and Hygiene</h3>
                    <p className="text-base text-muted-foreground">
                      Compact, battery-powered form factor designed for bedside use. Single-use patient interfaces and standard cleaning protocols support infection control requirements.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">Get in Touch</h2>
          <p className="text-lg text-muted-foreground">
            For clinical partnerships, pilot inquiries, or technical questions, please reach out to our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="hero-gradient border-0 text-lg px-8">
              <NavLink to="/contact">Contact Us</NavLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <NavLink to="/how-it-works">Technical Overview</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Device;