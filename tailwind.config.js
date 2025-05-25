/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        flamingo: '#FF5252',
        beak: '#FFD740',
        dark: '#0F1C2E',
        background: '#FFF8E6',
        accent1: '#FFC334',
        accent2: '#E83A3A',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Noto Sans JP', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
