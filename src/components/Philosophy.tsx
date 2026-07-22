import React from 'react';
import { Shield, Target, Users, TrendingUp } from 'lucide-react';
import LineSeparator from './LineSeparator';
import GsapScrollReveal from './GsapScrollReveal';
import GsapTextReveal from './GsapTextReveal';

export default function Philosophy() {
  const pillars = [
    {
      num: '01',
      title: 'Integrity',
      icon: Shield,
      color: 'text-[#0057B8]',
      borderHover: 'group-hover:border-[#0057B8]/40',
      glow: 'shadow-[0_0_25px_rgba(0,87,184,0.15)]',
      desc: 'Absolute ethical alignment is our baseline. We operate with strict professional independence to insulate our client partners from regulatory vulnerabilities and establish pristine corporate reputation.',
    },
    {
      num: '02',
      title: 'Precision',
      icon: Target,
      color: 'text-[#F58220]',
      borderHover: 'group-hover:border-[#F58220]/40',
      glow: 'shadow-[0_0_25px_rgba(245,130,32,0.15)]',
      desc: 'Financial advisory is a game of millimeters. Our dual-partner review process and deep research filters guarantee that every advisory note, filing, and audit we execute represents flawless accuracy.',
    },
    {
      num: '03',
      title: 'Partnership',
      icon: Users,
      color: 'text-[#1FA54A]',
      borderHover: 'group-hover:border-[#1FA54A]/40',
      glow: 'shadow-[0_0_25px_rgba(31,165,74,0.15)]',
      desc: 'We do not sell transaction billing. We invest deeply in understanding the commercial realities of our clients, forging long-term advisory channels that expand legacy family offices and corporate empires.',
    },
    {
      num: '04',
      title: 'Forward Thinking',
      icon: TrendingUp,
      color: 'text-[#5A8FDF]',
      borderHover: 'group-hover:border-[#5A8FDF]/40',
      glow: 'shadow-[0_0_25px_rgba(90,143,223,0.15)]',
      desc: 'Compliance is backward-looking; strategy is future-focused. We constantly look around corners—evaluating new developments to shield capital and capture early advantages.',
    },
  ];

  return (
    <section id="approach" className="py-24 md:py-32 bg-[#0B0F19] text-white relative overflow-hidden">
      {/* Premium organic blue-saffron glowing background highlights */}
      <div className="absolute w-[350px] h-[350px] bg-[#0057B8]/5 blur-[90px] rounded-full top-0 left-10 pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] bg-[#F58220]/4 blur-[100px] rounded-full bottom-0 right-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Transparent elegant divider */}
        <div className="opacity-30">
          <LineSeparator />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pt-12">
          <div className="space-y-4">
            <GsapScrollReveal animationType="fade-in">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#F58220] font-bold">
                Our Philosophy
              </span>
            </GsapScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white">
              <GsapTextReveal text="The Advisory Approach" />
            </h2>
          </div>
          <GsapScrollReveal animationType="slide-up" className="mt-4 md:mt-0">
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed font-normal">
              Four structural pillars designed to convert standard compliance operations into sustainable commercial advantages.
            </p>
          </GsapScrollReveal>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            
            // Even 4-column grid so all pillar cards line up consistently
            const colClasses = [
              'col-span-12 md:col-span-6 lg:col-span-3',
              'col-span-12 md:col-span-6 lg:col-span-3',
              'col-span-12 md:col-span-6 lg:col-span-3',
              'col-span-12 md:col-span-6 lg:col-span-3'
            ];

            return (
              <GsapScrollReveal
                key={pillar.title}
                animationType="slide-up"
                delay={idx * 0.1}
                className={`h-full ${colClasses[idx % colClasses.length]}`}
              >
                <div
                  className={`bg-[#121826] border border-white/[0.04] p-8 md:p-10 flex flex-col justify-between h-[360px] relative overflow-hidden transition-all duration-500 group rounded-none shadow-xl hover:bg-[#161E30] ${pillar.borderHover} hover:-translate-y-2`}
                >
                  {/* Glowing light-leak hover shadow */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${pillar.glow}`} />

                  {/* Top Header Row of Card */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className="font-mono text-xs text-gray-500 font-bold">
                      {pillar.num} //
                    </span>
                    <Icon className={`${pillar.color} stroke-[1.25] group-hover:scale-110 transition-transform duration-500`} size={24} />
                  </div>

                  {/* Title & Description */}
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-xl font-medium text-white tracking-tight group-hover:text-white transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Premium fine glow-accent strip on bottom */}
                  <div className="w-full h-[2px] bg-white/[0.03] absolute bottom-0 left-0 overflow-hidden">
                    <div className="w-0 h-full bg-gradient-to-r from-[#0057B8] via-[#F58220] to-[#1FA54A] group-hover:w-full transition-all duration-700 ease-out" />
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


