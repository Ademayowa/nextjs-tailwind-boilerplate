module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
