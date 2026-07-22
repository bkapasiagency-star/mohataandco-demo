import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INSIGHTS } from '../data';
import { Insight } from '../types';
import { ArrowUpRight, BookOpen, Clock, X } from 'lucide-react';
import LineSeparator from './LineSeparator';
import GsapScrollReveal from './GsapScrollReveal';
import GsapTextReveal from './GsapTextReveal';

export default function Insights() {
  const [selectedInsight, setSelectedInsight] = useState<Insight | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');

  const categories = ['All', 'Tax Updates', 'GST Updates', 'Budget', 'Compliance Calendar'];

  const filteredInsights = activeCategoryFilter === 'All'
    ? INSIGHTS
    : INSIGHTS.filter(i => i.category === activeCategoryFilter);

  return (
    <section id="insights" className="py-24 md:py-32 bg-[#F5F8FB] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Signature green line separating sections */}
        <LineSeparator />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pt-12">
          <div className="space-y-4">
            <GsapScrollReveal animationType="fade-in">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#0057B8] font-bold">
                Knowledge Centre // Insights
              </span>
            </GsapScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#1D1D1F]">
              <GsapTextReveal text="Technical Briefings" />
            </h2>
          </div>

          {/* Filtering buttons */}
          <GsapScrollReveal animationType="slide-up" delay={0.2} className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategoryFilter(cat)}
                className={`px-3 py-1.5 font-mono text-xs tracking-wider transition-all cursor-pointer ${
                  activeCategoryFilter === cat
                    ? 'bg-[#0057B8] text-white'
                    : 'bg-white border border-[#DCE6F2] text-gray-500 hover:text-[#1D1D1F]'
                }`}
              >
                {cat}
              </button>
            ))}
          </GsapScrollReveal>
        </div>

        {/* Minimal Editorial List Layout with Staggered Swiss Grid Spans */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {filteredInsights.map((insight, idx) => {
            // High-end staggered asymmetrical layouts
            const colClasses = [
              'col-span-12 md:col-span-6 lg:col-span-7 lg:col-start-1',
              'col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-9',
              'col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-1',
              'col-span-12 md:col-span-6 lg:col-span-6 lg:col-start-7'
            ];

            return (
              <GsapScrollReveal
                key={insight.id}
                animationType="slide-up"
                delay={idx * 0.12}
                className={`w-full h-full ${colClasses[idx % colClasses.length]}`}
              >
              <article
                onClick={() => setSelectedInsight(insight)}
                className="bg-white border border-[#DCE6F2] p-8 hover:border-[#0057B8] cursor-pointer transition-all duration-300 flex flex-col justify-between h-[340px] group relative"
                data-cursor="view"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    {/* Category Accent */}
                    <span className="px-2 py-1 bg-[#FAFBFC] border border-[#DCE6F2] text-[10px] font-mono text-[#0057B8] font-bold uppercase tracking-wider">
                      {insight.category}
                    </span>
                    
                    {/* Date */}
                    <div className="flex items-center space-x-1.5 text-xs text-gray-400 font-mono">
                      <Clock size={12} />
                      <span>{insight.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-[#1D1D1F] tracking-tight group-hover:text-[#0057B8] transition-colors leading-snug">
                    {insight.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-gray-500 leading-relaxed font-normal line-clamp-3">
                    {insight.excerpt}
                  </p>
                </div>

                {/* Bottom Row */}
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-semibold font-mono text-gray-400 group-hover:text-[#0057B8] transition-colors">
                    READ REPORT //
                  </span>
                  
                  <span className="p-1 text-gray-400 group-hover:text-[#0057B8] group-hover:translate-x-1 transition-all">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </article>
            </GsapScrollReveal>
          );
        })}
        </div>

        {/* Dynamic Detail Overlay / Side Drawer Reader */}
        <AnimatePresence>
          {selectedInsight && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#1D1D1F]/50 backdrop-blur-md z-50 flex justify-end cursor-pointer"
              onClick={() => setSelectedInsight(null)}
            >
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-2xl bg-[#FAFBFC] h-full shadow-2xl p-8 md:p-12 overflow-y-auto cursor-default flex flex-col justify-between"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  {/* Drawer Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-[#DCE6F2] mb-8">
                    <span className="font-mono text-xs text-[#0057B8] font-bold uppercase tracking-widest">
                      {selectedInsight.category}
                    </span>
                    <button
                      onClick={() => setSelectedInsight(null)}
                      className="p-2 hover:bg-gray-100 text-gray-500 hover:text-[#1D1D1F] transition-colors rounded-full"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Title & Date */}
                  <div className="space-y-4 mb-8">
                    <span className="font-mono text-xs text-gray-400">{selectedInsight.date}</span>
                    <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1D1D1F] leading-tight">
                      {selectedInsight.title}
                    </h1>
                  </div>

                  {/* Complete Rich Typography Content */}
                  <div className="prose prose-slate max-w-none text-[#1D1D1F]/85 text-sm leading-relaxed space-y-6">
                    {selectedInsight.content.split('\n\n').map((paragraph, index) => {
                      if (paragraph.startsWith('# ')) {
                        return (
                          <h2 key={index} className="text-xl font-bold tracking-tight text-[#1D1D1F] pt-4 border-b border-gray-100 pb-2">
                            {paragraph.replace('# ', '')}
                          </h2>
                        );
                      }
                      if (paragraph.startsWith('## ')) {
                        return (
                          <h3 key={index} className="text-lg font-semibold tracking-tight text-[#0057B8] pt-3">
                            {paragraph.replace('## ', '')}
                          </h3>
                        );
                      }
                      if (paragraph.startsWith('* ')) {
                        return (
                          <ul key={index} className="list-disc list-inside space-y-2 pl-4 text-gray-600">
                            {paragraph.split('\n').map((li, liIdx) => (
                              <li key={liIdx}>{li.replace('* ', '')}</li>
                            ))}
                          </ul>
                        );
                      }
                      if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ')) {
                        return (
                          <ol key={index} className="list-decimal list-inside space-y-2 pl-4 text-gray-600">
                            {paragraph.split('\n').map((li, liIdx) => (
                              <li key={liIdx}>{li.substring(3)}</li>
                            ))}
                          </ol>
                        );
                      }
                      return (
                        <p key={index} className="text-gray-600 whitespace-pre-line leading-relaxed">
                          {paragraph.trim()}
                        </p>
                      );
                    })}
                  </div>
                </div>

                {/* Footer disclaimer inside Reader */}
                <div className="pt-12 border-t border-[#DCE6F2] mt-12 text-[10px] font-mono text-gray-400">
                  <span>DISCLAIMER: This briefing contains analytical insights for informational purposes only and does not constitute formal tax or regulatory advisory. Registered under ICAI Guidelines.</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
