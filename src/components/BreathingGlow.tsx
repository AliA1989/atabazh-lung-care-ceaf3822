interface BreathingGlowProps {
  className?: string;
  size?: number;
  duration?: number;
}

const BreathingGlow = ({ 
  className = "", 
  size = 600,
  duration = 4 
}: BreathingGlowProps) => {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      {/* Outer breathing glow - slowest, largest */}
      <div 
        className="absolute rounded-full"
        style={{
          width: size * 1.2,
          height: size * 1.2,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, hsl(200, 70%, 75%, 0.15) 0%, hsl(205, 65%, 80%, 0.08) 40%, transparent 70%)',
          animation: `breathing ${duration * 1.2}s ease-in-out infinite`,
        }}
      />
      
      {/* Middle breathing glow */}
      <div 
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, hsl(200, 80%, 70%, 0.25) 0%, hsl(205, 75%, 75%, 0.12) 35%, transparent 65%)',
          animation: `breathing ${duration}s ease-in-out infinite`,
          animationDelay: '-0.5s',
        }}
      />
      
      {/* Inner core glow - fastest, brightest */}
      <div 
        className="absolute rounded-full"
        style={{
          width: size * 0.7,
          height: size * 0.7,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, hsl(200, 85%, 80%, 0.35) 0%, hsl(205, 80%, 75%, 0.15) 40%, transparent 60%)',
          animation: `breathing ${duration * 0.8}s ease-in-out infinite`,
          animationDelay: '-1s',
        }}
      />
      
      {/* Soft edge diffusion */}
      <div 
        className="absolute rounded-full blur-2xl"
        style={{
          width: size * 0.5,
          height: size * 0.5,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'hsl(200, 90%, 85%, 0.4)',
          animation: `breathing ${duration}s ease-in-out infinite`,
        }}
      />

      <style>{`
        @keyframes breathing {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.08);
            opacity: 0.85;
          }
        }
      `}</style>
    </div>
  );
};

export default BreathingGlow;
