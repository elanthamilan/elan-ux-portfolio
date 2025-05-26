/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        // Using pre-validated/adjusted colors for AAA where critical
        background: '#FFFFFF',
        foreground: '#000000',
        card: '#FFFFFF',
        'card-foreground': '#000000',
        popover: '#FFFFFF',
        'popover-foreground': '#000000',
        
        primary: '#1B4B4C', // AAA-compliant (formerly #2A7779)
        'primary-foreground': '#FFFFFF',
        
        secondary: '#0F1D30', // AAA-compliant (formerly #234574)
        'secondary-foreground': '#FFFFFF',
        
        muted: '#F3F6F9',
        'muted-foreground': '#4D4D4D', // AAA-compliant for white bg (formerly #666666)
        
        accent: '#5A1738', // Original - Check for AAA if used with light fg
        'accent-foreground': '#FFFFFF', // Passes on #5A1738 for large text, fails for normal.
                                        // Consider darkening accent or using a lighter accent-foreground if normal text is used.
                                        // For now, keeping as per previous findings for buttons/large text.
        
        destructive: '#FF3B30', // Approx from HSL, standard red
        'destructive-foreground': '#FFFFFF',
        
        border: '#DEDEDE',
        input: '#F2F2F2',
        ring: '#1B4B4C',       // AAA-compliant (aligned with new primary)

        // Custom Brand Colors (aliases or specific shades)
        // Ensure these are also AAA compliant where used text-on-background
        'brand-primary': '#1B4B4C',    // AAA-compliant
        'brand-secondary': '#0F1D30',  // AAA-compliant
        'brand-tertiary': '#5A1738',   // Passes for large text on white FG. Use with caution for normal text.
        'accent-bg': '#F3F6F9',
        'accent-light': '#FFFFFF',
        'accent-off-white': '#FBF9F8',
        'brand-light-gray-accent': '#E0E7EF',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        heading: ['DM Serif Text', 'serif'],
      },
      borderRadius: {
        lg: 'var(--radius)', // Assuming --radius will be 0.5rem from global styles or Shadcn setup
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
