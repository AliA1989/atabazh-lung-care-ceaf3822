const HowItWorksSection = () => {
  const steps = [{
    number: "01",
    title: "Force-Sensing Percussion",
    description: "Caregiver applies the device to the chest. Built-in force-sensing resistors (FSR) detect pressure in real time, guiding caregivers to maintain optimal therapeutic force."
  }, {
    number: "02",
    title: "SpO₂-Integrated Safety",
    description: "Continuous oxygen-saturation monitoring protects residents during therapy sessions. The device and app alert caregivers instantly if SpO₂ drops or heart rate becomes unsafe."
  }, {
    number: "03",
    title: "Intelligent Therapy Algorithm",
    description: "The system analyzes force + SpO₂ data and provides step-by-step guidance through the mobile app, ensuring consistent, evidence-based airway-clearance across all staff skill levels."
  }];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            How Smart Lung Physio™ Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A sensor-guided chest percussion system that delivers consistent, safe, and automated airway-clearance for long-term care.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Product Image - Shows first on mobile */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center">
            {/* Soft spotlight glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[500px] h-[500px] bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl"></div>
            </div>
            
            {/* Device image with shadow */}
            <div className="relative z-10 animate-fade-in" style={{
              animationDelay: "0.2s"
            }}>
              <img 
                alt="Smart Lung Physio device with companion mobile app showing real-time SpO₂ and pressure feedback" 
                className="w-full max-w-lg drop-shadow-xl" 
                src="/lovable-uploads/ae461a86-7d11-4d64-92d1-ce91833c8990.png" 
              />
              {/* Caption */}
              <p className="text-center mt-8 text-sm md:text-base text-muted-foreground font-medium">
                Live pressure feedback • SpO₂ safety • Guided therapy
              </p>
            </div>
          </div>

          {/* Steps - Shows second on mobile */}
          <div className="order-2 lg:order-1 space-y-10">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="relative animate-fade-in" 
                style={{
                  animationDelay: `${0.1 * (index + 1)}s`
                }}
              >
                {/* Step card */}
                <div className="flex gap-6 group">
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                      <span className="text-lg font-bold text-primary-foreground">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 pt-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Subtle divider (except last) */}
                {index < steps.length - 1 && (
                  <div className="ml-7 mt-8 h-px bg-border"></div>
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
