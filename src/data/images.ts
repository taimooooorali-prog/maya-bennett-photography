/* Image slot map — semantic names → pool files.
   Pool layout: 01–24 portraits, 25–40 landscapes, 41–48 details.
   Assignments verified against photos/MANIFEST.md descriptions (17 Nov 2026). */

export const pool = (n: number) => `/images/pool/pool-${String(n).padStart(2, '0')}.webp`;
export const pool480 = (n: number) => `/images/pool/pool-${String(n).padStart(2, '0')}-480.webp`;
export const poolSq = (n: number) => `/images/pool/pool-${String(n).padStart(2, '0')}-sq.webp`;
export const srcsetFor = (n: number) => `${pool480(n)} 480w, ${pool(n)} 1200w`;

export const IMG = {
  heroLeft: 25, // wheat field, pale blown-out sky
  heroRight: 21, // bride seated by doorway — face high, dark backdrop behind headline
  introCarousel: [6, 7, 8], // couples, warm light
  aboutTeaser: 3, // female photographer with DSLR
  offer1: 7, // couple, warm hanging lights (B&W)
  offer2: 22, // bride under floral arch (B&W)
  offer3: 16, // B&W veil close-up
  behindLens: 8, // groom laughing, greenery
  approachArch: 9, // couple, white panelled wall, ballgown
  approachBw: 24, // confetti dance (B&W)
  exploreStrip: [28, 30, 31, 33, 39, 40],
  featured: [10, 11, 12, 13, 23, 6], // one lead per story
  blogCard1: 26, // meadow dancing, pale sky
  blogCard2: 4, // vintage film camera
  finalCta: 32, // ivy on concrete wall
  finalInset: 27, // dirt road, big cloudy sky (B&W)
  aboutHero: 41, // rings on a leaf (B&W)
  aboutBehind: 4, // vintage film camera
  aboutFullbleed: 39, // couple against fairy lights
  aboutCard1: 17, // bridal profile, spotlight halo
  aboutCard2: 33, // seaside reception table
  portfolioHero: 18, // bride by window, tiara + veil
  highlightsWeddings: [19, 20, 21, 22, 23],
  highlightsEditorial: [15, 16, 17, 9, 20],
  portfolioBg: 40, // forest couple (B&W, dimmed)
  servicesHero: 30, // first dance, illuminated floor
  servicesValues: [23, 4, 44], // first look / film camera / dress lacing
  experienceHero: 31, // night dancing, string lights
  experienceBw: 1, // close bridal portrait under sheer veil
  experienceStep1: 26, // meadow dancing
  experienceStep2: 28, // outdoor floral arch ceremony
  contactHero: 22, // bride under floral arch (faded B&W)
  storyHeroes: [28, 29, 30, 31, 33, 40],
  storyGalleries: [
    [10, 41, 19, 6, 34, 42],
    [11, 43, 20, 7, 35, 44],
    [12, 45, 21, 8, 36, 46],
    [13, 47, 22, 23, 37, 48],
    [23, 41, 24, 12, 38, 42],
    [6, 43, 18, 17, 39, 44],
  ],
  blogHeroes: [26, 4, 33, 40],
  blogInline: [
    [45, 8],
    [42, 15],
    [35, 34],
    [2, 20],
  ],
  instagram: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
} as const;
