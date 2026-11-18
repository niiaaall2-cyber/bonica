import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { clinic, faqs, img, products, whatsappLink } from '../data/clinicData';
import { ArrowUpRight, Reveal, SectionLabel, ease } from './ui';

export function Apothecary() {
  return (
    <section id="apothecary" className="pt-28 md:pt-40" aria-labelledby="apothecary-title">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-x-5 gap-y-8">
          <div className="col-span-12 lg:col-span-3">
            <SectionLabel index="06">Apothecary</SectionLabel>
          </div>
          <Reveal className="col-span-12 flex flex-col justify-between gap-6 md:flex-row md:items-end lg:col-span-9">
            <h2 id="apothecary-title" className="display text-[clamp(2.6rem,5.6vw,5.25rem)]">
              Made the <em>classical</em> way
            </h2>
            <p className="max-w-xs text-ink-soft leading-relaxed">
              Oils, pastes and medicines dispensed at the clinic. Most are prescribed after consultation.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-x-5 gap-y-12 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal as="li" key={p.id} delay={i * 0.06}>
              <a
                href={whatsappLink(`Hello ${clinic.doctor}, I'd like to ask about ${p.name.toLowerCase()} at Bonica.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                aria-label={`Ask about ${p.name} on WhatsApp`}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-bone">
                  <img
                    src={img(p.image, 800)}
                    alt={p.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.05]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium backdrop-blur">
                    {p.type}
                  </span>
                  <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight />
                  </span>
                </div>
                <h3 className="display mt-5 text-[1.9rem]">{p.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{p.description}</p>
                <p className="eyebrow mt-4 text-forest">{p.note}</p>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="pt-28 md:pt-40" aria-labelledby="faq-title">
      <div className="container-x grid grid-cols-12 gap-x-5 gap-y-10">
        <div className="col-span-12 lg:col-span-4">
          <SectionLabel index="07">Questions</SectionLabel>
          <Reveal>
            <h2 id="faq-title" className="display mt-8 text-[clamp(2.6rem,5vw,4.5rem)]">
              Before you <em>book</em>
            </h2>
            <p className="mt-6 max-w-xs text-ink-soft leading-relaxed">
              Something else on your mind?{' '}
              <a
                href={whatsappLink(`Hello ${clinic.doctor}, I have a question before booking.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
              >
                Ask us on WhatsApp
              </a>
              .
            </p>
          </Reveal>
        </div>

        <ul className="col-span-12 border-t border-ink lg:col-span-7 lg:col-start-6">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q} className="border-b border-ink/12">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left text-lg md:text-xl"
                  >
                    <span className="transition-colors group-hover:text-forest">{f.q}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                        isOpen ? 'rotate-45 border-ink bg-ink text-white' : 'border-ink/15'
                      }`}
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 16 16" className="h-3 w-3">
                        <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-xl pb-7 text-[16px] leading-relaxed text-ink-soft">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
