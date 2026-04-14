import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { MenuSection } from '@/components/sections/MenuSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { InstagramSection } from '@/components/sections/InstagramSection';
import { LocationSection } from '@/components/sections/LocationSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <InstagramSection />
      <LocationSection />
      <ContactSection />
    </>
  );
}
