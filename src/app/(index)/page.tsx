"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";
import Fv from "./components/Fv";
import About from "./components/About";
import Token from "./components/Token";
import Utility from "./components/Utility";
import Mechanisms from "./components/Mechanisms";
import Roadmap from "./components/Roadmap";
import Disclaimer from "./components/Disclaimer";
export default function Home() {

  const ref = useScrollAnimations()
  return (
    <main ref={ref} className="">
        <Fv />
        <About />
        <Token />
        <Utility />
        <Mechanisms />
        <Roadmap />
        <Disclaimer />
        <div className="fade-up sticky bottom-6 md:bottom-10 inset-x-0 flex justify-center z-50">
            <a href="/" className="shiny-button w-[240px] h-14 md:w-[280px] md:h-[70px] flex items-center justify-center md:text-[24px] text-[18px] text-center bg-[radial-gradient(200.36%_122.36%_at_9.55%_0.65%,_#000_0%,_rgba(0,_0,_0,_0.27)_100%)] tracking-widest">WHITEPAPER</a>
        </div>
        <p className="fade-up w-full max-w-[713px] mx-auto md:text-[15px] text-[13px] font-poppins md:p-[30px] p-5 md:mt-[155px] mt-24 md:mb-[200px] mb-32">
          This page is for informational purposes only and does not constitute investment advice. Investing in cryptocurrencies involves high risks. Please make investment decisions at your own risk after reviewing detailed information.
        </p>
    </main>
  );
}
