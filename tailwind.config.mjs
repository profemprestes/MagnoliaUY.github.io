/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'magnolia': {
          earth: '#8B7355',
          beige: '#F5F5DC',
          cream: '#FFFAF0',
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