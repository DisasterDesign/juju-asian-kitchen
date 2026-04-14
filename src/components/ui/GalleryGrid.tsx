import { cn } from '@/lib/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function GalleryGrid({ children, className }: Props) {
  return (
    <div
      className={cn(
        'grid gap-3 md:gap-4',
        'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
        className
      )}
    >
      {children}
    </div>
  );
}
