module.exports = {
  plugins: {
    'tailwindcss/nesting': {},
    '@tailwindcss/postcss': {
      tailwindConfig: './tailwind.config.mjs'
    },
    autoprefixer: {},
  }
};