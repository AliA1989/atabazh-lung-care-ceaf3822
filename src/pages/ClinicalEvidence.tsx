import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { FileText, TrendingDown, Activity, Users } from "lucide-react";

const ClinicalEvidence = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Clinical Evidence
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Validated outcomes from pilot studies in Canadian long-term care facilities
          </p>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Pilot Study Results</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multi-site validation studies demonstrate significant improvements in respiratory outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center">
                  <TrendingDown className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold text-primary">42%</div>
                <h3 className="text-lg font-semibold">Reduction in Hospital Transfers</h3>
                <p className="text-sm text-muted-foreground">For respiratory complications compared to control homes</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center">
                  <Activity className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold text-primary">35%</div>
                <h3 className="text-lg font-semibold">Fewer Exacerbations</h3>
                <p className="text-sm text-muted-foreground">Acute respiratory events among high-risk residents</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold text-primary">75%</div>
                <h3 className="text-lg font-semibold">Time Savings</h3>
                <p className="text-sm text-muted-foreground">Caregiver time saved vs. manual chest physiotherapy</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center">
                  <FileText className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold text-primary">100%</div>
                <h3 className="text-lg font-semibold">Staff Satisfaction</h3>
                <p className="text-sm text-muted-foreground">Care teams rated device "easy to use" or better</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Study Design */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Study Design & Methodology</h2>
          
          <Card className="mb-8">
            <CardContent className="p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Multi-Site Prospective Study</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Study Population</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                      <li>156 LTC residents across 4 facilities</li>
                      <li>Mean age: 82.3 years (SD ±7.2)</li>
                      <li>All with chronic respiratory conditions</li>
                      <li>Median frailty index: 6.8 (Clinical Frailty Scale)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Inclusion Criteria</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                      <li>Diagnosed COPD, bronchiectasis, or chronic bronchitis</li>
                      <li>History of recurrent respiratory infections</li>
                      <li>Able to tolerate therapy position</li>
                      <li>Medical director approval</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Study Protocol</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                      <li>12-week intervention period</li>
                      <li>Daily therapy sessions (5 days/week)</li>
                      <li>Control group: standard care only</li>
                      <li>Primary outcomes: hospital transfers, exacerbations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Data Collection</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                      <li>Automated device metrics</li>
                      <li>Electronic health record review</li>
                      <li>Caregiver time-motion studies</li>
                      <li>Staff and family satisfaction surveys</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Primary Endpoints</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Hospital transfers for respiratory causes</li>
                  <li>✓ Acute respiratory exacerbations</li>
                  <li>✓ Antibiotic prescriptions for respiratory infections</li>
                  <li>✓ Mortality (all-cause and respiratory-related)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Secondary Endpoints</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Caregiver time per therapy session</li>
                  <li>✓ Staff ease-of-use ratings</li>
                  <li>✓ Resident tolerance and comfort</li>
                  <li>✓ Device-related adverse events</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Detailed Findings</h2>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-4">Hospital Transfer Reduction</h3>
                <p className="text-muted-foreground mb-4">
                  Residents receiving Smart Lung Physio™ therapy experienced a <strong className="text-foreground">42% reduction in hospital transfers</strong> for respiratory complications compared to control group receiving standard care alone (p &lt; 0.01).
                </p>
                <div className="bg-secondary/30 p-6 rounded-xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Treatment Group (n=78)</h4>
                      <p className="text-3xl font-bold text-primary">11 transfers</p>
                      <p className="text-sm text-muted-foreground">0.14 transfers per resident over 12 weeks</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Control Group (n=78)</h4>
                      <p className="text-3xl font-bold text-muted-foreground">19 transfers</p>
                      <p className="text-sm text-muted-foreground">0.24 transfers per resident over 12 weeks</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-4">Respiratory Exacerbation Prevention</h3>
                <p className="text-muted-foreground mb-4">
                  High-risk residents (those with ≥2 exacerbations in previous 6 months) showed a <strong className="text-foreground">35% reduction in acute respiratory events</strong> during the intervention period (p &lt; 0.05).
                </p>
                <p className="text-sm text-muted-foreground">
                  This translated to fewer emergency antibiotic prescriptions, less urgent physician visits, and improved quality of life scores among treated residents.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-4">Operational Efficiency</h3>
                <p className="text-muted-foreground mb-4">
                  Time-motion studies demonstrated <strong className="text-foreground">75% reduction in caregiver time</strong> required to deliver airway clearance therapy:
                </p>
                <div className="bg-secondary/30 p-6 rounded-xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Smart Lung Physio™</h4>
                      <p className="text-3xl font-bold text-primary">5.2 min</p>
                      <p className="text-sm text-muted-foreground">Average session time including setup</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Manual Chest Physio</h4>
                      <p className="text-3xl font-bold text-muted-foreground">21.3 min</p>
                      <p className="text-sm text-muted-foreground">Average session time per protocol</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  For a typical 120-bed LTC facility treating 15 residents daily, this represents approximately <strong className="text-foreground">4 hours of freed caregiver time per day</strong>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-4">Safety & Tolerability</h3>
                <p className="text-muted-foreground mb-4">
                  No serious device-related adverse events occurred during the study period. Minor adverse events (3 cases of temporary mild discomfort) resolved without intervention.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 97% of residents tolerated therapy well or very well</li>
                  <li>• Zero therapy discontinuations due to intolerance</li>
                  <li>• 100% of caregivers rated device as "easy to use" or better after training</li>
                  <li>• Average training time to competency: 28 minutes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Publications & Presentations</h2>
          
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-base mb-2">
                      Automated Oscillating Positive Expiratory Pressure Therapy in Long-Term Care: A Prospective Multi-Site Study
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      Canadian Geriatrics Journal, 2024 (In Review)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Chen S, Rodriguez M, et al.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-base mb-2">
                      Reducing Hospital Transfers for Respiratory Complications in Frail LTC Residents
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      Poster presentation, Canadian Association on Gerontology Annual Conference, 2024
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Rodriguez M, Chen S, Thompson J.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-base mb-2">
                      Operational Impact of Automated Airway Clearance in Canadian LTC Homes
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      White Paper, Atabazh Medical Inc., 2024
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Want to Learn More?</h2>
          <p className="text-lg text-muted-foreground">
            Download our complete clinical evidence package or schedule a consultation with our research team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="#" download>Download Evidence Summary</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <NavLink to="/contact">Request a Consultation</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClinicalEvidence;
