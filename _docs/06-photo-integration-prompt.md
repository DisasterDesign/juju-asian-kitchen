# JUJU Asian Kitchen — פרומפט לקלוד קוד: שילוב תמונות ואיורים באתר

## הקשר

האתר בנוי ב-Next.js 15, App Router, TypeScript, Tailwind CSS 4, Framer Motion.
האתר חי ב: https://juju-asian-kitchen.pages.dev
כל הסקשנים קיימים ועובדים, אבל רוב התמונות הן placeholders (גרדיאנטים צבעוניים).

**עכשיו יש לנו:**
- תמונות מנות אמיתיות בתיקייה `photos/` (vibe-shots + informative)
- איורים באיכות גבוהה מהספר המיתוגי בתיקייה `illustrations/`

## מטרה

שלב את כל התמונות והאיורים האמיתיים באתר, החלף את כל ה-placeholders.

---

## שלב 1: העתקת assets ל-public/

### תמונות אוכל לגלריה ולתפריט

```bash
# העתק 8-12 תמונות אוכל מגוונות לגלריה
# בחר מתוך photos/vibe-shots/ ו-photos/informative/ את התמונות הטובות ביותר
# ודא מגוון: נודלס, באנס, סושי, סלטים, אווירה, צילום ידיים

cp photos/informative/SELECTED.JPG public/images/gallery/
cp photos/vibe-shots/SELECTED.JPG public/images/gallery/

# שנה שמות לשמות נקיים בלי רווחים:
# gallery-01.jpg, gallery-02.jpg, ... gallery-12.jpg
```

### תמונות אוכל לתפריט (אופציונלי)

```bash
# העתק תמונת מנה אחת לכל קטגוריה (6 קטגוריות)
cp photos/informative/noodle-photo.JPG public/images/food/noodles.jpg
cp photos/informative/dimsum-photo.JPG public/images/food/dimsum.jpg
# וכו' לכל קטגוריה: sushi.jpg, buns.jpg, sides.jpg, drinks.jpg
```

### איורים

```bash
# העתק את הקומפוזיציות הטובות ביותר
cp illustrations/composition-chef-noodle-girl.png public/illustrations/compositions/
cp illustrations/all-characters-sheet.png public/illustrations/characters/
cp illustrations/sushi-boy-closeup.png public/illustrations/characters/
cp illustrations/composition-chef-cat-green.png public/illustrations/compositions/
```

**חשוב:** שנה שמות קבצים בלי רווחים. השתמש ב-kebab-case.

---

## שלב 2: עדכון GallerySection — החלפת placeholders בתמונות אמיתיות

**קובץ:** `src/components/sections/GallerySection.tsx`

### מצב נוכחי (שורות 8-17):
```typescript
const placeholders = [
  { gradient: 'from-juju-coral to-juju-coral-dark', aspect: 'aspect-square' },
  // ... 8 gradient placeholders
];
```

### מצב רצוי:
```typescript
const galleryImages = [
  { src: '/images/gallery/gallery-01.jpg', alt: 'נודלס ראמן', aspect: 'aspect-square' },
  { src: '/images/gallery/gallery-02.jpg', alt: 'באנס מאודים', aspect: 'aspect-[4/5]' },
  { src: '/images/gallery/gallery-03.jpg', alt: 'סושי מגוון', aspect: 'aspect-square' },
  { src: '/images/gallery/gallery-04.jpg', alt: 'אדממה', aspect: 'aspect-[4/3]' },
  { src: '/images/gallery/gallery-05.jpg', alt: 'אווירה במסעדה', aspect: 'aspect-[4/5]' },
  { src: '/images/gallery/gallery-06.jpg', alt: 'גיוזה', aspect: 'aspect-square' },
  { src: '/images/gallery/gallery-07.jpg', alt: 'פד תאי', aspect: 'aspect-[4/3]' },
  { src: '/images/gallery/gallery-08.jpg', alt: 'קוקטייל', aspect: 'aspect-square' },
];
```

### עדכון הרנדור:
החלף את ה-gradient divs ב-Next.js `<Image>`:
```tsx
import Image from 'next/image';

{galleryImages.map((img, i) => (
  <ScrollReveal key={i} delay={i * 0.1}>
    <div className={`relative overflow-hidden rounded-2xl shadow-sm ${img.aspect}`}>
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
    </div>
  </ScrollReveal>
))}
```

---

## שלב 3: עדכון InstagramFeed — תמונות אמיתיות או embed

**קובץ:** `src/components/shared/InstagramFeed.tsx`

### אופציה A — תמונות סטטיות (פשוט ומהיר):

החלף את `PLACEHOLDER_COLORS` (שורות 6-15) במערך תמונות:

```typescript
const instagramPosts = [
  { src: '/images/gallery/gallery-01.jpg', link: 'https://www.instagram.com/p/POST_ID/' },
  { src: '/images/gallery/gallery-02.jpg', link: 'https://www.instagram.com/p/POST_ID/' },
  // ... 8 posts
];
```

והחלף את הרנדור ב:
```tsx
{instagramPosts.map((post, i) => (
  <a key={i} href={post.link || INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
     className="relative aspect-square rounded-2xl overflow-hidden group">
    <Image src={post.src} alt={`JUJU Instagram ${i + 1}`} fill className="object-cover" sizes="25vw" />
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
      <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" ...>
        {/* Instagram icon SVG */}
      </svg>
    </div>
  </a>
))}
```

### אופציה B — Behold.so embed (דינמי):
אם ללקוח יש חשבון Behold.so, שנה ל-iframe embed. אחרת השאר סטטי.

---

## שלב 4: עדכון HeroSection — הוספת איור ראשי

**קובץ:** `src/components/sections/HeroSection.tsx`

### מצב נוכחי:
רק לוגו SVG (JujuLogo) על רקע גרדיאנט כהה. אין WOW moment.

### מצב רצוי:
הוסף דמות מאוירת ב-Hero ליד הלוגו. השתמש ב-AnimatedCharacter component שכבר קיים.

```tsx
import Image from 'next/image';
import { AnimatedCharacter } from '@/components/illustrations/AnimatedCharacter';

// בתוך ה-Hero, אחרי הלוגו וה-CTA:
<div className="relative">
  {/* Illustration - positioned to the side */}
  <AnimatedCharacter
    src="/illustrations/compositions/composition-chef-noodle-girl.png"
    alt="JUJU Chef Character"
    width={500}
    height={600}
    direction="left"
    delay={0.5}
    className="absolute -left-20 bottom-0 hidden lg:block opacity-90"
  />

  {/* Existing logo + CTA content */}
  <JujuLogo variant="stacked" color="coral" className="..." />
  {/* ... */}
</div>
```

**שים לב:**
- הדמות צריכה להופיע רק ב-desktop (hidden lg:block)
- אנימציית כניסה מהצד (direction="left") עם delay
- opacity-90 כדי שלא תתחרה בלוגו
- position absolute כדי לא לשבור את ה-layout

**לחלופין — שילוב וידאו Veo (אם מוכן):**
```tsx
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
>
  <source src="/videos/hero-chef-animation.webm" type="video/webm" />
  <source src="/videos/hero-chef-animation.mp4" type="video/mp4" />
</video>
```

---

## שלב 5: עדכון AboutSection — שיפור הצגת האיורים

**קובץ:** `src/components/sections/AboutSection.tsx`

### מצב נוכחי:
תמונה אחת סטטית של כל הדמויות (illustrations-sheet.png), עם FloatingElement.

### שיפור:
החלף בקומפוזיציה מרוכזת — רק דמות אחת (לא כל הגיליון):

```tsx
<FloatingElement duration={8} distance={14}>
  <Image
    src="/illustrations/compositions/composition-chef-noodle-girl.png"
    alt="JUJU Character"
    width={600}
    height={500}
    className="w-full max-w-lg mx-auto"
  />
</FloatingElement>
```

או שלוש דמויות נפרדות עם stagger animation:
```tsx
<div className="flex items-end justify-center gap-4">
  <ScrollReveal delay={0.1}>
    <Image src="/illustrations/characters/sushi-boy-closeup.png" alt="" width={200} height={250} />
  </ScrollReveal>
  <ScrollReveal delay={0.3}>
    <Image src="/illustrations/compositions/composition-chef-noodle-girl.png" alt="" width={300} height={400} />
  </ScrollReveal>
  <ScrollReveal delay={0.5}>
    <Image src="/illustrations/compositions/composition-chef-cat-green.png" alt="" width={200} height={250} />
  </ScrollReveal>
</div>
```

---

## שלב 6: הוספת תמונות לתפריט (אופציונלי)

**קבצים:** `src/components/ui/MenuCard.tsx` + `src/lib/menu-data.ts`

### עדכון MenuCard.tsx — הוספת תמונה:

```tsx
import Image from 'next/image';

// בתוך הקומפוננטה, אם יש תמונה:
{item.image && (
  <div className="relative h-32 rounded-xl overflow-hidden mb-3">
    <Image
      src={item.image}
      alt={isHebrew ? item.nameHe : item.nameEn}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  </div>
)}
```

### עדכון menu-data.ts — הוספת image לכל פריט:

```typescript
{
  id: 'tonkotsu-ramen',
  nameHe: 'טונקוצו ראמן',
  nameEn: 'Tonkotsu Ramen',
  // ... existing fields
  image: '/images/food/tonkotsu-ramen.jpg',
}
```

**הערה:** זה אופציונלי. ניתן להשאיר את התפריט ללא תמונות ולהוסיף רק תמונה אחת לכל קטגוריה (header image).

---

## שלב 7: אופטימיזציה

### next.config.ts — ודא שיש image optimization:

```typescript
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
```

### תמונות — resize לפני העלאה:
```bash
# Gallery images: 1200px wide max, 85% quality
# Food images: 800px wide max, 85% quality
# Illustrations: keep original (vector-rendered PNGs)

# אם יש ImageMagick:
for f in public/images/gallery/*.jpg; do
  convert "$f" -resize 1200x -quality 85 "$f"
done
```

### next/image priorities:
```tsx
// Hero images: priority={true}
// Above-fold images: loading="eager"
// Below-fold images: loading="lazy" (default)
```

---

## שלב 8: בדיקה

לאחר כל השינויים:

```bash
npm run dev          # בדוק שהאתר עולה ללא שגיאות
# פתח http://localhost:3000 ו- http://localhost:3000/en
# בדוק:
# ✅ Hero — נראה מהמם עם איור/וידאו
# ✅ About — איור מרוכז (לא גיליון שלם)
# ✅ Gallery — תמונות אמיתיות, masonry grid תקין
# ✅ Instagram — תמונות אמיתיות עם hover effect
# ✅ Menu — (אם נוספו תמונות) מציג נכון
# ✅ Mobile — responsive, תמונות נטענות נכון
# ✅ RTL/LTR — עובד בשני הכיוונים
# ✅ Performance — Lighthouse > 90

npm run build        # ודא שה-build עובר
npm run pages:ship   # deploy לCloudflare
```

---

## סיכום הקבצים לשנות

| קובץ | פעולה |
|------|-------|
| `public/images/gallery/` | העתק 8-12 תמונות מנות |
| `public/images/food/` | העתק 6 תמונות לקטגוריות (אופציונלי) |
| `public/illustrations/compositions/` | העתק 2-3 קומפוזיציות |
| `src/components/sections/GallerySection.tsx` | החלף gradients ב-Image components |
| `src/components/shared/InstagramFeed.tsx` | החלף gradients בתמונות אמיתיות |
| `src/components/sections/HeroSection.tsx` | הוסף איור/וידאו Hero |
| `src/components/sections/AboutSection.tsx` | החלף illustrations-sheet בקומפוזיציה |
| `src/components/ui/MenuCard.tsx` | הוסף image support (אופציונלי) |
| `src/lib/menu-data.ts` | הוסף image paths (אופציונלי) |
| `next.config.ts` | ודא image optimization config |

---

## תמונות זמינות

### photos/vibe-shots/ (50 תמונות)
צילומי אווירה על רקע ורוד — נודלס, קערות, מקלות, אוכל מלמעלה

### photos/informative/ (50 תמונות)
צילומי מנות על רקע צהוב/ורוד — מנות בודדות, כוסות, edamame, באנס

### illustrations/ (10 תמונות PNG, 5760x3240)
- `all-characters-sheet.png` — כל הדמויות בגיליון אחד
- `composition-chef-noodle-girl.png` — שף + נערת נודלס עם לוגו coral
- `composition-chef-noodle-girl-yellow.png` — אותו דבר בצהוב
- `composition-chef-cat-green.png` — שף + דמות חתול עם לוגו ירוק
- `sushi-boy-closeup.png` — קלוזאפ נער סושי
- `circle-logo-sushi-delivery.png` — לוגו עגול עם דמות
- `bag-mockup-*.png` — מוקאפים של שקיות (3 וריאציות)
