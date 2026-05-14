'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ButtonLink } from '@/components/ui/Button';
import { SECTION_IDS } from '@/lib/constants';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section
      id={SECTION_IDS.hero}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white text-juju-black"
    >
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover [filter:contrast(1.15)_saturate(1.2)]"
          poster="/images/hero/hero-fallback.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero-phone.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/videos/hero-web.mp4" type="video/mp4" />
        </video>
        {/* Readability gradient — denser at top/bottom (where tagline + CTAs live), transparent in the middle so the saturated illustration shines through */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/0 to-white/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-24 pb-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="text-xl md:text-3xl lg:text-4xl font-black text-juju-black max-w-3xl [text-shadow:0_2px_18px_rgba(255,255,255,0.85),0_1px_2px_rgba(0,0,0,0.15)]"
        >
          {t('tagline')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <ButtonLink href={`#${SECTION_IDS.menu}`} variant="light" size="lg">
            {t('cta_menu')}
          </ButtonLink>
          <ButtonLink href={`#${SECTION_IDS.location}`} variant="light" size="lg">
            {t('cta_location')}
          </ButtonLink>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href={`#${SECTION_IDS.about}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-juju-black/70 hover:text-juju-black transition-colors"
        aria-label={t('scroll_indicator')}
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
          {t('scroll_indicator')}
        </span>
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </motion.a>
    </section>
  );
}
