'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { SECTION_IDS } from '@/lib/constants';

interface Props {
  orientation?: 'horizontal' | 'vertical';
  inverted?: boolean;
  onNavigate?: () => void;
  className?: string;
}

const items = [
  { id: SECTION_IDS.about, key: 'about' },
  { id: SECTION_IDS.menu, key: 'menu' },
  { id: SECTION_IDS.gallery, key: 'gallery' },
  { id: SECTION_IDS.location, key: 'location' },
] as const;

export function Navigation({
  orientation = 'horizontal',
  inverted = false,
  onNavigate,
  className,
}: Props) {
  const t = useTranslations('nav');

  return (
    <nav
      className={cn(
        'flex gap-6 md:gap-8',
        orientation === 'vertical' && 'flex-col gap-8 text-2xl',
        className
      )}
    >
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={onNavigate}
          className={cn(
            'relative font-semibold transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-juju-coral after:transition-all hover:after:w-full',
            inverted
              ? 'text-white hover:text-juju-coral [text-shadow:0_2px_6px_rgba(0,0,0,0.55)]'
              : 'text-juju-black hover:text-juju-coral'
          )}
        >
          {t(item.key)}
        </a>
      ))}
    </nav>
  );
}
