/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        magnolia: {
          rose: "#edafb8",
          cream: "#f7e1d7",
          stone: "#dedbd2",
          sage: "#b0c4b1",
          earth: "#4a5759",
        },
        mint: {
          50: "#ecfdf5",
          100: "#d0fbe5",
          200: "#a4f4cf",
          300: "#6ce9b7",
          400: "#31d69a",
          500: "#0dbc82",
          600: "#03986a",
          700: "#027a58",
          800: "#056047",
          900: "#054f3c",
          950: "#012d22",
        },
        riptide: {
          50: "#f0fdfa",
          100: "#cbfcf1",
          200: "#96f7e4",
          300: "#5cecd5",
          400: "#2bd6c1",
          500: "#12baa8",
          600: "#0b9689",
          700: "#0e776f",
          800: "#105f5a",
          900: "#124f4b",
          950: "#03302f",
        },
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        lato: ["Lato", "sans-serif"],
        sans: ["Lato", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'soft-dark': '0 4px 30px rgba(0, 0, 0, 0.3)',
      },
      transitionDuration: {
        '400': '400ms',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
