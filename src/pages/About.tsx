import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Target, Users, Award, MapPin } from "lucide-react";
import rachelBartholomewPhoto from "@/assets/team/rachel-bartholomew.png";
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Our Team</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A multidisciplinary team united by a passion for improving care for the frail elderly
          </p>
          
          {/* Core Team - Row 1 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10 mb-20">
            {/* Ali Aedinpour */}
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-[hsl(145,40%,90%)] flex items-center justify-center mb-4 shadow-md">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img alt="Ali Aedinpour" className="w-full h-full object-cover" src="/lovable-uploads/079da378-496f-4ba6-82b7-ff2adf75d7f8.jpg" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-center">Ali Aedinpour</h3>
              <p className="text-xs text-muted-foreground font-medium mt-1 text-center">Founder</p>
            </div>

            {/* Kamran Azma */}
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-[hsl(145,40%,90%)] flex items-center justify-center mb-4 shadow-md">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img alt="Kamran Azma" className="w-full h-full object-cover" src="/lovable-uploads/bbc3d937-5fd9-4a8e-81c3-7daddf8e211f.jpg" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-center">Kamran Azma</h3>
              <p className="text-xs text-muted-foreground font-medium mt-1 text-center">Physiotherapy & Clinical Research</p>
            </div>

            {/* Ali Azadegan Mehr */}
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-[hsl(145,40%,90%)] flex items-center justify-center mb-4 shadow-md">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img alt="Ali Azadegan Mehr" className="w-full h-full object-cover" src="/lovable-uploads/8a752024-6732-4e23-96c5-0455ab48f73e.jpg" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-center">Ali Azadegan Mehr</h3>
              <p className="text-xs text-muted-foreground font-medium mt-1 text-center">Mechanical Design</p>
            </div>

            {/* Ali Hosseini */}
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-[hsl(145,40%,90%)] flex items-center justify-center mb-4 shadow-md">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img alt="Ali Hosseini" className="w-full h-full object-cover" src="/lovable-uploads/adbddd44-a6d5-43e8-a107-e82d88bc3ef3.jpg" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-center">Ali Hosseini</h3>
              <p className="text-xs text-muted-foreground font-medium mt-1 text-center">Electronics</p>
            </div>

            {/* Ali Al-Dadah */}
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-[hsl(145,40%,90%)] flex items-center justify-center mb-4 shadow-md">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img alt="Ali Al-Dadah" className="w-full h-full object-cover" src="/lovable-uploads/5558ffd6-3d45-4255-83f6-48bdc547d9b1.jpg" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-center">Ali Al-Dadah</h3>
              <p className="text-xs text-muted-foreground font-medium mt-1 text-center">Data & Machine Learning</p>
            </div>

            {/* Zhansaya Orazbekova */}
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-[hsl(145,40%,90%)] flex items-center justify-center mb-4 shadow-md">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img alt="Zhansaya Orazbekova" className="w-full h-full object-cover" src="/lovable-uploads/1e94173d-585a-45c7-9170-6100bb5e677a.jpg" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-center">Zhansaya Orazbekova</h3>
              <p className="text-xs text-muted-foreground font-medium mt-1 text-center">Business Development</p>
            </div>
          </div>

          {/* Advisors - Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 max-w-3xl mx-auto">
            {/* Rachel Bartholomew */}
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-[hsl(145,40%,90%)] flex items-center justify-center mb-4 shadow-md">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img alt="Rachel Bartholomew" className="w-full h-full object-cover" src={rachelBartholomewPhoto} />
                </div>
              </div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-center">Rachel Bartholomew</h3>
              <p className="text-xs text-muted-foreground font-medium mt-1 text-center">Health Innovation & Commercialization Advisor</p>
              <p className="text-[10px] text-muted-foreground/70 tracking-[0.25em] mt-1 uppercase">A D V I S O R</p>
            </div>

            {/* Jeff Kofman */}
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-[hsl(145,40%,90%)] flex items-center justify-center mb-4 shadow-md">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img alt="Jeff Kofman" className="w-full h-full object-cover" src="/lovable-uploads/ff1a4ae8-54b1-434b-be7d-695eea8cc597.jpg" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-center">Jeff Kofman</h3>
              <p className="text-xs text-muted-foreground font-medium mt-1 text-center">Advisor</p>
              <p className="text-[10px] text-muted-foreground/70 tracking-[0.25em] mt-1 uppercase">A D V I S O R</p>
            </div>

            {/* Habiba Bougherara */}
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-[hsl(145,40%,90%)] flex items-center justify-center mb-4 shadow-md">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img alt="Habiba Bougherara" className="w-full h-full object-cover" src="/lovable-uploads/77e4f336-d3e3-4070-a6f8-9addf77864b5.jpg" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-center">Habiba Bougherara</h3>
              <p className="text-xs text-muted-foreground font-medium mt-1 text-center">Scientific & Regulatory Advisor</p>
              <p className="text-[10px] text-muted-foreground/70 tracking-[0.25em] mt-1 uppercase">A D V I S O R</p>
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 animate-fade-in">
            <div className="flex items-center justify-center p-6 bg-card rounded-lg border border-border/40 shadow-soft hover:shadow-medium transition-all duration-300 hover:border-primary/20">
              <img alt="MaRS Discovery District" className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" src="/lovable-uploads/cd29e1b2-c38e-4475-9f1d-e50fd4bb379e.jpg" />
            </div>
            <div className="flex items-center justify-center p-6 bg-card rounded-lg border border-border/40 shadow-soft hover:shadow-medium transition-all duration-300 hover:border-primary/20">
              <img alt="Health Innovation Hub (H2i)" className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" src="/lovable-uploads/af47ef87-8f2a-4bb9-a473-738fdd6831e8.png" />
            </div>
            <div className="flex items-center justify-center p-6 bg-card rounded-lg border border-border/40 shadow-soft hover:shadow-medium transition-all duration-300 hover:border-primary/20">
              <img alt="Manitoba Technology Accelerator" className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" src="/lovable-uploads/a07b3808-0d34-4344-9731-b063532a7cd0.png" />
            </div>
            <div className="flex items-center justify-center p-6 bg-card rounded-lg border border-border/40 shadow-soft hover:shadow-medium transition-all duration-300 hover:border-primary/20">
              <img alt="Innovation Boost Zone (IBZ)" className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" src="/lovable-uploads/f5526801-1f44-41a4-81a7-9eb7cde49628.jpg" />
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