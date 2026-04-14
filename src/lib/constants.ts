export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://juju.co.il';
export const INSTAGRAM_URL = 'https://www.instagram.com/juju_asian_kitchen/';
export const INSTAGRAM_HANDLE = '@juju_asian_kitchen';

// Mamilla Mall coordinates
export const LOCATION = {
  lat: 31.7766,
  lng: 35.2265,
  addressHe: 'קניון ממילא, ירושלים',
  addressEn: 'Mamilla Mall, Jerusalem',
};

export const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.5!2d35.2265!3d31.7766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDQ2JzM1LjgiTiAzNcKwMTMnMzUuNCJF!5e0!3m2!1sen!2sil!4v1700000000000';

export const GOOGLE_MAPS_LINK = 'https://maps.google.com/?q=Mamilla+Mall+Jerusalem';
export const WAZE_LINK = 'https://waze.com/ul?q=Mamilla%20Mall%20Jerusalem';

// TODO: replace placeholders with real client details
export const PHONE = '+972-2-000-0000';
export const PHONE_DISPLAY = '02-000-0000';
export const EMAIL = 'hello@juju.co.il';

export const SECTION_IDS = {
  hero: 'hero',
  about: 'about',
  menu: 'menu',
  gallery: 'gallery',
  instagram: 'instagram',
  location: 'location',
  contact: 'contact',
} as const;
