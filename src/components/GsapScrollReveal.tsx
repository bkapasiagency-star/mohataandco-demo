import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GsapScrollRevealProps {
  children: React.ReactNode;
  animationType?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom-in';
  duration?: number;
  delay?: number;
  start?: string;
  triggerOnce?: boolean;
  className?: string;
  key?: string | number;
}

export default function GsapScrollReveal({
  children,
  animationType = 'slide-up',
  duration = 0.8,
  delay = 0,
  start = 'top 85%',
  triggerOnce = true,
  className = ''
}: GsapScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let fromVars: gsap.TweenVars = {};
    let toVars: gsap.TweenVars = {
      opacity: 1,
      duration: duration,
      delay: delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: start,
        toggleActions: triggerOnce ? 'play none none none' : 'play reverse play reverse',
        once: triggerOnce,
      }
    };

    switch (animationType) {
      case 'fade-in':
        fromVars = { opacity: 0 };
        break;
      case 'slide-up':
        fromVars = { opacity: 0, y: 40 };
        toVars = { ...toVars, y: 0 };
        break;
      case 'slide-left':
        fromVars = { opacity: 0, x: 40 };
        toVars = { ...toVars, x: 0 };
        break;
      case 'slide-right':
        fromVars = { opacity: 0, x: -40 };
        toVars = { ...toVars, x: 0 };
        break;
      case 'zoom-in':
        fromVars = { opacity: 0, scale: 0.95 };
        toVars = { ...toVars, scale: 1 };
        break;
    }

    const anim = gsap.fromTo(el, fromVars, toVars);

    return () => {
      if (anim.scrollTrigger) {
        anim.scrollTrigger.kill();
      }
      anim.kill();
    };
  }, [animationType, duration, delay, start, triggerOnce]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
