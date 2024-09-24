import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const noto = Noto_Sans({ subsets: ["latin"] });

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
      <body className={noto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
