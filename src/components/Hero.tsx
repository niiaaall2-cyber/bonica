import React from 'react';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';
import { EditorialVisual } from './EditorialVisual';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-36 overflow-hidden bg-[#FAF8F5]">
      {/* Background Subtle Hairline Geometry */}
      <div className="absolute top-0 right-1/3 w-px h-full bg-[#1A3021]/5 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-[#1A3021]/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Editorial Text Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Context kicker: clean unboxed typography, zero pills */}
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#9E7D47] font-medium mb-6">
              <span>Dr. Jasla P</span>
              <span aria-hidden="true" className="text-[#1A3021]/30">·</span>
              <span>Ayurvedic Skin & Hair Care</span>
            </div>

            {/* Main Headline: balanced, high-character serif */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1A3021] leading-[1.08] tracking-tight mb-8 text-balance">
              The Discipline of <br />
              <span className="italic font-light text-[#1A3021]/90">Ayurvedic Dermatology</span> <br />
              & Scalp Restoration.
            </h1>

            {/* Short Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#1A3021]/75 leading-relaxed max-w-xl mb-10 font-normal">
              Bonica Aesthetic Clinic combines traditional Ayurvedic diagnostics with authentic botanical formulations to treat chronic dermatological and follicular conditions at their cellular root.
            </p>

            {/* Dual Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 bg-[#1A3021] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#264731] transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-xs"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Dr. Jasla P, I am visiting the Bonica Aesthetic Clinic website and would like to enquire about an appointment.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-[#1A3021]/30 text-[#1A3021] text-xs uppercase tracking-[0.18em] font-medium hover:border-[#1A3021] hover:bg-[#FAF8F5] transition-all flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Quiet Trust Markers */}
            <div className="mt-14 pt-8 border-t border-[#1A3021]/10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-[#1A3021]/60">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9E7D47]" />
                <span>Authentic Ayurvedic Medicines</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9E7D47]" />
                <span>One-on-One Physician Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9E7D47]" />
                <span>WhatsApp Desk: 9847291010</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Asymmetrical Frame Offset */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Hairline Box */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-[#9E7D47]/30 pointer-events-none hidden sm:block" />

              {/* Main Visual Asset */}
              <EditorialVisual
                type="hero"
                aspect="aspect-[4/5]"
                clientPlaceholderNote="[Client Photo: Clinic Sanctuary & Botanical Environment]"
                caption="Bonica Aesthetic Clinic — Calm, authentic space dedicated to botanical skin & hair therapies."
                className="shadow-lg"
              />

              {/* Floating Editorial Quote / Badge (Clean, non-pill) */}
              <div className="mt-4 sm:absolute sm:-bottom-6 sm:-left-6 sm:max-w-xs bg-[#FAF8F5] p-5 border border-[#1A3021]/15 shadow-md">
                <p className="font-serif italic text-sm text-[#1A3021] leading-snug">
                  "True dermal healing does not mask symptoms. It harmonizes the doshas and purifies the tissue from within."
                </p>
                <p className="text-[10px] uppercase tracking-widest text-[#9E7D47] mt-2 font-medium">
                  Dr. Jasla P · Clinical Philosophy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
