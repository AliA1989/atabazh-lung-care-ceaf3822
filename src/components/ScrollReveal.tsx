import React, { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: 0 | 100 | 150 | 200 | 300;
}

export function ScrollReveal({ 
  children, 
  className, 
  delay = 0
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const delayClass = {
    0: '',
    100: 'delay-100',
    150: 'delay-150',
    200: 'delay-200',
    300: 'delay-300',
  }[delay];

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-[350ms] ease-out',
        delayClass,
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-3',
        className
      )}
    >
      {children}
    </div>
  );
}

// Stagger children reveal
export function RevealGroup({
  children,
  className,
  staggerDelay = 100
}: {
  children: ReactNode[];
  className?: string;
  staggerDelay?: 100 | 150;
}) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => (
        <div
          className={cn(
            'transition-all duration-[350ms] ease-out',
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-3'
          )}
          style={{ 
            transitionDelay: isVisible ? `${index * staggerDelay}ms` : '0ms' 
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
