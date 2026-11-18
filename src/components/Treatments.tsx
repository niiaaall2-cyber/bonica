import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { img, treatments } from '../data/clinicData';
import { Arrow, Reveal, SectionLabel, ease } from './ui';

export function Treatments({ onBook }: { onBook: (topic: string) => void }) {
  const [active, setActive] = useState(0);
  const current = treatments[active];

  return (
    <section id="treatments" className="pt-28 md:pt-40" aria-labelledby="treatments-title">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-x-5 gap-y-8">
          <div className="col-span-12 lg:col-span-3">
            <SectionLabel index="03">Treatments</SectionLabel>
          </div>
          <Reveal className="col-span-12 flex flex-col justify-between gap-6 md:flex-row md:items-end lg:col-span-9">
            <h2 id="treatments-title" className="display text-[clamp(2.6rem,5.6vw,5.25rem)]">
              Four ways <em>we help</em>
            </h2>
            <p className="max-w-xs text-ink-soft leading-relaxed">
              Most patients combine two or more. Your consultation decides which, and in what order.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-x-5 md:mt-20">
          {/* Sticky image (desktop) */}
          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="sticky top-28 aspect-[4/5] overflow-hidden rounded-[18px] bg-bone">
              <AnimatePresence initial={false}>
                <motion.img
                  key={current.id}
                  src={img(current.image, 1200)}
                  alt={current.imageAlt}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium backdrop-blur">
                {String(active + 1).padStart(2, '0')} / {String(treatments.length).padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* Accordion */}
          <ul className="col-span-12 border-t border-ink lg:col-span-6 lg:col-start-7">
            {treatments.map((t, i) => {
              const open = i === active;
              return (
                <li key={t.id} className="border-b border-ink/12">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-expanded={open}
                      aria-controls={`t-${t.id}`}
                      className="group flex w-full items-start gap-5 py-7 text-left md:gap-8"
                    >
                      <span className={`eyebrow mt-3 w-6 shrink-0 transition-colors ${open ? 'text-forest' : 'text-ink-soft'}`}>
                        0{i + 1}
                      </span>
                      <span className="flex-1">
                        <span className={`display block text-[2.25rem] transition-colors md:text-[3rem] ${open ? 'text-ink' : 'text-ink/40 group-hover:text-ink'}`}>
                          {t.title}
                        </span>
                        <span className="mt-2 block text-[15px] text-ink-soft">{t.summary}</span>
                      </span>
                      <span
                        className={`mt-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                          open ? 'rotate-45 border-ink bg-ink text-white' : 'border-ink/15 text-ink group-hover:border-ink'
                        }`}
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5">
                          <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`t-${t.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease }}
                        className="overflow-hidden"
                      >
                        <div className="pb-9 md:pl-14">
                          <div className="mb-6 aspect-[16/10] overflow-hidden rounded-[14px] lg:hidden">
                            <img src={img(t.image, 900)} alt={t.imageAlt} loading="lazy" className="h-full w-full object-cover" />
                          </div>
                          <p className="text-[17px] leading-relaxed">{t.body}</p>
                          <div className="mt-6 rounded-[14px] bg-bone p-5">
                            <p className="eyebrow text-ink-soft">The Ayurvedic method</p>
                            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{t.method}</p>
                          </div>
                          <ul className="mt-6 flex flex-wrap gap-2">
                            {t.includes.map((x) => (
                              <li key={x} className="rounded-full border border-ink/12 px-3.5 py-1.5 text-[13px]">
                                {x}
                              </li>
                            ))}
                          </ul>
                          <button
                            type="button"
                            onClick={() => onBook(t.title)}
                            className="group mt-8 inline-flex items-center gap-2 border-b border-ink pb-1 text-[15px] font-medium transition-colors hover:border-forest hover:text-forest"
                          >
                            Book {t.title.toLowerCase()} <Arrow />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
