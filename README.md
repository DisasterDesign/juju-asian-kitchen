# JUJU Asian Kitchen

Website for **JUJU Asian Kitchen** — Asian street food restaurant in Mamilla Mall, Jerusalem.

Single-page marketing site with Hebrew (RTL) + English (LTR) support, built on Next.js 15 App Router.

## Stack

- **Next.js 15** (App Router, React 19)
- **TypeScript**, strict mode
- **Tailwind CSS 4** (via `@theme` in CSS)
- **next-intl** for i18n (he / en)
- **Framer Motion** for animations
- Deploys to **Cloudflare Pages**

## Local development

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
```

Routes:
- `/` — Hebrew (default, RTL)
- `/en` — English (LTR)

## Project structure

```
src/
├── app/[locale]/      # Locale-scoped layout + home page
├── components/
│   ├── layout/        # Header, Footer, Navigation, LanguageSwitcher
│   ├── sections/      # Hero, About, Menu, Gallery, Instagram, Location, Contact
│   ├── ui/            # Button, MenuCard, JujuLogo, KosherBadge, SectionTitle
│   ├── illustrations/ # AnimatedCharacter, FloatingElement, ScrollReveal
│   └── shared/        # Map, InstagramFeed, ScrollToTop
├── i18n/              # next-intl routing + request config
├── messages/          # he.json, en.json
├── lib/               # constants, menu-data, animations, utils
├── hooks/             # useScrollSection, useDirection, useMediaQuery
└── types/             # menu, common
```

## Deployment — Cloudflare Pages

The repo is wired to deploy via Cloudflare Pages Git integration. In the
Cloudflare dashboard connect this repo and use these build settings:

- **Framework preset:** Next.js
- **Build command:** `npx @cloudflare/next-on-pages@1`
- **Build output directory:** `.vercel/output/static`
- **Node version:** 20 (or latest LTS)
- **Environment variables (optional):**
  - `NEXT_PUBLIC_SITE_URL` — production URL
  - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` — only if switching to Google Maps JS API

Every push to `main` triggers a production deploy; pull requests get preview
deployments automatically.

## Planning documents

The original brand book, research, content strategy, and architecture spec live
in [`_docs/`](./_docs/):

- `00-brand-book-original.pdf` — original brand book (Feb 2025)
- `01-research-and-brand-analysis.md`
- `02-content-strategy-and-copy.md`
- `03-architecture-claude-code.md` — technical architecture spec
- `04-design-references.md`

## Known gaps (to replace before launch)

- Logo SVG (currently rendered via `JujuLogo.tsx` placeholder)
- Character illustration SVGs (currently the raster sheet from the PDF)
- Real food photography for the gallery
- Real menu data (`src/lib/menu-data.ts` contains realistic demo items marked `TODO`)
- Instagram feed integration (placeholder grid — hook up Behold.so or Graph API)
- Phone, email, kosher authority name in `src/lib/constants.ts`
- Open Graph image at `public/images/og-image.jpg`

## Links

- Instagram: [@juju_asian_kitchen](https://www.instagram.com/juju_asian_kitchen/)
- Location: Mamilla Mall, Jerusalem
