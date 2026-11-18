import React from 'react';

export const TrustIntro: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F4F0EA] border-y border-[#1A3021]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Subheading & Large Proposition Typography */}
        <div className="grid lg:grid-cols-12 gap-10 items-baseline">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] text-[#9E7D47] font-medium mb-3">
              The Bonica Ethos
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A3021] leading-tight">
              An authentic Ayurvedic approach to modern aesthetic wellness.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-[#1A3021]/80 text-base sm:text-lg leading-relaxed font-normal">
            <p className="border-l-2 border-[#9E7D47]/40 pl-6 sm:pl-8 italic font-serif text-xl sm:text-2xl text-[#1A3021] leading-relaxed">
              At Bonica Aesthetic Clinic, skin and hair concerns are evaluated not simply as cosmetic irregularities, but as signals of internal constitutional equilibrium.
            </p>

            <div className="grid md:grid-cols-2 gap-8 pt-4">
              <div>
                <h3 className="font-serif text-xl text-[#1A3021] mb-2">
                  Dermal & Follicular Physiology
                </h3>
                <p className="text-sm text-[#1A3021]/70 leading-relaxed">
                  Ayurveda views the skin (Tvacha) as a direct reflection of Rasa and Rakta Dhatus (plasma and blood tissues). Dr. Jasla P approaches skin blemishes, pigmentary shifts, and scalp thinning through systematic purification, nutrition, and targeted botanical therapy.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-[#1A3021] mb-2">
                  Medicines & Natural Products
                </h3>
                <p className="text-sm text-[#1A3021]/70 leading-relaxed">
                  Every treatment protocol uses pure Ayurvedic medicines, therapeutic herbal oils, medicated lepas (compounds), and internal classical formulations. No synthetic bleaches or aggressive chemical peels are used.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet 4-Pillar Architectural Band - Editorial split horizontal line */}
        <div className="mt-16 pt-12 border-t border-[#1A3021]/10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#9E7D47] block mb-1">
              Methodology
            </span>
            <p className="font-serif text-lg text-[#1A3021]">Prakriti Analysis</p>
            <p className="text-xs text-[#1A3021]/60 mt-1">Assessment of individual doshic constitution.</p>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#9E7D47] block mb-1">
              Therapeutics
            </span>
            <p className="font-serif text-lg text-[#1A3021]">Ayurvedic Formulations</p>
            <p className="text-xs text-[#1A3021]/60 mt-1">Prescribed classical medicines and botanical oils.</p>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#9E7D47] block mb-1">
              Specialization
            </span>
            <p className="font-serif text-lg text-[#1A3021]">Skin & Scalp Health</p>
            <p className="text-xs text-[#1A3021]/60 mt-1">Dedicated dermatological and trichological focus.</p>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#9E7D47] block mb-1">
              Consultation
            </span>
            <p className="font-serif text-lg text-[#1A3021]">Dr. Jasla P</p>
            <p className="text-xs text-[#1A3021]/60 mt-1">Personalized guidance by prior appointment.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
