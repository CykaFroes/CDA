module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'cda-white': '#f3fdfa',
        'cda-black': "#030201",
      },
      fontFamily: {
        'medieval': ['MedievalSharp', 'cursive'],
        'roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  variants: {},
  plugins: [],
}
