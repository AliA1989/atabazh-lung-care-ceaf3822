import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Cpu, Smartphone, Waves, Gauge, Database, Shield } from "lucide-react";
import heroDevice from "@/assets/hero-device.jpg";
import HowItWorksSection from "@/components/HowItWorksSection";

const Device = () => {
  return <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-background via-background to-secondary/10">
        {/* Premium medical background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto relative z-10 max-w-7xl">
          {/* Text Content */}
          <div className="text-center space-y-10 mb-20 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-extrabold leading-[1.05] tracking-tight max-w-6xl mx-auto">
              Respiratory Care,{" "}
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                Reimagined for Long-Term Care
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 max-w-4xl mx-auto leading-relaxed font-light px-4">
              Advanced, sensor-guided airway clearance technology that delivers consistent clinical outcomes while reducing caregiver burden in long-term care settings.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6 animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              <Button asChild size="lg" className="hero-gradient border-0 text-lg font-semibold px-12 py-7 shadow-2xl hover:shadow-[0_20px_50px_-12px_hsl(var(--primary)/0.4)] hover:scale-105 transition-all duration-300">
                <NavLink to="/contact">Request a Demo</NavLink>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg font-semibold px-12 py-7 border-2 border-border bg-background/80 backdrop-blur-sm hover:bg-secondary/50 hover:border-primary/30 hover:scale-105 transition-all duration-300 shadow-lg">
                <NavLink to="/how-it-works">How It Works</NavLink>
              </Button>
            </div>
          </div>
          
          {/* Device Image with Premium Styling */}
          <div className="max-w-6xl mx-auto relative animate-fade-in" style={{
          animationDelay: "0.4s"
        }}>
            {/* Enhanced shadow layers for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/10 to-transparent blur-[100px] rounded-full scale-110"></div>
            <div className="absolute -inset-8 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 blur-3xl rounded-3xl"></div>
            
            <div className="relative bg-gradient-to-br from-background/40 to-secondary/20 backdrop-blur-sm rounded-3xl p-8 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.3)] border border-border/50">
              <img alt="Smart Lung Physio Device - Advanced respiratory care technology for long-term care" className="relative w-full shadow-2xl object-contain hover:scale-[1.02] transition-transform duration-500 rounded-2xl" src="/lovable-uploads/b37590ae-6519-4ad1-aed4-d406ee701f4b.png" />
            </div>
          </div>
        </div>
      </section>

      {/* How Smart Lung Physio Works Section */}
      <HowItWorksSection />

      {/* Clinical Technology Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/5 to-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-6 mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight">
              Sensor-Guided Chest Percussion Technology
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto font-light leading-relaxed">
              Force-sensing technology guides manual chest physiotherapy for consistent airway clearance in long-term care
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Force Sensor Percussion */}
            <Card className="group shadow-soft hover:shadow-medium transition-smooth border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/20">
              <CardContent className="p-10 space-y-5">
                <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Gauge className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold tracking-tight">Force Sensor Percussion</h3>
                <p className="text-foreground/70 leading-relaxed text-base">
                  Proprietary force-sensing resistor (FSR) provides real-time feedback during manual chest percussion, guiding caregivers to apply optimal pressure and rhythm for effective mucus mobilization.
                </p>
              </CardContent>
            </Card>

            {/* SpO₂-Integrated Safety */}
            <Card className="group shadow-soft hover:shadow-medium transition-smooth border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/20">
              <CardContent className="p-10 space-y-5">
                <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold tracking-tight">SpO₂-Integrated Safety</h3>
                <p className="text-foreground/70 leading-relaxed text-base">
                  Continuous pulse oximetry monitoring throughout therapy sessions. Visual and audio alerts notify caregivers if oxygen saturation drops, ensuring resident safety during treatment.
                </p>
              </CardContent>
            </Card>

            {/* Guided Therapy Algorithm */}
            <Card className="group shadow-soft hover:shadow-medium transition-smooth border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/20">
              <CardContent className="p-10 space-y-5">
                <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Waves className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold tracking-tight">Guided Therapy Algorithm</h3>
                <p className="text-foreground/70 leading-relaxed text-base">
                  Intelligent algorithm analyzes FSR and SpO₂ data to provide step-by-step guidance, ensuring caregivers deliver consistent, evidence-based chest physiotherapy across all shifts and skill levels.
                </p>
              </CardContent>
            </Card>

            {/* Caregiver Workflow App */}
            <Card className="group shadow-soft hover:shadow-medium transition-smooth border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/20">
              <CardContent className="p-10 space-y-5">
                <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold tracking-tight">Caregiver Workflow App</h3>
                <p className="text-foreground/70 leading-relaxed text-base">
                  Mobile app connects to the device via Bluetooth, guiding PSWs, RPNs, and RNs through each treatment session with real-time sensor feedback and automated session documentation.
                </p>
              </CardContent>
            </Card>

            {/* Clinical Data Platform */}
            <Card className="group shadow-soft hover:shadow-medium transition-smooth border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/20">
              <CardContent className="p-10 space-y-5">
                <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Database className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold tracking-tight">Clinical Data Platform</h3>
                <p className="text-foreground/70 leading-relaxed text-base">
                  Cloud dashboard aggregates treatment data, tracks resident progress, and monitors adherence trends. Generates physician reports and documentation for care plans and regulatory compliance.
                </p>
              </CardContent>
            </Card>

            {/* Medical-Grade Safety */}
            <Card className="group shadow-soft hover:shadow-medium transition-smooth border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/20">
              <CardContent className="p-10 space-y-5">
                <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold tracking-tight">Medical-Grade Safety</h3>
                <p className="text-foreground/70 leading-relaxed text-base">
                  Built-in safety protocols include force limits, SpO₂ thresholds, and automated session logging. Designed to meet Health Canada Class II medical device requirements for LTC environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Device Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Designed for LTC Operations</h2>
          </div>

          <div className="space-y-8">
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-heading font-bold">Minimal Training Required</h3>
                    <p className="text-lg text-muted-foreground">
                      Caregivers learn to operate the device in under 30 minutes. The mobile app provides step-by-step guidance through each therapy session, with visual cues and audio prompts ensuring correct technique.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      No specialized respiratory therapy certification needed—PSWs, RPNs, and RNs can all deliver effective treatment.
                    </p>
                  </div>
                  <div className="bg-secondary/50 p-8 rounded-xl">
                    <ul className="space-y-3">
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
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1 bg-secondary/50 p-8 rounded-xl">
                    <ul className="space-y-3">
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
                  <div className="space-y-4 order-1 md:order-2">
                    <h3 className="text-3xl font-heading font-bold">Workflow Integration</h3>
                    <p className="text-lg text-muted-foreground">
                      Smart Lung Physio™ fits seamlessly into existing care routines. The portable device can be wheeled room-to-room, with therapy sessions scheduled around meals, medications, and other daily activities.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Infection control is built-in with single-use patient interfaces and straightforward cleaning procedures that meet regulatory standards.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">See It in Action</h2>
          <p className="text-xl text-muted-foreground">
            Request a demonstration at your facility or schedule a virtual walkthrough with our clinical team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="hero-gradient border-0 text-lg px-8">
              <NavLink to="/contact">Request a Demo</NavLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <NavLink to="/how-it-works">Learn How It Works</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Device;