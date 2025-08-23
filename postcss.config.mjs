/** @type {import('postcss-load-config').Config} */
const config = {
  theme: {
    extend: {
      fontFamily: {
        gagalin: ['Gagalin-Regular', 'sans-serif'],
      },
    },
  },
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

export default config
