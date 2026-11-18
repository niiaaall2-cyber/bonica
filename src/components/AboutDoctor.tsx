import React from 'react';
import { MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';
import { EditorialVisual } from './EditorialVisual';

interface AboutProps {
  onOpenBooking: () => void;
}

export const AboutDoctor: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column: Editorial 2-photo offset composition (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Main Doctor Editorial Frame */}
              <div className="relative z-10 w-full max-w-md mx-auto">
                <EditorialVisual
                  type="doctor"
                  aspect="aspect-[3/4]"
                  clientPlaceholderNote="[Client Photo: Dr. Jasla P Professional Portrait / In-Clinic]"
                  caption="Dr. Jasla P — Practicing Ayurvedic Physician & Aesthetic Practitioner"
                  className="shadow-xl"
                />
              </div>

              {/* Offset Secondary Architectural Frame */}
              <div className="hidden sm:block absolute -bottom-10 -right-8 w-48 h-48 z-20 shadow-lg border-2 border-[#FAF8F5]">
                <EditorialVisual
                  type="apothecary"
                  aspect="aspect-[1/1]"
                  clientPlaceholderNote="[Client Photo: Clinic Apothecary]"
                />
              </div>

              {/* Decorative line motif */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t border-l border-[#9E7D47]/40 pointer-events-none" />
            </div>
          </div>

          {/* Editorial Content Column (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#9E7D47] font-medium mb-3">
                The Physician & The Clinic
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A3021] leading-[1.15]">
                Rooted in Classical Tradition. <br />
                <span className="italic font-light">Dedicated to Patient Well-being.</span>
              </h2>
            </div>

            <div className="space-y-6 text-[#1A3021]/80 text-base leading-relaxed">
              <p>
                Bonica Aesthetic Clinic is founded on the fundamental principle that skin and hair health are intrinsically linked to internal balance, dietary harmony, and constitutional vitality. Under the leadership of <strong>Dr. Jasla P</strong>, the clinic provides individualized consultations and authentic Ayurvedic therapies.
              </p>

              <p>
                Rather than treating aesthetic concerns with temporary suppressive remedies, Dr. Jasla P evaluates each patient's unique constitution (Prakriti), identifying the specific doshic imbalances (Vata, Pitta, or Kapha) influencing the skin barrier or scalp follicles.
              </p>

              {/* Professional Credentials & Experience Placeholder Box (Clearly marked) */}
              <div className="p-6 bg-[#F4F0EA] border border-[#1A3021]/15 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest text-[#9E7D47] font-semibold">
                    Client Information Placeholder
                  </span>
                  <span className="text-[10px] text-[#1A3021]/50 italic">To be verified by client</span>
                </div>
                <div className="text-xs text-[#1A3021]/75 space-y-1.5 font-mono">
                  <p>• <strong>Doctor Name:</strong> Dr. Jasla P</p>
                  <p>• <strong>Qualifications:</strong> [BAMS / Clinical Degrees to be inserted upon client confirmation]</p>
                  <p>• <strong>Medical Council Reg. No:</strong> [Registration number to be provided by Dr. Jasla P]</p>
                  <p>• <strong>Clinical Focus:</strong> Ayurvedic Dermatology, Trichology, Classical Medicines & Lepa Therapy</p>
                  <p>• <strong>Clinic Location:</strong> [Exact street address & city to be provided by client]</p>
                </div>
                <p className="text-[11px] text-[#1A3021]/60 italic font-sans pt-1">
                  * Bonica Aesthetic Clinic adheres strictly to verifiable clinical qualifications and authentic Ayurvedic pharmacopoeia.
                </p>
              </div>

              <p>
                Every treatment plan formulated at Bonica is tailored specifically to the patient, pairing in-clinic therapies with carefully selected classical medicines and home care rituals.
              </p>
            </div>

            {/* Direct Connect Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 bg-[#1A3021] text-[#FAF8F5] text-xs uppercase tracking-widest hover:bg-[#264731] transition-colors cursor-pointer"
              >
                Schedule Consultation
              </button>

              <a
                href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Dr. Jasla P, I would like to enquire about your clinic consultation.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-[#1A3021]/30 text-[#1A3021] text-xs uppercase tracking-widest hover:border-[#1A3021] transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
