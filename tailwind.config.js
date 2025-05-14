/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: 'var(--padding-container-mobile)',
        sm: 'var(--padding-container-mobile)',
        md: 'var(--padding-container-desktop)',
        lg: 'var(--padding-container-desktop)',
        xl: 'var(--padding-container-desktop)',
        '2xl': 'var(--padding-container-desktop)',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        "2xl": "1250px",
      },
    },
    extend: {
      colors: {
        brand: {
          black: 'var(--color-black)',
          white: 'var(--color-white)',
          offWhite: 'var(--color-off-white)',
          lightGray: 'var(--color-light-gray)',
          primaryAccent: 'var(--color-primary-accent)',
          secondaryAccent: 'var(--color-secondary-accent)',
          tertiaryAccent: 'var(--color-tertiary-accent)',
          success: 'var(--color-success)',
          warning: 'var(--color-warning)',
          error: 'var(--color-error)',
          info: 'var(--color-info)',
          softBlue: 'var(--color-soft-blue)',
          softPurple: 'var(--color-soft-purple)',
          softGreen: 'var(--color-soft-green)',
          softAmber: 'var(--color-soft-amber)',
          softRed: 'var(--color-soft-red)',
          softTeal: 'var(--color-soft-teal)',
        },
        border: 'var(--color-light-gray)',
        input: 'var(--color-light-gray)',
        ring: 'var(--color-primary-accent)',
        background: 'var(--color-off-white)',
        foreground: 'var(--color-black)',
        primary: {
          DEFAULT: 'var(--color-primary-accent)',
          foreground: 'var(--color-white)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary-accent)',
          foreground: 'var(--color-white)',
        },
        destructive: {
          DEFAULT: 'var(--color-error)',
          foreground: 'var(--color-white)',
        },
        muted: {
          DEFAULT: 'var(--color-light-gray)',
          foreground: 'var(--color-black)',
        },
        accent: {
          DEFAULT: 'var(--color-primary-accent)',
          foreground: 'var(--color-white)',
        },
        popover: {
          DEFAULT: 'var(--color-white)',
          foreground: 'var(--color-black)',
        },
        card: {
          DEFAULT: 'var(--color-white)',
          foreground: 'var(--color-black)',
        },
        success: {
          DEFAULT: 'var(--color-success)',
          foreground: 'var(--color-white)',
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          foreground: 'var(--color-black)',
        },
        info: {
          DEFAULT: 'var(--color-info)',
          foreground: 'var(--color-white)',
        },
      },
      fontFamily: {
        sans: ['var(--font-figtree)', 'sans-serif'],
      },
      fontSize: {
        'h1-mobile': ['36px', { lineHeight: '1.15', fontWeight: '600' }],
        'h1-desktop': ['50px', { lineHeight: '1.15', fontWeight: '600' }],
        'h2-mobile': ['28px', { lineHeight: '1.25', fontWeight: '500' }],
        'h2-desktop': ['35px', { lineHeight: '1.25', fontWeight: '500' }],
        'subheading': ['24px', { lineHeight: '1.3', fontWeight: '500' }],
        'body-mobile': ['15px', { lineHeight: '1.55', fontWeight: '400' }],
        'body-desktop': ['17px', { lineHeight: '1.55', fontWeight: '400' }],
        'button': ['15.5px', { lineHeight: '1', fontWeight: '500' }],
      },
      lineHeight: {
        'tight-1': '1.15',
        'tight-2': '1.25',
        'body': '1.55',
      },
      spacing: {
        'section-desktop': 'var(--spacing-section-desktop)',
        'section-mobile': 'var(--spacing-section-mobile)',
        'element': 'var(--spacing-element)',
        'paragraph': 'var(--spacing-paragraph)',
        'card-padding': 'var(--padding-card)',
      },
      borderRadius: {
        DEFAULT: 'var(--rounded-corners-medium)',
        lg: 'var(--rounded-corners-medium)',
        md: 'var(--rounded-corners-medium)',
        sm: 'calc(var(--rounded-corners-medium) - 4px)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: '0' },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: '0' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 