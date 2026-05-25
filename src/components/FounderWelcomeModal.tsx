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
        className={`fixed bottom-5 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm sm:bottom-6 sm:right-6 transition-all duration-300 ease-out ${
          isClosing 
            ? "opacity-0 translate-y-4 scale-95" 
            : "opacity-100 translate-y-0 scale-100"
        }`}
        style={{
          animation: isClosing ? undefined : "slideInCorner 0.4s ease-out"
        }}
      >
        <div 
          className="relative rounded-2xl border border-white/70 p-5 text-left"
          style={{
            background: "rgba(255, 255, 255, 0.92)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 18px 45px -18px rgba(15, 23, 42, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.5) inset"
          }}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100/50 transition-colors duration-200"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex gap-4 pr-7">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-primary/60 to-[hsl(200,60%,70%)] opacity-60 blur-sm" />
              <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                <img
                  src="/lovable-uploads/079da378-496f-4ba6-82b7-ff2adf75d7f8.jpg"
                  alt="Ali Abedinpour"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-[hsl(215,50%,25%)]">
                Hi, I'm Ali Abedinpour
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Welcome to Atabazh Med. We're building better respiratory care for long-term care teams.
              </p>
            </div>
          </div>

          {/* LinkedIn CTA Button */}
          <Button
            onClick={handleLinkedInClick}
            className="mt-5 w-full bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold py-5 rounded-xl transition-all duration-300 hover:shadow-lg group"
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
