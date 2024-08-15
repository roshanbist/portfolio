import type { Metadata } from 'next';
import { Roboto_Condensed, Pacifico, Oxygen } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Theme provider
import ThemeProvider from '@/components/themeProvider/ThemeProvider';
// import Scroll from '@/util/Scroll';
import './globals.css';

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
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-oxygen',
});

export const metadata: Metadata = {
  title: 'Roshan Bist',
  description: 'Portfolio website using Next JS ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      {/* <Scroll /> */}
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
        <ToastContainer autoClose={2500} />
      </body>
    </html>
  );
}
