import React, { useState } from 'react';
import { ArrowRight, Check, Plus, Minus, MessageCircle } from 'lucide-react';
import { initialServices, ServiceItem, clinicInfo } from '../data/clinicData';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(initialServices[0].id);

  const categories = ['All', 'Skin Care', 'Hair Care', 'Consultation', 'Internal Wellness'];

  const filteredServices = activeTab === 'All'
    ? initialServices
    : initialServices.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="py-24 md:py-32 bg-[#FAF8F5] border-t border-[#1A3021]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#9E7D47] font-medium mb-3">
              Clinical Specializations
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A3021] leading-tight">
              Ayurvedic Skin & Hair Therapies
            </h2>
          </div>

          <div className="max-w-md text-sm text-[#1A3021]/70 leading-relaxed border-l border-[#9E7D47]/40 pl-6">
            <p>
              Each therapeutic protocol is formulated by Dr. Jasla P following a careful constitutional evaluation. The clinic utilizes authentic Ayurvedic preparations, medicated herbal oils, and classical therapeutic lepas.
            </p>
          </div>
        </div>

        {/* Filter Controls (Segmented clean buttons) */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-[#1A3021]/10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === category
                  ? 'bg-[#1A3021] text-[#FAF8F5]'
                  : 'text-[#1A3021]/70 hover:text-[#1A3021] hover:bg-[#F2ECE3]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Editorial Service Accordion / Directory Layout */}
        <div className="space-y-4">
          {filteredServices.map((service, index) => {
            const isExpanded = expandedId === service.id;
            return (
              <div
                key={service.id}
                className={`border transition-all duration-300 ${
                  isExpanded
                    ? 'border-[#1A3021] bg-[#F2ECE3]/40'
                    : 'border-[#1A3021]/15 bg-white hover:border-[#1A3021]/40'
                }`}
              >
                {/* Header row */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : service.id)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between text-left cursor-pointer gap-6"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start sm:items-center gap-6 md:gap-10">
                    <span className="font-mono text-xs sm:text-sm text-[#9E7D47] font-medium pt-1 sm:pt-0">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#9E7D47] block mb-1">
                        {service.category}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#1A3021] leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#1A3021]/60 mt-1 hidden sm:block">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 w-8 h-8 rounded-full border border-[#1A3021]/20 flex items-center justify-center text-[#1A3021] transition-transform duration-300">
                    {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#1A3021]/10 grid md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-7 space-y-4 text-sm text-[#1A3021]/80 leading-relaxed">
                      <p>{service.description}</p>
                      
                      <div className="pt-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#1A3021] block mb-1">
                          Ayurvedic Mechanism:
                        </span>
                        <p className="text-xs sm:text-sm text-[#1A3021]/70 italic">
                          {service.ayurvedicApproach}
                        </p>
                      </div>

                      {/* Client Note / Customization Placeholder Notice */}
                      <div className="bg-[#FAF8F5] p-3 border border-[#1A3021]/10 text-[11px] text-[#1A3021]/60">
                        <span className="font-mono font-medium text-[#9E7D47] block mb-0.5">
                          [Client Customization Note]
                        </span>
                        Specific clinical treatment names, procedural duration, and therapy packages supplied by Dr. Jasla P can be customized directly in this data slot.
                      </div>
                    </div>

                    <div className="md:col-span-5 bg-[#FAF8F5] p-6 border border-[#1A3021]/15 space-y-4">
                      <span className="text-xs uppercase tracking-wider text-[#9E7D47] font-semibold block">
                        Target Indications
                      </span>
                      <ul className="space-y-2 text-xs text-[#1A3021]/80">
                        {service.targetConcerns.map((concern, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1A3021]" />
                            <span>{concern}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4 border-t border-[#1A3021]/10 flex flex-col gap-2">
                        <button
                          onClick={() => onSelectServiceForBooking(service.title)}
                          className="w-full py-2.5 bg-[#1A3021] text-[#FAF8F5] text-xs uppercase tracking-wider hover:bg-[#264731] transition-colors text-center"
                        >
                          Book For This Treatment
                        </button>
                        <a
                          href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(
                            `Hello Dr. Jasla P, I would like to enquire about ${service.title} at Bonica Aesthetic Clinic.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2 border border-[#1A3021]/20 text-[#1A3021] text-[11px] uppercase tracking-wider text-center flex items-center justify-center gap-1.5 hover:border-[#1A3021]"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                          WhatsApp Enquiry
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Expanding Section Note for Client */}
        <div className="mt-12 text-center text-xs text-[#1A3021]/60 italic font-serif">
          * Additional bespoke clinical therapies are customized during one-on-one consultation with Dr. Jasla P.
        </div>
      </div>
    </section>
  );
};
