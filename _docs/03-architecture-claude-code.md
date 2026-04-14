# JUJU Asian Kitchen — ארכיטקטורת Next.js לקלוד קוד

## תאריך: אפריל 2026
## פרויקט: אתר תדמית Single-Page עם תמיכה רב-לשונית

---

## 1. סקירה טכנית

### Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **i18n:** next-intl
- **CMS (אופציונלי):** Sanity / Contentful — לניהול תפריט ותוכן
- **Deployment:** Vercel (עדיפות ראשונה) / Cloudflare Pages
- **Package Manager:** pnpm

### דרישות מפתח
1. RTL + LTR support (עברית + אנגלית)
2. Single-page scroll עם ניווט smooth
3. אנימציות מבוססות-איור (on-scroll reveal)
4. ביצועים גבוהים (Lighthouse 90+)
5. Mobile-first responsive
6. SEO מלא (meta, OG, schema.org)
7. אינטגרציית אינסטגרם
8. Google Maps embed

---

## 2. מבנה תיקיות

```
juju-website/
├── public/
│   ├── images/
│   │   ├── hero/              # תמונות/וידאו hero
│   │   ├── food/              # צילומי אוכל
│   │   ├── gallery/           # תמונות גלריה
│   │   └── og-image.jpg       # Open Graph image
│   ├── illustrations/
│   │   ├── characters/        # דמויות SVG
│   │   │   ├── noodle-eater.svg
│   │   │   ├── tea-pourer.svg
│   │   │   ├── chopstick-viewer.svg
│   │   │   ├── cat-mask.svg
│   │   │   ├── fish-rider.svg
│   │   │   └── sushi-builder.svg
│   │   ├── elements/          # אלמנטים בודדים SVG
│   │   │   ├── bowl.svg
│   │   │   ├── chopsticks.svg
│   │   │   ├── fish.svg
│   │   │   ├── onigiri.svg
│   │   │   ├── noodles.svg
│   │   │   └── teapot.svg
│   │   └── compositions/      # קומפוזיציות לוגו+איור
│   │       ├── hero-composition.svg
│   │       └── footer-composition.svg
│   ├── fonts/                 # פונטים מקומיים
│   │   ├── heebo/             # פונט עברי
│   │   └── custom-en/         # פונט אנגלי
│   └── logo/
│       ├── juju-stacked.svg
│       ├── juju-horizontal.svg
│       ├── juju-circle-green.svg
│       ├── juju-circle-coral.svg
│       └── juju-circle-yellow.svg
│
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx     # Root layout עם RTL/LTR
│   │   │   ├── page.tsx       # דף הבית (single page)
│   │   │   ├── menu/
│   │   │   │   └── page.tsx   # עמוד תפריט מלא (אופציונלי)
│   │   │   └── not-found.tsx
│   │   ├── layout.tsx         # App layout
│   │   ├── globals.css
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx         # ניווט + language switcher
│   │   │   ├── Footer.tsx         # פוטר
│   │   │   ├── Navigation.tsx     # ניווט ראשי
│   │   │   └── LanguageSwitcher.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx        # Hero עם אילוסטרציה + לוגו
│   │   │   ├── AboutSection.tsx       # אודות
│   │   │   ├── MenuSection.tsx        # תפריט מקוצר
│   │   │   ├── GallerySection.tsx     # גלריה
│   │   │   ├── InstagramSection.tsx   # פיד אינסטגרם
│   │   │   ├── LocationSection.tsx    # מיקום + מפה
│   │   │   └── ContactSection.tsx     # יצירת קשר
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── MenuCard.tsx       # כרטיס מנה
│   │   │   ├── MenuCategory.tsx   # קטגוריית תפריט
│   │   │   ├── GalleryGrid.tsx    # גריד תמונות
│   │   │   ├── SectionTitle.tsx   # כותרת סקשן
│   │   │   └── KosherBadge.tsx    # תג כשרות
│   │   │
│   │   ├── illustrations/
│   │   │   ├── AnimatedCharacter.tsx   # wrapper לאנימציית דמות
│   │   │   ├── FloatingElement.tsx     # אלמנט צף (parallax)
│   │   │   ├── ScrollReveal.tsx        # reveal on scroll
│   │   │   └── IllustrationComposition.tsx  # קומפוזיציה לוגו+איור
│   │   │
│   │   └── shared/
│   │       ├── Map.tsx            # Google Maps
│   │       ├── InstagramFeed.tsx  # Instagram API/embed
│   │       └── ScrollToTop.tsx
│   │
│   ├── lib/
│   │   ├── utils.ts           # utility functions
│   │   ├── constants.ts       # קבועים (צבעים, שעות, כתובות)
│   │   └── animations.ts      # Framer Motion variants
│   │
│   ├── hooks/
│   │   ├── useScrollSection.ts    # מעקב אחר סקשן פעיל
│   │   ├── useDirection.ts        # RTL/LTR detection
│   │   └── useMediaQuery.ts       # responsive breakpoints
│   │
│   ├── i18n/
│   │   ├── config.ts          # הגדרות i18n
│   │   ├── request.ts         # next-intl request config
│   │   └── routing.ts         # locale routing
│   │
│   ├── messages/
│   │   ├── he.json            # תרגומים עברית
│   │   └── en.json            # תרגומים אנגלית
│   │
│   ├── types/
│   │   ├── menu.ts            # Menu item types
│   │   └── common.ts          # Shared types
│   │
│   └── styles/
│       └── fonts.ts           # Font definitions
│
├── .env.local                 # Environment variables
├── next.config.ts             # Next.js config עם i18n
├── tailwind.config.ts         # Tailwind עם custom colors
├── tsconfig.json
├── package.json
└── README.md
```

---

## 3. הגדרות ראשיות

### 3.1 next.config.ts

```typescript
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'instagram.com',
      },
      {
        protocol: 'https',
        hostname: '*.cdninstagram.com',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
```

### 3.2 tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        juju: {
          coral: '#E69386',
          'coral-light': '#F0B5AC',
          'coral-dark': '#C97A6F',
          yellow: '#F6CB46',
          'yellow-light': '#F9DC7E',
          'yellow-dark': '#D4AD2E',
          green: '#68B899',
          'green-light': '#8DCDB3',
          'green-dark': '#4E9A7D',
          black: '#000000',
          'dark-bg': '#0A0A0A',
          'dark-surface': '#1A1A1A',
        },
      },
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

### 3.3 i18n/config.ts

```typescript
export const locales = ['he', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'he';

export const localeNames: Record<Locale, string> = {
  he: 'עברית',
  en: 'English',
};

export const localeDirection: Record<Locale, 'rtl' | 'ltr'> = {
  he: 'rtl',
  en: 'ltr',
};
```

### 3.4 i18n/routing.ts

```typescript
import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale } from './config';

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'as-needed', // /he/ נסתר כי זה default
});
```

### 3.5 i18n/request.ts

```typescript
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
```

---

## 4. קומפוננטות מפתח — הנחיות לפיתוח

### 4.1 Root Layout — `app/[locale]/layout.tsx`

```typescript
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { localeDirection } from '@/i18n/config';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = localeDirection[locale as keyof typeof localeDirection];

  return (
    <html lang={locale} dir={dir}>
      <body className={dir === 'rtl' ? 'font-heebo' : 'font-body'}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

### 4.2 Home Page — `app/[locale]/page.tsx`

```typescript
import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { MenuSection } from '@/components/sections/MenuSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { InstagramSection } from '@/components/sections/InstagramSection';
import { LocationSection } from '@/components/sections/LocationSection';

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
    </>
  );
}
```

### 4.3 Header / Navigation

**התנהגות:**
- Fixed/sticky top
- רקע שקוף ב-hero, הופך ל-solid בגלילה
- לוגו (וריאנט horizontal) בצד ימין (RTL) / שמאל (LTR)
- ניווט: אודות | תפריט | גלריה | מיקום
- Language switcher (עב/EN) + אייקון אינסטגרם
- Hamburger menu במובייל

```typescript
// הנחיה לפיתוח:
// 1. שימוש ב-useScrollSection hook לזיהוי הסקשן הפעיל
// 2. smooth scroll ב-click על לינקים (behavior: 'smooth')
// 3. dir-aware positioning — כל הפוזיציות מתהפכות ב-RTL
// 4. Mobile menu: slide-in מימין (RTL) / משמאל (LTR)
```

### 4.4 Hero Section

**עיצוב:**
- Full viewport height (100vh)
- רקע כהה (#0A0A0A) או תמונה/וידאו מעומעם
- לוגו JUJU גדול במרכז (וריאנט stacked)
- אילוסטרציית דמות בצדדים — אנימציית כניסה
- טקסט תגלין מתחת ללוגו
- CTA button(s) בתחתית
- Scroll indicator (חץ/עיגול) מאופשר אנימציה

```typescript
// הנחיות לאנימציה:
// 1. לוגו: fade-in + scale מ-0.8 ל-1 (duration: 0.8s, delay: 0.2s)
// 2. איור שמאל: slide-in מימין (delay: 0.5s)
// 3. איור ימין: slide-in משמאל (delay: 0.7s)
// 4. טקסט: fade-in + slide-up (delay: 1s)
// 5. CTA: fade-in (delay: 1.2s)
// 6. Parallax קל על האילוסטרציות בגלילה
```

### 4.5 Menu Section

**עיצוב:**
- רקע לבן
- כותרת סקשן עם אלמנט איור קטן לצידה
- קטגוריות מוצגות כטאבים / כפתורים אופקיים
- כרטיסי מנות (שם + תיאור + מחיר) בגריד
- Hover effect עם שינוי צבע רקע (coral/green/yellow לפי קטגוריה)

```typescript
// מבנה נתוני תפריט:
interface MenuItem {
  id: string;
  nameHe: string;
  nameEn: string;
  descriptionHe: string;
  descriptionEn: string;
  price: number;
  category: 'noodles' | 'dimsum' | 'sushi' | 'buns' | 'sides' | 'drinks';
  isNew?: boolean;
  isPopular?: boolean;
  image?: string;  // אופציונלי — רק למנות נבחרות
}

interface MenuCategory {
  id: string;
  nameHe: string;
  nameEn: string;
  color: 'coral' | 'yellow' | 'green';  // צבע מותג לקטגוריה
  illustration: string;  // SVG path
  items: MenuItem[];
}
```

### 4.6 Illustrations System

**גישה:**
- כל האילוסטרציות כ-SVG inline (לא img) — מאפשר אנימציה וצביעה
- קומפוננטת wrapper לכל דמות עם Framer Motion
- אלמנטים צפים (floating elements) ברקע של חלק מהסקשנים
- Scroll-triggered animations

```typescript
// AnimatedCharacter.tsx — דוגמה:
'use client';

import { motion } from 'framer-motion';

interface Props {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right';
}

export function AnimatedCharacter({ 
  src, alt, className, delay = 0, direction = 'left' 
}: Props) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: direction === 'left' ? -100 : 100 
      }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className={className}
    >
      <img src={src} alt={alt} className="w-full h-auto" />
    </motion.div>
  );
}
```

```typescript
// FloatingElement.tsx — אלמנט צף ברקע:
'use client';

import { motion } from 'framer-motion';

export function FloatingElement({ 
  children, 
  duration = 6,
  distance = 20 
}: {
  children: React.ReactNode;
  duration?: number;
  distance?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
```

---

## 5. תרגומים — מבנה JSON

### messages/he.json

```json
{
  "metadata": {
    "title": "JUJU Asian Kitchen | מטבח אסייתי בממילא ירושלים",
    "description": "JUJU - מטבח אסייתי איכותי בקניון ממילא, ירושלים. נודלס, דימסאם, סושי ועוד. כשר למהדרין."
  },
  "nav": {
    "about": "אודות",
    "menu": "תפריט",
    "gallery": "גלריה",
    "location": "מיקום",
    "instagram": "אינסטגרם"
  },
  "hero": {
    "tagline": "מטבח אסייתי. ממילא, ירושלים.",
    "cta_menu": "לתפריט",
    "cta_location": "איפה אנחנו"
  },
  "about": {
    "title": "הסיפור שלנו",
    "text": "JUJU הוא מטבח אסייתי איכותי בלב ממילא, ירושלים. אוכל רחוב שמגיע מהרחובות של טוקיו, בנגקוק וסיאול — מבושל מאפס, מוגש מהר, כשר למהדרין.",
    "highlight": "כי אוכל טוב לא צריך לקחת שעה."
  },
  "menu": {
    "title": "מה אוכלים",
    "categories": {
      "noodles": "נודלס",
      "dimsum": "דימסאם",
      "sushi": "סושי ומאקי",
      "buns": "באנים",
      "sides": "צדיות",
      "drinks": "שתייה"
    },
    "new": "חדש",
    "popular": "פופולרי",
    "full_menu": "לתפריט המלא"
  },
  "gallery": {
    "title": "מאחורי הקלעים"
  },
  "instagram": {
    "title": "עוקבים אחרינו",
    "follow": "לאינסטגרם"
  },
  "location": {
    "title": "בואו לאכול",
    "address": "קניון ממילא, ירושלים",
    "hours_title": "שעות פעילות",
    "sun_thu": "ראשון-חמישי",
    "fri": "שישי",
    "sat": "מוצ\"ש",
    "kosher": "כשר למהדרין",
    "navigate": "נווט אלינו"
  },
  "footer": {
    "rights": "© 2026 JUJU Asian Kitchen. כל הזכויות שמורות.",
    "kosher_note": "כשר למהדרין"
  }
}
```

### messages/en.json

```json
{
  "metadata": {
    "title": "JUJU Asian Kitchen | Asian Street Food in Mamilla, Jerusalem",
    "description": "JUJU - Quality Asian street kitchen in Mamilla Mall, Jerusalem. Noodles, dim sum, sushi and more. Strictly kosher."
  },
  "nav": {
    "about": "About",
    "menu": "Menu",
    "gallery": "Gallery",
    "location": "Location",
    "instagram": "Instagram"
  },
  "hero": {
    "tagline": "Asian Street Kitchen. Mamilla, Jerusalem.",
    "cta_menu": "See Menu",
    "cta_location": "Find Us"
  },
  "about": {
    "title": "Our Story",
    "text": "JUJU is a quality Asian kitchen in the heart of Mamilla, Jerusalem. Street food inspired by the alleys of Tokyo, Bangkok and Seoul — made from scratch, served fast, strictly kosher.",
    "highlight": "Because great food doesn't need to take an hour."
  },
  "menu": {
    "title": "The Menu",
    "categories": {
      "noodles": "Noodles",
      "dimsum": "Dim Sum",
      "sushi": "Sushi & Maki",
      "buns": "Buns",
      "sides": "Sides",
      "drinks": "Drinks"
    },
    "new": "New",
    "popular": "Popular",
    "full_menu": "Full Menu"
  },
  "gallery": {
    "title": "Behind the Scenes"
  },
  "instagram": {
    "title": "Follow the flavor",
    "follow": "Follow on Instagram"
  },
  "location": {
    "title": "Come Eat",
    "address": "Mamilla Mall, Jerusalem",
    "hours_title": "Opening Hours",
    "sun_thu": "Sun-Thu",
    "fri": "Fri",
    "sat": "Sat Night",
    "kosher": "Strictly Kosher (Mehadrin)",
    "navigate": "Get Directions"
  },
  "footer": {
    "rights": "© 2026 JUJU Asian Kitchen. All rights reserved.",
    "kosher_note": "Strictly Kosher (Mehadrin)"
  }
}
```

---

## 6. עיצוב ו-Design System

### 6.1 Design Tokens (Tailwind)

```
# צבעים ראשיים (מהספר המיתוגי)
--juju-coral:    #E69386
--juju-yellow:   #F6CB46
--juju-green:    #68B899
--juju-black:    #000000

# רקעים
--bg-light:      #FFFFFF
--bg-dark:       #0A0A0A
--bg-surface:    #1A1A1A
--bg-muted:      #F5F5F5

# טקסט
--text-primary:  #000000    (על רקע בהיר)
--text-inverse:  #FFFFFF    (על רקע כהה)
--text-muted:    #666666
```

### 6.2 טיפוגרפיה

**עברית:**
- כותרות: Heebo Black (900)
- גוף: Heebo Regular (400) / Medium (500)
- סייזינג: clamp() responsive

**אנגלית:**
- כותרות: פונט display (להתאים ללוגו — rounded, bold)
- גוף: Inter / DM Sans
- הלוגו עצמו בפונט ייחודי — לא לשימוש כטקסט רץ

**סולם גדלים:**

```css
/* Responsive type scale */
--text-hero:    clamp(3rem, 8vw, 6rem);      /* Hero headline */
--text-h1:      clamp(2rem, 5vw, 3.5rem);    /* Section titles */
--text-h2:      clamp(1.5rem, 3vw, 2rem);    /* Subsection titles */
--text-body:    clamp(1rem, 1.2vw, 1.125rem); /* Body text */
--text-small:   clamp(0.875rem, 1vw, 1rem);  /* Small text / prices */
```

### 6.3 Breakpoints

```
sm:  640px   — טלפון גדול
md:  768px   — טאבלט
lg:  1024px  — דסקטופ קטן
xl:  1280px  — דסקטופ
2xl: 1536px  — מסך גדול
```

### 6.4 Section Layout Pattern

כל סקשן עוקב אחר מבנה אחיד:

```typescript
function SectionTemplate({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section
      id={id}
      className="relative min-h-screen py-20 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
      {/* אלמנטי איור ברקע — מחוץ ל-z-10 */}
    </section>
  );
}
```

---

## 7. ביצועים ו-Optimization

### 7.1 תמונות
- שימוש ב-`next/image` עם `priority` ל-hero
- WebP/AVIF אוטומטי
- Lazy loading לכל מה שמתחת ל-fold
- placeholder="blur" עם blurDataURL

### 7.2 SVG Illustrations
- Inline SVG (לא `<img>`) — מאפשר אנימציה CSS/Framer Motion
- Tree-shaking — רק האילוסטרציות שבשימוש
- SVGO optimization בתהליך build

### 7.3 Fonts
- `next/font` לטעינה אופטימלית
- `font-display: swap`
- Subset עברי בלבד ל-Heebo

### 7.4 Code Splitting
- Dynamic import לסקשנים מתחת ל-fold
- Lazy load של Framer Motion animations
- Map component: dynamic import (no SSR)

```typescript
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/shared/Map'), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-100 animate-pulse" />,
});

const InstagramFeed = dynamic(
  () => import('@/components/shared/InstagramFeed'),
  { ssr: false }
);
```

### 7.5 יעדי Lighthouse
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## 8. Deployment

### 8.1 Vercel (מומלץ)

**יתרונות:**
- אינטגרציה מלאה עם Next.js (אותה חברה)
- Edge Functions לביצועים
- Preview deployments אוטומטיים
- Analytics מובנה

**הגדרה:**
```bash
# Install Vercel CLI
pnpm i -g vercel

# Deploy
vercel --prod
```

**Environment Variables:**
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=xxx
NEXT_PUBLIC_INSTAGRAM_TOKEN=xxx  # אם משתמשים ב-API
NEXT_PUBLIC_SITE_URL=https://juju.co.il
```

### 8.2 Cloudflare Pages (אלטרנטיבה)

**יתרונות:**
- CDN גלובלי מהיר
- חינמי לפרויקטים קטנים
- DDoS protection מובנה

**הגדרה:**
```bash
# שימוש ב-@cloudflare/next-on-pages
pnpm add -D @cloudflare/next-on-pages

# wrangler.toml
# [build]
# command = "npx @cloudflare/next-on-pages"
```

**הערה:** Cloudflare Pages לא תומך ב-100% מפיצ'רי Next.js. אם משתמשים ב-ISR או Route Handlers מורכבים, Vercel עדיף.

---

## 9. שלבי פיתוח מוצעים

### שלב 1: Setup (יום 1)
- [ ] Init Next.js project עם TypeScript
- [ ] הגדרת Tailwind עם custom colors
- [ ] הגדרת next-intl (he + en)
- [ ] הגדרת font loading
- [ ] מבנה תיקיות בסיסי
- [ ] Deploy ריק ל-Vercel

### שלב 2: Layout + Navigation (יום 2)
- [ ] Header component עם logo
- [ ] Mobile menu
- [ ] Language switcher
- [ ] Footer
- [ ] Smooth scroll navigation
- [ ] RTL/LTR testing

### שלב 3: Hero + About (יום 3)
- [ ] Hero section עם לוגו + רקע
- [ ] אינטגרציית אילוסטרציות SVG
- [ ] Framer Motion entry animations
- [ ] About section
- [ ] Responsive testing

### שלב 4: Menu Section (יום 4)
- [ ] Menu data structure
- [ ] Category tabs/filters
- [ ] Menu cards grid
- [ ] Hover effects
- [ ] אנימציות מתאימות

### שלב 5: Gallery + Instagram (יום 5)
- [ ] Gallery grid עם lightbox
- [ ] Instagram feed integration
- [ ] Lazy loading

### שלב 6: Location + Contact + Polish (יום 6)
- [ ] Google Maps embed
- [ ] Hours + address section
- [ ] Kosher badge
- [ ] SEO meta tags
- [ ] Schema.org structured data
- [ ] OG image

### שלב 7: Testing + Launch (יום 7)
- [ ] Lighthouse audit
- [ ] Cross-browser testing
- [ ] Mobile testing (iOS Safari, Android Chrome)
- [ ] RTL full review
- [ ] Accessibility check
- [ ] Final deploy

---

## 10. פקודת Init לקלוד קוד

```bash
# יצירת הפרויקט:
pnpm create next-app@latest juju-website --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

cd juju-website

# התקנת dependencies:
pnpm add next-intl framer-motion
pnpm add -D @svgr/webpack

# יצירת מבנה תיקיות:
mkdir -p src/{components/{layout,sections,ui,illustrations,shared},lib,hooks,i18n,messages,types,styles}
mkdir -p public/{images/{hero,food,gallery},illustrations/{characters,elements,compositions},fonts,logo}
```

---

## 11. הערות לפיתוח

### חשוב — RTL:
- כל ה-`margin-left`/`margin-right` צריכים להיות `ms-`/`me-` (logical properties)
- כל ה-`padding-left`/`padding-right` → `ps-`/`pe-`
- `text-align: start` במקום `left`
- Flexbox `flex-row-reverse` במקרים ספציפיים
- Tailwind 4 תומך ב-logical properties מובנה

### חשוב — אילוסטרציות:
- לקבל מהמעצב SVG נקיים עם path IDs ברורים
- לוודא שה-SVG optimized (SVGO)
- לתעד אילו חלקים באיור ניתנים לאנימציה (ראש, יד, אביזר)
- להגדיר viewBox אחיד לכל הדמויות

### חשוב — כשרות:
- תג הכשרות צריך להופיע ב-footer ובסקשן location
- לא "בפנים" ולא דומיננטי מדי — חלק טבעי מהמידע
- לוודא מול הלקוח מי הרבנות המפקחת

### חשוב — Instagram:
- Instagram Basic Display API הופסק. אפשרויות:
  1. Instagram oEmbed API (מוגבל)
  2. Facebook Graph API (דורש אישור)
  3. שירות צד שלישי (Behold, Elfsight)
  4. Manual embed / תמונות סטטיות שמתעדכנות
- המלצה: שירות כמו Behold.so שמספק widget פשוט
