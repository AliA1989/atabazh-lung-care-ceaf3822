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
              <h1 className="text-5xl md:text-6xl font-bold">
                Designed for Long-Term Care
              </h1>
              <p className="text-2xl text-muted-foreground">
                Smart Lung Physio™ was developed specifically to address the operational, clinical, and resource challenges facing Canadian LTC homes.
              </p>
              <Button asChild size="lg" className="hero-gradient border-0 text-lg px-8">
                <NavLink to="/contact">Request Information</NavLink>
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

      {/* LTC Context Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">The LTC Context</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We understand the operational realities of long-term care. Smart Lung Physio™ was designed with these challenges in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-soft">
              <CardContent className="p-6 space-y-3">
                <Users className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Staffing Constraints</h3>
                <p className="text-muted-foreground">
                  Limited staff availability makes time-intensive manual chest physiotherapy difficult to deliver consistently.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6 space-y-3">
                <Activity className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Complex Resident Needs</h3>
                <p className="text-muted-foreground">
                  Residents with multiple comorbidities and frailty require careful, individualized respiratory support.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6 space-y-3">
                <DollarSign className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Resource Pressures</h3>
                <p className="text-muted-foreground">
                  Operating budgets are limited while respiratory-related hospital transfers create significant cost burden.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6 space-y-3">
                <FileText className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Documentation Requirements</h3>
                <p className="text-muted-foreground">
                  Regulatory expectations and quality indicators require objective data and documented care practices.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6 space-y-3">
                <Shield className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Infection Control</h3>
                <p className="text-muted-foreground">
                  Heightened awareness of respiratory infections requires effective prevention and management approaches.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6 space-y-3">
                <Clock className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Training Challenges</h3>
                <p className="text-muted-foreground">
                  Staff turnover means continuous training needs. Complex devices create barriers to consistent use.
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
            <h2 className="text-4xl md:text-5xl font-bold">Design Considerations</h2>
          </div>

          <div className="space-y-8">
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <Clock className="h-8 w-8 text-primary" />
                      <h3 className="text-2xl font-bold">Workflow Integration</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">
                      Designed to fit within existing care routines with minimal disruption.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span>One caregiver can operate the device independently</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span>Guided protocol reduces need for continuous supervision</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span>Designed to integrate with morning or evening care routines</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-secondary/50 p-6 rounded-xl">
                    <h4 className="font-semibold mb-3">Time Comparison</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Estimated session duration comparison:
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Manual therapy time:</span>
                        <span className="font-semibold">20+ minutes/session</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Smart Lung Physio™:</span>
                        <span className="font-semibold">~5 minutes/session</span>
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
                    <h4 className="font-semibold mb-3">Training Approach</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Self-paced online module</li>
                      <li>• Hands-on demonstration</li>
                      <li>• Quick reference materials at bedside</li>
                      <li>• In-app video guides</li>
                      <li>• Technical support available</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4">
                      <strong className="text-foreground">Target time to competency: under 30 minutes</strong>
                    </p>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="flex items-center space-x-3 mb-4">
                      <Users className="h-8 w-8 text-primary" />
                      <h3 className="text-2xl font-bold">Accessible Design</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">
                      Designed for practical use by care teams with varying skill levels.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span>No specialized certification required</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span>PSWs, RPNs, and RNs can operate the device</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span>Step-by-step app interface guides each session</span>
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
                      <h3 className="text-2xl font-bold">Operational Considerations</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">
                      Designed to address key operational pain points for LTC facilities.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span>May reduce time burden on care staff</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span>Automatic session documentation for records</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        <span>Supports quality improvement documentation</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-secondary/50 p-6 rounded-xl">
                    <h4 className="font-semibold mb-3">Potential Impact Areas</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Based on preliminary pilot observations:
                    </p>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Staff time efficiency</p>
                        <p className="text-lg font-bold text-primary">Reduced session duration</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Documentation support</p>
                        <p className="text-lg font-bold text-primary">Automatic session logging</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Implementation Approach</h2>
            <p className="text-xl text-muted-foreground">
              We work with facilities to support structured deployment
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="shadow-soft text-center">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full hero-gradient flex items-center justify-center text-xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="font-bold">Initial Discussion</h3>
                <p className="text-sm text-muted-foreground">
                  Understand your facility's context, workflows, and objectives
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft text-center">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full hero-gradient flex items-center justify-center text-xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="font-bold">Staff Training</h3>
                <p className="text-sm text-muted-foreground">
                  Structured onboarding for your care team with ongoing support
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft text-center">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full hero-gradient flex items-center justify-center text-xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="font-bold">Pilot Deployment</h3>
                <p className="text-sm text-muted-foreground">
                  Start with a small cohort to assess fit in your specific setting
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft text-center">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full hero-gradient flex items-center justify-center text-xl font-bold text-primary-foreground">
                  4
                </div>
                <h3 className="font-bold">Evaluation</h3>
                <p className="text-sm text-muted-foreground">
                  Review results and determine next steps based on your experience
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Interested in Learning More?</h2>
          <p className="text-xl text-muted-foreground">
            We welcome conversations with LTC operators, clinical leaders, and care organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="hero-gradient border-0 text-lg px-8">
              <NavLink to="/contact">Contact Us</NavLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <NavLink to="/clinical-evidence">View Clinical Insights</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LongTermCare;
