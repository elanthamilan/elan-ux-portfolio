
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Light Mode & Base Colors (Shadcn UI compatible names)
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        popover: 'hsl(var(--popover))',
        'popover-foreground': 'hsl(var(--popover-foreground))',

        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',

        secondary: 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',

        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',

        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',

        destructive: 'hsl(var(--destructive))',
        'destructive-foreground': 'hsl(var(--destructive-foreground))',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        // Your specific brand colors
        'brand-primary': '#171717', // Primary button and text
        'brand-secondary': '#14B789', // Secondary button and text
        'brand-tertiary': '#10b981', // Keep existing tertiary
        'accent-bg': '#f0fdf4', // Keep existing light green background
        'accent-light': '#FFFFFF',
        'accent-off-white': '#f9fafb',
        'brand-light-gray-accent': '#f3f4f6',
        
        // Case study card colors
        'case-study-1': '#F6F9F9',
        'case-study-2': '#D9F4D7', 
        'case-study-3': '#EDE1FF',
        
        // Contact section
        'contact-bg': '#C9FFC5',
        
        // Additional green theme colors
        'green-primary': '#14B789', // Updated to match secondary
        'green-secondary': '#16a34a',
        'green-light': '#bbf7d0',
        'green-lighter': '#dcfce7',
        'purple-primary': '#8b5cf6',
        'purple-secondary': '#7c3aed',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        heading: ['DM Serif Text', 'serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
};
