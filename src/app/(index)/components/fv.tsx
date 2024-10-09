"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const dataStats = [
  {
    text: "Average block time",
    value: "3.002s",
  },
  {
    text: "Completed txs",
    value: "7.028M",
  },
  {
    text: "Number of deployed contracts today",
    value: "7.028M",
  },
  {
    text: "Total accounts",
    value: "11.481K",
  },
  {
    text: "Total addresses",
    value: "29.195K",
  },
  {
    text: "Total blocks",
    value: "20.231M",
  },
  {
    text: "Total contracts",
    value: "7.028M",
  },
  {
    text: "Total DIV transfers",
    value: "6.803M",
  },
  {
    text: "Total tokens",
    value: "2.963K",
  },
  {
    text: "Total txs",
    value: "7.034M",
  },
];

const FV = () => {
  const ref = useScrollAnimations();
  return (
    <section
      ref={ref}
      className="relative px-5 flex flex-col items-center justify-center pt-[180px] z-10"
    >
      <div className="fade-up [filter:drop-shadow(0px_6px_50px_rgba(1,_0,_69,_0.20))]">
        <img
          className="max-md:w-[160px]"
          src="/assets/images/fv-logo.png"
          alt=""
        />
      </div>
      <div className="fade-up relative text-center md:text-[128px] text-[45px] font-bold leading-none [text-shadow:2px_4px_4px_#18539E] mt-8">
        <h3 className="opacity-0">
          DIVER <br />
          Time Network
        </h3>
        <p id="ui" className="absolute inset-0 top-1/2">
          {[...Array(26)].map((_, index) => (
            <span className="text-water" key={index}>
              DIVER <br />
              Time Network
            </span>
          ))}
        </p>
      </div>
      <p className="fade-up text-center md:text-[48px] text-[24px] leading-none [text-shadow:2px_4px_4px_#18539E] max-md:mt-7 mb-9">
        - Dive into a world created by free -
      </p>
      <p className="fade-up text-center md:text-[24px] text-[18px] leading-none [text-shadow:2px_4px_4px_#18539E] mb-9">
        The world's only blockchain with completely free transaction costs.
      </p>
      <a
        href="/"
        className="fade-up md:px-[90px] md:py-[25px] px-10 py-3 bg-[#005FD7] rounded-[80px] [box-shadow:-3px_-4px_20px_0px_rgba(255,_255,_255,_0.15)_inset,_4px_22px_50px_0px_rgba(24,_83,_158,_0.80)] text-white/90 font-bold md:text-[36px] text-[24px] [text-shadow:1px_1px_1px_rgba(0,_0,_0,_0.25)] font-poppins"
      >
        Learn DIVER
      </a>
      <p className="fade-up text-center md:text-[48px] text-[24px] font-bold mt-[90px] tracking-wide">
        A new economic sphere pioneered by DIVER
      </p>
      <p className="fade-up text-center text-[20px] md:text-[32px] flex items-center gap-2 tracking-wide">
        <span>-</span>Free, Fast, Efficient, and Secure<span>-</span>
      </p>

      <div className="w-full max-w-[960px] mx-auto mt-[70px]">
        <p className="fade-up text-center md:text-[28px] text-[20px] tracking-wider">
          Astounding growth brought by innovative trading environment
        </p>
        <div className="md:mt-10 mt-6">
          <figure className="fade-up">
            <img
              className="drop-shadow-[10px_10px_70px_0px_rgba(10,_20,_57,_0.40)]"
              src="/assets/images/img-chart.png"
              alt=""
            />
          </figure>
          <div className="fade-up flex max-md:flex-col gap-5 md:mt-[50px] mt-8">
            <figure>
              <img
                className="drop-shadow-[10px_10px_70px_0px_rgba(10,_20,_57,_0.40)]"
                src="/assets/images/img-chart-02.png"
                alt=""
              />
            </figure>
            <figure>
              <img
                className="drop-shadow-[10px_10px_70px_0px_rgba(10,_20,_57,_0.40)]"
                src="/assets/images/img-chart-03.png"
                alt=""
              />
            </figure>
          </div>
        </div>
        <div className="md:mt-[130px] mt-[70px]">
          <p className="fade-up text-center md:text-[28px] text-[20px] tracking-wider md:mb-10 mb-6">
            DIVER Network&apos;s Prowess
          </p>
          <div className="fade-up bg-white rounded-[24px] [box-shadow:10px_10px_70px_0px_rgba(10,_20,_57,_0.40)] p-5">
            <div className="font-poppins md:text-[16px] text-[14px] text-black/90 font-semibold px-2 pt-2.5 pb-0">
              DIVER Stats
            </div>
            <div className="flex items-center gap-1">
              <span className="w-7 h-[3px] bg-[#2A5298]"></span>
              <span className="flex-1 h-px bg-[#468CC8]"></span>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-2.5 gap-y-[15px] font-inter mt-4 pb-[18px]">
              {dataStats.map((item, index) => (
                <div
                  className="h-[56px] pl-5 pr-2.5 bg-[#F4F9FF] border border-[#53A1D8] rounded-[10px] flex items-center"
                  key={index}
                >
                  <div className="flex-1">
                    <p className="text-[12px] text-[#7E7E7E] font-medium">
                      {item.text}
                    </p>
                    <p className="text-[20px] text-[#005FD7] font-semibold">
                      {item.value}
                    </p>
                  </div>
                  <div className="">
                    <img src="/assets/images/ic-info.svg" alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FV;
