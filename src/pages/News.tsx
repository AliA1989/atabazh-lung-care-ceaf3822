import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { FileText, Calendar, ExternalLink, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const News = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section - Master Design System */}
      <section className="relative py-24 lg:py-32 overflow-hidden pt-32">
        {/* Soft blue gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(200,40%,98%)] via-[hsl(200,50%,95%)] to-[hsl(210,60%,90%)] z-0" />
        
        {/* Abstract wave pattern */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          <svg className="absolute top-1/2 left-0 w-[200%] h-[400px] -translate-y-1/2 opacity-[0.06]" viewBox="0 0 1400 200" preserveAspectRatio="none">
            <path d="M0,100 C200,60 400,140 600,100 C800,60 1000,140 1200,100" stroke="hsl(200, 80%, 60%)" strokeWidth="3" fill="none" />
          </svg>
        </div>
        
        <div className="container mx-auto relative z-10 px-6 sm:px-8 lg:px-12 max-w-4xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 animate-fade-in">
            News & Resources
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto animate-fade-in">
            Latest updates, research publications, and educational resources from Atabazh Medical
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-transparent to-transparent z-[5]" />
      </section>

      {/* Featured News - Glassmorphism Cards */}
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-10">Latest News</h2>
          </ScrollReveal>
          
          <div className="space-y-6">
            {[
              {
                date: "November 15, 2024",
                category: "Company News",
                title: "Atabazh Medical Completes $2.5M Seed Round to Expand Smart Lung Physio™ Pilot Program",
                summary: "Toronto-based medical device startup Atabazh Medical announced the close of a $2.5 million seed financing round led by healthcare-focused venture firms. The funding will accelerate pilot deployments across Canadian LTC facilities and support Health Canada regulatory submission."
              },
              {
                date: "October 8, 2024",
                category: "Research",
                title: "Pilot Study Results Presented at Canadian Association on Gerontology Annual Conference",
                summary: "Atabazh Medical research team presented promising pilot study data showing 42% reduction in hospital transfers for respiratory complications. The multi-site study included 156 LTC residents across 4 Ontario facilities."
              },
              {
                date: "September 20, 2024",
                category: "Partnership",
                title: "Partnership with Ontario Long-Term Care Association to Advance Respiratory Innovation",
                summary: "Atabazh Medical has formalized a strategic partnership with the Ontario Long-Term Care Association to facilitate Smart Lung Physio™ pilot programs and gather real-world implementation insights from member facilities."
              }
            ].map((news, index) => (
              <ScrollReveal key={index} delay={index === 0 ? 0 : index === 1 ? 100 : 150}>
                <Card className="backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl shadow-slate-900/5 rounded-2xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="aspect-video bg-gradient-to-br from-[hsl(200,60%,95%)] to-[hsl(210,50%,90%)] rounded-xl flex items-center justify-center border border-white/50">
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
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="rounded-full border-slate-200 hover:bg-white/80"
                        >
                          Read More <ExternalLink className="h-4 w-4 ml-2" />
                        </Button>
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
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-[hsl(200,40%,97%)] via-[hsl(200,50%,95%)] to-[hsl(210,50%,92%)]">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-10">Educational Resources</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Smart Lung Physio™ Product Overview", desc: "Comprehensive 2-page overview of device features, clinical benefits, and implementation process for LTC decision-makers.", type: "PDF" },
              { title: "Clinical Evidence Summary", desc: "Detailed review of pilot study methodology, results, and implications for respiratory care in long-term care settings.", type: "PDF" },
              { title: "ROI Calculator for LTC Facilities", desc: "Interactive tool to estimate financial impact of Smart Lung Physio™ implementation based on your facility's specific parameters.", type: "PDF" },
              { title: "Device Demonstration Video", desc: "5-minute walkthrough of Smart Lung Physio™ setup, therapy session, and data review process narrated by clinical team.", type: "Video" }
            ].map((resource, index) => (
              <ScrollReveal key={index} delay={index < 2 ? (index === 0 ? 0 : 100) : (index === 2 ? 100 : 150)}>
                <Card className="backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl shadow-slate-900/5 rounded-2xl h-full hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
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
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full rounded-full border-slate-200 hover:bg-white/80"
                    >
                      {resource.type === "Video" ? "Watch Video" : "Download"} <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <Card className="backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl shadow-slate-900/5 rounded-2xl">
              <CardContent className="p-8 md:p-12 text-center space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Media & Press Inquiries</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  For press inquiries, interview requests, or to access our media kit including high-resolution images, company background, and executive bios, please contact our communications team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild 
                    size="lg"
                    className="rounded-full px-8 py-6 h-auto bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] hover:from-[hsl(200,80%,45%)] hover:to-[hsl(210,85%,40%)] shadow-lg shadow-blue-500/25"
                  >
                    <NavLink to="/contact" className="flex items-center gap-2">
                      Contact Media Team
                      <ArrowRight className="w-4 h-4" />
                    </NavLink>
                  </Button>
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline"
                    className="rounded-full px-8 py-6 h-auto bg-white/80 border-slate-200 hover:bg-white"
                  >
                    <a href="#" download>Download Media Kit</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter Signup - Gradient Section */}
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-[hsl(200,40%,97%)] via-[hsl(200,50%,95%)] to-[hsl(210,50%,92%)]">
        <div className="container mx-auto max-w-2xl text-center space-y-6">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Stay Updated</h2>
            <p className="text-slate-600">
              Subscribe to receive the latest news, research updates, and resources from Atabazh Medical
            </p>
            <Card className="backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl shadow-slate-900/5 rounded-2xl">
              <CardContent className="p-6">
                <form className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-5 py-3.5 rounded-full border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400"
                  />
                  <Button 
                    type="submit" 
                    size="lg"
                    className="rounded-full px-8 bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] hover:from-[hsl(200,80%,45%)] hover:to-[hsl(210,85%,40%)] shadow-lg shadow-blue-500/25"
                  >
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-slate-500 mt-4">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default News;
