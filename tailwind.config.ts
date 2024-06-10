import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        accentGreen: {
          DEFAULT: 'hsl(var(--accent-green))',
          foreground: 'hsl(var(--accent-green-foreground))',
        },
        accentOrange: {
          DEFAULT: 'hsl(var(--accent-orange))',
          foreground: 'hsl(var(--accent-orange-foreground))',
        },
        neutral: {
          background: 'hsl(var(--neutral-background))',
          foreground: 'hsl(var(--neutral-foreground))',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
