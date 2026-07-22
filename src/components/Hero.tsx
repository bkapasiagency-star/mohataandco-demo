import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight, Scale, Compass, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Magnetic from './Magnetic';

interface HeroProps {
  onScheduleConsultation: () => void;
}

type ModeType = 'balance' | 'alignment' | 'assurance';

export default function Hero({ onScheduleConsultation }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeMode, setActiveMode] = useState<ModeType>('balance');
  
  // Balance Interaction States
  const [tiltAngle, setTiltAngle] = useState(0);
  const scaleContainerRef = useRef<HTMLDivElement>(null);

  // Alignment Interaction States
  const [alignmentRotation, setAlignmentRotation] = useState(0);
  const alignmentContainerRef = useRef<HTMLDivElement>(null);

  // Assurance Hover States for 3x3 matrix
  const [hoveredCell, setHoveredCell] = useState<number | null>(null);

  // Animated counter display values for the Quick Metrics strip
  const [statYear, setStatYear] = useState(0);
  const [statCAs, setStatCAs] = useState(0);
  const [statClients, setStatClients] = useState(0);

  // Entrance animations on initial page load
  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-tag', { opacity: 0, y: 15, duration: 0.8 })
        .from('.hero-title', { opacity: 0, y: 30, duration: 1 }, '-=0.6')
        .from('.hero-underline', { scaleX: 0, transformOrigin: 'left center', duration: 1.2, ease: 'power2.inOut' }, '-=0.5')
        .from('.hero-p', { opacity: 0, y: 20, duration: 0.8 }, '-=0.6')
        .from('.hero-btns', { opacity: 0, y: 25, duration: 0.8 }, '-=0.6')
        .from('.hero-metrics', { opacity: 0, y: 15, duration: 0.8 }, '-=0.6');

      tl.from('.hero-canvas-container', { opacity: 0, scale: 0.96, duration: 1.2 }, 0.2);

      // Count-up animation for the metrics strip, synced with its fade-in
      const counters = { year: 0, cas: 0, clients: 0 };
      tl.to(counters, {
        year: 2016,
        cas: 5,
        clients: 1000,
        duration: 1.6,
        ease: 'power2.out',
        onUpdate: () => {
          setStatYear(Math.floor(counters.year));
          setStatCAs(Math.floor(counters.cas));
          setStatClients(Math.floor(counters.clients));
        },
      }, '-=0.6');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Mouse movement calculations for BALANCE mode
  const handleScaleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scaleContainerRef.current) return;
    const rect = scaleContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const relativeX = (x / width) - 0.5; // -0.5 to 0.5
    
    // Tilt angle max -15 to +15 degrees
    setTiltAngle(relativeX * 30);
  };

  const handleScaleMouseLeave = () => {
    // Smooth spring back to perfect balance
    const obj = { angle: tiltAngle };
    gsap.to(obj, {
      angle: 0,
      duration: 1.2,
      ease: 'elastic.out(1, 0.4)',
      onUpdate: () => {
        setTiltAngle(obj.angle);
      }
    });
  };

  // Mouse movement calculations for ALIGNMENT mode (angular rotation)
  const handleAlignmentMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!alignmentContainerRef.current) return;
    const rect = alignmentContainerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    
    // Convert coordinates to angle in degrees
    const angleRad = Math.atan2(dy, dx);
    const angleDeg = angleRad * (180 / Math.PI);
    setAlignmentRotation(angleDeg);
  };

  const handleAlignmentMouseLeave = () => {
    const obj = { rot: alignmentRotation };
    gsap.to(obj, {
      rot: 0,
      duration: 1.4,
      ease: 'power3.out',
      onUpdate: () => {
        setAlignmentRotation(obj.rot);
      }
    });
  };

  // Mathematical beam calculation for custom SVG Balance
  const rad = (tiltAngle * Math.PI) / 180;
  const beamLength = 110;
  const originX = 200;
  const originY = 110;

  // Beam coordinate endpoints
  const x1 = originX - beamLength * Math.cos(rad);
  const y1 = originY - beamLength * Math.sin(rad);
  const x2 = originX + beamLength * Math.cos(rad);
  const y2 = originY + beamLength * Math.sin(rad);

  return (
    <section ref={containerRef} className="relative min-h-[92vh] md:min-h-screen pt-32 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-[#F5F8FB] to-[#FAFBFC]">
      {/* Absolute Ambient Grid Backdrop */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0057B8" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-center relative z-10">
        
        {/* Editorial Text Left Column (Cols 1-7) */}
        <div className="lg:col-span-7 lg:col-start-1 flex flex-col items-start text-left space-y-8">
          <div className="flex items-center space-x-2 hero-tag">
            <span className="w-1.5 h-1.5 bg-[#0057B8] rounded-full" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#0057B8] font-bold">
              Mohata &amp; Co. Advisory
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1D1D1F] leading-[1.12] hero-title">
            Building Financial Confidence <br />
            <span className="text-[#0057B8] font-semibold relative inline-block">
              for Businesses That Aim Higher
              <span className="absolute left-0 bottom-1 w-full h-[3px] bg-[#F58220]/75 origin-left hero-underline" />
            </span>
            .
          </h1>

          <p className="text-base md:text-lg text-[#1D1D1F]/70 max-w-xl font-normal leading-relaxed hero-p">
            Helping entrepreneurs, family businesses, startups and enterprises navigate compliance, taxation, audit and strategic financial decisions with confidence.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 hero-btns">
            <Magnetic strength={12}>
              <button
                onClick={onScheduleConsultation}
                className="px-8 py-4 bg-[#0057B8] text-white font-medium text-sm tracking-wider uppercase rounded-none hover:bg-[#123B73] transition-all duration-300 shadow-sm hover:shadow-lg flex items-center space-x-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057B8] focus-visible:ring-offset-2"
              >
                <span>Schedule Consultation</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </Magnetic>

            <a
              href="#services"
              className="px-8 py-4 border border-[#DCE6F2] text-[#1D1D1F] bg-white hover:bg-[#F5F8FB] hover:border-[#0057B8] font-medium text-sm tracking-wider uppercase rounded-none transition-all duration-300"
            >
              Explore Services
            </a>
          </div>

          {/* Quick Metrics in Elegant Mono Typography */}
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-[#DCE6F2] w-full max-w-md font-mono hero-metrics">
            <div>
              <span className="block text-2xl font-bold text-[#1D1D1F]">{statYear}</span>
              <span className="text-[10px] uppercase text-gray-500 tracking-wider">Established</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-[#0057B8]">{statCAs}+</span>
              <span className="text-[10px] uppercase text-gray-500 tracking-wider">Qualified CAs</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-[#F58220]">{statClients}+</span>
              <span className="text-[10px] uppercase text-gray-500 tracking-wider">Clients Served</span>
            </div>
          </div>
        </div>

        {/* Dynamic & Aesthetic Interactive Column (Cols 8-12) */}
        <div className="lg:col-span-5 lg:col-start-8 flex justify-center items-center relative hero-canvas-container select-none">
          {/* Subtle Back Glow */}
          <div className="absolute w-[260px] h-[260px] bg-[#0057B8]/4 blur-[60px] rounded-full pointer-events-none -top-10 -left-10 animate-pulse" />
          <div className="absolute w-[200px] h-[200px] bg-[#F58220]/3 blur-[80px] rounded-full pointer-events-none -bottom-10 -right-10 animate-pulse" />

          {/* Luxury Blueprint Canvas Module */}
          <div className="bg-white border border-[#DCE6F2] p-6 shadow-xl relative flex flex-col space-y-6 w-full max-w-[460px] z-10 rounded-none">
            
            {/* Structural Blueprint Header */}
            <div className="flex items-center justify-between border-b border-[#DCE6F2] pb-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-400 flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0057B8] animate-pulse" />
                <span>Foundational Principles</span>
              </span>
              <span className="font-mono text-[9px] text-[#0057B8] font-bold tracking-widest">VERITAS . 2016</span>
            </div>

            {/* Premium Tab Selector for Design Principles */}
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setActiveMode('balance')}
                className={`py-2 px-1 flex flex-col items-center justify-center border transition-all duration-300 cursor-pointer ${
                  activeMode === 'balance'
                    ? 'bg-[#F5F8FB] border-[#0057B8] text-[#0057B8] font-semibold'
                    : 'bg-transparent border-[#DCE6F2] text-gray-400 hover:text-[#1D1D1F] hover:bg-gray-50'
                }`}
              >
                <Scale size={14} className="mb-1" />
                <span className="font-mono text-[9px] uppercase tracking-wider">Equilibrium</span>
              </button>
              
              <button
                onClick={() => setActiveMode('alignment')}
                className={`py-2 px-1 flex flex-col items-center justify-center border transition-all duration-300 cursor-pointer ${
                  activeMode === 'alignment'
                    ? 'bg-[#FFF9F5] border-[#F58220] text-[#F58220] font-semibold'
                    : 'bg-transparent border-[#DCE6F2] text-gray-400 hover:text-[#1D1D1F] hover:bg-gray-50'
                }`}
              >
                <Compass size={14} className="mb-1" />
                <span className="font-mono text-[9px] uppercase tracking-wider">Precision</span>
              </button>
              
              <button
                onClick={() => setActiveMode('assurance')}
                className={`py-2 px-1 flex flex-col items-center justify-center border transition-all duration-300 cursor-pointer ${
                  activeMode === 'assurance'
                    ? 'bg-[#F5FAF6] border-[#1FA54A] text-[#1FA54A] font-semibold'
                    : 'bg-transparent border-[#DCE6F2] text-gray-400 hover:text-[#1D1D1F] hover:bg-gray-50'
                }`}
              >
                <ShieldCheck size={14} className="mb-1" />
                <span className="font-mono text-[9px] uppercase tracking-wider">Integrity</span>
              </button>
            </div>

            {/* Interactivity Stage */}
            <div className="relative bg-[#FAFBFC] border border-[#DCE6F2] h-[300px] w-full overflow-hidden flex items-center justify-center p-4">
              
              {/* Engineering Blueprint Grid Background */}
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#0057B8_1px,transparent_1px),linear-gradient(to_bottom,#0057B8_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              
              <AnimatePresence mode="wait">
                
                {/* 1. EQUILIBRIUM MODE - Interactive Balance Scale */}
                {activeMode === 'balance' && (
                  <motion.div
                    key="balance"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    ref={scaleContainerRef}
                    onMouseMove={handleScaleMouseMove}
                    onMouseLeave={handleScaleMouseLeave}
                    className="w-full h-full flex flex-col justify-between items-center relative cursor-ew-resize py-2"
                  >
                    {/* Hover indicator prompt */}
                    <span className="absolute top-1 text-[8px] font-mono text-gray-400 uppercase tracking-widest animate-pulse">
                      Hover left or right to balance the ledger
                    </span>

                    {/* SVG Interactive Scale Canvas */}
                    <svg className="w-full h-[220px]" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                      
                      {/* Scale Base and Central Pillar */}
                      <path d="M 180 200 L 220 200 L 210 110 L 190 110 Z" fill="#DCE6F2" stroke="#4B5563" strokeWidth="0.75" />
                      <line x1="200" y1="110" x2="200" y2="40" stroke="#4B5563" strokeWidth="1.5" strokeDasharray="2 2" className="opacity-40" />
                      <circle cx="200" cy="110" r="4" fill="#0057B8" stroke="#FFFFFF" strokeWidth="1" />
                      
                      {/* Geometric Balance Arcs */}
                      <circle cx="200" cy="110" r="140" stroke="#0057B8" strokeWidth="0.5" strokeDasharray="4 8" className="opacity-20" />
                      <circle cx="200" cy="110" r="110" stroke="#0057B8" strokeWidth="0.5" strokeDasharray="2 4" className="opacity-10" />

                      {/* Moving Beam Line */}
                      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1D1D1F" strokeWidth="2.5" strokeLinecap="round" />
                      
                      {/* Left Plate Suspension String & Pan */}
                      <line x1={x1} y1={y1} x2={x1 - 15} y2={y1 + 55} stroke="#4B5563" strokeWidth="0.75" />
                      <line x1={x1} y1={y1} x2={x1 + 15} y2={y1 + 55} stroke="#4B5563" strokeWidth="0.75" />
                      {/* Plate Bowl */}
                      <path d={`M ${x1 - 25} ${y1 + 55} Q ${x1} ${y1 + 68} ${x1 + 25} ${y1 + 55} Z`} fill="rgba(0, 87, 184, 0.08)" stroke="#0057B8" strokeWidth="1.25" />
                      {/* Left Load Node */}
                      <circle cx={x1} cy={y1 + 45} r="7" fill="#0057B8" className="opacity-80 animate-pulse" />
                      <text x={x1 - 16} y={y1 + 80} fill="#0057B8" fontSize="8" fontFamily="monospace" fontWeight="bold">ASSETS</text>

                      {/* Right Plate Suspension String & Pan */}
                      <line x1={x2} y1={y2} x2={x2 - 15} y2={y2 + 55} stroke="#4B5563" strokeWidth="0.75" />
                      <line x1={x2} y1={y2} x2={x2 + 15} y2={y2 + 55} stroke="#4B5563" strokeWidth="0.75" />
                      {/* Plate Bowl */}
                      <path d={`M ${x2 - 25} ${y2 + 55} Q ${x2} ${y2 + 68} ${x2 + 25} ${y2 + 55} Z`} fill="rgba(245, 130, 32, 0.08)" stroke="#F58220" strokeWidth="1.25" />
                      {/* Right Load Node */}
                      <circle cx={x2} cy={y2 + 45} r="7" fill="#F58220" className="opacity-80 animate-pulse" />
                      <text x={x2 - 24} y={y2 + 80} fill="#F58220" fontSize="8" fontFamily="monospace" fontWeight="bold">EQUITY</text>

                      {/* Precision Center Angle Marker */}
                      <path d={`M 200 110 L ${200 + 35 * Math.sin(rad)} ${110 - 35 * Math.cos(rad)}`} stroke="#F58220" strokeWidth="1.5" />
                      <circle cx="200" cy="110" r="2.5" fill="#1D1D1F" />
                    </svg>

                    {/* Symmetrical Footnote */}
                    <div className="flex justify-between w-full px-4 text-[9px] font-mono text-gray-500 uppercase tracking-widest border-t border-[#DCE6F2]/60 pt-2">
                      <span>DEBIT (L)</span>
                      <span className="text-[#0057B8]">EQUILIBRIUM SECURED</span>
                      <span>CREDIT (R)</span>
                    </div>
                  </motion.div>
                )}

                {/* 2. PRECISION MODE - Interactive Alignment Rings */}
                {activeMode === 'alignment' && (
                  <motion.div
                    key="alignment"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    ref={alignmentContainerRef}
                    onMouseMove={handleAlignmentMouseMove}
                    onMouseLeave={handleAlignmentMouseLeave}
                    className="w-full h-full flex flex-col justify-between items-center relative cursor-crosshair py-2"
                  >
                    {/* Hover indicator prompt */}
                    <span className="absolute top-1 text-[8px] font-mono text-gray-400 uppercase tracking-widest animate-pulse">
                      Orbit the cursor to align structural borders
                    </span>

                    {/* SVG Concentric Alignment Engine */}
                    <svg className="w-full h-[220px]" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                      
                      {/* Center Origin Reference Crosshairs */}
                      <line x1="200" y1="20" x2="200" y2="200" stroke="#F58220" strokeWidth="0.5" strokeDasharray="3 6" className="opacity-30" />
                      <line x1="100" y1="110" x2="300" y2="110" stroke="#F58220" strokeWidth="0.5" strokeDasharray="3 6" className="opacity-30" />
                      
                      {/* Outer Measurement Ring (Static) */}
                      <circle cx="200" cy="110" r="85" stroke="#DCE6F2" strokeWidth="1" />
                      <circle cx="200" cy="110" r="90" stroke="#DCE6F2" strokeWidth="0.5" strokeDasharray="2 4" />
                      
                      {/* Outer dial calibration ticks */}
                      {[...Array(24)].map((_, i) => {
                        const angle = (i * 15 * Math.PI) / 180;
                        const xStart = 200 + 85 * Math.cos(angle);
                        const yStart = 110 + 85 * Math.sin(angle);
                        const xEnd = 200 + (i % 2 === 0 ? 93 : 89) * Math.cos(angle);
                        const yEnd = 110 + (i % 2 === 0 ? 93 : 89) * Math.sin(angle);
                        return (
                          <line
                            key={i}
                            x1={xStart}
                            y1={yStart}
                            x2={xEnd}
                            y2={yEnd}
                            stroke={i % 6 === 0 ? '#F58220' : '#4B5563'}
                            strokeWidth={i % 6 === 0 ? '1' : '0.5'}
                            className="opacity-40"
                          />
                        );
                      })}

                      {/* Primary Alignment Gear (Rotates with Cursor) */}
                      <g style={{ transform: `rotate(${alignmentRotation}deg)`, transformOrigin: '200px 110px' }} className="transition-transform duration-100 ease-out">
                        {/* Outer rotating wheel */}
                        <circle cx="200" cy="110" r="70" stroke="#0057B8" strokeWidth="1.25" strokeDasharray="20 10 5 10" />
                        <line x1="130" y1="110" x2="270" y2="110" stroke="#0057B8" strokeWidth="0.75" className="opacity-50" />
                        <line x1="200" y1="40" x2="200" y2="180" stroke="#0057B8" strokeWidth="0.75" className="opacity-50" />
                        <circle cx="200" cy="40" r="3" fill="#0057B8" />
                        <circle cx="200" cy="180" r="3" fill="#0057B8" />
                        <circle cx="130" cy="110" r="3" fill="#0057B8" />
                        <circle cx="270" cy="110" r="3" fill="#0057B8" />
                      </g>

                      {/* Counter-Rotating Alignment Gear */}
                      <g style={{ transform: `rotate(${-alignmentRotation * 1.5}deg)`, transformOrigin: '200px 110px' }} className="transition-transform duration-150 ease-out">
                        <circle cx="200" cy="110" r="50" stroke="#F58220" strokeWidth="1" strokeDasharray="10 5" className="opacity-85" />
                        {/* Outer planetary satellites */}
                        <circle cx="200" cy="60" r="4" fill="#F58220" />
                        <circle cx="200" cy="160" r="4" fill="#F58220" />
                      </g>

                      {/* Micro Core Axis */}
                      <circle cx="200" cy="110" r="22" stroke="#1D1D1F" strokeWidth="0.75" />
                      <circle cx="200" cy="110" r="5" fill="#1D1D1F" />
                      <line x1="200" y1="110" x2="200 + 22" y2="110" stroke="#1D1D1F" strokeWidth="1.5" style={{ transform: `rotate(${alignmentRotation * 0.5}deg)`, transformOrigin: '200px 110px' }} />
                    </svg>

                    {/* Principle Coordinates */}
                    <div className="flex justify-between w-full px-4 text-[9px] font-mono text-gray-500 uppercase tracking-widest border-t border-[#DCE6F2]/60 pt-2">
                      <span>RADIAL COORDS: {(alignmentRotation % 360).toFixed(1)}°</span>
                      <span className="text-[#F58220]">COMPLIANCE MATRIX SECURED</span>
                      <span>GRID: REF.016</span>
                    </div>
                  </motion.div>
                )}

                {/* 3. ASSURANCE MODE - Interactive Vault Interlocking Matrix */}
                {activeMode === 'assurance' && (
                  <motion.div
                    key="assurance"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full flex flex-col justify-between items-center relative py-2"
                  >
                    {/* Hover indicator prompt */}
                    <span className="absolute top-1 text-[8px] font-mono text-gray-400 uppercase tracking-widest animate-pulse">
                      Roll over blocks to audit and verify integrity controls
                    </span>

                    {/* Vault Matrix Grid */}
                    <div className="grid grid-cols-3 gap-3 w-full max-w-[280px] h-[190px] items-center my-auto">
                      {[...Array(9)].map((_, i) => {
                        const isHovered = hoveredCell === i;
                        const cellNames = [
                          'AUDIT.CTRL', 'TAX.RESTR', 'FEMA.COMP',
                          'GOV.ASSUR', 'EQU.STRUCT', 'ASSET.VAL',
                          'RISK.MITG', 'CAP.ALLOC', 'SEC.TRUST'
                        ];
                        
                        return (
                          <div
                            key={i}
                            onMouseEnter={() => setHoveredCell(i)}
                            onMouseLeave={() => setHoveredCell(null)}
                            className={`h-[48px] border transition-all duration-300 flex flex-col items-center justify-center p-1.5 relative cursor-pointer select-none ${
                              isHovered
                                ? 'bg-[#1FA54A]/5 border-[#1FA54A] scale-[1.04] shadow-sm z-10'
                                : 'bg-white border-[#DCE6F2] hover:border-gray-400'
                            }`}
                          >
                            {/* Visual assurance lock indicator */}
                            <div className={`w-1.5 h-1.5 rounded-full mb-1 transition-colors duration-300 ${
                              isHovered ? 'bg-[#1FA54A] scale-125' : 'bg-gray-300'
                            }`} />
                            
                            <span className={`font-mono text-[7px] uppercase tracking-wider text-center transition-colors duration-300 ${
                              isHovered ? 'text-[#1FA54A] font-bold' : 'text-gray-400'
                            }`}>
                              {cellNames[i]}
                            </span>

                            {/* Fine blueprint aesthetic corners */}
                            {isHovered && (
                              <>
                                <span className="absolute top-0 left-0 w-1 h-1 border-t border-l border-[#1FA54A]" />
                                <span className="absolute top-0 right-0 w-1 h-1 border-t border-r border-[#1FA54A]" />
                                <span className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-[#1FA54A]" />
                                <span className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-[#1FA54A]" />
                              </>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Assurance Coordinates */}
                    <div className="flex justify-between w-full px-4 text-[9px] font-mono text-gray-500 uppercase tracking-widest border-t border-[#DCE6F2]/60 pt-2">
                      <span>AUDIT GATEWAY: ACTIVE</span>
                      <span className="text-[#1FA54A]">ALL CONTROLS VERIFIED</span>
                      <span>INTEGRITY: 100%</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Aesthetic Design Description */}
            <p className="text-[11px] text-gray-400 font-mono tracking-wide leading-relaxed text-center italic">
              "Visualizing the foundational dynamics of corporate financial architecture: symmetry, regulatory alignment, and continuous structural assurance."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
