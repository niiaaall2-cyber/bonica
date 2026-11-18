import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { initialProducts, clinicInfo } from '../data/clinicData';

interface ProductsSectionProps {
  onSelectProductForEnquiry: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onSelectProductForEnquiry }) => {
  return (
    <section id="products" className="py-24 md:py-32 bg-[#F2ECE3] border-t border-[#1A3021]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header with Editorial Typography */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#9E7D47] font-medium mb-3">
              Botanical Dispensary
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A3021] leading-tight">
              Ayurvedic Medicines & Products
            </h2>
          </div>

          <div className="max-w-md text-sm text-[#1A3021]/70 leading-relaxed border-l border-[#9E7D47]/40 pl-6">
            <p>
              Bonica Aesthetic Clinic dispenses authentic Ayurvedic medicines, therapeutic hair oils, and bespoke herbal preparations prescribed in alignment with classical pharmacopoeia.
            </p>
          </div>
        </div>

        {/* Product Cards Grid: Asymmetric, High-end Editorial Aesthetic */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initialProducts.map((product, idx) => (
            <div
              key={product.id}
              className="bg-[#FAF8F5] p-8 border border-[#1A3021]/10 flex flex-col justify-between hover:border-[#1A3021]/40 transition-all duration-300 group"
            >
              <div>
                {/* Minimalist Apothecary Visual Icon */}
                <div className="w-12 h-12 mb-6 border border-[#9E7D47]/30 flex items-center justify-center bg-white group-hover:bg-[#1A3021] transition-colors">
                  <span className="font-serif italic text-lg text-[#9E7D47] group-hover:text-[#FAF8F5] transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#9E7D47] font-medium mb-2">
                  <span>{product.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{product.classification}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#1A3021] leading-snug mb-3">
                  {product.name}
                </h3>

                <p className="text-xs text-[#1A3021]/75 leading-relaxed mb-4">
                  {product.shortDescription}
                </p>

                <div className="text-[11px] text-[#1A3021]/60 italic mb-4">
                  {product.usageContext}
                </div>

                {/* Client catalog placeholder note */}
                {product.placeholderNotice && (
                  <div className="bg-[#F2ECE3] px-2.5 py-1.5 text-[10px] text-[#1A3021]/60 font-mono mb-4">
                    {product.placeholderNotice}
                  </div>
                )}
              </div>

              <div className="pt-6 border-t border-[#1A3021]/10 space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-[#1A3021]/60 block font-medium">
                  {product.availability}
                </span>

                <button
                  onClick={() => onSelectProductForEnquiry(product.name)}
                  className="w-full py-2.5 bg-[#1A3021] text-[#FAF8F5] text-xs uppercase tracking-wider hover:bg-[#264731] transition-colors text-center cursor-pointer"
                >
                  Enquire via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Authentic Guidance Notice */}
        <div className="mt-14 p-6 bg-[#FAF8F5] border border-[#1A3021]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-5 h-5 text-[#9E7D47] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-base text-[#1A3021]">
                Prescription & Formulation Guidelines
              </h4>
              <p className="text-xs text-[#1A3021]/70 mt-0.5">
                In adherence to authentic Ayurvedic practice, potent internal medicines and therapeutic lepas are dispensed following individual clinical assessment by Dr. Jasla P.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(
              'Hello Dr. Jasla P, I would like to enquire about Ayurvedic products and medicines available at Bonica Aesthetic Clinic.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 border border-[#1A3021] text-[#1A3021] text-xs uppercase tracking-wider hover:bg-[#1A3021] hover:text-[#FAF8F5] transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Product Enquiries</span>
          </a>
        </div>
      </div>
    </section>
  );
};
