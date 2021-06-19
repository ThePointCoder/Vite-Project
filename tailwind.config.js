module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
