'use client';

import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/routing';
import { locales, type Locale } from '@/i18n/config';
import { cn } from '@/lib/utils';

interface Props {
  inverted?: boolean;
  className?: string;
}

export function LanguageSwitcher({ inverted = false, className }: Props) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggle = () => {
    const next: Locale = locale === 'he' ? 'en' : 'he';
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={isPending}
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors',
        inverted
          ? 'border-white/40 text-white hover:bg-white hover:text-juju-black'
          : 'border-juju-black/20 text-juju-black hover:bg-juju-black hover:text-white',
        className
      )}
      aria-label="Toggle language"
    >
      {locales.map((l, i) => (
        <span key={l} className={cn(l === locale && 'opacity-50')}>
          {i > 0 && <span className="mx-1 opacity-40">/</span>}
          {l}
        </span>
      ))}
    </button>
  );
}
