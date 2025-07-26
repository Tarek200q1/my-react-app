/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container : {
        width: '80%',
        center:true
      },
      colors: {
        main: '#0aad0a', 
      },
  },
  plugins: [],
}, 
}