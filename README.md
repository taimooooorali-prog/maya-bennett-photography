# Maya Bennett Photography — Demo Website

A complete multi-page demo website for a **fictional** luxury wedding photographer,
built as a portfolio piece for a web-design service. The site's structure, layout,
sections and animation patterns mirror a studied reference site; **all copy, names,
venues, testimonials, prices and branding are original inventions**, and all
photography is Pexels stock. Nothing on this site is copied from the reference.

## Stack

- Astro 5 + Tailwind CSS 3 + GSAP/ScrollTrigger (scroll reveals, headline scrub)
- Self-hosted fonts: Playfair Display (display serif) + Inter (body) — zero external requests
- Static output (`npm run build` → `dist/`), deployable to any static host / Vercel

## Pages (18)

Home, About, Portfolio, Services, Experience, Blog landing, Journal archive,
Contact, 6 wedding-story pages, 4 journal articles.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static build into dist/
```

## QA

```bash
# from dist/: python3 -m http.server 8906
# from ../qa/: node qa-mb.js   (Playwright, screenshots in qa/shots/)
```

See `BUILD-REPORT.md` for the photo manifest, page inventory, components,
and QA results.

## Content honesty

Brand, photographer, couples, venues, vendors, publications, testimonials and
prices are fictional placeholders for demonstration. Photography via Pexels.
