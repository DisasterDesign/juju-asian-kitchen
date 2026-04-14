import { useTranslations } from 'next-intl';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GalleryGrid } from '@/components/ui/GalleryGrid';
import { ScrollReveal } from '@/components/illustrations/ScrollReveal';
import { SECTION_IDS } from '@/lib/constants';

// Placeholder gallery tiles until real photos are provided
const placeholders = [
  { gradient: 'from-juju-coral to-juju-coral-dark', aspect: 'aspect-square' },
  { gradient: 'from-juju-yellow to-juju-yellow-dark', aspect: 'aspect-[4/5]' },
  { gradient: 'from-juju-green to-juju-green-dark', aspect: 'aspect-square' },
  { gradient: 'from-juju-coral-light to-juju-yellow', aspect: 'aspect-[4/5]' },
  { gradient: 'from-juju-green-light to-juju-green', aspect: 'aspect-square' },
  { gradient: 'from-juju-coral to-juju-green', aspect: 'aspect-square' },
  { gradient: 'from-juju-yellow to-juju-coral', aspect: 'aspect-[4/5]' },
  { gradient: 'from-juju-black to-juju-dark-surface', aspect: 'aspect-square' },
];

export function GallerySection() {
  const t = useTranslations('gallery');

  return (
    <section
      id={SECTION_IDS.gallery}
      className="relative bg-white py-24 md:py-32 px-6 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="GALLERY"
          title={t('title')}
          subtitle={t('subtitle')}
          align="center"
        />

        <ScrollReveal>
          <GalleryGrid>
            {placeholders.map((p, i) => (
              <div
                key={i}
                className={`${p.aspect} rounded-2xl bg-gradient-to-br ${p.gradient} shadow-sm transition-transform duration-500 hover:scale-[1.02]`}
              />
            ))}
          </GalleryGrid>
        </ScrollReveal>

        <p className="mt-8 text-center text-sm text-juju-text-muted">
          {/* TODO: replace with real photography */}
        </p>
      </div>
    </section>
  );
}
