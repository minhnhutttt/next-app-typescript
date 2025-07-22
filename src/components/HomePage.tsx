"use client"
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function HomePage({children}: {children: ReactNode}) {
  return (
    <div className="relative w-full overflow-clip bg-white mx-auto md:w-[640px]">
        <Header />
        {children}
        <Footer />
    </div>
  );
}
