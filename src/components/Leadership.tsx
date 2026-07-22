import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, ArrowRight, BookOpen } from 'lucide-react';
import { LEADERS } from '../data';
import LineSeparator from './LineSeparator';
import GsapScrollReveal from './GsapScrollReveal';
import GsapTextReveal from './GsapTextReveal';

export default function Leadership() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeLeader = LEADERS[activeIndex];

  return (
    <section id="leadership" className="py-24 md:py-32 bg-[#FAFBFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Signature orange line separating sections */}
        <LineSeparator />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pt-12">
          <div className="space-y-4">
            <GsapScrollReveal animationType="fade-in">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#0057B8] font-bold">
                Leadership // Core Counsel
              </span>
            </GsapScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#1D1D1F]">
              <GsapTextReveal text="Partners &amp; Knowledge Council" />
            </h2>
          </div>
          
          {/* Saffron and Blue Segmented Controls for Navigation */}
          <GsapScrollReveal animationType="slide-up" delay={0.2} className="flex flex-wrap gap-2 mt-6 md:mt-0 max-w-full">
            {LEADERS.map((leader, index) => (
              <button
                key={leader.id}
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  activeIndex === index
                    ? 'border-b-2 border-[#0057B8] text-[#0057B8] font-bold'
                    : 'text-gray-400 hover:text-[#1D1D1F]'
                }`}
              >
                {leader.name.split(' ')[0]}
              </button>
            ))}
          </GsapScrollReveal>
        </div>

        {/* Big Editorial Display Area */}
        <GsapScrollReveal animationType="slide-up" delay={0.1}>
          <div className="bg-[#FAF9F6] border-none p-8 md:p-14 relative overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.02)]">
            {/* Subtle design grid watermark */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-gray-200/20 to-transparent pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeLeader.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-8 items-start"
              >
                {/* Portrait Left Side (Cols 1-4) */}
                <div className="lg:col-span-4 lg:col-start-1 space-y-6">
                  <div className="relative group overflow-hidden bg-gray-100">
                    {/* Outer Frame */}
                    <img
                      src={activeLeader.photo}
                      alt={activeLeader.name}
                      className="w-full h-[400px] md:h-[480px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out transform hover:scale-102"
                      referrerPolicy="no-referrer"
                    />
                    {/* Subtle Corner Markers */}
                    <div className="absolute top-4 left-4 w-4 h-[1px] bg-white/70" />
                    <div className="absolute top-4 left-4 w-[1px] h-4 bg-white/70" />
                    <div className="absolute bottom-4 right-4 w-4 h-[1px] bg-white/70" />
                    <div className="absolute bottom-4 right-4 w-[1px] h-4 bg-white/70" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-medium text-[#1D1D1F] tracking-tight">
                        {activeLeader.name}
                      </h3>
                      <p className="font-mono text-xs text-[#0057B8] uppercase tracking-widest mt-1 font-bold">
                        {activeLeader.role}
                      </p>
                    </div>

                    <a
                      href={activeLeader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white hover:bg-[#0057B8] text-gray-400 hover:text-white transition-all duration-300 rounded-none group"
                      title="Connect on LinkedIn"
                    >
                      <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Biography Right Side (Cols 6-12) */}
                <div className="lg:col-span-7 lg:col-start-6 flex flex-col justify-between h-full space-y-8 pt-2">
                  <div className="space-y-6">
                    {/* Abstract Partner Thesis/Quote */}
                    <span className="font-mono text-[10px] text-[#F58220] uppercase tracking-[0.2em] font-bold block">
                      Advisory Thesis //
                    </span>
                    
                    <p className="text-lg md:text-xl text-[#1D1D1F] font-light leading-relaxed italic">
                      &ldquo;{activeLeader.bio}&rdquo;
                    </p>

                    <div className="h-[1px] bg-gray-200/70 w-full" />

                    {/* Experience Highlight */}
                    <div className="space-y-2">
                      <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider block">
                        Professional Tenure
                      </span>
                      <p className="text-sm font-semibold text-[#1D1D1F]/90 leading-relaxed">
                        {activeLeader.experience}
                      </p>
                    </div>

                    {/* Practice Specializations */}
                    <div className="space-y-3">
                      <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider block">
                        Core Specializations
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {activeLeader.specialization.map((spec) => (
                          <span
                            key={spec}
                            className="px-3.5 py-1.5 bg-white border border-[#DCE6F2]/60 text-xs text-[#123B73] font-normal tracking-wide"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Switcher Indicator Controls */}
                  <div className="pt-8 flex items-center justify-between border-t border-gray-200/50">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs text-gray-400">0{activeIndex + 1}</span>
                      <div className="w-16 h-[2px] bg-gray-200 relative">
                        <div
                          className="absolute h-full bg-[#0057B8] transition-all duration-300"
                          style={{
                            width: `${((activeIndex + 1) / LEADERS.length) * 100}%`,
                          }}
                        />
                      </div>
                      <span className="font-mono text-xs text-gray-400">0{LEADERS.length}</span>
                    </div>

                    <button
                      onClick={() => setActiveIndex((prev) => (prev + 1) % LEADERS.length)}
                      className="flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold font-mono text-[#0057B8] group cursor-pointer"
                    >
                      <span>Next Profile</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </GsapScrollReveal>
      </div>
    </section>
  );
}
