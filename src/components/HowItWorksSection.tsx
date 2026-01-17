const HowItWorksSection = () => {
  const steps = [{
    number: "01",
    title: "Assess & Set Targets",
    description: "Review resident parameters and select a session profile in the app.",
    detail: "Force-sensing and SpO₂ thresholds configured per care plan"
  }, {
    number: "02",
    title: "Treat with Real-Time Guidance",
    description: "Apply the device while following on-screen prompts for guided range and positioning.",
    detail: "Live pressure feedback and vitals monitoring layer"
  }, {
    number: "03",
    title: "Document & Review",
    description: "Session summary logged automatically for care records and clinical review.",
    detail: "Duration, force patterns, and SpO₂ trends captured"
  }];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-14 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A structured workflow for guided chest percussion in long-term care settings.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Product Image - Shows first on mobile */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center">
            {/* Soft spotlight glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[450px] h-[450px] bg-gradient-radial from-primary/8 via-primary/4 to-transparent rounded-full blur-3xl"></div>
            </div>
            
            {/* Device image with session overlay */}
            <div className="relative z-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img 
                alt="Smart Lung Physio device with companion mobile app" 
                className="w-full max-w-md drop-shadow-lg" 
                src="/lovable-uploads/ae461a86-7d11-4d64-92d1-ce91833c8990.png" 
              />
              
              {/* Floating session summary card */}
              <div className="absolute -bottom-4 -right-4 lg:right-0 bg-card/95 backdrop-blur-sm border border-border/60 rounded-xl p-4 shadow-lg max-w-[200px] animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-xs font-medium text-foreground">Session Logged</span>
                  </div>
                  <div className="text-[11px] text-muted-foreground space-y-1">
                    <div className="flex justify-between">
                      <span>Duration</span>
                      <span className="font-medium text-foreground/80">4:32</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SpO₂ range</span>
                      <span className="font-medium text-foreground/80">94–97%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Force avg</span>
                      <span className="font-medium text-foreground/80">Within range</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Steps - Shows second on mobile */}
          <div className="order-2 lg:order-1 space-y-8">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="relative animate-fade-in" 
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {/* Step card */}
                <div className="flex gap-5 group">
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                      <span className="text-base font-bold text-primary-foreground">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-1.5 pt-0.5">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    {/* Technical detail - subtle secondary line */}
                    <p className="text-xs text-muted-foreground/70 italic">
                      {step.detail}
                    </p>
                  </div>
                </div>

                {/* Subtle divider (except last) */}
                {index < steps.length - 1 && (
                  <div className="ml-6 mt-6 h-px bg-border/60"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
