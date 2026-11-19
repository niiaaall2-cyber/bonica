import React from 'react';
import { clinic, images, img, whatsappLink } from '../data/clinicData';
import { Arrow, ArrowUpRight, Button, Reveal, WhatsAppIcon } from './ui';
import { LogoWordmark } from './brand';

export function Visit({ onBook }: { onBook: () => void }) {
  const details = [
    { k: 'Hours', v: clinic.hours, sub: clinic.hoursNote },
    { k: 'Phone', v: clinic.phoneDisplay, href: `tel:${clinic.phone}` },
    { k: 'Email', v: clinic.email, href: `mailto:${clinic.email}` },
    {
      k: 'Address',
      v: clinic.address || 'Shared when you book',
      href: clinic.mapsUrl,
      sub: 'Open in Google Maps',
      external: true,
    },
  ];

  return (
    <section id="visit" className="pt-28 md:pt-40" aria-labelledby="visit-title">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[22px] bg-forest text-white">
          <img
            src={img(images.closing, 2000)}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/70 to-forest-deep/30" />
          <div className="relative px-6 py-20 md:px-14 md:py-28 lg:px-20">
            <Reveal>
              <p className="eyebrow text-white/60">08 — Visit</p>
              <h2 id="visit-title" className="display mt-8 max-w-4xl text-[clamp(3rem,8vw,8rem)]">
                Start with a <em className="text-leaf">conversation.</em>
              </h2>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-white/75">
                Tell us what&rsquo;s going on with your skin or hair. We&rsquo;ll confirm a time for your first consultation
                with {clinic.doctor}.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button variant="light" size="lg" onClick={onBook}>
                  Book a consultation <Arrow />
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  href={whatsappLink(`Hello ${clinic.doctor}, I'd like to book a consultation at Bonica.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon /> WhatsApp
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        <dl className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {details.map((d) => {
            const inner = (
              <>
                <dt className="eyebrow text-ink-soft">{d.k}</dt>
                <dd className="mt-6 text-lg leading-snug break-words">{d.v}</dd>
                {d.sub && <dd className="mt-1 text-sm text-ink-soft">{d.sub}</dd>}
              </>
            );
            return d.href ? (
              <a
                key={d.k}
                href={d.href}
                {...(d.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group relative rounded-[18px] bg-bone p-6 transition-colors hover:bg-sage"
              >
                {inner}
                <ArrowUpRight className="absolute right-6 top-6 text-ink-soft" />
              </a>
            ) : (
              <div key={d.k} className="rounded-[18px] bg-bone p-6">
                {inner}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-28 border-t border-ink/10 pb-28 md:mt-40 md:pb-10">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-8 py-14 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <p className="max-w-xs text-ink-soft leading-relaxed">
              {clinic.fullName}. Ayurvedic treatment for skin, hair and scalp, led by {clinic.doctor}.
            </p>
          </div>
          <nav className="md:col-span-2 md:col-start-7" aria-label="Footer">
            <p className="eyebrow text-ink-soft">Explore</p>
            <ul className="mt-4 space-y-2 text-[15px]">
              {[
                ['#approach', 'Approach'],
                ['#treatments', 'Treatments'],
                ['#doctor', 'Doctors'],
                ['#apothecary', 'Apothecary'],
                ['#faq', 'FAQ'],
              ].map(([h, l]) => (
                <li key={h}>
                  <a href={h} className="hover:text-forest">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-2">
            <p className="eyebrow text-ink-soft">Contact</p>
            <ul className="mt-4 space-y-2 text-[15px]">
              <li>
                <a href={`tel:${clinic.phone}`} className="hover:text-forest">
                  Call
                </a>
              </li>
              <li>
                <a href={whatsappLink(`Hello ${clinic.doctor},`)} target="_blank" rel="noopener noreferrer" className="hover:text-forest">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${clinic.email}`} className="hover:text-forest">
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-2">
            <p className="eyebrow text-ink-soft">Patients</p>
            <ul className="mt-4 space-y-2 text-[15px]">
              <li>
                <a
                  href={whatsappLink(`Hello ${clinic.doctor}, I'd like to share feedback about my treatment at Bonica:\n\n`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-forest"
                >
                  Share your experience
                </a>
              </li>
            </ul>
          </div>
        </div>

        <LogoWordmark className="mt-4 block h-auto w-full select-none text-[#236245]" />

        <div className="mt-8 flex flex-col justify-between gap-2 border-t border-ink/10 pt-6 text-[13px] text-ink-soft sm:flex-row">
          <p>© {year} {clinic.fullName}</p>
          <p>Information on this site is not a substitute for a medical consultation.</p>
        </div>
      </div>
    </footer>
  );
}
