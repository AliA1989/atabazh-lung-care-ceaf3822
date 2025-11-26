import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { 
  Target, 
  Users, 
  Award, 
  MapPin, 
  Eye, 
  Heart, 
  FlaskConical, 
  Settings, 
  Handshake, 
  Lightbulb, 
  Accessibility,
  Building2,
  Stethoscope,
  Quote
} from "lucide-react";
import rachelBartholomewPhoto from "@/assets/team/rachel-bartholomew.png";
import habibaBougheraraPhoto from "@/assets/team/habiba-bougherara.png";
import aliAzadeganPhoto from "@/assets/team/ali-azadegan.png";
import kamranAzmaPhoto from "@/assets/team/kamran-azma.png";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Resident-First",
      description: "Every design decision starts with what's best for frail elderly residents. Comfort, dignity, and effectiveness guide our engineering."
    },
    {
      icon: FlaskConical,
      title: "Evidence-Based",
      description: "We validate every claim with rigorous clinical studies. Our commitment to scientific integrity builds trust with care teams and regulators."
    },
    {
      icon: Settings,
      title: "Operational Realism",
      description: "We design for the real world of long-term care—understaffed, fast-paced, with diverse staff skill levels and high resident acuity."
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "We collaborate closely with LTC operators, frontline staff, and clinical leaders to ensure our solutions truly meet their needs."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We leverage cutting-edge technology—sensors, AI, cloud computing—but only when it delivers tangible benefits for residents and caregivers."
    },
    {
      icon: Accessibility,
      title: "Accessibility",
      description: "Advanced care shouldn't be limited to well-resourced facilities. We work to make our technology accessible across the LTC ecosystem."
    }
  ];

  const coreTeam = [
    {
      name: "Ali Abedinpour",
      role: "Founder",
      description: "Combining engineering, clinical insight, and real LTC problem-solving to shape the future of automated respiratory therapy.",
      image: "/lovable-uploads/079da378-496f-4ba6-82b7-ff2adf75d7f8.jpg"
    },
    {
      name: "Kamran Azma",
      role: "Physiotherapy & Clinical Research",
      description: "Bringing decades of respiratory physiotherapy expertise to validate safe, effective therapy delivery.",
      image: kamranAzmaPhoto
    },
    {
      name: "Ali Azadegan Mehr",
      role: "Mechanical Design",
      description: "Designing hardware that balances comfort, efficiency, and precise airway-clearance performance.",
      image: aliAzadeganPhoto
    },
    {
      name: "Ali Hosseini",
      role: "Electronics",
      description: "Building reliable sensor systems and embedded hardware for real-time therapy adaptation.",
      image: "/lovable-uploads/adbddd44-a6d5-43e8-a107-e82d88bc3ef3.jpg"
    },
    {
      name: "Ali Al-Dadah",
      role: "Data & Machine Learning",
      description: "Developing intelligent treatment algorithms that personalize airway-clearance therapy.",
      image: "/lovable-uploads/5558ffd6-3d45-4255-83f6-48bdc547d9b1.jpg"
    },
    {
      name: "Zhansaya Orazbekova",
      role: "Business Development",
      description: "Connecting clinical needs with operational workflows to bring Atabazh's innovation into real LTC environments.",
      image: "/lovable-uploads/1e94173d-585a-45c7-9170-6100bb5e677a.jpg"
    }
  ];

  const advisors = [
    {
      name: "Rachel Bartholomew",
      role: "Commercialization Advisor",
      description: "Guiding market entry, partnerships, and investor readiness for scalable med-tech growth.",
      image: rachelBartholomewPhoto
    },
    {
      name: "Jeff Kofman",
      role: "Strategic Advisor",
      description: "Supporting operational strategy and product positioning across the LTC ecosystem.",
      image: "/lovable-uploads/ff1a4ae8-54b1-434b-be7d-695eea8cc597.jpg"
    },
    {
      name: "Dr. Habiba Bougherara",
      role: "Scientific & Regulatory Advisor",
      description: "Ensuring scientific rigor and regulatory alignment throughout device development and validation.",
      image: habibaBougheraraPhoto
    }
  ];

  const partners = [
    {
      name: "MaRS Discovery District",
      description: "Member of the Health Innovation Program, providing access to mentorship, funding opportunities, and innovation ecosystem connections",
      icon: Building2
    },
    {
      name: "Ontario Long-Term Care Association",
      description: "Collaborative partnership providing insights into LTC operational challenges and access to pilot facility networks",
      icon: Users
    },
    {
      name: "Clinical Advisory Board",
      description: "Leading Canadian geriatricians, respiratory specialists, and LTC medical directors guiding our clinical development",
      icon: Stethoscope
    }
  ];

  const ecosystemLogos = [
    { src: "/lovable-uploads/cd29e1b2-c38e-4475-9f1d-e50fd4bb379e.jpg", alt: "MaRS Discovery District" },
    { src: "/lovable-uploads/af47ef87-8f2a-4bb9-a473-738fdd6831e8.png", alt: "Health Innovation Hub (H2i)" },
    { src: "/lovable-uploads/a07b3808-0d34-4344-9731-b063532a7cd0.png", alt: "Manitoba Technology Accelerator" },
    { src: "/lovable-uploads/f5526801-1f44-41a4-81a7-9eb7cde49628.jpg", alt: "Innovation Boost Zone (IBZ)" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section - Enhanced with medical background */}
      <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Abstract medical background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23004E8C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        <div className="container relative mx-auto max-w-5xl text-center">
          <div className="animate-fade-in space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight">
              About <span className="text-primary">Atabazh Medical</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A Canadian medical device startup on a mission to transform respiratory care in long-term care homes
            </p>
            <p className="text-base md:text-lg text-primary font-medium tracking-wide">
              Built by engineers, respiratory therapists, and LTC operators.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story - Enhanced layout */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            {/* Story Text - 3 columns */}
            <div className="lg:col-span-3 space-y-6 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Atabazh Medical was founded in 2022 by a team of biomedical engineers, respiratory therapists, and long-term care operators who witnessed firsthand the devastating impact of respiratory complications in frail elderly residents.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We saw care teams stretched to their limits, families watching their loved ones decline, and the enormous human and financial costs of repeated hospital transfers. We knew there had to be a better way.
              </p>
              
              {/* Quote Block */}
              <div className="relative pl-6 border-l-4 border-primary/30 py-4 my-8">
                <Quote className="absolute -left-3 -top-2 h-6 w-6 text-primary/40" />
                <blockquote className="text-lg italic text-foreground/80">
                  "Technology that respects the operational realities of long-term care while delivering evidence-based therapy."
                </blockquote>
                <cite className="block mt-2 text-sm text-muted-foreground font-medium">— Our founding principle</cite>
              </div>
            </div>

            {/* Info Cards - 2 columns */}
            <div className="lg:col-span-2 space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="shadow-medium hover:shadow-strong transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base mb-1">Headquarters</h3>
                      <p className="text-muted-foreground text-sm">Toronto, Ontario, Canada</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium hover:shadow-strong transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base mb-1">Team</h3>
                      <p className="text-muted-foreground text-sm">15+ engineers, clinicians, and operations specialists</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium hover:shadow-strong transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base mb-1">Recognition</h3>
                      <p className="text-muted-foreground text-sm">MaRS Discovery District Innovation Cohort, 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Premium two-column layout */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <Card className="group shadow-medium hover:shadow-strong transition-all duration-300 border-border/50 bg-card hover:-translate-y-1">
              <CardContent className="p-8 lg:p-10 space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-heading font-bold">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To improve the quality of life for frail elderly residents in long-term care by making evidence-based respiratory therapy accessible, efficient, and effective through innovative technology.
                </p>
              </CardContent>
            </Card>

            <Card className="group shadow-medium hover:shadow-strong transition-all duration-300 border-border/50 bg-card hover:-translate-y-1">
              <CardContent className="p-8 lg:p-10 space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-heading font-bold">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A future where every long-term care resident receives optimal respiratory care, where caregivers have the tools they need, and where preventable respiratory complications are rare rather than routine.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values - Two rows of three cards with icons */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={value.title} 
                  className="group shadow-soft hover:shadow-medium transition-all duration-300 border-border/50 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-lg font-heading font-bold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section - Premium innovative design */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-secondary/30" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
        
        <div className="container relative mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
              The People Behind the Innovation
            </p>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">Our Team</h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A multidisciplinary team united by a mission to reimagine respiratory care for aging populations.
            </p>
          </div>
          
          {/* Core Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {coreTeam.map((member, index) => (
              <div 
                key={member.name} 
                className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-border/40 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex flex-col items-center text-center">
                  {/* Photo with gradient ring */}
                  <div className="relative mb-6">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-primary/50 to-secondary opacity-60 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                    <div className="relative w-36 h-36 lg:w-40 lg:h-40 rounded-full p-1 bg-gradient-to-br from-primary/80 to-secondary/60 group-hover:scale-105 transition-transform duration-500">
                      <div className="w-full h-full rounded-full overflow-hidden bg-background shadow-lg">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Name with gradient underline */}
                  <div className="mb-3">
                    <h3 className="font-heading font-bold text-lg lg:text-xl tracking-wide mb-2">{member.name}</h3>
                    <div className="h-0.5 w-12 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
                  </div>
                  
                  {/* Role badge */}
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
                    {member.role}
                  </span>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Advisors Section */}
          <div className="relative">
            {/* Divider */}
            <div className="flex items-center justify-center mb-14">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-border/60" />
              <span className="px-6 text-sm uppercase tracking-[0.25em] text-muted-foreground font-medium">Advisors</span>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-border/60" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {advisors.map((advisor, index) => (
                <div 
                  key={advisor.name} 
                  className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-border/40 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex flex-col items-center text-center">
                    {/* Photo with gradient ring */}
                    <div className="relative mb-6">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-primary/50 to-secondary opacity-50 group-hover:opacity-90 blur-sm transition-opacity duration-500" />
                      <div className="relative w-32 h-32 lg:w-36 lg:h-36 rounded-full p-1 bg-gradient-to-br from-primary/70 to-secondary/50 group-hover:scale-105 transition-transform duration-500">
                        <div className="w-full h-full rounded-full overflow-hidden bg-background shadow-lg">
                          <img 
                            src={advisor.image} 
                            alt={advisor.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Name with gradient underline */}
                    <div className="mb-3">
                      <h3 className="font-heading font-bold text-lg tracking-wide mb-2">{advisor.name}</h3>
                      <div className="h-0.5 w-10 mx-auto bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                    </div>
                    
                    {/* Role badge */}
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground border border-border/40 mb-4">
                      {advisor.role}
                    </span>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {advisor.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners - Premium card layout */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">Strategic Partners & Advisors</h2>
            <p className="text-lg text-muted-foreground">
              Collaborating with leading organizations to advance respiratory care
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <Card 
                  key={partner.name}
                  className="group shadow-medium hover:shadow-strong transition-all duration-300 border-border/50 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-base">{partner.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {partner.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ecosystem Support - Ultra-minimal premium design */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold tracking-tight mb-5">
              Supported by Canada's Leading Innovation & Health Ecosystems
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Recognized and supported through national innovation programs, clinical partnerships, and med-tech accelerators.
            </p>
          </div>
          
          {/* Partner Logos - Single centered row, minimal style */}
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
            {ecosystemLogos.map((logo, index) => (
              <div 
                key={logo.alt}
                className="group flex items-center justify-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="h-16 lg:h-20 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-500"
                  style={{ filter: 'grayscale(100%)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Bold and prominent */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        <div className="container relative mx-auto max-w-4xl text-center">
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground">
              Join Us in Transforming LTC Respiratory Care
            </h2>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
              Whether you're a care provider, investor, or potential partner, we'd love to connect
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 shadow-strong font-semibold"
              >
                <NavLink to="/contact">Get in Touch</NavLink>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-6 font-semibold bg-transparent"
              >
                <NavLink to="/news">Latest News & Updates</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
