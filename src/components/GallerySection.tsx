import React, { useState } from 'react';
import { Maximize2, X, Image as ImageIcon } from 'lucide-react';
import { galleryItems, GalleryItem } from '../data/clinicData';
import { EditorialVisual } from './EditorialVisual';

export const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const visualMapping: Record<string, 'hero' | 'doctor' | 'apothecary' | 'treatment' | 'consultation' | 'reception'> = {
    g1: 'consultation',
    g2: 'apothecary',
    g3: 'treatment',
    g4: 'apothecary',
    g5: 'doctor',
    g6: 'reception',
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#FAF8F5] border-t border-[#1A3021]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#9E7D47] font-medium mb-3">
              Atmosphere & Practice
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A3021] leading-tight">
              The Clinic Environment
            </h2>
          </div>

          <div className="max-w-md text-sm text-[#1A3021]/70 leading-relaxed border-l border-[#9E7D47]/40 pl-6">
            <p>
              An editorial glimpse into our consultation spaces, traditional treatment environments, and botanical formulations.
            </p>
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Card 1: 7 cols */}
          <div
            onClick={() => setSelectedItem(galleryItems[0])}
            className="md:col-span-7 cursor-pointer group"
          >
            <EditorialVisual
              type={visualMapping[galleryItems[0].id] || 'consultation'}
              aspect="aspect-[16/10]"
              clientPlaceholderNote={galleryItems[0].placeholderLabel}
              caption={galleryItems[0].caption}
              className="shadow-xs group-hover:border-[#1A3021]/40"
            />
            <div className="mt-3 flex items-center justify-between">
              <span className="font-serif text-lg text-[#1A3021]">
                {galleryItems[0].title}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#9E7D47]">
                {galleryItems[0].category}
              </span>
            </div>
          </div>

          {/* Card 2: 5 cols */}
          <div
            onClick={() => setSelectedItem(galleryItems[1])}
            className="md:col-span-5 cursor-pointer group"
          >
            <EditorialVisual
              type={visualMapping[galleryItems[1].id] || 'apothecary'}
              aspect="aspect-[4/5]"
              clientPlaceholderNote={galleryItems[1].placeholderLabel}
              caption={galleryItems[1].caption}
              className="shadow-xs group-hover:border-[#1A3021]/40"
            />
            <div className="mt-3 flex items-center justify-between">
              <span className="font-serif text-lg text-[#1A3021]">
                {galleryItems[1].title}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#9E7D47]">
                {galleryItems[1].category}
              </span>
            </div>
          </div>

          {/* Card 3: 4 cols */}
          <div
            onClick={() => setSelectedItem(galleryItems[2])}
            className="md:col-span-4 cursor-pointer group"
          >
            <EditorialVisual
              type={visualMapping[galleryItems[2].id] || 'treatment'}
              aspect="aspect-[1/1]"
              clientPlaceholderNote={galleryItems[2].placeholderLabel}
              caption={galleryItems[2].caption}
              className="shadow-xs group-hover:border-[#1A3021]/40"
            />
            <div className="mt-3 flex items-center justify-between">
              <span className="font-serif text-lg text-[#1A3021]">
                {galleryItems[2].title}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#9E7D47]">
                {galleryItems[2].category}
              </span>
            </div>
          </div>

          {/* Card 4: 4 cols */}
          <div
            onClick={() => setSelectedItem(galleryItems[3])}
            className="md:col-span-4 cursor-pointer group"
          >
            <EditorialVisual
              type={visualMapping[galleryItems[3].id] || 'apothecary'}
              aspect="aspect-[1/1]"
              clientPlaceholderNote={galleryItems[3].placeholderLabel}
              caption={galleryItems[3].caption}
              className="shadow-xs group-hover:border-[#1A3021]/40"
            />
            <div className="mt-3 flex items-center justify-between">
              <span className="font-serif text-lg text-[#1A3021]">
                {galleryItems[3].title}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#9E7D47]">
                {galleryItems[3].category}
              </span>
            </div>
          </div>

          {/* Card 5: 4 cols */}
          <div
            onClick={() => setSelectedItem(galleryItems[4])}
            className="md:col-span-4 cursor-pointer group"
          >
            <EditorialVisual
              type={visualMapping[galleryItems[4].id] || 'doctor'}
              aspect="aspect-[1/1]"
              clientPlaceholderNote={galleryItems[4].placeholderLabel}
              caption={galleryItems[4].caption}
              className="shadow-xs group-hover:border-[#1A3021]/40"
            />
            <div className="mt-3 flex items-center justify-between">
              <span className="font-serif text-lg text-[#1A3021]">
                {galleryItems[4].title}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#9E7D47]">
                {galleryItems[4].category}
              </span>
            </div>
          </div>
        </div>

        {/* Client Gallery Photo Guideline */}
        <div className="mt-12 p-5 bg-[#F2ECE3] border border-[#1A3021]/10 text-xs text-[#1A3021]/75 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ImageIcon className="w-4 h-4 text-[#9E7D47] shrink-0" />
            <span>
              <strong>Client Photography Guide:</strong> High-resolution photos of Dr. Jasla P, clinic interiors, treatment rooms, and apothecary products will be displayed here.
            </span>
          </div>
          <span className="text-[10px] uppercase font-mono tracking-wider text-[#9E7D47] shrink-0">
            Slots Configured: 6 Views
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1A3021]/80 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl bg-[#FAF8F5] p-6 sm:p-8 shadow-2xl border border-[#FAF8F5]/20">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 text-[#1A3021] hover:text-[#9E7D47] transition-colors cursor-pointer"
              aria-label="Close image modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-4">
              <span className="text-[10px] uppercase tracking-widest text-[#9E7D47] font-semibold">
                {selectedItem.category}
              </span>
              <h3 className="font-serif text-2xl text-[#1A3021] mt-1">
                {selectedItem.title}
              </h3>
            </div>

            <EditorialVisual
              type={visualMapping[selectedItem.id] || 'hero'}
              aspect="aspect-[16/10]"
              clientPlaceholderNote={selectedItem.placeholderLabel}
              className="mb-4"
            />

            <p className="text-sm text-[#1A3021]/80 leading-relaxed font-serif italic">
              {selectedItem.caption}
            </p>

            <div className="mt-4 pt-4 border-t border-[#1A3021]/10 flex justify-between items-center text-xs text-[#1A3021]/60 font-mono">
              <span>{selectedItem.placeholderLabel}</span>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-xs uppercase tracking-wider text-[#1A3021] hover:underline"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
