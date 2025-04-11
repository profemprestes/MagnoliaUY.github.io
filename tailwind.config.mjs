/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'magnolia': {
          rose: '#edafb8',    // Soft rose pink
          cream: '#f7e1d7',   // Warm cream
          stone: '#dedbd2',   // Neutral stone
          sage: '#b0c4b1',    // Muted sage green
          earth: '#4a5759',   // Deep earth tone
        }
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [],
}