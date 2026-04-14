# JUJU Asian Kitchen

Website for **JUJU Asian Kitchen** — Asian street food restaurant in Mamilla Mall, Jerusalem.

Single-page marketing site with Hebrew (RTL) + English (LTR) support, built on Next.js 15 App Router.

**Live:** https://juju-asian-kitchen.pages.dev

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

Deployed via **direct upload** with `wrangler pages deploy`. To ship an update:

```bash
npm run pages:ship
```

This runs `@cloudflare/next-on-pages` to build, then uploads `.vercel/output/static`
to the `juju-asian-kitchen` Pages project (production branch `main`, with
`nodejs_compat` enabled).

Breakdown:

```bash
npm run pages:build    # @cloudflare/next-on-pages → .vercel/output/static
npm run pages:deploy   # wrangler pages deploy ...
```

### Switching to Git-based auto-deploy (optional)

If you prefer auto-deploy on `git push` instead of the CLI flow, connect the
repo in the Cloudflare dashboard (Pages → Connect to Git), using:

- **Framework preset:** Next.js
- **Build command:** `npx @cloudflare/next-on-pages@1`
- **Build output directory:** `.vercel/output/static`
- **Compatibility flags:** `nodejs_compat`
- **Environment variables:**
  - `NEXT_PUBLIC_SITE_URL` — production URL

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
