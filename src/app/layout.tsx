import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Noto_Serif_JP} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const sans = Noto_Sans_JP({
  subsets: ["latin"],
});
const serif = Noto_Serif_JP({
  weight: ['300','400','500','600','700','900'],
  subsets: ["latin"],
  variable: "--font-serif",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
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
       <body
        className={`${sans.className} ${inter.variable} ${serif.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
