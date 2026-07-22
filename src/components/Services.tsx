import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { SERVICES } from '../data';
import LineSeparator from './LineSeparator';
import GsapScrollReveal from './GsapScrollReveal';
import GsapTextReveal from './GsapTextReveal';

export default function Services() {
  const [activeId, setActiveId] = useState<string | null>('audit-assurance');

  const toggleService = (id: string) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-[#FAFBFC] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Signature green line separating sections */}
        <LineSeparator />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-8 pt-12">
          
          {/* Left Column - Sticky Editorial Context (Cols 1-4) */}
          <div className="lg:col-span-4 lg:col-start-1 lg:sticky lg:top-32 h-fit flex flex-col space-y-6">
            <GsapScrollReveal animationType="fade-in">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#0057B8] font-bold">
                Services // Area of Practice
              </span>
            </GsapScrollReveal>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#1D1D1F] leading-tight">
              <GsapTextReveal text="Bespoke Financial &amp; Tax Intelligence." />
            </h2>
            
            <GsapScrollReveal animationType="slide-up" delay={0.2}>
              <p className="text-sm text-gray-500 leading-relaxed font-normal">
                We translate labyrinthine regulatory standards into robust capital safeguards and actionable corporate structures. Click any core capability to explore subservices and strategic frameworks.
              </p>
            </GsapScrollReveal>

            <GsapScrollReveal animationType="fade-in" delay={0.4} className="pt-8 hidden lg:flex flex-col space-y-3 font-mono text-[10px] text-gray-400">
              <span className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-[#0057B8] rounded-full" />
                <span>ICAI COMPLIANT PROFESSIONAL PRICING</span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-[#F58220] rounded-full" />
                <span>PARTNER-LED DIRECT ADVISORY CHANNEL</span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-[#1FA54A] rounded-full" />
                <span>STRICT INFORMATION DISCRETION</span>
              </span>
            </GsapScrollReveal>
          </div>

          {/* Whitespace Column 5 remains empty */}

          {/* Right Column - Immersive Expandable List (Cols 6-12) */}
          <div className="lg:col-span-7 lg:col-start-6 flex flex-col">
            {SERVICES.map((service, index) => {
              const isOpen = activeId === service.id;

              return (
                <GsapScrollReveal
                  key={service.id}
                  animationType="slide-up"
                  delay={index * 0.12}
                  className="w-full"
                >
                  <div
                    className="border-b border-[#DCE6F2] py-8 transition-colors duration-300 relative group"
                  >
                    {/* Subtle hover background highlight */}
                    <div className="absolute inset-x-0 -inset-y-1 bg-[#F5F8FB] opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none z-0" />

                    <div className="relative z-10">
                      {/* Header Interaction Trigger */}
                      <button
                        onClick={() => toggleService(service.id)}
                        className="w-full flex items-center justify-between gap-4 text-left focus:outline-none cursor-pointer"
                        data-cursor="expand"
                      >
                        <div className="flex items-start space-x-4 sm:space-x-6 md:space-x-10 min-w-0 flex-1">
                          {/* Big Number */}
                          <span className="font-mono text-xl md:text-2xl text-gray-300 font-semibold group-hover:text-[#0057B8] transition-colors flex-shrink-0">
                            {service.number}
                          </span>

                          {/* Title */}
                          <div className="space-y-2 min-w-0 flex-1">
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-[#1D1D1F] group-hover:text-[#0057B8] transition-colors">
                              {service.title}
                            </h3>
                            {!isOpen && (
                              <p className="text-sm text-gray-500 max-w-full md:max-w-xl font-normal leading-relaxed truncate">
                                {service.shortDesc}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Icon Toggle */}
                        <div className={`p-2 rounded-full border border-gray-200 text-gray-400 group-hover:text-[#0057B8] group-hover:border-[#0057B8] transition-all flex-shrink-0 ${isOpen ? 'bg-[#0057B8] text-white border-[#0057B8] rotate-180' : ''}`}>
                          <ChevronDown size={18} />
                        </div>
                      </button>

                      {/* Animated Details Drawdown */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pl-12 md:pl-16 pt-6 pb-2 space-y-6 max-w-2xl">
                              {/* In-depth narrative */}
                              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                                {service.longDesc}
                              </p>

                              {/* Divider line that draws itself when open */}
                              <motion.div
                                initial={{ scaleX: 0, originX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="h-[1px] bg-[#F58220] w-full"
                              />

                              {/* Subservices grid */}
                              <div className="space-y-4">
                                <h4 className="font-mono text-[11px] uppercase tracking-wider text-gray-400">
                                  Key Deliverables &amp; Practice Focus
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  {service.subservices.map((sub) => (
                                    <div key={sub} className="flex items-center space-x-2 text-xs text-[#1D1D1F]/80">
                                      <Check size={14} className="text-[#1FA54A] flex-shrink-0" />
                                      <span>{sub}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </GsapScrollReveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
