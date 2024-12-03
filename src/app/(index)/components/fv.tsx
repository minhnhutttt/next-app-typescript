"use client";
const FV = () => {
  return (
      <section className="pt-[1.7em]">
        <div className="w-full md:max-w-[58.75em] mx-auto py-[4em] md:py-[7em] flex flex-col items-center justify-center">
          <div className="border-2 border-white dark:border-black rounded-full flex items-center w-full mb-[1em] py-[0.25em] overflow-hidden leading-none">
            <div className="flex-none items-center flex overflow-hidden h-full animate-[marquee_20s_linear_infinite]">
              <img className="lg:size-[5em] size-[2.4em] md:size-[3em] mx-[1.5em]" src="/assets/images/logo.svg" alt="" />
              <h1 className="text-[2em] md:text-[5em] uppercase font-bold">ABOUT SKALE</h1>
              <img className="lg:size-[5em] size-[2.4em] md:size-[3em] mx-[1.5em]" src="/assets/images/logo.svg" alt="" />
              <h1 className="text-[2em] md:text-[5em] uppercase font-bold">ABOUT SKALE</h1>
            </div>
            <div className="flex-none items-center flex overflow-hidden h-full animate-[marquee_20s_linear_infinite]">
              <img className="lg:size-[5em] size-[2.4em] md:size-[3em] mx-[1.5em]" src="/assets/images/logo.svg" alt="" />
              <h1 className="text-[2em] md:text-[5em] uppercase font-bold">ABOUT SKALE</h1>
              <img className="lg:size-[5em] size-[2.4em] md:size-[3em] mx-[1.5em]" src="/assets/images/logo.svg" alt="" />
              <h1 className="text-[2em] md:text-[5em] uppercase font-bold">ABOUT SKALE</h1>
            </div>
          </div>
          <div className="mb-[1.5em]">
            <h1 className="text-[1.5em] md:text-[5em] font-bold text-center">
            答えをその手に。
            </h1>
          </div>
          <div className="max-w-[42em]">
            <p className="text-[0.7em] md:text-[1.2em] text-center">
            私たちは<br />私たちの売りたいものを売りません。<br />ビジネスの“限界”を“出発点”に変革するために<br />お客様に必要なものを提案します。
            </p>
          </div>
          <div className="mt-[2em]">
          <a href="/contact" className="shake bg-white dark:border-black block leading-[1.3] font-bold uppercase text-[1em] md:py-[0.75em] py-[0.5em] md:px-[2em] px-[1em] rounded-full text-center text-black dark:text-white dark:bg-black">Let’s Talk</a>
          </div>
        </div>
      </section>
  );
};

export default FV;
