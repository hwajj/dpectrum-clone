/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        suit: ['SUIT-Regular', 'sans-serif'],
        pretendard: ['Pretendard-Regular', 'sans-serif'],
      },
      colors: {
        mediumPurple: '#B1A3F0',
        lightGray: '#f2f2f2',
        mediumGray: '#808080',
        lightPink: '#FFDFE3',
        lightYellow: '#FFFAE1',
        lightPurple: '#F1EEFF',
        lightGreen: '#EBFFF3',
        mediumGreen: '#94DED7',
        mediumRed: '#F78A91',
      },
    },
  },
  plugins: [],
}
