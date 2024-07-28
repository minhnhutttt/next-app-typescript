import type { Metadata } from "next";
import { Noto_Serif_JP, M_PLUS_1p, Roboto} from "next/font/google";
import "./globals.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollContainer from "@/components/scrollContainer";

const serif = Noto_Serif_JP({
  weight: ['700','900'],
  subsets: ["latin"],
  variable: "--font-serif",
});
const mplus = M_PLUS_1p({
  weight: ['400','500','700','800','900'],
  subsets: ["latin"],
  variable: "--font-mplus",
});
const roboto = Roboto({
  weight: ['400','500','700'],
  subsets: ["latin"],
  variable: "--font-roboto",
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
        className={`${mplus.className} ${serif.variable} ${roboto.variable} bg-[#FFE8EC] font-medium overflow-x-hidden`}
      >
        <ScrollContainer>
          <Header />
          {children}
          <Footer />
        </ScrollContainer>
      </body>
    </html>
  );
}
