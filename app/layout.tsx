import type { Metadata } from 'next';
import { Roboto, Pacifico } from 'next/font/google';
// import { Pacifico } from 'next/font/google';

// Theme provider
import ThemeProvider from '@/components/themeProvider/ThemeProvider';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-pacifico',
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
      <body className={`${roboto.variable} ${pacifico.variable} font-roboto`}>
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
