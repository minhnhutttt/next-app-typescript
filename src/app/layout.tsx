import type { Metadata } from 'next';
import { Audiowide, Inter, Tomorrow } from 'next/font/google';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import './globals.css';
import '@/styles/styles.scss';

import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION, OG, TWITTER } from '@/config/constants';

const audiowide = Audiowide({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-audiowide',
});

const tomorrow = Tomorrow({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-tomorrow',
});

const inter = Inter({
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
      <body className={`${inter.className} ${audiowide.variable} ${tomorrow.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
