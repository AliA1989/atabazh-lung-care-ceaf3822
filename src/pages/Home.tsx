import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Activity, CheckCircle2, FileText, Users, Building2 } from "lucide-react";

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              {/* Regulatory Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full mb-6">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Health Canada Class II Medical Device</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.1] tracking-tight mb-6">
                Assisted Respiratory Care for Long-Term Care Homes
              </h1>

              {/* Subheadline */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Smart Lung Physio™ enables PSWs to deliver consistent, sensor-guided chest physiotherapy—reducing respiratory incidents and staff time per session.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full px-8 py-6 text-base font-semibold shadow-soft hover:shadow-medium transition-all">
                  <Link to="/contact">
                    Request a Facility Assessment
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base font-semibold border-2">
                  <Link to="/how-it-works">
                    View Clinical Overview
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-large">
                <img 
                  src="/lovable-uploads/hero-nurse-banner.png" 
                  alt="Healthcare professional using Smart Lung Physio device" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why LTC Homes Use This */}
      <section className="py-20 bg-white scroll-animate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Long-Term Care Homes Use Smart Lung Physio™
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Point 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Reduces Staff Time Per Session
                </h3>
                <p className="text-muted-foreground">
                  Automated therapy cycles allow PSWs to monitor multiple residents, freeing clinical staff for higher-acuity tasks.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Consistent Therapy Delivery
                </h3>
                <p className="text-muted-foreground">
                  Sensor-guided protocols ensure each session meets clinical standards—regardless of staff experience level.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Automated Documentation
                </h3>
                <p className="text-muted-foreground">
                  Session data logs automatically for compliance reporting and care plan updates—no manual charting required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50 scroll-animate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              A three-step workflow designed for LTC staffing realities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative bg-white rounded-2xl p-8 shadow-soft border border-border/50">
              <div className="absolute -top-4 left-8">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  1
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">
                Position & Connect
              </h3>
              <p className="text-muted-foreground">
                Place the device on the resident's chest. The app confirms proper positioning via real-time sensor feedback.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white rounded-2xl p-8 shadow-soft border border-border/50">
              <div className="absolute -top-4 left-8">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  2
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">
                Guided Therapy Cycle
              </h3>
              <p className="text-muted-foreground">
                The device delivers oscillating pressure therapy while monitoring SpO₂ and respiratory response throughout the session.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white rounded-2xl p-8 shadow-soft border border-border/50">
              <div className="absolute -top-4 left-8">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  3
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">
                Review & Document
              </h3>
              <p className="text-muted-foreground">
                Session summary auto-generates with clinical metrics. Data syncs to the facility dashboard for compliance tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Credibility */}
      <section className="py-20 bg-white scroll-animate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Clinical Foundation
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Regulatory */}
            <div className="text-center p-8 rounded-2xl bg-slate-50 border border-border/50">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Health Canada Licensed
              </h3>
              <p className="text-muted-foreground text-sm">
                Class II Medical Device License. Designed and manufactured in Canada with ISO 13485 certification.
              </p>
            </div>

            {/* Pilots */}
            <div className="text-center p-8 rounded-2xl bg-slate-50 border border-border/50">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                LTC Pilot Programs
              </h3>
              <p className="text-muted-foreground text-sm">
                Currently deployed in Ontario long-term care facilities with documented outcomes in respiratory incident reduction.
              </p>
            </div>

            {/* Research */}
            <div className="text-center p-8 rounded-2xl bg-slate-50 border border-border/50">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Research-Based Protocol
              </h3>
              <p className="text-muted-foreground text-sm">
                Therapy protocols developed in collaboration with respiratory therapists and geriatric care specialists.
              </p>
            </div>
          </div>

          {/* Credibility Markers */}
          <div className="mt-12 pt-12 border-t border-border/50">
            <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm">ISO 13485 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm">Canadian Manufactured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm">24/7 Clinical Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary scroll-animate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Schedule a Facility Assessment
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Our clinical team will review your resident population and staffing model to determine fit.
            </p>
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="rounded-full px-10 py-6 text-base font-semibold shadow-medium hover:shadow-large transition-all"
            >
              <Link to="/contact">
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
