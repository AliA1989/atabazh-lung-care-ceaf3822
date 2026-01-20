import { useEffect, useState } from "react";
import AnimatedWaveform from "./AnimatedWaveform";

interface PremiumPhoneMockupProps {
  className?: string;
}

const PremiumPhoneMockup = ({ className = "" }: PremiumPhoneMockupProps) => {
  // Animated live data values
  const [spo2, setSpo2] = useState(98);
  const [heartRate, setHeartRate] = useState(72);
  const [pressure, setPressure] = useState(85);

  useEffect(() => {
    // Subtle SpO2 fluctuation (98-99%)
    const spo2Interval = setInterval(() => {
      setSpo2(prev => prev === 98 ? 99 : 98);
    }, 3000);

    // Heart rate fluctuation (72-75 BPM)
    const hrInterval = setInterval(() => {
      setHeartRate(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newVal = prev + change;
        return Math.min(75, Math.max(72, newVal));
      });
    }, 1500);

    // Pressure fluctuation (82-88%)
    const pressureInterval = setInterval(() => {
      setPressure(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newVal = prev + change;
        return Math.min(88, Math.max(82, newVal));
      });
    }, 2000);

    return () => {
      clearInterval(spo2Interval);
      clearInterval(hrInterval);
      clearInterval(pressureInterval);
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Ambient shadow for depth */}
      <div className="absolute inset-0 translate-y-8 blur-3xl bg-slate-900/30 rounded-[50px] scale-90" />
      
      {/* Phone outer frame - Titanium finish */}
      <div 
        className="relative w-[200px] h-[420px] rounded-[42px] p-[2px]"
        style={{
          background: 'linear-gradient(145deg, #a8a8a8 0%, #6b6b6b 20%, #8a8a8a 40%, #5a5a5a 60%, #7a7a7a 80%, #4a4a4a 100%)',
          boxShadow: `
            0 25px 50px -12px rgba(0, 0, 0, 0.4),
            0 12px 24px -8px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.3),
            inset 0 -1px 0 rgba(0, 0, 0, 0.2)
          `
        }}
      >
        {/* Inner metallic bezel */}
        <div 
          className="w-full h-full rounded-[40px] p-[3px]"
          style={{
            background: 'linear-gradient(180deg, #5a5a5a 0%, #3a3a3a 50%, #2a2a2a 100%)',
            boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Screen bezel */}
          <div 
            className="w-full h-full rounded-[37px] overflow-hidden relative"
            style={{
              background: '#0a0a0a',
              boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.8)'
            }}
          >
            {/* Glass reflection overlay */}
            <div 
              className="absolute inset-0 z-50 pointer-events-none rounded-[37px]"
              style={{
                background: `
                  linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.15) 0%, 
                    transparent 40%,
                    transparent 60%,
                    rgba(255, 255, 255, 0.03) 100%
                  )
                `
              }}
            />
            
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-40 flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-slate-800" />
              <div className="w-3 h-3 rounded-full bg-slate-900 ring-1 ring-slate-700" />
            </div>

            {/* Screen content */}
            <div className="relative w-full h-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 pt-12 px-3 pb-6">
              
              {/* App Header */}
              <div className="flex items-center justify-between mb-4 px-1">
                <div className="flex items-center gap-2">
                  {/* Atabazh Logo */}
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-white tracking-wide">Atabazh Med</p>
                    <p className="text-[8px] text-blue-400 font-medium">Smart Lung Physio™</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] text-green-400 font-medium">LIVE</span>
                </div>
              </div>

              {/* SpO2 Card */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 rounded-2xl p-3 mb-3 border border-slate-700/50 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] text-slate-400 uppercase tracking-widest font-medium">Blood Oxygen</p>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span 
                        className="text-3xl font-bold text-green-400 tabular-nums transition-all duration-500"
                        style={{ textShadow: '0 0 20px rgba(74, 222, 128, 0.4)' }}
                      >
                        {spo2}
                      </span>
                      <span className="text-lg text-green-400/70 font-medium">%</span>
                    </div>
                    <p className="text-[8px] text-green-500/80 mt-0.5">SpO₂ Normal</p>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/10 flex items-center justify-center border border-green-500/30">
                    <svg className="w-7 h-7 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Pressure Waveform Card */}
              <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-2xl p-3 mb-3 border border-blue-500/30 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[9px] text-blue-300 uppercase tracking-widest font-medium">Pressure Feedback</p>
                  <span className="text-[10px] text-blue-400 font-semibold tabular-nums">{pressure}%</span>
                </div>
                <div className="h-12 relative overflow-hidden rounded-xl bg-slate-900/60 border border-blue-500/20">
                  <AnimatedWaveform 
                    className="w-full h-full" 
                    color="hsl(200, 90%, 60%)"
                    height={48}
                    speed={1.2}
                  />
                  {/* Scanning line */}
                  <div 
                    className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-70"
                    style={{ animation: 'scanLine 2.5s linear infinite' }}
                  />
                  {/* Grid overlay */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, 0.3) 25%, rgba(59, 130, 246, 0.3) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.3) 75%, rgba(59, 130, 246, 0.3) 76%, transparent 77%), linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, 0.3) 25%, rgba(59, 130, 246, 0.3) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.3) 75%, rgba(59, 130, 246, 0.3) 76%, transparent 77%)',
                      backgroundSize: '20px 20px'
                    }}
                  />
                </div>
              </div>

              {/* Heart Rate Card */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 rounded-2xl p-3 border border-slate-700/50 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] text-slate-400 uppercase tracking-widest font-medium">Heart Rate</p>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span 
                        className="text-2xl font-bold text-red-400 tabular-nums transition-all duration-300"
                        style={{ textShadow: '0 0 15px rgba(248, 113, 113, 0.4)' }}
                      >
                        {heartRate}
                      </span>
                      <span className="text-sm text-red-400/70 font-medium">BPM</span>
                    </div>
                  </div>
                  <div className="relative">
                    <div 
                      className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30"
                      style={{ animation: 'heartPulse 1s ease-in-out infinite' }}
                    >
                      <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Session Timer */}
              <div className="mt-3 flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <p className="text-[10px] text-slate-400 font-medium">Session Active • 02:34</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side buttons - Volume */}
      <div 
        className="absolute left-[-2px] top-[100px] w-[3px] h-[35px] rounded-l-sm"
        style={{
          background: 'linear-gradient(90deg, #4a4a4a 0%, #6a6a6a 50%, #5a5a5a 100%)',
          boxShadow: '-1px 0 2px rgba(0,0,0,0.3)'
        }}
      />
      <div 
        className="absolute left-[-2px] top-[145px] w-[3px] h-[35px] rounded-l-sm"
        style={{
          background: 'linear-gradient(90deg, #4a4a4a 0%, #6a6a6a 50%, #5a5a5a 100%)',
          boxShadow: '-1px 0 2px rgba(0,0,0,0.3)'
        }}
      />
      
      {/* Side button - Power */}
      <div 
        className="absolute right-[-2px] top-[120px] w-[3px] h-[50px] rounded-r-sm"
        style={{
          background: 'linear-gradient(90deg, #5a5a5a 0%, #6a6a6a 50%, #4a4a4a 100%)',
          boxShadow: '1px 0 2px rgba(0,0,0,0.3)'
        }}
      />

      <style>{`
        @keyframes scanLine {
          0% { left: 0%; }
          100% { left: 100%; }
        }
        
        @keyframes heartPulse {
          0%, 100% { transform: scale(1); }
          15% { transform: scale(1.15); }
          30% { transform: scale(1); }
          45% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default PremiumPhoneMockup;
