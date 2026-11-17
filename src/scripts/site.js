import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

/* ================================================================
   Slim header bar: appears past ~120px, hides at page top
   ================================================================ */
const slimBar = $('#slim-bar');
let ticking = false;
function updateSlimBar() {
  ticking = false;
  if (!slimBar) return;
  slimBar.dataset.visible = window.scrollY > 120 ? 'true' : 'false';
}
window.addEventListener(
  'scroll',
  () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateSlimBar);
    }
  },
  { passive: true },
);
updateSlimBar();

/* ================================================================
   Full-screen menu overlay
   ================================================================ */
const overlay = $('#menu-overlay');
let lastOpener = null;
function openMenu(opener) {
  if (!overlay) return;
  lastOpener = opener;
  overlay.classList.remove('invisible');
  overlay.inert = false;
  overlay.dataset.open = 'true';
  $$('[data-menu-open]').forEach((b) => b.setAttribute('aria-expanded', 'true'));
  document.body.style.overflow = 'hidden';
  const closeBtn = $('[data-menu-close]', overlay);
  if (closeBtn) closeBtn.focus();
}
function closeMenu() {
  if (!overlay) return;
  overlay.dataset.open = 'false';
  $$('[data-menu-open]').forEach((b) => b.setAttribute('aria-expanded', 'false'));
  document.body.style.overflow = '';
  window.setTimeout(() => {
    if (overlay.dataset.open === 'false') {
      overlay.classList.add('invisible');
      overlay.inert = true;
    }
  }, 380);
  if (lastOpener) lastOpener.focus();
}
$$('[data-menu-open]').forEach((b) => b.addEventListener('click', () => openMenu(b)));
const closeBtn = $('[data-menu-close]');
if (closeBtn) closeBtn.addEventListener('click', closeMenu);
$$('[data-menu-link]', overlay || document).forEach((a) => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && overlay && overlay.dataset.open === 'true') closeMenu();
});

/* ================================================================
   Scroll reveals (JS-set initial states only — visible without JS)
   ================================================================ */
if (!prefersReducedMotion) {
  gsap.utils.toArray('[data-reveal]').forEach((el) => {
    gsap.from(el, {
      y: 24,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });

  /* Approach headline: lines grey -> black progressively with scroll */
  const scrubLines = $$('[data-scrub-line]');
  if (scrubLines.length) {
    gsap.fromTo(
      scrubLines,
      { color: '#8a867c' },
      {
        color: '#141414',
        stagger: 0.2,
        ease: 'none',
        scrollTrigger: {
          trigger: scrubLines[0].closest('h2') || scrubLines[0],
          start: 'top 82%',
          end: 'bottom 45%',
          scrub: 0.6,
        },
      },
    );
  }
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

/* ================================================================
   Generic crossfade carousels (intro portraits, testimonial sliders)
   ================================================================ */
$$('[data-carousel]').forEach((root) => {
  const slides = $$('[data-slide]', root);
  if (slides.length < 2) return;
  let index = 0;
  const gotoBtns = $$('[data-carousel-goto]', root);
  function show(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, k) => {
      s.dataset.active = k === index ? 'true' : 'false';
    });
    gotoBtns.forEach((b, k) => {
      const active = k === index;
      b.classList.toggle('text-ink', active);
      b.classList.toggle('underline', active);
      b.classList.toggle('underline-offset-4', active);
      b.classList.toggle('text-body', !active);
      b.setAttribute('aria-current', active ? 'true' : 'false');
    });
  }
  const prev = $('[data-carousel-prev]', root);
  const next = $('[data-carousel-next]', root);
  if (prev) prev.addEventListener('click', () => show(index - 1));
  if (next) next.addEventListener('click', () => show(index + 1));
  gotoBtns.forEach((b) => b.addEventListener('click', () => show(Number(b.dataset.carouselGoto))));
  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });
});

/* ================================================================
   Featured Projects: hover / focus / click swaps preview photo
   ================================================================ */
$$('[data-featured]').forEach((root) => {
  const rows = $$('[data-fp-row]', root);
  const imgA = $('[data-fp-img-a]', root);
  const imgB = $('[data-fp-img-b]', root);
  const caption = $('[data-fp-caption]', root);
  if (!rows.length || !imgA || !imgB) return;
  let showingA = true;
  let active = 0;
  // Prefetch previews so hover swaps feel instant.
  const prefetch = () => rows.forEach((r) => {
    const im = new Image();
    im.src = r.dataset.fpImg;
  });
  if ('requestIdleCallback' in window) requestIdleCallback(prefetch);
  else window.setTimeout(prefetch, 1500);

  function setActive(i) {
    if (i === active) return;
    active = i;
    const row = rows[i];
    rows.forEach((r, k) => {
      const name = $('[data-fp-name]', r);
      const view = $('[data-fp-view]', r);
      const on = k === i;
      if (name) {
        name.classList.toggle('text-ink', on);
        name.classList.toggle('text-body', !on);
      }
      if (view) {
        view.classList.toggle('text-ink', on);
        view.classList.toggle('underline', on);
        view.classList.toggle('underline-offset-4', on);
        view.classList.toggle('text-body', !on);
      }
    });
    const hidden = showingA ? imgB : imgA;
    const shown = showingA ? imgA : imgB;
    hidden.src = row.dataset.fpImg;
    hidden.srcset = `${row.dataset.fpImg480} 480w, ${row.dataset.fpImg} 1200w`;
    hidden.alt = row.dataset.fpAlt || '';
    hidden.classList.remove('opacity-0');
    shown.classList.add('opacity-0');
    showingA = !showingA;
    if (caption) {
      const name = row.querySelector('[data-fp-name]');
      caption.textContent = name ? `${name.textContent.trim()} — ${row.dataset.fpAlt.split(' at ')[1] || ''}`.replace(/ — $/, '') : row.dataset.fpAlt;
    }
  }
  rows.forEach((r, i) => {
    r.addEventListener('mouseenter', () => setActive(i));
    r.addEventListener('focus', () => setActive(i));
    r.addEventListener('click', () => setActive(i));
  });
});

/* ================================================================
   Portfolio: WEDDINGS / EDITORIAL switcher + Highlights carousels
   ================================================================ */
function initHighlights(setEl) {
  const track = $('[data-hl-track]', setEl);
  const slides = $$('[data-hl-slide]', setEl);
  const caption = $('[data-hl-caption]', setEl);
  if (!track || slides.length < 2) return null;
  const maxIndex = Math.max(0, slides.length - 5);
  let index = 0;
  function update() {
    const first = slides[0];
    const gap = parseFloat(getComputedStyle(track).columnGap || '16') || 16;
    const step = first.offsetWidth + gap;
    track.style.transform = `translateX(${-index * step}px)`;
    const centre = index + 2;
    slides.forEach((s, k) => {
      const isCentre = k === centre;
      s.style.transform = isCentre ? 'scale(1.08)' : 'scale(0.94)';
      s.style.opacity = isCentre ? '1' : '0.55';
    });
    if (caption) caption.textContent = slides[centre].dataset.caption || '';
  }
  const prev = $('[data-hl-prev]', setEl);
  const next = $('[data-hl-next]', setEl);
  if (prev) prev.addEventListener('click', () => { index = index <= 0 ? maxIndex : index - 1; update(); });
  if (next) next.addEventListener('click', () => { index = index >= maxIndex ? 0 : index + 1; update(); });
  window.addEventListener('resize', () => requestAnimationFrame(update));
  // Prefetch all slide images on load so stepping feels instant (warms the HTTP cache).
  window.addEventListener('load', () => {
    slides.forEach((s) => {
      const img = s.querySelector('img');
      if (img) {
        const im = new Image();
        im.src = img.currentSrc || img.src;
      }
    });
  });
  return { update };
}
const hlSets = {};
$$('[data-hl-set]').forEach((setEl) => {
  hlSets[setEl.dataset.hlSet] = initHighlights(setEl);
});
const firstVisible = $$('[data-hl-set]').find((el) => !el.classList.contains('hidden'));
if (firstVisible && hlSets[firstVisible.dataset.hlSet]) {
  requestAnimationFrame(() => hlSets[firstVisible.dataset.hlSet].update());
}
$$('[data-pf-switch]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.pfSwitch;
    $$('[data-pf-switch]').forEach((b) => {
      const on = b.dataset.pfSwitch === key;
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.classList.toggle('underline', on);
      b.classList.toggle('underline-offset-4', on);
      b.classList.toggle('text-white', on);
      b.classList.toggle('text-white/60', !on);
    });
    const hero = $('[data-pf-hero]');
    if (hero) {
      hero.src = btn.dataset.pfHeroSrc;
      hero.srcset = btn.dataset.pfHeroSrcset;
      hero.alt = btn.dataset.pfHeroAlt || '';
    }
    $$('[data-hl-set]').forEach((setEl) => {
      const show = setEl.dataset.hlSet === key;
      setEl.classList.toggle('hidden', !show);
      if (show && hlSets[key]) requestAnimationFrame(() => hlSets[key].update());
    });
  });
});

/* ================================================================
   Services accordion: one open at a time, first open by default
   ================================================================ */
const accBands = $$('[data-accordion-band]');
accBands.forEach((band) => {
  const btn = $('[data-accordion-btn]', band);
  const panel = $('[data-accordion-panel]', band);
  const icon = $('[data-accordion-icon]', band);
  if (!btn || !panel) return;
  btn.addEventListener('click', () => {
    const willOpen = panel.dataset.open !== 'true';
    accBands.forEach((b) => {
      const p = $('[data-accordion-panel]', b);
      const bb = $('[data-accordion-btn]', b);
      const ic = $('[data-accordion-icon]', b);
      const open = b === band && willOpen;
      if (p) p.dataset.open = open ? 'true' : 'false';
      if (bb) bb.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (ic) ic.classList.toggle('rotate-45', open);
    });
  });
});

/* ================================================================
   "This is important": click pins, hover previews
   ================================================================ */
$$('[data-important-row]').forEach((row) => {
  const btn = $('[data-important-btn]', row);
  const panel = $('[data-important-panel]', row);
  if (!btn || !panel) return;
  let pinned = false;
  const setOpen = (open) => {
    panel.dataset.open = open ? 'true' : 'false';
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  };
  btn.addEventListener('click', () => {
    pinned = !pinned;
    setOpen(pinned);
  });
  row.addEventListener('mouseenter', () => setOpen(true));
  row.addEventListener('mouseleave', () => setOpen(pinned));
  btn.addEventListener('focus', () => setOpen(true));
  btn.addEventListener('blur', () => setOpen(pinned));
});

/* ================================================================
   Journal filters: category chips + text search
   ================================================================ */
const journalFilters = $('[data-journal-filters]');
if (journalFilters) {
  const grid = $('[data-journal-grid]');
  const cards = $$('[data-journal-card]', grid);
  const emptyMsg = $('[data-journal-empty]');
  const chips = $$('[data-filter-chip]', journalFilters);
  const search = $('[data-journal-search]', journalFilters);
  let category = 'All';
  let query = '';
  function applyFilter() {
    let visible = 0;
    cards.forEach((card) => {
      const okCat = category === 'All' || card.dataset.category === category;
      const okQuery = !query || (card.dataset.search || '').includes(query);
      const show = okCat && okQuery;
      card.classList.toggle('hidden', !show);
      if (show) visible += 1;
    });
    if (emptyMsg) emptyMsg.classList.toggle('hidden', visible !== 0);
  }
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      category = chip.dataset.filterChip;
      chips.forEach((c) => {
        const on = c === chip;
        c.setAttribute('aria-pressed', on ? 'true' : 'false');
        c.classList.toggle('border-ink', on);
        c.classList.toggle('bg-ink', on);
        c.classList.toggle('text-cream', on);
        c.classList.toggle('border-hairline', !on);
        c.classList.toggle('text-ink', !on);
      });
      applyFilter();
    });
  });
  if (search) {
    search.addEventListener('input', () => {
      query = search.value.trim().toLowerCase();
      applyFilter();
    });
  }
}

/* ================================================================
   Contact form: SEND disabled until required fields are valid;
   submit opens a mailto draft (no backend on a demo site)
   ================================================================ */
const form = $('#inquiry-form');
if (form) {
  const sendBtn = $('#send-btn');
  const status = $('#form-status');
  const requiredFields = $$('[required]', form).filter(
    (el) => el.type !== 'checkbox' && el.type !== 'radio',
  );
  const groups = $$('[data-required-group]', form);
  function groupValid(group) {
    return !!group.querySelector('input:checked');
  }
  function validate() {
    let ok = true;
    requiredFields.forEach((el) => {
      const v = (el.value || '').trim();
      if (!v) ok = false;
      else if (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) ok = false;
    });
    groups.forEach((g) => {
      if (!groupValid(g)) ok = false;
    });
    if (sendBtn) sendBtn.disabled = !ok;
    return ok;
  }
  form.addEventListener('input', validate);
  form.addEventListener('change', validate);
  validate();
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validate()) {
      const firstBad =
        requiredFields.find((el) => !(el.value || '').trim()) ||
        groups.find((g) => !groupValid(g));
      if (firstBad && firstBad.focus) firstBad.focus();
      return;
    }
    const data = new FormData(form);
    const lines = [];
    const seen = new Set();
    data.forEach((value, key) => {
      if (key === 'Services interested in') {
        if (!seen.has(key)) {
          seen.add(key);
          lines.push(`${key}: ${data.getAll(key).join(', ')}`);
        }
        return;
      }
      lines.push(`${key}: ${value}`);
    });
    const name = (data.get('Your Name') || '').toString();
    const subject = encodeURIComponent(`Wedding inquiry from ${name}`);
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `mailto:hello@mayabennettphoto.com?subject=${subject}&body=${body}`;
    if (status) {
      status.textContent =
        'Thank you — your email app should have opened with your inquiry ready to send. (Demo form: nothing is stored.)';
      status.classList.remove('hidden');
    }
  });
}
