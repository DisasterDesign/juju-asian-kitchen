'use client';

import { useLocale } from 'next-intl';
import { localeDirection, type Locale } from '@/i18n/config';

export function useDirection() {
  const locale = useLocale() as Locale;
  return localeDirection[locale];
}
