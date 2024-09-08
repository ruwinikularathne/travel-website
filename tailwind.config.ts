import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f3f4f6",  // light grey
        foreground: "#ffffff",  // white
        iceBlue: "#f0f8ff", // blue shade for the navbar
        primaryGreen: "#4CAF50", // green shade for buttons/hover
        primaryBlue: "#2196F3",  // main blue shade 
        darkGrey: "#374151",     // dark grey for text
      },
    },
  },
  plugins: [],
};

export default config;
