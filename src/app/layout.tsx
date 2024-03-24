import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const helvetica = localFont({
  src: './fonts/Helvetica-Bold.ttf',
  variable: '--font-helvetica',
  display: 'swap',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
