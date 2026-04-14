'use client';

import Image from 'next/image';
import { INSTAGRAM_URL } from '@/lib/constants';

// Static gallery placeholder — swap to Behold.so / Instagram Graph API later.
const instagramPosts = [
  { src: '/images/gallery/gallery-01.jpg', alt: 'JUJU post 1' },
  { src: '/images/gallery/gallery-05.jpg', alt: 'JUJU post 2' },
  { src: '/images/gallery/gallery-09.jpg', alt: 'JUJU post 3' },
  { src: '/images/gallery/gallery-12.jpg', alt: 'JUJU post 4' },
  { src: '/images/gallery/gallery-02.jpg', alt: 'JUJU post 5' },
  { src: '/images/gallery/gallery-07.jpg', alt: 'JUJU post 6' },
  { src: '/images/gallery/gallery-03.jpg', alt: 'JUJU post 7' },
  { src: '/images/gallery/gallery-10.jpg', alt: 'JUJU post 8' },
];

export default function InstagramFeed() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
      {instagramPosts.map((post, i) => (
        <a
          key={i}
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-square overflow-hidden rounded-2xl group shadow-sm"
          aria-label={post.alt}
        >
          <Image
            src={post.src}
            alt={post.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            sizes="(max-width: 640px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-juju-black/0 group-hover:bg-juju-black/40 transition-colors grid place-items-center">
            <svg
              className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm5.5-1.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
            </svg>
          </div>
        </a>
      ))}
    </div>
  );
}
