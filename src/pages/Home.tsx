import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Activity, Clock, TrendingUp, Shield, CheckCircle, BarChart3 } from "lucide-react";
import heroDevice from "@/assets/hero-device.jpg";
const Home = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
                  Transforming Respiratory Care for
                  <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Long-Term Care Homes
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  Smart Lung Physio™ delivers automated, sensor-guided airway clearance for frail residents—reducing staff workload and improving clinical outcomes.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="hero-gradient border-0 text-lg px-8">
                  <NavLink to="/contact">Request a Demo</NavLink>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <NavLink to="/how-it-works">Learn More</NavLink>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              <div className="absolute inset-0 hero-gradient opacity-20 blur-3xl rounded-full"></div>
              <img alt="Smart Lung Physio Device with Mobile App" className="relative rounded-2xl shadow-medium w-full" src="/lovable-uploads/7f9eeca4-1724-4aec-941a-3076a034e2f7.png" />
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