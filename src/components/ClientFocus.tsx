import React from 'react';
import { CLIENT_TYPES } from '../data';
import LineSeparator from './LineSeparator';
import GsapScrollReveal from './GsapScrollReveal';
import GsapTextReveal from './GsapTextReveal';

export default function ClientFocus() {
  return (
    <section className="py-24 md:py-32 bg-[#FAFBFC] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Signature blue line separating sections */}
        <LineSeparator />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pt-12">
          <div className="space-y-4">
            <GsapScrollReveal animationType="fade-in">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#0057B8] font-bold">
                Who We Work With // Professional Compliance
              </span>
            </GsapScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#1D1D1F]">
              <GsapTextReveal text="Strategic Client Alignments" />
            </h2>
          </div>
          <GsapScrollReveal animationType="slide-up" className="mt-4 md:mt-0">
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed font-normal">
              Aligned with the strict disclosure expectations of the Institute of Chartered Accountants of India (ICAI), we highlight target groups rather than public endorsements.
            </p>
          </GsapScrollReveal>
        </div>

        {/* Bento/Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {CLIENT_TYPES.map((client, idx) => {
            const colClasses = [
              'col-span-1 lg:col-span-5',
              'col-span-1 lg:col-span-7',
              'col-span-1 lg:col-span-7',
              'col-span-1 lg:col-span-5',
              'col-span-1 lg:col-span-4',
              'col-span-1 lg:col-span-8'
            ];

            return (
              <GsapScrollReveal
                key={client.category}
                animationType="slide-up"
                delay={idx * 0.08}
                className={`w-full ${colClasses[idx % colClasses.length]}`}
              >
                <div
                  className="bg-white border border-[#DCE6F2] p-8 md:p-10 flex flex-col justify-between h-[250px] transition-all duration-300 hover:border-[#0057B8] group shadow-sm w-full"
                >
                  <div className="space-y-4">
                    {/* Category Accent Indicator */}
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-[#0057B8] rounded-full" />
                      <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider font-bold">
                        Sector Blueprint // 0{idx + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#1D1D1F] tracking-tight group-hover:text-[#0057B8] transition-colors">
                      {client.category}
                    </h3>

                    {/* Narrative paragraph */}
                    <p className="text-xs text-gray-500 leading-relaxed font-normal">
                      {client.narrative}
                    </p>
                  </div>

                  {/* Footnote */}
                  <div className="font-mono text-[9px] text-gray-400 uppercase tracking-widest pt-4 border-t border-gray-100">
                    DEPLOYMENT
                  </div>
                </div>
              </GsapScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

