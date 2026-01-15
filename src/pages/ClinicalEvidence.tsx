import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { FileText, TrendingDown, Activity, Users, Clock, Shield, FlaskConical, AlertCircle } from "lucide-react";

const ClinicalEvidence = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Early Clinical Insights
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Preliminary observations from initial pilot deployments in Canadian long-term care settings
          </p>
        </div>
      </section>

      {/* Section 1: What We've Observed in Early Pilots */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">What We've Observed in Early Pilots</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Initial deployments have shown encouraging directional signals across key respiratory care metrics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center">
                  <TrendingDown className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold text-primary">~40%</div>
                <h3 className="text-lg font-semibold">Fewer Hospital Transfers</h3>
                <p className="text-sm text-muted-foreground">Observed reduction in respiratory-related transfers during pilot period</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center">
                  <Activity className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold text-primary">~35%</div>
                <h3 className="text-lg font-semibold">Fewer Acute Episodes</h3>
                <p className="text-sm text-muted-foreground">Preliminary reduction in acute respiratory events among observed residents</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center">
                  <Clock className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold text-primary">~75%</div>
                <h3 className="text-lg font-semibold">Time Savings</h3>
                <p className="text-sm text-muted-foreground">Estimated caregiver time reduction compared to manual chest physiotherapy</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold text-primary">High</div>
                <h3 className="text-lg font-semibold">Staff Acceptance</h3>
                <p className="text-sm text-muted-foreground">Care teams consistently rated the device as easy to learn and integrate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2: Operational & Care Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Operational & Care Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-4">Workflow Observations</h3>
                <p className="text-muted-foreground mb-4">
                  Initial deployments suggest potential for meaningful time savings in daily respiratory care routines:
                </p>
                <div className="bg-secondary/50 p-6 rounded-xl space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Smart Lung Physio™ Session</h4>
                    <p className="text-2xl font-bold text-primary">~5 minutes</p>
                    <p className="text-sm text-muted-foreground">Approximate session duration including setup</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Traditional Manual Approach</h4>
                    <p className="text-2xl font-bold text-muted-foreground">20+ minutes</p>
                    <p className="text-sm text-muted-foreground">Typical duration per manual chest physiotherapy session</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  These time savings may allow care teams to deliver more consistent respiratory support across their resident population.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-4">Care Team Feedback</h3>
                <p className="text-muted-foreground mb-4">
                  Preliminary feedback from care staff during pilot deployments has been encouraging:
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Staff reported the device was easy to learn and operate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Average training time to basic competency: approximately 30 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Care teams appreciated automated session documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Integration into existing care routines was generally smooth</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardContent className="p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Observed Trends in Respiratory Events</h3>
              <p className="text-muted-foreground mb-4">
                During early pilot observations, signals suggest the device may support reduced respiratory complications:
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span><strong className="text-foreground">Hospital transfers:</strong> Pilot observations suggest an approximate 40% reduction in respiratory-related hospital transfers during the observation period</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span><strong className="text-foreground">Acute episodes:</strong> Preliminary findings indicate fewer acute respiratory events among observed high-risk residents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span><strong className="text-foreground">Antibiotic use:</strong> Some pilot sites noted a directional reduction in respiratory-related antibiotic prescriptions</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4 italic">
                These observations are preliminary and based on internal pilot data. Formal validation studies are planned.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 3: Safety & Tolerability Signals */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Safety & Tolerability Signals</h2>
          
          <Card>
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Early Safety Observations</h3>
                  <p className="text-muted-foreground">
                    Throughout pilot deployments, the device demonstrated a favorable tolerability profile with no serious device-related adverse events reported.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-secondary/30 p-6 rounded-xl">
                  <h4 className="font-semibold mb-3">Resident Tolerability</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Most residents tolerated therapy well</li>
                    <li>• Rare instances of minor temporary discomfort, self-resolving</li>
                    <li>• No therapy discontinuations due to intolerance observed</li>
                    <li>• Sensor-guided pressure control supports gentle, adaptive therapy</li>
                  </ul>
                </div>
                
                <div className="bg-secondary/30 p-6 rounded-xl">
                  <h4 className="font-semibold mb-3">Device Safety Features</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Real-time SpO₂ monitoring with automatic pause</li>
                    <li>• Pressure-limiting safeguards</li>
                    <li>• Designed for frail elderly populations</li>
                    <li>• Clear visual and audio alerts for caregivers</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 4: Evidence in Progress */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Evidence in Progress</h2>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FlaskConical className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ongoing Validation Efforts</h3>
                    <p className="text-muted-foreground">
                      We are committed to building a robust evidence base through structured clinical validation. Current and planned activities include:
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Current Activities</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Expanding pilot deployments across additional LTC sites</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Collecting standardized outcome data for future analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Gathering structured feedback from care teams and medical directors</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold">Planned Next Steps</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Formal prospective studies with structured protocols</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Independent data review and analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Preparation of findings for peer-reviewed publication</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Related Materials</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-base mb-1">
                        Operational White Paper: Automated Airway Clearance in Canadian LTC Homes
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Internal discussion paper, Atabazh Medical Inc., 2024
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-base mb-1">
                        Pilot Deployment Summary: Early Observations and Next Steps
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Internal report, Atabazh Medical Inc., 2024
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-start gap-3 text-sm text-muted-foreground">
            <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
            <p>
              <strong className="text-foreground">Important Note:</strong> The observations presented on this page are based on internal pilot deployments and preliminary data collection. They do not represent results from peer-reviewed clinical trials or regulatory submissions. Smart Lung Physio™ is a medical device under development. Formal clinical validation is ongoing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Interested in Learning More?</h2>
          <p className="text-lg text-muted-foreground">
            We welcome conversations with clinicians, researchers, and care organizations interested in respiratory care innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <NavLink to="/contact">Get in Touch</NavLink>
            </Button>
            <Button asChild size="lg" variant="outline">
              <NavLink to="/device">Explore the Device</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClinicalEvidence;
