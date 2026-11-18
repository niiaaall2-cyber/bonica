import React, { useState } from 'react';
import { MessageSquare, Shield, Check, MessageCircle } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export const TestimonialsSection: React.FC = () => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedbackName, setFeedbackName] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackConcern, setFeedbackConcern] = useState('Skin Care');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackName || !feedbackText) return;

    // Direct WhatsApp message formatting for submitting review to clinic
    const message = `Hello Dr. Jasla P, I would like to submit my patient feedback for Bonica Aesthetic Clinic:\n\nName: ${feedbackName}\nConcern: ${feedbackConcern}\nFeedback: ${feedbackText}`;
    const url = `https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#F4F0EA] border-t border-[#1A3021]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#9E7D47] font-medium mb-3">
              Patient Experiences
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A3021] leading-tight">
              Clinical Integrity & Feedback
            </h2>
          </div>

          <div className="max-w-md text-sm text-[#1A3021]/70 leading-relaxed border-l border-[#9E7D47]/40 pl-6">
            <p>
              In accordance with medical ethics, Bonica Aesthetic Clinic presents only genuine, verified feedback provided directly by patients undergoing therapy with Dr. Jasla P.
            </p>
          </div>
        </div>

        {/* Verified Review Placeholders (No Fake Reviews) */}
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-[#FAF8F5] p-8 border border-[#1A3021]/15 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#9E7D47]">
                    [Verified Patient Review {item}]
                  </span>
                  <Shield className="w-4 h-4 text-[#9E7D47]" />
                </div>

                <div className="h-px w-10 bg-[#9E7D47]/40 mb-6" />

                <div className="space-y-3 font-serif text-[#1A3021]/70 italic leading-relaxed text-sm">
                  <p>
                    "[Client Placeholder: Authentic testimonial text provided by verified patient of Dr. Jasla P regarding Ayurvedic skin or hair care treatment outcome.]"
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#1A3021]/10">
                <p className="font-sans text-xs font-semibold text-[#1A3021]">
                  [Patient Initials / Name]
                </p>
                <p className="text-[11px] text-[#1A3021]/60 font-mono mt-0.5">
                  [Treatment Area: Skin / Scalp Therapy]
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Notice & Patient Feedback Button */}
        <div className="mt-14 p-8 bg-[#FAF8F5] border border-[#1A3021]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h4 className="font-serif text-lg text-[#1A3021]">
              Are you a patient of Dr. Jasla P?
            </h4>
            <p className="text-xs text-[#1A3021]/70 leading-relaxed">
              We welcome honest feedback regarding your treatment journey at Bonica Aesthetic Clinic. Your review helps us uphold the highest standard of Ayurvedic care.
            </p>
          </div>

          <button
            onClick={() => {
              setSubmitted(false);
              setShowFeedbackModal(true);
            }}
            className="shrink-0 px-6 py-3 bg-[#1A3021] text-[#FAF8F5] text-xs uppercase tracking-wider hover:bg-[#264731] transition-colors cursor-pointer"
          >
            Submit Patient Review
          </button>
        </div>
      </div>

      {/* Patient Review Form Modal */}
      {showFeedbackModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A3021]/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-[#FAF8F5] p-8 border border-[#FAF8F5]/30 shadow-2xl">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#9E7D47] font-semibold">
                  Patient Portal
                </p>
                <h3 className="font-serif text-2xl text-[#1A3021] mt-1">
                  Share Your Treatment Experience
                </h3>
              </div>
              <button
                onClick={() => setShowFeedbackModal(false)}
                className="text-[#1A3021] hover:text-[#9E7D47] text-lg font-mono p-1"
              >
                ✕
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#1A3021] text-white flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl text-[#1A3021]">Thank You</h4>
                <p className="text-xs text-[#1A3021]/70 max-w-xs mx-auto">
                  Your feedback has been prepared for Dr. Jasla P. We deeply appreciate your trust in Bonica Aesthetic Clinic.
                </p>
                <button
                  onClick={() => setShowFeedbackModal(false)}
                  className="px-6 py-2.5 bg-[#1A3021] text-white text-xs uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitFeedback} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1A3021]/70 mb-1 font-medium">
                    Your Name / Initials
                  </label>
                  <input
                    type="text"
                    required
                    value={feedbackName}
                    onChange={(e) => setFeedbackName(e.target.value)}
                    placeholder="e.g. Priya M."
                    className="w-full px-3.5 py-2.5 bg-white border border-[#1A3021]/20 text-sm text-[#1A3021] focus:outline-hidden focus:border-[#1A3021]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1A3021]/70 mb-1 font-medium">
                    Treatment Category
                  </label>
                  <select
                    value={feedbackConcern}
                    onChange={(e) => setFeedbackConcern(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#1A3021]/20 text-sm text-[#1A3021] focus:outline-hidden focus:border-[#1A3021]"
                  >
                    <option value="Ayurvedic Skin Care">Ayurvedic Skin Care</option>
                    <option value="Ayurvedic Hair & Scalp Therapy">Ayurvedic Hair & Scalp Therapy</option>
                    <option value="Clinical Consultation">Clinical Consultation with Dr. Jasla P</option>
                    <option value="Apothecary Medicines">Ayurvedic Medicines & Formulations</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1A3021]/70 mb-1 font-medium">
                    Your Experience
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    placeholder="Describe your consultation, treatment progression, and experience with Dr. Jasla P..."
                    className="w-full px-3.5 py-2.5 bg-white border border-[#1A3021]/20 text-sm text-[#1A3021] focus:outline-hidden focus:border-[#1A3021]"
                  />
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#1A3021] text-white text-xs uppercase tracking-widest hover:bg-[#264731] transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Send via WhatsApp to Dr. Jasla P</span>
                  </button>
                  <p className="text-[10px] text-center text-[#1A3021]/50 italic">
                    All reviews are personally vetted by Dr. Jasla P before publishing.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
