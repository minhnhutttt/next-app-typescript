"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";


const Partner = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative">
        <div className="w-full h-[400px] bg-[url('/assets/images/bg-partner.png')] bg-cover bg-center flex items-center justify-center px-5">
          <div className="relative">
              <p className="text-center absolute inset-0 text-[28px] font-black tracking-widest text-white [-webkit-text-stroke:_6px_white] md:text-[54px] leading-[1.9]">
              販売エージェントパートナー募集中！
              </p>
              <h3 className="text-center relative text-[28px] font-black tracking-widest md:text-[54px] text-[#00053A] leading-[1.9]">
                販売エージェントパートナー募集中！
              </h3>
          </div>
        </div>
        <div className="w-full max-w-[1440px] mx-auto relative">
          <span className="absolute top-0 left-0 max-dt:w-[19.653vw]">
            <img src="/assets/images/img-partner-01.png" alt="" />
          </span>
          <span className="absolute max-dt:w-[17.083vw] top-[3.75vw] dt:top-[54px] right-[3.75vw] dt:right-[54px]">
            <img src="/assets/images/img-partner-02.png" alt="" />
          </span>
          <span className="absolute max-dt:w-[27.778vw] bottom-[2.639vw] dt:bottom-[38px] left-[8.75vw] dt:left-[126px]">
            <img src="/assets/images/img-partner-03.png" alt="" />
          </span>
          <span className="absolute max-dt:w-[21.111vw] bottom-0 right-[7.083vw] dt:right-[102px]">
            <img src="/assets/images/img-partner-04.png" alt="" />
          </span>
          <div className="w-full max-w-[1075px] mx-auto md:py-[150px] py-[100px] space-y-9">
            <div className="fade-up flex justify-center items-center md:min-h-[105px] pl-7 md:pl-[75px]">
              <div className="relative">
                <div className="absolute -top-1.5 md:top-[-25px] -left-5 md:-left-14">
                  <img className="max-md:w-10" src="/assets/images/ic-partner.png" alt="" />
                </div>
                <div className="relative">
                  <p className="absolute inset-0 text-[18px] font-black tracking-widest text-white [-webkit-text-stroke:_6px_white] md:text-[28px] leading-[1.9]">
                    DIVER AgentのパートナーになりDIVER Storageを販売しませんか？
                  </p>
                  <h3 className="relative text-[18px] font-black tracking-widest md:text-[28px] text-[#00053A] leading-[1.9]">
                    DIVER AgentのパートナーになりDIVER Storageを販売しませんか？
                  </h3>
                </div>
              </div>
            </div>
            <div className="fade-up flex justify-center items-center md:min-h-[105px] pl-7 md:pl-[75px]">
              <div className="relative">
                <div className="absolute -top-1.5 md:top-[-25px] -left-5 md:-left-14">
                  <img className="max-md:w-10" src="/assets/images/ic-partner.png" alt="" />
                </div>
                <div className="relative">
                  <p className="absolute inset-0 text-[18px] font-black tracking-widest text-white [-webkit-text-stroke:_6px_white] md:text-[28px] leading-[1.9]">
                  充実したサポート体制で、アフターフォローも万全です！
                  </p>
                  <h3 className="relative text-[18px] font-black tracking-widest md:text-[28px] text-[#00053A] leading-[1.9]">
                  充実したサポート体制で、アフターフォローも万全です！
                  </h3>
                </div>
              </div>
            </div>
            <div className="fade-up flex justify-center items-center md:min-h-[105px] pl-7 md:pl-[75px]">
              <div className="relative">
                <div className="absolute -top-1.5 md:top-[-25px] -left-5 md:-left-14">
                  <img className="max-md:w-10" src="/assets/images/ic-partner.png" alt="" />
                </div>
                <div className="relative">
                  <p className="absolute inset-0 text-[18px] font-black tracking-widest text-white [-webkit-text-stroke:_6px_white] md:text-[28px] leading-[1.9]">
                  定員になり次第、募集を締め切ります。
                  </p>
                  <h3 className="relative text-[18px] font-black tracking-widest md:text-[28px] text-[#00053A] leading-[1.9]">
                  定員になり次第、募集を締め切ります。
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Partner;
