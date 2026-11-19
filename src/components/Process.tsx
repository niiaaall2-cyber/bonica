import React from 'react';
import { clinic, doctors, steps } from '../data/clinicData';
import { Arrow, Button, Reveal, SectionLabel } from './ui';

export function Process() {
  return (
    <section className="mt-28 bg-forest-deep text-white md:mt-40" aria-labelledby="process-title">
      <div className="container-x py-24 md:py-36">
        <div className="grid grid-cols-12 gap-x-5 gap-y-8">
          <div className="col-span-12 lg:col-span-3">
            <SectionLabel index="04" light>
              Your first visit
            </SectionLabel>
          </div>
          <Reveal className="col-span-12 lg:col-span-9">
            <h2 id="process-title" className="display text-[clamp(2.6rem,5.6vw,5.25rem)]">
              One plan, <em className="text-leaf">four steps.</em>
            </h2>
          </Reveal>
        </div>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-[18px] bg-white/10 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.08} className="flex min-h-[18rem] flex-col bg-forest-deep p-7 md:p-8">
              <span className="display text-[4.5rem] leading-none text-white/20">{i + 1}</span>
              <h3 className="display mt-auto text-[2rem]">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/65">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Doctor({ onBook }: { onBook: () => void }) {
  return (
    <section id="doctor" className="pt-28 md:pt-40" aria-labelledby="doctor-title">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-x-5 gap-y-8">
          <div className="col-span-12 lg:col-span-3">
            <SectionLabel index="05">Our doctors</SectionLabel>
          </div>
          <Reveal className="col-span-12 flex flex-col justify-between gap-8 md:flex-row md:items-end lg:col-span-9">
            <h2 id="doctor-title" className="display text-[clamp(2.6rem,5.6vw,5.25rem)]">
              Meet the <em>doctors</em>
            </h2>
            <div className="max-w-sm space-y-4 text-[16px] leading-relaxed text-ink-soft">
              <p className="text-ink">
                At Bonica, skin and hair are never treated in isolation. Every patient is assessed as a whole person —
                constitution, digestion, sleep, stress and diet — before anything is prescribed.
              </p>
              <p>Your treatment plan is reviewed as you progress — the aim is to address the cause, not just the symptoms.</p>
            </div>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-x-5 gap-y-12 sm:grid-cols-2 md:mt-20 lg:grid-cols-12">
          {doctors.map((d, i) => (
            <Reveal as="li" key={d.id} delay={i * 0.08} className={i === 0 ? 'lg:col-span-5 lg:col-start-1' : 'lg:col-span-5 lg:col-start-7 lg:mt-24'}>
              <div className="group aspect-[4/5] overflow-hidden rounded-[18px] bg-bone">
                <img
                  src={d.photo}
                  alt={`Portrait of ${d.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-4 border-b border-ink/12 pb-5">
                <h3 className="display text-[2.4rem] md:text-[2.9rem]">{d.name}</h3>
                <span className="eyebrow text-ink-soft">0{i + 1}</span>
              </div>
              {d.role && <p className="mt-4 text-[15px] text-ink-soft">{d.role}</p>}
            </Reveal>
          ))}
        </ul>

        {clinic.credentials.length > 0 && (
          <ul className="mt-10 flex flex-wrap gap-2">
            {clinic.credentials.map((c) => (
              <li key={c} className="rounded-full bg-sage px-3.5 py-1.5 text-[13px] text-forest">
                {c}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-14">
          <Button onClick={onBook}>
            Book a consultation <Arrow />
          </Button>
        </div>
      </div>
    </section>
  );
}
