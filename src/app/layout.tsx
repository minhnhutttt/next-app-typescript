import type { Metadata } from "next";
import { League_Spartan, Poppins } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";

const lagueSpartan = League_Spartan({
  weight: ["400", "500", "700", "800", "900"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins"
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
        className={`${lagueSpartan.className} ${poppins.variable} bg-main bg-[linear-gradient(145deg,_#5F93FF_33.61%,_#0B3FAD_79.25%)]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
