import type { Metadata } from "next";
import { Inter, Tomorrow, Audiowide } from "next/font/google";
import "./globals.scss";
import ScrollContainer from "@/components/scrollContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tomorrow = Tomorrow({ 
  weight: ['300','400','500','700','900'],
  subsets: ["latin"],
  variable: '--font-tomorrow'
 });

 const audiowide = Audiowide({ 
  weight: ['400'],
  subsets: ["latin"],
  variable: '--font-audiowide'
 });

 const inter = Inter({ 
  weight: ['300','400','500','700'],
  subsets: ["latin"],
 });

export const metadata: Metadata = {
  title: 'THE LETTER - メッセージ配信サービス',
  description: '男の言葉は、軽すぎる。本気の想いを"贈る"という体験で届けよう。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${tomorrow.variable} ${audiowide.variable} bg-[#010101]`}>
        <ScrollContainer>
            <Header />
            {children}
            <Footer />
        </ScrollContainer>
        </body>
    </html>
  );
}
