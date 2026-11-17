/* All copy on this site is original placeholder writing for a fictional demo brand.
   Names, venues, vendors, publications and quotes are invented. */

export const BRAND = {
  name: 'Maya Bennett',
  wordmark: 'MAYA BENNETT',
  monogram: 'MB',
  tagline: 'Sun-soaked, honest wedding photography from San Diego to wherever your story takes us.',
  email: 'hello@mayabennettphoto.com',
  phone: '+1 (619) 555-0100',
  instagram: 'https://www.instagram.com/mayabennettphoto',
  tiktok: 'https://www.tiktok.com/@mayabennettphoto',
  city: 'San Diego, California',
};

export const NAV_LEFT = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Services', href: '/services' },
];

export const NAV_RIGHT = [
  { label: 'Experience', href: '/experience' },
  { label: 'Blog', href: '/blog-home' },
  { label: 'Inquire', href: '/contact', italic: true },
];

export const MENU_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'Experience', href: '/experience' },
  { label: 'The Blog', href: '/blog-home' },
  { label: 'Inquire', href: '/contact' },
];

/* Invented publication-style wordmarks — plain text, not real logos. */
export const PRESS = ['WEDDING JOURNAL', 'THE BRIDAL EDIT', 'MODERN LOVE', 'ELOPE MAGAZINE'];

export interface Testimonial {
  quote: string;
  names: string;
  detail?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Maya noticed the moments we never even saw happen. Looking through our gallery felt like reliving the day with better eyes — every laugh, every happy tear, exactly as it felt.',
    names: 'Ava & Noah',
    detail: 'Willow Creek Estate',
  },
  {
    quote:
      'We were nervous in front of a camera and she made it feel like hanging out with an old friend. The photos are stunning, but the way she made us feel that day is what we talk about most.',
    names: 'Harper & Ethan',
    detail: 'The Ivory Barn',
  },
  {
    quote:
      'She moves like a whisper and shoots like a storyteller. Our families keep asking how she caught so much without ever being in the way. We will treasure these forever.',
    names: 'Mia & Lucas',
    detail: 'Cliffside Manor',
  },
  {
    quote:
      'From the first call to the final album, everything felt calm and considered. Maya thought of things we never would have, and the photographs prove it on every single page.',
    names: 'Ella & Mason',
    detail: 'Golden Hour Ranch',
  },
  {
    quote:
      'Our wedding was loud, joyful chaos, and somehow she bottled all of it. The gallery reads like a film — you can hear the music and feel the sun going down.',
    names: 'Grace & Henry',
    detail: 'The Palm Court',
  },
  {
    quote:
      'We booked her for the photographs and got so much more: a steady presence, a great eye for light, and a friend by the end of the night. Best decision of the whole wedding.',
    names: 'Chloe & Owen',
    detail: 'Stonebridge Hall',
  },
  {
    quote:
      'The film photographs stopped us in our tracks. Grain, glow, and so much feeling — they look like memories already, in the very best way.',
    names: 'Lily & James',
    detail: 'Harborview Terrace',
  },
  {
    quote:
      'Maya asked about our story before she asked about our timeline, and it shows. Every image feels personal, like it could only ever belong to us.',
    names: 'Nora & Oliver',
    detail: 'The Fig House',
  },
];

export interface Story {
  slug: string;
  couple: string;
  venue: string;
  location: string;
  season: string;
  about: string;
  vendors: { role: string; name: string }[];
  testimonial: Testimonial;
}

export const STORIES: Story[] = [
  {
    slug: 'ava-and-noah',
    couple: 'Ava & Noah',
    venue: 'Willow Creek Estate',
    location: 'Temecula, California',
    season: 'Late summer',
    about:
      'Ava and Noah married under the old willow trees as the evening light turned everything gold. Their day was slow on purpose: a long ceremony, a longer dinner, and a dance floor that refused to end. We photographed it the way it felt — warm, unhurried, and full of the people they love most.',
    vendors: [
      { role: 'Planning', name: 'Fern & Flourish Events' },
      { role: 'Florals', name: 'Petal & Stem Co.' },
      { role: 'Venue', name: 'Willow Creek Estate' },
      { role: 'Catering', name: 'Ember & Oak Kitchen' },
      { role: 'Music', name: 'The Honeytones' },
      { role: 'Cake', name: 'Sugarbird Bakery' },
    ],
    testimonial: TESTIMONIALS[0],
  },
  {
    slug: 'harper-and-ethan',
    couple: 'Harper & Ethan',
    venue: 'The Ivory Barn',
    location: 'Paso Robles, California',
    season: 'Early autumn',
    about:
      'Harper and Ethan wanted a day that felt like a gathering, not a production. String lights, long tables, and a barn full of their favourite people. The rain held off until the last dance, and then it poured — which gave us the best photograph of the night.',
    vendors: [
      { role: 'Planning', name: 'Golden Hour Planning' },
      { role: 'Florals', name: 'Wildflower Studio' },
      { role: 'Venue', name: 'The Ivory Barn' },
      { role: 'Catering', name: 'Harvest Table Co.' },
      { role: 'Music', name: 'Copper Canyon Band' },
      { role: 'Stationery', name: 'Paper Fern Studio' },
    ],
    testimonial: TESTIMONIALS[1],
  },
  {
    slug: 'mia-and-lucas',
    couple: 'Mia & Lucas',
    venue: 'Cliffside Manor',
    location: 'Big Sur, California',
    season: 'Spring',
    about:
      'Forty guests, one cliff edge, and fog that rolled in right on cue. Mia and Lucas kept everything small so they could be present for all of it, and the photographs carry that stillness — quiet vows, salt air, and a sunset that showed up just in time.',
    vendors: [
      { role: 'Planning', name: 'Harbor & Vine Planning' },
      { role: 'Florals', name: 'The Bloom Bar' },
      { role: 'Venue', name: 'Cliffside Manor' },
      { role: 'Catering', name: 'Sea Salt Kitchen' },
      { role: 'Music', name: 'Marlowe Strings' },
      { role: 'Rentals', name: 'Driftwood & Linen' },
    ],
    testimonial: TESTIMONIALS[2],
  },
  {
    slug: 'ella-and-mason',
    couple: 'Ella & Mason',
    venue: 'Golden Hour Ranch',
    location: 'Santa Ynez, California',
    season: 'High summer',
    about:
      'Ella and Mason filled a working ranch with wildflowers and two hundred of their nearest and dearest. The day ran on laughter: a first look under the oak tree, speeches that made everyone cry, and a sparkler exit that lit up the whole valley.',
    vendors: [
      { role: 'Planning', name: 'Meadowlark Events' },
      { role: 'Florals', name: 'Fable Florals' },
      { role: 'Venue', name: 'Golden Hour Ranch' },
      { role: 'Catering', name: 'Smoke & Sage BBQ' },
      { role: 'Music', name: 'The Wildflowers' },
      { role: 'Cake', name: 'Butter & Bloom Cakes' },
    ],
    testimonial: TESTIMONIALS[3],
  },
  {
    slug: 'grace-and-henry',
    couple: 'Grace & Henry',
    venue: 'The Palm Court',
    location: 'Palm Springs, California',
    season: 'Winter',
    about:
      'A desert wedding in December, all citrus tones and candlelight. Grace and Henry danced their first dance under the palms while the mountains turned pink behind them. It was elegant without being stiff — the kind of celebration where everyone stayed until the end.',
    vendors: [
      { role: 'Planning', name: 'Willow & Wren Events' },
      { role: 'Florals', name: 'Garden Party Florals' },
      { role: 'Venue', name: 'The Palm Court' },
      { role: 'Catering', name: 'Citrus & Thyme' },
      { role: 'Music', name: 'Desert Rose Trio' },
      { role: 'Lighting', name: 'Lumen & Co.' },
    ],
    testimonial: TESTIMONIALS[4],
  },
  {
    slug: 'chloe-and-owen',
    couple: 'Chloe & Owen',
    venue: 'Stonebridge Hall',
    location: 'San Diego, California',
    season: 'Late spring',
    about:
      'Chloe and Owen married in a hall full of stone arches and garden roses, with a ceremony that had the whole room laughing and crying at once. Their reception was a masterclass in joy: heartfelt toasts, a packed dance floor, and a final song nobody wanted to end.',
    vendors: [
      { role: 'Planning', name: 'The Gilded Table' },
      { role: 'Florals', name: 'Posy & Pine' },
      { role: 'Venue', name: 'Stonebridge Hall' },
      { role: 'Catering', name: 'Fig & Fennel' },
      { role: 'Music', name: 'The Stonebridge Quartet' },
      { role: 'Videography', name: 'Reverie Films' },
    ],
    testimonial: TESTIMONIALS[5],
  },
];

export interface Post {
  slug: string;
  title: string;
  category: 'Weddings' | 'Engagements' | 'Planning' | 'Personal' | 'Business';
  date: string;
  excerpt: string;
  pullQuote: string;
  paragraphs: string[];
}

export const POSTS: Post[] = [
  {
    slug: 'engagement-session-planning-guide',
    title: 'How to Plan an Engagement Session That Actually Feels Like You',
    category: 'Engagements',
    date: 'October 12, 2026',
    excerpt:
      'The best engagement photos are not posed — they are planned around the things you already love doing together. Here is how we build a session around your real life.',
    pullQuote: 'Wear the outfit you feel most like yourself in, and bring the dog.',
    paragraphs: [
      'An engagement session works best when it stops feeling like a photoshoot. My favourite sessions start with a simple question: what would the two of you do on a perfect Saturday? The answer becomes the plan. A coffee run, a farmers market, a walk with the dog, a blanket on the beach at golden hour — ordinary things photograph beautifully because they are honest.',
      'Location matters less than light and comfort. I will help you pick a spot with good evening light and enough room to move, but the real secret is choosing somewhere that means something to you. The place where you had your first date will always beat a pretty backdrop you have never visited.',
      'For outfits, think movement and texture over matching. One dress or outfit you love, one more relaxed option, and colours that sit well with the landscape. Avoid loud logos and tiny patterns, which fight with the camera. And please, bring the things that make the session yours: a favourite record, a picnic basket, your dog.',
      'On the day, I will give you just enough direction to feel confident and then step back. Most of the photographs I love most happen between the poses — the laugh after a joke, the hand reaching for yours without thinking. That is the whole point. Come as you are, and let the session feel like a date, because the best version of it is one.',
    ],
  },
  {
    slug: 'why-film-belongs-in-your-wedding-story',
    title: 'Why Film Still Belongs in Your Wedding Story',
    category: 'Personal',
    date: 'September 28, 2026',
    excerpt:
      'Digital is sharp and reliable. Film is something else entirely — grain, glow, and a feeling that the photograph remembers the day the way you will.',
    pullQuote: 'Film does not record a wedding. It remembers one.',
    paragraphs: [
      'I started shooting film because I missed the way old photographs feel. My grandparents’ wedding album is soft around the edges, a little faded, and completely alive. Digital photographs are perfect, and perfection is not always what a memory looks like. Film carries grain and warmth and a kind of patience that suits a wedding day.',
      'Practically, film slows me down in the best way. Every frame costs something, so every frame gets chosen. I watch longer, wait longer, and press the shutter only when the moment earns it. Couples tell me they can feel that attention in the final images — fewer photographs, but the right ones.',
      'Film also handles light the way we remember it. Evening sun through a window, candlelight at dinner, the last pink minutes before dark — film holds highlights gently and lets shadows stay soft. The result is a gallery that feels like the day felt, not like a catalogue of it.',
      'I always shoot digital alongside film, so nothing important is ever left to chance. The film frames are the poetry on top of a complete, reliable record. If you love the idea of photographs that already feel like heirlooms the day you receive them, ask me about adding film coverage to your day.',
    ],
  },
  {
    slug: 'choosing-a-wedding-venue-that-photographs-beautifully',
    title: 'Choosing a Venue That Photographs Beautifully',
    category: 'Planning',
    date: 'September 3, 2026',
    excerpt:
      'A venue can be gorgeous in person and difficult on camera — or simple in person and magic in photographs. Here is what I look for, as the person holding the camera.',
    pullQuote: 'Light first, everything else second. A beautiful room with no windows is a dark room.',
    paragraphs: [
      'When couples ask me to weigh in on a venue, I look at one thing before anything else: light. Big windows, a west-facing ceremony spot, and a reception space that glows after dark will do more for your photographs than any amount of decoration. Visit your venue at the same time of day your wedding will happen, and watch where the sun actually goes.',
      'Colour matters more than most people expect. Deep red carpets, purple uplighting, and strongly painted walls all cast their colour onto skin and dresses. Neutral walls, warm wood, and greenery are forgiving and timeless. If you love a bold colour, use it in florals and details rather than wall-to-wall.',
      'Think about the spaces between the big moments, too. A quiet garden path for portraits, a shady corner for cocktail hour, and a getting-ready room with a window and a mirror are worth their weight in gold. The best venues give a photographer five or six beautiful pockets within a short walk.',
      'Finally, ask about restrictions before you fall in love: some venues limit flash, drones, sparklers, or where photographers can stand during the ceremony. None of these are deal-breakers, but knowing early lets us plan around them. Bring your photographer into the conversation early — we have seen hundreds of rooms, and we know which ones sing.',
    ],
  },
  {
    slug: 'questions-to-ask-your-wedding-photographer',
    title: 'The Questions Worth Asking Before You Book Your Photographer',
    category: 'Weddings',
    date: 'August 19, 2026',
    excerpt:
      'You will spend more of your wedding day with your photographer than almost anyone else. These are the questions that actually tell you whether you have found the right one.',
    pullQuote: 'Ask to see a full wedding, start to finish. A highlight reel can hide a lot.',
    paragraphs: [
      'Start with the work itself. Ask to see two or three complete weddings, not just favourite frames. A full gallery shows how a photographer handles a dark reception, a rainy ceremony, and a tired family group at the end of a long day. If the whole day looks consistent, you can trust the highlights too.',
      'Then ask about the experience. How do they direct people who hate being photographed? How many weddings do they take each year? What happens if they are ill on your date? The answers tell you how a photographer runs their business, and a calm, prepared answer is worth as much as a beautiful portfolio.',
      'Money questions deserve straight answers. Ask what is included, how many hours of coverage you actually need, what an album costs, and when the final gallery arrives. A good photographer will help you spend wisely rather than sell you everything — the right coverage for your day matters more than the biggest package.',
      'Last, trust your gut. You are choosing the person who will be beside you for the most emotional hours of your life. Do you laugh easily with them? Do they ask about your story, or only your timeline? Book the photographer whose presence you would enjoy on the day, because their photographs will carry that feeling for decades.',
    ],
  },
];

export const BLOG_CATEGORIES = ['All', 'Weddings', 'Engagements', 'Planning', 'Personal', 'Business'] as const;

export const SERVICE_BANDS = [
  {
    id: 'weddings',
    title: 'WEDDINGS',
    theme: 'olive',
    body: 'Full wedding weekends and single-day celebrations, photographed with a mix of digital and film. Every wedding begins with a conversation about your story, and ends with a gallery that reads like the day felt — honest, warm, and unposed.',
    links: [
      { label: 'View Portfolio', href: '/portfolio' },
      { label: 'The Experience', href: '/experience' },
      { label: 'Inquire for Availability', href: '/contact' },
    ],
  },
  {
    id: 'portraits',
    title: 'PORTRAITS',
    theme: 'black',
    body: 'Engagement sessions, anniversaries, and portraits for couples who want photographs that feel like themselves. Sessions are relaxed, lightly directed, and built around the places and rituals that are already yours. Portrait sessions from $1,000.',
    links: [
      { label: 'View Portfolio', href: '/portfolio' },
      { label: 'Inquire', href: '/contact' },
    ],
  },
  {
    id: 'editorial',
    title: 'EDITORIAL',
    theme: 'pale',
    body: 'Fashion-led stories, styled shoots, and brand imagery with a wedding photographer’s eye for light and movement. For designers, publications, and brands who want photographs with a heartbeat.',
    links: [
      { label: 'View Portfolio', href: '/portfolio' },
      { label: 'Inquire', href: '/contact' },
    ],
  },
];

export const IMPORTANT_POINTS = [
  {
    title: 'Book early, breathe easy',
    text: 'Most couples book nine to fourteen months ahead, and summer weekends go first. If your date is sooner, ask anyway — cancellations happen, and weekday celebrations are wonderful.',
  },
  {
    title: 'Travel is part of the job',
    text: 'San Diego is home, but the work travels. Weddings across California and worldwide are welcome, with straightforward travel arrangements agreed before you book.',
  },
  {
    title: 'Film is always an option',
    text: '35mm film coverage can be added to any wedding. It is shot alongside digital, so your complete record is always safe while the film frames add grain, glow, and feeling.',
  },
  {
    title: 'Albums are heirlooms',
    text: 'Fine-art albums are designed with you after the wedding, printed to last, and worth every penny. Your photographs deserve better than a hard drive.',
  },
  {
    title: 'Communication is constant',
    text: 'You will always know what happens next — timelines, questionnaires, and check-ins are part of the process, and every message gets a thoughtful reply.',
  },
];

export const EXPERIENCE_STEPS = [
  {
    n: '01',
    title: 'The first conversation',
    text: 'It starts with a call, not a contract. We talk about your story, what matters to you, and whether we are the right fit. If we are, you will receive a custom quote shaped around your day — never a package you have to squeeze into.',
  },
  {
    n: '02',
    title: 'Planning together',
    text: 'Once your date is reserved, we plan properly: a questionnaire about the people and moments that matter, a timeline built around the light, and a walkthrough of the day so nothing is left to chance. You arrive at your wedding knowing exactly what to expect.',
  },
];

export const EXPERIENCE_NOTES = [
  {
    title: 'The call',
    text: 'Every booking begins with a real conversation. I want to hear how you met, what you are dreaming about, and what you definitely do not want. The best photographs come from understanding people first.',
  },
  {
    title: 'The questionnaire',
    text: 'A few weeks before the wedding, a short questionnaire gathers the details that matter: family groupings, the moments you care about most, and anything I should know about your people. It takes twenty minutes and saves hours of guessing.',
  },
  {
    title: 'The wedding day',
    text: 'On the day I am calm, present, and mostly invisible — directing gently when it helps and stepping back when it does not. You will enjoy your celebration; I will take care of remembering it.',
  },
  {
    title: 'Albums & delivery',
    text: 'Your gallery arrives within a few weeks, carefully edited and ready to share. Albums are designed together afterwards, so the story on your shelf is the one you actually lived.',
  },
];
