import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [visible, setVisible] = useState(true);
  const ringRef = useRef<SVGCircleElement>(null);
  const pillarsRef = useRef<SVGPathElement>(null);
  const peakRef = useRef<SVGPathElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      const t = setTimeout(() => setVisible(false), 350);
      return () => clearTimeout(t);
    }

    const ctx = gsap.context(() => {
      [ringRef.current, pillarsRef.current, peakRef.current].forEach((el) => {
        if (!el) return;
        const len = el.getTotalLength();
        gsap.set(el, { strokeDasharray: len, strokeDashoffset: len });
      });

      const tl = gsap.timeline({
        delay: 0.2,
        onComplete: () => setTimeout(() => setVisible(false), 450),
      });

      tl.to(ringRef.current, { strokeDashoffset: 0, duration: 1.1, ease: 'power2.inOut' })
        .to(pillarsRef.current, { strokeDashoffset: 0, duration: 0.65, ease: 'power2.out' }, '-=0.5')
        .to(peakRef.current, { strokeDashoffset: 0, duration: 0.55, ease: 'power2.out' }, '-=0.25')
        .fromTo(textRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.2')
        .to({}, { duration: 0.45 }); // brief hold so the mark registers
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!visible) onComplete?.();
  }, [visible, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] bg-[#FAFBFC] flex flex-col items-center justify-center"
        >
          <svg width="88" height="88" viewBox="0 0 100 100" fill="none">
            <circle ref={ringRef} cx="50" cy="50" r="44" stroke="#0057B8" strokeWidth="1.25" opacity="0.55" />
            <path
              ref={pillarsRef}
              d="M 28 68 V 34 M 72 68 V 34"
              stroke="#1D1D1F"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              ref={peakRef}
              d="M 28 34 L 50 54 L 72 34"
              stroke="#F58220"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div ref={textRef} className="mt-6 text-center opacity-0">
            <div className="text-lg font-bold tracking-tight text-[#1D1D1F]">
              MOHATA <span className="text-[#0057B8] font-normal">&amp; CO.</span>
            </div>
            <div className="text-[9px] tracking-[0.3em] uppercase text-gray-400 font-mono mt-1">
              Chartered Accountants
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
