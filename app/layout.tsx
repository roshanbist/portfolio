import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

// Theme provider
import ThemeProvider from '@/components/themeProvider/ThemeProvider';
import './globals.css';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });

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
      <body className={roboto.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
