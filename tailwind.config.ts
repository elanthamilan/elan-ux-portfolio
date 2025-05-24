import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{ts,tsx}",
		"./src/components/**/*.{ts,tsx}",
		"./src/app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
    	container: {
    		center: true,
    		padding: '2rem',
    		screens: {
          xs: '420px', // Added custom xs breakpoint
    			sm: '640px',
    			md: '768px',
    			lg: '1024px',
    			xl: '1280px',
    			'2xl': '1400px'
    		}
    	},
    	extend: {
    		fontFamily: {
    			sans: [
    				'DM Sans',
    				'sans-serif'
    			],
    			heading: [
    				'DM Serif Text',
    				'serif'
    			],
    			mono: [
    				'IBM Plex Mono',
    				'monospace'
    			]
    		},
    		colors: {
    			// Removed duplicate border, input, ring definitions
    			border: 'hsl(var(--border))', 
    			input: 'hsl(var(--input))', 
    			ring: 'hsl(var(--ring))', 
    			background: '#FFFFFF', // New explicit background
    			foreground: '#000000', // New explicit foreground
    			brand: {
    				primary: '#2A7779',
    				secondary: '#234574',
    				tertiary: '#5A1738',
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))', // Keep existing hsl variable
    				foreground: 'hsl(var(--accent-foreground))', // Keep existing hsl variable
    				bg: '#F3F6F9',
    				light: '#F2F8F7',
    				'off-white': '#F8F4F2',
    			},
    			primary: { // Keep existing primary but ensure DEFAULT is hsl for compatibility if used elsewhere
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))',
    				'case-study-1': '#156152', // Specific case study colors, can remain or be refactored
    				'case-study-2': '#16325A',
    				'enterprise-ux-designer': '#16325A'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			// accent definition is moved up and merged
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))',
    				'case-study-1': '#F2F8F7',
    				'case-study-2': '#F3F6F9'
    			},
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			},
    			// Removed mesh-gradient colors as they are not part of the new palette.
    			// If they are needed for specific components, they can be re-added or refactored.
    			// 'mesh-gradient-start': '#F0F0F0',
    			// 'mesh-gradient-middle': '#FAFAFA',
    			// 'mesh-gradient-end': '#FFFFFF',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0',
              opacity: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)',
              opacity: '1'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)',
              opacity: '1'
    				},
    				to: {
    					height: '0',
              opacity: '0'
    				}
    			},
    			blink: {
    				'0%, 100%': {
    					opacity: '1'
    				},
    				'50%': {
    					opacity: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			blink: 'blink 1s step-end infinite'
    		}
    	}
    },
	plugins: [require('tailwindcss-animate')],
} satisfies Config;
