import React from 'react';
import { clinic, images, img, steps } from '../data/clinicData';
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
      <div className="container-x grid grid-cols-12 gap-x-5 gap-y-12">
        <div className="col-span-12 lg:col-span-5">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-bone">
            {/* TODO: replace with a portrait of Dr. Jasla P */}
            <img src={img(images.doctor, 1200)} alt="Hands holding dried wild grasses in warm light" loading="lazy" className="h-full w-full object-cover" />
          </Reveal>
        </div>

        <div className="col-span-12 flex flex-col lg:col-span-6 lg:col-start-7">
          <SectionLabel index="05">The physician</SectionLabel>
          <Reveal>
            <h2 id="doctor-title" className="display mt-8 text-[clamp(3rem,6.4vw,6rem)]">
              {clinic.doctor}
            </h2>
            <p className="mt-3 text-lg text-ink-soft">{clinic.doctorRole} · Founder of Bonica</p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 space-y-5 text-[17px] leading-relaxed">
            <p>
              Dr. Jasla P founded Bonica on a simple idea: skin and hair can&rsquo;t be treated well in isolation. Every
              patient is assessed as a whole person — constitution, digestion, sleep, stress and diet — before anything is
              prescribed.
            </p>
            <p className="text-ink-soft">
              Every consultation is with Dr. Jasla P, who writes each treatment plan and reviews your progress at every
              follow-up — so the aim is resolving the problem, not just quietening it.
            </p>
          </Reveal>

          {clinic.credentials.length > 0 && (
            <ul className="mt-8 flex flex-wrap gap-2">
              {clinic.credentials.map((c) => (
                <li key={c} className="rounded-full bg-sage px-3.5 py-1.5 text-[13px] text-forest">
                  {c}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-12 border-l-2 border-forest pl-6">
            <p className="eyebrow text-ink-soft">Our principle</p>
            <p className="display mt-3 text-[1.9rem] leading-[1.15] md:text-[2.3rem]">
              Understand one patient fully, rather than treat a hundred symptoms quickly.
            </p>
          </div>

          <div className="mt-12">
            <Button onClick={onBook}>
              Book with {clinic.doctor} <Arrow />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
