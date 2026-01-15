import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Activity, Brain, TrendingUp, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const HowItWorks = () => {
  const [openStep, setOpenStep] = useState<number | null>(null);

  const toggleStep = (step: number) => {
    setOpenStep(openStep === step ? null : step);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            How It Works
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A three-step approach to sensor-guided airway clearance—designed for consistency, safety, and simplicity.
          </p>
        </div>
      </section>

      {/* Three-Step Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-8">
            
            {/* Step 1: Assess */}
            <Card className="border border-border/50 shadow-sm overflow-hidden">
              <CardContent className="p-0">
                {/* Primary Content - Always Visible */}
                <div className="p-8 lg:p-10">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-heading font-bold text-primary">1</span>
                    </div>
                    <div className="flex-1 space-y-3">
                      <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                        Assess
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        The device captures baseline readings—applied pressure, oxygen saturation, and placement confirmation—before therapy begins.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Expandable Details */}
                <Collapsible open={openStep === 1} onOpenChange={() => toggleStep(1)}>
                  <CollapsibleTrigger className="w-full px-8 lg:px-10 py-4 border-t border-border/30 bg-secondary/20 hover:bg-secondary/40 transition-colors flex items-center justify-between text-sm font-medium text-muted-foreground">
                    <span>View technical details</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openStep === 1 ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-8 lg:px-10 py-6 bg-secondary/10 border-t border-border/20 space-y-4">
                      <p className="text-sm font-medium text-foreground">Sensor Measurements:</p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Activity className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            <strong className="text-foreground">Applied Chest Pressure (FSR Sensor):</strong> Measures force applied to the chest wall in real time.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Activity className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            <strong className="text-foreground">Oxygen Saturation (SpO₂):</strong> Monitors blood oxygen levels throughout the session.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Activity className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            <strong className="text-foreground">Therapy Zone Detection:</strong> Confirms correct device placement and resident tolerance.
                          </span>
                        </li>
                      </ul>
                      <p className="text-sm text-muted-foreground pt-2">
                        Assessment takes 20–30 seconds and is designed to help adjust therapy levels based on the resident's condition.
                      </p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>

            {/* Step 2: Treat */}
            <Card className="border border-border/50 shadow-sm overflow-hidden">
              <CardContent className="p-0">
                {/* Primary Content - Always Visible */}
                <div className="p-8 lg:p-10">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-heading font-bold text-primary">2</span>
                    </div>
                    <div className="flex-1 space-y-3">
                      <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                        Treat
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Caregivers follow a guided protocol with real-time feedback on pressure, timing, and resident safety.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Expandable Details */}
                <Collapsible open={openStep === 2} onOpenChange={() => toggleStep(2)}>
                  <CollapsibleTrigger className="w-full px-8 lg:px-10 py-4 border-t border-border/30 bg-secondary/20 hover:bg-secondary/40 transition-colors flex items-center justify-between text-sm font-medium text-muted-foreground">
                    <span>View technical details</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openStep === 2 ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-8 lg:px-10 py-6 bg-secondary/10 border-t border-border/20 space-y-4">
                      <p className="text-sm font-medium text-foreground">Therapy Features:</p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Brain className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            <strong className="text-foreground">Pressure Feedback:</strong> FSR sensor helps maintain appropriate chest-wall pressure during percussion.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Brain className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            <strong className="text-foreground">Guided Technique:</strong> Visual cues on the mobile app support caregivers in maintaining consistent force and timing.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Brain className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div className="text-sm text-muted-foreground">
                            <strong className="text-foreground">Safety Monitoring:</strong>
                            <ul className="mt-2 ml-4 space-y-1 text-muted-foreground">
                              <li>• SpO₂ drop alerts</li>
                              <li>• Excessive force warnings</li>
                              <li>• Guided pause prompts</li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                      <p className="text-sm text-muted-foreground pt-2">
                        Each treatment session typically lasts 4–5 minutes.
                      </p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>

            {/* Step 3: Review */}
            <Card className="border border-border/50 shadow-sm overflow-hidden">
              <CardContent className="p-0">
                {/* Primary Content - Always Visible */}
                <div className="p-8 lg:p-10">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-heading font-bold text-primary">3</span>
                    </div>
                    <div className="flex-1 space-y-3">
                      <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                        Review
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Session data syncs to a dashboard for care teams to track compliance, review trends, and support documentation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Expandable Details */}
                <Collapsible open={openStep === 3} onOpenChange={() => toggleStep(3)}>
                  <CollapsibleTrigger className="w-full px-8 lg:px-10 py-4 border-t border-border/30 bg-secondary/20 hover:bg-secondary/40 transition-colors flex items-center justify-between text-sm font-medium text-muted-foreground">
                    <span>View technical details</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openStep === 3 ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-8 lg:px-10 py-6 bg-secondary/10 border-t border-border/20 space-y-4">
                      <p className="text-sm font-medium text-foreground">Dashboard Access:</p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            <strong className="text-foreground">Session Details:</strong> Pressure patterns, duration, and protocol compliance.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            <strong className="text-foreground">SpO₂ Trends:</strong> Before, during, and after therapy readings.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            <strong className="text-foreground">Resident Progress:</strong> Changes over days and weeks.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            <strong className="text-foreground">Documentation Support:</strong> Session notes for physicians, audits, and LTC reporting.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-3xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Learn More
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions about how Smart Lung Physio™ may support respiratory care at your facility?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <NavLink to="/contact">Get in Touch</NavLink>
            </Button>
            <Button asChild size="lg" variant="outline">
              <NavLink to="/clinical-evidence">View Clinical Evidence</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
