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
      backgroundColor : {
        heroGradient : 'bg-gradient-to-r from-slate-900 to-slate-700'
      },
      colors : {
        accent: '#ED7D31',
        base: '#F6F1EE',
        dark : '#4F4A45',
        heading : "#1e1e2d"
      }
    },
  },
  plugins: [],
};
export default config;
