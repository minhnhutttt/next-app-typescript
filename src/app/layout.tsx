import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Menu from "./components/menu";
import BackgroundWave from "./components/backgroundWave";
import Ardrex from "./components/ardrex";


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
      <body>
        <Header />
        <div className="fixed inset-0 z-0">
          <BackgroundWave />
        </div>
        <div className="fixed z-10 left-3 md:left-5 bg-[linear-gradient(180deg,_#F44343_0%,_#FF8719_37.5%,_#FFE819_75%)] w-1 md:w-[5px] h-full top-0 bottom-0"></div>
        {children}
        <Menu />
        <Ardrex />
        <Footer />
        </body>
    </html>
  );
}
