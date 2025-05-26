/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode based on a class
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Paths to all template files
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
        background: '#FFFFFF', // hsl(0 0% 100%)
        foreground: '#000000', // hsl(0 0% 0%)
        card: '#FFFFFF',       // hsl(0 0% 100%)
        'card-foreground': '#000000', // hsl(0 0% 0%)
        popover: '#FFFFFF',    // hsl(0 0% 100%)
        'popover-foreground': '#000000', // hsl(0 0% 0%)
        primary: '#2A7779',    // hsl(181 48% 32%) - Brand Primary
        'primary-foreground': '#FFFFFF', // hsl(0 0% 100%)
        secondary: '#234574',  // hsl(216 53% 30%) - Brand Secondary
        'secondary-foreground': '#FFFFFF', // hsl(0 0% 100%)
        muted: '#F3F6F9',      // hsl(210 20% 96%) - Accent BG
        'muted-foreground': '#666666', // hsl(0 0% 40%)
        accent: '#5A1738',     // hsl(337 61% 22%) - Brand Tertiary
        'accent-foreground': '#FFFFFF', // hsl(0 0% 100%)
        destructive: '#FF3B30', // hsl(0 84.2% 60.2%)
        'destructive-foreground': '#FFFFFF', // hsl(0 0% 100%)
        border: '#DEDEDE',     // hsl(0 0% 87%)
        input: '#F2F2F2',      // hsl(0 0% 95%)
        ring: '#2A7779',       // hsl(181 48% 32%) - Primary brand color for ring

        // Custom Brand Colors (can be aliases or additions)
        'brand-primary': '#2A7779',
        'brand-secondary': '#234574',
        'brand-tertiary': '#5A1738',
        'accent-bg': '#F3F6F9',        // Example: Light Gray-Blue
        'accent-light': '#FFFFFF',     // Example: White
        'accent-off-white': '#FBF9F8', // Example: Very light, almost white
        'brand-light-gray-accent': '#E0E7EF', // From a border color seen in a component
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
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
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
