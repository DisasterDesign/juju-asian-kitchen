import { useTranslations } from 'next-intl';
import { SECTION_IDS, PHONE, PHONE_DISPLAY, EMAIL, WAZE_LINK } from '@/lib/constants';

export function ContactSection() {
  const t = useTranslations('contact');

  return (
    <section
      id={SECTION_IDS.contact}
      className="bg-juju-dark-bg text-white px-6 md:px-12 pb-24 md:pb-32"
    >
      <div className="mx-auto max-w-7xl border-t border-white/10 pt-16">
        <div className="grid gap-8 sm:grid-cols-3 text-center sm:text-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-juju-coral mb-2">
              {t('phone')}
            </p>
            <a
              href={`tel:${PHONE}`}
              className="text-xl md:text-2xl font-black hover:text-juju-coral transition-colors"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-juju-coral mb-2">
              {t('email')}
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="text-xl md:text-2xl font-black hover:text-juju-coral transition-colors"
            >
              {EMAIL}
            </a>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-juju-coral mb-2">
              Waze
            </p>
            <a
              href={WAZE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl font-black hover:text-juju-coral transition-colors"
            >
              {t('waze')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
