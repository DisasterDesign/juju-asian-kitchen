import { Heebo, DM_Sans } from 'next/font/google';

export const heeboFont = Heebo({
  subsets: ['hebrew', 'latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-heebo-variable',
  display: 'swap',
});

export const displayFont = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-display-variable',
  display: 'swap',
});
