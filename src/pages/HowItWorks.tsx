import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Activity, Brain, TrendingUp } from "lucide-react";
const HowItWorks = () => {
  return <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-heading font-bold">
            How It Works
          </h1>
          <p className="text-2xl text-muted-foreground">
            Smart Lung Physio™ combines advanced sensors, adaptive algorithms, and intuitive design for effective respiratory care
          </p>
        </div>
      </section>

      {/* Three-Step Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="shadow-medium lg:order-1">
                <CardContent className="p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center text-3xl font-heading font-bold text-primary-foreground">
                      1
                    </div>
                    <h2 className="text-4xl font-heading font-bold">Assess</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground">
                      Before therapy begins, Smart Lung Physio™ performs a real-time baseline respiratory assessment using its integrated sensor system.
                    </p>
                    <p className="text-lg font-semibold text-foreground">It Measures:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Activity className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Applied Chest Pressure (FSR Sensor):</strong>Applied Chest Pressure :</span>
                      </li>
                      <li className="flex items-start">
                        <Activity className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Oxygen Saturation (SpO₂):</strong>Oxygen Saturation :</span>
                      </li>
                      <li className="flex items-start">
                        <Activity className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Therapy Zone Detection:</strong> Adaptive system confirms correct device placement and resident tolerance.</span>
                      </li>
                    </ul>
                    <p className="text-lg text-muted-foreground">
                      This assessment takes 20–30 seconds and automatically adjusts the therapy level based on the resident's condition.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <div className="lg:order-2">
                <div className="bg-secondary/50 p-8 rounded-2xl shadow-soft">
                  <h3 className="text-2xl font-heading font-bold mb-4">Why Assessment Matters</h3>
                  <p className="text-muted-foreground">
                    Traditional manual chest physiotherapy cannot measure consistency, force, or tolerance. Smart Lung Physio™ solves this by delivering quantified, repeatable, and resident-specific therapy — reducing risk and improving outcomes.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="shadow-medium lg:order-2">
                <CardContent className="p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center text-3xl font-heading font-bold text-primary-foreground">
                      2
                    </div>
                    <h2 className="text-4xl font-heading font-bold">Treat</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground">
                      After assessment, the device guides caregivers through a structured, sensor-supported airway-clearance protocol.
                    </p>
                    <p className="text-lg font-semibold text-foreground">Therapy Features</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Brain className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Adaptive Pressure Modulation:</strong> FSR sensor maintains optimal chest-wall pressure for mucus mobilization.</span>
                      </li>
                      <li className="flex items-start">
                        <Brain className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Guided Technique:</strong> Visual cues on the mobile app coach caregivers to maintain consistent force and timing.</span>
                      </li>
                      <li className="flex items-start">
                        <Brain className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                        <div className="text-muted-foreground">
                          <strong className="text-foreground">Safety Auto-Monitoring:</strong>
                          <ul className="mt-2 ml-4 space-y-1">
                            <li>SpO₂ drops → device alerts caregiver</li>
                            <li>Excessive force → haptic & visual warnings</li>
                            <li>Resident discomfort → guided pause</li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                    <p className="text-lg text-muted-foreground">
                      Each treatment session lasts 4–5 minutes, reducing workload while improving consistency.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <div className="lg:order-1">
                <div className="bg-secondary/50 p-8 rounded-2xl shadow-soft">
                  <h3 className="text-2xl font-heading font-bold mb-4">The Science Behind OPEP</h3>
                  <p className="text-muted-foreground mb-4">
                    Oscillating positive expiratory pressure creates vibrations in the airways that help loosen secretions, prevent airway collapse, and improve lung recruitment.
                  </p>
                  <p className="text-muted-foreground">
                    Combined with positive pressure that helps keep small airways open, this therapy effectively mobilizes mucus while strengthening respiratory muscles—essential for preventing pneumonia in frail residents.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="shadow-medium lg:order-1">
                <CardContent className="p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center text-3xl font-heading font-bold text-primary-foreground">
                      3
                    </div>
                    <h2 className="text-4xl font-heading font-bold">Review</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground">
                      After each session, all clinical data automatically syncs to the cloud-based dashboard where care teams can review outcomes and track trends.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Session Summaries:</strong> Complete record of therapy parameters, duration, and resident tolerance</span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Trend Analysis:</strong> Visualize respiratory status changes over days, weeks, and months</span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                        <span className="text-muted-foreground"><strong className="text-foreground">Clinical Reports:</strong> Generate physician-ready documentation for care planning and regulatory compliance</span>
                      </li>
                    </ul>
                    <p className="text-lg text-muted-foreground">
                      Alerts notify care teams of significant changes in respiratory status, enabling early intervention before acute issues develop.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <div className="lg:order-2">
                <div className="bg-secondary/50 p-8 rounded-2xl shadow-soft">
                  <h3 className="text-2xl font-heading font-bold mb-4">Data-Driven Care</h3>
                  <p className="text-muted-foreground mb-4">
                    Traditional manual chest physiotherapy provides no objective data on effectiveness or resident progress. Smart Lung Physio™ changes that.
                  </p>
                  <p className="text-muted-foreground">
                    With quantified outcomes data, medical directors can make evidence-based decisions, demonstrate quality of care to families, and meet evolving regulatory requirements for documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Ready to Learn More?</h2>
          <p className="text-xl text-muted-foreground">
            See how Smart Lung Physio™ can transform respiratory care at your facility
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="hero-gradient border-0 text-lg px-8">
              <NavLink to="/contact">Request a Demo</NavLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <NavLink to="/clinical-evidence">View Clinical Evidence</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default HowItWorks;