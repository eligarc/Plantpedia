module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './ui/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      serif:
        '"Cormorant Garamond", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
