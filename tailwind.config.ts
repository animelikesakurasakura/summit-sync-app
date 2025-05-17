
import type { Config } from "tailwindcss";

export default {
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
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#3A76F0',
					foreground: '#FFFFFF',
					100: '#E8F0FE',
					200: '#BDD2FD',
					300: '#91B3FB',
					400: '#6694F8',
					500: '#3A76F0',
					600: '#1C5BDF',
					700: '#144AC3',
					800: '#0D3AA6',
					900: '#092A81',
				},
				secondary: {
					DEFAULT: '#6C63FF',
					foreground: '#FFFFFF',
					100: '#EEEEFF',
					200: '#D4D1FF',
					300: '#B9B5FF',
					400: '#9F98FF',
					500: '#6C63FF',
					600: '#4A40FF',
					700: '#2D22FF',
					800: '#1005FF',
					900: '#0800CF',
				},
				accent: {
					DEFAULT: '#00B8D4',
					foreground: '#FFFFFF',
					100: '#E0F7FA',
					200: '#B2EBF2',
					300: '#80DEEA',
					400: '#4DD0E1',
					500: '#00B8D4',
					600: '#00ACC1',
					700: '#0097A7',
					800: '#00838F',
					900: '#006064',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
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
				'fade-in': {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				'pulse-light': {
					"0%, 100%": {
						opacity: "1"
					},
					"50%": {
						opacity: "0.8"
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'pulse-light': 'pulse-light 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
