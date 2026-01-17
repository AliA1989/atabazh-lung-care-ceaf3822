const HowItWorksSection = () => {
  const steps = [{
    number: "01",
    title: "Assess & Set Targets",
    description: "Open the app, review resident parameters, and select the appropriate session profile.",
    detail: "Force and SpO₂ thresholds configured per care plan"
  }, {
    number: "02",
    title: "Perform Guided Therapy",
    description: "Apply manual chest physiotherapy while following on-screen prompts for positioning and pressure.",
    detail: "Live feedback helps maintain consistent technique"
  }, {
    number: "03",
    title: "Complete & Document",
    description: "End the session and confirm the summary is logged for care records.",
    detail: "Duration, patterns, and vitals captured automatically"
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
            Three simple steps to deliver consistent, guided chest physiotherapy.
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
            
            {/* Unified product + card container */}
            <div className="relative z-10 animate-fade-in pb-16 pr-4" style={{ animationDelay: "0.2s" }}>
              {/* Shared visual container with subtle background */}
              <div className="relative">
                {/* Product image */}
                <img 
                  alt="Smart Lung Physio device with companion mobile app" 
                  className="w-full max-w-md drop-shadow-lg" 
                  src="/lovable-uploads/ae461a86-7d11-4d64-92d1-ce91833c8990.png" 
                />
                
                {/* Session card - anchored to bottom-right, extending slightly outside */}
                <div 
                  className="absolute bottom-0 right-0 translate-x-2 translate-y-[calc(100%-8px)] bg-card border border-border/50 rounded-xl p-3.5 shadow-sm animate-fade-in"
                  style={{ animationDelay: "0.5s" }}
                >
                  {/* Subtle connector - visual link to image */}
                  <div className="absolute -top-2 right-6 w-4 h-4 bg-card border-l border-t border-border/50 rotate-45 -z-10"></div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      <span className="text-[11px] font-medium text-foreground">Session Complete</span>
                    </div>
                    <div className="text-[10px] text-muted-foreground space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-emerald-600 text-[9px]">✓</span>
                        <span>Guidance followed</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-emerald-600 text-[9px]">✓</span>
                        <span>Vitals within range</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-emerald-600 text-[9px]">✓</span>
                        <span>Logged for records</span>
                      </div>
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
