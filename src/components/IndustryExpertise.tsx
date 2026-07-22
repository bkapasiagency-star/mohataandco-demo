import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INDUSTRIES } from '../data';
import LineSeparator from './LineSeparator';
import GsapScrollReveal from './GsapScrollReveal';
import GsapTextReveal from './GsapTextReveal';

export default function IndustryExpertise() {
  const [hoveredId, setHoveredId] = useState<string | null>('manufacturing');

  return (
    <section id="industries" className="py-24 md:py-32 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Signature blue line separating sections */}
        <LineSeparator />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pt-12">
          <div className="space-y-4">
            <GsapScrollReveal animationType="fade-in">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#0057B8] font-bold">
                Sectors Served // Expertise
              </span>
            </GsapScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#1D1D1F]">
              <GsapTextReveal text="Industry Intelligence" />
            </h2>
          </div>
          <GsapScrollReveal animationType="slide-up" className="mt-4 md:mt-0">
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed font-normal">
              Bespoke financial architectures designed around the distinct operational models of sector-defining companies.
            </p>
          </GsapScrollReveal>
        </div>

        {/* Elegant Vertical Catalog Index */}
        <div className="border-t border-[#DCE6F2] mt-12">
          {INDUSTRIES.map((ind, idx) => {
            const isHovered = hoveredId === ind.id;

            return (
              <GsapScrollReveal
                key={ind.id}
                animationType="slide-up"
                delay={idx * 0.08}
                className="w-full"
              >
                <div
                  onMouseEnter={() => setHoveredId(ind.id)}
                  className={`border-b border-[#DCE6F2] py-8 md:py-10 transition-all duration-500 relative cursor-pointer group ${
                    isHovered ? 'bg-[#FFFFFF]/40 px-4 md:px-6' : 'px-0'
                  }`}
                  data-cursor="view"
                >
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-y-4 lg:gap-x-8 items-center">
                    {/* Column 1: Index Number & Bullet (Col 1) */}
                    <div className="lg:col-span-1 lg:col-start-1 flex items-center space-x-3">
                      <span className="font-mono text-[10px] text-gray-400 font-bold">0{idx + 1}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-200 transition-colors duration-500 group-hover:bg-[#0057B8]" />
                    </div>

                    {/* Column 2: Title (Cols 2-4) */}
                    <div className="lg:col-span-3 lg:col-start-2">
                      <h3 className="text-xl md:text-2xl font-medium text-[#1D1D1F] tracking-tight group-hover:text-[#0057B8] transition-colors duration-500">
                        {ind.title}
                      </h3>
                    </div>

                    {/* Whitespace Gap (Column 5 is empty) */}

                    {/* Column 3: Description (Cols 6-10) */}
                    <div className="lg:col-span-5 lg:col-start-6">
                      <p className="text-sm text-gray-500 leading-relaxed font-normal group-hover:text-gray-700 transition-colors duration-500">
                        {ind.description}
                      </p>
                    </div>

                    {/* Column 4: Interaction details (Cols 11-12) */}
                    <div className="lg:col-span-2 lg:col-start-11 flex justify-start lg:justify-end">
                      <div className="relative w-5 h-5 flex items-center justify-center">
                        <span className="absolute w-4 h-[1.5px] bg-[#0057B8] transition-transform duration-300" />
                        <span className={`absolute w-4 h-[1.5px] bg-[#0057B8] transition-transform duration-300 ${
                          isHovered ? 'rotate-90 scale-x-0' : 'rotate-90'
                        }`} />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Grid details on hover with motion */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden relative z-10"
                      >
                        <div className="pt-8 mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                          {ind.details.map((detail, index) => (
                            <div key={index} className="bg-white/80 border border-gray-100 p-6 relative shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-all duration-300 hover:shadow-md hover:border-[#0057B8]/20">
                              <div className="absolute top-0 left-0 w-[2px] h-full bg-[#0057B8]/70" />
                              <span className="font-mono text-[9px] text-gray-400 block mb-2 tracking-widest">
                                // 0{index + 1}
                              </span>
                              <p className="text-xs text-gray-700 leading-relaxed font-normal">
                                {detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </GsapScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}


