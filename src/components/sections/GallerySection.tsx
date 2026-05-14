import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ScrollReveal } from '@/components/illustrations/ScrollReveal';
import { SECTION_IDS } from '@/lib/constants';

const galleryImages = [
  { src: '/images/gallery/gallery-01.jpg', alt: 'Vietnamese bowl with spring rolls' },
  { src: '/images/gallery/gallery-02.jpg', alt: 'Asian noodle dish' },
  { src: '/images/gallery/gallery-03.jpg', alt: 'Fresh herbs and ingredients' },
  { src: '/images/gallery/gallery-04.jpg', alt: 'Dim sum plates' },
  { src: '/images/gallery/gallery-05.jpg', alt: 'Sushi platter' },
  { src: '/images/gallery/gallery-06.jpg', alt: 'Asian appetizer' },
  { src: '/images/gallery/gallery-07.jpg', alt: 'Noodle close-up' },
  { src: '/images/gallery/gallery-08.jpg', alt: 'Restaurant ambiance' },
  { src: '/images/gallery/gallery-09.jpg', alt: 'Hand sprinkling spice' },
  { src: '/images/gallery/gallery-10.jpg', alt: 'Single dish detail' },
  { src: '/images/gallery/gallery-11.jpg', alt: 'Plated course' },
  { src: '/images/gallery/gallery-12.jpg', alt: 'Sushi rolls with chopsticks' },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <ScrollReveal key={img.src} delay={i * 0.05}>
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-sm bg-juju-muted">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
