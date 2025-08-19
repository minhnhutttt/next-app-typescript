import type { Metadata } from 'next';
import { Noto_Sans_JP, Hind, Inter, Arimo } from 'next/font/google';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import './globals.css';

import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION, OG, TWITTER } from '@/config/constants';

const noto = Noto_Sans_JP({
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const arimo = Arimo({
  variable: '--font-arimo',
  subsets: ['latin'],
});

const hind = Hind({
  weight: ['400', '500', '600', '700'],
  variable: '--font-hind',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL ?? 'http://localhost:3000'),
  icons: [
    { rel: 'icon', url: '/assets/images/favicon.png' },
    { rel: 'apple-touch-icon', url: '/assets/images/apple-touch-icon.png' },
  ],
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    ...OG,
  },
  twitter: {
    ...TWITTER,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto.className} ${inter.variable} ${hind.variable} ${arimo.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
