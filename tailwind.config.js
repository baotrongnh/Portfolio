/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        sm: '36em',
        md: '48em',
        lg: '62em',
        xl: '75em',
      },
    }
  },
  plugins: [],
}