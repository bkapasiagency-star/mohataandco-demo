import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, HeartHandshake } from 'lucide-react';
import LineSeparator from './LineSeparator';
import GsapScrollReveal from './GsapScrollReveal';
import GsapTextReveal from './GsapTextReveal';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sealRef.current) return;
    // Slow, continuous rotation on the founding seal — a quiet premium detail
    const anim = gsap.to(sealRef.current, {
      rotate: 360,
      duration: 40,
      repeat: -1,
      ease: 'none',
    });
    return () => {
      anim.kill();
    };
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAFBFC] relative overflow-hidden">
      {/* Ambient backdrop: faint architectural grid + soft brand glow for depth */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="aboutGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0057B8" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutGrid)" />
        </svg>
      </div>
      <div className="absolute -top-40 -right-40 w-[420px] h-[420px] bg-[#0057B8]/[0.06] blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F58220]/[0.05] blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Special Signature separates Hero from About */}
        <LineSeparator />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-8 pt-16">

          {/* Left Column - Large Quote / Philosophy Anchor (Cols 1-4) */}
          <div className="lg:col-span-4 lg:col-start-1 flex flex-col justify-start">
            <GsapScrollReveal animationType="fade-in" className="mb-6 flex items-center gap-4">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500">
                The Foundation // 01.06.16
              </p>

              {/* Founding seal — a subtle rotating ring with a fixed year mark */}
              <div className="relative w-9 h-9 shrink-0">
                <div ref={sealRef} className="absolute inset-0">
                  <svg viewBox="0 0 40 40" className="w-full h-full">
                    <circle cx="20" cy="20" r="18" fill="none" stroke="#0057B8" strokeWidth="1" strokeDasharray="2 4" opacity="0.4" />
                    <circle cx="20" cy="2.5" r="1.4" fill="#F58220" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[8px] font-mono font-bold text-[#0057B8]">'16</span>
                </div>
              </div>
            </GsapScrollReveal>

            <GsapScrollReveal animationType="slide-up" duration={1.2}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#1D1D1F] leading-tight">
                <GsapTextReveal text="Built on integrity." className="block" />
                <span className="text-[#0057B8] font-semibold">
                  <GsapTextReveal text="Driven by expertise." className="block" />
                </span>
                <GsapTextReveal text="Focused on long-term partnerships." className="block text-gray-700 font-light" />
              </h2>
            </GsapScrollReveal>

            <GsapScrollReveal animationType="zoom-in" delay={0.3}>
              <div className="mt-12 h-[2px] w-24 bg-[#F58220] relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }}
                />
              </div>
            </GsapScrollReveal>
          </div>

          {/* Whitespace Channel Column 5 is left entirely empty */}

          {/* Right Column - Editorial Narrative Storytelling (Cols 6-12) */}
          <div className="lg:col-span-7 lg:col-start-6 flex flex-col space-y-8 text-lg text-[#1D1D1F]/85 font-normal leading-relaxed">
            <GsapScrollReveal animationType="slide-up" delay={0.1}>
              <p className="text-2xl font-light text-[#1D1D1F] leading-snug">
                Established in Surat in 2016, Mohata &amp; Co. was conceived not as a traditional compliance office, but as a sophisticated business advisory firm.
              </p>
            </GsapScrollReveal>

            <GsapScrollReveal animationType="slide-up" delay={0.2}>
              <p>
                We operate under the firm conviction that corporate accounting and tax structuring represent strategic leverage points for modern enterprises, rather than simple administrative hurdles. Today, we represent clients ranging from rapid-growth technology startups and legacy family offices to large publicly listed corporations across Gujarat and India.
              </p>
            </GsapScrollReveal>

            <GsapScrollReveal animationType="slide-up" delay={0.3}>
              <p>
                Led by five qualified professionals, our core competence spans Audit &amp; Assurance, Indirect Tax Optimization, Corporate Jurisprudence, and Pre-IPO advisory. By keeping our team highly specialized, we ensure every client receives partner-level advisory paired with absolute analytical precision.
              </p>
            </GsapScrollReveal>

            {/* Structured Proof Points in Asymmetric Editorial Sub-Grid */}
            <GsapScrollReveal animationType="slide-up" delay={0.4} className="grid grid-cols-1 sm:grid-cols-12 gap-6 pt-10 border-t border-[#DCE6F2] mt-10">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="sm:col-span-5 space-y-3 p-5 -m-5 border border-transparent hover:border-[#DCE6F2] hover:bg-white hover:shadow-[0_8px_30px_-12px_rgba(0,87,184,0.15)] transition-all duration-300 group"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#0057B8] group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-mono text-xs text-[#0057B8] font-bold uppercase tracking-wider block">01 / Technical Depth</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our partners maintain constant engagement with regulatory boards and industry panels, bringing direct administrative insights to complex litigation.
                </p>
              </motion.div>

              {/* Small internal gap on col-span-1 */}
              <div className="hidden sm:block sm:col-span-1" />

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="sm:col-span-6 space-y-3 p-5 -m-5 border border-transparent hover:border-[#DCE6F2] hover:bg-white hover:shadow-[0_8px_30px_-12px_rgba(31,165,74,0.15)] transition-all duration-300 group"
              >
                <div className="flex items-center gap-2">
                  <HeartHandshake size={16} className="text-[#1FA54A] group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-mono text-xs text-[#1FA54A] font-bold uppercase tracking-wider block">02 / Client-First Advisory</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We deliberate on the business implications first. Every compliance advice we issue is cross-referenced against the client's capital cost and growth strategy.
                </p>
              </motion.div>
            </GsapScrollReveal>
          </div>
        </div>

      </div>
    </section>
  );
}
