import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Props {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

// TODO: replace with SVG + logo composition once final assets are provided
export function IllustrationComposition({
  src,
  alt,
  className,
  width = 800,
  height = 600,
}: Props) {
  return (
    <div className={cn('relative', className)}>
      <Image src={src} alt={alt} width={width} height={height} className="w-full h-auto" />
    </div>
  );
}
