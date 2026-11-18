import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { clinic, treatments, whatsappLink } from '../data/clinicData';
import { Arrow, Button, WhatsAppIcon, ease } from './ui';

const topics = [...treatments.map((t) => t.title), 'Not sure yet'];
const times = ['Morning', 'Afternoon', 'Evening', 'Any time'];

const field =
  'w-full rounded-xl border border-ink/12 bg-white px-4 py-3.5 text-[15px] text-ink placeholder:text-ink/35 transition-colors focus:border-ink focus:outline-none';

function Chip({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
        active ? 'border-ink bg-ink text-white' : 'border-ink/15 text-ink hover:border-ink'
      }`}
    >
      {children}
    </button>
  );
}

export function Booking({ open, onClose, topic }: { open: boolean; onClose: () => void; topic?: string }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selected, setSelected] = useState(topics[0]);
  const [detail, setDetail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState(times[3]);
  const [notes, setNotes] = useState('');
  const [sent, setSent] = useState(false);
  const firstField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setSent(false);
    if (topic) {
      const [main, sub] = topic.split(' — ');
      setSelected(topics.includes(main) ? main : topics[0]);
      setDetail(sub ?? '');
    } else {
      setDetail('');
    }
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const t = setTimeout(() => firstField.current?.focus(), 350);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      clearTimeout(t);
    };
  }, [open, topic, onClose]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hello ${clinic.doctor}, I'd like to book a consultation at Bonica.`,
      '',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Interested in: ${selected}${detail ? ` (${detail})` : ''}`,
      `Preferred date: ${date || 'Flexible'}`,
      `Preferred time: ${time}`,
      notes ? `Notes: ${notes}` : '',
    ];
    window.open(whatsappLink(lines.join('\n').trim()), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60]">
          <motion.div
            className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.7, ease }}
            className="absolute inset-y-0 right-0 flex w-full max-w-[34rem] flex-col bg-white shadow-2xl sm:inset-y-3 sm:right-3 sm:rounded-[22px]"
          >
            <div className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
              <p className="eyebrow text-ink-soft">Book a consultation</p>
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/12 transition-colors hover:border-ink"
                aria-label="Close"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
                  <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {sent ? (
              <div className="flex flex-1 flex-col justify-center px-6 pb-10 md:px-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sage text-forest">
                  <svg viewBox="0 0 20 20" className="h-6 w-6" aria-hidden="true">
                    <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="1.75" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 id="booking-title" className="display mt-8 text-5xl">
                  Almost done.
                </h2>
                <p className="mt-4 max-w-sm text-[16px] leading-relaxed text-ink-soft">
                  Your request is ready in WhatsApp — just press send. We&rsquo;ll reply to confirm a time. If WhatsApp
                  didn&rsquo;t open, call us on{' '}
                  <a href={`tel:${clinic.phone}`} className="text-ink underline underline-offset-4">
                    {clinic.phoneDisplay}
                  </a>
                  .
                </p>
                <div className="mt-10">
                  <Button variant="outline" onClick={onClose}>
                    Back to the site
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-1 flex-col overflow-hidden">
                <div className="flex-1 overflow-y-auto px-6 pb-8 md:px-10">
                  <h2 id="booking-title" className="display mt-6 text-[2.75rem] md:text-5xl">
                    Tell us a little <em>about you</em>
                  </h2>
                  <p className="mt-3 text-[15px] text-ink-soft">
                    Takes under a minute. We&rsquo;ll confirm your appointment on WhatsApp.
                  </p>

                  <fieldset className="mt-9">
                    <legend className="text-sm font-medium">What would you like help with?</legend>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {topics.map((t) => (
                        <Chip key={t} active={selected === t} onClick={() => setSelected(t)}>
                          {t}
                        </Chip>
                      ))}
                    </div>
                    {detail && (
                      <p className="mt-3 text-sm text-ink-soft">
                        Concern: <span className="text-ink">{detail}</span>{' '}
                        <button type="button" onClick={() => setDetail('')} className="underline underline-offset-2">
                          remove
                        </button>
                      </p>
                    )}
                  </fieldset>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-medium">Your name</span>
                      <input ref={firstField} required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className={`${field} mt-2`} />
                    </label>
                    <label className="block">
                      <span className="text-sm font-medium">Phone / WhatsApp</span>
                      <input
                        required
                        type="tel"
                        inputMode="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        autoComplete="tel"
                        className={`${field} mt-2`}
                      />
                    </label>
                  </div>

                  <label className="mt-4 block">
                    <span className="text-sm font-medium">
                      Preferred date <span className="font-normal text-ink-soft">(optional)</span>
                    </span>
                    <input type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)} className={`${field} mt-2`} />
                  </label>

                  <fieldset className="mt-6">
                    <legend className="text-sm font-medium">Preferred time</legend>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {times.map((t) => (
                        <Chip key={t} active={time === t} onClick={() => setTime(t)}>
                          {t}
                        </Chip>
                      ))}
                    </div>
                  </fieldset>

                  <label className="mt-6 block">
                    <span className="text-sm font-medium">
                      Anything we should know? <span className="font-normal text-ink-soft">(optional)</span>
                    </span>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Symptoms, how long it's been going on, current medication…"
                      className={`${field} mt-2 resize-none`}
                    />
                  </label>
                </div>

                <div className="border-t border-ink/10 px-6 py-5 md:px-10">
                  <Button type="submit" size="lg" className="w-full">
                    <WhatsAppIcon /> Send request <Arrow />
                  </Button>
                  <p className="mt-3 text-center text-[13px] text-ink-soft">
                    Prefer to talk?{' '}
                    <a href={`tel:${clinic.phone}`} className="text-ink underline underline-offset-4">
                      Call {clinic.phoneDisplay}
                    </a>
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function MobileBar({ onBook, hidden }: { onBook: () => void; hidden: boolean }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-3 bottom-3 z-30 flex gap-2 rounded-full bg-white/90 p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-500 sm:hidden ${
        show && !hidden ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <button type="button" onClick={onBook} className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-ink text-[15px] font-medium text-white">
        Book a consultation
      </button>
      <a
        href={whatsappLink(`Hello ${clinic.doctor},`)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-sage text-forest"
      >
        <WhatsAppIcon className="h-5 w-5" />
      </a>
    </div>
  );
}
