import type { Config } from "tailwindcss";
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			accent: '#7B4521',
  			primary: '#74512D',
  			primary2: '#FFF9F2',
  			secondary: '#112D4E',
  			heading: '#272829',
  			body: '#EEEEEE',
  			subheading: '#555555',
  			darksubheading: '#73512C'
  		},
  		dropShadow: {
  			drone: '-30px 60px 5px rgba(0, 0, 0, 0.09)'
  		},
  		keyframes: {
  			spinText: {
  				to: {
  					transform: 'rotate(360deg)'
  				}
  			},
			fade : {
				from: {
					opacity:'0',
					transform: 'translateY(50)'
				},
				to: {
					opacity: '1',
					transform : 'translateY(0)'
				}
			},
  			rotateLeftandRight: {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(10deg)'
  				}
  			},
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
  			wobble: {
  				'0%, 100%': {
  					transform: 'translateY(-2%)'
  				},
  				'50%': {
  					transform: 'translateY(0%)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
			
  		},
  		animation: {
  			spinText: 'spinText 30s linear infinite',
  			rotateLeftandRight: 'rotateLeftandRight 0.2s  infinite',
  			wobble: 'wobble 3s infinite',
			"fade" : 'fade 1s ease-in-out 0.5s forwards',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			marquee: 'marquee var(--duration) linear infinite',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
  		},
  		backgroundImage: {
  			footer: 'url(https://images.unsplash.com/photo-1514043133987-e4801c95b2c8?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
