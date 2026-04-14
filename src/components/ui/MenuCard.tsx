'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import type { MenuItem, CategoryColor } from '@/types/menu';

const colorBg: Record<CategoryColor, string> = {
  coral: 'hover:bg-juju-coral',
  yellow: 'hover:bg-juju-yellow',
  green: 'hover:bg-juju-green',
};

const badgeBg: Record<CategoryColor, string> = {
  coral: 'bg-juju-coral text-white',
  yellow: 'bg-juju-yellow text-juju-black',
  green: 'bg-juju-green text-white',
};

interface Props {
  item: MenuItem;
  color: CategoryColor;
}

export function MenuCard({ item, color }: Props) {
  const locale = useLocale();
  const t = useTranslations('menu');
  const name = locale === 'he' ? item.nameHe : item.nameEn;
  const description = locale === 'he' ? item.descriptionHe : item.descriptionEn;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'group relative rounded-2xl border border-juju-muted bg-white p-6 transition-colors duration-300 cursor-default',
        colorBg[color]
      )}
    >
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="text-xl md:text-2xl font-black leading-tight text-juju-black group-hover:text-white transition-colors">
          {name}
        </h3>
        <span className="shrink-0 text-lg md:text-xl font-black text-juju-black group-hover:text-white transition-colors">
          {t('currency')}{item.price}
        </span>
      </div>
      <p className="text-sm md:text-base text-juju-text-muted group-hover:text-white/90 transition-colors">
        {description}
      </p>
      {(item.isNew || item.isPopular) && (
        <div className="absolute top-4 end-4 flex gap-2">
          {item.isNew && (
            <span className={cn('rounded-full px-2 py-0.5 text-xs font-bold', badgeBg[color])}>
              {t('new')}
            </span>
          )}
          {item.isPopular && (
            <span className={cn('rounded-full px-2 py-0.5 text-xs font-bold', badgeBg[color])}>
              {t('popular')}
            </span>
          )}
        </div>
      )}
    </motion.article>
  );
}
