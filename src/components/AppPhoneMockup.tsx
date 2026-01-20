import AnimatedWaveform from "./AnimatedWaveform";

interface AppPhoneMockupProps {
  className?: string;
}

const AppPhoneMockup = ({ className = "" }: AppPhoneMockupProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Phone frame */}
      <div className="relative w-[140px] h-[280px] bg-slate-900 rounded-[28px] p-[3px] shadow-2xl shadow-slate-900/40">
        {/* Screen */}
        <div className="w-full h-full bg-gradient-to-b from-slate-800 to-slate-900 rounded-[25px] overflow-hidden relative">
          {/* Status bar */}
          <div className="absolute top-0 left-0 right-0 h-6 flex items-center justify-between px-4 pt-1">
            <span className="text-[8px] text-white/70 font-medium">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-3 h-1.5 rounded-sm border border-white/50 relative">
                <div className="absolute inset-0.5 bg-green-400 rounded-[1px]" style={{ width: '75%' }} />
              </div>
            </div>
          </div>
          
          {/* App content */}
          <div className="mt-8 px-3 space-y-3">
            {/* App header */}
            <div className="text-center">
              <p className="text-[9px] font-semibold text-white">Smart Lung Physio</p>
              <p className="text-[7px] text-blue-400">Live Session</p>
            </div>
            
            {/* SpO2 display */}
            <div className="bg-slate-800/50 rounded-lg p-2 text-center border border-slate-700/50">
              <p className="text-[7px] text-slate-400 uppercase tracking-wide">SpO₂ Level</p>
              <p className="text-xl font-bold text-green-400">98<span className="text-xs">%</span></p>
            </div>
            
            {/* Animated waveform card */}
            <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-lg p-2 border border-blue-500/30">
              <p className="text-[7px] text-blue-300 uppercase tracking-wide mb-1.5">Pressure Feedback</p>
              <div className="h-8 relative overflow-hidden rounded bg-slate-900/50">
                <AnimatedWaveform 
                  className="w-full h-full" 
                  color="hsl(200, 90%, 60%)"
                  height={32}
                  speed={1.5}
                />
                {/* Scanning line effect */}
                <div 
                  className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-60"
                  style={{
                    animation: 'scanLine 2s linear infinite',
                  }}
                />
              </div>
            </div>
            
            {/* Heart rate */}
            <div className="bg-slate-800/50 rounded-lg p-2 flex items-center justify-between border border-slate-700/50">
              <div>
                <p className="text-[7px] text-slate-400 uppercase">Heart Rate</p>
                <p className="text-sm font-bold text-red-400">72 <span className="text-[8px] font-normal">BPM</span></p>
              </div>
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                <div 
                  className="w-3 h-3 text-red-400"
                  style={{ animation: 'heartbeat 1s ease-in-out infinite' }}
                >
                  ❤️
                </div>
              </div>
            </div>
            
            {/* Session status */}
            <div className="flex items-center justify-center gap-1.5 pt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <p className="text-[8px] text-green-400 font-medium">Recording</p>
            </div>
          </div>
        </div>
        
        {/* Notch */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-4 bg-slate-900 rounded-b-xl" />
      </div>

      <style>{`
        @keyframes scanLine {
          0% {
            left: 0%;
          }
          100% {
            left: 100%;
          }
        }
        
        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          15% {
            transform: scale(1.15);
          }
          30% {
            transform: scale(1);
          }
          45% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default AppPhoneMockup;
