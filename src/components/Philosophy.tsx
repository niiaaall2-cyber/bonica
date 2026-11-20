import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { concerns, images, img } from '../data/clinicData';
import { ArrowUpRight, Reveal, SectionLabel } from './ui';

export function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-8%', '8%']);

  return (
    <section id="approach" className="pt-28 md:pt-40">
      <div className="container-x grid grid-cols-12 gap-x-5 gap-y-10">
        <div className="col-span-12 lg:col-span-3">
          <SectionLabel index="01">Approach</SectionLabel>
        </div>
        <Reveal className="col-span-12 lg:col-span-9">
          <p className="display text-[clamp(1.75rem,3.4vw,3.25rem)] leading-[1.12] font-[420] text-ink">
            Most skin and hair problems don&rsquo;t begin on the surface.{' '}
            <span className="text-ink/35">
              Breakouts, pigmentation and hair fall are often signs of something deeper — digestion, stress, sleep, the
              balance of the body.
            </span>{' '}
            So that&rsquo;s where we start.
          </p>
        </Reveal>
      </div>

      <div className="container-x mt-20 md:mt-28">
        <div ref={ref} className="relative h-[52vh] min-h-[340px] overflow-hidden rounded-[18px] md:h-[78vh]">
          <motion.img
            style={{ y, scale: 1.18 }}
            src={img(images.leaf, 2200)}
            alt="Close-up of a broad green leaf"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/0 to-black/0" />
          <div className="absolute bottom-6 left-6 max-w-sm text-white md:bottom-10 md:left-10">
            <p className="eyebrow text-white/70">The Ayurvedic view</p>
            <p className="display mt-3 text-[1.7rem] md:text-[2.3rem]">
              The skin is a mirror
              <br />
              of what happens within.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Concerns({ onBook }: { onBook: (topic: string) => void }) {
  const groups = [
    { title: 'Skin', topic: 'Skin therapy', items: concerns.skin },
    { title: 'Hair & scalp', topic: 'Hair & scalp therapy', items: concerns.hair },
  ];
  return (
    <section className="pt-28 md:pt-40" aria-labelledby="concerns-title">
      <div className="container-x grid grid-cols-12 gap-x-5 gap-y-12">
        <div className="col-span-12 lg:col-span-4">
          <SectionLabel index="02">What we treat</SectionLabel>
          <Reveal>
            <h2 id="concerns-title" className="display mt-8 text-[clamp(2.3rem,4.2vw,3.75rem)]">
              Common reasons <br className="hidden lg:block" />
              people <em>come to us</em>
            </h2>
            <p className="mt-6 max-w-sm text-ink-soft leading-relaxed">
              Choose what&rsquo;s closest to your concern and we&rsquo;ll start your booking from there.
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 grid gap-12 md:grid-cols-2 lg:col-span-8 lg:gap-8">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.08}>
              <div className="flex items-baseline justify-between border-b border-ink pb-3">
                <h3 className="eyebrow">{g.title}</h3>
                <span className="eyebrow text-ink-soft">{String(g.items.length).padStart(2, '0')}</span>
              </div>
              <ul>
                {g.items.map((c) => (
                  <li key={c} className="border-b border-ink/10">
                    <button
                      type="button"
                      onClick={() => onBook(`${g.topic} — ${c}`)}
                      className="group flex w-full items-center justify-between gap-4 py-4 text-left text-[17px] transition-colors hover:text-forest md:text-lg"
                    >
                      <span className="transition-transform duration-500 group-hover:translate-x-1.5">{c}</span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/10 text-ink-soft transition-all duration-300 group-hover:border-forest group-hover:bg-forest group-hover:text-white">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
