import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Cpu, Smartphone, Waves, Gauge, Database, Shield } from "lucide-react";
import heroDevice from "@/assets/hero-device.jpg";
const Device = () => {
  return <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Premium medical background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight max-w-5xl mx-auto">
              Respiratory Care,{" "}
              <span className="block bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                Reimagined for Long-Term Care
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed font-light">
              Advanced, sensor-guided airway clearance technology that delivers consistent clinical outcomes while reducing caregiver burden in long-term care settings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="hero-gradient border-0 text-base px-10 py-6 shadow-lg hover:shadow-xl transition-all">
                <NavLink to="/contact">Request a Demo</NavLink>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-10 py-6 border-2 hover:bg-secondary/80 transition-all">
                <NavLink to="/how-it-works">How It Works</NavLink>
              </Button>
            </div>
          </div>
          
          {/* Device Image with Premium Styling */}
          <div className="max-w-5xl mx-auto relative">
            {/* Subtle premium shadow layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent blur-3xl rounded-full scale-110"></div>
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/5 to-accent/10 blur-2xl rounded-3xl"></div>
            
            <div className="relative">
              <img alt="Smart Lung Physio Device" className="relative w-full rounded-2xl shadow-2xl drop-shadow-2xl object-contain" src="/lovable-uploads/69db34aa-9c8e-441d-946d-5466db3b2d23.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Advanced Technology</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Medical-grade hardware meets intelligent software for optimal respiratory therapy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center">
                  <Cpu className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold">Real-Time Sensors</h3>
                <p className="text-muted-foreground">
                  Multi-parameter respiratory monitoring including flow rate, pressure, volume, and oxygen saturation. Continuous feedback adjusts therapy in real-time.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center">
                  <Waves className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold">Adaptive Oscillation</h3>
                <p className="text-muted-foreground">
                  Variable frequency (5-40 Hz) and amplitude oscillating positive expiratory pressure. Personalized to each resident's lung mechanics and tolerance.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center">
                  <Gauge className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold">Precise Control</h3>
                <p className="text-muted-foreground">
                  Medical-grade pneumatic system delivers consistent, calibrated pressure (10-25 cmH2O) with safety limits and automatic shutoff protocols.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center">
                  <Smartphone className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold">Mobile App</h3>
                <p className="text-muted-foreground">
                  Intuitive caregiver interface guides therapy sessions step-by-step. Bluetooth connectivity enables real-time monitoring and data sync to cloud dashboard.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center">
                  <Database className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold">Clinical Dashboard</h3>
                <p className="text-muted-foreground">
                  Cloud-based analytics platform tracks resident progress, therapy adherence, and outcome trends. Generate reports for physicians and regulatory compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center">
                  <Shield className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold">Safety First</h3>
                <p className="text-muted-foreground">
                  Multiple redundant safety systems, infection control features (disposable patient interfaces), and Health Canada medical device certification in progress.
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