import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/menu";
import Header from "@/components/header";


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
      <body className="font-hiragino bg-[#F2F0E6] dark:bg-black">
        <div className="flex">
          <div className="flex sticky top-0 left-0 h-screen">
            <div className="w-10 md:w-11 flex items-center pl-2 md:pl-4 md:border-r border-[#989898] dark:border-white relative">
              <figure className="max-md:hidden dark:hidden">
                <img src="/assets/images/ardorex-blog-vertical.png" alt="" />
              </figure>
              <figure className="max-md:hidden hidden dark:block">
                <img src="/assets/images/ardorex-blog-vertical-dark.png" alt="" />
              </figure>
              <span className="w-[2px] md:hidden absolute right-0 h-full bg-[linear-gradient(40deg,_rgba(200,200,141,1)_0%,_rgba(175,34,227,1)_65%,_rgba(248,183,76,1)_100%)]"></span>
            </div>
          </div>
          <div className="flex max-md:flex-col">
            <div className="flex md:sticky top-0 left-0 md:h-screen">
              <Menu />
            </div>
            <Header />
            <div className="flex">
            <span className="w-[5px] max-md:hidden sticky top-0 left-0 h-screen bg-[linear-gradient(40deg,_rgba(200,200,141,1)_0%,_rgba(175,34,227,1)_65%,_rgba(248,183,76,1)_100%)]"></span>
            <div className="flex-1 mt-12">
              {children}
            </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
