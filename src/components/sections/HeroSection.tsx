'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ButtonLink } from '@/components/ui/Button';
import { SECTION_IDS } from '@/lib/constants';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section
      id={SECTION_IDS.hero}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-juju-dark-bg text-white"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(230,147,134,0.35) 0%, rgba(10,10,10,0) 60%)',
        }}
      />
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full opacity-20 blur-3xl bg-juju-yellow" />
      <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full opacity-20 blur-3xl bg-juju-green" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="w-full max-w-4xl"
        >
          <Image
            src="/illustrations/compositions/hero-composition-coral.png"
            alt="JUJU Asian Kitchen"
            width={2400}
            height={1350}
            priority
            className="w-full h-auto"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
          className="mt-4 text-lg md:text-2xl lg:text-3xl font-medium text-white/85 max-w-2xl"
        >
          {t('tagline')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <ButtonLink href={`#${SECTION_IDS.menu}`} variant="primary" size="lg">
            {t('cta_menu')}
          </ButtonLink>
          <ButtonLink href={`#${SECTION_IDS.location}`} variant="secondary" size="lg">
            {t('cta_location')}
          </ButtonLink>
        </motion.div>
      </div>

      <motion.a
        href={`#${SECTION_IDS.about}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        aria-label={t('scroll_indicator')}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="grid h-12 w-8 place-items-start rounded-full border-2 border-white/40 pt-2"
        >
          <span className="block h-2 w-1 rounded-full bg-white/80" />
        </motion.div>
      </motion.a>
    </section>
  );
}
