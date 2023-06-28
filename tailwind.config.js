/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: 'var(--font-libre-baskerville)',
        text: 'var(--font-inter)',
      },

      colors: {
        gray: {
          50: '#F2F2F2',
          100: '#E0E0E0',
          500: '#BDBDBD',
          600: '#828282',
          700: '#333333',
        },

        primary: '#202637',
        secondary: '#D8AE75',
      },

      borderRadius: {
        sm: '4px',
      },
    },
  },
  plugins: [],
}
