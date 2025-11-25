import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Activity, Clock, TrendingUp, Shield, CheckCircle, BarChart3 } from "lucide-react";
import heroDevice from "@/assets/hero-device.jpg";
const Home = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        {/* Wave-airflow pattern in light grey behind text area */}
        <div className="absolute inset-0 bg-[#F5F5F5] pointer-events-none"></div>
        <div className="absolute inset-0 opacity-100" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='80' viewBox='0 0 120 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40 Q 15 25, 30 40 T 60 40 T 90 40 T 120 40' stroke='%23E0E0E0' stroke-width='0.8' fill='none' opacity='0.6'/%3E%3Cpath d='M0 25 Q 15 10, 30 25 T 60 25 T 90 25 T 120 25' stroke='%23E0E0E0' stroke-width='0.6' fill='none' opacity='0.4'/%3E%3Cpath d='M0 55 Q 15 40, 30 55 T 60 55 T 90 55 T 120 55' stroke='%23E0E0E0' stroke-width='0.6' fill='none' opacity='0.4'/%3E%3Cpath d='M0 15 Q 15 5, 30 15 T 60 15 T 90 15 T 120 15' stroke='%23EEEEEE' stroke-width='0.4' fill='none' opacity='0.3'/%3E%3Cpath d='M0 65 Q 15 50, 30 65 T 60 65 T 90 65 T 120 65' stroke='%23EEEEEE' stroke-width='0.4' fill='none' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: "240px 160px",
          backgroundRepeat: "repeat"
        }}></div>
        
        {/* Diagonal gradient overlay from brand-blue at 10% opacity to white */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(135deg, rgba(0, 78, 140, 0.1) 0%, rgba(255, 255, 255, 0) 100%)"
        }}></div>
        
        {/* Mobile: simplified pattern */}
        <div className="absolute inset-0 opacity-100 md:opacity-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='60' viewBox='0 0 80 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 Q 10 20, 20 30 T 40 30 T 60 30 T 80 30' stroke='%23E0E0E0' stroke-width='0.6' fill='none' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "160px 120px",
          backgroundRepeat: "repeat"
        }}></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-[3rem] md:text-[3.25rem] lg:text-[3.5rem] font-heading font-bold leading-[1.1] tracking-tight">
                  Respiratory Care,{" "}
                  <span className="block font-extrabold" style={{ color: "#003D6E" }}>
                    Reimagined
                  </span>
                  {" "}for Long-Term Care.
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground/90 max-w-2xl leading-relaxed">
                  Advanced sensor-guided airway-clearance technology designed to reduce caregiver burden while delivering superior respiratory outcomes.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-[#004e8c] text-white hover:bg-[#003D6E] text-base px-10 py-6 shadow-lg hover:shadow-xl transition-all">
                  <NavLink to="/contact">Request a Demo</NavLink>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white text-[#004e8c] border-2 border-[#004e8c] hover:bg-[#F5F5F5] text-base px-10 py-6 transition-all">
                  <NavLink to="/how-it-works">How It Works</NavLink>
                </Button>
              </div>
              
              {/* Mobile Trusted Badge */}
              <div className="lg:hidden pt-4">
                <div className="bg-card/90 backdrop-blur-sm border border-primary/20 rounded-full px-5 py-2.5 shadow-soft inline-block">
                  <p className="text-xs font-medium text-foreground/80 tracking-wide">
                    Health Canada Class II (pending) • Canadian-Made
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right: Device Image */}
            <div className="relative animate-fade-in lg:scale-110" style={{
              animationDelay: "0.2s"
            }}>
              {/* Soft gradient behind device for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f9faff]/40 via-white/30 to-white/10 blur-2xl rounded-3xl scale-105"></div>
              
              {/* Device image - slightly larger with crisp drop shadow and 12px rounded corners */}
              <div className="relative">
                <img 
                  alt="Smart Lung Physio Device with Mobile App" 
                  className="relative w-full rounded-xl" 
                  style={{
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                    borderRadius: "12px"
                  }}
                  src="/lovable-uploads/7f9eeca4-1724-4aec-941a-3076a034e2f7.png" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">The Challenge</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Long-term care homes face critical respiratory care challenges: severe staff shortages, time-consuming manual chest physiotherapy, and high pneumonia risk among frail residents. Traditional airway clearance requires specialized training and 20+ minutes per session—time that overstretched caregivers simply don't have.
          </p>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">Our Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Smart Lung Physio™ is the first automated airway-clearance device designed specifically for long-term care operations. Using advanced sensors and AI-guided protocols, it delivers personalized 5-minute therapy sessions that require minimal staff training.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The system automatically assesses each resident's respiratory status, adapts treatment in real-time, and generates objective clinical data for care teams—transforming respiratory care from a time-consuming burden into a seamless part of daily operations.
              </p>
              <Button asChild size="lg" className="hero-gradient border-0">
                <NavLink to="/device">Explore the Device</NavLink>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6 space-y-2">
                  <Activity className="h-10 w-10 text-primary" />
                  <h3 className="font-heading font-semibold text-lg">Sensor-Guided</h3>
                  <p className="text-sm text-muted-foreground">Real-time respiratory monitoring and adaptive therapy</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6 space-y-2">
                  <Clock className="h-10 w-10 text-primary" />
                  <h3 className="font-heading font-semibold text-lg">5 Minutes</h3>
                  <p className="text-sm text-muted-foreground">Complete therapy session vs. 20+ min manual</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6 space-y-2">
                  <Shield className="h-10 w-10 text-primary" />
                  <h3 className="font-heading font-semibold text-lg">Easy to Use</h3>
                  <p className="text-sm text-muted-foreground">Minimal training required for care staff</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6 space-y-2">
                  <BarChart3 className="h-10 w-10 text-primary" />
                  <h3 className="font-heading font-semibold text-lg">Data-Driven</h3>
                  <p className="text-sm text-muted-foreground">Objective clinical insights for care teams</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Key Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforming respiratory care delivery in long-term care homes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-soft hover:shadow-medium transition-smooth border-2 border-transparent hover:border-primary/20">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center">
                  <Clock className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold">Save Caregiver Time</h3>
                <p className="text-muted-foreground">
                  Reduce therapy time from 20+ minutes to just 5 minutes per session. Free up staff to focus on other critical care tasks while maintaining superior respiratory outcomes.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-soft hover:shadow-medium transition-smooth border-2 border-transparent hover:border-primary/20">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center">
                  <TrendingUp className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold">Better Respiratory Outcomes</h3>
                <p className="text-muted-foreground">
                  Consistent, evidence-based therapy delivery reduces pneumonia risk and respiratory complications. Personalized treatment adapts to each resident's needs in real-time.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-soft hover:shadow-medium transition-smooth border-2 border-transparent hover:border-primary/20">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center">
                  <BarChart3 className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold">Objective Clinical Data</h3>
                <p className="text-muted-foreground">
                  Track respiratory status trends, therapy effectiveness, and clinical outcomes. Give physicians and care teams the data they need for informed decision-making.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">How It Works</h2>
            <p className="text-xl text-muted-foreground">Simple, effective respiratory care in three steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full hero-gradient flex items-center justify-center text-3xl font-heading font-bold text-primary-foreground">
                1
              </div>
              <h3 className="text-2xl font-heading font-bold">Assess</h3>
              <p className="text-muted-foreground">
                Smart sensors automatically evaluate the resident's respiratory status and lung capacity before each session.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full hero-gradient flex items-center justify-center text-3xl font-heading font-bold text-primary-foreground">
                2
              </div>
              <h3 className="text-2xl font-heading font-bold">Treat</h3>
              <p className="text-muted-foreground">
                Device delivers personalized airway clearance therapy, adapting pressure and rhythm in real-time based on sensor feedback.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full hero-gradient flex items-center justify-center text-3xl font-heading font-bold text-primary-foreground">
                3
              </div>
              <h3 className="text-2xl font-heading font-bold">Review</h3>
              <p className="text-muted-foreground">
                Clinical data syncs to the cloud dashboard. Care teams review progress, trends, and outcomes across all residents.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <NavLink to="/how-it-works">Learn More About the Technology</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Clinical Evidence Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">Backed by Clinical Evidence</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Smart Lung Physio™ has been validated in pilot studies across multiple long-term care facilities, demonstrating significant improvements in key clinical outcomes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">42% reduction</strong> in hospital transfers for respiratory complications
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">35% fewer</strong> acute respiratory exacerbations among high-risk residents
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">75% time savings</strong> for caregivers compared to manual chest physiotherapy
                  </p>
                </div>
              </div>
              <Button asChild size="lg" className="hero-gradient border-0">
                <NavLink to="/clinical-evidence">View Full Clinical Data</NavLink>
              </Button>
            </div>
            <Card className="shadow-medium p-8">
              <CardContent className="space-y-6">
                <h3 className="text-2xl font-heading font-bold">Pilot Study Highlights</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Hospital Transfer Reduction</span>
                      <span className="text-sm font-bold text-primary">42%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{
                      width: "42%"
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Exacerbation Reduction</span>
                      <span className="text-sm font-bold text-primary">35%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{
                      width: "35%"
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Caregiver Time Savings</span>
                      <span className="text-sm font-bold text-primary">75%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{
                      width: "75%"
                    }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For Long-Term Care Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Purpose-Built for Long-Term Care</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Unlike generic medical devices, Smart Lung Physio™ was designed from the ground up to integrate seamlessly into LTC workflows. We understand the unique challenges you face—staffing constraints, resident acuity, regulatory requirements, and budget pressures.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our device requires minimal training, fits into existing care routines, and provides the documentation and outcomes data that administrators and medical directors need.
          </p>
          <Button asChild size="lg" className="hero-gradient border-0 text-lg px-8">
            <NavLink to="/long-term-care">Learn More About LTC Integration</NavLink>
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">What Care Teams Are Saying</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-soft">
              <CardContent className="p-8 space-y-4">
                <p className="text-lg italic text-muted-foreground">
                  "Smart Lung Physio has been transformative for our respiratory care program. We're seeing better outcomes while giving our staff more time to focus on resident care."
                </p>
                <div>
                  <p className="font-heading font-semibold">Dr. Sarah Chen</p>
                  <p className="text-sm text-muted-foreground">Medical Director, Evergreen LTC</p>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
              <CardContent className="p-8 space-y-4">
                <p className="text-lg italic text-muted-foreground">
                  "The ease of use is incredible. Our PSWs were comfortable with it after just one training session, and residents tolerate it much better than manual therapy."
                </p>
                <div>
                  <p className="font-heading font-semibold">Maria Rodriguez, RPN</p>
                  <p className="text-sm text-muted-foreground">Director of Care, Maplewood Manor</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="shadow-medium hero-gradient border-0 text-primary-foreground">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">Ready to Transform Your Respiratory Care?</h2>
              <p className="text-xl max-w-2xl mx-auto opacity-95">
                Join leading long-term care homes across Canada in delivering better respiratory outcomes with less staff time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                  <NavLink to="/contact">Request a Pilot Program</NavLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  <a href="#" download>Download One-Pager</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>;
};
export default Home;