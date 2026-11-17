/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F9F9F5',
        panel: '#EFE9DC',
        olive: '#777035',
        olivedark: '#5F5A2A',
        black: '#111111',
        editorial: '#EFE7CE',
        ink: '#141414',
        body: '#6E6E68',
        hairline: '#D8D5C8',
        stone2: '#B8B4A6',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.32em',
      },
    },
  },
  plugins: [],
};
