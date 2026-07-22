import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

/**
 * Mobile-only floating "back to top" control. Sits just above the
 * FloatingWhatsApp button (bottom-24) so the two never overlap, and
 * only appears once the user has scrolled a meaningful distance down
 * the page. Hidden on sm and above, where the footer's own
 * "Scroll To Peak" control already covers this need.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 480);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 sm:hidden">
      <AnimatePresence>
        {visible && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.6, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 12 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-11 h-11 rounded-full bg-[#123B73] text-white shadow-lg shadow-[#123B73]/30 cursor-pointer"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
