import type { Metadata } from "next";
import { Noto_Sans_TC, Anton, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const noto = Noto_Sans_TC({ subsets: ["latin"] });
const anton = Anton({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-anton",
});

const sans = Noto_Sans_JP({
  weight: ["400", '500', '700'],
  subsets: ["latin"],
  variable: "--font-sans",
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
      <body className={`${noto.className} ${anton.variable} ${sans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
