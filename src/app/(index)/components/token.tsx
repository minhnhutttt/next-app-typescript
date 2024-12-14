import { ReactNode } from "react";

const Table = ({ left, right }: { left: string; right: ReactNode }) => (
  <div data-scroll className="fade-up grid grid-cols-2 text-white fade-up divide-x divide-white/40 text-center md:text-[18px] text-[14px] font-bold">
    <div className="bg-white/10 p-2 min-h-[88px] flex items-center justify-center text-center flex-col">
      {left}
    </div>
    <div className="p-2 min-h-[88px] flex items-center justify-center text-center flex-col">
      {right}
    </div>
  </div>
);
const Token = () => {
  return (
    <section className="relative md:pt-32 pt-20 z-10">
      <div className="w-full max-w-[1440px] mx-auto relative z-10 px-5">
        <h4 data-scroll className="fade-up flex justify-center items-center">
          <img src="/assets/images/ride-coin.svg" alt="RIDE COIN" />
        </h4>
      </div>
      <div className="md:-mt-[300px] -mt-[100px] bg-[linear-gradient(345deg,_#68000B_12.96%,_#CE0016_92.5%)]  [clip-path:polygon(0_0,_100%_80px,_100%_100%,_0_calc(100%-50px))] md:[clip-path:polygon(0_0,_100%_220px,_100%_100%,_0_calc(100%-160px))] md:pt-[150px] pt-[100px] md:pb-[240px] pb-[120px]">
        <div className="w-full max-w-[840px] mx-auto px-5">
          <div className="">
            <div
              data-scroll
              className="fade-up text-center flex justify-center md:text-[32px] text-[18px] font-black text-white md:mt-[165px] mt-24 tracking-widest md:leading-[2.5]"
            >
              Tokenomics = token economic policy
            </div>
            <div className="border border-white/40 divide-y divide-white/40 mt-9 md:mt-[60px]">
              <Table
                left="Total number of copies issued"
                right={<>40 million copies</>}
              />
              <Table left="Initial price" right={<>150 yen</>} />
            </div>
          </div>

          <div>
            <div
              data-scroll
              className="fade-up text-center flex justify-center items-center md:text-[24px] text-[18px] font-black text-white md:mt-[95px] mt-16 tracking-widest md:leading-[2.5] gap-10"
            >
                <span className="bg-white h-px w-[130px]"></span>
              Allocation ratio
              <span className=" bg-white h-px w-[130px]"></span>
            </div>
            <div className="border border-white/40 divide-y divide-white/40 mt-5">
              <Table
                left="Market circulation"
                right={<> 55% <br /><span className="font-normal">(22 million coins)</span></>}
              />
              <Table
                left="Development reserve"
                right={<>20% <br /><span className="font-normal">(8 million pieces)</span></>}
              />
              <Table
                left="Ecosystem development"
                right={<>15% <br /><span className="font-normal">(6 million pieces)</span></>}
              />
              <Table
                left="Strategic partnership"
                right={<>10% <br /><span className="font-normal">(4 million coins)</span></>}
              />
            </div>
          </div>

          <div>
            <div
              data-scroll
              className="fade-up text-center flex justify-center items-center md:text-[24px] text-[18px] font-black text-white md:mt-[95px] mt-16 tracking-widest md:leading-[2.5] gap-10"
            >
                <span className="bg-white h-px w-[130px]"></span>
                Lockup provisions
              <span className=" bg-white h-px w-[130px]"></span>
            </div>
            <div className="border border-white/40 divide-y divide-white/40 mt-5">
              <Table
                left="Development reserve fund"
                right={<> 4 years <br /><span className="font-normal">(25% released every year)</span></>}
              />
              <Table
                left="Ecosystem development"
                right={<> 2 years <br /><span className="font-normal">(25% released every six months)</span></>}
              />
              <Table
                left="Strategic partnership"
                right={<> 1 years <br /><span className="font-normal">(25% released quarterly)</span></>}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token;
