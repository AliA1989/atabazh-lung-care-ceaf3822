import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ScrollReveal } from "@/components/ScrollReveal";
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
  Quote,
  Linkedin,
  ArrowRight
} from "lucide-react";
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

  const founder = {
    name: "Ali Abedinpour",
    role: "Founder",
    description: "Combining engineering, clinical insight, and real LTC problem-solving to shape the future of automated respiratory therapy.",
    image: "/lovable-uploads/079da378-496f-4ba6-82b7-ff2adf75d7f8.jpg",
    linkedin: "https://www.linkedin.com/in/aliabedinpour/"
  };

  const technicalTeam = [
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
    }
  ];

  const advisors = [
    {
      name: "Jeff Kofman",
      role: "Strategic Advisor",
      description: "Supporting operational strategy and product positioning across the LTC ecosystem.",
      image: "/lovable-uploads/ff1a4ae8-54b1-434b-be7d-695eea8cc597.jpg"
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
      {/* Hero Section - Master Design System */}
      <section className="relative min-h-[70vh] flex items-center py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Soft blue gradient background - matching Home page */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,60%,98%)] via-[hsl(200,50%,96%)] to-[hsl(220,40%,94%)]" />
        
        {/* Organic shapes - same as Home page */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/8 to-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-[hsl(200,60%,90%)]/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-2xl" />
        
        {/* SVG wave decoration */}
        <svg className="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z" fill="hsl(var(--background))" fillOpacity="0.6"/>
          <path d="M0,80 C400,20 800,100 1200,50 C1360,30 1400,60 1440,80 L1440,120 L0,120 Z" fill="hsl(var(--background))" fillOpacity="0.8"/>
        </svg>
        
        <div className="container relative mx-auto max-w-5xl text-center">
          <div className="animate-fade-in space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
              Our Story & Mission
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-800">
              About <span className="text-primary">Atabazh Medical</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A Canadian medical device startup on a mission to transform respiratory care in long-term care homes
            </p>
            <p className="text-base md:text-lg text-primary font-medium tracking-wide">
              Built by engineers, respiratory therapists, and LTC operators.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story - Enhanced with design system */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Unified background - removed explicit white */}
        
        <div className="container relative mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            {/* Story Text - 3 columns */}
            <div className="lg:col-span-3 space-y-6 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">Our Story</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Atabazh Medical was founded in 2022 by a team of biomedical engineers, respiratory therapists, and long-term care operators who witnessed firsthand the devastating impact of respiratory complications in frail elderly residents.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our founder spent time walking the halls of LTC homes—observing workflows, speaking with frontline staff, and understanding the daily realities that shape resident care. We saw care teams stretched to their limits, families watching their loved ones decline, and the enormous human and financial costs of repeated hospital transfers. We knew there had to be a better way.
              </p>
              
              {/* Quote Block - Glassmorphism style */}
              <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-soft my-8">
                <Quote className="absolute -left-2 -top-2 h-8 w-8 text-primary/30" />
                <blockquote className="text-lg italic text-slate-700 pl-4">
                  "Technology that respects the operational realities of long-term care while delivering evidence-based therapy."
                </blockquote>
                <cite className="block mt-3 text-sm text-slate-500 font-medium pl-4">— Our founding principle</cite>
              </div>
            </div>

            {/* Info Cards - 2 columns - Glassmorphism */}
            <div className="lg:col-span-2 space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-soft">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-800 mb-1">Headquarters</h3>
                    <p className="text-slate-600 text-sm">Toronto, Ontario, Canada</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-soft">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-800 mb-1">Team</h3>
                    <p className="text-slate-600 text-sm">15+ engineers, clinicians, and operations specialists</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-soft">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-800 mb-1">Recognition</h3>
                    <p className="text-slate-600 text-sm">MaRS Discovery District Innovation Cohort, 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Premium glassmorphism layout */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Soft blue gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,60%,97%)] via-[hsl(200,50%,95%)] to-[hsl(220,40%,96%)]" />
        <div className="absolute top-10 right-20 w-72 h-72 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-gradient-to-tl from-[hsl(200,60%,90%)]/30 to-transparent rounded-full blur-3xl" />
        
        <div className="container relative mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-soft">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">Our Mission</h2>
                <p className="text-slate-600 leading-relaxed">
                  To improve the quality of life for frail elderly residents in long-term care by making evidence-based respiratory therapy accessible, efficient, and effective through innovative technology.
                </p>
              </div>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-soft">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">Our Vision</h2>
                <p className="text-slate-600 leading-relaxed">
                  A future where every long-term care resident receives optimal respiratory care, where caregivers have the tools they need, and where preventable respiratory complications are rare rather than routine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Glassmorphism cards */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        <div className="container relative mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
              What Drives Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Our Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={value.title} 
                  className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-soft">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">{value.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section - Premium design with soft gradient */}
      <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Soft blue gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,60%,97%)] via-[hsl(200,50%,95%)] to-[hsl(220,40%,96%)]" />
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-tl from-[hsl(200,60%,90%)]/30 to-transparent rounded-full blur-3xl" />
        
        <div className="container relative mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
              The People Behind the Innovation
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Our Team</h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A multidisciplinary team united by a mission to reimagine respiratory care for aging populations.
            </p>
          </div>
          
          {/* Founder & Leadership Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/30" />
              <span className="px-6 text-sm uppercase tracking-[0.25em] text-slate-500 font-medium">Founder & Leadership</span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/30" />
            </div>
            
            <div className="flex justify-center">
              <div 
                className="group relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/80 transition-all duration-500 hover:-translate-y-2 animate-fade-in max-w-md"
                style={{ 
                  boxShadow: '0 8px 32px -8px hsl(210 80% 50% / 0.15), 0 4px 16px -4px hsl(210 80% 60% / 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 40px -8px hsl(210 80% 50% / 0.25), 0 8px 24px -4px hsl(210 80% 60% / 0.15)';
                  e.currentTarget.style.borderColor = 'hsl(210 80% 85% / 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 32px -8px hsl(210 80% 50% / 0.15), 0 4px 16px -4px hsl(210 80% 60% / 0.1)';
                  e.currentTarget.style.borderColor = 'hsl(0 0% 100% / 0.8)';
                }}
              >
                <div className="relative flex flex-col items-center text-center">
                  {/* Photo with gradient mask fade */}
                  <div className="relative mb-6">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-primary/50 to-[hsl(200,60%,80%)] opacity-70 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                    <div className="relative w-44 h-44 lg:w-48 lg:h-48 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-500">
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Soft gradient fade at bottom of image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
                    </div>
                  </div>
                  
                  {/* Name with gradient underline */}
                  <div className="mb-3">
                    <h3 className="font-bold text-xl lg:text-2xl text-[hsl(215,50%,25%)] tracking-wide mb-2">{founder.name}</h3>
                    <div className="h-0.5 w-14 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
                  </div>
                  
                  {/* Role badge */}
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-primary to-primary/80 text-white shadow-soft mb-4">
                    {founder.role}
                  </span>
                  
                  {/* Description */}
                  <p className="text-base text-slate-500 leading-relaxed mb-4">
                    {founder.description}
                  </p>
                  
                  {/* LinkedIn Link */}
                  <a 
                    href={founder.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Core Technical Team Section */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/30" />
              <span className="px-6 text-sm uppercase tracking-[0.25em] text-slate-500 font-medium">Core Technical Team</span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/30" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {technicalTeam.map((member, index) => (
                <div 
                  key={member.name} 
                  className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/80 transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    boxShadow: '0 8px 32px -8px hsl(210 80% 50% / 0.15), 0 4px 16px -4px hsl(210 80% 60% / 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 12px 40px -8px hsl(210 80% 50% / 0.25), 0 8px 24px -4px hsl(210 80% 60% / 0.15)';
                    e.currentTarget.style.borderColor = 'hsl(210 80% 85% / 0.8)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 32px -8px hsl(210 80% 50% / 0.15), 0 4px 16px -4px hsl(210 80% 60% / 0.1)';
                    e.currentTarget.style.borderColor = 'hsl(0 0% 100% / 0.8)';
                  }}
                >
                  <div className="relative flex flex-col items-center text-center">
                    {/* Photo with gradient ring and fade mask */}
                    <div className="relative mb-6">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-primary/50 to-[hsl(200,60%,80%)] opacity-60 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                      <div className="relative w-36 h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-500">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        {/* Soft gradient fade at bottom of image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
                      </div>
                    </div>
                    
                    {/* Name with gradient underline */}
                    <div className="mb-3">
                      <h3 className="font-bold text-lg lg:text-xl text-[hsl(215,50%,25%)] tracking-wide mb-2">{member.name}</h3>
                      <div className="h-0.5 w-12 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
                    </div>
                    
                    {/* Role badge */}
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary to-primary/80 text-white shadow-soft mb-4">
                      {member.role}
                    </span>
                    
                    {/* Description */}
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advisors Section */}
          <div className="relative">
            {/* Divider */}
            <div className="flex items-center justify-center mb-14">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/30" />
              <span className="px-6 text-sm uppercase tracking-[0.25em] text-slate-500 font-medium">Advisors</span>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/30" />
            </div>
            
            <div className="flex justify-center">
              {advisors.map((advisor, index) => (
                <div 
                  key={advisor.name} 
                  className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/80 transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 0.15}s`,
                    boxShadow: '0 8px 32px -8px hsl(210 80% 50% / 0.15), 0 4px 16px -4px hsl(210 80% 60% / 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 12px 40px -8px hsl(210 80% 50% / 0.25), 0 8px 24px -4px hsl(210 80% 60% / 0.15)';
                    e.currentTarget.style.borderColor = 'hsl(210 80% 85% / 0.8)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 32px -8px hsl(210 80% 50% / 0.15), 0 4px 16px -4px hsl(210 80% 60% / 0.1)';
                    e.currentTarget.style.borderColor = 'hsl(0 0% 100% / 0.8)';
                  }}
                >
                  <div className="relative flex flex-col items-center text-center">
                    {/* Photo with gradient ring and fade mask */}
                    <div className="relative mb-6">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-primary/50 to-[hsl(200,60%,80%)] opacity-50 group-hover:opacity-90 blur-sm transition-opacity duration-500" />
                      <div className="relative w-32 h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-500">
                        <img 
                          src={advisor.image} 
                          alt={advisor.name}
                          className="w-full h-full object-cover"
                        />
                        {/* Soft gradient fade at bottom of image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
                      </div>
                    </div>
                    
                    {/* Name with gradient underline */}
                    <div className="mb-3">
                      <h3 className="font-bold text-lg text-[hsl(215,50%,25%)] tracking-wide mb-2">{advisor.name}</h3>
                      <div className="h-0.5 w-10 mx-auto bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                    </div>
                    
                    {/* Role badge */}
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary/20 to-primary/10 text-primary border border-primary/20 mb-4">
                      {advisor.role}
                    </span>
                    
                    {/* Description */}
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {advisor.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners - Premium glassmorphism cards */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Unified background styling */}
        <div className="container relative mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
              Collaborative Network
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Strategic Partners & Advisors</h2>
            <p className="text-lg text-slate-600">
              Collaborating with leading organizations to advance respiratory care
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <div 
                  key={partner.name}
                  className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 transition-all shadow-soft">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-base text-slate-800">{partner.name}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ecosystem Support - Premium Trust Bar with Soft Glow */}
      <section className="relative py-28 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Base soft blue gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,60%,97%)] via-[hsl(200,50%,95%)] to-[hsl(220,40%,96%)]" />
        
        {/* Soft radial white glow - the "cloud of light" effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.3) 55%, rgba(255,255,255,0) 75%)'
          }}
        />
        
        {/* Subtle ambient orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-gradient-to-tl from-[hsl(200,60%,90%)]/20 to-transparent rounded-full blur-3xl" />
        
        <div className="container relative mx-auto max-w-6xl">
          {/* Section Header - Subtle, professional styling */}
          <div className="text-center mb-16 lg:mb-20 animate-fade-in">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-medium mb-3">
              Recognized & Supported By
            </p>
            <h2 className="text-sm md:text-base uppercase tracking-[0.2em] text-slate-500 font-medium max-w-2xl mx-auto">
              Canada's Leading Innovation & Health Ecosystems
            </h2>
          </div>
          
          {/* Partner Logos - Floating on the white glow */}
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-24 py-8">
            {ecosystemLogos.map((logo, index) => (
              <div 
                key={logo.alt}
                className="flex items-center justify-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="h-12 md:h-14 lg:h-16 w-auto max-w-[140px] md:max-w-[160px] object-contain transition-all duration-500 ease-out grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working With Students - Glassmorphism style */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Unified background styling */}
        
        <div className="container relative mx-auto max-w-4xl">
          <div className="text-center mb-10 animate-fade-in">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
              Early Careers
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Working With Students</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Collaborating with early-career talent in med-tech development
            </p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/50 shadow-soft animate-fade-in">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  Atabazh Medical collaborates with students and early-career professionals who are interested in medical device development, respiratory care technology, and health innovation.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We are building Smart Lung Physio—a sensor-guided device designed to automate airway-clearance therapy for long-term care residents. Our work spans mechanical design, embedded systems, clinical validation, and regulatory development.
                </p>
              </div>
              
              <div className="pt-4 border-t border-slate-200/50">
                <h3 className="font-semibold text-base text-slate-800 mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Opportunities
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Internship and project-based opportunities will open soon. Please connect with the founder on LinkedIn to stay updated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Premium gradient style */}
      <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        {/* Organic shapes */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto max-w-4xl text-center">
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Join Us in Transforming LTC Respiratory Care
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto">
              Whether you're a care provider, investor, or potential partner, we'd love to connect
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 shadow-strong font-semibold rounded-full group"
              >
                <NavLink to="/contact" className="flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </NavLink>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-6 font-semibold bg-transparent rounded-full"
              >
                <NavLink to="/device">Explore Smart Lung Physio</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
