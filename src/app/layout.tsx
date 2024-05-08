import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";


const noto = Noto_Serif_JP({
  weight: ['400','500','600'],
  subsets: ['latin'],
  variable: '--font-aldrich',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
