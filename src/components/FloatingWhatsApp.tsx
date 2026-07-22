import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { CONTACT, waHref } from '../contactInfo';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Let the hero settle before the button enters, matches the site's staged entrance feel
    const revealTimer = setTimeout(() => setVisible(true), 900);
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 3200);
    const tooltipHide = setTimeout(() => setShowTooltip(false), 7200);
    return () => {
      clearTimeout(revealTimer);
      clearTimeout(tooltipTimer);
      clearTimeout(tooltipHide);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="hidden sm:flex items-center bg-white text-[#1D1D1F] text-xs font-medium px-4 py-2.5 shadow-lg border border-[#DCE6F2] whitespace-nowrap"
          >
            Chat with a partner on WhatsApp
            <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-b border-[#DCE6F2] rotate-[-45deg]" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={waHref(CONTACT.whatsappNumber, "Hello Mohata & Co., I'd like to schedule a consultation.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Mohata & Co. on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={visible ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#1FA54A] text-white shadow-xl shadow-[#1FA54A]/30 cursor-pointer"
        data-cursor="whatsapp"
      >
        {/* Ambient pulse rings signalling live availability */}
        <span className="absolute inset-0 rounded-full bg-[#1FA54A] animate-ping opacity-30" />
        <span className="absolute inset-0 rounded-full border-2 border-[#1FA54A]/40 animate-pulse" />
        <MessageCircle size={26} strokeWidth={2} className="relative z-10" />
      </motion.a>
    </div>
  );
}
