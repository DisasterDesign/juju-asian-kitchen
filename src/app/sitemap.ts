import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://juju.co.il';
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/en`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ];
}
