import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function CursorFollower() {
  const followerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverType, setHoverType] = useState<'default' | 'view' | 'expand' | 'accent' | 'form'>('default');

  useEffect(() => {
    // Touch detection
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const follower = followerRef.current;
    const core = coreRef.current;
    const ring = ringRef.current;
    if (!follower || !core || !ring) return;

    // Show cursor on first movement
    const showCursor = () => {
      setIsVisible(true);
      gsap.to(follower, { opacity: 1, duration: 0.3 });
    };

    // Quick setters for maximum 60fps/120fps smooth performance
    const xTo = gsap.quickTo(follower, 'x', { duration: 0.4, ease: 'power3.out' });
    const yTo = gsap.quickTo(follower, 'y', { duration: 0.4, ease: 'power3.out' });

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) showCursor();
      
      // Center the custom cursor elements on target coordinates
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseLeaveWindow = () => {
      gsap.to(follower, { opacity: 0, duration: 0.2 });
    };

    const handleMouseEnterWindow = () => {
      gsap.to(follower, { opacity: 1, duration: 0.2 });
    };

    // Global listener for interactive hover triggers
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor]');
      
      if (interactiveEl) {
        setIsHovered(true);
        const type = interactiveEl.getAttribute('data-cursor') || 'default';
        
        // Define cursor behaviors for different interactive types
        if (type === 'view') {
          setHoverType('view');
          setCursorText('VIEW');
          gsap.to(ring, { width: 56, height: 56, borderColor: '#0057B8', backgroundColor: 'rgba(0, 87, 184, 0.06)', duration: 0.3, ease: 'power2.out' });
          gsap.to(core, { scale: 0, duration: 0.2 });
        } else if (type === 'expand') {
          setHoverType('expand');
          setCursorText('OPEN');
          gsap.to(ring, { width: 56, height: 56, borderColor: '#F58220', backgroundColor: 'rgba(245, 130, 32, 0.06)', duration: 0.3, ease: 'power2.out' });
          gsap.to(core, { scale: 0, duration: 0.2 });
        } else if (type === 'submit') {
          setHoverType('accent');
          setCursorText('SEND');
          gsap.to(ring, { width: 48, height: 48, borderColor: '#1FA54A', backgroundColor: 'rgba(31, 165, 74, 0.05)', duration: 0.3, ease: 'power2.out' });
          gsap.to(core, { scale: 0, duration: 0.2 });
        } else if (interactiveEl.tagName === 'INPUT' || interactiveEl.tagName === 'TEXTAREA' || interactiveEl.tagName === 'SELECT') {
          setHoverType('form');
          setCursorText('');
          gsap.to(ring, { width: 4, height: 24, borderRadius: '2px', borderWidth: '1.5px', borderColor: '#0057B8', backgroundColor: 'transparent', duration: 0.3, ease: 'power2.out' });
          gsap.to(core, { scale: 0, duration: 0.2 });
        } else {
          // Standard pointer link / button
          setHoverType('default');
          setCursorText('');
          gsap.to(ring, { width: 36, height: 36, borderColor: '#0057B8', backgroundColor: 'rgba(0, 87, 184, 0.03)', duration: 0.3, ease: 'power2.out' });
          gsap.to(core, { scale: 1.5, backgroundColor: '#0057B8', duration: 0.3 });
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor]');
      
      if (interactiveEl) {
        setIsHovered(false);
        setHoverType('default');
        setCursorText('');
        // Reset to initial aesthetic
        gsap.to(ring, { width: 24, height: 24, borderRadius: '50%', borderWidth: '1px', borderColor: 'rgba(29, 29, 31, 0.2)', backgroundColor: 'transparent', duration: 0.3, ease: 'power2.out' });
        gsap.to(core, { scale: 1, backgroundColor: '#1D1D1F', duration: 0.3 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isVisible]);

  return (
    <div
      ref={followerRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] opacity-0 -translate-x-1/2 -translate-y-1/2 hidden md:block"
      style={{ mixBlendMode: 'normal' }}
    >
      {/* Precision Core Dot */}
      <div
        ref={coreRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#1D1D1F] rounded-full transition-transform duration-300 pointer-events-none"
      />
      
      {/* Translucent Assurance Outer Ring */}
      <div
        ref={ringRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 border border-gray-900/15 rounded-full flex items-center justify-center transition-all duration-300 pointer-events-none"
      >
        {/* Dynamic Action micro-text */}
        {cursorText && (
          <span
            ref={textRef}
            className="font-mono text-[8px] font-bold tracking-wider text-inherit absolute scale-75 animate-[pulse_1s_ease-in-out_infinite]"
            style={{ 
              color: hoverType === 'view' ? '#0057B8' : hoverType === 'expand' ? '#F58220' : hoverType === 'accent' ? '#1FA54A' : '#1D1D1F' 
            }}
          >
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
