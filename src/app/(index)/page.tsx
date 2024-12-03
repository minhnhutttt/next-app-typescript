import Image from "next/image";
import Service from "./components/service";

export default function Home() {
  return (
    <main className="text-white">
      <div className="bg-black px-[2em]">
      <section className="pt-[1.7em]">
        <div className="w-full max-w-[58.75em] mx-auto py-[7em] flex flex-col items-center justify-center">
          <div className="border-2 border-white rounded-full flex items-center w-full mb-[1em] py-[0.25em] overflow-hidden">
            <div className="flex-none items-center flex overflow-hidden h-full animate-[marquee_20s_linear_infinite]">
              <img className="size-[5em] mx-[1.5em]" src="/assets/images/logo.svg" alt="" />
              <h1 className="text-[7em] uppercase font-bold">ABOUT SKALE</h1>
              <img className="size-[5em] mx-[1.5em]" src="/assets/images/logo.svg" alt="" />
              <h1 className="text-[7em] uppercase font-bold">ABOUT SKALE</h1>
            </div>
            <div className="flex-none items-center flex overflow-hidden h-full animate-[marquee_20s_linear_infinite]">
              <img className="size-[5em] mx-[1.5em]" src="/assets/images/logo.svg" alt="" />
              <h1 className="text-[7em] uppercase font-bold">ABOUT SKALE</h1>
              <img className="size-[5em] mx-[1.5em]" src="/assets/images/logo.svg" alt="" />
              <h1 className="text-[7em] uppercase font-bold">ABOUT SKALE</h1>
            </div>
          </div>
          <div className="mb-[1.5em]">
            <h1 className="text-[7em] font-bold text-center">
            答えをその手に。
            </h1>
          </div>
          <div className="max-w-[42em]">
            <p className="text-[1.5em] text-center">
            私たちは私たちの売りたいものを売りません。ビジネスの“限界”を“出発点”に変革するためにお客様に必要なものを提案します。
            </p>
          </div>
          <div className="mt-[2em]">
          <a href="/contact" className="button bg-white block leading-[1.3] uppercase text-[1em] py-[0.75em] px-[2em] rounded-full text-center text-black">Let’s Talk</a>
          </div>
        </div>
      </section>
      <Service />
      
      </div>
    </main>
  );
}
