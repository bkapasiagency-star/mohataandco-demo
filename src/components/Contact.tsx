import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ArrowUpRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { ContactFormData } from '../types';
import LineSeparator from './LineSeparator';
import GsapScrollReveal from './GsapScrollReveal';
import GsapTextReveal from './GsapTextReveal';
import Magnetic from './Magnetic';
import { CONTACT, telHref, mailHref, waHref } from '../contactInfo';

interface ContactProps {
  showConsultationModal: boolean;
  onCloseConsultationModal: () => void;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Audit & Assurance',
    message: '',
    preferredTime: 'Morning (9:00 AM - 12:00 PM)'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate high-end server API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const servicesList = [
    'Audit & Assurance',
    'Tax Advisory',
    'GST & Indirect Tax',
    'Corporate Compliance',
    'Internal & Bank Audit',
    'IPO Advisory & Virtual CFO',
    'Business Advisory & Strategy'
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F5F8FB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Signature orange line separating sections */}
        <LineSeparator />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-8 pt-12 items-start">
          
          {/* Left Column: Office Details and Coordinates (Cols 1-4) */}
          <div className="lg:col-span-4 lg:col-start-1 space-y-12">
            <div className="space-y-4">
              <GsapScrollReveal animationType="fade-in">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#0057B8] font-bold">
                  Engagement // Contact
                </span>
              </GsapScrollReveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#1D1D1F] leading-tight">
                <GsapTextReveal text="Let&apos;s Architect" className="block" />
                <span className="text-[#0057B8] font-semibold">
                  <GsapTextReveal text="Your Strategy" />
                </span>.
              </h2>
              <GsapScrollReveal animationType="slide-up" delay={0.2}>
                <p className="text-sm text-gray-500 leading-relaxed max-w-sm font-normal">
                  Convene with our partners to discuss structures, compliance shielding, and capital scaling.
                </p>
              </GsapScrollReveal>
            </div>

            {/* Offices & Locations */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Surat Office */}
                <GsapScrollReveal animationType="slide-up" delay={0.3}>
                  <div className="space-y-3 p-5 bg-white border border-[#DCE6F2] relative">
                    <div className="absolute top-0 left-0 w-[2px] h-8 bg-[#0057B8]" />
                    <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-bold">Surat Office</span>
                    <h4 className="font-semibold text-base text-[#1D1D1F]">Head Office</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-normal">
                      B lift 406-407, Ambrosia Business Hub, VIP Road, Vesu, Surat, Gujarat 395007
                    </p>
                  </div>
                </GsapScrollReveal>

                {/* Ahmedabad Office */}
                <GsapScrollReveal animationType="slide-up" delay={0.4}>
                  <div className="space-y-3 p-5 bg-white border border-[#DCE6F2] relative">
                    <div className="absolute top-0 left-0 w-[2px] h-8 bg-[#F58220]" />
                    <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-bold">Ahmedabad Office</span>
                    <h4 className="font-semibold text-base text-[#1D1D1F]">Navrangpura Branch</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-normal">
                      33, Avani Complex, Behind Navrangpura Police Station, Ahmedabad, Gujarat 380009
                    </p>
                  </div>
                </GsapScrollReveal>
              </div>

              {/* Direct Touchpoints */}
              <GsapScrollReveal animationType="fade-in" delay={0.5} className="space-y-4 pt-4 border-t border-[#DCE6F2]">
                <div className="flex flex-col space-y-2 text-sm text-[#1D1D1F]/90">
                  {CONTACT.phones.map((p) => (
                    <a
                      key={p.tel}
                      href={telHref(p.tel)}
                      className="flex items-center space-x-3 group w-fit"
                    >
                      <Phone size={16} className="text-[#0057B8] group-hover:scale-110 transition-transform" />
                      <span className="font-mono font-medium group-hover:text-[#0057B8] transition-colors">{p.display}</span>
                    </a>
                  ))}
                </div>

                <a href={mailHref(CONTACT.email)} className="flex items-center space-x-3 text-sm text-[#1D1D1F]/90 group w-fit">
                  <Mail size={16} className="text-[#0057B8] group-hover:scale-110 transition-transform" />
                  <span className="font-mono font-medium group-hover:text-[#0057B8] transition-colors">{CONTACT.email}</span>
                </a>
                <div className="flex items-center space-x-3 text-sm text-gray-500 font-mono text-xs">
                  <Clock size={14} className="text-gray-400" />
                  <span>Mon - Sat: 10:00 AM - 7:00 PM IST</span>
                </div>

                {/* Prominent Call / WhatsApp CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Magnetic strength={8} className="flex-1">
                    <a
                      href={telHref(CONTACT.phones[0].tel)}
                      className="w-full flex items-center justify-center space-x-2 bg-[#0057B8] text-white text-xs font-semibold uppercase tracking-widest px-5 py-3.5 hover:bg-[#123B73] transition-all duration-300 group shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057B8] focus-visible:ring-offset-2"
                    >
                      <Phone size={14} />
                      <span>Call Now</span>
                      <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </a>
                  </Magnetic>
                  <Magnetic strength={8} className="flex-1">
                    <a
                      href={waHref(CONTACT.whatsappNumber, "Hello Mohata & Co., I'd like to schedule a consultation.")}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center space-x-2 border border-[#1FA54A] text-[#1FA54A] text-xs font-semibold uppercase tracking-widest px-5 py-3.5 hover:bg-[#1FA54A] hover:text-white transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1FA54A] focus-visible:ring-offset-2"
                    >
                      <WhatsAppIcon size={14} />
                      <span>WhatsApp Us</span>
                    </a>
                  </Magnetic>
                </div>
              </GsapScrollReveal>
            </div>

            {/* Custom Styled Geometric Map SVG representation */}
            <GsapScrollReveal animationType="slide-up" delay={0.6}>
              <div className="h-[200px] border border-[#DCE6F2] relative bg-white overflow-hidden p-4 flex items-center justify-center">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="contactGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#0057B8" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#contactGrid)" />
                  </svg>
                </div>

                {/* Styled Abstract Gujarat/India coordinates */}
                <div className="text-center relative z-10 space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-gray-400 font-bold block">
                    COORDINATES // GUJARAT PRACTICE
                  </span>
                  <span className="font-mono text-xs text-[#0057B8] font-bold block">
                    SURAT: 21.1702&deg; N, 72.8311&deg; E
                  </span>
                  <span className="font-mono text-xs text-[#F58220] font-bold block">
                    AHMEDABAD: 23.0225&deg; N, 72.5714&deg; E
                  </span>
                  <div className="w-12 h-1 bg-gradient-to-r from-[#0057B8] to-[#F58220] mx-auto mt-2" />
                </div>
              </div>
            </GsapScrollReveal>
          </div>

          {/* Right Column: Premium Consultation Booking Form (Cols 6-12) */}
          <div className="lg:col-span-7 lg:col-start-6">
            <GsapScrollReveal animationType="slide-up" delay={0.3} className="w-full">
              <div className="bg-white border border-[#DCE6F2] p-8 md:p-10 shadow-sm relative w-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-50 to-transparent pointer-events-none" />

                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.form
                      key="contact-form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6 animate-none"
                    >
                      <div className="border-b border-[#DCE6F2] pb-4 mb-6">
                        <h3 className="text-lg font-bold text-[#1D1D1F]">Consultation Scheduler</h3>
                        <p className="text-xs text-gray-400 mt-1">Provide your operational details for custom-matched partner assignments.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name input */}
                        <div className="space-y-2">
                          <label className="block text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-200 focus:border-[#0057B8] focus:outline-none text-sm transition-colors rounded-none"
                            placeholder="John Doe"
                          />
                        </div>

                        {/* Email input */}

                    <div className="space-y-2">
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 focus:border-[#0057B8] focus:outline-none text-sm transition-colors rounded-none"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone input */}
                    <div className="space-y-2">
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 focus:border-[#0057B8] focus:outline-none text-sm transition-colors rounded-none"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    {/* Company input */}
                    <div className="space-y-2">
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 focus:border-[#0057B8] focus:outline-none text-sm transition-colors rounded-none"
                        placeholder="Acme Ltd"
                      />
                    </div>
                  </div>

                  {/* Service selection dropdown */}
                  <div className="space-y-2">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold">
                      Practice Area of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 focus:border-[#0057B8] focus:outline-none text-sm transition-colors rounded-none bg-white"
                    >
                      {servicesList.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Timing window selector */}
                  <div className="space-y-2">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold">
                      Preferred Consultation Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 focus:border-[#0057B8] focus:outline-none text-sm transition-colors rounded-none bg-white"
                    >
                      <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                      <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
                    </select>
                  </div>

                  {/* Brief operational message */}
                  <div className="space-y-2">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold">
                      Brief Message or Operational Query
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 focus:border-[#0057B8] focus:outline-none text-sm transition-colors rounded-none resize-none"
                      placeholder="Briefly share your advisory, audit or GST compliance needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#0057B8] text-white font-medium text-xs tracking-widest uppercase rounded-none hover:bg-[#123B73] disabled:bg-gray-400 disabled:cursor-not-allowed transition-all flex items-center justify-center space-x-2 cursor-pointer"
                    data-cursor="submit"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING ADVISORY PARAMETERS...</span>
                    ) : (
                      <>
                        <span>INITIATE SCHEDULER</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-6"
                >
                  <CheckCircle size={64} className="text-[#1FA54A] animate-pulse" />
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#1D1D1F]">Transmission Complete</h3>
                    <p className="text-sm text-gray-500 max-w-sm mx-auto">
                      Your consultation parameters have been securely logged. A senior partner from our Surat or Ahmedabad office will initiate contact within 4 business hours.
                    </p>
                  </div>

                  <div className="pt-6 font-mono text-[10px] text-gray-400">
                    TRANSMISSION ID: MH-{Math.floor(Math.random() * 900000) + 100000}
                  </div>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: 'Audit & Assurance',
                        message: '',
                        preferredTime: 'Morning (9:00 AM - 12:00 PM)'
                      });
                    }}
                    className="px-6 py-2.5 border border-gray-200 text-gray-600 hover:text-[#0057B8] hover:border-[#0057B8] text-xs font-mono uppercase transition-colors"
                  >
                    Book Another Slot
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </GsapScrollReveal>
      </div>

        </div>

      </div>
    </section>
  );
}
