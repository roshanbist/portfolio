import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ['1.4rem', '1.8rem'],
        base: ['1.6rem', '2.4rem'],
        lg: ['2rem', '2.8rem'],
        xl: ['2.4rem', '3rem'],
        '2xl': ['3rem', '3.5rem'],
        '3xl': ['4.8rem', '5.8rem'],
        '4xl': ['9.6rem', '10.6rem'],
      },
      fontFamily: {
        robotoCondensed: ['var(--font-robotoCondensed)'],
        pacifico: ['var(--font-pacifico)'],
        oxygen: ['var(--font-oxygen)'],
      },
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          hover: 'hsl(var(--primary-hover))',
        },
        banner: 'hsl(var(--banner))',
        heading: 'hsl(var(--heading))',
        footer: 'hsl(var(--footer))',
        section: {
          primary: 'hsl(var(--section-primary))',
          secondary: 'hsl(var(--section-secondary))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
        },
        link: {
          DEFAULT: 'hsl(var(--link))',
        },
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      boxShadow: {
        sm: '0rem 0.4rem 0.8rem 0rem rgba(0,0,0,0.05)',
        md: '0 0 2.1rem rgba(0, 0, 0, .3)',
      },
      backgroundImage: {
        avatar1: "url('../assets/images/avatar1.jpg')",
        avatar2: "url('../assets/images/avatar2.jpeg')",
        parallaxImage: "url('../assets/images/stoneStack.jpg')",
        noise: "url('../assets/images/noise.png')",
      },
      keyframes: {
        slideFullWidth: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        morph: {
          '0%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '50%': {
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
          '100%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
        },
      },
      animation: {
        slideFullWidth: 'slideFullWidth 0.7s ease-in-out',
        morph: 'morph 8s ease-in-out infinite 1s',
      },
    },
  },
  plugins: [],
  darkMode: ['class'],
};
export default config;
