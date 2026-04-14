'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { MenuCard } from '@/components/ui/MenuCard';
import { MenuCategoryButton } from '@/components/ui/MenuCategory';
import { menuCategories } from '@/lib/menu-data';
import { SECTION_IDS } from '@/lib/constants';
import type { MenuCategoryId } from '@/types/menu';

export function MenuSection() {
  const t = useTranslations('menu');
  const locale = useLocale();
  const [active, setActive] = useState<MenuCategoryId>(menuCategories[0].id);

  const activeCategory = useMemo(
    () => menuCategories.find((c) => c.id === active) ?? menuCategories[0],
    [active]
  );

  return (
    <section
      id={SECTION_IDS.menu}
      className="relative bg-juju-muted py-24 md:py-32 px-6 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="MENU"
          title={t('title')}
          subtitle={t('subtitle')}
          align="center"
        />

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {menuCategories.map((cat) => (
            <MenuCategoryButton
              key={cat.id}
              label={t(`categories.${cat.id}`)}
              color={cat.color}
              active={active === cat.id}
              onClick={() => setActive(cat.id)}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active + locale}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {activeCategory.items.map((item) => (
              <MenuCard key={item.id} item={item} color={activeCategory.color} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
