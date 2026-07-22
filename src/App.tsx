import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import IndustryExpertise from './components/IndustryExpertise';
import Leadership from './components/Leadership';
import Insights from './components/Insights';
import ClientFocus from './components/ClientFocus';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';
import Preloader from './components/Preloader';
import SectionDots from './components/SectionDots';
import GrainOverlay from './components/GrainOverlay';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isPreloading, setIsPreloading] = useState(true);

  const openConsultation = () => setIsConsultationOpen(true);
  const closeConsultation = () => setIsConsultationOpen(false);

  useEffect(() => {
    // Lock scroll while the entrance mark draws in, matching the
    // preloader treatment already used on the Prabhakar Processors site.
    document.body.style.overflow = isPreloading ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPreloading]);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-like easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Link Lenis to GSAP ScrollTrigger updates
    lenis.on('scroll', ScrollTrigger.update);

    // Sync GSAP ticker to Lenis requestAnimationFrame
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);

    // Disable standard lag smoothing for tighter synchronization
    gsap.ticker.lagSmoothing(0);

    // Global anchor link smooth scroll handler
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetEl = document.querySelector(href);
          if (targetEl && targetEl instanceof HTMLElement) {
            lenis.scrollTo(targetEl, {
              offset: -80, // navbar height offset
              duration: 1.5,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Cleanup on unmount
    return () => {
      gsap.ticker.remove(updateTicker);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFBFC] text-[#1D1D1F] selection:bg-[#0057B8] selection:text-white antialiased font-sans">
      {/* Branded entrance animation */}
      <Preloader onComplete={() => setIsPreloading(false)} />

      {/* Ambient film-grain texture across the whole page */}
      <GrainOverlay />

      {/* Premium Sticky Navigation */}
      <Navbar onScheduleConsultation={openConsultation} />

      {/* Fixed section-progress rail */}
      <SectionDots />

      {/* Main Sections Stack */}
      <main className="relative">
        <Hero onScheduleConsultation={openConsultation} />
        <About />
        <Philosophy />
        <Services />
        <IndustryExpertise />
        <Leadership />
        <Insights />
        <ClientFocus />
        <Contact />
      </main>

      {/* Corporate Navy Footer */}
      <Footer />

      {/* Interactive Consultation Form Modal */}
      <ConsultationModal isOpen={isConsultationOpen} onClose={closeConsultation} />

      {/* Floating WhatsApp Quick-Contact */}
      <FloatingWhatsApp />

      {/* Mobile-only Back-to-Top arrow */}
      <BackToTop />
    </div>
  );
}
