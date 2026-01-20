import { useEffect, useRef } from "react";

interface AnimatedWaveformProps {
  className?: string;
  color?: string;
  height?: number;
  speed?: number;
}

const AnimatedWaveform = ({ 
  className = "", 
  color = "hsl(200, 85%, 55%)", 
  height = 40,
  speed = 2 
}: AnimatedWaveformProps) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    let offset = 0;
    let animationId: number;

    const animate = () => {
      offset -= speed;
      path.style.strokeDashoffset = `${offset}`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [speed]);

  // ECG-style waveform path with characteristic PQRST pattern
  const generateECGPath = () => {
    const width = 200;
    const midY = height / 2;
    const segments = 3; // Repeat pattern 3 times
    let path = `M 0 ${midY}`;
    
    for (let i = 0; i < segments; i++) {
      const startX = (width / segments) * i;
      const segWidth = width / segments;
      
      // P wave (small bump)
      path += ` L ${startX + segWidth * 0.1} ${midY}`;
      path += ` Q ${startX + segWidth * 0.15} ${midY - height * 0.15} ${startX + segWidth * 0.2} ${midY}`;
      
      // PR segment (flat)
      path += ` L ${startX + segWidth * 0.25} ${midY}`;
      
      // QRS complex (sharp spike)
      path += ` L ${startX + segWidth * 0.28} ${midY + height * 0.1}`; // Q dip
      path += ` L ${startX + segWidth * 0.35} ${midY - height * 0.45}`; // R spike
      path += ` L ${startX + segWidth * 0.42} ${midY + height * 0.2}`; // S dip
      
      // ST segment
      path += ` L ${startX + segWidth * 0.5} ${midY}`;
      
      // T wave (rounded bump)
      path += ` Q ${startX + segWidth * 0.62} ${midY - height * 0.2} ${startX + segWidth * 0.75} ${midY}`;
      
      // Baseline to next beat
      path += ` L ${startX + segWidth} ${midY}`;
    }
    
    return path;
  };

  return (
    <svg 
      className={`overflow-hidden ${className}`}
      viewBox={`0 0 100 ${height}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="ecg-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="30%" stopColor={color} stopOpacity="1" />
          <stop offset="70%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0.2" />
        </linearGradient>
        <filter id="ecg-glow">
          <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path 
        ref={pathRef}
        d={generateECGPath()}
        stroke="url(#ecg-gradient)"
        strokeWidth="1.5"
        fill="none"
        filter="url(#ecg-glow)"
        strokeDasharray="200"
        strokeDashoffset="0"
        vectorEffect="non-scaling-stroke"
        style={{ transform: 'scaleX(0.5)' }}
      />
    </svg>
  );
};

export default AnimatedWaveform;
