import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { clinic } from '../data/clinicData';
import { Arrow, Button, ease } from './ui';
import { LogoMark, LogoWordmark } from './brand';

const links = [
  { href: '#approach', label: 'Approach' },
  { href: '#treatments', label: 'Treatments' },
  { href: '#doctor', label: 'Doctors' },
  { href: '#apothecary', label: 'Apothecary' },
  { href: '#faq', label: 'FAQ' },
  { href: '#visit', label: 'Visit' },
];

export function Logo({ light }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label={`${clinic.fullName} — home`}>
      <LogoMark className={`h-9 w-auto ${light ? 'text-white' : 'text-[#8E622A]'}`} />
      <LogoWordmark className={`h-[1.35rem] w-auto ${light ? 'text-white' : 'text-[#236245]'}`} />
    </a>
  );
}

export function Header({ onBook }: { onBook: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled ? 'border-b border-ink/8 bg-white/85 backdrop-blur-xl' : 'border-b border-transparent bg-white'
        }`}
      >
        <div className="container-x flex h-[4.5rem] items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8 text-[14px] text-ink-soft">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="relative py-2 transition-colors hover:text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-500 hover:after:scale-x-100">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a href={`tel:${clinic.phone}`} className="hidden text-sm text-ink-soft transition-colors hover:text-ink xl:block mr-4">
              {clinic.phoneDisplay}
            </a>
            <div className="hidden sm:block">
              <Button onClick={onBook}>
                Book a consultation <Arrow />
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
                <path d="M3 7h14M3 13h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-forest-deep text-white lg:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="container-x flex h-[4.5rem] items-center justify-between">
              <Logo light />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20"
                aria-label="Close menu"
              >
                <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
                  <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <nav aria-label="Mobile" className="container-x mt-8 flex-1">
              <ul>
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease, delay: 0.25 + i * 0.05 }}
                    className="border-b border-white/10"
                  >
                    <a href={l.href} onClick={() => setOpen(false)} className="flex items-baseline justify-between py-4">
                      <span className="display text-[2.2rem]">{l.label}</span>
                      <span className="eyebrow text-white/40">0{i + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="container-x space-y-3 pb-10">
              <Button
                variant="light"
                size="lg"
                className="w-full"
                onClick={() => {
                  setOpen(false);
                  onBook();
                }}
              >
                Book a consultation <Arrow />
              </Button>
              <a href={`tel:${clinic.phone}`} className="block text-center text-sm text-white/60">
                or call {clinic.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
