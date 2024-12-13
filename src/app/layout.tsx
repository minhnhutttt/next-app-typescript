import type { Metadata } from "next";
import { Orbitron} from "next/font/google";
import "./globals.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollContainer from "@/components/scrollContainer";
import SmoothScroll from "@/components/smoothSCroll";



const orbitron = Orbitron({
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
        className={`${orbitron.className} bg-[#FFFEEA]`}
      >
        <ScrollContainer>
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
          </SmoothScroll>
        </ScrollContainer>
      </body>
    </html>
  );
}
