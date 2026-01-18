import { useState, useEffect } from "react";
import { X, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "hasSeenWelcome";

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
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div 
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-md transition-all duration-300 ease-out ${
          isClosing 
            ? "opacity-0 translate-y-4 scale-95" 
            : "opacity-100 translate-y-0 scale-100"
        }`}
        style={{
          animation: isClosing ? undefined : "slideUp 0.4s ease-out"
        }}
      >
        <div 
          className="relative rounded-3xl border border-white/60 p-8 text-center"
          style={{
            background: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.5) inset"
          }}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100/50 transition-colors duration-200"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-primary/60 to-[hsl(200,60%,70%)] opacity-70 blur-sm" />
              <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                <img 
                  src="/lovable-uploads/079da378-496f-4ba6-82b7-ff2adf75d7f8.jpg" 
                  alt="Ali Abedinpour"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 mb-8">
            <h3 className="text-2xl font-bold text-[hsl(215,50%,25%)]">
              Hi, I'm Ali Abedinpour
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Welcome to Atabazh Med. We are proud to be recognized by Canada's leading health ecosystems as we innovate Smart Lung Physio™. I invite you to connect with me directly to discuss our technology and vision.
            </p>
          </div>

          {/* LinkedIn CTA Button */}
          <Button
            onClick={handleLinkedInClick}
            className="w-full bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold py-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
          >
            <Linkedin className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
            Connect with me on LinkedIn
          </Button>

          {/* Collaboration Note - Secondary message */}
          <div className="mt-6 pt-5 border-t border-slate-200/60">
            <p className="text-xs text-slate-400 italic leading-relaxed">
              Atabazh Medical collaborates with students and early-career professionals interested in medical device development and health innovation.
            </p>
          </div>

          {/* Subtle dismiss text */}
          <p className="mt-4 text-xs text-slate-400/70">
            Click anywhere outside to dismiss
          </p>
        </div>
      </div>

      {/* Slide-up animation keyframes */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translate(-50%, -45%) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default FounderWelcomeModal;
