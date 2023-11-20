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
        'xlmd': {'max': '1022.67px'},
        'xsm': {'min': '375px', 'max': '540px'},
        'xxsm': {'min': '540px', 'max': '767px'},
        // 'nifxl': {'min': '1166.67px', 'max': '1920px'},
        'nifxl': {'min': '1266.67px', 'max': '1920px'},
      },
      backgroundImage: {
        'gradient-to-b':
          'linear-gradient(to bottom,rgba(171,35,255,0) 0,rgba(171,35,255,.45) 0,rgba(61,139,255,.35) 19%,rgba(0,0,0,1) 65%,#000 68%,#000 100%);',
      },
    },
  },
  plugins: [],
}