/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #57934e, #aae9a1)',
        'gradient-custom-glow': 'linear-gradient(3.33deg, #447f3b 14.94%, #a9e8a0 82.36%)',
        'gradient-custom-glow-02': 'linear-gradient(180deg, #2c4982, #2cd095)',
        'gradient-custom-glow-03': 'linear-gradient(180deg, #18ff9e00, #17ffe3)',
        'dot': 'url("/assets/dot.png")',
      },
    },
  },
  plugins: [],
}