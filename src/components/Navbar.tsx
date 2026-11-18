import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs py-3.5 border-b border-[#1A3021]/10'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="font-serif text-xl sm:text-2xl text-[#1A3021] tracking-tight hover:opacity-85 transition-opacity whitespace-nowrap"
          >
            Bonica Aesthetic Clinic
          </a>

          {/* Zone 2: 4–6 nav links, 1–2 word labels, single-line text */}
          <nav className="hidden lg:flex items-center gap-8 text-[12px] uppercase tracking-[0.18em] font-medium text-[#1A3021]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#9E7D47] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1–2 primary actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(
                'Hello Dr. Jasla P, I would like to enquire about a consultation at Bonica Aesthetic Clinic.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A3021] hover:text-[#9E7D47] p-2 transition-colors flex items-center gap-1.5 text-xs font-medium"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span className="text-[11px] tracking-wider uppercase">WhatsApp</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 bg-[#1A3021] text-[#FAF8F5] text-xs uppercase tracking-widest hover:bg-[#264731] transition-colors cursor-pointer whitespace-nowrap"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-2 bg-[#1A3021] text-[#FAF8F5] text-[11px] uppercase tracking-wider whitespace-nowrap"
            >
              Book
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#1A3021] hover:text-[#9E7D47] transition-colors focus-visible:outline-hidden"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#1A3021]/30 backdrop-blur-xs"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <div className="fixed top-0 right-0 w-full max-w-sm h-full bg-[#FAF8F5] shadow-xl p-8 pt-24 flex flex-col justify-between">
            <div className="space-y-6">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#9E7D47] font-medium">
                Clinic Navigation
              </p>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-2xl text-[#1A3021] hover:text-[#9E7D47] transition-colors py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#1A3021]/10 space-y-3">
              <div className="text-xs text-[#1A3021]/70 mb-2">
                <span className="font-serif italic block text-sm text-[#1A3021]">Dr. Jasla P</span>
                Ayurvedic Skin & Hair Care
              </div>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 bg-[#1A3021] text-[#FAF8F5] text-xs uppercase tracking-widest text-center block"
              >
                Book Consultation
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${clinicInfo.phone}`}
                  className="py-2.5 px-3 border border-[#1A3021]/20 text-[#1A3021] text-[11px] uppercase tracking-wider text-center flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Clinic
                </a>
                <a
                  href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Dr. Jasla P, I would like to book a consultation at Bonica Aesthetic Clinic.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 border border-[#25D366]/40 text-[#1A3021] text-[11px] uppercase tracking-wider text-center flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
