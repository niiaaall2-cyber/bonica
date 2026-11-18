import React from 'react';

interface EditorialVisualProps {
  type: 'hero' | 'doctor' | 'apothecary' | 'treatment' | 'consultation' | 'leaf' | 'reception';
  caption?: string;
  clientPlaceholderNote?: string;
  className?: string;
  aspect?: string;
}

export const EditorialVisual: React.FC<EditorialVisualProps> = ({
  type,
  caption,
  clientPlaceholderNote,
  className = '',
  aspect = 'aspect-[4/3]'
}) => {
  return (
    <div
      className={`relative w-full ${aspect} overflow-hidden bg-[#F2ECE3] border border-[#1A3021]/10 group transition-all duration-700 ${className}`}
    >
      {/* Background Soft Atmospheric Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F5] via-[#F4EFE7] to-[#EAE2D5] opacity-90" />

      {/* Subtle Editorial Grain / Texture Lines */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1A3021 1px, transparent 1px)`,
          backgroundSize: '16px 16px',
        }}
      />

      {/* Atmospheric Motif depending on type */}
      <div className="absolute inset-0 flex items-center justify-center p-8 select-none">
        {type === 'hero' && (
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Elegant Botanical Architectural Composition */}
            <svg
              className="w-48 h-48 md:w-64 md:h-64 text-[#1A3021]/20 stroke-current fill-none stroke-[0.8]"
              viewBox="0 0 200 200"
            >
              {/* Concentric botanical arches & geometry */}
              <circle cx="100" cy="100" r="85" strokeDasharray="3 3" opacity="0.6" />
              <circle cx="100" cy="100" r="65" />
              <path d="M100 20 C100 65 140 100 140 140 C140 162 122 180 100 180 C78 180 60 162 60 140 C60 100 100 65 100 20 Z" />
              <path d="M100 50 V170" strokeWidth="0.6" opacity="0.7" />
              <path d="M100 90 Q120 80 125 70" strokeWidth="0.6" />
              <path d="M100 110 Q80 100 75 90" strokeWidth="0.6" />
              <path d="M100 130 Q120 120 125 110" strokeWidth="0.6" />
              <circle cx="100" cy="100" r="4" fill="#9E7D47" opacity="0.5" />
            </svg>
            <div className="mt-4 text-center">
              <span className="font-serif italic text-lg text-[#1A3021]/80 tracking-wide block">
                Sanctuary of Natural Dermatology
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E7D47] mt-1 block">
                Ayurvedic Botanical Science
              </span>
            </div>
          </div>
        )}

        {type === 'doctor' && (
          <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-[#9E7D47]/40 flex items-center justify-center bg-[#FAF8F5]/80 mb-4 shadow-sm">
              <svg
                className="w-12 h-12 md:w-16 md:h-16 text-[#1A3021]/40 stroke-current fill-none stroke-[1]"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
                <path d="M12 11v3" strokeWidth="1.2" stroke="#9E7D47" />
                <path d="M10.5 12.5h3" strokeWidth="1.2" stroke="#9E7D47" />
              </svg>
            </div>
            <p className="font-serif text-2xl text-[#1A3021] tracking-tight">Dr. Jasla P</p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#9E7D47] mt-1">
              Ayurvedic Skin & Hair Specialist
            </p>
            <div className="mt-4 w-12 h-px bg-[#9E7D47]/40 mx-auto" />
            <span className="text-xs text-[#1A3021]/60 italic mt-3 max-w-xs font-serif">
              Personalized constitutional diagnosis & classical botanical medicine
            </span>
          </div>
        )}

        {type === 'apothecary' && (
          <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
            <svg
              className="w-24 h-24 text-[#1A3021]/25 stroke-current fill-none stroke-[0.9] mb-3"
              viewBox="0 0 100 100"
            >
              <rect x="35" y="40" width="30" height="48" rx="3" />
              <path d="M42 40 V30 H58 V40" />
              <line x1="38" y1="26" x2="62" y2="26" strokeWidth="1.5" />
              <path d="M50 50 C46 54 46 62 50 66 C54 62 54 54 50 50 Z" fill="#9E7D47" opacity="0.3" />
              <path d="M20 70 Q30 55 40 70" opacity="0.4" />
              <path d="M60 70 Q70 55 80 70" opacity="0.4" />
            </svg>
            <p className="font-serif text-xl text-[#1A3021]">Ayurvedic Formulations</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#9E7D47] mt-1">
              Classical Medicated Oils & Lepas
            </p>
          </div>
        )}

        {type === 'treatment' && (
          <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
            <svg
              className="w-20 h-20 text-[#1A3021]/25 stroke-current fill-none stroke-[0.9] mb-3"
              viewBox="0 0 100 100"
            >
              <ellipse cx="50" cy="50" rx="36" ry="18" />
              <ellipse cx="50" cy="50" rx="24" ry="12" strokeDasharray="2 2" />
              <path d="M50 20 L50 45" stroke="#9E7D47" strokeWidth="1.2" />
              <circle cx="50" cy="50" r="3" fill="#9E7D47" opacity="0.5" />
            </svg>
            <p className="font-serif text-xl text-[#1A3021]">Therapeutic Protocols</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#9E7D47] mt-1">
              Gentle, Root-Cause Dermal Care
            </p>
          </div>
        )}

        {type === 'consultation' && (
          <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
            <svg
              className="w-20 h-20 text-[#1A3021]/25 stroke-current fill-none stroke-[0.9] mb-3"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="34" />
              <path d="M30 50 H70 M50 30 V70" strokeWidth="0.8" />
              <circle cx="50" cy="50" r="16" strokeDasharray="3 3" />
            </svg>
            <p className="font-serif text-xl text-[#1A3021]">Prakriti Pariksha</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#9E7D47] mt-1">
              Constitutional Diagnostics
            </p>
          </div>
        )}

        {(type === 'leaf' || type === 'reception') && (
          <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
            <svg
              className="w-20 h-20 text-[#1A3021]/25 stroke-current fill-none stroke-[0.9] mb-3"
              viewBox="0 0 100 100"
            >
              <path d="M50 15 C65 35 75 60 50 85 C25 60 35 35 50 15 Z" />
              <path d="M50 25 V80" strokeWidth="0.7" />
              <path d="M50 40 Q62 45 60 52" strokeWidth="0.7" />
              <path d="M50 55 Q38 60 40 67" strokeWidth="0.7" />
            </svg>
            <p className="font-serif text-xl text-[#1A3021]">Bonica Clinic Space</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#9E7D47] mt-1">
              Natural Light & Quiet Rest
            </p>
          </div>
        )}
      </div>

      {/* Client Placeholder Tag - Clear & Professional */}
      {clientPlaceholderNote && (
        <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-xs px-2.5 py-1 border border-[#1A3021]/15 text-[10px] font-sans tracking-wide text-[#1A3021]/70">
          {clientPlaceholderNote}
        </div>
      )}

      {/* Caption bar at bottom if supplied */}
      {caption && (
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1A3021]/90 via-[#1A3021]/50 to-transparent p-4 text-white">
          <p className="text-xs font-serif italic text-white/90">{caption}</p>
        </div>
      )}
    </div>
  );
};
