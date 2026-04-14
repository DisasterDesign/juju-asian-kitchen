'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { INSTAGRAM_URL } from '@/lib/constants';
import { JujuLogo } from '@/components/ui/JujuLogo';
import { Navigation } from './Navigation';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-all duration-300',
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-juju-black/5 shadow-sm'
            : 'bg-white/40 backdrop-blur-sm'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 md:px-8 h-16 md:h-20">
          <a href="#hero" aria-label="JUJU" className="shrink-0">
            <JujuLogo
              variant="horizontal"
              color="coral"
              className="h-8 md:h-10 w-auto"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <Navigation inverted={false} />
          </div>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher inverted={false} />
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-juju-black/20 text-juju-black hover:bg-juju-black hover:text-white transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm5.5-1.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
              </svg>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="md:hidden grid h-10 w-10 place-items-center rounded-full text-juju-black hover:bg-juju-black/5 transition-colors"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              {mobileOpen ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6l-12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-juju-dark-bg md:hidden pt-20"
          >
            <div className="flex h-full flex-col items-start gap-10 px-8 py-12">
              <Navigation
                orientation="vertical"
                inverted
                onNavigate={() => setMobileOpen(false)}
              />
              <div className="mt-auto flex items-center gap-3">
                <LanguageSwitcher inverted />
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm font-semibold underline"
                >
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
