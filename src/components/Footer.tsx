import React from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#1A3021]/15 text-[#1A3021]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Brand & Physician Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-2xl sm:text-3xl text-[#1A3021] tracking-tight block">
              Bonica Aesthetic Clinic
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-[#9E7D47] font-medium">
              Ayurvedic Skin & Hair Care · Dr. Jasla P
            </p>
            <p className="text-xs text-[#1A3021]/70 leading-relaxed max-w-sm">
              Root-cause dermatological and hair wellness through personalized Ayurvedic consultation, classical medicines, and holistic botanical protocols.
            </p>
            <p className="text-[11px] text-[#1A3021]/50 font-mono">
              WhatsApp: +91 {clinicInfo.whatsappNumber} · Phone: {clinicInfo.phoneFormatted}
            </p>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[11px] uppercase tracking-widest text-[#9E7D47] font-semibold">
              Explore
            </p>
            <ul className="space-y-2 text-xs uppercase tracking-wider text-[#1A3021]/70">
              <li>
                <a href="#about" className="hover:text-[#1A3021] transition-colors">
                  The Clinic & Doctor
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#1A3021] transition-colors">
                  Skin & Hair Therapies
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#1A3021] transition-colors">
                  Botanical Apothecary
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#1A3021] transition-colors">
                  Clinic Environment
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#1A3021] transition-colors">
                  Patient Integrity
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#1A3021] transition-colors">
                  Appointments & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Practice & Location Information (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-[11px] uppercase tracking-widest text-[#9E7D47] font-semibold">
              Clinic Practice
            </p>
            <div className="text-xs text-[#1A3021]/70 space-y-2 leading-relaxed">
              <p>
                <strong>Consultations:</strong> Monday to Saturday, by prior appointment with Dr. Jasla P.
              </p>
              <p>
                <strong>Medicines & Dispensary:</strong> Authentic Ayurvedic medicines and medicated oils dispensed directly upon clinical evaluation.
              </p>
              <p className="text-[11px] font-mono bg-[#F2ECE3] p-2 text-[#1A3021]/60">
                [Client Address: Confirmed clinic address to be inserted upon client verification]
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright Bottom Row */}
        <div className="mt-14 pt-8 border-t border-[#1A3021]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#1A3021]/60">
          <p>
            © {new Date().getFullYear()} Bonica Aesthetic Clinic. All rights reserved.
          </p>

          <p className="text-[11px] text-center md:text-right max-w-md italic">
            Medical Disclaimer: Ayurvedic treatments and products are prescribed following individual assessment by Dr. Jasla P.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#1A3021] transition-colors cursor-pointer text-xs"
            aria-label="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
