/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
     "./node_modules/swiper/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['var(--font-pacifico)'],
         fira: ['var(--font-fira)'],
         plawrite: ['var(--font-playwrite)']
      },
    },
  },
  plugins: [], 
};
