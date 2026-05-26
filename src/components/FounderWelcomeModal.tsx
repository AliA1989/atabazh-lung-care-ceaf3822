import { useState, useEffect } from "react";
import { X, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "hasSeenWelcomeFloatingCard";

const FounderWelcomeModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if user has already seen the modal this session
    const hasSeenWelcome = sessionStorage.getItem(STORAGE_KEY);
    
    if (!hasSeenWelcome) {
      // Show modal after 3 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    // Mark as seen in session storage
    sessionStorage.setItem(STORAGE_KEY, "true");
    
    // Wait for animation to complete before hiding
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  const handleLinkedInClick = () => {
    // Mark as seen and close
    sessionStorage.setItem(STORAGE_KEY, "true");
    window.open("https://www.linkedin.com/in/aliabedinpour/", "_blank", "noopener,noreferrer");
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating founder card */}
      <div 
        className={`fixed bottom-5 right-4 z-50 w-[calc(100vw-2rem)] max-w-[430px] sm:bottom-6 sm:right-6 transition-all duration-300 ease-out ${
          isClosing 
            ? "opacity-0 translate-y-4 scale-95" 
            : "opacity-100 translate-y-0 scale-100"
        }`}
        style={{
          animation: isClosing ? undefined : "slideInCorner 0.4s ease-out"
        }}
      >
        <div 
          className="relative overflow-hidden rounded-2xl border border-slate-200/80 p-5 text-left sm:p-6"
          style={{
            background: "rgba(255, 255, 255, 0.96)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            boxShadow: "0 22px 55px -26px rgba(15, 23, 42, 0.38), 0 1px 0 rgba(255, 255, 255, 0.72) inset"
          }}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition-colors duration-200 hover:bg-slate-100/70 hover:text-slate-600"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex gap-4 pr-7 sm:gap-5">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="relative h-[74px] w-[74px] overflow-hidden rounded-full bg-slate-100 ring-4 ring-white shadow-[0_10px_28px_-18px_rgba(15,23,42,0.65)] sm:h-20 sm:w-20">
                <img
                  src="/lovable-uploads/079da378-496f-4ba6-82b7-ff2adf75d7f8.jpg"
                  alt="Ali Abedinpour"
                  className="h-full w-full object-cover grayscale-[20%]"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-2.5">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/80">
                  Founder Welcome
                </p>
                <h3 className="text-lg font-bold leading-tight text-[hsl(215,50%,25%)] sm:text-xl">
                Hi, I'm Ali Abedinpour
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                Welcome to Atabazh Med. We're building better respiratory care for long-term care teams.
              </p>
            </div>
          </div>

          {/* LinkedIn CTA Button */}
          <Button
            onClick={handleLinkedInClick}
            className="group mt-5 h-auto w-full rounded-xl bg-[#0A66C2] py-3.5 font-semibold text-white shadow-sm shadow-[#0A66C2]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#004182] hover:shadow-lg hover:shadow-[#0A66C2]/20"
          >
            <Linkedin className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
            Connect on LinkedIn
          </Button>
        </div>
      </div>

      {/* Corner card animation keyframes */}
      <style>{`
        @keyframes slideInCorner {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default FounderWelcomeModal;
