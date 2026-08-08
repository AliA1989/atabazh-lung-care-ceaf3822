import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { FileText, Calendar, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const News = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] pt-20 text-slate-950">
      {/* Hero Section - Master Design System */}
      <section className="relative overflow-hidden border-b border-slate-200 py-24 pt-32 lg:py-28 lg:pt-36">
        <div className="absolute inset-0 z-0 bg-[#f8fafc]" />
        <div className="absolute inset-0 z-0 opacity-45 [background-image:linear-gradient(to_right,#dbe4ee_1px,transparent_1px),linear-gradient(to_bottom,#dbe4ee_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute right-[8%] top-12 z-0 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
        
        {/* Abstract wave pattern */}
        <div className="hidden absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          <svg className="absolute top-1/2 left-0 w-[200%] h-[400px] -translate-y-1/2 opacity-[0.06]" viewBox="0 0 1400 200" preserveAspectRatio="none">
            <path d="M0,100 C200,60 400,140 600,100 C800,60 1000,140 1200,100" stroke="hsl(200, 80%, 60%)" strokeWidth="3" fill="none" />
          </svg>
        </div>
        
        <div className="container mx-auto relative z-10 px-6 sm:px-8 lg:px-12 max-w-4xl text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-[-0.05em] text-slate-950 animate-fade-in md:text-5xl lg:text-[3.6rem]">
            News & Resources
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto animate-fade-in">
            Company updates, research milestones, and workflow resources from Atabazh Medical.
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-transparent to-transparent z-[5]" />
      </section>

      {/* Featured News - Glassmorphism Cards */}
      <section className="bg-white py-20 lg:py-24 px-6 sm:px-8 lg:px-12">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-10">Company & Research Updates</h2>
          </ScrollReveal>
          
          <div className="space-y-6">
            {[
              {
                date: "June 2026",
                category: "Research",
                title: "NACFC 2026 Abstract Accepted for Presentation",
                summary: "Smart Lung Physio™-related research on airway-clearance variability and workflow inefficiencies has been accepted for presentation at NACFC 2026."
              },
              {
                date: "June 2026",
                category: "Technology Translation",
                title: "World Congress of Biomechanics TTPC Poster Competition Invitation",
                summary: "Smart Lung Physio™ has been invited for presentation in the Poster Competition section of the World Congress of Biomechanics Translational Technology Pitch Competition."
              }
            ].map((news, index) => (
              <ScrollReveal key={index} delay={index === 0 ? 0 : index === 1 ? 100 : 150}>
                <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="aspect-video rounded-xl border border-blue-100 bg-blue-50 flex items-center justify-center">
                          <FileText className="h-12 w-12 text-blue-600/70" />
                        </div>
                      </div>
                      <div className="md:w-2/3 space-y-3">
                        <div className="flex items-center text-sm text-slate-500 space-x-4">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {news.date}
                          </span>
                          <span className="px-3 py-1 bg-blue-100/80 text-blue-700 rounded-full text-xs font-medium">
                            {news.category}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold text-slate-800">
                          {news.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {news.summary}
                        </p>
                        <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                          Update summary
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Resources - Soft Blue Gradient Section */}
      <section className="border-y border-slate-200 bg-[#f8fafc] py-20 lg:py-24 px-6 sm:px-8 lg:px-12">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800">Resources in Preparation</h2>
            <p className="mb-10 mt-3 max-w-3xl text-slate-600">
              These materials are being prepared and are not yet available as public downloads. Contact us to request an update or discuss a specific use case.
            </p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Smart Lung Physio™ Product Overview", desc: "A concise overview of the device concept, workflow focus, development status, and relevance for supervised care settings.", type: "PDF" },
              { title: "Workflow Learning Brief", desc: "A regulatory-safe summary of stakeholder discovery, caregiver usability themes, and pilot-readiness questions.", type: "PDF" },
              { title: "LTC Workflow Discussion Guide", desc: "A practical guide for LTC leaders evaluating respiratory-care routines, documentation needs, and implementation fit.", type: "PDF" },
              { title: "Device Demonstration Video", desc: "A short walkthrough of guided setup, caregiver prompts, session feedback, and documentation concepts.", type: "Video" }
            ].map((resource, index) => (
              <ScrollReveal key={index} delay={index < 2 ? (index === 0 ? 0 : 100) : (index === 2 ? 100 : 150)}>
                <Card className="h-full rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                        <FileText className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-xs px-3 py-1 bg-slate-100 rounded-full text-slate-600 font-medium">{resource.type}</span>
                    </div>
                    <h3 className="font-semibold text-slate-800">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {resource.desc}
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full rounded-xl border-slate-300 bg-white hover:bg-slate-50">
                      <NavLink to="/contact">
                        {resource.type === "Video" ? "Request Demo Video" : "Request Resource"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </NavLink>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="bg-white py-20 lg:py-24 px-6 sm:px-8 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <CardContent className="p-8 md:p-12 text-center space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Media & Collaboration Inquiries</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  For media questions, research discussions, pilot collaboration, or company background, please contact Atabazh Medical.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild 
                    size="lg"
                    className="h-auto rounded-xl bg-blue-600 px-8 py-6 hover:bg-blue-700"
                  >
                    <NavLink to="/contact" className="flex items-center gap-2">
                      Contact Atabazh Medical
                      <ArrowRight className="w-4 h-4" />
                    </NavLink>
                  </Button>
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline"
                    className="h-auto rounded-xl border-slate-300 bg-white px-8 py-6 hover:bg-slate-50"
                  >
                    <NavLink to="/contact">Request Collaboration Brief</NavLink>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter Signup - Gradient Section */}
      <section className="border-t border-slate-800 bg-[#0b1b2f] py-20 lg:py-24 px-6 sm:px-8 lg:px-12">
        <div className="container mx-auto max-w-2xl text-center space-y-6">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Stay Updated</h2>
            <p className="text-slate-300">
              Receive company updates, research milestones, and collaboration opportunities from Atabazh Medical.
            </p>
            <Button asChild size="lg" className="rounded-xl bg-sky-400 px-8 text-slate-950 hover:bg-sky-300">
              <NavLink to="/contact" className="inline-flex items-center gap-2">
                Request Company Updates
                <ArrowRight className="h-4 w-4" />
              </NavLink>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default News;
