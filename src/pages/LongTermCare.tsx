import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { CheckCircle, Users, Clock, DollarSign, Shield, FileText, Activity } from "lucide-react";
import ltcCare from "@/assets/ltc-care.jpg";

const LongTermCare = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-heading font-bold">
                Purpose-Built for Long-Term Care
              </h1>
              <p className="text-2xl text-muted-foreground">
                Smart Lung Physio™ addresses the unique operational, clinical, and financial challenges facing Canadian LTC homes
              </p>
              <Button asChild size="lg" className="hero-gradient border-0 text-lg px-8">
                <NavLink to="/contact">Schedule a Facility Assessment</NavLink>
              </Button>
            </div>
            <div>
              <img
                src={ltcCare}
                alt="Long-term care facility"
                className="rounded-2xl shadow-medium w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LTC Challenges */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">We Understand Your Challenges</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Long-term care homes face unprecedented pressures. Smart Lung Physio™ was designed with these realities in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-soft">
              <CardContent className="p-6 space-y-3">
                <Users className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-heading font-bold">Staff Shortage Crisis</h3>
                <p className="text-muted-foreground">
                  Chronic understaffing means every minute counts. Manual chest physiotherapy requires 20+ minutes of dedicated staff time that simply isn't available.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6 space-y-3">
                <Activity className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-heading font-bold">High Acuity Residents</h3>
                <p className="text-muted-foreground">
                  Increasingly complex care needs including multiple comorbidities, frailty, and respiratory conditions require specialized interventions.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6 space-y-3">
                <DollarSign className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-heading font-bold">Financial Constraints</h3>
                <p className="text-muted-foreground">
                  Hospital transfers are expensive (avg. $15,000+ per incident) while operating budgets remain tight. Cost-effective prevention is essential.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6 space-y-3">
                <FileText className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-heading font-bold">Regulatory Requirements</h3>
                <p className="text-muted-foreground">
                  Increasing documentation demands, quality indicators, and accountability standards require objective data and evidence-based practices.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6 space-y-3">
                <Shield className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-heading font-bold">Infection Control</h3>
                <p className="text-muted-foreground">
                  Post-pandemic heightened awareness of respiratory infections and transmission risk demands better prevention and management strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6 space-y-3">
                <Clock className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-heading font-bold">Training Challenges</h3>
                <p className="text-muted-foreground">
                  High staff turnover means constant retraining. Complex medical devices create barriers to adoption and consistent use.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Address Challenges */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Our LTC-Specific Solutions</h2>
          </div>

          <div className="space-y-8">
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <Clock className="h-8 w-8 text-primary" />
                      <h3 className="text-2xl font-heading font-bold">Minimal Staff Time</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">
                      <strong className="text-foreground">5 minutes</strong> vs. 20+ minutes for manual therapy
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span>One caregiver can complete therapy alone</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span>Device automatically runs protocol—no constant supervision needed</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span>Fits into existing morning or evening care routines</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-secondary/50 p-6 rounded-xl">
                    <h4 className="font-heading font-semibold mb-3">Time Savings Example</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      For a 120-bed facility treating 15 high-risk residents daily:
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Manual therapy time:</span>
                        <span className="font-semibold">5.3 hours/day</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Smart Lung Physio™:</span>
                        <span className="font-semibold">1.3 hours/day</span>
                      </div>
                      <div className="border-t border-border pt-2 mt-2 flex justify-between">
                        <span className="text-primary font-semibold">Time saved:</span>
                        <span className="text-primary font-bold">4 hours/day</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1 bg-secondary/50 p-6 rounded-xl">
                    <h4 className="font-heading font-semibold mb-3">Training Curriculum</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 20-minute online module (self-paced)</li>
                      <li>• 10-minute hands-on demonstration</li>
                      <li>• Quick reference cards at bedside</li>
                      <li>• In-app video guides for refresh training</li>
                      <li>• 24/7 tech support hotline</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4">
                      <strong className="text-foreground">Average time to competency: 28 minutes</strong>
                    </p>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="flex items-center space-x-3 mb-4">
                      <Users className="h-8 w-8 text-primary" />
                      <h3 className="text-2xl font-heading font-bold">Simple to Learn & Use</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">
                      <strong className="text-foreground">Under 30 minutes</strong> from first training to independent use
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span>No specialized respiratory therapy certification required</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span>PSWs, RPNs, and RNs can all deliver therapy</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span>Intuitive app interface guides each step</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <DollarSign className="h-8 w-8 text-primary" />
                      <h3 className="text-2xl font-heading font-bold">Strong ROI for Facilities</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">
                      Multiple pathways to cost savings and improved outcomes
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span>Reduce expensive hospital transfers ($15K+ per incident)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span>Free up staff time for other high-priority care tasks</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span>Demonstrate quality improvement to families and regulators</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span>Potential for government grants and innovation funding</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-secondary/50 p-6 rounded-xl">
                    <h4 className="font-heading font-semibold mb-3">Financial Impact Model</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Typical 120-bed LTC facility treating 15 residents:
                    </p>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Hospital transfer savings (42% reduction)</p>
                        <p className="text-lg font-heading font-bold text-primary">$63,000/year</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Labor cost savings (4 hrs/day freed)</p>
                        <p className="text-lg font-heading font-bold text-primary">$42,000/year</p>
                      </div>
                      <div className="border-t border-border pt-3">
                        <p className="text-xs text-muted-foreground mb-1">Estimated annual benefit</p>
                        <p className="text-2xl font-heading font-bold text-primary">$105,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Seamless Implementation</h2>
            <p className="text-xl text-muted-foreground">
              We guide you through every step from initial assessment to full integration
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="shadow-soft text-center">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full hero-gradient flex items-center justify-center text-xl font-heading font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="font-heading font-bold">Facility Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  Evaluate your resident population, workflows, and implementation goals
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft text-center">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full hero-gradient flex items-center justify-center text-xl font-heading font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="font-heading font-bold">Staff Training</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive onboarding for your care team with ongoing support resources
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft text-center">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full hero-gradient flex items-center justify-center text-xl font-heading font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="font-heading font-bold">Pilot Program</h3>
                <p className="text-sm text-muted-foreground">
                  Start with a small cohort to validate outcomes in your specific setting
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft text-center">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full hero-gradient flex items-center justify-center text-xl font-heading font-bold text-primary-foreground">
                  4
                </div>
                <h3 className="font-heading font-bold">Full Rollout</h3>
                <p className="text-sm text-muted-foreground">
                  Expand to all appropriate residents with continuous monitoring and optimization
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Ready to Transform Respiratory Care at Your Facility?</h2>
          <p className="text-xl text-muted-foreground">
            Schedule a free facility assessment to see how Smart Lung Physio™ fits your unique needs and goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="hero-gradient border-0 text-lg px-8">
              <NavLink to="/contact">Schedule Assessment</NavLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <a href="#" download>Download LTC Fact Sheet</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LongTermCare;
