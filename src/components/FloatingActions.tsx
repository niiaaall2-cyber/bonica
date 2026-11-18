import React from 'react';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-4 inset-x-4 sm:bottom-6 sm:right-6 sm:left-auto z-30 lg:hidden"
    >
      <div className="bg-[#1A3021] text-white p-1.5 shadow-2xl border border-[#FAF8F5]/20 flex items-center justify-between gap-1 max-w-sm mx-auto">
        <a
          href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(
            'Hello Dr. Jasla P, I would like to enquire about an appointment at Bonica Aesthetic Clinic.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 bg-[#25D366] text-white text-[11px] uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 transition-transform active:scale-95 whitespace-nowrap"
          aria-label="WhatsApp clinic"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>

        <a
          href={`tel:${clinicInfo.phone}`}
          className="py-2.5 px-3 bg-[#122217] text-[#FAF8F5] text-[11px] uppercase tracking-wider font-medium flex items-center justify-center gap-1.5 transition-colors hover:bg-[#264731]"
          aria-label="Call clinic"
        >
          <Phone className="w-3.5 h-3.5 text-[#C4A774]" />
          <span>Call</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="py-2.5 px-3 bg-[#FAF8F5] text-[#1A3021] text-[11px] uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 transition-colors hover:bg-[#E6DED2] cursor-pointer whitespace-nowrap"
          aria-label="Book appointment"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book</span>
        </button>
      </div>
    </aside>
  );
};
