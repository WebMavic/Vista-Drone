import { url } from "inspector";
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
      backgroundImage :{
        'hero': "url('/hero-bg.jpg')",
      },
      colors : {
        accent: '#3F72AF',
        primary: '#F9F7F7',
        primary2: '#DBE2EF',
        secondary: '#112D4E',
        heading : "#1e1e2d",
        subheading : "#555555",
        darksubheading : "#c6c6c6",
      },

      

    },
  },
  plugins: [],
};
export default config;
