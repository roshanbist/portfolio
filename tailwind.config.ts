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
        sm: ['14px', '20px'],
        base: ['16px', '20px'],
        lg: ['20px', '24px'],
        xl: ['24px', '29px'],
        '2xl': ['30px', '35px'],
        '3xl': ['48px', '58px'],
        '4xl': ['96px', '106px'],
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        pacifico: ['var(--font-pacifico)'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        ring: {
          DEFAULT: 'hsl(var(--ring))',
          foreground: 'hsl(var(--ring-foreground))',
        },
      },
    },
  },
  plugins: [],
  darkMode: ['class'],
};
export default config;
