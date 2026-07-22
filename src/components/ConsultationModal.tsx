import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle } from 'lucide-react';
import { ContactFormData } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
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
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#1D1D1F]/60 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg bg-[#FAFBFC] border border-[#DCE6F2] shadow-2xl p-6 md:p-8 cursor-default relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Corner Decorative Watermark */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gray-50 to-transparent pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 text-gray-400 hover:text-[#1D1D1F] transition-colors rounded-full"
            >
              <X size={18} />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#DCE6F2] pb-3 mb-4">
                  <span className="font-mono text-[9px] text-[#0057B8] font-bold uppercase tracking-widest block">
                    Direct Channel // Partner Consultation
                  </span>
                  <h3 className="text-xl font-bold text-[#1D1D1F] mt-1">Convene With Partners</h3>
                  <p className="text-xs text-gray-400 mt-1">Submit your practice request. A senior partner will response within 4 business hours.</p>
                </div>

                {/* Name */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 font-bold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 focus:border-[#0057B8] focus:outline-none text-xs transition-colors rounded-none"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 font-bold">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 focus:border-[#0057B8] focus:outline-none text-xs transition-colors rounded-none"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 font-bold">
                      Contact *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 focus:border-[#0057B8] focus:outline-none text-xs transition-colors rounded-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Company & Timing Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 font-bold">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 focus:border-[#0057B8] focus:outline-none text-xs transition-colors rounded-none"
                      placeholder="Acme Ltd"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 font-bold">
                      Preferred Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 focus:border-[#0057B8] focus:outline-none text-xs transition-colors rounded-none bg-white"
                    >
                      <option value="Morning (9:00 AM - 12:00 PM)">Morning</option>
                      <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon</option>
                      <option value="Evening (4:00 PM - 7:00 PM)">Evening</option>
                    </select>
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 font-bold">
                    Practice of Interest
                    </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 focus:border-[#0057B8] focus:outline-none text-xs transition-colors rounded-none bg-white"
                  >
                    {servicesList.map((srv) => (
                      <option key={srv} value={srv}>
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Action button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#0057B8] text-white font-medium text-xs tracking-widest uppercase rounded-none hover:bg-[#123B73] disabled:bg-gray-400 disabled:cursor-not-allowed transition-all flex items-center justify-center space-x-2 cursor-pointer mt-6"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING...</span>
                  ) : (
                    <>
                      <span>SECURE REGISTER REQUEST</span>
                      <Send size={12} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="py-10 text-center space-y-6 flex flex-col items-center">
                <CheckCircle size={56} className="text-[#1FA54A] animate-pulse" />
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#1D1D1F]">Request Logged</h3>
                  <p className="text-xs text-gray-500 max-w-xs mx-auto">
                    Your parameters are transmitted. A senior partner will initiate a formal virtual conference call with you in 4 business hours.
                  </p>
                </div>

                <div className="font-mono text-[9px] text-gray-400">
                  REGISTRATION CODE: MH-{Math.floor(Math.random() * 90000) + 10000}
                </div>

                <button
                  onClick={() => {
                    setIsSuccess(false);
                    onClose();
                  }}
                  className="px-6 py-2 border border-gray-200 text-gray-600 hover:text-[#0057B8] text-xs font-mono uppercase transition-colors"
                >
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
