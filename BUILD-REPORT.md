# Maya Bennett Photography — Build Report

Demo website for a **fictional** luxury wedding photographer (San Diego, worldwide).
Structure, layout, section order and animation patterns mirror the studied reference
site; **every word of copy, every name, venue, vendor, publication, testimonial and
price is invented**. All photography is Pexels stock. No reference text, images,
names or branding was copied.

- Project: `~/workspace/kayla-fisher-demo/maya-bennett/`
- Blueprint: `~/workspace/kayla-fisher-demo/STUDY-NOTES.md`
- Photo manifest: `~/workspace/kayla-fisher-demo/photos/MANIFEST.md` (+ `manifest.json`)
- QA script: `~/workspace/kayla-fisher-demo/qa/qa-mb.js`, screenshots in `qa/shots/`
- Stack: Astro 5 + Tailwind 3 + GSAP/ScrollTrigger, self-hosted Playfair Display +
  Inter, zero external requests, no Lenis, no parallax.
- Build: `npm run build` → 18 pages, `dist/` static output.
- Canonical URL assumed: `https://maya-bennett-photography.vercel.app/` (verify at
  deploy time; used in astro.config `site`, JSON-LD, OG tags, robots, sitemap).

## Pages (18)

| Route | Contents |
|---|---|
| `/` | 12 sections: split hero, intro split + portrait carousel, category strip, about teaser, 3 B&W offering cards, olive Behind the Lens band, The Approach (scrub headline + overlapping photos + testimonial slider), black Explore Weddings band + drifting strip, Featured Projects (6 rows + hover-swap preview), press band, More to Explore (2 blog cards), final CTA split + giant marquee |
| `/about` | Cream hero + B&W detail photo + 2 bio paragraphs, 2 testimonials, olive Behind the Lens band (right-aligned text, film-camera photo), full-bleed photo + quote, giant split headline, 2 cards |
| `/portfolio` | Black hero + PORTFOLIO + tall central image + WEDDINGS/EDITORIAL switcher (flanking on desktop, row below image on mobile), tagline, HIGHLIGHTS 5-strip carousel over dark B&W bg, testimonial. No grid, no lightbox |
| `/services` | Black hero + photo, statement, staggered 3-column values, testimonial slider with clickable client names, 3-band accordion (WEDDINGS olive / PORTRAITS black / EDITORIAL pale, first open), THIS IS IMPORTANT 01–05 reveals, CTA |
| `/experience` | Split hero (olive panel + photo), sub-line + paragraph, B&W split, FROM THE HEART testimonial, 2 numbered alternating process rows, 4 process paragraphs, YOU SHOULD KNOW + FAQ intro + Inquire. No prices |
| `/blog-home` | Hero + featured post + 3-card grid + View All → /journal |
| `/journal` | Archive: category chips (All/Weddings/Engagements/Planning/Personal/Business) + pill search, both working client-side, 4 post cards |
| `/journal/<slug>` ×4 | Engagement planning; why film belongs; choosing a venue; questions to ask. ~300–400 original words, 2 inline images, pull-quote, back link |
| `/<couple-slug>` ×6 | Shared template + data file: centred title, ABOUT THE EVENT + VENDORS, full-bleed B&W hero, offset-pair gallery (6 images, no lightbox/captions), testimonial, INQUIRE TODAY + BACK TO INDEX |
| `/contact` | Split hero (faded B&W photo + invented press list left; pale panel "To: Maya" + rotating WORK WITH US badge right), 15-field form in exact brief order, SEND disabled until required valid, mailto fallback, More to Explore |

Shared on every page: collapsing header + full-screen menu overlay, footer (demo
disclosure, monogram + tagline, nav columns, giant cropped MAYA BENNETT wordmark,
marquee band, 14-tile Instagram grid linking to the fictional profile).

## Components / data

- `src/layouts/BaseLayout.astro` — head (SEO/OG/JSON-LD/font preloads), skip link,
  header, footer, `site.js` import.
- `src/components/` — Pic (srcset/sizes/lazy/eager/bw), Monogram, Marquee,
  CrossfadeCarousel, TestimonialSlider, FeaturedProjects, BlogCard, Header, Footer.
- `src/data/site.ts` — all original copy: nav, testimonials (8 invented couples),
  stories + vendors, posts, service bands, important points, experience steps.
- `src/data/images.ts` — semantic slot map → pool files (verified vs manifest).
- `src/scripts/site.js` — slim bar, menu overlay, GSAP reveals + scrub, carousels,
  featured swap, highlights + switcher, accordion, important rows, journal filters,
  form validation + mailto submit. All initial hidden states set from JS only, so
  no-JS still shows content. `prefers-reduced-motion` respected.

## Photos — Pexels IDs + verdicts (48 approved, 35 rejected)

Baked: `public/images/pool/pool-NN.webp` (1200px long edge) + `pool-NN-480.webp`
+ `pool-NN-sq.webp` (600×600), WebP q72, 144 files, 5.0 MiB. Every candidate was
reviewed in labeled montages; one names violation was caught by zoom check and
rejected. Full descriptions in `photos/MANIFEST.md`.

| Pool | Pexels ID | Verdict |
|---|---|---|
| 01 | 39334930 | APPROVED — close bridal portrait under veil (Experience B&W split, IG tile) |
| 02 | 17057198 | APPROVED — camera screen showing couple under arch (blog inline, IG tile) |
| 03 | 17185353 | APPROVED — female photographer with DSLR (about teaser, IG tile) |
| 04 | 27517598 | APPROVED — vintage film camera (About band, film blog card, IG tile) |
| 05 | 3117228 | APPROVED — dense ivy texture (IG tile) |
| 06 | 11450703 | APPROVED — bride hugging groom, warm light (intro carousel, story 1 + 6) |
| 07 | 13617315 | APPROVED — forehead-to-forehead, warm lights (intro carousel, offering 01, story 2) |
| 08 | 19681533 | APPROVED — groom laughing, greenery (intro carousel, Behind the Lens, story 3) |
| 09 | 32705154 | APPROVED — couple, white wall, ballgown (Approach arch, editorial set) |
| 10 | 6679832 | APPROVED — bride embracing groom, plaid suit (featured 1, story 1, highlights) |
| 11 | 752805 | APPROVED — tuxedo + tiara portrait (featured 2, story 2, editorial set) |
| 12 | 37380420 | APPROVED — smiling couple, garden palms (featured 3, story 3 + 5, editorial set) |
| 13 | 10279235 | APPROVED — church ceremony, golden altar (featured 4, story 4, IG tile) |
| 14 | 15511100 | APPROVED — couple at ornate altar, from behind (IG tile) |
| 15 | 10840316 | APPROVED — B&W bride under veil between dark silhouettes (editorial set, blog inline) |
| 16 | 35536264 | APPROVED — B&W veil close-up, eyes partly covered (offering 03, editorial set) |
| 17 | 37628931 | APPROVED — bride in profile, lace gown, spotlight halo (about card 1, editorial set, story 6) |
| 18 | 31266993 | APPROVED — bride in profile by window, tiara + veil (portfolio hero) |
| 19 | 26741246 | APPROVED — bride on staircase (highlights weddings, story 1) |
| 20 | 27140154 | APPROVED — bride seated, white roses (highlights, story 2, blog inline) |
| 21 | 35865066 | APPROVED — bride seated by doorway (HERO RIGHT, story 3) |
| 22 | 2965275 | APPROVED — bride under floral arch (offering 02, contact hero, highlights, story 4) |
| 23 | 40479995 | APPROVED — first-look moment (featured 5, story 4 + 5, highlights, values) |
| 24 | 39944195 | APPROVED — confetti dance (Approach B&W, highlights, story 5) |
| 25 | 15865452 | APPROVED — HERO LEFT, wheat field, pale sky (also OG image source) |
| 26 | 12341524 | APPROVED — meadow dancing, overcast (blog card 1, blog hero 1, experience step 1) |
| 27 | 14429585 | APPROVED — dirt road, cloudy sky (final CTA inset, B&W) |
| 28 | 10123068 | APPROVED — outdoor floral arch ceremony (explore strip, story hero 1, step 2) |
| 29 | 17529921 | APPROVED — church ring exchange (story hero 2) |
| 30 | 28123410 | APPROVED — first dance, illuminated floor (services hero, explore strip, story hero 3) |
| 31 | 15964954 | APPROVED — night dancing, string lights (experience hero, explore strip, story hero 4) |
| 32 | 38401923 | APPROVED — ivy on concrete wall (final CTA photo) |
| 33 | 15530615 | APPROVED — seaside reception table (explore strip, about card 2, story hero 5, blog hero 3) |
| 34 | 29040997 | APPROVED — navy/white reception tables (story 1, blog inline) |
| 35 | 8063134 | APPROVED — reception speeches hall (story 2, blog inline) |
| 36 | 16228863 | APPROVED — blush bridesmaids walking (story 3) |
| 37 | 32187159 | APPROVED — sage bridesmaids on lawn (story 4) |
| 38 | 6141769 | APPROVED — pink bridesmaids, brick wall (story 5) |
| 39 | 7777910 | APPROVED — couple against fairy lights (explore strip, about full-bleed, story 6) |
| 40 | 9517406 | APPROVED — couple in sunlit forest (explore strip, portfolio bg, story hero 6, blog hero 4) |
| 41 | 38788861 | APPROVED — rings on a leaf (about hero B&W, story 1 + 5) |
| 42 | 11320033 | APPROVED — B&W ring exchange on lace (story 1 + 5, blog inline) |
| 43 | 4364769 | APPROVED — rings inside bridal shoe (story 2 + 6) |
| 44 | 11474246 | APPROVED — dress lacing bow (story 2 + 6, values) |
| 45 | 31046060 | APPROVED — baby's breath bouquet (story 3, blog inline) |
| 46 | 30891127 | APPROVED — pink/white rose bouquet (story 3) |
| 47 | 11712500 | APPROVED — cake vs greenery wall + fairy lights (story 4) |
| 48 | 7711168 | APPROVED — marble cake, gold stand (story 4) |

Rejected (35, all recorded in `photos/MANIFEST.md`): 7 quality/style/names
rejects — 14474291 (South Asian attire), 19950472 / 31629944 / 38588678
(headscarf/modest styling, brief mismatch), 39904283 (too dark), 6028474
(readable Vietnamese signage), **30657132 (ring-box engraving reads real names +
date — caught by zoom check)**; 28 surplus good-quality spares held in the
manifest (incl. second film-camera shot 30939296, third photographer shot
35325793).

Incidental brand detail reviewed and accepted: the vintage FED-2 camera's
engraved model name (pool-04) and a small SONY marking on a camera body
(pool-03) are authentic parts of the photographed objects, not logos, names of
people, or advertising; both photos were approved in the montage review.

## Deviations from the brief (and why)

1. **Hero-right photo swapped during QA** (pool-01 → pool-21): pool-01's face sat
   directly under the centred headline at desktop widths. Pool-21 keeps the face
   high and the dark backdrop behind the headline; pool-01 moved to the
   Experience B&W split where no text overlays it. No overlay/gradient was added
   to the hero — white type reads directly on the photos.
2. **Portfolio switcher**: flanking words only at ≥1024px (clear of the image);
   below that a centred switcher row sits under the image, since the image nearly
   fills narrow viewports. Both sets stay in sync (JS matches by key).
3. **Highlights slide count**: 7 slides per set (5 visible + 2 stepped), centre
   largest — matches the brief's 5-strip pattern with stepping.
4. **Footer**: the brief's fictional contact placeholders (email + phone) appear
   in the footer top row alongside the demo disclosure, and in the menu overlay —
   the reference pattern shows contact details in the footer; no email/phone
   appears on the Contact page itself, per the brief.
5. **Canonical URL** `https://maya-bennett-photography.vercel.app/` is assumed
   for SEO/OG/sitemap — confirm/adjust when the real Vercel project exists.
6. **Fonts**: Playfair Display variable woff2 (normal + italic) + Inter variable
   woff2, self-hosted; no per-weight files needed.
7. **Marquee phrases**: original wording throughout ("HOLD ONTO the FEELING",
   "TRUE LOVE never FADES" was not used; final CTA marquee uses the hold-onto
   phrase; footer marquee uses the brief's generic functional phrases).

## QA

Script `qa/qa-mb.js` (Playwright, dist served on 127.0.0.1:8906): every page
loads; zero external requests; zero console errors; no horizontal overflow at
360/390/768/1024/1440/1920 on every page; header collapse + return; menu overlay
(open/close/Escape/link, desktop + mobile); carousels (step/loop/keyboard);
accordion (click + keyboard, one-open); important rows (click/hover); switcher +
highlights (step/loop/set swap); journal filters + search + empty state;
Featured Projects swap (hover + keyboard focus); form validation (SEND disabled
→ enabled, mailto status); all image URLs resolve (HTTP 200 sweep); reduced
motion (reveals visible, scrub lines ink). Screenshots: every page at 1440 +
390, full-page captures, and interaction shots in `qa/shots/`; every screenshot
eyeballed for text-over-face, overlaps and broken layouts (hero face-overlap and
switcher overlap found and fixed in the v2 pass; story-gallery stretch fixed).

Final run (17 Nov 2026, on the final build incl. all v2/v3 fixes): **184/184
checks passed**, zero failures — log at `/tmp/qa-mb-3.log` (ephemeral; rerun
`qa/qa-mb.js` to reproduce). Two earlier runs: 181/183 (lazy-image check
semantics, fixed in the script, not the site), then 184/184.
