/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      blue: "#102638",
      pink: "#F6B9BF",
      beige: "#F5F5F5",
      white: "#FFFFFF",
      black: "#000000"
    },
    fontFamily: {
      Habibi: ['Habibi'],
      lora : ['Lora']
    },
    fontSize: {
      lgSize: 200,
      nmSize: 75,
      sm: 12,
      lg: 16,
      xl: 18,
      xl2: 20,
      xl3: 24,
      xl4: 30

    }
  },
  plugins: [],
}
