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
      sm: 14,
      lg: 18,
      xl: 20,
      xl2: 24,
      xl3: 30,
      xl4: 36

    }
  },
  plugins: [],
}
