import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Magnetic from './Magnetic';
import WhatsAppIcon from './WhatsAppIcon';
import caIndiaLogo from '../assets/ca-india-logo.png';
import { CONTACT, telHref, waHref } from '../contactInfo';

gsap.registerPlugin(ScrollTrigger);

interface NavbarProps {
  onScheduleConsultation: () => void;
}

export default function Navbar({ onScheduleConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Scroll progress bar via GSAP ScrollTrigger
    const anim = gsap.to(progressRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
      anim.kill();
    };
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Our Approach', href: '#approach' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Insights', href: '#insights' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        ref={progressRef}
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#0057B8] origin-left z-50 scale-x-0"
      />

      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FAFBFC]/95 backdrop-blur-md border-b border-[#DCE6F2] py-4 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand Section */}
          <a href="#" className="flex items-center space-x-3 group">
            <img
              src={caIndiaLogo}
              alt="Mohata & Co. — CA India Member Firm"
              className="h-9 md:h-10 w-auto group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col items-start">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-[#1D1D1F] transition-colors duration-300">
                MOHATA <span className="text-[#0057B8] font-normal">&amp; CO.</span>
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-gray-500 font-mono -mt-1 group-hover:text-[#F58220] transition-colors duration-300">
                Chartered Accountants
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-[#1D1D1F]/80 hover:text-[#0057B8] transition-colors relative py-1 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#0057B8] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Consultation CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={telHref(CONTACT.phones[0].tel)}
              aria-label="Call Mohata & Co."
              className="flex items-center justify-center w-10 h-10 border border-[#DCE6F2] text-[#0057B8] hover:border-[#0057B8] hover:bg-[#0057B8] hover:text-white transition-all duration-300 cursor-pointer"
              title={CONTACT.phones[0].display}
            >
              <Phone size={16} />
            </a>
            <a
              href={waHref(CONTACT.whatsappNumber, "Hello Mohata & Co., I'd like to schedule a consultation.")}
              target="_blank"
              rel="noreferrer"
              aria-label="Message Mohata & Co. on WhatsApp"
              className="flex items-center justify-center w-10 h-10 border border-[#DCE6F2] text-[#1FA54A] hover:border-[#1FA54A] hover:bg-[#1FA54A] hover:text-white transition-all duration-300 cursor-pointer"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon size={16} />
            </a>
            <Magnetic strength={10}>
              <button
                id="nav-consultation-btn"
                onClick={onScheduleConsultation}
                className="flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold border border-[#0057B8] text-[#0057B8] px-5 py-2.5 rounded-none hover:bg-[#0057B8] hover:text-white transition-all duration-300 group shadow-sm hover:shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057B8] focus-visible:ring-offset-2"
              >
                <span>Book Consultation</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </Magnetic>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#1D1D1F] hover:text-[#0057B8] transition-colors p-1 cursor-pointer"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[60px] bg-[#FAFBFC] z-30 lg:hidden px-8 py-12 flex flex-col justify-between border-t border-[#DCE6F2] transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-semibold text-[#1D1D1F] hover:text-[#0057B8] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex flex-col space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <a
              href={telHref(CONTACT.phones[0].tel)}
              className="flex items-center justify-center space-x-2 text-sm font-semibold border border-[#DCE6F2] text-[#0057B8] py-3.5"
            >
              <Phone size={16} />
              <span>Call</span>
            </a>
            <a
              href={waHref(CONTACT.whatsappNumber, "Hello Mohata & Co., I'd like to schedule a consultation.")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center space-x-2 text-sm font-semibold border border-[#1FA54A]/30 text-[#1FA54A] py-3.5"
            >
              <WhatsAppIcon size={16} />
              <span>WhatsApp</span>
            </a>
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onScheduleConsultation();
            }}
            className="w-full text-center text-sm font-semibold border border-[#0057B8] text-[#0057B8] py-4 rounded-none hover:bg-[#0057B8] hover:text-white transition-all cursor-pointer"
          >
            Book Consultation
          </button>
          <div className="flex items-center justify-center space-x-3 pt-2">
            <img src={caIndiaLogo} alt="CA India — ICAI Member Firm" className="h-6 w-auto opacity-80" />
            <span className="text-xs text-center text-gray-400 font-mono">
              Surat | Ahmedabad
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
