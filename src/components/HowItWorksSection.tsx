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
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Premium gradient background matching Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(200,35%,98%)] via-[hsl(200,45%,96%)] to-[hsl(210,55%,92%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(200,60%,90%)_0%,_transparent_50%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(205,55%,88%)_0%,_transparent_45%)] z-0" />
      
      {/* Organic accent shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] z-[1] hidden lg:block opacity-60">
        <svg viewBox="0 0 500 500" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="hiw-swoosh" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(200, 70%, 80%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(210, 65%, 75%)" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <ellipse cx="350" cy="150" rx="250" ry="200" fill="url(#hiw-swoosh)" />
        </svg>
      </div>
      
      {/* Bottom left organic shape */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] z-[1] hidden lg:block opacity-50">
        <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="none">
          <ellipse cx="100" cy="300" rx="200" ry="180" fill="hsl(200, 60%, 88%)" fillOpacity="0.4" />
        </svg>
      </div>
      
      {/* Subtle wave pattern */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden opacity-[0.06]">
        <svg 
          className="absolute top-1/3 left-0 w-[200%] h-[300px]"
          viewBox="0 0 1800 200"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="hiw-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(200, 85%, 55%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(205, 90%, 60%)" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(210, 80%, 55%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path 
            d="M0,100 C180,50 360,150 540,100 C720,50 900,150 1080,100 C1260,50 1440,150 1620,100" 
            stroke="url(#hiw-wave-grad)" 
            strokeWidth="1.5" 
            fill="none"
            style={{ animation: 'pulse-wave 5s ease-in-out infinite' }}
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary/80 mb-2">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            How It Works
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Three simple steps to deliver consistent, guided chest physiotherapy.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Product Image - Shows first on mobile */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center">
            {/* Glowing halo behind product */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[500px] h-[500px] bg-gradient-to-br from-primary/20 via-[hsl(200,70%,85%)]/30 to-transparent rounded-full blur-3xl"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[hsl(205,75%,80%)]/20 rounded-full blur-2xl"></div>
            
            {/* Product image floating with premium shadow */}
            <div className="relative z-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img 
                alt="Smart Lung Physio device with companion mobile app" 
                className="w-full max-w-lg drop-shadow-[0_35px_60px_rgba(0,80,150,0.25)]" 
                src="/lovable-uploads/product-system-new.png" 
              />
              
              {/* Glassmorphism Session Complete card - subtle floating accent */}
              <div 
                className="absolute -bottom-6 right-4 lg:-bottom-2 lg:right-8 backdrop-blur-lg bg-white/50 border border-white/40 rounded-xl p-3 shadow-[0_6px_24px_rgba(0,60,120,0.12)] animate-fade-in opacity-85"
                style={{ animationDelay: "0.5s" }}
              >
                {/* Frosted glass inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-primary/5 rounded-xl pointer-events-none" />
                
                <div className="relative space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)]"></div>
                    <span className="text-xs font-semibold text-foreground/90">Session Complete</span>
                  </div>
                  <div className="text-[10px] text-muted-foreground/80 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-emerald-500 text-[9px]">✓</span>
                      <span>Guidance followed</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-emerald-500 text-[9px]">✓</span>
                      <span>Vitals in range</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Steps - Shows second on mobile */}
          <div className="order-2 lg:order-1 space-y-10 flex flex-col justify-center">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="relative animate-fade-in" 
                style={{ animationDelay: `${0.15 * (index + 1)}s` }}
              >
                {/* Step card */}
                <div className="flex gap-6 group">
                  {/* Circular gradient number with glow */}
                  <div className="flex-shrink-0 relative">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 w-14 h-14 rounded-full bg-gradient-to-br from-primary/40 to-[hsl(210,80%,60%)]/30 blur-md" />
                    {/* Main circle */}
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary via-[hsl(205,75%,50%)] to-[hsl(210,80%,45%)] flex items-center justify-center shadow-[0_4px_20px_rgba(0,100,180,0.35)]">
                      <span className="text-base font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2 pt-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    {/* Technical detail - subtle secondary line */}
                    <p className="text-xs text-muted-foreground/60 italic">
                      {step.detail}
                    </p>
                  </div>
                </div>

                {/* Connecting line between steps (except last) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-7 top-16 w-px h-10 bg-gradient-to-b from-primary/30 to-transparent"></div>
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
