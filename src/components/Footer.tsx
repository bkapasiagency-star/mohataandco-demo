import { Facebook, Twitter, Linkedin, ArrowUp, MessageCircle, Phone, Mail } from 'lucide-react';
import BrandLogo from './BrandLogo';
import caIndiaLogo from '../assets/ca-india-logo.png';
import { CONTACT, telHref, mailHref, waHref } from '../contactInfo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#123B73] text-[#FAFBFC] py-20 relative overflow-hidden">
      {/* Absolute Geometric Blueprint Accent */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#0057B8]/10 blur-[80px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-8 pb-16 border-b border-white/10">
          
          {/* Brand Left Column (Cols 1-4) */}
          <div className="lg:col-span-4 lg:col-start-1 space-y-6">
            <div className="flex items-center space-x-3">
              <BrandLogo size={42} variant="white" className="hover:scale-105" />
              <div className="flex flex-col items-start">
                <span className="text-2xl md:text-3xl font-bold tracking-tight">
                  MOHATA <span className="text-[#F58220] font-normal">&amp; CO.</span>
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-gray-300 font-mono mt-1">
                  Chartered Accountants
                </span>
              </div>
            </div>

            {/* ICAI / CA India accreditation mark */}
            <div className="flex items-center space-x-3 pt-1">
              <div className="bg-white/95 px-3 py-2 inline-flex items-center">
                <img src={caIndiaLogo} alt="CA India — ICAI Member Firm" className="h-7 w-auto" />
              </div>
              <span className="text-[10px] text-gray-400 font-mono leading-snug max-w-[140px]">
                Firm Registration No: 142240W
              </span>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Providing premium audit, corporate tax, direct litigations, GST diagnostic assurances, and IPO advisory across Gujarat and global corridors.
            </p>

            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com/company/mohata-co"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-white/5 hover:bg-[#0057B8] text-gray-300 hover:text-white transition-all rounded-none hover:-translate-y-0.5 duration-300"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="p-2.5 bg-white/5 hover:bg-[#0057B8] text-gray-300 hover:text-white transition-all rounded-none hover:-translate-y-0.5 duration-300"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="p-2.5 bg-white/5 hover:bg-[#0057B8] text-gray-300 hover:text-white transition-all rounded-none hover:-translate-y-0.5 duration-300"
              >
                <Facebook size={16} />
              </a>
              <a
                href={waHref(CONTACT.whatsappNumber, "Hello Mohata & Co., I'd like to schedule a consultation.")}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
                className="p-2.5 bg-white/5 hover:bg-[#1FA54A] text-gray-300 hover:text-white transition-all rounded-none hover:-translate-y-0.5 duration-300"
              >
                <MessageCircle size={16} />
              </a>
            </div>

            {/* Direct call / WhatsApp / email CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={telHref(CONTACT.phones[0].tel)}
                className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider border border-white/15 px-4 py-2.5 hover:bg-white/10 hover:border-white/30 transition-all"
              >
                <Phone size={14} className="text-[#F58220]" />
                <span>Call Now</span>
              </a>
              <a
                href={waHref(CONTACT.whatsappNumber, "Hello Mohata & Co., I'd like to schedule a consultation.")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider border border-[#1FA54A]/30 px-4 py-2.5 hover:bg-[#1FA54A]/10 hover:border-[#1FA54A]/60 transition-all"
              >
                <MessageCircle size={14} className="text-[#1FA54A]" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column (Cols 6-8) */}
          <div className="lg:col-span-3 lg:col-start-6 space-y-6">
            <h4 className="font-mono text-xs text-[#F58220] uppercase tracking-widest font-bold">
              Practice Sectors
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">Audit &amp; Assurance</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Corporate Tax Advisory</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">GST Compliance Reviews</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">IPO &amp; Corporate Reorganizations</a></li>
            </ul>
          </div>

          {/* Locations Column (Cols 9-12) */}
          <div className="lg:col-span-4 lg:col-start-9 space-y-6">
            <h4 className="font-mono text-xs text-[#1FA54A] uppercase tracking-widest font-bold">
              Regional Practices
            </h4>
            <ul className="space-y-4 text-xs text-gray-300">
              <li className="flex flex-col space-y-1">
                <span className="font-semibold text-white">Surat HQ</span>
                <span>VIP Road, Vesu, Surat, GJ, IN</span>
                <a href={telHref(CONTACT.phones[0].tel)} className="text-gray-400 font-mono hover:text-white transition-colors w-fit">
                  {CONTACT.phones[0].display}
                </a>
              </li>
              <li className="flex flex-col space-y-1">
                <span className="font-semibold text-white">Ahmedabad Branch</span>
                <span>Navrangpura, Ahmedabad, GJ, IN</span>
                <a href={telHref(CONTACT.phones[1].tel)} className="text-gray-400 font-mono hover:text-white transition-colors w-fit">
                  {CONTACT.phones[1].display}
                </a>
              </li>
              <li className="flex items-center space-x-2 pt-1">
                <Mail size={13} className="text-[#F58220]" />
                <a href={mailHref(CONTACT.email)} className="text-gray-400 font-mono hover:text-white transition-colors">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Base Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-mono gap-4">
          <div className="flex flex-col space-y-1 text-center md:text-left">
            <span>&copy; {new Date().getFullYear()} Mohata &amp; Co. All rights reserved.</span>
            <span className="text-[10px] text-gray-500">Firm Registration No: 142240W | ICAI India Member Guidelines Compliant.</span>
          </div>

          {/* Scroll To Top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all text-xs uppercase tracking-wider font-semibold cursor-pointer"
          >
            <span>Scroll To Peak</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
