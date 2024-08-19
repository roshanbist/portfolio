import type { Metadata } from 'next';
import { Roboto_Condensed, Pacifico, Oxygen } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Theme provider
import ThemeProvider from '@/components/themeProvider/ThemeProvider';
import './globals.css';
import Preloader from '@/components/preloader/Preloader';

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
  description: 'Portfolio using Next JS ',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${robotoCondensed.variable} ${pacifico.variable} ${oxygen.variable} font-oxygen`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Preloader />
          {children}
        </ThemeProvider>
        <ToastContainer autoClose={2500} />
      </body>
    </html>
  );
}
