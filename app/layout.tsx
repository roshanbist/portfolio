import type { Metadata } from 'next';
import { Roboto_Condensed, Pacifico, Oxygen } from 'next/font/google';
// import { Pacifico } from 'next/font/google';

// Theme provider
import ThemeProvider from '@/components/themeProvider/ThemeProvider';
import './globals.css';
import Scroll from '@/util/Scroll';

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-robotoCondensed',
});

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-pacifico',
});

const oxygen = Oxygen({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-oxygen',
});

export const metadata: Metadata = {
  title: "Roshan's Portfolio",
  description: 'Portfolio website using Next JS ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <Scroll />
      <body
        className={`${robotoCondensed.variable} ${pacifico.variable} ${oxygen.variable} font-oxygen`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          // disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
