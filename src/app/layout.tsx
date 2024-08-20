import type { Metadata } from "next";
import { M_PLUS_1p } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const mplus = M_PLUS_1p({
  weight: ["400", "500", "700", "800", "900"],
  subsets: ["latin"],
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
        className={`${mplus.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
