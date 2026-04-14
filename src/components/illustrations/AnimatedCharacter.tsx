'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Props {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right';
  width?: number;
  height?: number;
}

export function AnimatedCharacter({
  src,
  alt,
  className,
  delay = 0,
  direction = 'left',
  width = 400,
  height = 400,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className={cn('select-none pointer-events-none', className)}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto"
      />
    </motion.div>
  );
}
