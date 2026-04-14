'use client';

import { cn } from '@/lib/utils';
import type { CategoryColor } from '@/types/menu';

const activeStyles: Record<CategoryColor, string> = {
  coral: 'bg-juju-coral text-white',
  yellow: 'bg-juju-yellow text-juju-black',
  green: 'bg-juju-green text-white',
};

interface Props {
  label: string;
  color: CategoryColor;
  active: boolean;
  onClick: () => void;
}

export function MenuCategoryButton({ label, color, active, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-full px-5 py-2.5 text-sm md:text-base font-semibold transition-all duration-200',
        'border-2 border-juju-black/10',
        active
          ? activeStyles[color] + ' border-transparent shadow-md scale-105'
          : 'bg-white text-juju-black hover:bg-juju-muted'
      )}
    >
      {label}
    </button>
  );
}
