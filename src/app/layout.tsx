import type { Metadata } from 'next';
import { Zen_Kaku_Gothic_New, Inter } from 'next/font/google';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import './globals.css';

import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION, OG, TWITTER } from '@/config/constants';

const zen = Zen_Kaku_Gothic_New({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL ?? 'http://localhost:3000'),
  icons: [
    { rel: 'icon', url: '/assets/images/logo.svg' },
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
      <body className={`${zen.className} ${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
