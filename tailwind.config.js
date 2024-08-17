/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./content-script/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "vin-blue": "#1971D4",
        "vin-bg-gray": "#fafafa",
        "vin-text-gray": "rgb(156 163 175)",
        "vin-border-gray": "rgb(241 239 239)",
      },
    },
  },
  plugins: [],
};
