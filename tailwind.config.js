/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
        'primary-red': '#E32934' ,
        'primary-black' : '#3b3a30',
        'secondary-black' : '#292F33' ,
        'darker-gray' : ' #66757F' ,
        'lighter-gray' : '#CCD6DD',
        // 'primary-gray': ,
        'primary-yellow': '#FFCC00',
        'primary-green': '#A4C639',
        'primary-blue': '#0F7DC2',
        'primary-light-blue' : '#00A1F1',
        'primary-purple' : '#7B0099',
        // 'secondary-gray':,

      }
    },
  },
  plugins: [],
}