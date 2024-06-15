"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Monitor = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="overflow-hidden pt-14 md:pt-[100px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="fade-up w-full max-w-[996px] mx-auto flex items-center gap-3 md:gap-10 px-5">
          <span className="flex-1 h-px gradient-03"></span>
          <span className="md:text-[24px] text-[18px] text-gradient-01 text-center">
            ご縁があって今このページを
            <br className="md:hidden" />
            ご覧いただいているあなた様に贈る
          </span>
          <span className="flex-1 h-px gradient-03"></span>
        </div>
        <h4 className="fade-up text-center lg:text-[48px] md:text-[32px] text-[24px] font-medium mt-5 leading-[1.7]">
          『メタでペット供養』メモリアルモニター <br />
          <span className="fade-up bg-[linear-gradient(to_top,_#8EC5FC_30%,_transparent_30%)] tracking-[0.25em]">
            期間限定ご案内
          </span>
        </h4>

        <div className="flex items-center md:gap-[56px] gap-[32px] md:mt-14 mt-8 max-md:flex-col">
          <figure className="fade-up md:w-[53.75%]">
            <img src="/assets/images/img-monitor.png" alt="" />
          </figure>
          <div className="fade-up md:text-[20px] text-[16px] font-medium flex-1 max-md:pl-5 pr-5">
            <p className="max-w-[500px]">
              愛するペットとの絆を新たなカタチで紡ぎなおしたいとあなた様が願うなら、
              <br />
              <br />
              <span className="text-gradient-01 md:text-[32px] text-[20px]">
                今こそ、その一歩を踏み出すとき
              </span>
              <br />
              <br />
              です。
              <br />
              <br />
              私たちは、あなた様のその想いに真摯に寄り添うことをお約束します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Monitor;
