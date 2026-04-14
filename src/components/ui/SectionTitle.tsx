import { cn } from '@/lib/utils';

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'start' | 'center';
  inverted?: boolean;
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'start',
  inverted = false,
  className,
}: Props) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center' : 'text-start',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'inline-block mb-3 text-sm md:text-base font-semibold uppercase tracking-widest',
            inverted ? 'text-juju-coral' : 'text-juju-coral'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'font-black leading-[0.95] tracking-tight',
          'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
          inverted ? 'text-white' : 'text-juju-black'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg md:text-xl max-w-2xl',
            align === 'center' && 'mx-auto',
            inverted ? 'text-white/70' : 'text-juju-text-muted'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
