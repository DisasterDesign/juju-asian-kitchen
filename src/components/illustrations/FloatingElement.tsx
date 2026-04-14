'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Props {
  children: React.ReactNode;
  duration?: number;
  distance?: number;
  className?: string;
}

export function FloatingElement({
  children,
  duration = 6,
  distance = 20,
  className,
}: Props) {
  return (
    <motion.div
      className={cn('pointer-events-none', className)}
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
