import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Target, Users, Award, MapPin } from "lucide-react";
const About = () => {
  return <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-heading font-bold">
            About Atabazh Medical
          </h1>
          <p className="text-2xl text-muted-foreground">
            A Canadian medical device startup on a mission to transform respiratory care in long-term care homes
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-4xl font-heading font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Atabazh Medical was founded in 2022 by a team of biomedical engineers, respiratory therapists, and long-term care operators who witnessed firsthand the devastating impact of respiratory complications in frail elderly residents.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We saw care teams stretched to their limits, unable to provide the respiratory interventions they knew their residents needed. We saw families watching their loved ones decline from preventable respiratory infections. And we saw the enormous human and financial costs of repeated hospital transfers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We knew there had to be a better way—one that leveraged technology to deliver effective therapy while respecting the operational realities of long-term care.
              </p>
            </div>
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-1">Headquarters</h3>
                      <p className="text-muted-foreground">Toronto, Ontario, Canada</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-1">Team</h3>
                      <p className="text-muted-foreground">15+ engineers, clinicians, and operations specialists</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-1">Recognition</h3>
                      <p className="text-muted-foreground">MaRS Discovery District Innovation Cohort, 2023</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-medium">
              <CardContent className="p-10 space-y-4">
                <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center">
                  <Target className="h-7 w-7 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-heading font-bold">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To improve the quality of life for frail elderly residents in long-term care by making evidence-based respiratory therapy accessible, efficient, and effective through innovative technology.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="p-10 space-y-4">
                <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center">
                  <Award className="h-7 w-7 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-heading font-bold">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A future where every long-term care resident receives optimal respiratory care, where caregivers have the tools they need to deliver excellent care efficiently, and where preventable respiratory complications are rare rather than routine.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-soft">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-heading font-bold">Resident-First</h3>
                <p className="text-muted-foreground">
                  Every design decision starts with what's best for frail elderly residents. Comfort, dignity, and effectiveness guide our engineering.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-heading font-bold">Evidence-Based</h3>
                <p className="text-muted-foreground">
                  We validate every claim with rigorous clinical studies. Our commitment to scientific integrity builds trust with care teams and regulators.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-heading font-bold">Operational Realism</h3>
                <p className="text-muted-foreground">
                  We design for the real world of long-term care—understaffed, fast-paced, with diverse staff skill levels and high resident acuity.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-heading font-bold">Partnership</h3>
                <p className="text-muted-foreground">
                  We collaborate closely with LTC operators, frontline staff, and clinical leaders to ensure our solutions truly meet their needs.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-heading font-bold">Innovation</h3>
                <p className="text-muted-foreground">
                  We leverage cutting-edge technology—sensors, AI, cloud computing—but only when it delivers tangible benefits for residents and caregivers.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-heading font-bold">Accessibility</h3>
                <p className="text-muted-foreground">
                  Advanced care shouldn't be limited to well-resourced facilities. We work to make our technology accessible across the LTC ecosystem.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Highlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-6">Our Team</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A multidisciplinary team united by a passion for improving care for the frail elderly
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                <img alt="Ali Aedinpour" className="w-full h-full object-cover" src="/lovable-uploads/079da378-496f-4ba6-82b7-ff2adf75d7f8.jpg" />
              </div>
              <h3 className="font-heading font-bold text-center">ALI AEDINPOUR</h3>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                <img alt="Kamran Azma" className="w-full h-full object-cover" src="/lovable-uploads/bbc3d937-5fd9-4a8e-81c3-7daddf8e211f.jpg" />
              </div>
              <h3 className="font-heading font-bold text-center">KAMRAN AZMA</h3>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                <img alt="Ali Azadegan Mehr" className="w-full h-full object-cover" src="/lovable-uploads/8a752024-6732-4e23-96c5-0455ab48f73e.jpg" />
              </div>
              <h3 className="font-heading font-bold text-center">ALI AZADEGAN MEHR</h3>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                <img alt="Ali Hosseini" className="w-full h-full object-cover" src="/lovable-uploads/adbddd44-a6d5-43e8-a107-e82d88bc3ef3.jpg" />
              </div>
              <h3 className="font-heading font-bold text-center">Ali HOSSEINI</h3>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                <img alt="Ali Al-Dadah" className="w-full h-full object-cover" src="/lovable-uploads/5558ffd6-3d45-4255-83f6-48bdc547d9b1.jpg" />
              </div>
              <h3 className="font-heading font-bold text-center">ALI AL-DADAH</h3>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                <img alt="Zhansaya Orazbekova" className="w-full h-full object-cover" src="/lovable-uploads/1e94173d-585a-45c7-9170-6100bb5e677a.jpg" />
              </div>
              <h3 className="font-heading font-bold text-center">ZHANSAYA ORAZBEKOVA</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                <img alt="Rachel Bartholomew" className="w-full h-full object-cover" src="/lovable-uploads/81a8e47e-c5e2-4ddf-bed7-adaf305c0092.jpg" />
              </div>
              <div className="text-center">
                <h3 className="font-heading font-bold">RACHEL BARTHOLOMEW</h3>
                <p className="text-sm text-muted-foreground tracking-wider">ADVISOR</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                <img alt="Jeff Kofman" className="w-full h-full object-cover" src="/lovable-uploads/ff1a4ae8-54b1-434b-be7d-695eea8cc597.jpg" />
              </div>
              <div className="text-center">
                <h3 className="font-heading font-bold">JEFF KOFMAN</h3>
                <p className="text-sm text-muted-foreground tracking-wider">ADVISOR</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                <img alt="Habiba Bougherara" className="w-full h-full object-cover" src="/lovable-uploads/77e4f336-d3e3-4070-a6f8-9addf77864b5.jpg" />
              </div>
              <div className="text-center">
                <h3 className="font-heading font-bold">HABIBA BOUGHERARA</h3>
                <p className="text-sm text-muted-foreground tracking-wider">ADVISOR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Strategic Partners & Advisors</h2>
          
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-heading font-bold mb-2">MaRS Discovery District</h3>
                <p className="text-muted-foreground">
                  Member of the Health Innovation Program, providing access to mentorship, funding opportunities, and innovation ecosystem connections
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-heading font-bold mb-2">Ontario Long-Term Care Association</h3>
                <p className="text-muted-foreground">
                  Collaborative partnership providing insights into LTC operational challenges and access to pilot facility networks
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-heading font-bold mb-2">Clinical Advisory Board</h3>
                <p className="text-muted-foreground">
                  Leading Canadian geriatricians, respiratory specialists, and LTC medical directors guiding our clinical development and validation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ecosystem Support & Grants */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-16">Ecosystem Support & Grants</h2>
          
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 animate-fade-in">
            <div className="h-16 w-auto flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img src="/lovable-uploads/mars.png" alt="MaRS Discovery District" className="h-full w-auto object-contain" />
            </div>
            <div className="h-16 w-auto flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img src="/lovable-uploads/h2i.png" alt="Health Innovation Hub (H2i)" className="h-full w-auto object-contain" />
            </div>
            <div className="h-16 w-auto flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img src="/lovable-uploads/mta.png" alt="Manitoba Technology Accelerator" className="h-full w-auto object-contain" />
            </div>
            <div className="h-16 w-auto flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img src="/lovable-uploads/elevateip.png" alt="ElevateIP with ISED Canada" className="h-full w-auto object-contain" />
            </div>
            <div className="h-16 w-auto flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img src="/lovable-uploads/ibz.png" alt="Innovation Boost Zone (IBZ)" className="h-full w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Join Us in Transforming LTC Respiratory Care</h2>
          <p className="text-xl text-muted-foreground">
            Whether you're a care provider, investor, or potential partner, we'd love to connect
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="hero-gradient border-0 text-lg px-8">
              <NavLink to="/contact">Get in Touch</NavLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <NavLink to="/news">Latest News & Updates</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default About;