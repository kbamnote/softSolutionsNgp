/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        easilon: {
          primary: '#1c2c52',    // Main navy blue
          accent: '#22c5fe',     // Cyan accent
          cyan: '#00cde5',       // Bright cyan for buttons/highlights
          navy: '#1c2c52',       // Dark navy
          dark: '#2b2b5e',       // Hero background dark
          gray: '#828282',       // Secondary text
          lightgray: '#f6f6f8',  // Topbar background
        }
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}