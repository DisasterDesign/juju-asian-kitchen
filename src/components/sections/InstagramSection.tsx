import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ButtonLink } from '@/components/ui/Button';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, SECTION_IDS } from '@/lib/constants';

const InstagramFeed = dynamic(() => import('@/components/shared/InstagramFeed'));

export function InstagramSection() {
  const t = useTranslations('instagram');

  return (
    <section
      id={SECTION_IDS.instagram}
      className="relative bg-juju-muted py-24 md:py-32 px-6 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow={INSTAGRAM_HANDLE}
          title={t('title')}
          align="center"
        />

        <InstagramFeed />

        <div className="mt-12 flex justify-center">
          <ButtonLink
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="light"
            size="lg"
          >
            {t('follow')}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
