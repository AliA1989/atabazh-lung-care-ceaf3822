import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { FileText, Calendar, ExternalLink } from "lucide-react";

const News = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            News & Resources
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Latest updates, research publications, and educational resources from Atabazh Medical
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Latest News</h2>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center">
                      <FileText className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        November 15, 2024
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        Company News
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold">
                      Atabazh Medical Completes $2.5M Seed Round to Expand Smart Lung Physio™ Pilot Program
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Toronto-based medical device startup Atabazh Medical announced the close of a $2.5 million seed financing round led by healthcare-focused venture firms. The funding will accelerate pilot deployments across Canadian LTC facilities and support Health Canada regulatory submission.
                    </p>
                    <Button variant="outline" size="sm">
                      Read More <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center">
                      <FileText className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        October 8, 2024
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        Research
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold">
                      Pilot Study Results Presented at Canadian Association on Gerontology Annual Conference
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Atabazh Medical research team presented promising pilot study data showing 42% reduction in hospital transfers for respiratory complications. The multi-site study included 156 LTC residents across 4 Ontario facilities.
                    </p>
                    <Button variant="outline" size="sm">
                      Read More <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center">
                      <FileText className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        September 20, 2024
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        Partnership
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold">
                      Partnership with Ontario Long-Term Care Association to Advance Respiratory Innovation
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Atabazh Medical has formalized a strategic partnership with the Ontario Long-Term Care Association to facilitate Smart Lung Physio™ pilot programs and gather real-world implementation insights from member facilities.
                    </p>
                    <Button variant="outline" size="sm">
                      Read More <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Educational Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-xs px-2 py-1 bg-secondary rounded">PDF</span>
                </div>
                <h3 className="font-semibold">
                  Smart Lung Physio™ Product Overview
                </h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive 2-page overview of device features, clinical benefits, and implementation process for LTC decision-makers.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Download <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-xs px-2 py-1 bg-secondary rounded">PDF</span>
                </div>
                <h3 className="font-semibold">
                  Clinical Evidence Summary
                </h3>
                <p className="text-sm text-muted-foreground">
                  Detailed review of pilot study methodology, results, and implications for respiratory care in long-term care settings.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Download <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-xs px-2 py-1 bg-secondary rounded">PDF</span>
                </div>
                <h3 className="font-semibold">
                  ROI Calculator for LTC Facilities
                </h3>
                <p className="text-sm text-muted-foreground">
                  Interactive tool to estimate financial impact of Smart Lung Physio™ implementation based on your facility's specific parameters.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Download <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-xs px-2 py-1 bg-secondary rounded">Video</span>
                </div>
                <h3 className="font-semibold">
                  Device Demonstration Video
                </h3>
                <p className="text-sm text-muted-foreground">
                  5-minute walkthrough of Smart Lung Physio™ setup, therapy session, and data review process narrated by clinical team.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Watch Video <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card>
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Media & Press Inquiries</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                For press inquiries, interview requests, or to access our media kit including high-resolution images, company background, and executive bios, please contact our communications team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <NavLink to="/contact">Contact Media Team</NavLink>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#" download>Download Media Kit</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-2xl text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Stay Updated</h2>
          <p className="text-muted-foreground">
            Subscribe to receive the latest news, research updates, and resources from Atabazh Medical
          </p>
          <Card>
            <CardContent className="p-6">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button type="submit" size="lg">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default News;
