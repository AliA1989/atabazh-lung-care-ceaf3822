import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { FileText, TrendingDown, Activity, Users, Clock, Shield, FlaskConical, AlertCircle, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const ClinicalEvidence = () => {
  return (
    <div className="min-h-screen">
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
            Clinical Insights
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto animate-fade-in">
            Preliminary observations from initial pilot deployments in Canadian long-term care settings
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[5]" />
      </section>

      {/* Early Observations - Unified styling */}
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12">
        <div className="container mx-auto">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-800">Early Observations</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Initial deployments have provided directional signals. Formal validation studies are planned.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: TrendingDown, stat: "~40%", title: "Fewer Hospital Transfers", desc: "Observed reduction in respiratory-related transfers during pilot period" },
              { icon: Activity, stat: "~35%", title: "Fewer Acute Episodes", desc: "Preliminary reduction in acute respiratory events among observed residents" },
              { icon: Clock, stat: "~75%", title: "Time Reduction", desc: "Compared to traditional manual chest physiotherapy methods" },
              { icon: Users, stat: "Positive", title: "Staff Feedback", desc: "Care teams rated the device as accessible and practical" }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index === 0 ? 0 : index === 1 ? 100 : index === 2 ? 150 : 200}>
                <Card className="text-center backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl shadow-slate-900/5 rounded-2xl h-full">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-blue-600">{item.stat}</div>
                    <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Observations - Soft Blue Gradient */}
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-[hsl(200,40%,97%)] via-[hsl(200,50%,95%)] to-[hsl(210,50%,92%)]">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-800 text-center mb-12">Operational Observations</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <Card className="backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl shadow-slate-900/5 rounded-2xl h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4">Workflow Integration</h3>
                  <p className="text-slate-600 mb-6">
                    Initial deployments suggest potential time savings in daily respiratory care routines:
                  </p>
                  <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100/50 space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Smart Lung Physio™ Session</h4>
                      <p className="text-2xl font-bold text-blue-600">~5 minutes</p>
                      <p className="text-sm text-slate-500">Approximate session duration including setup</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Traditional Manual Approach</h4>
                      <p className="text-2xl font-bold text-slate-400">20+ minutes</p>
                      <p className="text-sm text-slate-500">Typical duration per manual chest physiotherapy session</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl shadow-slate-900/5 rounded-2xl h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4">Staff Feedback</h3>
                  <p className="text-slate-600 mb-6">
                    Preliminary feedback from care staff during pilot deployments:
                  </p>
                  <ul className="space-y-3 text-sm text-slate-600">
                    {[
                      "Staff reported the device was accessible and practical to operate",
                      "Average training time to basic competency: approximately 30 minutes",
                      "Care teams found automated session documentation useful",
                      "Integration into existing care routines was generally straightforward"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={150} className="mt-8">
            <Card className="backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl shadow-slate-900/5 rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4">Observed Trends</h3>
                <p className="text-slate-600 mb-4">
                  During early pilot observations, signals suggest the device may support reduced respiratory complications:
                </p>
                <ul className="space-y-3 text-sm text-slate-600">
                  {[
                    { label: "Hospital transfers", desc: "Pilot observations suggest a directional reduction in respiratory-related hospital transfers during the observation period" },
                    { label: "Acute episodes", desc: "Preliminary findings indicate fewer acute respiratory events among observed residents" },
                    { label: "Antibiotic use", desc: "Some pilot sites noted a directional reduction in respiratory-related antibiotic prescriptions" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span><strong className="text-slate-800">{item.label}:</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-500 mt-4 italic">
                  These observations are preliminary and based on internal pilot data. Formal validation studies are planned.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Safety Observations - Unified styling */}
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-800 text-center mb-12">Safety Observations</h2>
          </ScrollReveal>
          
          <ScrollReveal>
            <Card className="backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl shadow-slate-900/5 rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Early Safety Profile</h3>
                    <p className="text-slate-600">
                      Throughout pilot deployments, the device demonstrated a favorable tolerability profile with no serious device-related adverse events reported.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100/50">
                    <h4 className="font-semibold text-slate-800 mb-3">Resident Tolerability</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Most residents tolerated therapy well</li>
                      <li>• Rare instances of minor temporary discomfort, self-resolving</li>
                      <li>• No therapy discontinuations due to intolerance observed</li>
                      <li>• Sensor-guided pressure control supports gentle, adaptive therapy</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100/50">
                    <h4 className="font-semibold text-slate-800 mb-3">Device Safety Features</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Real-time SpO₂ monitoring with automatic pause</li>
                      <li>• Pressure-limiting safeguards</li>
                      <li>• Designed for frail elderly populations</li>
                      <li>• Visual and audio alerts for caregivers</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Validation Roadmap - Soft Blue Gradient */}
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-[hsl(200,40%,97%)] via-[hsl(200,50%,95%)] to-[hsl(210,50%,92%)]">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-800 text-center mb-12">Validation Roadmap</h2>
          </ScrollReveal>
          
          <div className="space-y-6">
            <ScrollReveal>
              <Card className="backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl shadow-slate-900/5 rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <FlaskConical className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Ongoing Activities</h3>
                      <p className="text-slate-600">
                        We are committed to building a robust evidence base through structured clinical validation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-800">Current Activities</h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        {[
                          "Expanding pilot deployments across additional LTC sites",
                          "Collecting standardized outcome data for future analysis",
                          "Gathering structured feedback from care teams and medical directors"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-600 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-800">Planned Next Steps</h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        {[
                          "Formal prospective studies with structured protocols",
                          "Independent data review and analysis",
                          "Preparation of findings for peer-reviewed publication"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-600 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl shadow-slate-900/5 rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">Related Materials</h3>
                  <div className="space-y-4">
                    {[
                      { title: "Operational White Paper: Automated Airway Clearance in Canadian LTC Homes", source: "Internal discussion paper, Atabazh Medical Inc., 2024" },
                      { title: "Pilot Deployment Summary: Early Observations", source: "Internal report, Atabazh Medical Inc., 2024" }
                    ].map((doc, i) => (
                      <div key={i} className="flex items-start space-x-4">
                        <FileText className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-medium text-slate-800 text-base mb-1">{doc.title}</h4>
                          <p className="text-sm text-slate-500">{doc.source}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 px-6 sm:px-8 lg:px-12 border-t border-slate-200/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-start gap-3 text-sm text-slate-500">
            <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5 text-slate-400" />
            <p>
              <strong className="text-slate-700">Important Note:</strong> The observations presented on this page are based on internal pilot deployments and preliminary data collection. They do not represent results from peer-reviewed clinical trials or regulatory submissions. Smart Lung Physio™ is a medical device under development. Formal clinical validation is ongoing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA - Unified styling */}
      <section className="py-24 lg:py-32 px-6 sm:px-8 lg:px-12">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-800">Interested in Learning More?</h2>
            <p className="text-lg text-slate-600">
              We welcome conversations with clinicians, researchers, and care organizations
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
              <Button 
                asChild 
                size="lg" 
                className="rounded-full text-base px-9 py-7 h-auto bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(210,80%,45%)] hover:from-[hsl(200,80%,45%)] hover:to-[hsl(210,85%,40%)] shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <NavLink to="/contact" className="flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </NavLink>
              </Button>
              <Button 
                asChild 
                variant="outline"
                size="lg" 
                className="rounded-full text-base px-9 py-7 h-auto bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-slate-700"
              >
                <NavLink to="/device">View Device Details</NavLink>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ClinicalEvidence;
