import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New,  Inter } from "next/font/google";
import "./globals.scss";
import ScrollContainer from "@/components/scrollContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const zen = Zen_Kaku_Gothic_New({ 
  weight: ['300','400','500','700','900'],
  subsets: ["latin"]
 });

 const inter = Inter({ 
  weight: ['300','400','500','700'],
  subsets: ["latin"],
  variable: '--font-inter'
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
      <body className={`${zen.className} ${inter.variable} bg-[#010101]`}>
        <ScrollContainer>
            <Header />
            {children}
            <Footer />
        </ScrollContainer>
        </body>
    </html>
  );
}
