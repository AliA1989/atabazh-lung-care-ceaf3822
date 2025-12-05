import productHeroComposition from "@/assets/product-hero-composition.png";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Force-Sensing Percussion",
      description:
        "Caregiver applies the device to the chest. Built-in force-sensing resistors (FSR) detect pressure in real time, guiding caregivers to maintain optimal therapeutic force.",
    },
    {
      number: "02",
      title: "SpO₂-Integrated Safety",
      description:
        "Continuous oxygen-saturation monitoring protects residents during therapy sessions. The device and app alert caregivers instantly if SpO₂ drops or heart rate becomes unsafe.",
    },
    {
      number: "03",
      title: "Intelligent Therapy Algorithm",
      description:
        "The system analyzes force + SpO₂ data and provides step-by-step guidance through the mobile app, ensuring consistent, evidence-based airway-clearance across all staff skill levels.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#fafbfc] to-[#f5f7f9] overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold text-[#0a1628] tracking-tight">
            How Smart Lung Physio™ Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A sensor-guided chest percussion system that delivers consistent, safe, and automated airway-clearance for long-term care.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Steps */}
          <div className="space-y-8 order-2 lg:order-1">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative pl-6 border-l-2 border-border/60 hover:border-primary/50 transition-colors duration-300"
              >
                {/* Step Number */}
                <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </div>

                <div className="space-y-2 pb-2">
                  {/* Step Label */}
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                    Step {step.number}
                  </span>

                  {/* Step Title */}
                  <h3 className="text-xl font-heading font-bold text-[#0a1628] group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                    {step.description}
                  </p>
                </div>

                {/* Subtle Divider (except last) */}
                {index < steps.length - 1 && (
                  <div className="absolute bottom-0 left-6 right-0 h-px bg-gradient-to-r from-border/40 to-transparent" />
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Product Image with Glow */}
          <div className="relative order-1 lg:order-2 flex items-center justify-center">
            {/* Soft Spotlight Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-radial from-primary/10 via-primary/5 to-transparent blur-3xl" />
            </div>

            {/* Product Image */}
            <div className="relative z-10">
              <img
                src={productHeroComposition}
                alt="Smart Lung Physio™ device with companion mobile app displaying real-time SpO₂ and pressure data"
                className="w-full max-w-[450px] lg:max-w-[520px] h-auto"
                style={{
                  filter: "drop-shadow(0 30px 60px rgba(0, 0, 0, 0.18))",
                }}
              />

              {/* Caption */}
              <p className="text-center text-sm text-muted-foreground mt-6 font-medium tracking-wide">
                <span className="text-primary">Live pressure feedback</span>
                <span className="mx-2 text-border">•</span>
                <span>SpO₂ safety</span>
                <span className="mx-2 text-border">•</span>
                <span>Guided therapy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
