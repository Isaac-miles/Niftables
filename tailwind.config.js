/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'nifxl': '1798.67px',
        'xlmd': {'max': '1022.67px'},
      },
      backgroundImage: {
        'gradient-to-b':
          'linear-gradient(to bottom,rgba(171,35,255,0) 0,rgba(171,35,255,.45) 0,rgba(61,139,255,.35) 19%,rgba(0,0,0,1) 65%,#000 68%,#000 100%);',
      },
    },
  },
  plugins: [],
}