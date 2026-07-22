import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface LineSeparatorProps {
  color?: 'blue' | 'orange' | 'green' | 'brand-trio';
  delay?: number;
}

export default function LineSeparator({ color = 'brand-trio', delay = 0 }: LineSeparatorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const blueRef = useRef<HTMLDivElement>(null);
  const saffronRef = useRef<HTMLDivElement>(null);
  const greenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 95%',
          toggleActions: 'play none none none',
          once: true
        }
      });

      if (color === 'brand-trio') {
        tl.fromTo(blueRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 2.0, ease: 'power3.out', delay },
          0
        )
        .fromTo(saffronRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 1.8, ease: 'power2.out', delay },
          0.25
        )
        .fromTo(greenRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 2.2, ease: 'power4.out', delay },
          0.15
        );
      } else {
        // Fallback for individual colors, still matching the premium motion
        const targetRef = color === 'blue' ? blueRef.current : color === 'orange' ? saffronRef.current : greenRef.current;
        if (targetRef) {
          tl.fromTo(targetRef,
            { scaleX: 0 },
            { scaleX: 1, duration: 2.0, ease: 'power3.out', delay }
          );
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, [color, delay]);

  if (color === 'brand-trio') {
    return (
      <div ref={containerRef} className="w-full py-6 flex flex-col gap-[3px] relative overflow-hidden pointer-events-none">
        {/* Thread 1: Trust Blue */}
        <div className="w-full h-[1px] bg-[#0057B8]/10 relative">
          <div
            ref={blueRef}
            className="absolute inset-y-0 left-0 bg-[#0057B8] w-full origin-left"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
        {/* Thread 2: Saffron Intelligence */}
        <div className="w-full h-[1px] bg-[#F58220]/10 relative">
          <div
            ref={saffronRef}
            className="absolute inset-y-0 left-0 bg-[#F58220] w-full origin-left"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
        {/* Thread 3: Growth Green */}
        <div className="w-full h-[1px] bg-[#1FA54A]/10 relative">
          <div
            ref={greenRef}
            className="absolute inset-y-0 left-0 bg-[#1FA54A] w-full origin-left"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
      </div>
    );
  }

  // Individual color render
  return (
    <div ref={containerRef} className="w-full py-4 relative overflow-hidden pointer-events-none">
      <div className={`w-full h-[1px] ${color === 'blue' ? 'bg-[#0057B8]/10' : color === 'orange' ? 'bg-[#F58220]/10' : 'bg-[#1FA54A]/10'} relative`}>
        <div
          ref={color === 'blue' ? blueRef : color === 'orange' ? saffronRef : greenRef}
          className={`absolute inset-y-0 left-0 ${color === 'blue' ? 'bg-[#0057B8]' : color === 'orange' ? 'bg-[#F58220]' : 'bg-[#1FA54A]'} w-full origin-left`}
          style={{ transform: 'scaleX(0)' }}
        />
      </div>
    </div>
  );
}


