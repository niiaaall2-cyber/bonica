import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Phone, Calendar, Clock, Send, Check } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [selectedService, setSelectedService] = useState(
    preselectedService || 'Ayurvedic Skin Care Therapy'
  );
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning');
  const [patientNotes, setPatientNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setIsSuccess(false);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientPhone) return;

    const message = `Hello Dr. Jasla P, I would like to request an appointment at Bonica Aesthetic Clinic:\n\n• Name: ${patientName}\n• Phone: ${patientPhone}\n• Concern / Treatment: ${selectedService}\n• Preferred Date: ${preferredDate || 'Flexible'}\n• Preferred Time: ${preferredTime}\n• Notes: ${patientNotes || 'None'}`;
    const url = `https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1A3021]/80 backdrop-blur-xs">
      <div
        className="relative w-full max-w-xl bg-[#FAF8F5] p-6 sm:p-10 shadow-2xl border border-[#FAF8F5]/30 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#1A3021] hover:text-[#9E7D47] transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#1A3021] text-white flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <p className="text-xs uppercase tracking-widest text-[#9E7D47] font-semibold">
              Request Initiated
            </p>
            <h3 className="font-serif text-3xl text-[#1A3021]">
              Consultation Dispatched
            </h3>
            <p className="text-sm text-[#1A3021]/75 max-w-md mx-auto leading-relaxed">
              Your appointment request has been directed to Dr. Jasla P's clinic WhatsApp at <strong>9847291010</strong>. Our clinic team will verify the schedule and confirm your consultation.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={onClose}
                className="px-6 py-3 bg-[#1A3021] text-white text-xs uppercase tracking-widest hover:bg-[#264731] transition-colors"
              >
                Return to Clinic Website
              </button>
              <a
                href={`tel:${clinicInfo.phone}`}
                className="px-6 py-3 border border-[#1A3021]/20 text-[#1A3021] text-xs uppercase tracking-widest flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Clinic Now</span>
              </a>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#9E7D47] font-medium mb-1">
                <span>Bonica Aesthetic Clinic</span>
                <span aria-hidden="true">·</span>
                <span>Dr. Jasla P</span>
              </div>
              <h3 id="modal-headline" className="font-serif text-2xl sm:text-3xl text-[#1A3021]">
                Schedule Your Ayurvedic Consultation
              </h3>
              <p className="text-xs text-[#1A3021]/70 mt-1">
                Appointments are scheduled with Dr. Jasla P for dedicated skin, scalp, or constitutional evaluation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1A3021]/70 mb-1 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="e.g. Meera Krishnan"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#1A3021]/20 text-sm text-[#1A3021] focus:outline-hidden focus:border-[#1A3021]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1A3021]/70 mb-1 font-medium">
                  WhatsApp / Contact Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  placeholder="e.g. 9847291010"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#1A3021]/20 text-sm text-[#1A3021] focus:outline-hidden focus:border-[#1A3021]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1A3021]/70 mb-1 font-medium">
                  Consultation Focus / Treatment Area
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#1A3021]/20 text-sm text-[#1A3021] focus:outline-hidden focus:border-[#1A3021]"
                >
                  <option value="Ayurvedic Skin Care Therapy">Ayurvedic Skin Care & Complexion Therapy</option>
                  <option value="Trichology & Scalp Restoration">Trichology & Scalp Restoration (Hair Care)</option>
                  <option value="Clinical Prakriti Consultation">In-Depth Clinical Prakriti Consultation</option>
                  <option value="Ayurvedic Medicines & Formulations">Classical Ayurvedic Medicines & Products</option>
                  <option value="General Dermatological Consultation">General Consultation with Dr. Jasla P</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1A3021]/70 mb-1 font-medium">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#1A3021]/20 text-sm text-[#1A3021] focus:outline-hidden focus:border-[#1A3021]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1A3021]/70 mb-1 font-medium">
                    Time Preference
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#1A3021]/20 text-sm text-[#1A3021] focus:outline-hidden focus:border-[#1A3021]"
                  >
                    <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                    <option value="Afternoon (2:00 PM – 5:00 PM)">Afternoon (2:00 PM – 5:00 PM)</option>
                    <option value="Evening (5:00 PM – 7:00 PM)">Evening (5:00 PM – 7:00 PM)</option>
                    <option value="First Available Slot">First Available Slot</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1A3021]/70 mb-1 font-medium">
                  Additional Details or Prior Treatments (Optional)
                </label>
                <textarea
                  rows={2}
                  value={patientNotes}
                  onChange={(e) => setPatientNotes(e.target.value)}
                  placeholder="Share any ongoing medications, scalp or skin symptoms..."
                  className="w-full px-3.5 py-2.5 bg-white border border-[#1A3021]/20 text-sm text-[#1A3021] focus:outline-hidden focus:border-[#1A3021]"
                />
              </div>

              <div className="pt-3 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1A3021] text-[#FAF8F5] text-xs uppercase tracking-widest hover:bg-[#264731] transition-colors flex items-center justify-center gap-2 cursor-pointer font-medium"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Send Request to WhatsApp (9847291010)</span>
                </button>

                <div className="flex items-center justify-between text-[11px] text-[#1A3021]/60 pt-1">
                  <span>Need urgent assistance?</span>
                  <a
                    href={`tel:${clinicInfo.phone}`}
                    className="underline text-[#1A3021] font-semibold flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    Call {clinicInfo.phoneFormatted}
                  </a>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
