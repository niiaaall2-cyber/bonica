import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Calendar, Clock, Send, Check, ExternalLink } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formConcern, setFormConcern] = useState('Skin Care');
  const [formDate, setFormDate] = useState('');
  const [formNotes, setFormNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) return;

    const message = `Hello Dr. Jasla P, I am submitting a consultation enquiry via the Bonica Aesthetic Clinic website:\n\nName: ${formName}\nPhone: ${formPhone}\nConcern: ${formConcern}\nPreferred Date: ${formDate || 'Flexible'}\nNotes: ${formNotes || 'None'}`;
    const url = `https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#1A3021] text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left Column: Clinic Contact Details & Map Area (6 cols) */}
          <div className="lg:col-span-6 space-y-12">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#C4A774] font-medium mb-3">
                Appointments & Enquiries
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF8F5] leading-tight">
                Connect with Bonica Aesthetic Clinic
              </h2>
              <p className="text-sm text-[#FAF8F5]/70 mt-4 leading-relaxed max-w-lg">
                Consultations with <strong>Dr. Jasla P</strong> are conducted by prior appointment to ensure dedicated diagnostic time for every individual.
              </p>
            </div>

            {/* Structured Contact Data */}
            <div className="space-y-8">
              {/* Doctor / Clinic Lead */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#C4A774]/30 flex items-center justify-center shrink-0 bg-[#122217]">
                  <span className="font-serif italic text-sm text-[#C4A774]">Dr</span>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#C4A774] font-semibold">
                    Chief Physician
                  </h4>
                  <p className="font-serif text-xl text-[#FAF8F5] mt-1">Dr. Jasla P</p>
                  <p className="text-xs text-[#FAF8F5]/60 mt-0.5">
                    Ayurvedic Skin & Hair Care Specialist
                  </p>
                </div>
              </div>

              {/* WhatsApp direct */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#25D366]/40 flex items-center justify-center shrink-0 bg-[#122217]">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#C4A774] font-semibold">
                    Official WhatsApp Desk
                  </h4>
                  <a
                    href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(
                      'Hello Dr. Jasla P, I would like to book a consultation at Bonica Aesthetic Clinic.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-xl text-[#FAF8F5] hover:text-[#C4A774] transition-colors mt-1 block"
                  >
                    +91 {clinicInfo.whatsappNumber}
                  </a>
                  <p className="text-xs text-[#FAF8F5]/60 mt-0.5">
                    Tap to message directly for appointment slots & enquiries
                  </p>
                </div>
              </div>

              {/* Direct Call */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#C4A774]/30 flex items-center justify-center shrink-0 bg-[#122217]">
                  <Phone className="w-5 h-5 text-[#C4A774]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#C4A774] font-semibold">
                    Telephone
                  </h4>
                  <a
                    href={`tel:${clinicInfo.phone}`}
                    className="font-serif text-xl text-[#FAF8F5] hover:text-[#C4A774] transition-colors mt-1 block"
                  >
                    {clinicInfo.phoneFormatted}
                  </a>
                  <p className="text-xs text-[#FAF8F5]/60 mt-0.5">
                    Direct clinic line for patient queries
                  </p>
                </div>
              </div>

              {/* Address / Location Placeholder */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#C4A774]/30 flex items-center justify-center shrink-0 bg-[#122217]">
                  <MapPin className="w-5 h-5 text-[#C4A774]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#C4A774] font-semibold">
                    Clinic Address
                  </h4>
                  <p className="font-serif text-lg text-[#FAF8F5] mt-1">
                    Bonica Aesthetic Clinic
                  </p>
                  <p className="text-xs text-[#FAF8F5]/70 mt-1 max-w-sm font-mono bg-[#122217] p-2 border border-[#FAF8F5]/10">
                    [CLIENT: Confirmed clinic street address, landmark, pin code & city to be provided by client]
                  </p>
                </div>
              </div>
            </div>

            {/* Quick CTAs Bar */}
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={`tel:${clinicInfo.phone}`}
                className="px-6 py-3.5 bg-[#FAF8F5] text-[#1A3021] text-xs uppercase tracking-widest hover:bg-[#E6DED2] transition-colors font-medium flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Dr. Jasla P, I am ready to book my consultation at Bonica Aesthetic Clinic.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-[#25D366] text-[#FAF8F5] text-xs uppercase tracking-widest hover:bg-[#25D366]/10 transition-colors font-medium flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp 9847291010</span>
              </a>
            </div>

            {/* Google Maps Interactive Card & Embed Placeholder */}
            <div className="border border-[#FAF8F5]/15 bg-[#122217] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C4A774]" />
                  <span className="text-xs uppercase tracking-wider text-[#C4A774] font-semibold">
                    Google Maps Integration
                  </span>
                </div>
                <a
                  href={clinicInfo.googleMapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#FAF8F5]/70 hover:text-white flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Canvas / Embed Frame */}
              <div className="relative aspect-[16/9] w-full bg-[#1A3021] border border-[#FAF8F5]/10 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                {/* Stylized Map Vector Geometry */}
                <svg
                  className="w-16 h-16 text-[#C4A774]/40 stroke-current fill-none stroke-[1] mb-2"
                  viewBox="0 0 24 24"
                >
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                  <line x1="8" y1="2" x2="8" y2="18" />
                  <line x1="16" y1="6" x2="16" y2="22" />
                  <circle cx="12" cy="11" r="3" fill="#C4A774" opacity="0.8" />
                </svg>
                <p className="font-serif text-base text-[#FAF8F5]">
                  Bonica Aesthetic Clinic Map Location
                </p>
                <p className="text-[11px] text-[#FAF8F5]/60 mt-1 max-w-xs font-mono">
                  [Google Maps Embed frame ready: Will be synced with Dr. Jasla P's confirmed Google Business profile location]
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High-Conversion Appointment Form (6 cols) */}
          <div className="lg:col-span-6 bg-[#FAF8F5] text-[#1A3021] p-8 sm:p-12 shadow-2xl">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[#9E7D47] font-medium mb-2">
                Consultation Request
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1A3021]">
                Book an Appointment with Dr. Jasla P
              </h3>
              <p className="text-xs text-[#1A3021]/70 mt-2">
                Submit your details below. Your request will be directly dispatched to our clinic desk for immediate confirmation.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#1A3021] text-white flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl text-[#1A3021]">
                  Appointment Request Sent
                </h4>
                <p className="text-sm text-[#1A3021]/70 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{formName}</strong>. Your consultation details have been forwarded to Dr. Jasla P's WhatsApp desk at <strong>9847291010</strong>. We will confirm your preferred timing shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#1A3021] text-white text-xs uppercase tracking-wider"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1A3021]/70 mb-1.5 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Ananya Nair"
                    className="w-full px-4 py-3 bg-white border border-[#1A3021]/20 text-sm text-[#1A3021] focus:outline-hidden focus:border-[#1A3021]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1A3021]/70 mb-1.5 font-medium">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="e.g. 9847291010"
                    className="w-full px-4 py-3 bg-white border border-[#1A3021]/20 text-sm text-[#1A3021] focus:outline-hidden focus:border-[#1A3021]"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#1A3021]/70 mb-1.5 font-medium">
                      Primary Concern
                    </label>
                    <select
                      value={formConcern}
                      onChange={(e) => setFormConcern(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#1A3021]/20 text-sm text-[#1A3021] focus:outline-hidden focus:border-[#1A3021]"
                    >
                      <option value="Skin Care Therapy">Ayurvedic Skin Care</option>
                      <option value="Hair & Scalp Restoration">Ayurvedic Hair & Scalp</option>
                      <option value="Prakriti & Dosha Consultation">Clinical Consultation</option>
                      <option value="Classical Medicines & Products">Apothecary Medicines</option>
                      <option value="General Aesthetic Enquiry">General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#1A3021]/70 mb-1.5 font-medium">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formDate}
                      onChange={(e) => setFormDate(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#1A3021]/20 text-sm text-[#1A3021] focus:outline-hidden focus:border-[#1A3021]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1A3021]/70 mb-1.5 font-medium">
                    Brief Notes / Concerns (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formNotes}
                    onChange={(e) => setFormNotes(e.target.value)}
                    placeholder="Mention specific skin concerns, hair issues, or questions for Dr. Jasla P..."
                    className="w-full px-4 py-3 bg-white border border-[#1A3021]/20 text-sm text-[#1A3021] focus:outline-hidden focus:border-[#1A3021]"
                  />
                </div>

                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#1A3021] text-[#FAF8F5] text-xs uppercase tracking-widest hover:bg-[#264731] transition-colors flex items-center justify-center gap-2 cursor-pointer font-medium"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Appointment Request to WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-center text-[#1A3021]/60">
                    Your request connects directly to clinic WhatsApp: <strong>9847291010</strong>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
