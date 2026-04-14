'use client';

import { GOOGLE_MAPS_EMBED_URL } from '@/lib/constants';

export default function Map() {
  return (
    <div className="relative h-full min-h-[320px] md:min-h-[420px] w-full overflow-hidden rounded-3xl border border-white/10 bg-juju-dark-surface">
      <iframe
        src="https://www.google.com/maps?q=Mamilla+Mall,+Jerusalem&output=embed"
        title="JUJU Asian Kitchen — Mamilla Mall, Jerusalem"
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      {/* Fallback link kept in constants: {GOOGLE_MAPS_EMBED_URL} */}
      <noscript>{GOOGLE_MAPS_EMBED_URL}</noscript>
    </div>
  );
}
