import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { KosherBadge } from '@/components/ui/KosherBadge';
import { ButtonLink } from '@/components/ui/Button';
import { GOOGLE_MAPS_LINK, SECTION_IDS } from '@/lib/constants';

const Map = dynamic(() => import('@/components/shared/Map'), {
  loading: () => (
    <div className="h-[320px] md:h-[420px] w-full rounded-3xl bg-white/5 animate-pulse" />
  ),
});

export function LocationSection() {
  const t = useTranslations('location');

  return (
    <section
      id={SECTION_IDS.location}
      className="relative bg-juju-dark-bg text-white py-24 md:py-32 px-6 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="VISIT"
          title={t('title')}
          inverted
          align="start"
        />

        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-8">
            <div>
              <p className="text-2xl md:text-3xl font-black">{t('address')}</p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-juju-coral mb-4">
                {t('hours_title')}
              </h3>
              <dl className="space-y-2 text-lg">
                <div className="flex justify-between gap-6 border-b border-white/10 pb-2">
                  <dt className="text-white/60">{t('sun_thu')}</dt>
                  <dd className="font-semibold">{t('sun_thu_hours')}</dd>
                </div>
                <div className="flex justify-between gap-6 border-b border-white/10 pb-2">
                  <dt className="text-white/60">{t('fri')}</dt>
                  <dd className="font-semibold">{t('fri_hours')}</dd>
                </div>
                <div className="flex justify-between gap-6 border-b border-white/10 pb-2">
                  <dt className="text-white/60">{t('sat')}</dt>
                  <dd className="font-semibold">{t('sat_hours')}</dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <KosherBadge label={t('kosher')} variant="dark" />
              <ButtonLink
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
              >
                {t('navigate')}
              </ButtonLink>
            </div>
          </div>

          <Map />
        </div>
      </div>
    </section>
  );
}
