import { url } from "inspector";
import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-texture": "url('/vista-website/src/assets/images/hero-bg.jpg')",
      },
      colors: {
        accent: "#543310", //#3F72AF
        primary: "#F9F7F7",
        primary2: "#AF8F6F",
        secondary: "#F8F4E1",
        heading: "#1e1e2d",
        subheading: "#555555",
        darksubheading: "#c6c6c6",
      },
      dropShadow: {
        drone: "-30px 60px 5px rgba(0, 0, 0, 0.09)",
      },

      animation: {
        wobble: "wobble 3s infinite",
      },
      keyframes: {
        wobble: {
          "0%, 100%": { transform: "translateY(-2%)" },
          "50%": { transform: "translateY(0%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

// .wobble {
//   animation: wobble 1s ease-in-out infinite;
// }

// @keyframes wobble {
//   0% {
//     transform: translateY(0%);
//   }
//   25% {
//     transform: translateY(-10%);
//   }
//   35% {
//     transform: translateY(-5%);
//   }
//   100% {
//     transform: translateY(0%);
//   }
// }
