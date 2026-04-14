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
          className="absolute inset-0 h-full w-full object-cover"
          poster="/images/hero/hero-fallback.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero-loop.webm" type="video/webm" />
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
        {/* Readability overlay — subtle white wash so text stays crisp even when characters pass under it */}
        <div className="absolute inset-0 bg-white/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-24 pb-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="text-xl md:text-3xl lg:text-4xl font-black text-juju-black max-w-3xl drop-shadow-sm"
        >
          {t('tagline')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <ButtonLink href={`#${SECTION_IDS.menu}`} variant="primary" size="lg">
            {t('cta_menu')}
          </ButtonLink>
          <ButtonLink href={`#${SECTION_IDS.location}`} variant="dark-outline" size="lg">
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-juju-black/50 hover:text-juju-black transition-colors z-10"
        aria-label={t('scroll_indicator')}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="grid h-12 w-8 place-items-start rounded-full border-2 border-juju-black/30 pt-2"
        >
          <span className="block h-2 w-1 rounded-full bg-juju-black/70" />
        </motion.div>
      </motion.a>
    </section>
  );
}
