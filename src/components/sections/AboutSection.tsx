import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ScrollReveal } from '@/components/illustrations/ScrollReveal';
import { FloatingElement } from '@/components/illustrations/FloatingElement';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { SECTION_IDS } from '@/lib/constants';

export function AboutSection() {
  const t = useTranslations('about');

  return (
    <section
      id={SECTION_IDS.about}
      className="relative overflow-hidden bg-white py-24 md:py-32 px-6 md:px-12"
    >
      <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-center">
        <ScrollReveal>
          <SectionTitle eyebrow="JUJU" title={t('title')} />
          <p className="text-lg md:text-xl leading-relaxed text-juju-black/80">
            {t('text')}
          </p>
          <p className="mt-6 text-2xl md:text-3xl font-black text-juju-coral leading-tight">
            {t('highlight')}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="relative flex justify-center">
          <FloatingElement duration={8} distance={14}>
            <Image
              src="/illustrations/characters/illustrations-sheet.png"
              alt=""
              width={800}
              height={600}
              className="w-full max-w-md h-auto mix-blend-multiply"
              aria-hidden="true"
            />
          </FloatingElement>
        </ScrollReveal>
      </div>

      <div className="pointer-events-none absolute -left-20 top-1/2 h-40 w-40 rounded-full bg-juju-yellow/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-juju-green/10 blur-3xl" />
    </section>
  );
}
