import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // <-- Add this line right here!
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      colors: {
        dark_gradient: "#111F35", 
        light_gradient: "#0e1e8a", 
        light_dark_gradient: "#676767", 
        light_light_gradient: "#CDCDCD", 
        header_text: "#4F4D4D",
        normal_text: "#616161"
      },
    },
  },
  plugins: [],
};

export default config;