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
        base: ['1.6rem', '2rem'],
        lg: ['2rem', '2.4rem'],
        xl: ['2.4rem', '2.9rem'],
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
        // input: 'hsl(var(--input))',
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
          // foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          // foreground: 'hsl(var(--destructive-foreground))',
        },
        ring: {
          DEFAULT: 'hsl(var(--ring))',
          // foreground: 'hsl(var(--ring-foreground))',
        },
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      boxShadow: {
        sm: '0rem 0.4rem 0.8rem 0rem rgba(0,0,0,0.05)',
      },
      backgroundImage: {
        avatarUrl: "url('../assets/images/avatar1.jpg')",
        noise: "url('../assets/images/noise.png')",
      },
    },
  },
  plugins: [],
  darkMode: ['class'],
};
export default config;
