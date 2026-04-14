import { cn } from '@/lib/utils';

interface Props {
  label: string;
  variant?: 'light' | 'dark';
  className?: string;
}

export function KosherBadge({ label, variant = 'light', className }: Props) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold',
        variant === 'light'
          ? 'bg-juju-muted text-juju-black'
          : 'bg-white/10 text-white border border-white/20',
        className
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          d="M12 2L14 8H20L15 12L17 18L12 14L7 18L9 12L4 8H10L12 2Z"
          fill="currentColor"
        />
      </svg>
      {label}
    </span>
  );
}
