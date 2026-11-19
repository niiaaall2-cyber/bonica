import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { clinic, images, img, whatsappLink } from '../data/clinicData';
import { Arrow, Button, WhatsAppIcon, ease } from './ui';

const line = {
  hidden: { y: '105%' },
  show: (i: number) => ({ y: '0%', transition: { duration: 1.1, ease, delay: 0.1 + i * 0.09 } }),
};

export function Hero({ onBook }: { onBook: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '12%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.04, reduce ? 1.04 : 1.14]);

  return (
    <section id="top" ref={ref} className="relative pt-[4.5rem]">
      <div className="container-x grid grid-cols-12 gap-x-5 pt-10 pb-12 md:pt-16 lg:min-h-[calc(100svh-4.5rem)] lg:pb-10">
        {/* Copy */}
        <div className="col-span-12 flex flex-col lg:col-span-7 lg:pr-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="eyebrow flex items-center gap-3 text-ink-soft"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-leaf" />
            Led by {clinic.doctor} · By appointment
          </motion.p>

          <h1 className="display mt-8 text-[17vw] sm:text-[clamp(3.4rem,9.2vw,9.25rem)] text-ink">
            {['Skin and hair,', 'treated at', 'the root.'].map((t, i) => (
              <span key={t} className="block overflow-hidden pb-[0.06em]">
                <motion.span className="block" variants={line} initial={reduce ? false : 'hidden'} animate="show" custom={i}>
                  {i === 2 ? (
                    <>
                      <em className="text-forest">the root</em>.
                    </>
                  ) : (
                    t
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.55 }}
            className="mt-auto pt-10 lg:pt-14"
          >
            <p className="max-w-[30rem] text-[17px] leading-relaxed text-ink-soft md:text-lg">
              Bonica is an Ayurvedic clinic for skin and hair. We look past the symptom to what is causing it, then treat
              both — with classical medicine, in-clinic therapy and a plan made for you.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" onClick={onBook} className="max-sm:w-full">
                Book a consultation <Arrow />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="max-sm:w-full"
                href={whatsappLink(`Hello ${clinic.doctor}, I'd like to know more about treatment at Bonica.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon /> Message us
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={reduce ? false : { clipPath: 'inset(100% 0 0 0)' }}
          animate={{ clipPath: 'inset(0% 0 0 0)' }}
          transition={{ duration: 1.4, ease, delay: 0.2 }}
          className="relative col-span-12 mt-12 aspect-[4/5] overflow-hidden rounded-[18px] bg-bone sm:aspect-[16/11] lg:col-span-5 lg:mt-0 lg:aspect-auto"
        >
          <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
            <img
              src={img(images.hero, 1400)}
              srcSet={`${img(images.hero, 800)} 800w, ${img(images.hero, 1400)} 1400w, ${img(images.hero, 2000)} 2000w`}
              sizes="(min-width: 1024px) 42vw, 100vw"
              alt={images.heroAlt}
              className="h-full w-full object-cover object-[72%_20%]"
              fetchPriority="high"
            />
          </motion.div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/45 to-transparent" />
          <div className="absolute inset-x-5 bottom-5 flex items-end justify-between text-white">
            <p className="max-w-[15rem] text-sm leading-snug text-white/90">
              Treatment planned around you.
            </p>
            <span className="eyebrow text-white/70">Fig. 01</span>
          </div>
        </motion.div>
      </div>

      {/* Facts strip */}
      <div className="container-x">
        <dl className="grid grid-cols-1 border-t border-ink/10 sm:grid-cols-3">
          {[
            ['Specialism', 'Skin, hair & scalp'],
            ['Method', 'Classical Ayurveda'],
            ['Hours', `${clinic.hours}, by appointment`],
          ].map(([k, v], i) => (
            <div
              key={k}
              className={`flex items-baseline justify-between gap-4 py-5 sm:block ${i > 0 ? 'border-t border-ink/10 sm:border-t-0 sm:border-l sm:pl-6' : ''}`}
            >
              <dt className="eyebrow text-ink-soft">{k}</dt>
              <dd className="text-[15px] sm:mt-1.5">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
