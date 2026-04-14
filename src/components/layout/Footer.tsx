import { useTranslations } from 'next-intl';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '@/lib/constants';
import { JujuLogo } from '@/components/ui/JujuLogo';
import { KosherBadge } from '@/components/ui/KosherBadge';

export function Footer() {
  const t = useTranslations('footer');
  const tLocation = useTranslations('location');

  return (
    <footer className="bg-juju-dark-bg text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-3 items-start">
          <div>
            <JujuLogo variant="stacked" color="coral" className="h-28 w-auto" />
          </div>

          <div className="space-y-3">
            <p className="text-lg font-semibold">{tLocation('address')}</p>
            <p className="text-white/70 text-sm">
              {tLocation('sun_thu')}: {tLocation('sun_thu_hours')}
            </p>
            <p className="text-white/70 text-sm">
              {tLocation('fri')}: {tLocation('fri_hours')}
            </p>
            <KosherBadge label={t('kosher_note')} variant="dark" />
          </div>

          <div className="space-y-3 md:text-end">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-juju-coral transition-colors font-semibold"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm5.5-1.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
              </svg>
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 text-xs text-white/50 text-center">
          {t('rights')}
        </div>
      </div>
    </footer>
  );
}
