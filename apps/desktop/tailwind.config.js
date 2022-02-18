module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./pages/**/*.{js,ts,jsx,tsx}'],
  },
}
