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
      keyframes: {
        bgChange: {
          '0%': { backgroundImage: "url('/images/bg1.jpg')" },
          '16.66%': { backgroundImage: "url('/images/bg2.jpg')" },
          '33.33%': { backgroundImage: "url('/images/bg3.jpg')" },
          '50%': { backgroundImage: "url('/images/bg4.jpg')" },
          '66.66%': { backgroundImage: "url('/images/bg5.jpg')" },
          '83.33%': { backgroundImage: "url('/images/bg6.jpg')" },
          '100%': { backgroundImage: "url('/images/bg1.jpg')" },
        },
      },
      animation: {
        bgChange: 'bgChange 30s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;
