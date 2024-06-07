import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors : {
        accent: '#3F72AF',
        primary: '#F9F7F7',
        primary2: '#DBE2EF',
        secondary: '#112D4E',
        heading : "#1e1e2d",
        subheading : "#555555",
        darksubheading : "#c6c6c6",
      },
      dropShadow:{
        drone : '-30px 60px 5px rgba(0, 0, 0, 0.09)',

      },
      keyframes: {
        "spinText": {
          to: { transform: 'rotate(360deg)'}
        },
        "marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        "wobble":{
          '0%, 100%': { transform: 'translateY(-2%)' },
          '50%': { transform: 'translateY(0%)' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "spinText": 'spinText 30s linear infinite',
        "wobble"  : 'wobble 3s infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "marquee": "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config