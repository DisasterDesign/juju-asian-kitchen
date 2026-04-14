'use client';

import { cn } from '@/lib/utils';

// TODO: replace with Behold.so (or Instagram Graph API) once credentials are available.
const PLACEHOLDER_COLORS = [
  'from-juju-coral to-juju-coral-dark',
  'from-juju-yellow to-juju-yellow-dark',
  'from-juju-green to-juju-green-dark',
  'from-juju-coral-light to-juju-coral',
  'from-juju-yellow-light to-juju-yellow',
  'from-juju-green-light to-juju-green',
  'from-juju-coral to-juju-yellow',
  'from-juju-green to-juju-coral',
];

export default function InstagramFeed() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
      {PLACEHOLDER_COLORS.map((gradient, i) => (
        <div
          key={i}
          className={cn(
            'aspect-square rounded-2xl bg-gradient-to-br shadow-sm relative overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.03]',
            gradient
          )}
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/30 transition-opacity">
            <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm5.5-1.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
